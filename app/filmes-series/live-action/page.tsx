import CardLayout from "@/components/layout/CardLayout";
import OnePieceCard from "@/components/card/OnePieceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Live Action — Análises de Filmes e Séries | LEXARA",
    },
    description:
        "Análises críticas e aprofundadas sobre filmes e séries live-action. Explore adaptações, personagens, fidelidade às obras originais e o impacto cultural no universo geek.",
    keywords: [
        "live action",
        "filmes live action",
        "séries live action",
        "análise de live action",
        "adaptações de anime",
        "adaptações de mangá",
        "cultura geek",
        "críticas de séries",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/filmes-series/live-action",
    },
    openGraph: {
        title: "Live Action — Análises de Filmes e Séries | LEXARA",
        description:
            "Descubra análises detalhadas sobre filmes e séries live-action, com foco em adaptações, narrativa, personagens e impacto cultural.",
        url: "https://lexara.com.br/filmes-series/live-action",
        siteName: "LEXARA",
        images: [
            {
                url: "/images/og/og-filmes-series-live-action.png",
                width: 1200,
                height: 630,
                alt: "Análises de Filmes e Séries Live Action — LEXARA",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Live Action — Análises de Filmes e Séries | LEXARA",
        description:
            "Análises críticas de filmes e séries live-action, explorando adaptações, personagens e o impacto no universo geek.",
        images: ["/images/og/og-filmes-series-live-action.png"],
    },
};

export default function FilmesSeriesLiveActionPage() {
    return (
        <CardLayout>
            <OnePieceCard />
        </CardLayout>
    );
}
