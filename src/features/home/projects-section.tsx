import { Panel, PanelHeader } from "@/components/main-panel";
import {PROJECTS} from "@/data/projects.ts";
import { GridList } from "@/components/grid-item-list/grid-list.tsx";
import { GridItem } from "@/components/grid-item-list/grid-item.tsx";

export function ProjectsSection() {
    return (
        <>
            <Panel>
                <PanelHeader>
                    <span>Projects<sup className="text-sm text-muted-foreground -top-3">({PROJECTS.length})</sup></span>
                </PanelHeader>
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
        </>
    );
}