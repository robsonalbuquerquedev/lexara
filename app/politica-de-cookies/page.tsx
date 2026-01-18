import PoliticaDeCookies from "@/components/PoliticaDeCookies";

const canonicalUrl = "https://lexara.com.br/politica-de-cookies";
const ogImage = "https://lexara.com.br/og/og-politica-de-cookies.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Política de Cookies | LEXARA",
    },
    description:
        "Entenda como a LEXARA usa cookies e tecnologias similares para funcionamento do site, medição de desempenho e publicidade — incluindo anúncios não personalizados quando você recusa.",
    keywords: [
        "política de cookies",
        "cookies lexara",
        "privacidade",
        "consentimento",
        "google consent mode",
        "anúncios não personalizados",
        "adsense",
        "lgpd",
        "preferências de cookies",
    ],
    alternates: {
        canonical: canonicalUrl,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    openGraph: {
        type: "website",
        url: canonicalUrl,
        title: "Política de Cookies | LEXARA",
        description:
            "Saiba como a LEXARA utiliza cookies para funcionamento, métricas e publicidade — com opção de aceitar ou recusar e exibição de anúncios não personalizados quando aplicável.",
        siteName: "LEXARA",
        locale: "pt_BR",
        images: [
            {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: "LEXARA — Política de Cookies",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Política de Cookies | LEXARA",
        description:
            "Como a LEXARA usa cookies para funcionamento, medição e publicidade — com suporte a anúncios não personalizados em caso de recusa.",
        images: [ogImage],
    },
};
export default function PoliticaDeCookiesPage() {
    return (
        <PoliticaDeCookies />
    )
}