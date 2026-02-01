import type { Metadata } from "next";
import SupermanDcuFuturo from "@/components/dc/superman/SupermanDcuFuturo";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { supermanDcuFuturoArticle } from "@/content/articles/superman/superman-dcu-futuro";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: supermanDcuFuturoArticle,

        title:
            "O futuro do Superman no DCU: expectativas, riscos e o peso da esperança | LEXARA",

        description:
            "Com o DCU em reconstrução, o Superman volta ao centro da DC. Análise crítica sobre expectativas, riscos criativos e o significado da esperança nesse novo começo.",

        keywords: [
            "Superman DCU",
            "Superman DC",
            "futuro do Superman",
            "DCU James Gunn",
            "novo universo DC",
            "Superman cinema",
            "filmes da DC",
            "análise Superman",
            "LEXARA DC",
        ],

        ogDescription:
            "O Superman assume o papel central no novo DCU. O que está em jogo, quais os riscos criativos e por que a esperança volta a ser o tema-chave da DC.",

        twitterDescription:
            "Análise sobre o papel do Superman no novo DCU, os riscos do recomeço e o retorno da esperança como identidade da DC.",

        ogImageAlt:
            "LEXARA — O futuro do Superman no DCU: expectativas, riscos e o peso da esperança",
    });
}

export const revalidate = 60;

export default function SupermanDcuFuturoPage() {
    return (
        <SupermanDcuFuturo article={supermanDcuFuturoArticle} />
    )
}