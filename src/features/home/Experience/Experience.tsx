import { data } from "./data.ts";
import { Panel, PanelHeader, PanelSection } from "@/components/Panel";
import {
    Timeline,
    TimelineContent,
    TimelineDuration,
    TimelineHeader,
    TimelineSkillset,
    TimelineSubheader,
} from "@/components/Timeline";

export function Experience() {
    return (
        <Panel>
            <PanelHeader>Experience</PanelHeader>
            <PanelSection>
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
