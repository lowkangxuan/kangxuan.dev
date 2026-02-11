import { sortedPosts } from "@/data/sorted-posts.ts";
import { Panel, PanelHeader } from "@/components/main-panel";
import { BlogList } from "@/components/blog-list.tsx";

export function BlogSection() {
    return (
        <>
            <Panel>
                <PanelHeader>
                    <span>Blog<sup className="text-sm text-muted-foreground -top-3">({sortedPosts.length})</sup></span>
                </PanelHeader>
            </Panel>
            <BlogList />
        </>
    );
}