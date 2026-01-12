import { Infinity } from "lucide-react";

export function TimelineDuration({from, to}: {from: string, to: string}) {
    return (
        <span>
            {from} —{" "}
            {to === "present" ? (
                <Infinity className="inline size-6" />
            ) : (
                to
            )}
        </span>
    );
}
