import StackIcon from "tech-stack-icons";
import { Panel, PanelHeader, PanelSection } from "@/components/main-panel";
import { STACK_DATA } from "@/features/home/skills/data.ts";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip.tsx";

export function Stack() {
    return (
        <Panel>
            <PanelHeader>Skills</PanelHeader>
            <PanelSection className="flex gap-4">
                {STACK_DATA.map((stack) => {
                    return (
                        <Tooltip key={stack.key}>
                            <TooltipTrigger>
                                <StackIcon name={stack.key} className="size-8" />
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