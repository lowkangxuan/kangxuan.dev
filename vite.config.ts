import path from "node:path";
import fs from "node:fs/promises";
import { defineConfig, type Plugin } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
// import netlify from "@netlify/vite-plugin-tanstack-start";
import contentCollections from "@content-collections/vite";
import { nitro } from "nitro/vite";

const BLOG_ASSET_EXT_RE = /\.(png|jpe?g|gif|webp|svg|avif|bmp|tiff?)$/i;

function isBlogAsset(filePath: string) {
    return BLOG_ASSET_EXT_RE.test(filePath);
}

async function walkDir(dir: string): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const out: string[] = [];

    for (const ent of entries) {
        const full = path.join(dir, ent.name);
        if (ent.isDirectory()) {
            out.push(...(await walkDir(full)));
        } else if (ent.isFile()) {
            out.push(full);
        }
    }

    return out;
}

function copyBlogAssets(): Plugin {
    const blogSrcDir = path.resolve(process.cwd(), "src/blog");
    const publicBlogDir = path.resolve(process.cwd(), "public/blog");

    async function copyOne(absSrcPath: string) {
        // Keep the same relative path under public/blog
        const rel = path.relative(blogSrcDir, absSrcPath);
        const absDestPath = path.join(publicBlogDir, rel);

        await fs.mkdir(path.dirname(absDestPath), { recursive: true });
        await fs.copyFile(absSrcPath, absDestPath);
    }

    async function removeOne(absSrcPath: string) {
        const rel = path.relative(blogSrcDir, absSrcPath);
        const absDestPath = path.join(publicBlogDir, rel);
        try {
            await fs.unlink(absDestPath);
        } catch {
            // ignore
        }
    }

    async function copyAll() {
        try {
            const files = await walkDir(blogSrcDir);
            const assetFiles = files.filter(isBlogAsset);
            await Promise.all(assetFiles.map(copyOne));
        } catch {
            // ignore (e.g. src/blog doesn't exist yet)
        }
    }

    return {
        name: "copy-blog-assets-to-public",

        // Runs for `vite build`
        async buildStart() {
            await copyAll();
        },

        // Runs for `vite dev`
        async configureServer(server) {
            await copyAll();

            // Watch for new/changed/deleted assets inside src/blog
            server.watcher.add(blogSrcDir);

            server.watcher.on("add", async (p) => {
                if (p.startsWith(blogSrcDir) && isBlogAsset(p)) {
                    await copyOne(p);
                }
            });

            server.watcher.on("change", async (p) => {
                if (p.startsWith(blogSrcDir) && isBlogAsset(p)) {
                    await copyOne(p);
                }
            });

            server.watcher.on("unlink", async (p) => {
                if (p.startsWith(blogSrcDir) && isBlogAsset(p)) {
                    await removeOne(p);
                }
            });
        },
    };
}

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
        // netlify(),
        nitro(),
        copyBlogAssets(),
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
