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