import { Link } from "@tanstack/react-router";
import { navLinks } from "@/data/nav-links.ts";
import { ThemeToggle } from "@/components/theme-toggle.tsx";
import { SearchMenu } from "@/components/search-menu.tsx";

export function SiteNav() {
    return (
        <div className="flex fixed items-center bottom-6 left-[50%] translate-x-[-50%] gap-2 z-[999]">
            <ThemeToggle />
            <div className="flex bg-background px-4 rounded-full border items-center max-h-10 shadow-md">
                {navLinks.map((nav) => {
                    return (
                        <Link
                            {...nav}
                            key={nav.to}
                            to={nav.to}
                            activeProps={{ className: "font-bold" }}
                            inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                            className="px-2 py-2 transition-colors"
                        >
                            {nav.label}
                        </Link>
                    );
                })}
            </div>
            <SearchMenu />
        </div>
    )
}