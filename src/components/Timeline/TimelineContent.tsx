import type { ReactNode } from "react";

export function TimelineContent({children}: {children: ReactNode}) {
    return (
        <div className="relative not-first:mt-4 last:before:absolute last:before:h-full last:before:w-px last:before:bg-background last:before:left-3 last:before:-z-20">
            {children}
        </div>
    );
}