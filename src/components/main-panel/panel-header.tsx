import type { ReactNode } from "react";
import { cn } from "@/lib/utils.ts";

export function PanelHeader({children, className} : {children: ReactNode, className?: string}) {
    return (
        <h2 className={cn(className, "line-after", "pr-4", "font-bold", "text-3xl", "leading-tight")}>
            {children}
        </h2>
    );
}