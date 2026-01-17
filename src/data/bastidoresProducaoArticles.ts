export type ArticleCardItem = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    href: string;
    image: string;
};

export const bastidoresProducaoArticles: ArticleCardItem[] = [
    {
        id: "como-limites-criam-obras-memoraveis",
        title: "Como Limitações Viram Criatividade: quando o orçamento define o estilo",
        excerpt:
            "Cortes, prazos curtos e limitações técnicas não são só problemas: muitas vezes eles criam soluções geniais. Veja como restrições moldam estética, ritmo e escolhas narrativas em obras marcantes.",
        category: "Restrições & Soluções",
        href: "/historia-origem/bastidores-producao/como-limites-criam-obras-memoraveis",
        image: "/images/historia-origem/bastidores-limites-criatividade.png",
    },
    {
        id: "decisoes-criativas-que-mudaram-o-rumo",
        title: "Decisões Criativas que Mudaram Tudo: escolhas que redefiniram a obra",
        excerpt:
            "Mudanças de roteiro, troca de direção, regravações e cortes de edição: entenda como decisões internas podem transformar o tom, o final e até o legado cultural de uma obra.",
        category: "Decisão Criativa",
        href: "/historia-origem/bastidores-producao/decisoes-criativas-que-mudaram-o-rumo",
        image: "/images/historia-origem/bastidores-decisoes-criativas.png",
    },
    {
        id: "conflitos-de-producao-e-impacto-no-resultado",
        title: "Conflitos de Produção: o que acontece quando a equipe não concorda",
        excerpt:
            "Choques de visão, pressão de estúdio, mudanças de escopo e crises de agenda: como conflitos nos bastidores afetam personagens, pacing, qualidade final e a recepção do público.",
        category: "Conflitos & Bastidores",
        href: "/historia-origem/bastidores-producao/conflitos-de-producao-e-impacto-no-resultado",
        image: "/images/historia-origem/bastidores-conflitos-producao.png",
    },
];
