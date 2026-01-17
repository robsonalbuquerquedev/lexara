import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import UniversosContinuidadesCard from "@/components/card/UniversosContinuidadesCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Universos & Continuidades — Cânone, Reboots e Multiversos | LEXARA",
    },
    description:
        "Cânone, multiversos, reboots, retcons e linhas do tempo em HQs e mangás. Entenda como universos compartilhados se expandem, se reorganizam e permanecem coerentes ao longo dos anos.",
    keywords: [
        "universos compartilhados",
        "continuidade nos quadrinhos",
        "multiverso hqs",
        "reboots da dc",
        "retcon nos quadrinhos",
        "linha do tempo da marvel",
        "crossover e eventos",
        "cânone nos mangás",
        "ordem de leitura hqs",
        "cronologia dos quadrinhos",
        "análise de universos fictícios",
        "HQs e mangás",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/hqs-mangas/universos-continuidades",
    },
    openGraph: {
        title: "Universos & Continuidades — HQs e Mangás em Análise | LEXARA",
        description:
            "Multiversos, reboots, retcons e linhas do tempo: como universos de HQs e mangás crescem sem virar bagunça.",
        url: "https://lexara.com.br/hqs-mangas/universos-continuidades",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://lexara.com.br/og/og-universos-continuidades.png",
                width: 1200,
                height: 630,
                alt: "Universos & Continuidades — LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Universos & Continuidades — HQs e Mangás em Análise | LEXARA",
        description:
            "Cânone, multiversos, reboots e linhas do tempo explicados de forma clara em HQs e mangás.",
        images: ["https://lexara.com.br/og/og-universos-continuidades.png"],
    },
};

export default function UniversosContinuidadesPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/hqs-mangas"
                    label="Voltar para HQs & Mangás"
                />
            }
        >
            <UniversosContinuidadesCard />
        </CardLayout>
    );
}