import { data } from "./data.ts";
import { Panel, PanelHeader, PanelSection } from "@/components/main-panel";
import { Timeline, TimelineItemCollapsible } from "@/components/timeline";

export function Experience() {
    return (
        <Panel>
            <PanelHeader>Experience</PanelHeader>
            <PanelSection>
                <Timeline>
                    {data.map((experience) => {
                        return (
                            <TimelineItemCollapsible
                                key={experience.name}
                                title={experience.name}
                                logo={experience.logo}
                                meta={`${experience.status} | ${experience.role}`}
                                from={experience.from}
                                to={experience.to}
                                description={experience.description}
                                skills={experience.skills}
                            />
                        );
                    })}
                </Timeline>
            </PanelSection>
        </Panel>
    );
}
