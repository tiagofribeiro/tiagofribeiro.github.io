import { collection, getDocs } from "firebase/firestore";

import { Project } from "@/app/_models/project";

import { getDb } from "../firebase";

export const dynamic = "force-dynamic"; 

export const GET = async () => {
    const projects: Project[] = [];

    try {
        const db = getDb();
        const snapshot = await getDocs(collection(db, 'projects'));

        snapshot.forEach((doc) => {
            projects.push(doc.data() as Project);
        })

        if (snapshot.docs.length == 0) {
            return Response.json({ message: "Nenhum projeto encontrado." }, { status: 200 });
        }

        return Response.json(projects, { status: 200 });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error"
        return Response.json({ message: "ERROR: " + message }, { status: 500 });
    }
}  