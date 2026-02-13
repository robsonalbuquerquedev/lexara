import type { Metadata } from "next";
import ThorNoMcuEvolucao from "@/components/marvel/thor/ThorNoMcuEvolucao";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { thorNoMcuEvolucaoArticle } from "@/content/articles/marvel/thor/thorNoMcuEvolucao";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: thorNoMcuEvolucaoArticle,

        title:
            "Thor no MCU: do deus arrogante ao herói que aprende a perder | LEXARA",

        description:
            "Uma análise da evolução de Thor no MCU: da arrogância em Asgard ao amadurecimento moldado por perdas, luto e responsabilidade. Entenda como o herói se transforma pela consciência — não apenas pelo poder.",

        keywords: [
            "Thor no MCU",
            "evolução de Thor",
            "Thor análise",
            "Thor arco narrativo",
            "Thor responsabilidade",
            "Thor luto MCU",
            "Thor personagem Marvel",
            "MCU personagens",
            "trindade Marvel",
            "LEXARA Thor",
        ],

        ogDescription:
            "Da arrogância ao amadurecimento: veja como o MCU transforma Thor em um herói moldado por perdas, consciência e responsabilidade — não apenas por poder.",

        twitterTitle:
            "Thor no MCU: do deus arrogante ao herói que aprende a perder | LEXARA",

        twitterDescription:
            "O verdadeiro crescimento de Thor no MCU não está no martelo, mas na consciência. Uma análise sobre perdas, maturidade e responsabilidade.",

        ogImagePath: "/og/thor/og-deus-do-trovao-mcu.png",

        ogImageAlt:
            "LEXARA — Thor no MCU: da arrogância ao amadurecimento pela consciência",
    });
}

export const revalidate = 60;

export default function ThorNoMcuEvolucaoPage() {
    return (
        <>
            <ThorNoMcuEvolucao article={thorNoMcuEvolucaoArticle} />
            <ShareBar
                title={thorNoMcuEvolucaoArticle.title}
                slug={thorNoMcuEvolucaoArticle.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}