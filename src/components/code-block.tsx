import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button.tsx";

export function CodeBlock({ props }: { props: any }) {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { highlightedCode, highlightedcode, className, ...rest } = props;
    const html = highlightedCode ?? highlightedcode;

    useEffect(() => {
        if (!isCopied) return;
        console.log("Copied");
        const timeoutId = setTimeout(() => {
            setIsCopied(false)
        }, 1500);

        return () => {
            clearTimeout(timeoutId);
        }

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

            let textToCopy = domText;
            if (!textToCopy && typeof html === "string") {
                const temp = document.createElement("div");
                temp.innerHTML = html;
                textToCopy = temp.textContent || temp.innerText || "";
            }

            if (!textToCopy) return;

            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    if (typeof html === "string" && html.length > 0) {
        return (
            <div ref={containerRef} className="relative">
                <div
                    className={"overflow-x-auto rounded-lg p-4 " + (className ?? "")}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                <Button
                    variant="secondary"
                    size="icon-xs"
                    onClick={handleCopy}
                    className="absolute top-2 right-2 p-3.5"
                >
                    {isCopied ? <Check /> : <Copy />}
                </Button>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative">
            <pre
                {...rest}
                className={"shiki overflow-x-auto rounded-lg p-4 text-sm " + (className ?? "")}
            >
                {rest.children}
            </pre>
            <Button
                variant="secondary"
                size="icon-xs"
                onClick={handleCopy}
                className="absolute top-2 right-2 p-3.5"
            >
                {isCopied ? <Check /> : <Copy />}
            </Button>
        </div>
    );
}