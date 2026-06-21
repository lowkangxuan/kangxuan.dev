import type { EducationData } from "@/types/GenericTypes.ts";

export const EDUCATION_DATA: Array<EducationData> = [
    {
        name: "Nanyang Technological University",
        logo: "education/NTU.png",
        course: "Bachelor Degree in Computer Science",
        from: "08.2025",
        to: "present",
        description: `
Relevant Courseworks:
- SC1003: Introduction to Computational Thinking & Programming
- SC1006: Computer Organisation & Architecture
- SC1007: Data Structures & Algorithms
- SC2002: Object Oriented Design & Programming
`,
        skills: ["Python", "Java", "Data Structures", "Algorithms"],
    },
    {
        name: "Ngee Ann Polytechnic",
        logo: "/education/NP.png",
        course: "Diploma in Immersive Media",
        from: "04.2020",
        to: "04.2023",
        description: `
- Director's List for Excellent Academic Performance 2020.

Relevant Coursework:
- Interactive Development
- Best Performance in the module Interactive Development.
`,
        skills: ["HTML", "CSS", "JavaScript", "Python", "UI/UX Design"],
    }
]