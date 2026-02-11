import type { ReactNode } from "react";

export function TimelineSubheader({children}: {children: ReactNode}) {
    return (
        <div className="flex flex-col text-sm text-muted-foreground pl-16 items-start">
            {children}
        </div>
    );
}