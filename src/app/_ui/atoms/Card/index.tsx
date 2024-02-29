import { Container } from "./style";
import { CardTypes } from "./types";

const Card = ({ children, onClick, gapX, gapY, paddingX, paddingY, bgColor }: CardTypes) => {
    return (
        <Container
            onClick={onClick}
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