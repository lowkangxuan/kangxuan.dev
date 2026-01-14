export function TimelineSkillset({skills}: {skills: Array<string> | undefined}) {
    if (skills === undefined) {
        return <></>;
    }

    return (
        <ul className="flex flex-wrap gap-2 pl-9 pt-3">
            {skills.map((skill, index) => {
                return (
                    <li key={index} className="bg-muted border-1 border-muted-foreground/30 rounded-xl text-xs text-muted-foreground px-2 py-1 before:content-['#'] before:mr-0.5">
                        {skill}
                    </li>
                );
            })}
        </ul>
    );
}