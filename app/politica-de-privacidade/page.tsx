import type { Metadata } from "next";
import PoliticaDePrivacidade from "@/components/PoliticaDePrivacidade";

export const metadata: Metadata = {
    title: {
        absolute: "Política de Privacidade — LEXARA",
    },
    description:
        "Entenda como a LEXARA lida com dados, cookies, anúncios e navegação. Política de Privacidade clara, transparente e alinhada às boas práticas da web.",
    keywords: [
        "LEXARA",
        "política de privacidade",
        "privacidade",
        "cookies",
        "dados",
        "anúncios",
        "Google AdSense",
        "transparência",
        "LGPD",
        "uso de dados",
        "cultura geek",
    ],
    alternates: {
        canonical: "https://lexara.com.br/politica-de-privacidade",
    },
    openGraph: {
        type: "website",
        url: "https://lexara.com.br/politica-de-privacidade",
        title: "Política de Privacidade — LEXARA",
        description:
            "Veja como a LEXARA trata dados, cookies e anúncios com transparência e respeito ao usuário.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-politica-de-privacidade.png",
                width: 1200,
                height: 630,
                alt: "Política de Privacidade da LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Política de Privacidade — LEXARA",
        description:
            "Saiba como a LEXARA lida com dados, cookies e anúncios de forma clara e responsável.",
        images: ["https://lexara.com.br/og/og-politica-de-privacidade.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PoliticaDePrivacidadePage() {
    return <PoliticaDePrivacidade />;
}
