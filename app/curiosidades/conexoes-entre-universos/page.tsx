import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import ConexoesEntreUniversosCard from "@/components/card/ConexoesEntreUniversosCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Conexões entre Universos | Pontes e Influências na Cultura Geek – LEXARA",
    },
    description:
        "Pontes pouco conhecidas entre obras: inspirações cruzadas, referências indiretas e conexões entre filmes, séries, games, animes e HQs. Descubra como universos dialogam e ampliam a leitura da cultura geek.",
    keywords: [
        "conexões entre universos",
        "inspirações cruzadas",
        "influências na cultura pop",
        "referências indiretas",
        "cultura geek",
        "cultura pop",
        "universos compartilhados",
        "conexões entre filmes e séries",
        "influência de games no cinema",
        "anime e cultura ocidental",
        "HQs e cinema",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/curiosidades/conexoes-entre-universos",
    },
    openGraph: {
        title: "Conexões entre Universos | Pontes Ocultas da Cultura Geek – LEXARA",
        description:
            "Inspirações cruzadas e conexões que você não vê de primeira: entenda como ideias viajam entre obras e criam pontes entre filmes, séries, games, animes e HQs.",
        url: "https://lexara.com.br/curiosidades/conexoes-entre-universos",
        siteName: "LEXARA",
        images: [
            {
                url: "https://lexara.com.br/og/og-conexoes-entre-universos.png",
                width: 1200,
                height: 630,
                alt: "Conexões entre Universos na Cultura Geek | LEXARA",
            },
        ],
        locale: "pt_BR",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Conexões entre Universos | LEXARA",
        description:
            "Pontes ocultas, inspirações cruzadas e conexões entre obras que ampliam a leitura da cultura geek.",
        images: ["https://lexara.com.br/og/og-conexoes-entre-universos.png"],
    },
};

export default function ConexoesEntreUniversosPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/curiosidades"
                    label="Voltar para Curiosidades"
                />
            }
        >
            <ConexoesEntreUniversosCard />
        </CardLayout>
    );
}
