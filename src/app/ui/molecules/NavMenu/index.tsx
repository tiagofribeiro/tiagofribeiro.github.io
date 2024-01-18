'use client'

import Image from "next/image";

import { Frame, Item } from "./style";
import Text from "../../atoms/Text";

// const [aboutOpen, setAboutOpen] = useState(false);

const onEnter = () => {
    console.log("Entrou!")
}

const onLeave = () => {
    console.log("Saiu :(")
}

const NavMenu = () => {
    return (
        <Frame>
            <Item
                href={'/'}
                onPointerEnter={onEnter}
                onPointerLeave={onLeave}
            >
                <Text>Sobre</Text>
                <Image
                    width={12}
                    height={12}
                    src={'./icons/arrow-down.svg'}
                    alt={''}
                />
            </Item>
            <Item href={'/projects'}>
                <Text>Projetos</Text>
            </Item>
            <Item href={'/contact'}>
                <Text>Contato</Text>
            </Item>
        </Frame>
    );
}

export default NavMenu;