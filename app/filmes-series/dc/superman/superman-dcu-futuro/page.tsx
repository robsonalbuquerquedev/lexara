import SupermanDcuFuturo from "@/components/dc/superman/SupermanDcuFuturo";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "O futuro do Superman no DCU: expectativas, riscos e o peso da esperança | LEXARA",
    },

    description:
        "Com o DCU em reconstrução, o Superman volta ao centro da DC. Análise crítica sobre expectativas, riscos criativos e o significado da esperança nesse novo começo.",

    keywords: [
        "Superman DCU",
        "Superman DC",
        "futuro do Superman",
        "DCU James Gunn",
        "novo universo DC",
        "Superman cinema",
        "filmes da DC",
        "análise Superman",
        "LEXARA DC",
    ],

    alternates: {
        canonical:
            "https://lexara.com.br/filmes-series/dc/superman/superman-dcu-futuro",
    },

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
        url: "https://lexara.com.br/filmes-series/dc/superman/superman-dcu-futuro",
        title:
            "O futuro do Superman no DCU: expectativas, riscos e o peso da esperança | LEXARA",
        description:
            "O Superman assume o papel central no novo DCU. O que está em jogo, quais os riscos criativos e por que a esperança volta a ser o tema-chave da DC.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-filmes-series-dc.png",
                width: 1200,
                height: 630,
                alt:
                    "LEXARA — O futuro do Superman no DCU: expectativas, riscos e o peso da esperança",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "O futuro do Superman no DCU: expectativas, riscos e o peso da esperança | LEXARA",
        description:
            "Análise sobre o papel do Superman no novo DCU, os riscos do recomeço e o retorno da esperança como identidade da DC.",
        images: ["https://lexara.com.br/og/og-filmes-series-dc.png"],
    },

    category: "Filmes & Séries",
    creator: "Robson Albuquerque",
    publisher: "LEXARA",
};

export const revalidate = 60;

export default function SupermanDcuFuturoPage() {
    return (
        <SupermanDcuFuturo />
    )
}