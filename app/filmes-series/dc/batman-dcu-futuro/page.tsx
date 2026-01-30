import BatmanDcuFuturo from "@/components/dc/batman/BatmanDcuFuturo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "O futuro do Batman no DCU de James Gunn: expectativas e riscos | LEXARA",
    },

    description:
        "Uma análise crítica sobre o futuro do Batman no novo DCU de James Gunn. Expectativas, riscos narrativos e caminhos possíveis para o Cavaleiro das Trevas no universo cinematográfico da DC.",

    keywords: [
        "Batman DCU",
        "Batman James Gunn",
        "futuro do Batman",
        "DCU Batman",
        "DC Studios",
        "universo DC",
        "cinema DC",
        "Batman no cinema",
        "análise Batman",
        "LEXARA filmes e séries",
    ],

    alternates: {
        canonical: "https://lexara.com.br/filmes-series/dc/batman-dcu-futuro",
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
        url: "https://lexara.com.br/filmes-series/dc/batman-dcu-futuro",
        title:
            "O futuro do Batman no DCU de James Gunn: expectativas e riscos | LEXARA",
        description:
            "Expectativas, incertezas e caminhos possíveis para o Batman no novo universo cinematográfico da DC sob o comando de James Gunn.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-filmes-series-dc.png",
                width: 1200,
                height: 630,
                alt:
                    "LEXARA — O futuro do Batman no DCU de James Gunn: expectativas e riscos",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "O futuro do Batman no DCU de James Gunn: expectativas e riscos | LEXARA",
        description:
            "Uma leitura crítica sobre o futuro do Batman no DCU: riscos criativos, expectativas do público e os caminhos possíveis para o herói.",
        images: ["https://lexara.com.br/og/og-filmes-series-dc.png"],
    },

    // Metadados editoriais
    category: "Filmes & Séries",
    creator: "Robson Albuquerque",
    publisher: "LEXARA",
};

export const revalidate = 60;

export default function BatmanDCUFuturoPage() {
    return (
        <BatmanDcuFuturo />
    )
}