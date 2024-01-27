interface HomeTextTypes {
    [key: string]: string | string[];
}

const HOME_TEXT: HomeTextTypes = {
    main: ["Olá, eu sou o Tiago", "_"],
    sub: "Um dev que gosta de programar um monte de coisa.",
    title1: "Projetos",
    title2: "Skills",
    title3: "Experiências",
    subtitle3: "Minha trajetória profissional ao longo dos \búltimos \b10 \banos." ,
    title4: "Fala comigo :P",
    subtitle4: "Se você tiver algo para me dizer, sinta-se à vontade enviar uma mensagem.",
    footer1: "TGFR_ 2024",
    footer2: "Código feito no Visual Studio Code e design no Figma \nDesenvolvido com Next.js"
};

const HOME_LINKS: HomeTextTypes = {
    github: "/tiagofribeiro",
    linkedin: "/in/tiago-fernandes-ribeiro"
}

export {HOME_TEXT, HOME_LINKS}