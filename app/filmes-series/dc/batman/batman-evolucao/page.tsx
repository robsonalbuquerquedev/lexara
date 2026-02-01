import type { Metadata } from "next";
import BatmanEvolucao from "@/components/dc/batman/BatmanEvolucao";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { batmanEvolucaoArticle } from "@/content/articles/batman/batman-evolucao";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: batmanEvolucaoArticle,

        title:
            "Batman: a evolução do herói nas telonas | LEXARA",

        description:
            "Uma análise detalhada das diferentes interpretações do Batman no cinema — do tom sombrio de Tim Burton ao realismo épico de Christopher Nolan — e o impacto cultural do personagem ao longo das décadas.",

        keywords: [
            "Batman",
            "DC",
            "Filmes e Séries",
            "Análise",
            "Crítica",
            "Tim Burton",
            "Christopher Nolan",
            "The Batman",
            "Gotham",
            "Cultura geek",
            "LEXARA",
        ],

        ogDescription:
            "Do gótico de Burton ao realismo de Nolan: como o Batman mudou no cinema — e o que cada fase revela sobre medo, justiça e poder.",

        twitterDescription:
            "Uma leitura crítica das diferentes versões do Batman no cinema — e por que cada era escolhe um “Batman” diferente.",

        ogImagePath: "/og/batman/og-batman-evolucao-cinema.png",

        ogImageAlt:
            "LEXARA — Batman: a evolução do herói nas telonas",
    });
}

export default function BatmanEvolucaoPage() {
    return (
        <BatmanEvolucao article={batmanEvolucaoArticle} />
    )
}