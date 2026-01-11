import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import Header from "../components/Header";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { getThemeServerFn } from "@/lib/theme.ts";

export const Route = createRootRoute({
    loader: () => getThemeServerFn(),
    head: () => ({
        meta: [
            {
                charSet: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                title: "TanStack Start Starter",
            },
        ],
        links: [
            {
                rel: "stylesheet",
                href: appCss,
            },
        ],
    }),

    shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
    const theme = Route.useLoaderData();
    return (
        <html className={theme} lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                <ThemeProvider theme={theme}>
                    <main className="max-w-dvw px-2">
                        <div className="md:max-w-4xl mx-auto">
                            {/*<Header />*/}
                            <SiteHeader />
                            {children}
                            <TanStackDevtools
                                config={{
                                    position: "bottom-right",
                                }}
                                plugins={[
                                    {
                                        name: "Tanstack Router",
                                        render: <TanStackRouterDevtoolsPanel />,
                                    },
                                ]}
                            />
                        </div>
                    </main>
                </ThemeProvider>
                <Scripts />
            </body>
        </html>
    );
}
