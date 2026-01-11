import { Link, linkOptions } from "@tanstack/react-router";
import { ModeToggle } from "@/components/theme-toggle.tsx";

export function SiteHeader() {
    const options = linkOptions([
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
        <header className="sticky">
            <div className="flex items-center justify-between">
                <nav>
                    {options.map((option) => {
                        return (
                            <Link
                                {...option}
                                key={option.to}
                                to={option.to}
                                activeProps={{ className: "font-bold" }}
                            >
                                {option.label}
                            </Link>
                        );
                    })}
                </nav>
                <ModeToggle />
            </div>
        </header>
    );
}
