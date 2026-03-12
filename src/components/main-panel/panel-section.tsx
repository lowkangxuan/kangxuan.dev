import type { CSSProperties } from "react";
import { cn } from "@/lib/utils.ts";

export function PanelSection({children, className, style}: {children: React.ReactNode, className?: string, style?: CSSProperties}) {
    return (
        <div className={cn(className, "line-after", "py-4")} style={style}>
            {children}
        </div>
    );
}