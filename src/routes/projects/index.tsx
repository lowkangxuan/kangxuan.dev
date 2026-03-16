import { createFileRoute } from "@tanstack/react-router";
import { Panel, PanelHeader, PanelSection } from "@/components/main-panel";
import { PROJECTS } from "@/data/projects.ts";
import { GridItem } from "@/components/grid-item-list/grid-item.tsx";
import { GridList } from "@/components/grid-item-list/grid-list.tsx";

export const Route = createFileRoute("/projects/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <Panel>
                <PanelHeader>Projects</PanelHeader>
                <PanelSection>
                    <span className="text-sm text-muted-foreground">
                        Proudly completed projects over the year.
                    </span>
                </PanelSection>
            </Panel>
            <GridList>
                {PROJECTS.slice(0, 4).map((project) => {
                    return (
                        <GridItem key={project.name}
                                  title={project.name}
                                  description={project.description}
                                  thumbnailUrl={project.thumbnail}
                                  link={{to: project.href, newTab: true}}
                        />
                    );
                })}
            </GridList>
        </div>
    );
}
