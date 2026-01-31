import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import SupermanCard from "@/components/dc/superman/SupermanCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Superman no cinema: eras, versões e o futuro no DCU | LEXARA",
    },

    description:
        "O símbolo máximo da esperança: veja análises narrativas e críticas do Superman no cinema, comparando eras e versões nas telonas, seus dilemas morais e o que vem pela frente no novo DCU.",

    keywords: [
        "Superman",
        "Superman no cinema",
        "Superman DCU",
        "DCU",
        "DC Studios",
        "James Gunn",
        "Homem de Aço",
        "filmes do Superman",
        "versões do Superman",
        "atores do Superman",
        "análise Superman",
        "crítica Superman",
        "simbolismo do Superman",
        "esperança no cinema",
        "personagens DC",
        "Filmes & Séries LEXARA",
    ],

    alternates: {
        canonical: "https://lexara.com.br/filmes-series/dc/superman",
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
        url: "https://lexara.com.br/filmes-series/dc/superman",
        title: "Superman no cinema: eras, versões e o futuro no DCU | LEXARA",
        description:
            "O símbolo máximo da esperança: análises e críticas do Superman no cinema, suas versões nas telonas, dilemas morais e o que vem pela frente no DCU.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/superman/og-homem-de-aco.png",
                width: 1200,
                height: 630,
                alt: "LEXARA — Superman no cinema: eras, versões e o futuro no DCU",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Superman no cinema: eras, versões e o futuro no DCU | LEXARA",
        description:
            "Análises e críticas do Superman no cinema: versões, simbolismo da esperança, dilemas morais e o que vem pela frente no DCU.",
        images: ["https://lexara.com.br/og/superman/og-homem-de-aco.png"],
    },
};

export const revalidate = 60;

export default function DcSupermanPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/filmes-series/dc"
                    label="Voltar para Filmes & Séries"
                    mode="fixed"
                />
            }
        >
            <SupermanCard />
        </CardLayout>
    );
}
