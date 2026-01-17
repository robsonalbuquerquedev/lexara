import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import ArcosClassicosSagasCard from "@/components/card/ArcosClassicosSagasCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Arcos Clássicos & Sagas — HQs e Mangás em Análise | LEXARA",
    },
    description:
        "Leituras e análises de arcos clássicos e sagas essenciais em HQs e mangás. Histórias que redefiniram personagens, mudaram universos e viraram referência no gênero — com contexto, impacto e legado.",
    keywords: [
        "arcos clássicos",
        "sagas de hqs",
        "sagas de mangá",
        "melhores arcos de quadrinhos",
        "melhores sagas da marvel",
        "melhores sagas da dc",
        "clássicos dos quadrinhos",
        "arcos essenciais",
        "eventos marvel",
        "hq batman frank miller",
        "saga do infinito thános",
        "saga de cell dragon ball",
        "análise de hqs",
        "análise de mangás",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/hqs-mangas/arcos-classicos-sagas",
    },
    openGraph: {
        title: "Arcos Clássicos & Sagas — HQs e Mangás em Análise | LEXARA",
        description:
            "Análises de arcos essenciais e sagas clássicas em HQs e mangás: histórias que redefiniram personagens, mudaram universos e viraram referência no gênero.",
        url: "https://lexara.com.br/hqs-mangas/arcos-classicos-sagas",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://lexara.com.br/og/og-arcos-classicos-sagas.png",
                width: 1200,
                height: 630,
                alt: "Arcos Clássicos & Sagas — LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Arcos Clássicos & Sagas — HQs e Mangás em Análise | LEXARA",
        description:
            "Leituras e análises de arcos clássicos e sagas essenciais em HQs e mangás — impacto, contexto e legado.",
        images: ["https://lexara.com.br/og/og-arcos-classicos-sagas.png"],
    },
};

export default function ArcosClassicosSagasPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/hqs-mangas"
                    label="Voltar para HQs & Mangás"
                />
            }
        >
            <ArcosClassicosSagasCard />
        </CardLayout>
    );
}