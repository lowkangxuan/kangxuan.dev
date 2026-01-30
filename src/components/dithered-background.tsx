import { ReactNode } from "react";

export function DitheredBackground({children} : {children?: ReactNode}) {
    return (
        <div className="relative flex justify-center min-h-40 py-2 border-x before:absolute before:w-[200dvw] before:-z-10 before:top-0 before:bottom-0 before:-left-[100dvw] before:bg-[radial-gradient(var(--border)_1.2px,transparent_0)] before:bg-size-[14px_14px] before:bg-position-[0px_4.5px]">
            {children}
        </div>
    );
}