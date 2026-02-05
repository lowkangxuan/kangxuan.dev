import { linkOptions } from "@tanstack/react-router";

export const navLinks = linkOptions([
    {
        to: "/",
        label: "Home",
        activeOptions: { exact: true },
    },
    {
        to: "/showcase",
        label: "Showcase",
    },
    {
        to: "/blog",
        label: "Blog",
    },
]);