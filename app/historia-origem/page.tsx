import type { Metadata } from "next";
import HistoriaOrigemCard from "@/components/card/HistoriaOrigemCard";

export const metadata: Metadata = {
    title: {
        absolute: "História & Origem — Contexto, Bastidores e Evolução | LEXARA",
    },
    description:
        "Análises de contexto histórico, evolução criativa e bastidores que explicam o surgimento de obras e movimentos culturais — com leituras críticas e conexões na cultura geek.",
    keywords: [
        "história e origem",
        "contexto histórico",
        "bastidores",
        "making of",
        "evolução criativa",
        "movimentos culturais",
        "influências",
        "referências",
        "impacto cultural",
        "legado",
        "cultura geek",
        "análises",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/historia-origem",
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
        title: "História & Origem — Contexto e Bastidores | LEXARA",
        description:
            "Contexto histórico, evolução criativa e bastidores que explicam o surgimento de obras e movimentos culturais.",
        url: "https://lexara.com.br/historia-origem",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://lexara.com.br/og/og-historia-origem.png",
                width: 1200,
                height: 630,
                alt: "História & Origem — Contexto e Bastidores | LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "História & Origem — Contexto e Bastidores | LEXARA",
        description:
            "Contexto histórico, evolução criativa e bastidores que explicam o surgimento de obras e movimentos culturais.",
        images: ["https://lexara.com.br/og/og-historia-origem.png"],
    },
};

export default function HistoriaOrigemPage() {
    return <HistoriaOrigemCard />;
}
