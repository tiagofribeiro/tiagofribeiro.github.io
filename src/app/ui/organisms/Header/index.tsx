import Image from "next/image";
import Link from "next/link";

import { MENU_ITEMS } from "@/app/lib/constants/routes";

import { Content, Frame } from "./style"
import NavMenu from "../../molecules/NavMenu";

const Header = () => {
    return (
        <Frame>
            <Content>
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
            </Content>
        </Frame>
    );
}

export default Header;