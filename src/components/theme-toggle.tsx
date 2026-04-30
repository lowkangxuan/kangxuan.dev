import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/theme-provider.tsx";
import { Button } from "@/components/ui/button.tsx";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    function onClick() {
        if (theme === "light") {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }

    return (
        <Button variant="outline" size="icon-lg" onClick={onClick} className="rounded-full dark:bg-background dark:hover:bg-primary-foreground text-muted-foreground shadow-md">
            {theme === "light" ? <Sun size={14} /> : <Moon size={16} />}
        </Button>
    );
}
