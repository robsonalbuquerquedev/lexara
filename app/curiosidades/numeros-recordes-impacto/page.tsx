import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import NumerosRecordesImpactoCard from "@/components/card/NumerosRecordesImpactoCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Números, Recordes & Impacto | Bilheteria, Audiência e Tendências – LEXARA",
    },
    description:
        "Dados e fatos que ajudam a medir impacto real: bilheteria, audiência, prêmios, tendências e viradas históricas na cultura geek. Números com contexto para entender por que certas obras marcaram época.",
    keywords: [
        "bilheteria",
        "recordes de bilheteria",
        "audiência",
        "recordes de audiência",
        "streaming",
        "prêmios",
        "tendências da cultura pop",
        "impacto cultural",
        "dados da indústria do entretenimento",
        "cultura geek",
        "cultura pop",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/curiosidades/numeros-recordes-impacto",
    },
    openGraph: {
        title: "Números, Recordes & Impacto | Dados com Contexto – LEXARA",
        description:
            "Bilheteria, audiência, prêmios e tendências: entenda os números por trás de fenômenos e viradas históricas — com contexto, leitura crítica e cultura geek em análise.",
        url: "https://lexara.com.br/curiosidades/numeros-recordes-impacto",
        siteName: "LEXARA",
        images: [
            {
                url: "https://lexara.com.br/og/og-numeros-recordes-impacto.png",
                width: 1200,
                height: 630,
                alt: "Números, Recordes e Impacto | Bilheteria, Audiência e Tendências – LEXARA",
            },
        ],
        locale: "pt_BR",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Números, Recordes & Impacto | LEXARA",
        description:
            "Bilheteria, audiência, prêmios e tendências que medem impacto real — números com contexto na cultura geek.",
        images: ["https://lexara.com.br/og/og-numeros-recordes-impacto.png"],
    },
};

export default function NumerosRecordesImpactoPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/curiosidades"
                    label="Voltar para Curiosidades"
                />
            }
        >
            <NumerosRecordesImpactoCard />
        </CardLayout>
    );
}
