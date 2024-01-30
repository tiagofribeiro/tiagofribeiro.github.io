import { Container } from "./style";
import { FlexibleListTypes } from "./types";

const FlexibleList = ({
    gapX,
    gapY,
    marginX,
    marginY,
    direction,
    children
}: FlexibleListTypes) => {
    return (
        <Container
            $gapX={gapX}
            $gapY={gapY}
            $marginX={marginX}
            $marginY={marginY}
            $direction={direction}
        >
            {children}
        </Container>
    );
}

export default FlexibleList;