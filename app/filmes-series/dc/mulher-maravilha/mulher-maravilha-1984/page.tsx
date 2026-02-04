import type { Metadata } from "next";
import MulherMaravilha1984 from "@/components/dc/mulher-maravilha/MulherMaravilha1984";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { mulherMaravilha1984Article } from "@/content/articles/mulher-maravilha/mulher-maravilha-1984";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: mulherMaravilha1984Article,

        title:
            "Mulher-Maravilha 1984: ambição, excessos e o preço de um conto de fadas | LEXARA",

        description:
            "Uma análise crítica de Mulher-Maravilha 1984: escolhas de tom, nostalgia oitentista, desejo como motor narrativo e os dilemas morais que dividem o filme e redefinem o heroísmo de Diana.",

        keywords: [
            "Mulher-Maravilha 1984",
            "WW84",
            "Wonder Woman 1984 análise",
            "Mulher-Maravilha DC",
            "Diana Prince cinema",
            "DC Filmes",
            "filmes de super-heróis",
            "análise narrativa",
            "heroísmo e desejo",
            "LEXARA Mulher-Maravilha",
        ],

        ogDescription:
            "Por que Mulher-Maravilha 1984 divide tanto? Uma leitura crítica sobre excesso, desejo, escolhas morais e o preço do heroísmo em um conto de fadas oitentista da DC.",

        twitterDescription:
            "Mulher-Maravilha 1984 sob análise: excesso, desejo e dilemas morais em um conto de fadas pop que testa os limites do heroísmo de Diana.",

        ogImagePath:
            "/og/mulhermaravilha/og-mulher-maravilha-1984-analise.png",

        ogImageAlt:
            "LEXARA — Mulher-Maravilha 1984: excesso, desejo e dilemas morais no cinema da DC",
    });
}

export const revalidate = 60;

export default function MulherMaravilha1984Page() {
    return (
        <>
            <MulherMaravilha1984 article={mulherMaravilha1984Article} />
            <ShareBar
                title={mulherMaravilha1984Article.title}
                slug={mulherMaravilha1984Article.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}