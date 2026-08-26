import type { CSSProperties } from "react";

interface PulseProps {
    size?: number;
    colour?: string;
}

export function Pulse({
    size = 2,
    colour = "var(--color-green-500)",
}: PulseProps) {
    const style = {
        "--pulse-size": `${size * 0.25}rem`,
        "--pulse-colour": colour,
    } as CSSProperties;

    return (
        <span
            aria-hidden="true"
            style={style}
            className="relative inline-flex size-(--pulse-size) shrink-0 align-middle"
        >
            <span className="absolute inset-0 rounded-full bg-(--pulse-colour)" />
            <span className="absolute inset-0 animate-ping rounded-full bg-(--pulse-colour) opacity-70 motion-reduce:animate-none" />
        </span>
    );
}
