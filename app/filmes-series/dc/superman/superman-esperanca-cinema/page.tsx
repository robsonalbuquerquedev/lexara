import type { Metadata } from "next";
import SupermanEsperancaCinema from "@/components/dc/superman/SupermanEsperancaCinema";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { supermanEsperancaCinemaArticle } from "@/content/articles/superman/superman-esperanca-cinema";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: supermanEsperancaCinemaArticle,

        title:
            "Superman no cinema: por que ele sempre representa esperança em tempos de crise | LEXARA",

        description:
            "Análise narrativa e crítica sobre o Superman no cinema, explorando o simbolismo da esperança, os dilemas morais do herói e como ele reflete as crises do mundo real.",

        keywords: [
            "Superman",
            "Superman no cinema",
            "Superman esperança",
            "análise Superman",
            "DC no cinema",
            "heróis e simbolismo",
            "dilemas morais Superman",
            "cinema de super-heróis",
            "LEXARA",
        ],

        ogDescription:
            "Do símbolo moral clássico às leituras mais sombrias, entenda por que o Superman continua sendo o maior ícone de esperança do cinema em tempos de crise.",

        twitterDescription:
            "Uma análise crítica sobre como o Superman se tornou o maior símbolo de esperança do cinema — e por que isso ainda importa.",

        ogImagePath: "/og/superman/og-superman-esperanca-cinema.png",

        ogImageAlt:
            "LEXARA — Superman no cinema e o simbolismo da esperança em tempos de crise",
    });
}

export const revalidate = 60;

export default function SupermanEsperancaCinemaPage() {
    return (
        <SupermanEsperancaCinema article={supermanEsperancaCinemaArticle} />
    )
}