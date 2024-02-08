import { Container } from "./style"
import { FrameTypes } from "./types";

const Frame = ({ 
    align, 
    justify, 
    direction,
    marginX = 0, 
    marginY = 0, 
    paddingX = 0, 
    paddingY = 0, 
    children 
}: FrameTypes) => {
    return (
        <Container
            $align={align}
            $justify={justify}
            $direction={direction}
            $marginX={marginX}
            $marginY={marginY}
            $paddingX={paddingX}
            $paddingY={paddingY}
        >
            {children}
        </Container>
    );
}

export default Frame;