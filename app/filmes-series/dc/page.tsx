import CardLayout from "@/components/layout/CardLayout";
import BatmanCard from "@/components/card/BatmanCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "DC Comics no Cinema | Análises e Leituras Narrativas — Lexara",
  },
  description:
    "Análises profundas e críticas narrativas sobre filmes e séries da DC Comics. Explore personagens como Batman e outros ícones que moldam o imaginário da cultura geek contemporânea.",
  keywords: [
    "DC Comics",
    "filmes da DC",
    "séries da DC",
    "Batman",
    "DC no cinema",
    "cultura geek",
    "análises de filmes",
    "críticas de séries",
    "universo DC",
  ],
  alternates: {
    canonical: "https://lexara.com.br/filmes-series/dc",
  },
  openGraph: {
    title: "DC no Cinema | Cultura Geek em Análise — Lexara",
    description:
      "Um hub editorial dedicado a análises e leituras narrativas sobre filmes e séries da DC Comics.",
    url: "https://lexara.com.br/filmes-series/dc",
    siteName: "Lexara",
    type: "website",
    images: [
      {
        url: "https://lexara.com.br/og/og-filmes-series-dc.png",
        width: 1200,
        height: 630,
        alt: "DC Comics no Cinema — Lexara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DC no Cinema | Cultura Geek em Análise — Lexara",
    description:
      "Análises e críticas sobre filmes e séries da DC Comics, com foco em personagens icônicos como Batman.",
    images: ["https://lexara.com.br/og/og-filmes-series-dc.png"],
  },
};

export default function FilmesSeriesDcPage() {
  return (
    <CardLayout>
      <BatmanCard />
    </CardLayout>
  );
}
