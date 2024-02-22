import MenuIcon from "../../../../public/icons/menu";
import ArrowIcon from "../../../../public/icons/arrow";

import GithubIcon from "../../../../public/icons/social/github";
import LinkedinIcon from "../../../../public/icons/social/linkedin";

import HtmlIcon from "../../../../public/icons/stack/html";
import JsIcon from "../../../../public/icons/stack/js";
import ReactIcon from "../../../../public/icons/stack/react";
import FlutterIcon from "../../../../public/icons/stack/flutter";
import PythonIcon from "../../../../public/icons/stack/python";
import CSharpIcon from "../../../../public/icons/stack/csharp";
import MongoIcon from "../../../../public/icons/stack/mongo";
import SQliteIcon from "../../../../public/icons/stack/sqlite";

interface IconsTypes {
    [key: string]: React.JSX.ElementType;
}

const ICONS: IconsTypes = {
    menu: MenuIcon,
    arrow: ArrowIcon,
    github: GithubIcon,
    linkedin: LinkedinIcon,
}

const ICONS_STACK: IconsTypes = {
    html: HtmlIcon,
    js: JsIcon,
    react: ReactIcon,
    flutter: FlutterIcon,
    python: PythonIcon,
    csharp: CSharpIcon,
    mongo: MongoIcon,
    sqlite: SQliteIcon,
}

export { ICONS, ICONS_STACK };