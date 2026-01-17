import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import * as React from "react";
import appCss from "@/styles.css?url";
import { SiteHeader } from "@/components/site-header.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { themeScript } from "@/integrations/theme/scripts";
import { THEME_COOKIE_NAME } from "@/integrations/theme/constants";
import { getThemeFromCookie } from "@/integrations/theme/utils";

export const Route = createRootRoute({
    loader: async () => {
        const theme = (await getThemeFromCookie()) ?? "light";
        return { theme };
    },
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
    notFoundComponent: () => <div>Not Found</div>,
});

function RootDocument({ children }: { children: React.ReactNode }) {
    const { theme } = Route.useLoaderData();
    return (
        <html className={`antialiased ${theme ?? ""}`} lang="en">
            <head>
                <HeadContent />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
                    rel="stylesheet"
                />
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body>
                <ThemeProvider
                    defaultTheme="system"
                    storageKey={THEME_COOKIE_NAME}
                >
                    <SiteHeader />
                    <main className="max-w-dvw px-2 overflow-x-hidden">
                        <div className="md:max-w-3xl mx-auto">{children}</div>
                    </main>
                </ThemeProvider>
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
                <Scripts />
            </body>
        </html>
    );
}
