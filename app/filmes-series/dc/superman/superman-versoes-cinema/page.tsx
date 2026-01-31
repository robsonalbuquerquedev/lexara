import SupermanVersoesCinema from "@/components/dc/superman/SupermanVersoesCinema";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "As diferentes versões do Superman nas telonas — e o que cada uma diz sobre a DC | LEXARA",
    },

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

    alternates: {
        canonical:
            "https://lexara.com.br/filmes-series/dc/superman/superman-versoes-cinema",
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
        url: "https://lexara.com.br/filmes-series/dc/superman/superman-versoes-cinema",
        title:
            "As diferentes versões do Superman nas telonas — e o que cada uma diz sobre a DC | LEXARA",
        description:
            "Cada versão do Superman reflete sua época. Entenda como o herói mudou no cinema e o que isso revela sobre a estratégia da DC.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-filmes-series-dc.png",
                width: 1200,
                height: 630,
                alt:
                    "LEXARA — As diferentes versões do Superman no cinema e o que cada uma diz sobre a DC",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "As diferentes versões do Superman nas telonas — e o que cada uma diz sobre a DC | LEXARA",
        description:
            "Do clássico ao moderno: veja como cada Superman no cinema revela uma fase diferente da DC.",
        images: ["https://lexara.com.br/og/og-filmes-series-dc.png"],
    },

    // Opcional, mas bem útil
    category: "Filmes & Séries",
    creator: "Robson Albuquerque",
    publisher: "LEXARA",
};

export const revalidate = 60;

export default function SupermanVersoesCinemaPage() {
    return (
        <SupermanVersoesCinema />
    )
}