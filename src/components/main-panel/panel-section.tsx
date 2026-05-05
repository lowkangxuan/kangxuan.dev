import type { CSSProperties } from "react";
import { cn } from "@/lib/utils.ts";

export function PanelSection({children, className, style}: {children: React.ReactNode, className?: string, style?: CSSProperties}) {
    return (
        <div className={cn("py-4", className)} style={style}>
            {children}
        </div>
    );
}