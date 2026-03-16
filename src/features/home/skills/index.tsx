import StackIcon from "tech-stack-icons";
import { useEffect } from "react";
import { Panel, PanelHeader, PanelSection } from "@/components/main-panel";
import { STACK_DATA } from "@/features/home/skills/data.ts";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip.tsx";
import { useTheme } from "@/hooks/theme-provider.tsx";

export function Skills() {
    const {theme} = useTheme();

    useEffect(() => {
        console.log("theme", theme);
    }, [theme]);

    return (
        <Panel>
            <PanelHeader>Skills</PanelHeader>
            <PanelSection className="flex gap-4 flex-wrap">
                {STACK_DATA.map((stack) => {
                    return (
                        <Tooltip key={stack.key}>
                            <TooltipTrigger>
                                <StackIcon name={stack.key} className="size-8" variant={theme} />
                            </TooltipTrigger>
                            <TooltipContent>
                                {stack.name}
                            </TooltipContent>
                        </Tooltip>
                    )
                })}
            </PanelSection>
        </Panel>
    );
}