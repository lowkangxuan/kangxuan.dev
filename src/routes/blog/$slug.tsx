// src/routes/$slug.tsx
import { createFileRoute, notFound } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { Markdown } from '../../components/Markdown.tsx'
import { renderMarkdown } from "@/utils/markdown.ts";

export const Route = createFileRoute('/blog/$slug')({
    loader: ({ params }) => {
        const post = allPosts.find((p) => p.slug === params.slug)
        if (!post) {
            throw notFound()
        }
        console.log(post);
        return post
    },
    component: BlogPost,
})

function BlogPost() {
    const post = Route.useLoaderData()

    return (
        <article>
            <header>
                <h1>{post.title}</h1>
                <p>
                    By {post.authors.join(', ')} on {post.published}
                </p>
            </header>
            <Markdown content={post.content} className="prose" />
        </article>
    )
}