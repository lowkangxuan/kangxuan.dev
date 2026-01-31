import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { allPosts } from 'content-collections'
import { mdxComponents } from '@prose-ui/react'
import { MDXContent } from '@content-collections/mdx/react'
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Panel, PanelHeader, PanelSection } from "@/components/Panel";
import { DitheredBackground } from "@/components/dithered-background.tsx";
import { Button } from "@/components/ui/button.tsx";
import { MDX } from "@/components/mdx.tsx";

const findPage = (pathArr: string[]) => {
    const path = pathArr && pathArr.length > 0 ? `${pathArr.join('/')}` : '/'
    return allPosts.find((post) => post.slug === path)
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
        <>
            <DitheredBackground>
                {page.thumbnail && (
                    <div className="flex justify-center p-4 min-w-0">
                        <img
                            src={page.thumbnailUrl}
                            alt={page.title}
                            className="w-3/4 rounded-md object-cover ring ring-offset-4 ring-offset-background ring-muted-foreground/30"
                        />
                    </div>
                )}
            </DitheredBackground>
            <Panel>
                <PanelSection className="flex">
                    <Button
                        asChild
                        variant="outline"
                        size="sm"
                        aria-label="Go Back"
                    >
                        <Link to="/blog" className="flex items-center gap-2">
                            <ArrowLeft size={20} className="inline" />
                            Back
                        </Link>
                    </Button>
                    <div className="flex-1"></div>
                    <Button variant="outline" size="icon-sm" aria-label="Next Page">
                        <ArrowRight />
                    </Button>
                </PanelSection>
                <article className="w-full max-w-3xl mx-auto">
                    <PanelHeader className="flex flex-col gap-1">
                        {page.title}
                    </PanelHeader>
                    <PanelSection className="dark:bg-background">
                        <MDX content={page.mdx} />
                        {/*<MDXContent*/}
                        {/*    code={page.mdx}*/}
                        {/*    components={mdxComponents}*/}
                        {/*/>*/}
                    </PanelSection>
                </article>
            </Panel>
        </>
    );
}