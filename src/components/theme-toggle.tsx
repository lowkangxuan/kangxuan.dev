import { Moon, Sun, LaptopMinimal } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

type Theme = "dark" | "light" | "system";

function ToggleButton({theme, currentTheme, children, onClick}) {
    return (
        <button data-selected={theme === currentTheme ? "true" : undefined} onClick={onClick} className="rounded-full border border-transparent p-1.5 dark:data-selected:bg-muted-foreground/15 dark:data-selected:border-muted-foreground/30 data-selected:bg-background data-selected:border-border">
            {children}
        </button>
    )
}

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    function toggleTheme(nextTheme: Theme) {
        setTheme(nextTheme);
    }

    return (
        <div className="flex rounded-full bg-secondary p-0.5">
            <ToggleButton theme="system"  currentTheme={theme} onClick={() => toggleTheme("system")}><LaptopMinimal size={14} /></ToggleButton>
            <ToggleButton theme="light"   currentTheme={theme} onClick={() => toggleTheme("light")}><Sun            size={14} /></ToggleButton>
            <ToggleButton theme="dark"    currentTheme={theme} onClick={() => toggleTheme("dark")}><Moon            size={14} /></ToggleButton>
        </div>
    );
}
