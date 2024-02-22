import Frame from "@/app/_ui/atoms/Frame";

import { Container } from "./style";
import Text from "@/app/_ui/atoms/Text";

const ProjectsPage = () => {
    return (
        <Container>
            <Frame
                direction={'column'}
                marginX={16}
                marginY={80}
            >
                <Text title marginY={12}>Projetos...</Text>
                <Text>...em desenvolvimento</Text>
            </Frame>
        </Container>
    );
}

export default ProjectsPage;