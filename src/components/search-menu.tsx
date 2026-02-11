import {
    ExternalLink,
    Home,
    PencilLine,
    Presentation,
    Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
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
import {navLinks} from "@/data/nav-links.ts";
import { sortedPosts } from "@/data/sorted-posts.ts";
import { PROJECTS } from "@/data/projects.ts";

const menuIcons = {
    "home": <Home />,
    "projects": <Presentation />,
    "blog": <PencilLine />,
}

export function SearchMenu() {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const down = (e) => {
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
            <Button variant="outline" size="sm" className="rounded-full text-muted-foreground" onClick={() => setOpen(true)}>
                <Search /> Search...
                <div className="flex gap-1 max-md:hidden">
                    <Kbd>⌘</Kbd>
                    <Kbd>K</Kbd>
                </div>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <Command className="min-h-[22rem]">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Menu">
                            {navLinks.map(link => {
                                return (
                                    <CommandItem asChild key={link.key}>
                                        <Link to={link.to} onClick={() => setOpen(false)}>
                                            {menuIcons[link.key]}
                                            {link.label}
                                        </Link>
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                        <CommandGroup heading="Projects">
                            {PROJECTS.map(project => {
                                return (
                                    <CommandItem asChild key={project.name}>
                                        <Link to={project.href} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink />
                                            {project.name}
                                        </Link>
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                        <CommandGroup heading="Blog">
                            {sortedPosts.map(post => {
                                return (
                                    <CommandItem asChild key={post.title}>
                                        <Link to="/blog/$slug" params={{ slug: post.slug }} onClick={() => setOpen(false)}>
                                            <ExternalLink />
                                            {post.title}
                                        </Link>
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
                <div className="border-t">
                    test
                </div>
            </CommandDialog>
        </>

    )
}