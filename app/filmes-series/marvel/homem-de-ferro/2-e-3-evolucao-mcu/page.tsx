import type { Metadata } from "next";
import HomemDeFerro2E3EvolucaoMcu from "@/components/marvel/homem-de-ferro/HomemDeFerro2E3EvolucaoMcu";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { homemDeFerro2E3EvolucaoMcuArticle } from "@/content/articles/marvel/homem-de-ferro/2E3EvolucaoMcu";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: homemDeFerro2E3EvolucaoMcuArticle,

        title:
            "Homem de Ferro 2 e 3: quando o tom do MCU começa a mudar | LEXARA",

        description:
            "Uma análise crítica de Homem de Ferro 2 e 3 e como as sequências revelam a expansão do MCU, os ajustes de tom entre humor e drama e o impacto emocional em Tony Stark.",

        keywords: [
            "Homem de Ferro 2",
            "Homem de Ferro 3",
            "Tony Stark",
            "MCU",
            "Universo Marvel",
            "Marvel Studios",
            "evolução do MCU",
            "análise Homem de Ferro",
            "tom do MCU",
            "filmes da Marvel",
            "cinema de super-heróis",
            "LEXARA",
        ],

        ogDescription:
            "Como Homem de Ferro 2 e 3 moldaram o tom do MCU? Uma leitura sobre expansão de universo, equilíbrio entre humor e drama e o amadurecimento de Tony Stark no cinema.",

        twitterTitle:
            "Homem de Ferro 2 e 3: a evolução do tom no MCU | LEXARA",

        twitterDescription:
            "Entenda como as sequências ajustaram o equilíbrio entre espetáculo, humor e consequência emocional no MCU — e o que isso revelou sobre Tony Stark.",

        ogImagePath: "/og/homem-de-ferro/og-homem-de-ferro-2-3.png",

        ogImageAlt:
            "LEXARA — Homem de Ferro 2 e 3 e a evolução do tom no MCU",
    });
}

export const revalidate = 60;

export default function HomemDeFerro2E3EvolucaoMcuPage() {
    return (
        <>
            <HomemDeFerro2E3EvolucaoMcu article={homemDeFerro2E3EvolucaoMcuArticle} />
            <ShareBar
                title={homemDeFerro2E3EvolucaoMcuArticle.title}
                slug={homemDeFerro2E3EvolucaoMcuArticle.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}
