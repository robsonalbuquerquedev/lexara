import type { Metadata } from "next";
import SupermanDilemaMoral from "@/components/dc/superman/SupermanDilemaMoral";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { supermanDilemaMoralArticle } from "@/content/articles/superman/superman-dilema-moral";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: supermanDilemaMoralArticle,

        title:
            "O dilema do Superman moderno: força absoluta, escolhas morais e consequências | LEXARA",

        description:
            "Ser o herói mais poderoso do mundo não significa ter respostas simples. Uma análise sobre os dilemas morais do Superman contemporâneo, suas escolhas éticas e as consequências retratadas no cinema moderno.",

        keywords: [
            "Superman",
            "Superman moderno",
            "dilema moral do Superman",
            "Superman no cinema",
            "DC",
            "DCU",
            "heróis e moral",
            "super-heróis no cinema",
            "análise Superman",
            "filmes da DC",
        ],

        ogDescription:
            "Uma análise sobre como o cinema moderno passou a questionar o Superman: poder absoluto, decisões morais complexas e consequências que vão além do heroísmo.",

        twitterTitle:
            "O dilema do Superman moderno: força absoluta e escolhas morais | LEXARA",

        twitterDescription:
            "O Superman mais poderoso também enfrenta os dilemas mais difíceis. Uma análise sobre moral, responsabilidade e consequências no cinema.",

        ogImagePath: "/og/superman/og-superman-dilema-moral.png",

        ogImageAlt: "LEXARA — O dilema moral do Superman no cinema moderno",
    });
}

export const revalidate = 60;

export default function SupermanDilemaMoralPage() {
    return (
        <SupermanDilemaMoral article={supermanDilemaMoralArticle} />
    )
}