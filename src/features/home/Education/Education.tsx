import { data } from "./data.ts";
import { Panel } from "@/components/Panel.tsx";
import { PanelHeader } from "@/components/PanelHeader.tsx";
import { PanelSection } from "@/components/PanelSection.tsx";
import {
    Timeline,
    TimelineContent,
    TimelineDuration,
    TimelineHeader, TimelineSkillset,
    TimelineSubheader,
} from "@/components/Timeline";
import { Pulse } from "@/components/Pulse.tsx";

export function Education() {
    return (
        <Panel>
            <PanelHeader>Education</PanelHeader>
            <PanelSection>
                <Timeline>
                    {data.map((education) => {
                        return (
                            <TimelineContent key={education.name}>
                                <TimelineHeader>
                                    {education.name} {education.to === "present" && <Pulse />}
                                </TimelineHeader>
                                <TimelineSubheader>
                                    {education.course}
                                    <TimelineDuration
                                        from={education.from}
                                        to={education.to}
                                    />
                                </TimelineSubheader>
                                <TimelineSkillset skills={education.skills} />
                            </TimelineContent>
                        );
                    })}
                </Timeline>
            </PanelSection>
        </Panel>
    );
}
