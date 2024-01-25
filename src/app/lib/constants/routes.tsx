import { NavItemTypes } from "@/app/ui/molecules/NavItem/types";

const ABOUT_ITEMS: NavItemTypes[] = [
    {
        text: 'Perfil',
        route: '/about/profile',
    },
    {
        text: 'Experiências',
        route: '/about/experience',
    },
]

const MENU_ITEMS: NavItemTypes[] = [
    {
        text: 'Sobre',
        route: '#',
        subItems: ABOUT_ITEMS,
    },
    {
        text: 'Projetos',
        route: '/projects',
    },
    {
        text: 'Contato',
        route: '/contact',
    },
];

export { MENU_ITEMS }