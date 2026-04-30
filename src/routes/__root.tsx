/// <reference types="vite/client" />
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import * as React from "react";
import appCss from "@/styles.css?url";
import { SiteHeader } from "@/components/header/site-header.tsx";
import { ThemeProvider } from "@/hooks/theme-provider.tsx";
import { themeScript } from "@/integrations/theme/scripts";
import { THEME_COOKIE_NAME } from "@/integrations/theme/constants";
import { getThemeFromCookie } from "@/integrations/theme/utils";
import { SiteFooter } from "@/components/site-footer.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { DitheredBackground } from "@/components/dithered-background.tsx";
import { SiteNav } from "@/components/site-nav.tsx";

export const Route = createRootRoute({
    loader: async () => {
        const theme = await getThemeFromCookie();
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
                title: "Kang Xuan - Computer Science Undergraduate",
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
        <html className={`antialiased ${theme}`} lang="en">
            <head>
                <HeadContent />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
                    rel="stylesheet"
                />
                {/*<script dangerouslySetInnerHTML={{ __html: themeScript }} />*/}
            </head>
            <body>
                <ThemeProvider
                    defaultTheme="light"
                    storageKey={THEME_COOKIE_NAME}
                >
                    <TooltipProvider>
                        <div
                            className="
    pointer-events-none fixed inset-x-0 bottom-0 z-[500]
    h-24
    bg-gradient-to-t from-background/90 via-background/50 to-transparent
    [mask-image:linear-gradient(to_top,black_0%,black_35%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_top,black_0%,black_35%,transparent_100%)]
  "
                        />
                        <SiteNav />
                        <main className="max-w-dvw px-2 overflow-hidden">
                            <div className="md:max-w-3xl mx-auto">
                                <DitheredBackground />
                                {children}
                                <DitheredBackground />
                            </div>
                        </main>
                        <SiteFooter />
                        <div className="pt-24"></div>
                    </TooltipProvider>
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
