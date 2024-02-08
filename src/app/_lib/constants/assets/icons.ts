
import ArrowSvg from "../../../../../public/icons/arrow";
import GithubSvg from "../../../../../public/icons/github";
import LinkedinIcon from "../../../../../public/icons/linkedin";
import MenuIcon from "../../../../../public/icons/menu";

interface IconsTypes {
    [key: string]: React.JSX.ElementType;
}

const ICONS: IconsTypes = {
    arrow: ArrowSvg,
    github: GithubSvg,
    linkedin: LinkedinIcon,
    menu: MenuIcon,
}

export default ICONS;