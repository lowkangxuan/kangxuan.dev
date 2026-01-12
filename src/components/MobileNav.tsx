import { MoreHorizontalIcon, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MobileNav({className}: {className: string}) {
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
                    <DropdownMenuLabel>File Actions</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            New File...
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Share...
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>Download</DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
