import { Link } from "@tanstack/react-router";
import { TECH_STACK, TECH_STACK_CATEGORIES } from "./tech-stack";
import { Panel, PanelHeader, PanelSection } from "@/components/main-panel";
import { useTheme } from "@/hooks/theme-provider.tsx";

export function Skills() {
    const { theme } = useTheme();

    return (
        <Panel>
            <PanelHeader>Stack</PanelHeader>
            <PanelSection className="relative p-0 [--col-left:--spacing(48)]">
                <div className="absolute w-px h-full bg-border left-(--col-left) max-sm:hidden"></div>
                {TECH_STACK_CATEGORIES.map((category, index) => (
                    <div key={category.key} className="flex flex-col sm:grid sm:grid-cols-[var(--col-left)_1fr] gap-3 sm:gap-0 py-4 not-last:border-b">
                        <span className="text-sm font-medium px-4 content-center">
                            <span className="text-muted-foreground/60">0{index+1} // </span>{category.label}
                        </span>
                        <div className="flex flex-wrap gap-2 px-4">
                            {TECH_STACK.filter((stack) => stack.category === category.key).map(
                                (stack) => (
                                    <Link
                                        key={stack.key}
                                        to={stack.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-6 items-center gap-1.25 rounded-sm border border-muted-foreground/30 bg-muted px-2 text-xs [&>svg]:size-3.5"
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
