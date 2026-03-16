import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { sortedPosts } from "@/data/sorted-posts.ts";
import { Panel, PanelHeader, PanelSection } from "@/components/main-panel";
import { Button } from "@/components/ui/button.tsx";
import { MDX } from "@/components/mdx.tsx";
import img from "@/features/home/profile/cover.jpeg";

const findPage = (pathArr: Array<string>) => {
    const path = pathArr.length > 0 ? `${pathArr.join("/")}` : "/";
    return sortedPosts.find((post) => post.slug === path);
};

const findPrevPage = (currPage: any) => {
    const currIndex = sortedPosts.indexOf(currPage);

    if (currIndex == 0) return false;
    return { ...sortedPosts[currIndex - 1] };
};

const findNextPage = (currPage: any) => {
    const currIndex = sortedPosts.indexOf(currPage);

    if (currIndex >= sortedPosts.length - 1) return false;
    return { ...sortedPosts[currIndex + 1] };
};

export const Route = createFileRoute("/blog/$slug")({
    component: PostPage,
    loader: async ({ params }) => {
        const pathSegments = params.slug
            ? params.slug.split("/").filter(Boolean)
            : [];
        const page = findPage(pathSegments);
        const nextPage = findNextPage(page);
        const prevPage = findPrevPage(page);

        if (!page) {
            throw notFound();
        }

        return { page, prevPage, nextPage };
    },
});

function PostPage() {
    const { page, prevPage, nextPage } = Route.useLoaderData();

    return (
        <>
            <Panel>
                <PanelSection className="flex">
                    <Button
                        asChild
                        variant="secondary"
                        size="sm"
                        aria-label="Go Back"
                    >
                        <Link to="/blog">
                            <ArrowLeft size={20} className="inline" /> Blog
                        </Link>
                    </Button>
                    <div className="flex-1"></div>
                    <div className="flex gap-2">
                        {typeof prevPage === "object" && (
                            <Button
                                asChild
                                variant="secondary"
                                size="icon-sm"
                                aria-label="Prev Page"
                            >
                                <Link
                                    to="/blog/$slug"
                                    params={{ slug: prevPage.slug }}
                                >
                                    <ArrowLeft />
                                </Link>
                            </Button>
                        )}
                        {typeof nextPage === "object" && (
                            <Button
                                asChild
                                variant="secondary"
                                size="icon-sm"
                                aria-label="Next Page"
                            >
                                <Link
                                    to="/blog/$slug"
                                    params={{ slug: nextPage.slug }}
                                >
                                    <ArrowRight />
                                </Link>
                            </Button>
                        )}
                    </div>
                </PanelSection>
                <article className="w-full max-w-3xl mx-auto">
                    <PanelHeader className="flex flex-col gap-1">
                        {page.title}
                    </PanelHeader>
                    <PanelSection className="dark:bg-background">
                        {page.thumbnail && (
                            <div className="flex justify-center p-4 min-w-0">
                                <img
                                    src={page.thumbnailUrl}
                                    alt={page.title}
                                    className="aspect-video object-cover bg-background rounded-xl ring ring-offset-4 ring-border ring-offset-background border border-muted-foreground/30"
                                />
                            </div>
                        )}
                        <MDX content={page.mdx} />
                    </PanelSection>
                </article>
            </Panel>
        </>
    );
}
