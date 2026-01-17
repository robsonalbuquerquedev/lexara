import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import LinhaDoTempoMovimentosCard from "@/components/card/LinhaDoTempoMovimentosCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "Linha do Tempo & Movimentos Culturais — História, Eras e Transformações | LEXARA",
    },
    description:
        "Explore a linha do tempo dos grandes movimentos culturais e criativos. Entenda contextos históricos, escolas artísticas e os marcos que transformaram narrativas, mídias e a cultura geek ao longo das eras.",
    keywords: [
        "linha do tempo cultural",
        "movimentos culturais",
        "história da cultura pop",
        "movimentos artísticos",
        "evolução cultural",
        "eras criativas",
        "história da narrativa geek",
        "origem da cultura geek",
        "LEXARA",
    ],
    alternates: {
        canonical:
            "https://lexara.com.br/historia-origem/linha-do-tempo-movimentos",
    },
    openGraph: {
        title:
            "Linha do Tempo & Movimentos — Eras que Moldaram a Cultura | LEXARA",
        description:
            "Uma jornada histórica pelos movimentos culturais e criativos que mudaram a forma de contar histórias, criar mundos e consumir cultura geek.",
        url: "https://lexara.com.br/historia-origem/linha-do-tempo-movimentos",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "article",
        images: [
            {
                url: "https://lexara.com.br/og/og-linha-do-tempo-movimentos.png",
                width: 1200,
                height: 630,
                alt: "Linha do Tempo & Movimentos Culturais — LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Linha do Tempo & Movimentos Culturais — LEXARA",
        description:
            "Contexto histórico, movimentos criativos e marcos culturais que moldaram a cultura geek ao longo do tempo.",
        images: [
            "https://lexara.com.br/og/og-linha-do-tempo-movimentos.png",
        ],
    },
};

export default function LinhaDoTempoMovimentosPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/hqs-mangas"
                    label="Voltar para História & Origem"
                />
            }
        >
            <LinhaDoTempoMovimentosCard />
        </CardLayout>
    );
}