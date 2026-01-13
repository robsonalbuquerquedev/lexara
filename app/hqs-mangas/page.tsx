import type { Metadata } from "next";
import HqsMangasCard from "@/components/card/HqsMangasCard";

export const metadata: Metadata = {
  title: {
    absolute: "HQs & Mangás — Origens, Arcos e Narrativas | LEXARA",
  },
  description:
    "Estudos sobre HQs e mangás: origens, arcos clássicos, autores, continuidades e leituras narrativas que construíram grandes universos da cultura geek.",
  keywords: [
    "HQs",
    "quadrinhos",
    "mangás",
    "manga",
    "comic books",
    "análise de hqs",
    "análise de mangás",
    "arcos clássicos",
    "sagas",
    "origens dos quadrinhos",
    "história dos mangás",
    "autores",
    "estilos de desenho",
    "continuidades",
    "canon",
    "reboots",
    "narrativas",
    "simbolismos",
    "cultura geek",
    "LEXARA",
  ],
  alternates: {
    canonical: "https://lexara.com.br/hqs-mangas",
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
  openGraph: {
    title: "HQs & Mangás — Universos em Análise | LEXARA",
    description:
      "Origens, arcos clássicos, autores, continuidades e leituras profundas sobre quadrinhos e mangás.",
    url: "https://lexara.com.br/hqs-mangas",
    siteName: "LEXARA",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://lexara.com.br/og/og-hqs-mangas.png",
        width: 1200,
        height: 630,
        alt: "HQs & Mangás — Universos em Análise | LEXARA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HQs & Mangás — Universos em Análise | LEXARA",
    description:
      "Origens, arcos clássicos, autores, continuidades e leituras profundas sobre quadrinhos e mangás.",
    images: ["https://lexara.com.br/og/og-hqs-mangas.png"],
  },
};

export default function HqsMangasPage() {
  return <HqsMangasCard />;
}
