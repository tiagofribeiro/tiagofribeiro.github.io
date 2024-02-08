import { Container } from "./style";
import { CardTypes } from "./types";

const Card = ({children}: CardTypes) => {
    return ( 
        <Container>
            {children}
        </Container>
     );
}
 
export default Card;