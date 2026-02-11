import { Link } from "@tanstack/react-router";

type LinkProps =
  | {
      to: string
      params?: never
      newTab?: boolean
    }
  | {
      to: string
      params: Record<string, string>
      newTab?: boolean
    }

interface GridItemProps {
    title: string,
    description?: string,
    thumbnailUrl?: string,
    date?: string,
    link: LinkProps
}

export function GridItem({ title, description, thumbnailUrl, date, link }: GridItemProps) {
    return (
        <div className="p-1 bg-muted odd:line-before odd:line-after">
            <Link
                to={link.to}
                {...("params" in link ? { params: link.params } : {})}
                {...(link.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex flex-col gap-1 h-full p-2 bg-background dark:bg-background/65 rounded-xl border border-muted-foreground/30"
            >
                <div className="flex-1 rounded-lg overflow-hidden">
                    {thumbnailUrl ? (
                        <img src={thumbnailUrl} alt="" className="rounded-lg border" />
                    ) : (
                        <div className="bg-muted h-full"></div>
                    )}
                </div>
                <div className="flex flex-col gap-2 px-2 text-xs text-muted-foreground">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-base text-primary">
                            {title}
                        </h2>
                        {date && <span>{date}</span>}
                    </div>
                    {description && <p>{description}</p>}
                </div>
            </Link>
        </div>
    );
}