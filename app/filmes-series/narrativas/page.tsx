import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import HeroJourneyCard from "@/components/card/HeroJourneyCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Narrativas & Simbolismos | LEXARA — Leituras Profundas de Filmes e Séries",
    },
    description:
        "Narrativas & Simbolismos no LEXARA: leituras profundas sobre temas, metáforas e construção de significado em filmes e séries. Entenda estrutura narrativa, arquétipos e a Jornada do Herói com análises claras e críticas.",
    keywords: [
        "narrativas",
        "simbolismos",
        "simbolismo no cinema",
        "subtexto",
        "metáforas no cinema",
        "interpretação de filmes",
        "análise narrativa",
        "estrutura narrativa",
        "jornada do herói",
        "jornada do heroi",
        "arquétipos",
        "arquétipos de personagens",
        "mentor sombra trickster",
        "construção de significado",
        "crítica de filmes e séries",
        "LEXARA",
        "cultura geek",
    ],
    alternates: {
        canonical: "https://lexara.com.br/filmes-series/narrativas",
    },
    openGraph: {
        type: "website",
        url: "https://lexara.com.br/filmes-series/narrativas",
        title: "Narrativas & Simbolismos | LEXARA — Leituras Profundas de Filmes e Séries",
        description:
            "Leituras profundas sobre temas, metáforas e construção de significado. Explore Jornada do Herói, arquétipos e estrutura narrativa em análises de filmes e séries.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-filmes-series-narrativas.png",
                width: 1200,
                height: 630,
                alt: "LEXARA — Narrativas & Simbolismos: leituras profundas em análise",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Narrativas & Simbolismos | LEXARA — Leituras Profundas",
        description:
            "Temas, metáforas e significado em filmes e séries: Jornada do Herói, arquétipos e estrutura narrativa em análises profundas no LEXARA.",
        images: ["https://lexara.com.br/og/og-filmes-series-narrativas.png"],
    },
};

export default function FilmesSeriesNarrativasPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/filmes-series"
                    label="Voltar para Filmes & Séries"
                />
            }
        >
            <HeroJourneyCard />
        </CardLayout>
    );
}
