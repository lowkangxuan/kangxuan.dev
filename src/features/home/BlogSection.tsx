import { sortedPosts } from "@/data/sorted-posts.ts";
import { Panel, PanelHeader, PanelSection } from "@/components/Panel";

export function BlogSection() {
    return (
        <Panel>
            <PanelHeader>
                <span>Blog<sup className="text-sm text-muted-foreground -top-3">({sortedPosts.length})</sup></span>
            </PanelHeader>
            <PanelSection>
                {sortedPosts.map((post, index) => {
                    return (
                        <div key={index}>
                            {post.title}
                        </div>
                    )
                })}
            </PanelSection>
        </Panel>
    );
}