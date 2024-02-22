import { Project } from "@/app/_models/project";

const getProjects = async (): Promise<Project[]> => {
    try {
        const url = process.env.NEXT_PUBLIC_ROUTE_PROJECTS ?? 'http://localhost:3000/api/Projects';
        const res = await fetch(url);

        if (res.status == 500) {
            throw 'Não foi possível recuperar os dados no momento.'
        }

        return res.json();
    } catch (error) {
        return [];
    }
};

export { getProjects }