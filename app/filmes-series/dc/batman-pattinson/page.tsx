import BatmanPattinson from "@/components/dc/batman/BatmanPattinson";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "Robert Pattinson: o Batman detetive e o nascimento de um novo universo | LEXARA",
    },
    description:
        "Uma análise do Batman mais investigativo já visto no cinema, a abordagem noir de The Batman (2022) e como essa versão inaugura um novo caminho narrativo para o universo da DC.",

    keywords: [
        "Batman",
        "Robert Pattinson",
        "The Batman 2022",
        "Batman detetive",
        "DC Comics",
        "DC no cinema",
        "Filmes de super-heróis",
        "Análise de filmes",
        "Gotham City",
        "Universo DC",
        "LEXARA",
    ],

    alternates: {
        canonical: "https://lexara.com.br/filmes-series/dc/batman/robert-pattinson",
    },

    // SEO + Rich Results
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {
        type: "article",
        url: "https://lexara.com.br/filmes-series/dc/batman/robert-pattinson",
        title:
            "Robert Pattinson: o Batman detetive e o nascimento de um novo universo | LEXARA",
        description:
            "Entenda como The Batman resgata o lado investigativo do herói, constrói uma Gotham noir e estabelece as bases para um novo universo da DC.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-filmes-series-dc.png",
                width: 1200,
                height: 630,
                alt:
                    "LEXARA — Robert Pattinson como Batman em uma abordagem noir e investigativa",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Robert Pattinson: o Batman detetive e o nascimento de um novo universo | LEXARA",
        description:
            "O Batman mais investigativo do cinema: noir, Gotham sombria e o início de um novo universo da DC.",
        images: ["https://lexara.com.br/og/og-filmes-series-dc.png"],
    },

    // Metadados editoriais
    category: "Filmes & Séries",
    creator: "Robson Albuquerque",
    publisher: "LEXARA",
};

export default function BatmanPattinsonPage() {
    return (
        <BatmanPattinson />
    )
}