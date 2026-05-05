import { cn } from "@/lib/utils.ts";

export function PanelSeparator({className} : {className?: string}) {
    return (
        <div className={cn("h-8", "border-x", className)}></div>
    )
}