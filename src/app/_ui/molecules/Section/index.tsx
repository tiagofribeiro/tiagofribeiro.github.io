import { Container } from "./style";
import Text from "../../atoms/Text";
import { SectionTypes } from "./types";

const Section = ({ title, main, children }: SectionTypes) => {
    return (
        <Container>
            {title &&
                <Text 
                    title 
                    as={main ? 'h1' : 'h3'}
                    maxW={main ? 40 : 100}>
                    {title}
                    <Text
                        bold
                        fontSize={main ? 60 : 32}
                        color={'var(--green-300)'}
                    >_
                    </Text>
                </Text>
            }
            {children}
        </Container>
    );
}

export default Section;