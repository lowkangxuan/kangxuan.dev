import { MoreHorizontalIcon, X } from "lucide-react"

import { Button } from "@/components/ui/button.tsx"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx"
import { navLinks } from "@/data/nav-links.ts";
import { Link } from "@tanstack/react-router";

export function MobileHeader({className}: {className: string}) {
    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button
                        className={`${className} group`}
                        variant="outline"
                        aria-label="Open menu"
                        size="icon-sm"
                    >
                        <span className="group-data-[state=open]:hidden"><MoreHorizontalIcon /></span>
                        <span className="group-data-[state=closed]:hidden"><X /></span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                    <DropdownMenuGroup>
                        {navLinks.map((nav) => {
                            return (
                                <DropdownMenuItem asChild>
                                    <Link
                                        {...nav}
                                        key={nav.to}
                                        to={nav.to}
                                        activeProps={{ className: "font-bold" }}
                                    >
                                        {nav.label}
                                    </Link>
                                </DropdownMenuItem>
                            );
                        })}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
