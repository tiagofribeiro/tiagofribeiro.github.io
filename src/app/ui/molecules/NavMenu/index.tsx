'use client'

import { useState } from "react";

import ICONS from "@/app/lib/constants/icons";
import { MENU_ITEMS } from "@/app/lib/constants/menu";

import { DropFrame, DropItem, Frame, Item } from "./style";
import Text from "../../atoms/Text";

const NavMenu = () => {
    const [aboutOpen, setAboutOpen] = useState(false);

    const setFunctions = (index: number) => {
        if (index == 0) {
            return {
                onPointerEnter: () => setAboutOpen(true),
                onPointerLeave: () => setTimeout(() => setAboutOpen(false), 300),
            }
        }
    }

    const setIconStyle = (index: number) => {
        if (index == 0) {
            return {
                fill: aboutOpen ? '#00CE78' : undefined,
                style: {
                    transform: aboutOpen ? 'rotate(180deg)' : '',
                    transition: 'transform 300ms ease',
                },
            }
        }
    }

    return (
        <Frame>
            {MENU_ITEMS.map((item, index) => {
                return (
                    <Item
                        key={index}
                        href={item.route}
                        {...setFunctions(index)}
                    >
                        <Text>
                            {item.text}
                        </Text>
                        {
                            item.subItems &&
                            <ICONS.arrow
                                width={12}
                                height={12}
                                {...setIconStyle(index)}
                            />
                        }
                    </Item>
                )
            })}
        </Frame >
    );
}

export default NavMenu;