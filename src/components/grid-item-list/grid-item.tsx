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
                className="flex flex-col h-full gap-2 p-2 bg-background dark:bg-background/65 rounded-xl border border-muted-foreground/30"
            >
                <div className="rounded-lg overflow-hidden border bg-muted aspect-video">
                    {thumbnailUrl ? (
                        <img
                            src={thumbnailUrl}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="bg-muted h-full w-full" />
                    )}
                </div>
                <div className="flex flex-col gap-2 px-2 text-xs text-muted-foreground">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-base text-primary max-w-52">
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