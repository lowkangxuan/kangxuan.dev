import { Link, linkOptions } from "@tanstack/react-router";
import { ModeToggle } from "@/components/theme-toggle.tsx";
import { MobileNav } from "@/components/MobileNav.tsx";

export function SiteHeader() {
    const navLinks = linkOptions([
        {
            to: "/",
            label: "Home",
            activeOptions: { exact: true },
        },
        {
            to: "/showcase",
            label: "Showcase",
        },
        {
            to: "/blog",
            label: "Blog",
        },
    ]);

    return (
        <header className="sticky p-2 pb-0 overflow-x-hidden">
            <div className="line-before line-after flex items-center justify-between gap-4 border-x px-4 py-3 mx-auto max-w-3xl">
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
                <ModeToggle />
                <MobileNav className="sm:hidden" />
            </div>
        </header>
    );
}
