import type { Metadata } from "next";
import CulpaHistoricaEIdeal from "@/components/marvel/capitao-america/CulpaHistoricaEIdeal";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { culpaHistoricaEIdealArticle } from "@/content/articles/marvel/capitao-america/culpaHistoricaEIdeal";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: culpaHistoricaEIdealArticle,

        title:
            "Entre propaganda e ideal: a culpa histórica do Capitão América | LEXARA",

        description:
            "O escudo carrega mais do que metal: carrega guerras, narrativas políticas e silêncios históricos. Uma análise crítica de como o MCU transforma o Capitão América em consciência moral — não em propaganda.",

        keywords: [
            "Capitão América análise",
            "culpa histórica Capitão América",
            "Steve Rogers propaganda",
            "MCU Capitão América",
            "escudo Capitão América significado",
            "HYDRA espelho patriotismo",
            "ideal vs Estado Marvel",
            "Capitão América interpretação",
            "Marvel análise crítica",
            "LEXARA Capitão América"
        ],

        ogDescription:
            "Entre propaganda e ideal, o MCU confronta o passado do símbolo. Entenda como o Capitão América deixa de ser cartaz patriótico e se torna consciência moral em conflito.",

        twitterTitle:
            "A culpa histórica do Capitão América | LEXARA",

        twitterDescription:
            "Quando o símbolo amadurece, o escudo deixa de ser propaganda e vira pergunta. Uma leitura crítica sobre Steve Rogers no MCU.",

        ogImagePath:
            "/og/capitao-america/og-capitao-america-culpa-historica.png",

        ogImageAlt:
            "LEXARA — Entre propaganda e ideal: a culpa histórica do Capitão América",
    });
}

export const revalidate = 60;

export default function CulpaHistoricaEIdealPage() {
    return (
        <>
            <CulpaHistoricaEIdeal article={culpaHistoricaEIdealArticle} />
            <ShareBar
                title={culpaHistoricaEIdealArticle.title}
                slug={culpaHistoricaEIdealArticle.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}