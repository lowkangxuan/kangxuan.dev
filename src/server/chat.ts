import { createServerFn } from "@tanstack/react-start";
import * as z from "zod";

const MessageSchema = z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string().min(1).max(2000),
})

export const streamResponse = createServerFn({ method: "POST" })
    .inputValidator(z.object({ messages: z.array(MessageSchema).min(1) }))
    .handler(async function* ({ data }) {
        const url = process.env.KAI_API_URL
        const key = process.env.KAI_API_KEY

        if (!url) {
            throw Error("KAI url is missing from the environment variable!")
        }

        if (!key) {
            throw Error("KAI api key is missing from the environment variable!")
        }

        const result = await fetch(`${url}/query`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-KAI-Key": key },
            body: JSON.stringify({ messages: data.messages }),
        })
        if (!result.ok || !result.body) throw new Error(`KAI API error ${result.status}: ${await result.text()}`)
        yield* readDeltas(result.body)
    })

// KAI replies with server-sent events: `delta` carries a JSON-encoded text chunk, `done` ends the reply
async function* readDeltas(body: ReadableStream<Uint8Array>): AsyncGenerator<string> {
    const reader = body.getReader()
    const decoder = new TextDecoder()
    let buffer = ""

    try {
        for (;;) {
            const { value, done } = await reader.read()
            if (done) return

            buffer += decoder.decode(value, { stream: true })
            const events = buffer.split(/\r?\n\r?\n/)
            buffer = events.pop() ?? ""

            for (const raw of events) {
                let event = "message"
                let payload = ""
                for (const line of raw.split(/\r?\n/)) {
                    if (line.startsWith("event:")) event = line.slice(6).trim()
                    else if (line.startsWith("data:")) payload += line.slice(5).replace(/^ /, "")
                }

                if (event === "delta") yield JSON.parse(payload) as string
                else if (event === "done") return
                else if (event === "error") throw new Error(`KAI stream error: ${payload}`)
            }
        }
    }
    finally {
        // stops the upstream request if the client disconnects mid-reply
        await reader.cancel().catch(() => {})
    }
}
