import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Experience } from "@/features/home/experience";
import { Education } from "@/features/home/education";
import { Profile } from "@/features/home/profile";
import { GithubActivity } from "@/features/home/github-activity.tsx";
import { BlogSection } from "@/features/home/blog-section.tsx";
import { Skills } from "@/features/home/skills";
import { ProjectsSection } from "@/features/home/projects-section.tsx";

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

const getGithubActivity = createServerFn({ method: "GET" })
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
    loader: async () => {
        return {
            contributions: await getGithubActivity({ data: { username: 'lowkangxuan', year: 'last' } })
        }
    },
    component: App,
});

function App() {
    const { contributions } = Route.useLoaderData();

    return (
        <div>
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
        <div className="relative flex h-8 w-full border-x border-line before:absolute before:left-[-100vw] before:-z-1 before:h-8 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--border)]/56"></div>
    )
}