import Link from "next/link";

import { getProjects } from "@/app/api/Projects/service";

import { CardDescription, CardImage } from "./style";
import List from "../../atoms/List";
import Card from "../../atoms/Card";
import Text from "../../atoms/Text";

const ProjectsList = async () => {
    const projects = await getProjects();

    return (
        <List
            direction={'column'}
            marginY={40}
            gapY={40}
        >
            {projects.map((item, index) => {
                return (
                    <Card key={index}>
                        <CardDescription>
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
                        </CardDescription>
                        <CardImage>(Imagem)</CardImage>
                    </Card>
                )
            })}
        </List>
    );
}

export default ProjectsList;