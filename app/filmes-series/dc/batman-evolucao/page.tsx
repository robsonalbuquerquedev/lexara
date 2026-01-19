import BatmanEvolucao from "@/components/dc/batman/BatmanEvolucao";
// app/filmes-series/dc/batman-evolucao/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Batman: a evolução do herói nas telonas | LEXARA",
    },
    description:
        "Uma análise detalhada das diferentes interpretações do Batman no cinema — do tom sombrio de Tim Burton ao realismo épico de Christopher Nolan — e o impacto cultural do personagem ao longo das décadas.",
    keywords: [
        "Batman",
        "DC",
        "Filmes e Séries",
        "Análise",
        "Crítica",
        "Tim Burton",
        "Christopher Nolan",
        "The Batman",
        "Gotham",
        "Cultura geek",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/filmes-series/dc/batman-evolucao",
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
        url: "https://lexara.com.br/filmes-series/dc/batman-evolucao",
        title: "Batman: a evolução do herói nas telonas | LEXARA",
        description:
            "Do gótico de Burton ao realismo de Nolan: como o Batman mudou no cinema — e o que cada fase revela sobre medo, justiça e poder.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-filmes-series-dc.png",
                width: 1200,
                height: 630,
                alt: "LEXARA — Batman: a evolução do herói nas telonas",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Batman: a evolução do herói nas telonas | LEXARA",
        description:
            "Uma leitura crítica das diferentes versões do Batman no cinema — e por que cada era escolhe um “Batman” diferente.",
        images: ["https://lexara.com.br/og/og-filmes-series-dc.png"],
    },

    // Opcional, mas bem útil
    category: "Filmes & Séries",
    creator: "Robson Albuquerque",
    publisher: "LEXARA",
};

export default function BatmanEvolucaoPage() {
    return (
        <BatmanEvolucao />
    )
}