import { GraduationCap } from "lucide-react";
import type { ReactNode } from "react";

export function TimelineHeader({children}: {children: ReactNode}) {
    return (
        <div className="flex gap-3">
            <span className="flex size-6 items-center justify-center bg-muted text-muted-foreground ring-1 ring-accent ring-offset-2 ring-offset-background border border-muted-foreground/30 rounded-xl">
                <GraduationCap className="size-4 text-muted-foreground" />
            </span>
            <h3>{children}</h3>
        </div>
    );
}
