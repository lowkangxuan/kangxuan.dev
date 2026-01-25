import { ChevronDown, ChevronUp, GraduationCap } from "lucide-react";
import type { ReactNode } from "react";

export function TimelineHeader({children}: {children: ReactNode}) {
    return (
        <div className="flex gap-4 items-center">
            <span className="flex size-6 items-center justify-center bg-muted text-muted-foreground ring-1 ring-border ring-offset-2 ring-offset-background border border-muted-foreground/30 rounded-sm">
                <GraduationCap className="size-4 text-muted-foreground" />
            </span>
            <h3 className="text-primary text-base text-left flex-1">{children}</h3>
            <span className="group-data-[state=open]:hidden">
                <ChevronDown size={16} />
            </span>
            <span className="group-data-[state=closed]:hidden">
                <ChevronUp size={16} />
            </span>
        </div>
    );
}
