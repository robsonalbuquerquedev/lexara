import type { Metadata } from "next";
import SectionPillsNav from "@/components/navigation/SectionPillsNav";
import GamesCard from "@/components/card/GamesCard";

export const metadata: Metadata = {
    title: {
        absolute: "Games — Análises, Mecânicas e Narrativas | LEXARA",
    },
    description:
        "Explorações detalhadas de games no console e no PC: análises críticas, mecânicas, narrativa, design, multiplayer e clássicos que moldam a cultura gamer.",
    keywords: [
        "games",
        "jogos",
        "análises de jogos",
        "crítica de games",
        "mecânicas de jogo",
        "game design",
        "narrativa em jogos",
        "lore",
        "RPG",
        "ação e aventura",
        "indie games",
        "multiplayer",
        "competitivo",
        "retro games",
        "clássicos",
        "console",
        "PC",
        "cultura gamer",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/games",
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
        title: "Games — Universo Gamer em Análise | LEXARA",
        description:
            "Análises e leituras profundas sobre jogos: narrativa, design, mecânicas, multiplayer e clássicos no console e no PC.",
        url: "https://lexara.com.br/games",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://lexara.com.br/og/og-games.png",
                width: 1200,
                height: 630,
                alt: "Games — Universo Gamer em Análise | LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Games — Universo Gamer em Análise | LEXARA",
        description:
            "Análises e leituras profundas sobre jogos: narrativa, design, mecânicas, multiplayer e clássicos.",
        images: ["https://lexara.com.br/og/og-games.png"],
    },
};

export default function GamesPage() {
    return (
        <>
            <SectionPillsNav />
            <GamesCard />;
        </>
    )
}
