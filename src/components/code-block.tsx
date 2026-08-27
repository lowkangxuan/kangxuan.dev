import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";

export function CodeBlock({
    className,
    children,
    ...props
}: ComponentPropsWithoutRef<"pre">) {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isCopied) return;
        const timeoutId = setTimeout(() => {
            setIsCopied(false);
        }, 1500);

        return () => clearTimeout(timeoutId);
    }, [isCopied]);

    const handleCopy = async () => {
        if (isCopied) return;

        try {
            const root = containerRef.current;
            const codeEl =
                root?.querySelector("pre code") ??
                root?.querySelector("code") ??
                root?.querySelector("pre") ??
                root;
            const domText = codeEl?.textContent ?? "";

            if (!domText) return;

            await navigator.clipboard.writeText(domText);
            setIsCopied(true);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div ref={containerRef} className="relative">
            <pre
                {...props}
                className={cn(
                    "shiki overflow-x-auto rounded-lg p-4 text-sm",
                    className,
                )}
            >
                {children}
            </pre>
            <Button
                variant="secondary"
                size="icon-xs"
                onClick={handleCopy}
                className="absolute top-2 right-2 p-3.5"
                aria-label={isCopied ? "Code copied" : "Copy code"}
                title={isCopied ? "Copied" : "Copy code"}
            >
                {isCopied ? (
                    <Check aria-hidden="true" />
                ) : (
                    <Copy aria-hidden="true" />
                )}
            </Button>
        </div>
    );
}
