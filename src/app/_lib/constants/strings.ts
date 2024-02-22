interface TextTypes {
    [key: string]: string;
}

const HOME_TEXT: TextTypes = {
    main: "Olá, eu sou o Tiago",
    sub: `Um dev que gosta de programar um monte de coisa. \nSite em desenvolvimento.`,
    title1: "Projetos",
    title2: "Stack",
    title3: "Experiências",
    subtitle3: "Minha trajetória profissional ao longo dos últimos 10 anos.",
    title4: "Fala comigo :P",
    subtitle4: "Se você tiver algo para me dizer, sinta-se à vontade enviar uma mensagem.",
    footer1: "TGFR_ 2024",
    footer2: "Código feito no Visual Studio Code e design no Figma \nDesenvolvido com Next.js",
    github: "/tiagofribeiro",
    linkedin: "/in/tiago-fernandes-ribeiro",
};

const URLS: TextTypes = {
    github: "https://github.com/tiagofribeiro/",
    linkedin: "https://www.linkedin.com/in/tiago-fernandes-ribeiro/",
}

export { HOME_TEXT, URLS };