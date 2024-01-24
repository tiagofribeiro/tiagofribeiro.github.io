import Image from "next/image";
import Link from "next/link";

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
                <NavMenu />
            </Content>
        </Frame>
    );
}

export default Header;