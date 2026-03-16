import { LaptopMinimal, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/theme-provider.tsx";

function ToggleButton({theme, currentTheme, children, onClick}) {
    return (
        <button data-selected={theme === currentTheme ? "true" : undefined} onClick={onClick} className="rounded-full border border-transparent p-1.5 dark:data-selected:bg-muted-foreground/15 dark:data-selected:border-muted-foreground/30 data-selected:bg-background data-selected:border-border">
            {children}
        </button>
    )
}

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex rounded-full bg-secondary p-0.5">
            {/*<ToggleButton theme="system"  currentTheme={theme} onClick={() => setTheme("system")}><LaptopMinimal size={14} /></ToggleButton>*/}
            <ToggleButton theme="light"   currentTheme={theme} onClick={() => setTheme("light") }><Sun           size={14} /></ToggleButton>
            <ToggleButton theme="dark"    currentTheme={theme} onClick={() => setTheme("dark")  }><Moon          size={14} /></ToggleButton>
        </div>
    );
}
