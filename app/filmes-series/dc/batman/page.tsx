import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import BatmanCard from "@/components/dc/batman/BatmanCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Batman no cinema: versões, conflitos e legado cultural | LEXARA",
    },

    description:
        "Análises narrativas e críticas sobre as diferentes versões do Batman no cinema, explorando suas transformações, dilemas morais e o impacto cultural do personagem ao longo das décadas.",

    keywords: [
        "Batman",
        "Batman no cinema",
        "DC",
        "Filmes da DC",
        "Versões do Batman",
        "Análise de personagens",
        "Narrativa no cinema",
        "Cultura pop",
        "LEXARA",
    ],

    alternates: {
        canonical: "https://lexara.com.br/filmes-series/dc/batman",
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
        url: "https://lexara.com.br/filmes-series/dc/batman",
        title: "Batman no cinema: versões, conflitos e legado cultural | LEXARA",
        description:
            "Uma análise profunda das diferentes interpretações do Batman no cinema, seus conflitos internos e a evolução cultural do personagem ao longo das décadas.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/batman/og-batman-cinema.png",
                width: 1200,
                height: 630,
                alt: "LEXARA — Batman no cinema: versões, conflitos e legado cultural",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Batman no cinema: versões, conflitos e legado cultural | LEXARA",
        description:
            "As diferentes versões do Batman no cinema analisadas sob a ótica narrativa, emocional e cultural.",
        images: ["https://lexara.com.br/og/batman/og-batman-cinema.png"],
    },
};

export const revalidate = 60;

export default function DcBatmanPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/filmes-series/dc"
                    label="Voltar para Universo DC"
                    mode="fixed"
                />
            }
        >
            <BatmanCard />
        </CardLayout>
    );
}
