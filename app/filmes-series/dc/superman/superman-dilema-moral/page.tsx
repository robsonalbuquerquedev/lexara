import SupermanDilemaMoral from "@/components/dc/superman/SupermanDilemaMoral";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "O dilema do Superman moderno: força absoluta, escolhas morais e consequências | LEXARA",
    },

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

    alternates: {
        canonical:
            "https://lexara.com.br/filmes-series/dc/superman/superman-dilema-moral",
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
        url: "https://lexara.com.br/filmes-series/dc/superman/superman-dilema-moral",
        title:
            "O dilema do Superman moderno: força absoluta, escolhas morais e consequências | LEXARA",
        description:
            "Uma análise sobre como o cinema moderno passou a questionar o Superman: poder absoluto, decisões morais complexas e consequências que vão além do heroísmo.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-filmes-series-dc.png",
                width: 1200,
                height: 630,
                alt:
                    "LEXARA — O dilema moral do Superman no cinema moderno",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "O dilema do Superman moderno: força absoluta e escolhas morais | LEXARA",
        description:
            "O Superman mais poderoso também enfrenta os dilemas mais difíceis. Uma análise sobre moral, responsabilidade e consequências no cinema.",
        images: ["https://lexara.com.br/og/og-filmes-series-dc.png"],
    },

    category: "Filmes & Séries",
    creator: "Robson Albuquerque",
    publisher: "LEXARA",
};

export const revalidate = 60;

export default function SupermanDilemaMoralPage() {
    return (
        <SupermanDilemaMoral />
    )
}