import MarvelVingadoresHub from "@/components/marvel/MarvelVingadoresHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Vingadores: O Eixo Central da Saga Marvel | LEXARA",
  },
  description:
    "Do primeiro encontro em 2012 até o encerramento épico em Ultimato, os Vingadores sustentam a espinha dorsal narrativa do Universo Marvel. Explore o hub completo da saga.",
  keywords: [
    "Vingadores",
    "Saga Marvel",
    "MCU linha do tempo",
    "Vingadores Guerra Infinita análise",
    "Vingadores Ultimato significado",
    "Hub Vingadores LEXARA",
    "Universo Cinematográfico Marvel",
  ],
  alternates: {
    canonical: "https://lexara.com.br/filmes-series/marvel/vingadores",
  },
  openGraph: {
    title: "Vingadores: O Eixo Central da Saga Marvel | LEXARA",
    description:
      "A união dos heróis redefiniu o cinema e conectou jornadas individuais em uma narrativa épica que culmina nos maiores eventos do MCU.",
    url: "https://lexara.com.br/filmes-series/marvel/vingadores",
    siteName: "LEXARA",
    type: "website",
    images: [
      {
        url: "https://lexara.com.br/og/vingadores/og-vingadores.png",
        width: 1200,
        height: 630,
        alt: "Vingadores — Hub Completo da Saga Marvel no LEXARA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vingadores: O Eixo Central da Saga Marvel | LEXARA",
    description:
      "Do início em 2012 ao ápice em Guerra Infinita e Ultimato, explore o núcleo narrativo que sustenta toda a Saga Marvel.",
    images: ["https://lexara.com.br/og/vingadores/og-vingadores.png"],
  },
};

export default function MarvelVingadoresHubPage() {
  return (
    <MarvelVingadoresHub />
  );
}
