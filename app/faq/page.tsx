import type { Metadata } from "next";
import FAQContent from "@/components/FAQContent";

export const metadata: Metadata = {
    title: {
        absolute: "FAQ da LEXARA — Perguntas Frequentes, Privacidade e Termos",
    },
    description:
        "Tire dúvidas sobre a LEXARA: proposta editorial, organização dos conteúdos, uso de cookies e anúncios, privacidade, termos e como sugerir temas. Respostas claras para navegar com confiança.",
    keywords: [
        "LEXARA",
        "FAQ LEXARA",
        "perguntas frequentes",
        "cultura geek",
        "conteúdos LEXARA",
        "privacidade",
        "política de privacidade",
        "termos de uso",
        "cookies",
        "anúncios",
        "Google AdSense",
        "navegação do site",
        "sugerir temas",
        "contato LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/faq",
    },
    openGraph: {
        type: "website",
        url: "https://lexara.com.br/faq",
        title: "FAQ da LEXARA — Perguntas Frequentes",
        description:
            "Respostas objetivas sobre a LEXARA: conteúdos, navegação, privacidade, anúncios, termos e como enviar sugestões.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: "https://lexara.com.br/og/og-faq.png",
                width: 1200,
                height: 630,
                alt: "FAQ da LEXARA — Perguntas Frequentes",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "FAQ da LEXARA — Perguntas Frequentes",
        description:
            "Entenda como a LEXARA funciona: proposta, conteúdos, privacidade, anúncios e termos. Navegue com mais confiança.",
        images: ["https://lexara.com.br/og/og-faq.png"],
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
};

export default function FAQContentPage() {
    return <FAQContent />;
}
