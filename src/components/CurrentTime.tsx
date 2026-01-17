import { formatInTimeZone } from "date-fns-tz";
import { useEffect, useState } from "react";
import {
    Clock1,
    Clock10,
    Clock11,
    Clock12,
    Clock2,
    Clock3,
    Clock4,
    Clock5,
    Clock6,
    Clock7,
    Clock8,
    Clock9,
} from "lucide-react";
import { getHours } from "date-fns";

export function CurrentTime() {
    const [mounted, setMounted] = useState(false);
    const [currentTime, setCurrentTime] = useState<number>(Date.now());
    const clockIcons = [
        Clock12,
        Clock1 ,
        Clock2 ,
        Clock3 ,
        Clock4 ,
        Clock5 ,
        Clock6 ,
        Clock7 ,
        Clock8 ,
        Clock9 ,
        Clock10,
        Clock11,
    ];

    useEffect(() => {
        setMounted(true);
        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        const scheduleNextTick = () => {
            const ms = Date.now();

            const delay = 1000 - (ms % 1000);
            timeoutId = setTimeout(() => {
                setCurrentTime(Date.now());
                scheduleNextTick();
            }, delay);
        };

        scheduleNextTick();

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    const timeZone = "Asia/Singapore";
    const formattedTime = formatInTimeZone(
        currentTime,
        timeZone,
        "HH:mm:ss zzz",
    );
    const ClockElem = clockIcons[getHours(currentTime)] ?? Clock4;

    return (
        <span className="flex items-center gap-1.5">
            {mounted ? (
                <>
                    <ClockElem className="inline" size={18} />
                    {formattedTime}
                </>
            ) : (
                "--:--:--"
            )}
        </span>
    );
}
