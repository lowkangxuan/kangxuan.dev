import { createFileRoute } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import { Panel, PanelHeader, PanelSection } from "@/components/main-panel";
import { BlogList } from "@/components/blog-list.tsx";

export const Route = createFileRoute("/blog/")({
    component: BlogIndex,
});

function BlogIndex() {
    return (
        <>
            <Panel>
                <PanelHeader>Blog</PanelHeader>
                <PanelSection>
                    <span className="text-sm text-muted-foreground">
                        The following list comprises the {allPosts.length} blogs
                        I have written.
                    </span>
                </PanelSection>
            </Panel>
            <BlogList />
        </>
    );
}
