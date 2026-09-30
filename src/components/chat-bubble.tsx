import { useEffect, useRef, useState } from "react";
import { MessageCircle, SendHorizontal, X } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { Button } from "@/components/ui/button.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Message, MessageContent, MessageGroup } from "@/components/ui/message.tsx";
import { Bubble, BubbleContent } from "@/components/ui/bubble.tsx";
import { Marker, MarkerContent } from "@/components/ui/marker.tsx";
import { streamResponse } from "@/server/chat"

type ChatMessage = {
    id: string;
    role: "user" | "assistant";
    content: string;
    error?: boolean;
};

const GREETING: ChatMessage = {
    id: "greeting",
    role: "assistant",
    content: "Hey there! Ask me anything.",
};

const markdownComponents: Components = {
    a: ({ node: _node, href, ...props }) => {
        const external = href?.startsWith("http");
        return (
            <a
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                {...props}
            />
        );
    },
};

// compact styles for markdown inside a chat bubble
const MARKDOWN_CLASSES = `
    [&_a]:underline [&_a]:underline-offset-2
    [&_p+*]:mt-2 [&_ul+*]:mt-2 [&_ol+*]:mt-2 [&_pre+*]:mt-2
    [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-4 [&_ol]:pl-4 [&_li]:my-0.5
    [&_strong]:font-semibold
    [&_code]:font-mono [&_code]:text-xs [&_code]:rounded [&_code]:bg-background/60 [&_code]:px-1
    [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-background/60 [&_pre]:p-2 [&_pre_code]:bg-transparent [&_pre_code]:p-0
`;

function getReply(messages: Array<ChatMessage>) {
    return streamResponse({
        data: {
            messages: messages
                .filter((m) => m.id !== "greeting" && !m.error)
                .map(({ role, content }) => ({ role, content })),
        },
    });
}

export function ChatBubble() {
    const [open, setOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState<Array<ChatMessage>>([GREETING]);
    const [input, setInput] = useState<string>("");
    const [pending, setPending] = useState<boolean>(false);
    // waiting on the first chunk of a reply
    const thinking = pending && messages.at(-1)?.role === "user";

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

        const replyId = crypto.randomUUID();
        try {
            for await (const delta of await getReply(next)) {
                if (!delta) continue;
                setMessages((prev) => prev.some((m) => m.id === replyId)
                    ? prev.map((m) => m.id === replyId ? { ...m, content: m.content + delta } : m)
                    : [...prev, { id: replyId, role: "assistant", content: delta }]);
            }
        }
        catch (error) {
            console.error(error);
            setMessages((prev) => [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    content: "Sorry, something went wrong. Please try again.",
                    error: true,
                },
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
            className="fixed right-4 bottom-18 md:right-6 md:bottom-6 z-1000"
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
                                                variant={message.role === "user" ? "default" : message.error ? "destructive" : "muted"}
                                            >
                                                {message.role === "user" ? (
                                                    <BubbleContent className="whitespace-pre-wrap">
                                                        {message.content}
                                                    </BubbleContent>
                                                ) : (
                                                    <BubbleContent className={MARKDOWN_CLASSES}>
                                                        <Markdown
                                                            remarkPlugins={[remarkGfm]}
                                                            components={markdownComponents}
                                                        >
                                                            {message.content}
                                                        </Markdown>
                                                    </BubbleContent>
                                                )}
                                            </Bubble>
                                        </MessageContent>
                                    </Message>
                                );
                            })}
                            {thinking && (
                                <Marker role="status" className="justify-center">
                                    <MarkerContent className="shimmer">
                                        Thinking…
                                    </MarkerContent>
                                </Marker>
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
