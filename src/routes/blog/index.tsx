import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import { z } from "zod";
import { Panel, PanelHeader, PanelSection, PanelSeparator } from "@/components/main-panel";
import { BlogList } from "@/components/blog-list.tsx";
import { Input } from "@/components/ui/input.tsx"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group.tsx";
import { SearchIcon } from "lucide-react";

const blogSearchSchema = z.object({
    query: z.string().catch(" ").optional(),
});

export const Route = createFileRoute("/blog/")({
    component: BlogIndex,
    validateSearch: blogSearchSchema,
});

function BlogIndex() {
    const { query } = Route.useSearch();
    const navigate = useNavigate({from: Route.fullPath});

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
            <PanelSeparator className="h-4" />
            <Panel className="px-2">
                <PanelSection className="py-2">
                    <InputGroup>
                        <InputGroupInput id="inline-start-input"
                                         placeholder="Search blog posts..."
                                         value={query}
                                         onChange={e => navigate({
                                             search: () => ({ query: e.target.value})
                                         })}
                        />
                        <InputGroupAddon align="inline-start">
                            <SearchIcon className="text-muted-foreground" />
                        </InputGroupAddon>
                    </InputGroup>
                </PanelSection>
            </Panel>
            <BlogList query={query} />
        </>
    );
}
