export interface Project {
    id: string;
    title: string;
    description: string;
    urls: {
        website: string;
        instagram?: string;
    }
}