import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import HomemDeFerroCard from "@/components/marvel/homem-de-ferro/HomemDeFerroCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Homem de Ferro no MCU: o início de uma era | LEXARA",
    },

    description:
        "Análises narrativas e críticas sobre o Homem de Ferro no cinema. Entenda como Tony Stark inaugura o MCU, define o tom do universo e constrói um legado que atravessa toda a saga Marvel.",

    keywords: [
        "Homem de Ferro",
        "Tony Stark",
        "Homem de Ferro MCU",
        "início do MCU",
        "Marvel no cinema",
        "filmes da Marvel",
        "análise Homem de Ferro",
        "Universo Cinematográfico Marvel",
        "LEXARA Marvel",
    ],

    alternates: {
        canonical: "https://lexara.com.br/filmes-series/marvel/homem-de-ferro",
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
        url: "https://lexara.com.br/filmes-series/marvel/homem-de-ferro",
        title: "Homem de Ferro no MCU: o início de uma era | LEXARA",
        description:
            "Como Tony Stark abriu caminho para o MCU. Uma leitura crítica sobre carisma, tecnologia e o nascimento do universo Marvel no cinema.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/homem-de-ferro/og-homem-de-ferro.png",
                width: 1200,
                height: 630,
                alt: "LEXARA — Homem de Ferro no MCU",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Homem de Ferro no MCU: o início de uma era | LEXARA",
        description:
            "A porta de entrada do MCU. Veja como Tony Stark define o tom, o ritmo e o legado do universo Marvel.",
        images: ["https://lexara.com.br/og/homem-de-ferro/og-homem-de-ferro.png"],
    },
};

export const revalidate = 60;

export default function HomemDeFerroPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/filmes-series"
                    label="Voltar para Filmes & Séries"
                />
            }
        >
            <HomemDeFerroCard />
        </CardLayout>
    );
}
