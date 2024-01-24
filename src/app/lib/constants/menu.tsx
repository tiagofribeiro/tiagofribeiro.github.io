interface ItemTypes {
    text: string;
    route: string;
    subItems?: ItemTypes[];
}

const ABOUT_ITEMS: ItemTypes[] = [
    {
        text: 'Perfil',
        route: '/about/profile',
    },
    {
        text: 'Experiências',
        route: '/about/experience',
    },
]

const MENU_ITEMS: ItemTypes[] = [
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