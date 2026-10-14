import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";
import type { Nodes as MdastNodes } from "mdast";

// MDX syntax nodes that remark-rehype should keep in the HAST tree.
const MDX_NODE_TYPES: Array<MdastNodes["type"]> = [
    "mdxjsEsm",
    "mdxFlowExpression",
    "mdxTextExpression",
    "mdxJsxFlowElement",
    "mdxJsxTextElement",
];

const processor = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkRehype, { passThrough: MDX_NODE_TYPES })
    .use(rehypePrettyCode, {
        theme: {
            light: "github-light",
            dark: "github-dark",
        },
        // optional, but often helps avoid “double backgrounds” with prose styles
        keepBackground: false,
    });

/**
 * Compiles MDX to a HAST tree (as JSON) at build time. It is rendered to React
 * with hast-util-to-jsx-runtime, so nothing is evaluated at runtime
 * (Cloudflare Workers forbid `eval`/`new Function`).
 *
 * JSX elements are supported as long as they map to `components` in
 * src/components/mdx.tsx; imports, exports and `{expressions}` are not.
 */
async function compileToHast(content: string, path: string): Promise<string> {
    const tree = await processor.run(processor.parse(content));

    visit(tree, (node) => {
        delete node.position;

        const isExpression =
            node.type === "mdxjsEsm" ||
            node.type === "mdxFlowExpression" ||
            node.type === "mdxTextExpression" ||
            ((node.type === "mdxJsxFlowElement" ||
                node.type === "mdxJsxTextElement") &&
                node.attributes.some(
                    (attr) =>
                        attr.type === "mdxJsxExpressionAttribute" ||
                        typeof attr.value === "object",
                ));

        if (isExpression) {
            throw new Error(
                `${path}: MDX imports, exports and {expressions} are not supported`,
            );
        }
    });

    return JSON.stringify(tree);
}

const posts = defineCollection({
    name: "posts",
    directory: "./src/blog",
    include: "**/*.mdx",
    schema: z.object({
        pinned: z.boolean().default(false),
        title: z.string(),
        published: z.string().date(),
        thumbnail: z.string().optional(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        content: z.string(),
    }),
    transform: async (document, context) => {
        const body = await context.cache(
            { content: document.content, path: document._meta.filePath },
            ({ content, path }) => compileToHast(content, path),
            { key: "__hast" },
        );
        return {
            ...document,
            slug: document._meta.path.split("/").pop()!,
            fullPath: document._meta.path,
            body,
            thumbnailUrl: document.thumbnail ?? undefined,
        };
    },
});

export default defineConfig({
    collections: [posts],
});
