import type { Metadata } from "next";
import BatmanPattinson from "@/components/dc/batman/BatmanPattinson";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { batmanRobertPattinsonArticle } from "@/content/articles/batman/robert-pattinson";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: batmanRobertPattinsonArticle,

        title:
            "Robert Pattinson: o Batman detetive e o nascimento de um novo universo | LEXARA",

        description:
            "Uma análise do Batman mais investigativo já visto no cinema, a abordagem noir de The Batman (2022) e como essa versão inaugura um novo caminho narrativo para o universo da DC.",

        keywords: [
            "Batman",
            "Robert Pattinson",
            "The Batman 2022",
            "Batman detetive",
            "DC Comics",
            "DC no cinema",
            "Filmes de super-heróis",
            "Análise de filmes",
            "Gotham City",
            "Universo DC",
            "LEXARA",
        ],

        ogDescription:
            "Entenda como The Batman resgata o lado investigativo do herói, constrói uma Gotham noir e estabelece as bases para um novo universo da DC.",

        twitterDescription:
            "O Batman mais investigativo do cinema: noir, Gotham sombria e o início de um novo universo da DC.",

        ogImagePath: "/og/batman/og-batman-robert-pattinson.png",

        ogImageAlt:
            "LEXARA — Robert Pattinson como Batman em uma abordagem noir e investigativa",
    });
}

export default function BatmanPattinsonPage() {
    return (
        <BatmanPattinson article={batmanRobertPattinsonArticle} />
    )
}