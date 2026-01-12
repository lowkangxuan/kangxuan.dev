type ExperienceData = {
    company: string,
    status: string,
    role: string,
    duration: string,
    description: string,
    techs: Array<string>,
}

export const data: Array<ExperienceData> = [
    {
        company: "Trueworld Studios",
        status: "Intern",
        duration: "09.2022 - 04.2023",
        role: "Game Developer",
        description: `Development Studios
        - TEsting`,
        techs: ["Unreal Engine 5"],
    },
    {
        company: "HelleHolo",
        status: "Intern",
        duration: "02.2021 - 03.2021",
        role: "Mixed Reality",
        description: "Development Studios",
        techs: ["Unity Game Engine", "VS Code"],
    }
];