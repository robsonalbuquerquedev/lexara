export type ThorArticle = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    href: string;
    publishedAtISO?: string;
};

export const thorArticles: ThorArticle[] = [
    // {
    //     id: 1,
    //     title: "Thor no MCU: do deus arrogante ao herói que aprende a perder",
    //     excerpt:
    //         "A maior virada de Thor não é de poder — é de consciência. Veja como o MCU transforma um príncipe impulsivo em um herói moldado por fracassos, luto e responsabilidade.",
    //     image: "/images/featured/marvel/thor/deus-do-trovao-mcu.png",
    //     category: "Filmes & Séries",
    //     href: "/filmes-series/marvel/thor/thor-no-mcu-evolucao",
    //     publishedAtISO: "2026-02-10T09:00:00-03:00",
    // },
    // {
    //     id: 2,
    //     title: "Thor: Ragnarok — o humor como máscara de uma tragédia",
    //     excerpt:
    //         "Ragnarok parece leve, mas carrega perdas gigantes. Entenda como a comédia e o estilo visual não enfraquecem o herói — eles revelam um Thor mais humano e quebrado.",
    //     image: "/images/featured/marvel/thor/deus-do-trovao-ragnarok.png",
    //     category: "Filmes & Séries",
    //     href: "/filmes-series/marvel/thor/thor-ragnarok-analise",
    //     publishedAtISO: "2026-02-10T09:00:00-03:00",
    // },
    // {
    //     id: 3,
    //     title: "Mjolnir e Stormbreaker: dignidade, identidade e o mito por trás das armas",
    //     excerpt:
    //         "Não é sobre levantar um martelo — é sobre o que ele exige de você. Uma leitura do simbolismo de Mjolnir e Stormbreaker e do que eles revelam sobre falhas, ego e maturidade.",
    //     image: "/images/featured/marvel/thor/deus-do-trovao-mjolnir-stormbreaker.png",
    //     category: "Filmes & Séries",
    //     href: "/filmes-series/marvel/thor/mjolnir-stormbreaker-identidade",
    //     publishedAtISO: "2026-02-10T09:00:00-03:00",
    // },
    // {
    //     id: 4,
    //     title: "Thor pós-Endgame: luto, vazio e a busca por sentido (o herói sem mapa)",
    //     excerpt:
    //         "Depois do apocalipse, sobra o silêncio. Explore como o MCU reconstrói Thor quando força não resolve mais nada — e por que essa é a fase mais perigosa (e interessante) do personagem.",
    //     image: "/images/featured/marvel/thor/thor-pos-endgame.png",
    //     category: "Filmes & Séries",
    //     href: "/filmes-series/marvel/thor/thor-pos-endgame-luto-sentido",
    //     publishedAtISO: "2026-02-10T09:00:00-03:00",
    // },
];
