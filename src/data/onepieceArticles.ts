export type OnePieceArticle = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    href: string;
};

export const onepieceArticles: OnePieceArticle[] = [
    {
        id: 1,
        title: "One Piece Live Action: Vale a pena para novos fãs?",
        excerpt:
            "Uma análise acessível e direta sobre como o live action de One Piece funciona para quem nunca teve contato com o anime ou mangá, avaliando narrativa, ritmo e personagens.",
        image: "/images/featured/onepiece-liveaction-overview.png",
        category: "Filmes & Séries",
        href: "/filmes-series/live-action/one-piece-novos-fas",
    },
    {
        id: 2,
        title: "Fidelidade ao mangá: o que mudou no live action de One Piece",
        excerpt:
            "Comparação cuidadosa entre o live action e a obra original, destacando mudanças, acertos e escolhas narrativas que dividiram opiniões entre fãs antigos.",
        image: "/images/featured/onepiece-manga-vs-live-action.png",
        category: "Filmes & Séries",
        href: "/filmes-series/live-action/one-piece-fidelidade",
    },
    {
        id: 3,
        title: "Personagens de One Piece no live action: quem brilhou?",
        excerpt:
            "Uma análise focada nos personagens principais, atuações e adaptações visuais, avaliando quem conseguiu capturar o espírito da obra original.",
        image: "/images/featured/onepiece-character-liveaction.png",
        category: "Filmes & Séries",
        href: "/filmes-series/live-action/one-piece-personagens",
    },
];
