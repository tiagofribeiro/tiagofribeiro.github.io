import { MainButton } from "./style";
import { ButtonTypes } from "./types";

const Button = ({ children }: ButtonTypes) => {
    return (
            <MainButton>
                {children}
            </MainButton>
    );
}

export default Button;