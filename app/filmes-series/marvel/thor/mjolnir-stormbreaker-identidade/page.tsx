import type { Metadata } from "next";
import MjolnirStormbreakerIdentidade from "@/components/marvel/thor/MjolnirStormbreakerIdentidade";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { mjolnirStormbreakerIdentidadeArticle } from "@/content/articles/marvel/thor/mjolnirStormbreakerIdentidade";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: mjolnirStormbreakerIdentidadeArticle,

        title:
            "Mjolnir e Stormbreaker: dignidade, identidade e o mito por trás das armas | LEXARA",

        description:
            "Não é sobre levantar um martelo — é sobre o que ele exige de você. Uma análise do simbolismo de Mjolnir e Stormbreaker e do que essas armas revelam sobre ego, falha, luto e maturidade no arco de Thor no MCU.",

        keywords: [
            "Mjolnir significado",
            "Stormbreaker significado",
            "Mjolnir e Stormbreaker simbolismo",
            "Thor MCU evolução",
            "Thor identidade no MCU",
            "Thor dignidade e maturidade",
            "ego de Thor no MCU",
            "Thor luto e responsabilidade",
            "Mjolnir digno o que significa",
            "Stormbreaker arma forjada na perda",
            "Thor Ragnarok perdas gigantes",
            "Thor Infinity War Stormbreaker",
            "mitologia e símbolos no MCU",
            "armas como símbolo narrativo no MCU",
            "Marvel Thor análise LEXARA",
        ],

        ogDescription:
            "Mjolnir mede dignidade. Stormbreaker mede consequência. Entenda como o MCU usa as armas de Thor como símbolos de identidade — do ego à maturidade, da perda à responsabilidade.",

        twitterTitle:
            "Mjolnir e Stormbreaker: dignidade, identidade e o mito por trás das armas | LEXARA",

        twitterDescription:
            "Mjolnir não é prêmio. Stormbreaker não é upgrade. Uma leitura do simbolismo das armas de Thor e da virada do “merecer” para o “assumir” no MCU.",

        ogImagePath: "/og/thor/og-deus-do-trovao-mjolnir-stormbreaker.png",

        ogImageAlt:
            "LEXARA — Mjolnir e Stormbreaker: dignidade, identidade e o mito por trás das armas (Thor no MCU)",
    });
}

export const revalidate = 60;

export default function ThorNoMcuEvolucaoPage() {
    return (
        <>
            <MjolnirStormbreakerIdentidade article={mjolnirStormbreakerIdentidadeArticle} />
            <ShareBar
                title={mjolnirStormbreakerIdentidadeArticle.title}
                slug={mjolnirStormbreakerIdentidadeArticle.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}