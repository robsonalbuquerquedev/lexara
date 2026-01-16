import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import RetroClassicosCard from "@/components/card/RetroClassicosCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Retro & Clássicos dos Games | 8-bit ao PS2, história e legado | LEXARA",
    },
    description:
        "Do 8-bit ao PS2: os jogos que marcaram época e ainda divertem hoje. Entenda o que envelhece bem no design, quais mecânicas continuam atuais e quais revoluções definiram o jeito de jogar.",
    keywords: [
        "retro games",
        "jogos clássicos",
        "8-bit",
        "16-bit",
        "PS1",
        "PS2",
        "história dos videogames",
        "evolução dos games",
        "design de jogos",
        "mecânicas de jogo",
        "dificuldade nos jogos",
        "level design",
        "legado dos games",
        "cultura gamer",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/games/retro-classicos",
    },
    openGraph: {
        type: "website",
        url: "https://lexara.com.br/games/retro-classicos",
        title: "Retro & Clássicos dos Games | Do 8-bit ao PS2 | LEXARA",
        description:
            "Uma viagem do 8-bit ao PS2: as revoluções, o design e as mecânicas que fizeram os clássicos durarem — e ainda influenciarem os jogos de hoje.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-retro-classicos.png",
                width: 1200,
                height: 630,
                alt: "Retro & Clássicos — Do 8-bit ao PS2 | LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Retro & Clássicos | Do 8-bit ao PS2 | LEXARA",
        description:
            "O que fez alguns jogos envelhecerem bem? Veja revoluções, mecânicas e design que definiram gerações.",
        images: ["https://lexara.com.br/og/og-retro-classicos.png"],
    },
};

export default function RetroClassicosPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/games"
                    label="Voltar para Games"
                />
            }
        >
            <RetroClassicosCard />
        </CardLayout>
    );
}