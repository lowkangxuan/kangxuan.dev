import { createFileRoute, Link } from "@tanstack/react-router";
import { sortedPosts } from "@/data/sorted-posts.ts";
import { Panel, PanelHeader } from "@/components/Panel";
import { DitheredBackground } from "@/components/dithered-background.tsx";
import { BlogList } from "@/components/blog-list.tsx";

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
            <BlogList />
        </>
    );
}
