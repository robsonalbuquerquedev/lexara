import type { Metadata } from "next";
import BatmanDcuFuturo from "@/components/dc/batman/BatmanDcuFuturo";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { batmanDcuFuturoArticle } from "@/content/articles/batman/batman-dcu-futuro";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: batmanDcuFuturoArticle,

        title:
            "O futuro do Batman no DCU de James Gunn: expectativas e riscos | LEXARA",

        description:
            "Uma análise crítica sobre o futuro do Batman no novo DCU de James Gunn. Expectativas, riscos narrativos e caminhos possíveis para o Cavaleiro das Trevas no universo cinematográfico da DC.",

        keywords: [
            "Batman DCU",
            "Batman James Gunn",
            "futuro do Batman",
            "DCU Batman",
            "DC Studios",
            "universo DC",
            "cinema DC",
            "Batman no cinema",
            "análise Batman",
            "LEXARA filmes e séries",
        ],

        ogDescription:
            "Expectativas, incertezas e caminhos possíveis para o Batman no novo universo cinematográfico da DC sob o comando de James Gunn.",

        twitterDescription:
            "Uma leitura crítica sobre o futuro do Batman no DCU: riscos criativos, expectativas do público e os caminhos possíveis para o herói.",

        ogImageAlt:
            "LEXARA — O futuro do Batman no DCU de James Gunn: expectativas e riscos",
    });
}

export const revalidate = 60;

export default function BatmanDCUFuturoPage() {
    return (
        <BatmanDcuFuturo article={batmanDcuFuturoArticle} />
    )
}