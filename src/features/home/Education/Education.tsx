import { data } from "./data.ts";
import { Panel, PanelHeader, PanelSection } from "@/components/Panel";
import {
    Timeline,
    TimelineItemCollapsible,
} from "@/components/Timeline";

export function Education() {
    return (
        <Panel>
            <PanelHeader>Education</PanelHeader>
            <PanelSection>
                <Timeline>
                    {data.map((education) => {
                        return (
                            <TimelineItemCollapsible
                                key={education.name}
                                title={education.name}
                                meta={education.course}
                                from={education.from}
                                to={education.to}
                                description={education.description}
                                skills={education.skills}
                            />
                        );
                    })}
                </Timeline>
            </PanelSection>
        </Panel>
    );
}
