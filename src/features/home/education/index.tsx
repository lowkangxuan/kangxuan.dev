import { EDUCATION_DATA } from "./data.ts";
import { Panel, PanelHeader, PanelSection } from "@/components/main-panel";
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
                    {EDUCATION_DATA.map((education) => {
                        return (
                            <TimelineItemCollapsible
                                key={education.name}
                                title={education.name}
                                logo={education.logo}
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
