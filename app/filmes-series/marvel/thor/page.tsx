import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import ThorCard from "@/components/marvel/thor/ThorCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Thor no MCU: do mito ao trauma | LEXARA",
    },

    description:
        "Análises narrativas sobre Thor no cinema. Do deus arrogante ao herói marcado por luto, identidade e busca por sentido após o apocalipse.",

    keywords: [
        "Thor MCU",
        "Thor Marvel",
        "Mjolnir",
        "Stormbreaker",
        "Thor Ragnarok",
        "Thor Endgame",
        "análise Thor",
        "mitologia no MCU",
        "LEXARA Marvel",
    ],

    alternates: {
        canonical: "https://lexara.com.br/filmes-series/marvel/thor",
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
        type: "website",
        url: "https://lexara.com.br/filmes-series/marvel/thor",
        title: "Thor no MCU: do mito ao trauma | LEXARA",
        description:
            "Um deus diante do vazio. Veja como o MCU reconstrói Thor entre destino, humor e perdas irreversíveis.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/thor/og-thor.png",
                width: 1200,
                height: 630,
                alt: "LEXARA — Thor no MCU",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Thor no MCU: do mito ao trauma | LEXARA",
        description:
            "Da força divina ao luto silencioso. Uma leitura crítica sobre a jornada emocional de Thor no MCU.",
        images: ["https://lexara.com.br/og/thor/og-thor.png"],
    },
};

export default function MarvelThorPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/filmes-series/marvel"
                    label="Voltar para Universo Marvel"
                />
            }
        >
            <ThorCard />
        </CardLayout>
    );
}
