import Markdown from "react-markdown";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible.tsx";
import { TimelineContent } from "@/components/Timeline/TimelineContent.tsx";
import { TimelineHeader } from "@/components/Timeline/TimelineHeader.tsx";
import { TimelineSkillset } from "@/components/Timeline/TimelineSkillset.tsx";

interface TimelineItemCollapsibleProps {
    title: string;
    logo: string;
    meta: string;
    from: string;
    to: string;
    description?: string;
    skills?: Array<string>;
}

export function TimelineItemCollapsible({title, logo, meta, from, to, description, skills} : TimelineItemCollapsibleProps) {
    return (
        <Collapsible className="flex flex-col not-first:mt-6 text-sm text-muted-foreground last:before:absolute last:before:h-full last:before:w-px last:before:bg-background last:before:left-6 last:before:-z-20">
            <CollapsibleTrigger className="group relative flex-1 w-full before:absolute before:-top-1 before:-bottom-1 before:left-14 before:-right-2 before:rounded-md before:-z-10 hover:before:bg-muted">
                <TimelineContent>
                    <TimelineHeader title={title} meta={meta} logo={logo} from={from} to={to} />
                </TimelineContent>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col pl-16 pt-2 gap-2 overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                {description && (
                    <div className="text-primary prose-ul:pl-6 prose-li:list-disc prose-li:my-2 marker:text-muted-foreground marker:text-xs">
                        <Markdown>{description}</Markdown>
                    </div>
                )}
                <TimelineSkillset skills={skills} />
            </CollapsibleContent>
        </Collapsible>
    );
}