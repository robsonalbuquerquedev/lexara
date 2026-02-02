import type { Metadata } from "next";
import MulherMaravilha2017 from "@/components/dc/mulher-maravilha/MulherMaravilha2017";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { mulherMaravilha2017OrigemArticle } from "@/content/articles/mulher-maravilha/mulher-maravilha-2017-origem";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: mulherMaravilha2017OrigemArticle,

        title:
            "Mulher-Maravilha (2017): a origem heroica e o retorno do encanto na DC | LEXARA",

        description:
            "Uma análise crítica de Mulher-Maravilha (2017), explorando mitologia, guerra, esperança e por que Diana Prince funciona como símbolo quando o heroísmo é tratado com humanidade.",

        keywords: [
            "Mulher-Maravilha 2017",
            "Wonder Woman 2017",
            "Mulher-Maravilha origem",
            "Diana Prince cinema",
            "Gal Gadot Mulher-Maravilha",
            "filmes da DC",
            "DCEU",
            "Mulher-Maravilha análise",
            "heroísmo no cinema",
            "LEXARA DC",
        ],

        ogDescription:
            "Da mitologia à Primeira Guerra Mundial, Mulher-Maravilha (2017) marca o retorno do encanto na DC ao tratar o heroísmo como símbolo, empatia e escolha moral.",

        twitterDescription:
            "Por que Mulher-Maravilha (2017) devolveu o encanto à DC: uma leitura crítica sobre mito, guerra, esperança e o heroísmo de Diana Prince.",

        ogImagePath: "/og/mulhermaravilha/og-mulher-maravilha-2017-origem.png",

        ogImageAlt:
            "LEXARA — Mulher-Maravilha (2017): a origem heroica e o retorno do encanto na DC",
    });
}

export const revalidate = 60;

export default function MulherMaravilha2017Page() {
    return (
        <MulherMaravilha2017 article={mulherMaravilha2017OrigemArticle} />
    )
}