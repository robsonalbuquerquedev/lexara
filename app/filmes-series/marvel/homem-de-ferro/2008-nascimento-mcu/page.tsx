import type { Metadata } from "next";
import HomemDeFerro2008 from "@/components/marvel/homem-de-ferro/HomemDeFerro2008";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { homemDeFerro2008Article } from "@/content/articles/marvel/homem-de-ferro/homemDeFerro2008";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: homemDeFerro2008Article,

        title:
            "Homem de Ferro (2008): o nascimento do MCU e o herói que mudou tudo | LEXARA",

        description:
            "Análise de Homem de Ferro (2008), o filme que deu origem ao MCU. Entenda como Tony Stark definiu o tom do Universo Cinematográfico da Marvel com carisma, tecnologia e consequência.",

        keywords: [
            "Homem de Ferro 2008",
            "Tony Stark",
            "MCU início",
            "nascimento do MCU",
            "Universo Cinematográfico da Marvel",
            "origem do Homem de Ferro",
            "Marvel Studios 2008",
            "análise Homem de Ferro",
            "primeiro filme do MCU",
            "LEXARA Marvel",
        ],

        ogDescription:
            "Antes de multiversos e sagas épicas, o MCU começou com Homem de Ferro (2008). Uma análise sobre como Tony Stark definiu o tom, a estrutura e a identidade do universo Marvel no cinema.",

        twitterTitle:
            "Homem de Ferro (2008): o nascimento do MCU | LEXARA",

        twitterDescription:
            "Como Tony Stark inaugurou o MCU com carisma, tecnologia e consequência. Análise crítica do filme que mudou o cinema de super-heróis.",

        ogImagePath: "/og/homem-de-ferro/og-homem-de-ferro-2008.png",

        ogImageAlt:
            "LEXARA — Homem de Ferro (2008), o nascimento do MCU com Tony Stark",
    });
}

export const revalidate = 60;

export default function HomemDeFerro2008Page() {
    return (
        <>
            <HomemDeFerro2008 article={homemDeFerro2008Article} />
            <ShareBar
                title={homemDeFerro2008Article.title}
                slug={homemDeFerro2008Article.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}