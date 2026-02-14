import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import CapitaoAmericaCard from "@/components/marvel/capitao-america/CapitaoAmericaCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Capitão América no MCU: ideal, símbolo e ruptura | LEXARA",
    },

    description:
        "Análises críticas sobre o Capitão América no cinema. Do soldado perfeito à liderança fraturada, explore propaganda, culpa histórica e escolhas morais no coração do MCU.",

    keywords: [
        "Capitão América",
        "Steve Rogers",
        "Capitão América MCU",
        "símbolo americano Marvel",
        "Guerra Civil Marvel",
        "Soldado Invernal",
        "análise Capitão América",
        "Marvel política",
        "LEXARA Marvel",
    ],

    alternates: {
        canonical: "https://lexara.com.br/filmes-series/marvel/capitao-america",
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
        url: "https://lexara.com.br/filmes-series/marvel/capitao-america",
        title: "Capitão América no MCU: ideal, símbolo e ruptura | LEXARA",
        description:
            "Quando o símbolo entra em conflito com o próprio sistema. Uma leitura crítica do arco moral e político do Capitão América no MCU.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/capitao-america/og-capitao-america.png",
                width: 1200,
                height: 630,
                alt: "LEXARA — Capitão América no MCU",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Capitão América no MCU: ideal, símbolo e ruptura | LEXARA",
        description:
            "Do soldado perfeito ao líder fraturado. Explore o conflito moral e político do Capitão América no MCU.",
        images: ["https://lexara.com.br/og/capitao-america/og-capitao-america.png"],
    },
};

export default function CapitaoAmericaPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/filmes-series/marvel"
                    label="Voltar para Universo Marvel"
                />
            }
        >
            <CapitaoAmericaCard />
        </CardLayout>
    );
}
