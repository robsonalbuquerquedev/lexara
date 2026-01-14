import type { Metadata } from "next";
import CuriosidadesCard from "@/components/card/CuriosidadesCard";

export const metadata: Metadata = {
    title: {
        absolute: "Curiosidades — Fatos Ocultos e Conexões Geek | LEXARA",
    },
    description:
        "Fatos curiosos, detalhes ocultos e conexões pouco conhecidas que enriquecem a compreensão da cultura geek — easter eggs, bastidores e links entre universos.",
    keywords: [
        "curiosidades",
        "fatos curiosos",
        "easter eggs",
        "referências",
        "detalhes ocultos",
        "conexões",
        "bastidores",
        "trivia",
        "retcon",
        "cânone",
        "impacto cultural",
        "cultura geek",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/curiosidades",
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
        title: "Curiosidades — Detalhes Ocultos em Análise | LEXARA",
        description:
            "Easter eggs, bastidores, retcons e conexões pouco conhecidas que expandem a leitura da cultura geek.",
        url: "https://lexara.com.br/curiosidades",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://lexara.com.br/og/og-curiosidades.png",
                width: 1200,
                height: 630,
                alt: "Curiosidades — Detalhes Ocultos em Análise | LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Curiosidades — Detalhes Ocultos em Análise | LEXARA",
        description:
            "Easter eggs, bastidores, retcons e conexões pouco conhecidas que expandem a leitura da cultura geek.",
        images: ["https://lexara.com.br/og/og-curiosidades.png"],
    },
};

export default function CuriosidadesPage() {
    return <CuriosidadesCard />;
}
