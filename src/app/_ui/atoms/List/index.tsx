import { Container } from "./style";
import { ListTypes } from "./types";

const List = ({
    gapX,
    gapY,
    marginX,
    marginY,
    direction,
    children
}: ListTypes) => {
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

export default List;