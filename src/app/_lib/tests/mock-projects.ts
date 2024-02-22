import { Project } from "@/app/_models/project"

const setProjects = (): Project[] => {
    let projects = [
        {
            "urls":
            {
                "instagram": "https://www.instagram.com/smashsportsmgmt/",
                "website": "https://smash-sports-mgmt.web.app/"
            },
            "description": "Website para a divulgação, captação e interação com talentos emergentes no cenário esportivo.",
            "title": "Smash Sports Mgmt."
        },
        {
            "description": "Site apresentando e aplicando o conteúdo de um antigo material de estudos de Front-end.",
            "title": "Guia Básico de HTML",
            "urls":
            {
                "website": "https://tiagofribeiro.github.io/html-basics/"
            }
        }
    ]

    return projects
}

export const asyncProjects = async (): Promise<Project[]> => {
    return new Promise<Project[]>((res) => { setTimeout(() => res(setProjects()), 5000) })
}