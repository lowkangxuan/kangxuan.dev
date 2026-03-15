import { ActivityCalendar } from "react-activity-calendar";
import 'react-activity-calendar/tooltips.css';
import { Panel, PanelSection } from "@/components/main-panel";

export function GithubActivity({ data }) {
    return (
        <Panel>
            <PanelSection className="text-muted-foreground">
                <ActivityCalendar
                    data={data.contributions}
                    theme={{
                        light: [
                            "var(--color-secondary)",
                            "var(--color-primary)",
                        ],
                    }}
                />
            </PanelSection>
        </Panel>
    );
}
