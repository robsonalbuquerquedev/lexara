import type { Metadata } from "next";
import ThorRagnarokAnalise from "@/components/marvel/thor/ThorRagnarokAnalise";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { thorRagnarokAnaliseArticle } from "@/content/articles/marvel/thor/thorRagnarokAnalise";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: thorRagnarokAnaliseArticle,

        title:
            "Thor: Ragnarok — o humor como máscara de uma tragédia | LEXARA",

        description:
            "Uma análise profunda de Thor: Ragnarok no MCU. Entenda como o humor, o visual vibrante e as perdas acumuladas revelam um Thor mais humano, deslocado e em reconstrução.",

        keywords: [
            "Thor Ragnarok análise",
            "Thor Ragnarok significado",
            "Thor no MCU evolução",
            "Thor sem martelo identidade",
            "Thor Ragnarok perdas",
            "Thor Ragnarok humor e tragédia",
            "MCU Thor arco",
            "filmes da Marvel análise",
            "Thor personagem desenvolvimento",
            "LEXARA Thor",
        ],

        ogDescription:
            "Ragnarok parece leve e colorido, mas carrega rupturas profundas. Descubra como o humor e o estilo visual revelam o amadurecimento mais doloroso de Thor no MCU.",

        twitterTitle:
            "Thor: Ragnarok — humor, perda e identidade | LEXARA",

        twitterDescription:
            "O filme mais vibrante do Thor é também o mais simbólico. Veja como Ragnarok transforma humor em armadura e perda em maturidade.",

        ogImagePath: "/og/thor/og-deus-do-trovao-ragnarok.png",

        ogImageAlt:
            "LEXARA — Thor em Ragnarok: humor, ruptura e amadurecimento no MCU",
    });
}

export const revalidate = 60;

export default function ThorNoMcuEvolucaoPage() {
    return (
        <>
            <ThorRagnarokAnalise article={thorRagnarokAnaliseArticle} />
            <ShareBar
                title={thorRagnarokAnaliseArticle.title}
                slug={thorRagnarokAnaliseArticle.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}