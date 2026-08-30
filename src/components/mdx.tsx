import { MDXContent } from "@content-collections/mdx/react";
import type { ComponentPropsWithoutRef } from "react";
import { CodeBlock } from "@/components/code-block.tsx";
import { cn } from "@/lib/utils.ts";

const components = {
    h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
        <h1
            className={cn(
                "font-geist mt-12 mb-4 text-3xl font-semibold",
                className,
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
        <h2
            className={cn(
                "font-geist mt-12 mb-4 text-2xl font-semibold",
                className,
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
        <h3
            className={cn(
                "font-geist mt-8 mb-4 text-xl font-semibold",
                className,
            )}
            {...props}
        />
    ),
    strong: ({ className, ...props }: ComponentPropsWithoutRef<"strong">) => (
        <strong className={cn("text-primary", className)} {...props} />
    ),
    pre: (props: ComponentPropsWithoutRef<"pre">) => <CodeBlock {...props} />,
    code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => {
        const isCodeBlock = "data-language" in props;

        return (
            <code
                className={cn(
                    !isCodeBlock &&
                        "rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.875em] font-medium text-foreground ring-1 ring-border",
                    className,
                )}
                {...props}
            />
        );
    },
    a: ({ className, ...props }: ComponentPropsWithoutRef<"a">) => (
        <a className={cn("font-semibold underline", className)} {...props} />
    ),
    p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
        <p
            className={cn(
                "font-geist first:mt-0 my-5 text-neutral-700 dark:text-neutral-400",
                className,
            )}
            {...props}
        />
    ),
    ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
        <ul
            className={cn(
                "font-geist my-5 list-disc pl-6 text-neutral-600 dark:text-neutral-400",
                className,
            )}
            {...props}
        />
    ),
    ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
        <ol
            className={cn(
                "font-geist my-5 list-decimal pl-6 text-neutral-600 marker:font-medium marker:text-muted-foreground dark:text-neutral-400",
                className,
            )}
            {...props}
        />
    ),
    li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
        <li
            className={cn(
                "my-1 pt-1 pl-1 text-neutral-600 marker:text-sm marker:text-muted-foreground dark:text-neutral-400",
                className,
            )}
            {...props}
        />
    ),
};

export function MDX({ content }: { content: string }) {
    return <MDXContent code={content} components={components} />;
}
