import { Panel } from "@/components/Panel.tsx";
import { PanelHeader } from "@/components/PanelHeader.tsx";
import { data } from "./data.ts";
import { PanelSection } from "@/components/PanelSection.tsx";
import { Button } from "@/components/ui/button.tsx";

export function Experience() {
    return (
        <Panel>
            <PanelHeader>Experience</PanelHeader>
            {data.map((experience) => {
                return (
                    <PanelSection>
                        <h3>{experience.company}</h3>
                        <Button variant="ghost">
                            {experience.role}
                            {experience.status}
                            {experience.duration}
                        </Button>
                        <div>
                            {experience.description}
                        </div>
                        <div>
                            {experience.techs.map((tech) => {
                                return tech;
                            })}
                        </div>
                    </PanelSection>
                );
            })}
        </Panel>
    );
}
