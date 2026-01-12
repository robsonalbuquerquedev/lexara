import FilmesSeriesCard from "@/components/card/FilmesSeriesCard"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Filmes & Séries | Análises e Críticas da Cultura Geek — Lexara",
    },
    description:
        "Análises profundas, críticas bem fundamentadas e leituras narrativas sobre filmes e séries que moldam a cultura geek contemporânea. Explore universos como Marvel, DC, animações e live action.",
    keywords: [
        "filmes e séries",
        "críticas de filmes",
        "análises de séries",
        "cultura geek",
        "Marvel",
        "DC",
        "live action",
        "animações",
        "cinema contemporâneo",
    ],
    alternates: {
        canonical: "https://lexara.com.br/filmes-series",
    },
    openGraph: {
        title: "Filmes & Séries | Cultura Geek em Análise — Lexara",
        description:
            "Um hub editorial com análises, críticas e leituras narrativas sobre filmes e séries que definem a cultura geek atual.",
        url: "https://lexara.com.br/filmes-series",
        siteName: "Lexara",
        type: "website",
        images: [
            {
                url: "https://lexara.com.br/og/og-filmes-series.png",
                width: 1200,
                height: 630,
                alt: "Filmes e Séries — Cultura Geek em Análise",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Filmes & Séries | Cultura Geek em Análise — Lexara",
        description:
            "Críticas e análises profundas sobre filmes e séries que moldam a cultura geek contemporânea.",
        images: ["https://lexara.com.br/og/og-filmes-series.png"],
    },
};

export default function FilmesSeriesPage() {
    return (
        <FilmesSeriesCard />
    )
}