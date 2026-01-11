// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import matter from "gray-matter";
import { z } from "zod";
var posts = defineCollection({
  name: "posts",
  directory: "./src/blog",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    published: z.string().date(),
    description: z.string().optional(),
    authors: z.array(z.string()),
    content: z.string()
  }),
  transform: ({ content, ...post }) => {
    const headerImageMatch = content.match(/!\[([^\]]*)\]\(([^)]+)\)/);
    const headerImage = headerImageMatch ? headerImageMatch[2] : void 0;
    return {
      ...post,
      slug: post._meta.path,
      headerImage,
      // keep full markdown in content (or render as MD)
      content
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
