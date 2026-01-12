// components/theme-provider.tsx
import { createContext, type PropsWithChildren, use, useEffect, useMemo, useState } from "react";
import type {T as Theme} from "@/lib/theme";
import { setThemeServerFn  } from "@/lib/theme";

type ThemeContextVal = { theme: Theme; setTheme: (val: Theme) => void };
const ThemeContext = createContext<ThemeContextVal | null>(null);

function applyThemeClass(theme: Theme) {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
}

export function ThemeProvider({ children, theme: initialTheme }: PropsWithChildren<{ theme: Theme }>) {
    const [theme, setThemeState] = useState<Theme>(initialTheme);

    useEffect(() => {
        applyThemeClass(theme);
    }, [theme]);

    const setTheme = (next: Theme) => {
        setThemeState(next);

        void setThemeServerFn({ data: next }).catch(() => {
            setThemeState(prev => prev === "light" ? "dark" : "light");
        });
    };

    const value = useMemo(() => ({ theme, setTheme }), [theme]);
    return <ThemeContext value={value}>{children}</ThemeContext>;
}

export function useTheme() {
    const val = use(ThemeContext);
    if (!val) throw new Error("useTheme called outside of ThemeProvider!");
    return val;
}
