import { linkOptions } from "@tanstack/react-router";

export const navLinks = linkOptions([
    {
        to: "/",
        key: "home",
        label: "Home",
        activeOptions: { exact: true },
    },
    {
        to: "/projects",
        key: "projects",
        label: "Projects",
    },
    {
        to: "/blog",
        key: "blog",
        label: "Blog",
    },
]);