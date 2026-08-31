import { createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

const isBlogPostPath = (pathname?: string) =>
    /^\/blog\/[^/]+\/?$/.test(pathname ?? "");

// Create a new router instance
export const getRouter = () => {
    const router = createRouter({
        routeTree,
        context: {},

        scrollRestoration: true,
        defaultPreloadStaleTime: 0,
        defaultViewTransition: false,
    });

    router.subscribe(
        "onBeforeNavigate",
        ({ fromLocation, toLocation, pathChanged }) => {
            router.shouldViewTransition =
                pathChanged &&
                (isBlogPostPath(fromLocation?.pathname) ||
                    isBlogPostPath(toLocation.pathname));
        },
    );

    return router;
};
