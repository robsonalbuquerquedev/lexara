import type { Metadata } from "next";
import BatmanBenAffleck from "@/components/dc/batman/BatmanBenAffleck";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { batmanBenAffleckArticle } from "@/content/articles/batman/ben-affleck";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: batmanBenAffleckArticle,

        title:
            "Ben Affleck e o Batman do DCEU: entre o mito e a controvérsia | LEXARA",

        description:
            "Uma leitura crítica sobre o Batman interpretado por Ben Affleck no DCEU, analisando sua abordagem mais brutal, o peso do mito do herói e as controvérsias que dividiram público e crítica.",

        keywords: [
            "Batman Ben Affleck",
            "Batman DCEU",
            "Ben Affleck Batman",
            "Batman DC filmes",
            "Batman v Superman análise",
            "Zack Snyder Batman",
            "Batman cinema",
            "DC Extended Universe",
            "Cavaleiro das Trevas DCEU",
            "LEXARA Batman",
        ],

        ogDescription:
            "Uma análise crítica do Batman vivido por Ben Affleck no DCEU, explorando o tom mais brutal do herói, sua construção mítica e os debates que marcaram essa fase da DC no cinema.",

        twitterTitle:
            "Ben Affleck e o Batman do DCEU | LEXARA",

        twitterDescription:
            "O Batman mais brutal do cinema: uma leitura crítica sobre a versão de Ben Affleck, o peso do mito e as controvérsias do DCEU.",

        ogImagePath: "/og/batman/og-dceu-batman-affleck.png",

        ogImageAlt:
            "LEXARA — Ben Affleck como Batman no DCEU",
    });
}

export default function BatmanBenAffleckPage() {
    return (
        <BatmanBenAffleck article={batmanBenAffleckArticle} />
    )
}