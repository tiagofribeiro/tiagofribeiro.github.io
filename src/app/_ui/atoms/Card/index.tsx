import { Container } from "./style";
import { CardTypes } from "./types";

const Card = ({ children, gapX, gapY, paddingX, paddingY, bgColor, hasClick, onClick }: CardTypes) => {
    return (
        <Container
            $gapX={gapX}
            $gapY={gapY}
            $paddingX={paddingX}
            $paddingY={paddingY}
            $bgColor={bgColor}
            $hasClick={hasClick}
            onClick={onClick}
        >
            {children}
        </Container>
    );
}

export default Card;