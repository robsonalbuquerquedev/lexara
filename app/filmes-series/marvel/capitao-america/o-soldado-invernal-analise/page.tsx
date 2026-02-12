import type { Metadata } from "next";
import OSoldadoInvernalAnalise from "@/components/marvel/capitao-america/OSoldadoInvernalAnalise";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { oSoldadoInvernalAnaliseArticle } from "@/content/articles/marvel/capitao-america/oSoldadoInvernalAnalise";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: oSoldadoInvernalAnaliseArticle,

        title:
            "O Soldado Invernal: quando o herói entra em guerra com o sistema | LEXARA",

        description:
            "Espionagem, paranoia e escolhas morais difíceis. Uma análise de como O Soldado Invernal transforma o Capitão América em conflito institucional e redefine o tom político do MCU.",

        keywords: [
            "O Soldado Invernal análise",
            "Capitão América O Soldado Invernal",
            "Captain America The Winter Soldier crítica",
            "MCU thriller político",
            "MCU espionagem e paranoia",
            "vigilância e controle no MCU",
            "S.H.I.E.L.D. e Hydra",
            "Steve Rogers princípios",
            "Bucky Barnes Soldado Invernal trauma",
            "escudo do Capitão América símbolo",
            "Marvel Studios Capitão América",
            "LEXARA Capitão América",
        ],

        ogDescription:
            "O MCU fica mais político: vigilância, paranoia e poder institucional colocam Steve Rogers contra o sistema — e fazem do escudo um contrato moral em ruptura.",

        twitterTitle:
            "O Soldado Invernal: quando o herói entra em guerra com o sistema | LEXARA",

        twitterDescription:
            "Espionagem, vigilância e escolhas morais: como O Soldado Invernal redefiniu o tom político do MCU e colocou o Capitão América contra a máquina.",

        ogImagePath:
            "/og/capitao-america/og-soldado-invernal-critica.png",

        ogImageAlt:
            "LEXARA — O Soldado Invernal: análise do tom político do MCU com Capitão América, espionagem, vigilância e conflito com o sistema",
    });
}

export const revalidate = 60;

export default function OSoldadoInvernalAnalisePage() {
    return (
        <>
            <OSoldadoInvernalAnalise article={oSoldadoInvernalAnaliseArticle} />
            <ShareBar
                title={oSoldadoInvernalAnaliseArticle.title}
                slug={oSoldadoInvernalAnaliseArticle.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}
