import MarvelCharactersHub from "@/components/marvel/MarvelCharactersHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Marvel no Cinema e nas Séries — Análises Profundas | LEXARA",
  },
  description:
    "Análises narrativas e críticas aprofundadas sobre filmes e séries da Marvel. Explore a evolução dos personagens, temas emocionais, impacto cultural e as transformações do MCU com um olhar crítico e editorial.",
  keywords: [
    "Marvel",
    "MCU",
    "filmes da Marvel",
    "séries da Marvel",
    "Thor Marvel",
    "análise Marvel",
    "crítica MCU",
    "universo cinematográfico Marvel",
    "cultura pop",
    "cinema de super-heróis",
  ],
  alternates: {
    canonical: "https://lexara.com.br/filmes-series/marvel",
  },
  openGraph: {
    title: "Marvel no Cinema e nas Séries — Análises Profundas | LEXARA",
    description:
      "Um espaço editorial dedicado a análises profundas sobre filmes e séries da Marvel. Personagens, narrativas, emoções e impacto cultural do MCU sob um olhar crítico.",
    url: "https://lexara.com.br/filmes-series/marvel",
    siteName: "LEXARA",
    type: "website",
    images: [
      {
        url: "https://lexara.com.br/og/og-filmes-series-marvel.png",
        width: 1200,
        height: 630,
        alt: "Marvel no Cinema e nas Séries — LEXARA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvel no Cinema e nas Séries — Análises Profundas | LEXARA",
    description:
      "Descubra análises críticas sobre filmes e séries da Marvel, explorando personagens, temas e o impacto cultural do MCU.",
    images: ["https://lexara.com.br/og/og-filmes-series-marvel.png"],
  },
};

export default function FilmesSeriesMarvelPage() {
  return (
    <MarvelCharactersHub />
  );
}
