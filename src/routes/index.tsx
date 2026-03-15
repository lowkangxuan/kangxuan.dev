import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Experience } from "@/features/home/experience";
import { Education } from "@/features/home/education";
import { Profile } from "@/features/home/profile";
import { GithubActivity } from "@/features/home/github-activity.tsx";
import { DitheredBackground } from "@/components/dithered-background.tsx";
import { BlogSection } from "@/features/home/blog-section.tsx";
import { Skills } from "@/features/home/skills";
import { ProjectsSection } from "@/features/home/projects-section.tsx";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

type Activity = {
    date: string
    count: number
    level: 0 | 1 | 2 | 3 | 4
}

export type ApiResponse = {
    total: {
        [year: number]: number
        [year: string]: number // 'lastYear;
    }
    contributions: Array<Activity>
}

const ActivitySchema = z.object({
    username: z.string(),
    year: z.union([z.number(), z.literal('last')]),
})

const getGithubActivity = createServerFn()
    .inputValidator(ActivitySchema)
    .handler(async ({ data }) => {
        const apiUrl = 'https://github-contributions-api.jogruber.de/v4/';
        const response = await fetch(`${apiUrl}${data.username}?y=${String(data.year)}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch GitHub calendar for ${data.username}`)
        }

        const activity = (await response.json()) as ApiResponse;
        return activity;
    })

export const Route = createFileRoute("/")({
    loader: async() => {
        return {
            contributions: await getGithubActivity({ data: { username: 'lowkangxuan', year: 'last'} })
        }
    },
    component: App,
});

function App() {
    const {contributions} = Route.useLoaderData();
    console.log(contributions);
    return (
        <div>
            <DitheredBackground />
            <Profile />
            <Separator />

            <GithubActivity data={contributions} />
            <Separator />

            <Skills />
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