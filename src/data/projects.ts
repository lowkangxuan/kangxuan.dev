type project_data = {
    name: string,
    description: string,
    thumbnail?: string,
    href: string,
    repo?: string,
}

export const PROJECTS: Array<project_data> = [
    {
        name: "Task Forge",
        description: "A modern task-management web application built with React, TypeScript, TanStack Start, and shadcn/ui, designed around a clean interface for organizing and managing tasks.",
        thumbnail: "projects/task-forge-cover.png",
        href: "https://task-forge.kangxuan.dev/",
        repo: "https://github.com/lowkangxuan/task-forge"
    },
    {
        name: "DeFi Wealth Hub",
        description: "A hackathon project building an AI-powered personal finance platform for tracking wealth, managing budgets, and gaining personalized financial insights.",
        thumbnail: "projects/defi-wealth-hub-cover.png",
        href: "https://defi-wealth-hub.web.app/",
        repo: "https://github.com/lowkangxuan/DeFi-Wealth-Hub",
    },
    {
        name: "Old Portfolio Site",
        description: "The very first version of my portfolio site that I built back in 2022, superseded by the current site you are on!",
        thumbnail: "projects/old-portfolio-cover.png",
        href: "https://lowkangxuan.github.io/",
        repo: "https://github.com/lowkangxuan/lowkangxuan.github.io",
    },
]