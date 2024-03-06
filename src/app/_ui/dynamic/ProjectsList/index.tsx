import Link from "next/link";

import { IMAGES_PREVIEW } from "@/app/_lib/constants/images";
import { getProjects } from "@/app/api/Projects/service";
import { asyncProjects } from "@/app/_lib/tests/mock-projects";

import { PreviewImage, ProjectDescription, ProjectPreview } from "./style";
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
                    <Card key={index} gapX={40}>
                        {index % 2 !== 0 &&
                            <ProjectPreview>
                                <PreviewImage src={IMAGES_PREVIEW[item.id].src} />
                            </ProjectPreview>
                        }
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
                        {index % 2 == 0 &&
                            <ProjectPreview>
                                <PreviewImage src={IMAGES_PREVIEW[item.id].src} />
                            </ProjectPreview>
                        }
                    </Card>
                )
            })}
        </List>
    );
}

export default ProjectsList;