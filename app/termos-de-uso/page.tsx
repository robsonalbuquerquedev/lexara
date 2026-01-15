import type { Metadata } from "next";
import TermosDeUso from "@/components/TermosDeUso";

export const metadata: Metadata = {
    title: {
        absolute: "Termos de Uso — LEXARA",
    },
    description:
        "Leia os Termos de Uso da LEXARA e entenda as regras de navegação, direitos autorais, responsabilidades e uso do conteúdo editorial.",
    keywords: [
        "LEXARA",
        "termos de uso",
        "termos e condições",
        "direitos autorais",
        "uso de conteúdo",
        "responsabilidade",
        "cultura geek",
        "site editorial",
        "regras do site",
    ],
    alternates: {
        canonical: "https://lexara.com.br/termos-de-uso",
    },
    openGraph: {
        type: "website",
        url: "https://lexara.com.br/termos-de-uso",
        title: "Termos de Uso — LEXARA",
        description:
            "Conheça as regras de uso, direitos autorais e responsabilidades ao navegar pela LEXARA.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-termos-de-uso.png",
                width: 1200,
                height: 630,
                alt: "Termos de Uso da LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Termos de Uso — LEXARA",
        description:
            "Regras claras sobre uso do conteúdo, direitos autorais e navegação na LEXARA.",
        images: ["https://lexara.com.br/og/og-termos-de-uso.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermosDeUsoPage() {
    return <TermosDeUso />;
}
