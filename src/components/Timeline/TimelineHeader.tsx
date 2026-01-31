import { ChevronDown, ChevronUp } from "lucide-react";
import { Pulse } from "@/components/Pulse.tsx";
import { TimelineDuration } from "@/components/Timeline/TimelineDuration.tsx";

export function TimelineHeader({title, meta, logo, from, to}: {title: string, meta: string, logo?: string, from: string, to: string}) {
    return (
        <div className="flex gap-4 items-start">
            <span className="flex size-12 items-center justify-center bg-muted text-muted-foreground ring-1 ring-border ring-offset-2 ring-offset-background border border-muted-foreground/30 rounded-sm overflow-hidden">
                <img src={logo} alt={logo} className="w-full h-full object-contain rounded-sm" />
            </span>
            <div className="flex flex-col flex-1 text-left">
                <h3 className="text-primary text-base">{title} {to === "present" && <Pulse />}</h3>
                <span>{meta}</span>
            </div>
            <div>
                <TimelineDuration from={from} to={to} />
            </div>
            <span className="group-data-[state=open]:hidden">
                <ChevronDown size={16} />
            </span>
            <span className="group-data-[state=closed]:hidden">
                <ChevronUp size={16} />
            </span>
        </div>
    );
}
