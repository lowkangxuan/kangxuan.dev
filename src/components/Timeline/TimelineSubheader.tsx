import type { ReactNode } from "react";

export function TimelineSubheader({children}: {children: ReactNode}) {
    return (
        <div className="flex flex-col text-sm text-primary/70 pl-9">
            {children}
        </div>
    );
}