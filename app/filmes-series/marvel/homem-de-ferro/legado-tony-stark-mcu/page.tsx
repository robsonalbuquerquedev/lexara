import type { Metadata } from "next";
import LegadoTonyStarkMcu from "@/components/marvel/homem-de-ferro/LegadoTonyStarkMcu";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { legadoTonyStarkMcuArticle } from "@/content/articles/marvel/homem-de-ferro/legadoTonyStarkMcu";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: legadoTonyStarkMcuArticle,

        title:
            "O legado do Homem de Ferro: por que Tony Stark é o coração do MCU | LEXARA",

        description:
            "Do primeiro reator ao sacrifício final, Tony Stark moldou o tom, a estrutura e a emoção do MCU. Uma análise sobre como o Homem de Ferro se tornou o coração do Universo Cinematográfico da Marvel.",

        keywords: [
            "Legado de Tony Stark",
            "Homem de Ferro MCU",
            "Tony Stark legado",
            "Coração do MCU",
            "Universo Cinematográfico da Marvel",
            "Impacto do Homem de Ferro",
            "MCU análise",
            "Peter Parker herdeiro Tony Stark",
            "Filmes da Marvel",
            "LEXARA Marvel",
        ],

        ogDescription:
            "Tony Stark não foi apenas o primeiro herói do MCU — foi o molde emocional e estrutural que definiu o universo Marvel no cinema. Entenda por que seu legado continua moldando o futuro da franquia.",

        twitterTitle:
            "O legado do Homem de Ferro: por que Tony Stark é o coração do MCU | LEXARA",

        twitterDescription:
            "Como Tony Stark transformou o MCU em uma saga emocionalmente conectada? Uma análise sobre legado, responsabilidade e o impacto que continua ecoando no universo Marvel.",

        ogImagePath: "/og/homem-de-ferro/og-legado-tony-stark.png",

        ogImageAlt:
            "LEXARA — O legado do Homem de Ferro no MCU e o impacto de Tony Stark no universo Marvel",
    });
}

export const revalidate = 60;

export default function TonyStarkPersonagemPage() {
    return (
        <>
            <LegadoTonyStarkMcu article={legadoTonyStarkMcuArticle} />
            <ShareBar
                title={legadoTonyStarkMcuArticle.title}
                slug={legadoTonyStarkMcuArticle.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}