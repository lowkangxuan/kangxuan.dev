import {
    ExternalLink,
    Home,
    PencilLine,
    Presentation,
    Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button.tsx";
import { Kbd } from "@/components/ui/kbd.tsx";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command.tsx";
import { navLinks } from "@/data/nav-links.ts";
import { sortedPosts } from "@/data/sorted-posts.ts";
import { PROJECTS } from "@/data/projects.ts";

const menuIcons = {
    "home": <Home />,
    "projects": <Presentation />,
    "blog": <PencilLine />,
}

export function SearchMenu() {
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return (
        <>
            <Button
                variant="outline"
                size="icon-lg"
                className="rounded-full dark:bg-background dark:hover:bg-primary-foreground text-muted-foreground md:hidden shadow-md transition-none"
                onClick={() => setOpen(true)}
            >
                <Search />
            </Button>
            <Button
                variant="outline"
                size="lg"
                className="rounded-full dark:bg-background dark:hover:bg-primary-foreground text-muted-foreground max-md:hidden shadow-md transition-none"
                onClick={() => setOpen(true)}
            >
                <Search />
                <div className="flex gap-1">
                    <Kbd>⌘</Kbd>
                    <Kbd>K</Kbd>
                </div>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <Command className="min-h-104 gap-4">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Menu">
                            {navLinks.map(link => {
                                return (
                                    <CommandItem
                                        key={link.key}
                                        onSelect={() => {
                                            navigate({
                                                to: link.to,
                                            });
                                            setOpen(false);
                                        }}
                                    >
                                        {menuIcons[link.key]}
                                        {link.label}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                        <CommandGroup heading="Projects">
                            {PROJECTS.map(project => {
                                return (
                                    <CommandItem
                                        key={project.name}
                                        onSelect={() => {
                                            window.open(project.href, "_blank", "noopener,noreferrer");
                                        }}
                                    >
                                        <ExternalLink />
                                        {project.name}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                        <CommandGroup heading="Blog">
                            {sortedPosts.map(post => {
                                return (
                                    <CommandItem
                                        key={post.title}
                                        onSelect={() => {
                                            navigate({
                                                to: "/blog/$slug",
                                                params: { slug: post.slug },
                                            });
                                            setOpen(false);
                                        }}
                                    >
                                        <ExternalLink />
                                        {post.title}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </CommandDialog>
        </>

    )
}
