import { createFileRoute, Link } from "@tanstack/react-router";
import { sortedPosts } from "@/data/sorted-posts.ts";
import { Panel, PanelHeader } from "@/components/Panel";
import { DitheredBackground } from "@/components/dithered-background.tsx";

export const Route = createFileRoute("/blog/")({
    component: BlogIndex,
});

function BlogIndex() {
    return (
        <>
            <DitheredBackground />
            <Panel>
                <PanelHeader>
                    Blog
                </PanelHeader>
            </Panel>
            <div className="relative border-l border-r py-4">
                <div className="pointer-events-none absolute grid grid-cols-2 gap-4 top-0 left-0 h-full w-full z-[2]">
                    <div className="border-r"></div>
                    <div className="border-l"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {sortedPosts.map((post) => (
                        <div
                            key={post.slug}
                            className="p-1 bg-muted odd:line-before odd:line-after"
                        >
                            <Link
                                to="/blog/$slug"
                                params={{ slug: post.slug }}
                                className="flex flex-col gap-1 h-full p-2 bg-background dark:bg-background/65 rounded-xl border border-muted-foreground/30"
                            >
                                <div className="flex-1 rounded-lg overflow-hidden">
                                    {post.thumbnailUrl ? (
                                        <img
                                            src={post.thumbnailUrl}
                                            alt=""
                                            className="rounded-lg"
                                        />
                                    ) : (
                                        <div className="bg-muted h-full"></div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2 px-2 text-xs text-muted-foreground">
                                    <div className="flex justify-between items-center">
                                        <h2 className="font-bold text-base text-primary">
                                            {post.title}
                                        </h2>
                                        <span>{post.published}</span>
                                    </div>
                                    <p>{post.description}</p>
                                    {post.tags && (
                                        <ul className="flex flex-wrap gap-2">
                                            {post.tags.map((tag, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="bg-muted border-1 border-muted-foreground/30 rounded-sm text-xs text-muted-foreground px-2 py-1 before:content-['#'] before:mr-0.5"
                                                    >
                                                        {tag}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
