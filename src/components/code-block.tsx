import { Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";

export function CodeBlock({props} : {props: any}) {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const { highlightedCode, highlightedcode, className, ...rest } = props;
    const html = highlightedCode ?? highlightedcode;
    console.log(props);
    // rehype-pretty-code often passes pre-rendered HTML via `highlightedCode`.
    // If we render children normally, you only see plain text.
    if (typeof html === "string" && html.length > 0) {
        return (
            <div
                className={"overflow-x-auto rounded-lg p-4 " + (className ?? "")}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        );
    }

    return (
        <>
            <pre
                {...rest}
                className={"shiki overflow-x-auto rounded-lg p-4 text-sm" + (className ?? "")}
            />
            <Button variant="secondary" size="icon-xs" className="absolute top-2 right-2 p-3.5">
                <Copy />
            </Button>
        </>
    );
}