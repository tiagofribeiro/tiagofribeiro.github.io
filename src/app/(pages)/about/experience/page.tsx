import Frame from "@/app/_ui/atoms/Frame";

import { Container } from "./style";
import Text from "@/app/_ui/atoms/Text";

const ExperiencePage = () => {
    return (
        <Container>
            <Frame
                direction={'column'}
                marginX={16}
                marginY={80}
            >
                <Text title marginY={12}>Minhas experiências...</Text>
                <Text>...em desenvolvimento</Text>
            </Frame>
        </Container>
    );
}

export default ExperiencePage;