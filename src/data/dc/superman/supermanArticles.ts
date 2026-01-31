export type SupermanArticle = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    href: string;
    publishedAtISO?: string;
};

export const supermanArticles: SupermanArticle[] = [
    {
        id: 1,
        title: "Superman no cinema: por que ele sempre representa esperança em tempos de crise",
        excerpt:
            "Do surgimento como símbolo moral até as leituras mais sombrias, analisamos como o Superman se tornou o reflexo das crises do mundo real — e por que isso ainda importa hoje.",
        image: "/images/featured/superman-esperanca-cinema.png",
        category: "Filmes & Séries",
        href: "/filmes-series/dc/superman/superman-esperanca-cinema",
        publishedAtISO: "2026-01-31T07:30:00-03:00",
    },
    {
        id: 2,
        title: "As diferentes versões do Superman nas telonas — e o que cada uma diz sobre a DC",
        excerpt:
            "Cada ator, cada era e cada abordagem revelou uma face distinta do Homem de Aço. Esta análise mostra como o Superman mudou — e o que a DC tentou comunicar em cada fase.",
        image: "/images/featured/superman/superman-versoes-cinema.png",
        category: "Filmes & Séries",
        href: "/filmes-series/dc/superman/superman-versoes-cinema",
        publishedAtISO: "2026-01-31T12:00:00-03:00",
    },
    {
        id: 3,
        title: "O dilema do Superman moderno: força absoluta, escolhas morais e consequências",
        excerpt:
            "Ser o herói mais poderoso do mundo não significa ter respostas simples. Exploramos os dilemas morais do Superman contemporâneo e como o cinema passou a questionar sua figura.",
        image: "/images/featured/superman/superman-dilema-moral.png",
        category: "Filmes & Séries",
        href: "/filmes-series/dc/superman/superman-dilema-moral",
        publishedAtISO: "2026-01-31T15:45:00-03:00",
    },
    {
        id: 4,
        title: "O futuro do Superman no DCU: expectativas, riscos e o peso da esperança",
        excerpt:
            "Com um novo universo cinematográfico em construção, o Superman volta ao centro da DC. Analisamos o que está em jogo, os riscos criativos e o significado desse recomeço.",
        image: "/images/featured/superman/superman-dcu-futuro.png",
        category: "Filmes & Séries",
        href: "/filmes-series/dc/superman/superman-dcu-futuro",
        publishedAtISO: "2026-01-31T20:00:00-03:00",
    },
    // {
    //     id: 5,
    //     title: "Superman (2025): como o filme de James Gunn redefine o herói e inaugura o DCU",
    //     excerpt:
    //         "Analisamos Superman (2025), o filme que marca o início do novo DCU. O que a abordagem de James Gunn revela sobre esperança, identidade e o futuro do maior símbolo da DC?",
    //     image: "/images/featured/superman/superman-2025-dcu.png",
    //     category: "Filmes & Séries",
    //     href: "/filmes-series/dc/superman-2025-james-gunn",
    //     publishedAtISO: "2026-01-30T12:00:00-03:00",
    // },
];
