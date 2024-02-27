import Link from "next/link";

import { getProjects } from "@/app/api/Projects/service";
import { asyncProjects } from "@/app/_lib/tests/mock-projects";

import { ProjectDescription, ProjectPreview } from "./style";
import List from "../../atoms/List";
import Card from "../../atoms/Card";
import Text from "../../atoms/Text";

const ProjectsList = async () => {
    const projects = await getProjects();
    // const projects = await asyncProjects();

    return (
        <List
            direction={'column'}
            marginY={40}
            gapY={40}
        >
            {projects.map((item, index) => {
                return (
                    <Card key={index}>
                        <ProjectDescription>
                            <Text bold fontSize={32}>
                                {item.title}
                            </Text>
                            <Text>{item.description}</Text>
                            <Link
                                style={{ color: 'var(--green-300)' }}
                                href={item.urls.website}
                            >
                                <Text>
                                    {item.urls.website}
                                </Text>
                            </Link>
                        </ProjectDescription>
                        <ProjectPreview>(Imagem)</ProjectPreview>
                    </Card>
                )
            })}
        </List>
    );
}

export default ProjectsList;