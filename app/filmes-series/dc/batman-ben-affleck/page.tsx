import BatmanBenAffleck from "@/components/dc/batman/BatmanBenAffleck";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Ben Affleck e o Batman do DCEU: entre o mito e a controvérsia | LEXARA",
    },

    description:
        "Uma leitura crítica sobre o Batman interpretado por Ben Affleck no DCEU, analisando sua abordagem mais brutal, o peso do mito do herói e as controvérsias que dividiram público e crítica.",

    keywords: [
        "Batman Ben Affleck",
        "Batman DCEU",
        "Ben Affleck Batman",
        "Batman DC filmes",
        "Batman v Superman análise",
        "Zack Snyder Batman",
        "Batman cinema",
        "DC Extended Universe",
        "Cavaleiro das Trevas DCEU",
        "LEXARA Batman",
    ],

    alternates: {
        canonical: "https://lexara.com.br/filmes-series/dc/batman/ben-affleck",
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
        url: "https://lexara.com.br/filmes-series/dc/batman/ben-affleck",
        title: "Ben Affleck e o Batman do DCEU: entre o mito e a controvérsia | LEXARA",
        description:
            "Uma análise crítica do Batman vivido por Ben Affleck no DCEU, explorando o tom mais brutal do herói, sua construção mítica e os debates que marcaram essa fase da DC no cinema.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-filmes-series-dc.png",
                width: 1200,
                height: 630,
                alt: "LEXARA — Ben Affleck como Batman no DCEU",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Ben Affleck e o Batman do DCEU | LEXARA",
        description:
            "O Batman mais brutal do cinema: uma leitura crítica sobre a versão de Ben Affleck, o peso do mito e as controvérsias do DCEU.",
        images: ["https://lexara.com.br/og/og-filmes-series-dc.png"],
    },

    // Opcional, mas bem útil
    category: "Filmes & Séries",
    creator: "Robson Albuquerque",
    publisher: "LEXARA",
};

export default function BatmanBenAffleckPage() {
    return (
        <BatmanBenAffleck />
    )
}