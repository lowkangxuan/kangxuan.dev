import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/features/home/Experience/Experience.tsx";
import { Education } from "@/features/home/Education/Education.tsx";
import { Profile } from "@/features/home/Profile/Profile.tsx";

export const Route = createFileRoute("/")({
    component: App,
});

function App() {
    return (
        <div>
            <div className="relative h-40 border-x before:absolute before:h-40 before:w-[200dvw] before:left-0 before:bg-[radial-gradient(var(--border)_1.2px,transparent_0)] before:bg-size-[14px_14px] before:bg-position-[0px_4.5px]">
            </div>
            <Profile />
            <Separator />

            <Experience />
            <Separator />

            <Education />
        </div>
    );
}

function Separator() {
    return (
        <div className="h-8 border-x"></div>
    )
}