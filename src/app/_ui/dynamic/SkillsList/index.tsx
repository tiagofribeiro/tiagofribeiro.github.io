import { ICONS_STACK } from "@/app/_lib/constants/icons";

import List from "../../atoms/List";

const SKILLS = [
    <ICONS_STACK.html key={'html'} width={60} height={60} />,
    <ICONS_STACK.js key={'js'} width={60} height={60} />,
    <ICONS_STACK.react key={'react'} width={60} height={60} />,
    <ICONS_STACK.flutter key={'flutter'} width={60} height={60} />,
    <ICONS_STACK.python key={'python'} width={60} height={60} />,
    <ICONS_STACK.csharp key={'csharp'} width={60} height={60} />,
    <ICONS_STACK.sqlite key={'sqlite'} width={60} height={60} />,
    <ICONS_STACK.mongo key={'mongo'} width={60} height={60} />,
    <ICONS_STACK.firebase key={'firebase'} width={60} height={60} />,
]

const SkillsList = async () => {
    return (
        <List marginY={40} gapX={40}>
            {SKILLS.map((item) => item)}
        </List>
    );
}

export default SkillsList;