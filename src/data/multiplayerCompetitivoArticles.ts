export type ArticleCardItem = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    href: string;
    image: string;
};

export const multiplayerCompetitivoArticles: ArticleCardItem[] = [
    {
        id: "balanceamento-competitivo",
        title: "Balanceamento em jogos competitivos: o que separa justiça de frustração",
        excerpt:
            "Nerf, buff, counters e matchups: entenda como o balanceamento molda o meta, evita abusos e mantém partidas justas — sem matar a diversão.",
        category: "Balanceamento & Meta",
        href: "/games/multiplayer-competitivo/balanceamento-competitivo",
        image: "/images/multiplayer/balanceamento-competitivo.png",
    },
    {
        id: "ranked-por-que-vicia",
        title: "Ranked e matchmaking: por que subir de elo vicia (e quando vira estresse)",
        excerpt:
            "MMR, filas, smurfs e sensação de progresso: descubra como sistemas ranqueados prendem o jogador — e como evitar que a competição destrua a experiência.",
        category: "Ranked & Matchmaking",
        href: "/games/multiplayer-competitivo/ranked-e-matchmaking",
        image: "/images/multiplayer/ranked-matchmaking.png",
    },
    {
        id: "coop-quimica-de-time",
        title: "Coop que funciona: a química do time entre caos, estratégia e diversão",
        excerpt:
            "Papéis claros, comunicação e objetivos inteligentes: veja o que faz um coop ser memorável — e por que jogar junto pode ser tão intenso quanto um PVP.",
        category: "Coop & Design",
        href: "/games/multiplayer-competitivo/coop-que-funciona",
        image: "/images/multiplayer/coop-que-funciona.png",
    },
];
