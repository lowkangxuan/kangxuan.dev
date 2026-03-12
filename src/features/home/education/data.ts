import type { EducationData } from "@/types/GenericTypes.ts";

export const EDUCATION_DATA: Array<EducationData> = [
    {
        name: "Nanyang Technological University",
        logo: "education/NTU.png",
        course: "Bachelor Degree in Computer Science",
        from: "08.2025",
        to: "present",
        description: `
- Learnt the basics of Computer Architecture.
- Exposed to Data Structures & Algorithms.
`,
        skills: ["Python", "Java", "C/C++", "Data Structures", "Algorithms"],
    },
    {
        name: "Ngee Ann Polytechnic",
        logo: "/education/NP.png",
        course: "Diploma in Immersive Media",
        from: "04.2020",
        to: "04.2023",
        description: `
- Director's List for Excellent Academic Performance 2020.
- Best Performance in the module Interactive Development.
- Took up the Interactive Development module and applied knowledge learnt to develop full-stack web applications.
`,
        skills: ["HTML", "CSS", "JavaScript", "Python", "CSharp", "Unity Game Engine", "Game Design and Development", "UI/UX Design"],
    }
]