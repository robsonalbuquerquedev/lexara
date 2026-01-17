import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import ImpactoCulturalLegadoCard from "@/components/card/ImpactoCulturalLegadoCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "Impacto Cultural & Legado — Repercussão, Influência e Marca no Tempo | LEXARA",
    },
    description:
        "Entenda o impacto cultural de obras marcantes: repercussão no público, influência no mercado e o legado que atravessa gerações, redefinindo referências e tendências na cultura geek.",
    keywords: [
        "impacto cultural",
        "legado cultural",
        "repercussão no público",
        "influência no mercado",
        "obras que marcaram gerações",
        "cultura pop e legado",
        "tendências da cultura geek",
        "referência cultural",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/historia-origem/impacto-cultural-legado",
    },
    openGraph: {
        title: "Impacto Cultural & Legado — A Marca que Fica no Tempo | LEXARA",
        description:
            "A repercussão no público, a influência na indústria e o legado cultural que atravessa gerações e redefine referências criativas.",
        url: "https://lexara.com.br/historia-origem/impacto-cultural-legado",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "article",
        images: [
            {
                url: "https://lexara.com.br/og/og-impacto-cultural-legado.png",
                width: 1200,
                height: 630,
                alt: "Impacto Cultural & Legado — LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Impacto Cultural & Legado — Repercussão e Influência | LEXARA",
        description:
            "Por que algumas obras atravessam gerações? Veja repercussão, influência e legado cultural na cultura geek.",
        images: ["https://lexara.com.br/og/og-impacto-cultural-legado.png"],
    },
};

export default function ImpactoCulturalLegadoPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/historia-origem"
                    label="Voltar para História & Origem"
                />
            }
        >
            <ImpactoCulturalLegadoCard />
        </CardLayout>
    );
}