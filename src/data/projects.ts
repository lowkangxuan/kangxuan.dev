type project_data = {
    name: string,
    description: string,
    thumbnail?: string,
    href: string,
}

export const PROJECTS: Array<project_data> = [
    {
        name: "Todo List Web App",
        description: "A todo list web app to track todos and stored in localStorage",
        thumbnail: "/public/projects/todo-list-cover.png",
        href: "https://lowkangxuan.github.io/todo-list/"
    },
]