import Markdown from "react-markdown";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible.tsx";
import { TimelineContent } from "@/components/Timeline/TimelineContent.tsx";
import { TimelineHeader } from "@/components/Timeline/TimelineHeader.tsx";
import { Pulse } from "@/components/Pulse.tsx";
import { TimelineSubheader } from "@/components/Timeline/TimelineSubheader.tsx";
import { TimelineDuration } from "@/components/Timeline/TimelineDuration.tsx";
import { TimelineSkillset } from "@/components/Timeline/TimelineSkillset.tsx";

interface TimelineItemCollapsibleProps {
    title: string;
    meta: string;
    from: string;
    to: string;
    description?: string;
    skills?: Array<string>;
}

export function TimelineItemCollapsible({title, meta, from, to, description, skills} : TimelineItemCollapsibleProps) {
    return (
        <Collapsible className="flex flex-col not-first:mt-4 text-sm text-muted-foreground last:before:absolute last:before:h-full last:before:w-px last:before:bg-background last:before:left-3 last:before:-z-20">
            <CollapsibleTrigger className="group relative flex-1 w-full before:absolute before:-top-1 before:-bottom-1 before:left-8 before:-right-2 before:rounded-md before:-z-10 hover:before:bg-muted">
                <TimelineContent>
                    <TimelineHeader>
                        {title}{" "}
                        {to === "present" && <Pulse />}
                    </TimelineHeader>
                    <TimelineSubheader>
                        <span>{meta}</span>
                        <TimelineDuration
                            from={from}
                            to={to}
                        />
                    </TimelineSubheader>
                </TimelineContent>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col pl-10 pt-2 gap-2">
                <Markdown>
                    {description}
                </Markdown>
                <TimelineSkillset skills={skills} />
            </CollapsibleContent>
        </Collapsible>
    );
}