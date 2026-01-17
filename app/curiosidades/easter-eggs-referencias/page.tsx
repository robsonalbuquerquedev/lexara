import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import EasterEggsReferenciasCard from "@/components/card/EasterEggsReferenciasCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Easter Eggs & Referências | Detalhes Ocultos da Cultura Pop – LEXARA",
    },
    description:
        "Easter eggs, referências ocultas, callbacks visuais e detalhes escondidos em filmes, séries, games, animes e HQs. Descubra o que passa despercebido até alguém pausar o frame certo.",
    keywords: [
        "easter eggs",
        "referências ocultas",
        "callbacks",
        "detalhes escondidos",
        "curiosidades cultura pop",
        "easter eggs filmes",
        "easter eggs séries",
        "easter eggs games",
        "referências em animes",
        "cultura geek",
        "análise cultural",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/curiosidades/easter-eggs-referencias",
    },
    openGraph: {
        title: "Easter Eggs & Referências | Cultura Pop em Camadas – LEXARA",
        description:
            "Detalhes escondidos, homenagens e referências que passam batido — até alguém pausar, rever e conectar os pontos. Uma leitura mais profunda da cultura pop.",
        url: "https://lexara.com.br/curiosidades/easter-eggs-referencias",
        siteName: "LEXARA",
        images: [
            {
                url: "https://lexara.com.br/og/og-easter-eggs-referencias.png",
                width: 1200,
                height: 630,
                alt: "Easter Eggs e Referências na Cultura Pop | LEXARA",
            },
        ],
        locale: "pt_BR",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Easter Eggs & Referências | LEXARA",
        description:
            "Referências ocultas, detalhes escondidos e callbacks que enriquecem filmes, séries, games e animes.",
        images: [
            "https://lexara.com.br/og/og-easter-eggs-referencias.png",
        ],
    },
};

export default function EasterEggsReferenciasPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/curiosidades"
                    label="Voltar para Curiosidades"
                />
            }
        >
            <EasterEggsReferenciasCard />
        </CardLayout>
    );
}
