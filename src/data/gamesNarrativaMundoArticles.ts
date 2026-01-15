export type ArticleCardItem = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    href: string;
    image: string;
};

export const gamesNarrativaMundoArticles: ArticleCardItem[] = [
    {
        id: "worldbuilding-games",
        title: "Worldbuilding nos Games: quando o mundo conta a história",
        excerpt:
            "Como cenários, culturas, mapas e pequenos detalhes ambientais constroem narrativas profundas sem depender apenas de diálogos ou cutscenes.",
        category: "Narrativa & Mundo",
        href: "/games/narrativa-mundo/worldbuilding-nos-games",
        image: "/images/narrativas/worldbuilding-games.png",
    },
    {
        id: "lore-hidden-storytelling",
        title: "Lore oculta: histórias que o jogador precisa descobrir",
        excerpt:
            "Fragmentos de texto, itens, ruínas e silêncios que transformam o jogador em um investigador da própria narrativa.",
        category: "Narrativa & Mundo",
        href: "/games/narrativa-mundo/lore-oculta",
        image: "/images/narrativas/lore-oculta.png",
    },
    {
        id: "characters-and-universes",
        title: "Personagens que moldam universos inteiros",
        excerpt:
            "Quando protagonistas, antagonistas e figuras secundárias são a base emocional e narrativa de mundos que parecem vivos.",
        category: "Narrativa & Mundo",
        href: "/games/narrativa-mundo/personagens-e-universos",
        image: "/images/narrativas/personagens-universos.png",
    },
];
