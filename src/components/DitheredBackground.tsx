import { ReactNode } from "react";

export function DitheredBackground() {
    return (
        <div className="relative flex items-end h-40 border-x px-2 align-bottom before:absolute before:h-40 before:w-[200dvw] before:-z-10 before:-left-[100dvw] before:bg-[radial-gradient(var(--border)_1.2px,transparent_0)] before:bg-size-[14px_14px] before:bg-position-[0px_4.5px]">

        </div>
    );
}