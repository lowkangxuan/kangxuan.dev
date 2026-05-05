type project_data = {
    name: string,
    description: string,
    thumbnail?: string,
    href: string,
}

export const PROJECTS: Array<project_data> = [
    {
        name: "DeFi Wealth Hub",
        description: "A Hackathon project",
        thumbnail: "projects/defi-wealth-hub-cover.png",
        href: "https://defi-wealth-hub.web.app"
    },
    {
        name: "Todo List Web App",
        description: "A todo list web app to track todos and stored in localStorage",
        thumbnail: "projects/todo-list-cover.png",
        href: "https://lowkangxuan.github.io/todo-list/"
    },
]