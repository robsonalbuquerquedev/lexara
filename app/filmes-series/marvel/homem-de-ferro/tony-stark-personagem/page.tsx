import type { Metadata } from "next";
import TonyStarkPersonagem from "@/components/marvel/homem-de-ferro/TonyStarkPersonagem";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { tonyStarkPersonagemArticle } from "@/content/articles/marvel/homem-de-ferro/tonyStarkPersonagem";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: tonyStarkPersonagemArticle,

        title:
            "Tony Stark: carisma, ego e humanidade por trás da armadura | LEXARA",

        description:
            "Uma análise aprofundada sobre Tony Stark no MCU, explorando como carisma, falhas, humor e vulnerabilidade transformaram o Homem de Ferro em um dos maiores ícones do cinema contemporâneo.",

        keywords: [
            "Tony Stark",
            "Homem de Ferro",
            "Iron Man 2008",
            "MCU",
            "Universo Cinematográfico da Marvel",
            "Tony Stark análise",
            "evolução Tony Stark",
            "arco do Homem de Ferro",
            "herói moderno cinema",
            "LEXARA Marvel",
        ],

        ogDescription:
            "Do ego inflado ao sacrifício final: entenda como Tony Stark se tornou o coração emocional do MCU e redefiniu o arquétipo do herói no cinema.",

        twitterTitle:
            "Tony Stark e o herói que mudou o MCU | LEXARA",

        twitterDescription:
            "Carisma, falhas e transformação moral: a jornada completa de Tony Stark no Universo Cinematográfico da Marvel.",

        ogImagePath: "/og/homem-de-ferro/og-tony-stark-personagem.png",

        ogImageAlt:
            "LEXARA — Tony Stark refletindo sem a armadura, destacando o lado humano do Homem de Ferro no MCU",
    });
}

export const revalidate = 60;

export default function TonyStarkPersonagemPage() {
    return (
        <>
            <TonyStarkPersonagem article={tonyStarkPersonagemArticle} />
            <ShareBar
                title={tonyStarkPersonagemArticle.title}
                slug={tonyStarkPersonagemArticle.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}