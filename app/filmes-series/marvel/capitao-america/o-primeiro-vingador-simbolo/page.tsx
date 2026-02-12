import type { Metadata } from "next";
import OPrimeiroVingadorSimbolo from "@/components/marvel/capitao-america/OPrimeiroVingadorSimbolo";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { oPrimeiroVingadorSimboloArticle } from "@/content/articles/marvel/capitao-america/oPrimeiroVingadorSimbolo";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: oPrimeiroVingadorSimboloArticle,

        title:
            "Capitão América: O Primeiro Vingador e o nascimento do símbolo | LEXARA",

        description:
            "Uma análise de como o MCU transforma o Capitão América de propaganda de guerra em personagem trágico. Entenda o nascimento do símbolo, o peso do ideal e o custo de proteger primeiro.",

        keywords: [
            "Capitão América O Primeiro Vingador análise",
            "Capitão América MCU",
            "Steve Rogers origem",
            "Capitão América símbolo patriótico",
            "Captain America The First Avenger análise",
            "MCU análise crítica",
            "Capitão América Segunda Guerra",
            "Capitão América ideal e sacrifício",
            "filmes Marvel análise",
            "LEXARA Marvel",
        ],

        ogDescription:
            "Do palco da propaganda ao sacrifício final: uma leitura crítica sobre como o MCU transforma o Capitão América em símbolo trágico e estabelece o padrão moral do universo Marvel.",

        twitterTitle:
            "Capitão América: o nascimento do símbolo no MCU | LEXARA",

        twitterDescription:
            "Como o MCU transformou um ícone patriótico em personagem trágico? Uma análise sobre ideal, poder e sacrifício em O Primeiro Vingador.",

        ogImagePath:
            "/og/capitao-america/og-capitao-america-primeiro-vingador.png",

        ogImageAlt:
            "LEXARA — Capitão América: O Primeiro Vingador e o nascimento do símbolo no MCU",
    });
}

export const revalidate = 60;

export default function OPrimeiroVingadorSimboloPage() {
    return (
        <>
            <OPrimeiroVingadorSimbolo article={oPrimeiroVingadorSimboloArticle} />
            <ShareBar
                title={oPrimeiroVingadorSimboloArticle.title}
                slug={oPrimeiroVingadorSimboloArticle.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}
