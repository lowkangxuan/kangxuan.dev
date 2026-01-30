import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/features/home/Experience/Experience.tsx";
import { Education } from "@/features/home/Education/Education.tsx";
import { Profile } from "@/features/home/Profile/Profile.tsx";
import { GithubInfo } from "@/features/home/GithubInfo.tsx";
import { DitheredBackground } from "@/components/dithered-background.tsx";
import { BlogSection } from "@/features/home/BlogSection.tsx";

export const Route = createFileRoute("/")({
    component: App,
});

function App() {
    return (
        <div>
            <DitheredBackground />
            <Profile />
            <Separator />

            <GithubInfo />
            <Separator />

            <Experience />
            <Separator />

            <Education />
            <Separator />

            <BlogSection />
        </div>
    );
}

function Separator() {
    return (
        <div className="h-8 border-x"></div>
    )
}