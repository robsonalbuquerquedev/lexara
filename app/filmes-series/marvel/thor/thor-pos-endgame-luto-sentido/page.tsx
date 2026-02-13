import type { Metadata } from "next";
import ThorPosEndgameLutoSentido from "@/components/marvel/thor/ThorPosEndgameLutoSentido";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { thorPosEndgameLutoSentidoArticle } from "@/content/articles/marvel/thor/thorPosEndgameLutoSentido";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: thorPosEndgameLutoSentidoArticle,

        title:
            "Thor pós-Endgame: luto, vazio e a busca por sentido | LEXARA",

        description:
            "Depois de Vingadores: Ultimato, Thor enfrenta sua batalha mais silenciosa: o vazio. Uma análise sobre luto, identidade e propósito no pós-Endgame do MCU.",

        keywords: [
            "Thor pós-Endgame",
            "Thor Vingadores Ultimato",
            "Thor luto MCU",
            "Thor crise de identidade",
            "Thor Love and Thunder análise",
            "Thor desenvolvimento de personagem",
            "MCU análise psicológica",
            "Thor propósito",
            "Thor arco completo MCU",
            "LEXARA Thor",
        ],

        ogDescription:
            "A fase mais humana de Thor no MCU: uma leitura sobre luto, perda de identidade e a busca por sentido após Endgame.",

        twitterTitle:
            "Thor pós-Endgame: luto e propósito | LEXARA",

        twitterDescription:
            "Quando a guerra termina, sobra o silêncio. Entenda por que o pós-Endgame é a fase mais vulnerável — e mais madura — do Deus do Trovão.",

        ogImagePath: "/og/thor/og-thor-pos-endgame.png",

        ogImageAlt:
            "Thor após Endgame — análise sobre luto, identidade e propósito no MCU | LEXARA",
    });
}

export const revalidate = 60;

export default function ThorNoMcuEvolucaoPage() {
    return (
        <>
            <ThorPosEndgameLutoSentido article={thorPosEndgameLutoSentidoArticle} />
            <ShareBar
                title={thorPosEndgameLutoSentidoArticle.title}
                slug={thorPosEndgameLutoSentidoArticle.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}