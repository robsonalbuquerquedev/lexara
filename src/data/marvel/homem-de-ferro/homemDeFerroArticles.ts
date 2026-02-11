export type HomemDeFerroArticle = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    href: string;
    publishedAtISO?: string;
};

export const homemDeFerroArticles: HomemDeFerroArticle[] = [
    {
        id: 1,
        title: "Homem de Ferro (2008): o nascimento do MCU e o herói que mudou tudo",
        excerpt:
            "Antes de multiversos e sagas épicas, o MCU começou com carisma, improviso e tecnologia. Uma análise de como Tony Stark inaugurou o tom do universo Marvel no cinema.",
        image: "/images/featured/marvel/homem-de-ferro/homem-de-ferro-2008.png",
        category: "Filmes & Séries",
        href: "/filmes-series/marvel/homem-de-ferro/2008-nascimento-mcu",
        publishedAtISO: "2026-02-11T12:00:00-03:00",
    },
    {
        id: 2,
        title: "Tony Stark: carisma, ego e humanidade por trás da armadura",
        excerpt:
            "Mais do que tecnologia, o sucesso do Homem de Ferro está no personagem. Entenda como falhas, humor e vulnerabilidade transformaram Tony Stark em um ícone do cinema moderno.",
        image: "/images/featured/marvel/homem-de-ferro/tony-stark-personagem.png",
        category: "Filmes & Séries",
        href: "/filmes-series/marvel/homem-de-ferro/tony-stark-personagem",
        publishedAtISO: "2026-02-11T15:30:00-03:00",
    },
    {
        id: 3,
        title: "Homem de Ferro 2 e 3: quando o tom do MCU começa a mudar",
        excerpt:
            "Sequências que ampliam o universo, mas também revelam limites criativos. Uma leitura crítica sobre como o MCU ajusta seu tom entre espetáculo, humor e drama pessoal.",
        image: "/images/featured/marvel/homem-de-ferro/homem-de-ferro-2-3.png",
        category: "Filmes & Séries",
        href: "/filmes-series/marvel/homem-de-ferro/2-e-3-evolucao-mcu",
        publishedAtISO: "2026-02-11T19:30:00-03:00",
    },
    // {
    //     id: 4,
    //     title: "O legado do Homem de Ferro: por que Tony Stark é o coração do MCU",
    //     excerpt:
    //         "Do primeiro reator ao sacrifício final, Tony Stark moldou o MCU em narrativa, tom e emoção. Entenda por que o universo Marvel nunca mais foi o mesmo depois dele.",
    //     image: "/images/featured/marvel/homem-de-ferro/legado-tony-stark.png",
    //     category: "Filmes & Séries",
    //     href: "/filmes-series/marvel/homem-de-ferro/legado-tony-stark-mcu",
    //     publishedAtISO: "2026-02-10T09:00:00-03:00",
    // },
];
