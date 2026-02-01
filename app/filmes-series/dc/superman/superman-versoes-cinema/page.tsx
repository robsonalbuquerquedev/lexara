import type { Metadata } from "next";
import SupermanVersoesCinema from "@/components/dc/superman/SupermanVersoesCinema";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { supermanVersoesCinemaArticle } from "@/content/articles/superman/superman-versoes-cinema";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: supermanVersoesCinemaArticle,

        title:
            "As diferentes versões do Superman nas telonas — e o que cada uma diz sobre a DC | LEXARA",

        description:
            "Uma análise completa das diferentes versões do Superman no cinema e na TV, mostrando como cada ator e cada era revelam o que a DC tentou comunicar ao público.",

        keywords: [
            "Superman no cinema",
            "versões do Superman",
            "atores do Superman",
            "Superman DC",
            "história do Superman nos filmes",
            "DC no cinema",
            "DCU Superman",
            "LEXARA DC",
            "análise Superman",
        ],

        ogDescription:
            "Cada versão do Superman reflete sua época. Entenda como o herói mudou no cinema e o que isso revela sobre a estratégia da DC.",

        twitterDescription:
            "Do clássico ao moderno: veja como cada Superman no cinema revela uma fase diferente da DC.",

        ogImagePath: "/og/superman/og-superman-versoes-cinema.png",

        ogImageAlt:
            "LEXARA — As diferentes versões do Superman no cinema e o que cada uma diz sobre a DC",
    });
}

export const revalidate = 60;

export default function SupermanVersoesCinemaPage() {
    return (
        <SupermanVersoesCinema article={supermanVersoesCinemaArticle} />
    )
}