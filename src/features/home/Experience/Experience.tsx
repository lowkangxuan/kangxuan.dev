import { data } from "./data.ts";
import { Panel, PanelHeader, PanelSection } from "@/components/Panel";
import {
    Timeline,
    TimelineItemCollapsible,
} from "@/components/Timeline";

export function Experience() {
    return (
        <Panel>
            <PanelHeader>Experience</PanelHeader>
            <PanelSection>
                <Timeline>
                    {data.map((experience) => {
                        return (
                            <TimelineItemCollapsible title={experience.name}
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
