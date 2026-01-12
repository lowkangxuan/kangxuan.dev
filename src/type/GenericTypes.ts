interface BaseData {
    name: string,
    from: string,
    to: string | "present",
    description?: string,
    skills?: Array<string>,
}

export interface ExperienceData extends BaseData {
    status: string,
    role: string,
}

export interface EducationData extends BaseData {
    course: string,
}