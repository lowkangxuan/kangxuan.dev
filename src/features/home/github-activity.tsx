import { ActivityCalendar } from "react-activity-calendar";
import 'react-activity-calendar/tooltips.css';
import { Panel, PanelSection } from "@/components/main-panel";
import { Activity } from "react-activity-calendar";

type GithubActivityProps = {
    contributions?: Activity[];
    loading?: boolean;
}

export function GithubActivity({
    contributions,
    loading = false,
}: GithubActivityProps) {
    return (
        <Panel>
            <PanelSection className="text-muted-foreground">
                <ActivityCalendar
                    data={contributions ?? []}
                    loading={loading}
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
