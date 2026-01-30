export type BatmanArticle = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    href: string;
    publishedAtISO?: string;
};

export const batmanArticles: BatmanArticle[] = [
    {
        id: 1,
        title: "Batman: a evolução do herói nas telonas",
        excerpt:
            "Uma análise detalhada das diferentes interpretações do Batman no cinema, do tom sombrio de Tim Burton à abordagem realista e épica de Christopher Nolan.",
        image: "/images/featured/batmanreal.png",
        category: "Filmes & Séries",
        href: "/filmes-series/dc/batman-evolucao",
        publishedAtISO: "2026-01-19T14:30:00-03:00",
    },
    {
        id: 2,
        title: "Ben Affleck e o Batman do DCEU: entre o mito e a controvérsia",
        excerpt:
            "Uma leitura crítica sobre a versão mais brutal do Cavaleiro das Trevas e os debates que marcaram o Batman no DCEU.",
        image: "/images/featured/batman-affleck.png",
        category: "Filmes & Séries",
        href: "/filmes-series/dc/batman-ben-affleck",
        publishedAtISO: "2026-01-29T15:42:00-03:00",
    },
    {
        id: 3,
        title: "Robert Pattinson: o Batman detetive e o nascimento de um novo universo",
        excerpt:
            "Uma análise do Batman mais investigativo já visto no cinema e o impacto dessa abordagem para o futuro da DC.",
        image: "/images/featured/batman-pattinson.png",
        category: "Filmes & Séries",
        href: "/filmes-series/dc/batman-pattinson",
        publishedAtISO: "2026-01-29T19:45:00-03:00",
    },
    {
        id: 4,
        title: "O futuro do Batman no DCU de James Gunn: expectativas e riscos",
        excerpt:
            "Expectativas, incertezas e caminhos possíveis para o Cavaleiro das Trevas no novo universo cinematográfico da DC.",
        image: "/images/featured/batman-dcu-futuro.png",
        category: "Filmes & Séries",
        href: "/filmes-series/dc/batman-dcu-futuro",
        publishedAtISO: "2026-01-30T09:00:00-03:00",
    },
];