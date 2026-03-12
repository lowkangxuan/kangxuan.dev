import type { ExperienceData } from "@/types/GenericTypes";

export const data: Array<ExperienceData> = [
    {
        name: "Trueworld Studios",
        logo: "/experience/TWS.png",
        status: "Intern",
        from: "09.2022",
        to: "04.2023",
        role: "Game Developer",
        description: `
- Contributed to the development of UNYIELDER, a single-player roguelite movement-FPS published on Steam, such as developing gameplay systems and user interfaces within Unreal Engine 5.
- Developed gameplay systems and in-game user interfaces to improve on the overall player experience while working closely with artists and game designers for multiple iterations.
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
- Developed Mixed-Reality (MR) applications for HoloLens 1 and 2 using the Unity game engine and implemented interactive MR features across multiple client projects.
- Collaborated with designers and developers to prototype and deliver immersive experiences under tight timelines.
`,
        skills: ["Unity Game Engine"],
    }
];