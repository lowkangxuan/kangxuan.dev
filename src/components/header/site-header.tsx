import { Link, linkOptions } from "@tanstack/react-router";
import { ModeToggle } from "@/components/theme-toggle.tsx";
import { MobileHeader } from "@/components/header/mobile-header.tsx";
import { navLinks } from "@/data/nav-links.ts";
import { SearchMenu } from "@/components/search-menu.tsx";

export function SiteHeader() {
    return (
        <header className="sticky p-2 pb-0 overflow-x-hidden">
            <div className="line-before line-after flex items-center border-x px-4 py-3 mx-auto max-w-3xl">
                <nav className="flex gap-4 max-sm:hidden">
                    {navLinks.map((nav) => {
                        return (
                            <Link
                                {...nav}
                                key={nav.to}
                                to={nav.to}
                                activeProps={{ className: "font-bold" }}
                            >
                                {nav.label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="flex-1"></div>
                <div className="flex gap-4">
                    <SearchMenu />
                    <ModeToggle />
                    <MobileHeader className="sm:hidden" />
                </div>
            </div>
        </header>
    );
}
