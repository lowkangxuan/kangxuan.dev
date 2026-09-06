import { createFileRoute } from "@tanstack/react-router";
import { Panel, PanelHeader, PanelSection } from "@/components/main-panel";
import { PROJECTS } from "@/data/projects.ts";
import { GridItem } from "@/components/grid-item-list/grid-item.tsx";

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
                        Proudly completed projects over the years.
                    </span>
                </PanelSection>
            </Panel>
            <div className="line-after relative border-x">
                <div className="flex flex-col">
                    {PROJECTS.slice(0, 4).map((project, index) => {
                        return (
                            <GridItem key={project.name}
                                index={index}
                                title={project.name}
                                description={project.description}
                                thumbnailUrl={project.thumbnail}
                                href={project.href}
                                repo={project.repo}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
