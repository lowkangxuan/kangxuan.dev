import { createFileRoute } from "@tanstack/react-router";
import { DitheredBackground } from "@/components/dithered-background.tsx";
import { Panel, PanelHeader, PanelSection } from "@/components/Panel";

export const Route = createFileRoute("/showcase/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            <DitheredBackground />
            <Panel>
                <PanelHeader>Showcase</PanelHeader>
                <PanelSection>
                    <span className="text-sm text-muted-foreground">
                        Proudly completed projects over the year.
                    </span>
                </PanelSection>
            </Panel>
        </div>
    );
}
