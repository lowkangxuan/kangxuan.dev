import { useEffect, useRef, useState } from "react";
import { MessageCircle, SendHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Message, MessageContent, MessageGroup } from "@/components/ui/message.tsx";
import { Bubble, BubbleContent } from "@/components/ui/bubble.tsx";
import { streamResponse } from "@/server/chat"

type ChatMessage = {
    id: string;
    role: "user" | "assistant";
    content: string;
};

const GREETING: ChatMessage = {
    id: "greeting",
    role: "assistant",
    content: "Hey there! Ask me anything.",
};

async function getReply(_messages: Array<ChatMessage>): Promise<string> {
    return streamResponse({
        data: { messages: _messages.filter((m) => m.id !== "greeting").map(({ role, content }) => ({ role, content })) },
    })
}

export function ChatBubble() {
    const [open, setOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState<Array<ChatMessage>>([GREETING]);
    const [input, setInput] = useState<string>("");
    const [pending, setPending] = useState<boolean>(false);

    const bubbleRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const wasOpen = useRef<boolean>(false);

    useEffect(() => {
        if (open) inputRef.current?.focus();
        // return focus to the bubble after closing, but not on first mount
        else if (wasOpen.current) bubbleRef.current?.focus();
        wasOpen.current = open;
    }, [open]);

    useEffect(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
    }, [messages, pending]);

    async function send() {
        const content = input.trim();
        if (!content || pending) return;

        const next = [
            ...messages,
            { id: crypto.randomUUID(), role: "user", content } satisfies ChatMessage,
        ];
        setMessages(next);
        setInput("");
        setPending(true);

        try {
            const reply = await getReply(next);
            setMessages((prev) => [
                ...prev,
                { id: crypto.randomUUID(), role: "assistant", content: reply },
            ]);
        }
        finally {
            setPending(false);
        }
    }

    function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            void send();
        }
    }

    return (
        <div
            className="fixed right-4 bottom-18 md:right-6 md:bottom-6 z-[1000]"
            onKeyDown={(e) => e.key === "Escape" && open && setOpen(false)}
        >
            {open ? (
                <div
                    role="dialog"
                    aria-label="Chat"
                    className="
                        flex flex-col w-[calc(100vw-2rem)] max-w-sm h-[min(28rem,calc(100dvh-7rem))]
                        rounded-2xl border bg-background shadow-lg overflow-hidden
                        origin-bottom-right animate-in fade-in zoom-in-95 duration-150
                    "
                >
                    <div className="flex items-center justify-between border-b pl-4 pr-2 py-2">
                        <span className="text-sm font-medium">Chat</span>
                        <Button
                            variant="ghost"
                            size="icon-sm"
                            onClick={() => setOpen(false)}
                            aria-label="Close chat"
                            className="text-muted-foreground"
                        >
                            <X />
                        </Button>
                    </div>

                    <div ref={listRef} className="flex-1 overflow-y-auto p-4" aria-live="polite">
                        <MessageGroup>
                            {messages.map((message) => {
                                const align = message.role === "user" ? "end" : "start";
                                return (
                                    <Message key={message.id} align={align}>
                                        <MessageContent>
                                            <Bubble
                                                align={align}
                                                variant={message.role === "user" ? "default" : "muted"}
                                            >
                                                <BubbleContent className="whitespace-pre-wrap">
                                                    {message.content}
                                                </BubbleContent>
                                            </Bubble>
                                        </MessageContent>
                                    </Message>
                                );
                            })}
                            {pending && (
                                <Message>
                                    <MessageContent>
                                        <Bubble variant="muted">
                                            <BubbleContent className="text-muted-foreground">
                                                Typing…
                                            </BubbleContent>
                                        </Bubble>
                                    </MessageContent>
                                </Message>
                            )}
                        </MessageGroup>
                    </div>

                    <form
                        className="flex items-end gap-2 border-t p-2"
                        onSubmit={(e) => {
                            e.preventDefault();
                            void send();
                        }}
                    >
                        <Textarea
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={onKeyDown}
                            placeholder="Type a message…"
                            rows={1}
                            className="min-h-9 max-h-32 resize-none"
                        />
                        <Button
                            type="submit"
                            size="icon-lg"
                            disabled={!input.trim() || pending}
                            aria-label="Send message"
                        >
                            <SendHorizontal />
                        </Button>
                    </form>
                </div>
            ) : (
                <Button
                    ref={bubbleRef}
                    variant="outline"
                    size="icon-lg"
                    onClick={() => setOpen(true)}
                    aria-label="Open chat"
                    className="size-10 rounded-full dark:bg-background dark:hover:bg-primary-foreground text-muted-foreground shadow-md"
                >
                    <MessageCircle size={18} />
                </Button>
            )}
        </div>
    );
}
