import { SOCIAL_LINKS } from "@/data/social-links.tsx";

export function SiteFooter() {
    return (
        <>
            <footer className=" p-2 pt-0 overflow-x-hidden">
                <div className="line-before line-after md:max-w-3xl mx-auto border-x">
                    <div className="flex items-center justify-between text-muted-foreground">
                        <span className="text-xs pl-4">
                            Source code available on my GitHub
                        </span>
                        <div className="flex ml-auto">
                            {SOCIAL_LINKS.map((link) => (
                                <a href={link.href} target="_blank" rel="noopener noreferrer" className="p-3 border-l border-border">{link.icon}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}