'use client'

import { useState } from "react";

import ICONS from "@/app/_lib/constants/assets/icons";

import { Container, Item, SubContainer, SubItem } from "./style"
import Text from "../../atoms/Text";
import { NavItemTypes } from "./types";

const NavItem = ({ mobile, text, route, subItems }: NavItemTypes) => {
    const [hover, setHover] = useState(false);

    return (
        <Container
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <Item href={route} $hover={hover}>
                <Text>{text}</Text>
                {subItems &&
                    <ICONS.arrow
                        width={12}
                        height={12}
                        fill={hover ? 'var(--green-300)' : undefined}
                        style={{
                            transform: hover ? 'rotate(180deg)' : 'none',
                            transition: '300ms',
                            transitionDelay: hover ? '0ms' : '500ms',
                        }}
                    />
                }
            </Item>
            {subItems &&
                <SubContainer $hover={hover}>
                    {subItems.map((item, index) => {
                        return (
                            <SubItem key={index} href={item.route}>
                                <Text alignment={'right'}>{item.text}</Text>
                            </SubItem>
                        )
                    })}
                </SubContainer>
            }
        </Container >
    );
}

export default NavItem;