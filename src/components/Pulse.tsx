export function Pulse({size=2, colour="green"}: {size?: number; colour?: string}) {
    const pulseColour = `bg-green-500`;

    return (
        <span className="relative inline-flex items-center justify-center">
            <span className={`size-${size} ${pulseColour} rounded-full`}></span>
            <span className={`size-${size} ${pulseColour} rounded-full absolute animate-pulse`}></span>
            <span className={`size-${size+1} ${pulseColour} rounded-full absolute animate-ping`}></span>
        </span>
    );
}