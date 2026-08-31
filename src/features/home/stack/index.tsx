import { Panel, PanelHeader, PanelSection } from "@/components/main-panel";
import { useTheme } from "@/hooks/theme-provider.tsx";
import { TECH_STACK } from "./tech-stack";
import { Link } from "@tanstack/react-router";

export function Skills() {
    const { theme } = useTheme();

    return (
        <Panel>
            <PanelHeader>Stack</PanelHeader>
            <PanelSection className="flex gap-2 flex-wrap">
                {TECH_STACK.map((stack) => {
                    return (
                        <Link to={stack.href} className="flex bg-muted border border-muted-foreground/30 rounded-sm text-xs text-muted-foreground [&>svg]:size-3.5 items-center px-2 py-1 gap-1.25">
                            {theme == "light" ? stack.icon : (stack.icon_dark ?? stack.icon)}
                            {stack.label}
                        </Link>
                    )
                })}
            </PanelSection>
        </Panel>
    );
}