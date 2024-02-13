import Image from "next/image";
import Link from "next/link";

import { MENU_ITEMS } from "@/app/_lib/constants/routes";

import { Container } from "./style"
import NavMenu from "../../molecules/NavMenu";
import Frame from "../../atoms/Frame";

const Header = () => {
    return (
        <Container>
            <Frame
                paddingX={24}
                align={'center'}
                justify={'space-between'}
            >
                <Link href={'/'}>
                    <Image
                        priority
                        width={120}
                        height={32}
                        src={'./logo.svg'}
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