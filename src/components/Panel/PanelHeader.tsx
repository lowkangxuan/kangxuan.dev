import { ReactNode } from "react";

export function PanelHeader({children, className} : {children: ReactNode, className?: string}) {
    return (
        <h2 className={`${className} line-after pr-4 font-bold text-3xl leading-tight`}>
            {children}
        </h2>
    );
}