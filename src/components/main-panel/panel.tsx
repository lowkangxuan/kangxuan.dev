import type { ReactNode } from "react";
import { cn } from "@/lib/utils.ts";

export function Panel({children, className} : {children: ReactNode, className?: string}) {
    return (
        <div className={cn("line-before", "line-after", "border-x", "px-4", className)}>
            {children}
        </div>
    );
}