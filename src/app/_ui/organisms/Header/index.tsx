import Image from "next/image";
import Link from "next/link";

import { MENU_ITEMS } from "@/app/_lib/constants/routes";
import Logo from "../../../../../public/logo.svg";

import { Container } from "./style"
import NavMenu from "../../molecules/NavMenu";
import Frame from "../../atoms/Frame";

const Header = () => {
    return (
        <Container>
            <Frame
                marginX={24}
                align={'center'}
                justify={'space-between'}
            >
                <Link href={'/'}>
                    <Image
                        priority
                        width={120}
                        height={32}
                        src={Logo}
                        alt={'Logo'}
                    />
                </Link>
                <NavMenu
                    mobile={false}
                    visible={true}
                    items={MENU_ITEMS}
                />
            </Frame>
        </Container>
    );
}

export default Header;