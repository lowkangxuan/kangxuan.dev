import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { sortedPosts } from "@/data/sorted-posts.ts";
import { Panel, PanelHeader, PanelSection } from "@/components/main-panel";
import { Button, buttonVariants } from "@/components/ui/button.tsx";
import { MDX } from "@/components/mdx.tsx";
import img from "@/features/home/profile/cover.jpeg";
import { format, parseISO } from "date-fns";

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
    const formattedDate = format(parseISO(page.published), "MMMM dd, yyyy");

    return (
        <>
            <Panel>
                <PanelSection className="flex line-after">
                    {/* <Button
                        render={<Link to="/blog" />}
                        variant="secondary"
                        size="sm"
                        aria-label="Go Back"
                    >
                        <ArrowLeft size={20} className="inline" /> Blog
                    </Button> */}
                    <Link
                        to="/blog"
                        className={buttonVariants({ variant: "secondary", size: "sm" })}
                        aria-label="Go Back"
                    >
                        <ArrowLeft /> Blog
                    </Link>
                    <div className="flex-1"></div>
                    <div className="flex gap-2">
                        {typeof prevPage === "object" && (
                            // <Button
                            //     render={
                            //         <Link
                            //             to="/blog/$slug"
                            //             params={{ slug: prevPage.slug }}
                            //         />
                            //     }
                            //     variant="secondary"
                            //     size="icon-sm"
                            //     aria-label="Prev Page"
                            // >
                            //     <ArrowLeft />
                            // </Button>
                            <Link
                                to="/blog/$slug"
                                params={{ slug: prevPage.slug }}
                                className={buttonVariants({ variant: "secondary", size: "icon-sm" })}
                                aria-label="Previous Page"
                            >
                                <ArrowLeft />
                            </Link>
                        )}
                        {typeof nextPage === "object" && (
                            // <Button
                            //     render={
                            //         <Link
                            //             to="/blog/$slug"
                            //             params={{ slug: nextPage.slug }}
                            //         />
                            //     }
                            //     variant="secondary"
                            //     size="icon-sm"
                            //     aria-label="Next Page"
                            // >
                            //     <ArrowRight />
                            // </Button>

                            <Link
                                to="/blog/$slug"
                                params={{ slug: nextPage.slug }}
                                className={buttonVariants({ variant: "secondary", size: "icon-sm" })}
                                aria-label="Next Page"
                            >
                                <ArrowRight />
                            </Link>
                        )}
                    </div>
                </PanelSection>
                <article className="w-full max-w-3xl mx-auto">
                    <PanelSection className="dark:bg-background">
                        {page.thumbnail && (
                            <figure className="flex justify-center mb-8 p-4 min-w-0">
                                <img
                                    src={page.thumbnailUrl}
                                    alt={page.title}
                                    className="aspect-video object-cover bg-background rounded-xl ring ring-offset-4 ring-border ring-offset-background border border-muted-foreground/30"
                                />
                            </figure>
                        )}

                        <header>
                            <h1 className="text-2xl font-semibold mb-2">
                                {page.title}
                            </h1>
                            <div className="mb-2 text-sm text-muted-foreground">
                                <span>{formattedDate}</span>
                            </div>
                            <ul className="flex gap-2">
                                {page.tags?.map((tag) => (
                                    <li key={tag} className="bg-muted border-1 border-muted-foreground/30 rounded-sm text-xs text-muted-foreground px-2 py-1 before:content-['#'] before:mr-0.5">
                                        {tag}
                                    </li>
                                )) || ""}
                            </ul>
                        </header>

                        <MDX content={page.mdx} />
                    </PanelSection>
                </article>
            </Panel>
        </>
    );
}
