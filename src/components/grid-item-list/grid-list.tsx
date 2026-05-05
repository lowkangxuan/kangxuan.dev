import type { ReactNode } from "react";

export function GridList({children}: {children: ReactNode}) {
    return (
        <div className="line-after relative border-x">
            <div className="pointer-events-none absolute flex justify-center top-0 left-0 h-full w-full z-[2] max-sm:hidden">
                <div className="border-r"></div>
            </div>
            <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col">
                {children}
            </div>
        </div>
    );
}
