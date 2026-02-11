import type { ExperienceData } from "@/type/GenericTypes";

export const data: Array<ExperienceData> = [
    {
        name: "Trueworld Studios",
        logo: "/experience/TWS.png",
        status: "Intern",
        from: "09.2022",
        to: "04.2023",
        role: "Game Developer",
        description: `
- Contributed to the development of UNYIELDER, a single-player roguelite movement-FPS published on Steam.
- Implemented gameplay systems and in-game User Interfaces using Unreal Engine 5.
- Worked closely with artists and game designers to iterate on mechanics and player experience.
- Gained meaningful experience working in a production-level game development pipeline.
`,
        skills: ["Unreal Engine 5", "Adobe Photoshop"],
    },
    {
        name: "HelloHolo",
        logo: "/experience/HelloHolo.png",
        status: "Intern",
        from: "02.2021",
        to: "03.2021",
        role: "Mixed Reality Developer",
        description: `
- Developed mixed reality applications using Unity for HoloLens 1 and 2.
- Implemented interactive MR features across multiple client projects.
- Collaborated with designers and developers to prototype and deliver immersive experiences under tight timelines.
`,
        skills: ["Unity Game Engine"],
    }
];