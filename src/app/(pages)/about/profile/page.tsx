import Frame from "@/app/_ui/atoms/Frame";

import { Container } from "./style";
import Text from "@/app/_ui/atoms/Text";

const ProfilePage = () => {
    return (
        <Container>
            <Frame
                direction={'column'}
                marginX={16}
                marginY={80}
            >
                <Text title marginY={12}>Perfil...</Text>
                <Text>...em desenvolvimento</Text>
            </Frame>
        </Container>
    );
}
 
export default ProfilePage;