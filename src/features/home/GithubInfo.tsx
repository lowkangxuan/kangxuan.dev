import { GitHubCalendar } from "react-github-calendar";
import 'react-activity-calendar/tooltips.css';
import { Panel, PanelSection } from "@/components/Panel";

export function GithubInfo() {
    return (
        <Panel>
            <PanelSection className="text-muted-foreground">
                <GitHubCalendar
                    username="lowkangxuan"
                    fontSize={12}
                    theme={{
                        light: [
                            "var(--color-secondary)",
                            "var(--color-primary)",
                        ],
                    }}
                    // tooltips={{
                    //     activity: {
                    //         text: activity => `${activity.level} contributions on ${activity.date}`,
                    //         placement: 'top',
                    //         offset: 6,
                    //         hoverRestMs: 300,
                    //         transitionStyles: {
                    //             duration: 100,
                    //         },
                    //         withArrow: true,
                    //     },
                    // }}
                />
            </PanelSection>
        </Panel>
    );
}
