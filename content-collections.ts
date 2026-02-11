import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import rehypePrettyCode from "rehype-pretty-code";

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
        const mdx = await compileMDX(context, document, {
            remarkPlugins: [],
            rehypePlugins: [[rehypePrettyCode, {
                theme: {
                    light: "github-light",
                    dark: "github-dark",
                },
                // optional, but often helps avoid “double backgrounds” with prose styles
                keepBackground: false,
            }]]
        })
        return {
            ...document,
            slug: document._meta.path.split('/').pop()!,
            fullPath: document._meta.path,
            mdx,
            thumbnailUrl: document.thumbnail
                ? `/blog/${document._meta.directory}/${document.thumbnail.replace('./', '')}`
                : undefined,
        };
    },
});

export default defineConfig({
    collections: [posts],
});