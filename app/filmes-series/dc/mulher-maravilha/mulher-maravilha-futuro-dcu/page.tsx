import type { Metadata } from "next";
import MulherMaravilhaFuturoDcu from "@/components/dc/mulher-maravilha/MulherMaravilhaFuturoDcu";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { mulherMaravilhaFuturoDcuArticle } from "@/content/articles/mulher-maravilha/mulher-maravilha-futuro-dcu";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: mulherMaravilhaFuturoDcuArticle,

        title:
            "O futuro da Mulher-Maravilha no DCU: reinício, riscos e o que precisa ser preservado | LEXARA",

        description:
            "Com o DCU em reconstrução, a Mulher-Maravilha volta ao centro do debate criativo. Uma análise crítica sobre reinício, riscos narrativos e o que precisa ser preservado para que Diana continue funcionando como símbolo e personagem.",

        keywords: [
            "Mulher-Maravilha DCU",
            "futuro da Mulher-Maravilha",
            "Mulher-Maravilha reinício DCU",
            "Diana Prince DCU",
            "DCU reconstrução",
            "James Gunn DCU",
            "Mulher-Maravilha análise",
            "Mulher-Maravilha simbolismo",
            "LEXARA DC",
        ],

        ogDescription:
            "O DCU passa por uma reconstrução, e a Mulher-Maravilha enfrenta um dilema central: como evoluir sem perder seu núcleo simbólico. Uma leitura crítica sobre reinício, riscos e preservação da personagem.",

        twitterDescription:
            "Com o DCU em reconstrução, o desafio da Mulher-Maravilha não é recomeçar do zero, mas evoluir sem perder seu núcleo. Uma análise crítica sobre o futuro de Diana no novo universo.",

        ogImagePath: "/og/mulhermaravilha/og-futuro-mulher-maravilha-dcu.png",

        ogImageAlt:
            "LEXARA — O futuro da Mulher-Maravilha no DCU: reinício, riscos e preservação do núcleo da personagem",
    });
}

export const revalidate = 60;

export default function MulherMaravilhaFuturoDcuPage() {
    return (
        <MulherMaravilhaFuturoDcu article={mulherMaravilhaFuturoDcuArticle} />
    )
}