import { createServerFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";
import { THEME_COOKIE_NAME } from "./constants";

export const getThemeFromCookie = createServerFn().handler(
    () => (getCookie(THEME_COOKIE_NAME) || "light") as "light" | "dark",
);