import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import MulherMaravilhaCard from "@/components/dc/mulher-maravilha/MulherMaravilhaCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "Mulher-Maravilha no cinema: mito, heroísmo e legado cultural | LEXARA",
    },

    description:
        "Análises narrativas e críticas sobre a Mulher-Maravilha no cinema. Da origem heroica ao impacto cultural, explore as diferentes fases da personagem e os caminhos para o futuro no DCU.",

    keywords: [
        "Mulher-Maravilha",
        "Wonder Woman",
        "Mulher-Maravilha no cinema",
        "Gal Gadot Mulher-Maravilha",
        "filmes da Mulher-Maravilha",
        "DC no cinema",
        "DCEU",
        "DCU",
        "heroínas da DC",
        "análise de filmes",
        "LEXARA DC",
    ],

    alternates: {
        canonical: "https://lexara.com.br/filmes-series/dc/mulher-maravilha",
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
        type: "website",
        url: "https://lexara.com.br/filmes-series/dc/mulher-maravilha",
        title:
            "Mulher-Maravilha no cinema: mito, heroísmo e legado cultural | LEXARA",
        description:
            "Uma curadoria crítica sobre a Mulher-Maravilha no cinema, explorando mitologia, escolhas narrativas, impacto cultural e o futuro da personagem no novo DCU.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/mulhermaravilha/og-mulher-maravilha.png",
                width: 1200,
                height: 630,
                alt:
                    "LEXARA — Mulher-Maravilha no cinema: mito, heroísmo e legado cultural",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Mulher-Maravilha no cinema: mito, heroísmo e legado cultural | LEXARA",
        description:
            "Da origem heroica ao impacto cultural: uma curadoria crítica sobre a Mulher-Maravilha no cinema e seus caminhos no DCU.",
        images: [
            "https://lexara.com.br/og/mulhermaravilha/og-mulher-maravilha.png",
        ],
    },
};

export const revalidate = 60;

export default function DcMulherMaravilhaPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/filmes-series/dc"
                    label="Voltar para Universo DC"
                    mode="fixed"
                />
            }
        >
            <MulherMaravilhaCard />
        </CardLayout>
    );
}
