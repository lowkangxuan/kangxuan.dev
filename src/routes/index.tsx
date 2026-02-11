import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/features/home/experience";
import { Education } from "@/features/home/education";
import { Profile } from "@/features/home/profile";
import { GithubActivity } from "@/features/home/github-activity.tsx";
import { DitheredBackground } from "@/components/dithered-background.tsx";
import { BlogSection } from "@/features/home/blog-section.tsx";
import { Stack } from "@/features/home/skills";
import { ProjectsSection } from "@/features/home/projects-section.tsx";

export const Route = createFileRoute("/")({
    component: App,
});

function App() {
    return (
        <div>
            <DitheredBackground />
            <Profile />
            <Separator />

            <GithubActivity />
            <Separator />

            <Stack />
            <Separator />

            <Experience />
            <Separator />

            <Education />
            <Separator />

            <ProjectsSection />
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