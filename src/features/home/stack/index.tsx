import { Link } from "@tanstack/react-router";
import { TECH_STACK, TECH_STACK_CATEGORIES } from "./tech-stack";
import { Panel, PanelHeader, PanelSection } from "@/components/main-panel";
import { useTheme } from "@/hooks/theme-provider.tsx";

export function Skills() {
    const { theme } = useTheme();

    return (
        <Panel>
            <PanelHeader>Stack</PanelHeader>
            <PanelSection className="p-0">
                {TECH_STACK_CATEGORIES.map((category, index) => (
                    <div key={category.key} className="grid grid-cols-[1fr_3fr] not-last:border-b">
                        <span className="text-sm font-medium p-4 content-center border-r">
                            <span className="text-muted-foreground/60">0{index+1} // </span>{category.label}
                        </span>
                        <div className="flex flex-wrap gap-2 p-4">
                            {TECH_STACK.filter((stack) => stack.category === category.key).map(
                                (stack) => (
                                    <Link
                                        key={stack.key}
                                        to={stack.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-6 items-center gap-1.25 rounded-sm text-primary border border-muted-foreground/30 bg-muted px-2 text-xs text-muted-foreground [&>svg]:size-3.5"
                                    >
                                        {theme === "light"
                                            ? stack.icon
                                            : (stack.icon_dark ?? stack.icon)}
                                        {stack.label}
                                    </Link>
                                ),
                            )}
                        </div>
                    </div>
                ))}
            </PanelSection>
        </Panel>
    );
}
