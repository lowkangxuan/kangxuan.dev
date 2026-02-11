import { Github, Linkedin, Mail } from "lucide-react";
import type { ReactElement } from "react";

const SIZE = 20;

export const SOCIAL_LINKS: Array<{icon: ReactElement, name: string, href: string}> = [
    {
        icon: <Github size={SIZE} />,
        name: "GitHub",
        href: "https://github.com/lowkangxuan",
    },
    {
        icon: <Linkedin size={SIZE} />,
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/low-kang-xuan/",
    },
    {
        icon: <Mail size={SIZE} />,
        name: "Mail",
        href: "mailto:lowkangxuan@gmail.com"
    }
]