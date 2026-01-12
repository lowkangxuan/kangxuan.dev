import { remarkPlugins } from '@prose-ui/core'
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const posts = defineCollection({
    name: "posts",
    directory: "./src/blog",
    include: "**/*.mdx",
    schema: z.object({
        title: z.string(),
        published: z.string().date(),
        description: z.string().optional(),
        authors: z.array(z.string()),
        category: z.string().optional(),
        content: z.string(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document, {
            remarkPlugins: remarkPlugins(),
        })
        return {
            ...document,
            slug: document._meta.path,
            mdx,
        };
    },
});

export default defineConfig({
    collections: [posts],
});