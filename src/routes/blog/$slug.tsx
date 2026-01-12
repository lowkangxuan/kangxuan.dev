import { createFileRoute, notFound } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { mdxComponents } from '@prose-ui/react'
import { MDXContent } from '@content-collections/mdx/react'

const findPage = (pathArr: string[]) => {
    const path = pathArr && pathArr.length > 0 ? `${pathArr.join('/')}` : '/'
    return allPosts.find((post) => post._meta.path === path)
}

export const Route = createFileRoute('/blog/$slug')({
    component: PostPage,
    loader: async ({ params }) => {
        const pathSegments = params.slug ? params.slug.split('/').filter(Boolean) : []
        const page = findPage(pathSegments)

        if (!page) {
            throw notFound()
        }

        return { page }
    },
})

function PostPage() {
    const { page } = Route.useLoaderData()

    if (!page) {
        throw notFound()
    }

    return (
        <div className="w-full bg-[hsl(var(--p-color-bg))] min-h-screen">
            <article className="prose-ui w-full max-w-3xl mx-auto px-4 py-8">
                <header>
                    <h1>{page.title}</h1>
                    <p>
                        By {page.authors.join(', ')} on {page.published}
                    </p>
                </header>
                <MDXContent code={page.mdx} components={mdxComponents} />
            </article>
        </div>
    )
}