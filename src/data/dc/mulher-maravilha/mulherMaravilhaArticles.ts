export type MulherMaravilhaArticle = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    href: string;
    publishedAtISO?: string;
};

export const mulherMaravilhaArticleArticles: MulherMaravilhaArticle[] = [
    {
        id: 1,
        title:
            "Mulher-Maravilha (2017): a origem heroica e o retorno do encanto na DC",
        excerpt:
            "Uma leitura crítica de Wonder Woman (2017): mitologia, guerra, esperança e por que Diana funciona como símbolo quando o roteiro deixa o heroísmo respirar.",
        image: "/images/featured/wonderwoman/mulher-maravilha-2017-origem.png",
        category: "Filmes & Séries",
        href: "/filmes-series/dc/mulher-maravilha/mulher-maravilha-2017",
        publishedAtISO: "2026-02-02T10:20:00-03:00",
    },
    {
        id: 2,
        title:
            "Mulher-Maravilha 1984: ambição, excessos e o preço de um conto de fadas",
        excerpt:
            "Por que WW84 divide tanto: escolhas de tom, nostalgia oitentista, dilemas morais e onde o filme acerta (e exagera) ao transformar desejo em trama.",
        image: "/images/featured/wonderwoman/mulher-maravilha-1984-analise.png",
        category: "Filmes & Séries",
        href: "/filmes-series/dc/mulher-maravilha/mulher-maravilha-1984",
        publishedAtISO: "2026-02-02T21:00:00-03:00",
    },
    {
        id: 3,
        title:
            "Gal Gadot como Mulher-Maravilha: carisma, limites e o impacto cultural da era Snyder",
        excerpt:
            "O que define a Diana da era DCEU: presença, fisicalidade, iconografia e as escolhas de direção que moldaram uma Mulher-Maravilha mais épica do que íntima.",
        image: "/images/featured/wonderwoman/gal-gadot-mulher-maravilha-era-snyder.png",
        category: "Filmes & Séries",
        href: "/filmes-series/dc/mulher-maravilha/gal-gadot-dceu",
        publishedAtISO: "2026-02-03T11:00:00-03:00",
    },
    {
        id: 4,
        title:
            "O futuro da Mulher-Maravilha no DCU: reinício, riscos e o que precisa ser preservado",
        excerpt:
            "Com o DCU em reconstrução, o desafio é claro: atualizar a personagem sem perder o núcleo. O que deve mudar, o que deve ficar e quais armadilhas evitar.",
        image: "/images/featured/wonderwoman/futuro-mulher-maravilha-dcu.png",
        category: "Filmes & Séries",
        href: "/filmes-series/dc/mulher-maravilha/mulher-maravilha-futuro-dcu",
        publishedAtISO: "2026-02-03T15:00:00-03:00",
    },
];
