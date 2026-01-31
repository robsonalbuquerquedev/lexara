import SupermanEsperancaCinema from "@/components/dc/superman/SupermanEsperancaCinema";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "Superman no cinema: por que ele sempre representa esperança em tempos de crise | LEXARA",
    },

    description:
        "Análise narrativa e crítica sobre o Superman no cinema, explorando o simbolismo da esperança, os dilemas morais do herói e como ele reflete as crises do mundo real.",

    keywords: [
        "Superman",
        "Superman no cinema",
        "Superman esperança",
        "análise Superman",
        "DC no cinema",
        "heróis e simbolismo",
        "dilemas morais Superman",
        "cinema de super-heróis",
        "LEXARA",
    ],

    alternates: {
        canonical:
            "https://lexara.com.br/filmes-series/dc/superman/superman-esperanca-cinema",
    },

    // Ajuda SEO e rich previews
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
        url: "https://lexara.com.br/filmes-series/dc/superman/superman-esperanca-cinema",
        title:
            "Superman no cinema: por que ele sempre representa esperança em tempos de crise | LEXARA",
        description:
            "Do símbolo moral clássico às leituras mais sombrias, entenda por que o Superman continua sendo o maior ícone de esperança do cinema em tempos de crise.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-filmes-series-dc.png",
                width: 1200,
                height: 630,
                alt:
                    "LEXARA — Superman no cinema e o simbolismo da esperança em tempos de crise",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Superman no cinema: por que ele sempre representa esperança em tempos de crise | LEXARA",
        description:
            "Uma análise crítica sobre como o Superman se tornou o maior símbolo de esperança do cinema — e por que isso ainda importa.",
        images: ["https://lexara.com.br/og/og-filmes-series-dc.png"],
    },

    // Opcional, mas bem útil
    category: "Filmes & Séries",
    creator: "Robson Albuquerque",
    publisher: "LEXARA",
};

export const revalidate = 60;

export default function SupermanEsperancaCinemaPage() {
    return (
        <SupermanEsperancaCinema />
    )
}