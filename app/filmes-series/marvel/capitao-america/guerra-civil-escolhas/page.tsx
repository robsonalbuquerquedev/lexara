import type { Metadata } from "next";
import GuerraCivilEscolhas from "@/components/marvel/capitao-america/GuerraCivilEscolhas";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { guerraCivilEscolhasArticle } from "@/content/articles/marvel/capitao-america/guerraCivilEscolhas";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: guerraCivilEscolhasArticle,

        title:
            "Guerra Civil: o Capitão América e o preço de fazer a escolha certa | LEXARA",

        description:
            "Uma análise crítica de Capitão América: Guerra Civil, explorando liderança, lealdade, ruptura e o custo moral de escolher a consciência acima da autoridade no MCU.",

        keywords: [
            "Capitão América Guerra Civil análise",
            "Guerra Civil escolhas morais",
            "Steve Rogers liderança",
            "Acordos de Sokovia explicação",
            "Capitão América vs Homem de Ferro",
            "MCU conflito ideológico",
            "Capitão América símbolo quebrado",
            "Guerra Civil interpretação",
            "Marvel análise crítica",
            "LEXARA Capitão América",
        ],

        ogDescription:
            "Quando obedecer deixa de ser moralmente aceitável, o símbolo se parte. Uma leitura aprofundada sobre liderança, consciência e ruptura em Capitão América: Guerra Civil.",

        twitterTitle:
            "Guerra Civil: liderança, ruptura e o preço do ideal | LEXARA",

        twitterDescription:
            "O conflito entre Steve Rogers e Tony Stark vai além da pancadaria: é um choque de valores. Entenda o custo moral por trás da maior fratura do MCU.",

        ogImagePath:
            "/og/capitao-america/og-guerra-civil-escolhas-morais.png",

        ogImageAlt:
            "LEXARA — Guerra Civil: o Capitão América dividido entre lealdade e consciência no MCU.",
    });
}

export const revalidate = 60;

export default function GuerraCivilEscolhasPage() {
    return (
        <>
            <GuerraCivilEscolhas article={guerraCivilEscolhasArticle} />
            <ShareBar
                title={guerraCivilEscolhasArticle.title}
                slug={guerraCivilEscolhasArticle.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}
