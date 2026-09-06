import { Panel, PanelHeader } from "@/components/main-panel";
import { PROJECTS } from "@/data/projects.ts";
import { GridItem } from "@/components/grid-item-list/grid-item.tsx";

export function ProjectsSection() {
    return (
        <>
            <Panel>
                <PanelHeader>
                    <span>Projects<sup className="text-sm text-muted-foreground -top-3">({PROJECTS.length})</sup></span>
                </PanelHeader>
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
        </>
    );
}