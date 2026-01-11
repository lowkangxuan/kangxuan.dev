// content-collections.ts
import { defineCollection, defineConfig } from '@content-collections/core'
import matter from 'gray-matter'
import { z } from 'zod'

function extractFrontMatter(content: string) {
    const { data, content: body, excerpt } = matter(content, { excerpt: true })
    return { data, body, excerpt: excerpt || '' }
}

const posts = defineCollection({
    name: 'posts',
    directory: './src/blog',
    include: '**/*.md',
    schema: z.object({
        title: z.string(),
        published: z.string().date(),
        description: z.string().optional(),
        authors: z.array(z.string()),
        content: z.string(),
    }),
    transform: ({ content, ...post }) => {
        const headerImageMatch = content.match(/!\[([^\]]*)\]\(([^)]+)\)/)
        const headerImage = headerImageMatch ? headerImageMatch[2] : undefined

        return {
            ...post,
            slug: post._meta.path,
            headerImage,
            // keep full markdown in content (or render as MD)
            content,
        }
    },
})

export default defineConfig({
    collections: [posts],
})