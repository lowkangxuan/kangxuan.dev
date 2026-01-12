import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import contentCollections from "@content-collections/vite";

const config = defineConfig({
    optimizeDeps: {
        include: [
            "@tanstack/router-devtools",
            "@tanstack/router-devtools-core",
            "@tanstack/react-router",
        ],
    },
    plugins: [
        devtools(),
        netlify(),
        // this is the plugin that enables path aliases
        viteTsConfigPaths({
            projects: ["./tsconfig.json"],
        }),
        tailwindcss(),
        tanstackStart(),
        contentCollections(),
        viteReact({
            babel: {
                plugins: ["babel-plugin-react-compiler"],
            },
        }),
    ],
});

export default config;