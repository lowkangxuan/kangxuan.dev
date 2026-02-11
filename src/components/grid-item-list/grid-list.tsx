import { ReactNode } from "react";

export function GridList({children}: {children: ReactNode}) {
    return (
        <div className="line-after relative border-l border-r py-4">
            <div className="pointer-events-none absolute grid grid-cols-2 gap-4 top-0 left-0 h-full w-full z-[2]">
                <div className="border-r"></div>
                <div className="border-l"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {children}
            </div>
        </div>
    );
}
