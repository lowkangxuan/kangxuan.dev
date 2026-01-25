import { createFileRoute, Link } from "@tanstack/react-router";
import { sortedPosts } from "@/data/sorted-posts.ts";
import { Panel } from "@/components/Panel";

export const Route = createFileRoute("/blog/")({
    component: BlogIndex,
});

function BlogIndex() {
    return (
        <Panel>
            <h1>Blog</h1>
            <div className="relative grid grid-cols-2 gap-2">
                {sortedPosts.map((post) => (
                    <div key={post.slug} className="p-4 odd:line-before odd:line-after">
                        <Link to="/blog/$slug" params={{ slug: post.slug }} className="flex flex-col gap-2">
                            <div className="rounded-lg border-primary ring ring-primary/30 ring-offset-4 ring-offset-background">
                                <img src={post.thumbnailUrl} alt="" className="rounded-lg" />
                            </div>
                            <h2>{post.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </Panel>
    );
}
