import type { ReactNode } from "react";

export function Timeline({children}: {children: ReactNode}) {
    return (
        <div className="relative before:absolute before:h-full before:w-px before:bg-border before:left-6 before:-z-20">
            {children}
        </div>
    );
}
