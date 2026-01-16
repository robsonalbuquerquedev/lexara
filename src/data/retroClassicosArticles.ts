export type ArticleCardItem = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    href: string;
    image: string;
};

export const retroClassicosArticles: ArticleCardItem[] = [
    {
        id: "design-classicos-envelhecem-bem",
        title: "Por que alguns clássicos envelhecem tão bem? O segredo está no design",
        excerpt:
            "Controles responsivos, regras simples e leitura visual perfeita: veja por que certos jogos antigos continuam divertidos hoje — mesmo sem gráficos modernos.",
        category: "Design & Legado",
        href: "/games/retro-classicos/por-que-classicos-envelhecem-bem",
        image: "/images/retro/design-classicos.png",
    },
    {
        id: "do-8bit-ao-ps2-revolucoes",
        title: "Do 8-bit ao PS2: as revoluções que mudaram os games para sempre",
        excerpt:
            "Do salto para o 3D à popularização do multiplayer e das narrativas cinematográficas: entenda o que cada era trouxe — e por que ainda influencia tudo hoje.",
        category: "História & Evolução",
        href: "/games/retro-classicos/do-8bit-ao-ps2-revolucoes",
        image: "/images/retro/8bit-ps2.png",
    },
    {
        id: "mecanicas-retro-que-ainda-funcionam",
        title: "Mecânicas retrô que ainda funcionam: lições que o moderno esquece",
        excerpt:
            "Fases curtas, desafio justo e recompensa imediata: descubra as ideias dos clássicos que continuam atuais — e por que muitos jogos novos reaprendem isso.",
        category: "Mecânicas & Dificuldade",
        href: "/games/retro-classicos/mecanicas-retro-que-ainda-funcionam",
        image: "/images/retro/mecanicas-retro.png",
    },
];
