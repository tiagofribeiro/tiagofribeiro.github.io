import { Frame } from "./style";
import { NavMenuTypes } from "./types";
import NavItem from "../NavItem";

const NavMenu = ({mobile, visible, items}: NavMenuTypes) => {

    return (
        <Frame>
            {items.map((item, index) => {
                return (
                    <NavItem
                        key={index}
                        text={item.text}
                        route={item.route}
                        subItems={item.subItems}
                    />
                )
            })}
        </Frame >
    );
}

export default NavMenu;