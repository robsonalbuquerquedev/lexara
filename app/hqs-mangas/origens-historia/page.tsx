import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import OrigensHistoriaCard from "@/components/card/OrigensHistoriaCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "Origens & História de HQs e Mangás | Panorama, marcos e evolução | LEXARA",
    },
    description:
        "Panorama histórico das HQs e dos mangás: movimentos, marcos e como cada era moldou a linguagem dos quadrinhos. Das tiras de jornal ao mangá moderno — contexto, cultura e legado.",
    keywords: [
        "origem das HQs",
        "história dos quadrinhos",
        "história do mangá",
        "origem do mangá",
        "quadrinhos nos jornais",
        "super-heróis origem",
        "cultura pop",
        "cultura geek",
        "diferença entre HQ e mangá",
        "linguagem dos quadrinhos",
        "evolução dos quadrinhos",
        "movimentos dos quadrinhos",
        "mangá pós-guerra",
        "história da arte sequencial",
        "LEXARA",
        "HQs & Mangás",
    ],
    alternates: {
        canonical: "https://lexara.com.br/hqs-mangas/origens-historia",
    },
    openGraph: {
        type: "website",
        url: "https://lexara.com.br/hqs-mangas/origens-historia",
        title: "Origens & História | HQs e Mangás | LEXARA",
        description:
            "Entenda como HQs e mangás nasceram, evoluíram e moldaram a linguagem dos quadrinhos — com marcos, movimentos e contexto cultural.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/images/og/og-origens-historia.png",
                width: 1200,
                height: 630,
                alt: "Origens & História — HQs e Mangás | LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Origens & História | HQs e Mangás | LEXARA",
        description:
            "Dos jornais ao mangá moderno: marcos, movimentos e a evolução da linguagem dos quadrinhos.",
        images: ["https://lexara.com.br/images/og/og-origens-historia.png"],
    },
};

export default function OrigensHistoriaPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/hqs-mangas"
                    label="Voltar para HQs & Mangás"
                />
            }
        >
            <OrigensHistoriaCard />
        </CardLayout>
    );
}