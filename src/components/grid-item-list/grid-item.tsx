import { Link } from "@tanstack/react-router";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";

type LinkProps =
    | {
        to: string
        params?: never
        newTab?: boolean
    }
    | {
        to: string
        params: Record<string, string>
        newTab?: boolean
    }

interface GridItemProps {
    index: number,
    title: string,
    description?: string,
    thumbnailUrl?: string,
    href: string,
    repo?: string,
}

function ImageContainer({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <div className="flex w-full min-w-0 flex-col self-start rounded-lg overflow-hidden border border-border dark:border-input aspect-16/10">
            <div className="grid grid-cols-[1fr_auto_1fr] bg-muted border-b border-border dark:border-input items-center shrink-0 p-2 px-3">
                <div className="flex justify-self-start gap-1.5 items-center">
                    <span className="size-2 rounded-full bg-red-400"></span>
                    <span className="size-2 rounded-full bg-yellow-400"></span>
                    <span className="size-2 rounded-full bg-green-400"></span>
                </div>
                <div className="text-[10px] text-muted-foreground font-mono border bg-white/60 dark:bg-white/5 dark:border-white/10 rounded px-2">
                    {href}
                </div>
            </div>
            <div className="relative min-h-0 flex-1 overflow-hidden">
                {children}
            </div>
        </div>
    )
}

export function GridItem({ index, title, description, thumbnailUrl, href, repo }: GridItemProps) {
    return (
        <div className="flex flex-col group/grid-item sm:grid sm:odd:grid-cols-[2fr_3fr] sm:even:grid-cols-[3fr_2fr] h-full gap-4 p-4 bg-background dark:bg-background/65 not-last:border-b">
            <div className="flex min-w-0 flex-col gap-4 sm:group-even/grid-item:order-last">
                <span className="text-xs text-muted-foreground">[PROJECT // 0{index+1}]</span>
                <div className="flex-1">
                    <h2 className="font-semibold text-lg text-foreground max-w-52 leading-tight mb-2">
                        {title}
                    </h2>
                    <p className="text-md text-muted-foreground font-geist">{description}</p>
                </div>
                <Separator />
                <div className="flex gap-2">
                    <Link
                        to={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                        <ExternalLink /> Live Preview
                    </Link>
                    {repo &&
                        <Link
                            to={repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                            <Github /> Source
                        </Link>
                    }
                </div>
            </div>
            <ImageContainer href={href}>
                {thumbnailUrl ? (
                    <img
                        src={thumbnailUrl}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                ) : (
                    <div className="bg-muted h-full w-full" />
                )}
            </ImageContainer>
        </div>
    );
}
