import { sortedPosts } from "@/data/sorted-posts.ts";
import { GridList } from "@/components/grid-item-list/grid-list.tsx";
import { GridItem } from "@/components/grid-item-list/grid-item.tsx";
import { Link } from "@tanstack/react-router";
import { MoveRight } from "lucide-react";
import { format, parseISO } from "date-fns";

export function BlogList({ query }: { query?: string | undefined }) {
    return (
        <div className="line-after border-x">
            {sortedPosts
                .filter((post) =>
                    post.title
                        .replaceAll(" ", "")
                        .toLowerCase()
                        .includes(
                            query?.replaceAll(" ", "").toLowerCase() || "",
                        ),
                )
                .map((post) => {
                    const formattedDate = format(
                        parseISO(post.published),
                        "MMMM dd, yyyy",
                    );

                    return (
                        <Link
                            key={post.slug}
                            to="/blog/$slug"
                            params={{ slug: post.slug }}
                            className="flex gap-2 border-b p-4 transition-[background-color] hover:bg-muted"
                        >
                            <div className="gap-2 flex-1">
                                <h2
                                    className="font-bold text-lg text-primary leading-tight mb-1"
                                    style={{
                                        viewTransitionName: `post-${post.slug}`,
                                    }}
                                >
                                    {post.title}
                                </h2>
                                <div className="text-muted-foreground text-xs mb-1">
                                    {formattedDate}
                                </div>
                                <div className="text-sm">
                                    {post.description}
                                </div>
                                {post.tags && (
                                    <ul className="flex gap-2 mt-4">
                                        {post.tags.map((tag) => (
                                            <li
                                                key={tag}
                                                className="bg-muted border-1 border-muted-foreground/30 rounded-sm text-xs text-muted-foreground px-2 py-1 before:content-['#'] before:mr-0.5"
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </Link>
                    );
                })}
        </div>
    );
}
