import { GitHubCalendar } from "react-github-calendar";
import 'react-activity-calendar/tooltips.css';
import { Panel, PanelSection } from "@/components/main-panel";
import { ActivityCalendar } from "react-activity-calendar";

export function GithubActivity({ data }) {
    return (
        <Panel>
            <PanelSection className="text-muted-foreground">
                {/*<GitHubCalendar*/}
                {/*    username="lowkangxuan"*/}
                {/*    fontSize={12}*/}
                {/*    theme={{*/}
                {/*        light: [*/}
                {/*            "var(--color-secondary)",*/}
                {/*            "var(--color-primary)",*/}
                {/*        ],*/}
                {/*    }}*/}
                {/*/>*/}
                <ActivityCalendar data={data.contributions} />
            </PanelSection>
        </Panel>
    );
}
