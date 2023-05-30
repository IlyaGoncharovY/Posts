export type DataSetType = {
    title: string
    iconValue: string
}

export type SocialSetType = {
    href: string
    iconValue: string
}

export const SkillSet: DataSetType[] = [
    {title: "React", iconValue: "vscode-icons:file-type-reactts"},
    {title: "Redux", iconValue: "logos:redux"},
    {title: "Type-script", iconValue: "vscode-icons:file-type-typescript-official"},
    {title: "Java-Script", iconValue: "vscode-icons:file-type-js-official"},
    {title: "HTML", iconValue: "vscode-icons:file-type-html"},
    {title: "CSS", iconValue: "logos:css-3"},
    {title: "Rest-API", iconValue: "dashicons:rest-api"},
    {title: "Git-hub", iconValue: "logos:git-icon"},
    {title: "SASS", iconValue: "vscode-icons:file-type-sass"}
]

export const SocialSet: SocialSetType[] = [
    {href: "https://t.me/ilyaGoncharov93", iconValue: "logos:telegram"},
    {href: "https://github.com/IlyaGoncharovY", iconValue: "el:github"},
    {href: "https://www.linkedin.com/in/ilyagoncharovy/", iconValue: "skill-icons:linkedin"},
]