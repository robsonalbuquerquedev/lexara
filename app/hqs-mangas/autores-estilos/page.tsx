import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import AutoresEstilosCard from "@/components/card/AutoresEstilosCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Autores & Estilos — HQs e Mangás em Análise | LEXARA",
    },
    description:
        "Do roteiro ao traço: análises de autores, estilos e movimentos em HQs e mangás. Escolas artísticas, linguagem visual, narrativa e assinaturas criativas que tornam cada obra única.",
    keywords: [
        "autores de hqs",
        "roteiristas de quadrinhos",
        "desenhistas de hqs",
        "autores de mangá",
        "mangakás famosos",
        "estilos de desenho",
        "estilos de quadrinhos",
        "escolas artísticas nos quadrinhos",
        "linha clara",
        "bande dessinée",
        "mangá moderno",
        "linguagem visual",
        "composição de página",
        "narrativa nos quadrinhos",
        "análise de hqs",
        "análise de mangás",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/hqs-mangas/autores-estilos",
    },
    openGraph: {
        title: "Autores & Estilos — HQs e Mangás em Análise | LEXARA",
        description:
            "Análises de autores, estilos e movimentos em HQs e mangás: do roteiro ao traço, como linguagem visual e assinatura criativa tornam cada obra única.",
        url: "https://lexara.com.br/hqs-mangas/autores-estilos",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://lexara.com.br/og/og-autores-estilos.png",
                width: 1200,
                height: 630,
                alt: "Autores & Estilos — LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Autores & Estilos — HQs e Mangás em Análise | LEXARA",
        description:
            "Do roteiro ao traço: autores, estilos e movimentos em HQs e mangás — linguagem visual, narrativa e assinaturas criativas.",
        images: ["https://lexara.com.br/og/og-autores-estilos.png"],
    },
};

export default function AutoresEstilosPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/hqs-mangas"
                    label="Voltar para HQs & Mangás"
                />
            }
        >
            <AutoresEstilosCard />
        </CardLayout>
    );
}