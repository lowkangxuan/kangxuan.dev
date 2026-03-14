import { Link } from "@tanstack/react-router";
import type { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

interface LinkButtonProps extends ButtonPrimitive.Props {
    to: string;
    params?: Record<string, string>;
}

export function LinkButton({
    to,
    params,
    className,
    variant = "default",
    size = "default",
    children,
    ...props
}: LinkButtonProps & VariantProps<typeof buttonVariants>) {
    return (
        <Link
            to={to}
            params={params}
            className={buttonVariants({variant: variant, size: size, className: className})}
        >
            { children}
        </Link>
    )
}
