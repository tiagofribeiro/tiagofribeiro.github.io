import { Container } from "./style";
import { CardTypes } from "./types";

const Card = ({ children, gapX, gapY, paddingX, paddingY, bgColor }: CardTypes) => {
    return (
        <Container
            $gapX={gapX}
            $gapY={gapY}
            $paddingX={paddingX}
            $paddingY={paddingY}
            $bgColor={bgColor}
        >
            {children}
        </Container>
    );
}

export default Card;