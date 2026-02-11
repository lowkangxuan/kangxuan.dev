import { sortedPosts } from "@/data/sorted-posts.ts";
import { GridList } from "@/components/grid-item-list/grid-list.tsx";
import { GridItem } from "@/components/grid-item-list/grid-item.tsx";

export function BlogList() {
    return (
        <GridList>
            {sortedPosts.slice(0, 4).map((post) => (
                <GridItem key={post.slug}
                          title={post.title}
                          description={post.description}
                          thumbnailUrl={post.thumbnailUrl}
                          date={post.published}
                          link={{
                              to: "/blog/$slug",
                              params: { slug: post.slug },
                          }}
                />
            ))}
        </GridList>
    );
}
