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

export function Experience() {
    return (
        <Panel>
            <PanelHeader>Experience</PanelHeader>
            <PanelSection >
                <Timeline>
                    {data.map((experience) => {
                        return (
                            <TimelineContent key={experience.name}>
                                <TimelineHeader>
                                    {experience.name}
                                </TimelineHeader>
                                <TimelineSubheader>
                                    {experience.status} {experience.role}
                                    <TimelineDuration
                                        from={experience.from}
                                        to={experience.to}
                                    />
                                </TimelineSubheader>
                                <TimelineSkillset skills={experience.skills} />
                            </TimelineContent>
                        );
                    })}
                </Timeline>
            </PanelSection>
        </Panel>
    );
}
