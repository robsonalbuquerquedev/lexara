import CardLayout from "@/components/layout/CardLayout";
import SpiderVerseCard from "@/components/card/SpiderVerseCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Animações | LEXARA — Críticas, Análises e Narrativas Visuais",
    },
    description:
        "Análises e críticas de animações que vão muito além do público infantil. Explore narrativas visuais, estilo artístico, linguagem cinematográfica e impacto cultural em filmes e sagas como Spider-Verse.",
    keywords: [
        "animações",
        "animação no cinema",
        "críticas de animações",
        "análises de animações",
        "filmes de animação",
        "Spider-Verse",
        "Aranhaverso",
        "Homem-Aranha no Aranhaverso",
        "Através do Aranhaverso",
        "linguagem visual",
        "estilo de animação",
        "narrativa visual",
        "cultura geek",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/filmes-series/animacoes",
    },
    openGraph: {
        type: "website",
        url: "https://lexara.com.br/filmes-series/animacoes",
        title: "Animações | LEXARA — Críticas, Análises e Narrativas Visuais",
        description:
            "Análises e críticas de animações com profundidade narrativa, estética e cultural — do Spider-Verse a obras que redefinem linguagem e emoção no cinema.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-filmes-series-animacoes.png",
                width: 1200,
                height: 630,
                alt: "LEXARA — Animações: análises e narrativas visuais",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Animações | LEXARA — Críticas, Análises e Narrativas Visuais",
        description:
            "Análises e críticas de animações que vão além do infantil: estética, narrativa, linguagem visual e impacto cultural — com destaque para Spider-Verse.",
        images: ["https://lexara.com.br/og/og-filmes-series-animacoes.png"],
    },
};

export default function FilmesSeriesAnimacoesPage() {
    return (
        <CardLayout>
            <SpiderVerseCard />
        </CardLayout>
    );
}
