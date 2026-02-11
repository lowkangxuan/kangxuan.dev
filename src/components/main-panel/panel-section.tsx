import type { CSSProperties } from "react";

export function PanelSection({children, className, style}: {children: React.ReactNode, className?: string, style?: CSSProperties}) {
    return (
        <div className={`${className} line-after py-4`} style={style}>
            {children}
        </div>
    );
}