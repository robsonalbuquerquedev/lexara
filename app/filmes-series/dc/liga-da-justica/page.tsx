import DcJusticeLeagueHub from "@/components/dc/DcJusticeLeagueHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Liga da Justiça: Versão de Estúdio vs Visão de Zack Snyder | Lexara",
  },
  description:
    "Explore o hub definitivo da Liga da Justiça no Lexara. Análises, comparativos e bastidores da versão de 2017 e da visão autoral de Zack Snyder, entendendo como o mesmo encontro de heróis resultou em dois filmes radicalmente diferentes.",
  keywords: [
    "Liga da Justiça",
    "Justice League 2017",
    "Zack Snyder's Justice League",
    "Snyder Cut",
    "DCEU",
    "Liga da Justiça versão estendida",
    "Liga da Justiça comparação",
    "filmes DC",
    "universo DC no cinema",
  ],
  alternates: {
    canonical: "https://lexara.com.br/filmes-series/dc/liga-da-justica",
  },
  openGraph: {
    title:
      "Liga da Justiça: Versão de Estúdio vs Visão de Zack Snyder | Lexara",
    description:
      "Um mergulho completo nas duas versões de Liga da Justiça — da edição de estúdio de 2017 à versão autoral de Zack Snyder — analisando diferenças narrativas, tom, personagens e impacto no universo DC.",
    url: "https://lexara.com.br/filmes-series/dc/liga-da-justica",
    siteName: "Lexara",
    type: "website",
    images: [
      {
        url: "https://lexara.com.br/og/justice-league/og-liga-da-justica.png",
        width: 1200,
        height: 630,
        alt: "Liga da Justiça — Versão de Estúdio e Zack Snyder | Lexara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Liga da Justiça: Versão de Estúdio vs Visão de Zack Snyder | Lexara",
    description:
      "Descubra as diferenças entre a versão de 2017 e o Snyder Cut em um hub completo com análises e comparativos.",
    images: [
      "https://lexara.com.br/og/justice-league/og-liga-da-justica.png",
    ],
  },
};

export default function DcJusticeLeagueHubPage() {
  return (
    <DcJusticeLeagueHub />
  );
}
