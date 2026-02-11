import { createFileRoute } from "@tanstack/react-router";
import { DitheredBackground } from "@/components/dithered-background.tsx";
import { Panel, PanelHeader, PanelSection } from "@/components/main-panel";

export const Route = createFileRoute("/projects/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <DitheredBackground />
            <Panel>
                <PanelHeader>Projects</PanelHeader>
                <PanelSection>
                    <span className="text-sm text-muted-foreground">
                        Proudly completed projects over the year.
                    </span>
                </PanelSection>
            </Panel>
        </div>
    );
}
