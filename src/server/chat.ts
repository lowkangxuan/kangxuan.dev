import { createServerFn } from "@tanstack/react-start";
import * as z from "zod";

const MessageSchema = z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string().min(1).max(2000),
})

export const streamResponse = createServerFn({ method: "POST" })
    .inputValidator(z.object({ messages: z.array(MessageSchema).min(1) }))
    .handler(async ({ data }) => {
        const url = process.env.KAI_API_URL
        const key = process.env.KAI_API_KEY

        if (!url) {
            throw Error("")
        }

        if (!key) {
            throw Error("")
        }

        const result = await fetch(`${url}/query`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "X-KAI-Key": key },
            body: JSON.stringify({ messages: data.messages }),
        })
        if (!result.ok) throw new Error(`KAI API error ${result.status}: ${await result.text()}`)
        return (await result.json()) as string
    })