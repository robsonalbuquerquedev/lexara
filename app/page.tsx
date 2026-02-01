import MainHeroSplit from "@/components/hero/MainHeroSplit";
import HomePillars from "@/components/HomePillars";
import HomeLatestCarousel from "@/components/HomeLatestCarousel";
import HomeFeaturedContent from "@/components/HomeFeaturedContent";
import HomeAboutLexara from "@/components/HomeAboutLexara";
import HomeNewsletter from "@/components/HomeNewsletter";
import HomeCTASection from "@/components/HomeCTASection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "LEXARA — Cultura Geek Sem Rótulos",
  },

  description:
    "LEXARA é um espaço criado entre amigos para quem vive a cultura geek sem rótulos. Filmes, séries, games, HQs, mangás, histórias, origens e curiosidades analisados com paixão, pesquisa e troca de ideias.",

  keywords: [
    "lexara",
    "cultura geek",
    "filmes e séries",
    "games",
    "hqs",
    "mangás",
    "universo geek",
    "história geek",
    "curiosidades geek",
    "conteúdo geek",
  ],

  alternates: {
    canonical: "https://lexara.com.br/",
  },

  openGraph: {
    title: "LEXARA — Cultura Geek Sem Rótulos",
    description:
      "Um espaço para quem ama cultura geek sem disputas: filmes, séries, games, HQs, mangás e histórias analisados com critério, curiosidade e paixão.",
    url: "https://lexara.com.br/",
    siteName: "LEXARA",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://lexara.com.br/og/og-lexarahome.png",
        width: 1200,
        height: 630,
        alt: "LEXARA — Cultura Geek Sem Rótulos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LEXARA — Cultura Geek Sem Rótulos",
    description:
      "Filmes, séries, games, HQs e mangás analisados com paixão, pesquisa e troca de ideias.",
    images: ["https://lexara.com.br/og/og-lexarahome.png"],
  },
};

export default function Home() {
  return (
    <>
      <MainHeroSplit />
      <HomePillars />
      {/* 🔥 Últimos publicados */}
      <HomeLatestCarousel />
      {/* ⭐ Séries / Conteúdos em destaque */}
      <HomeFeaturedContent />
      <HomeAboutLexara />
      <HomeNewsletter />
      <HomeCTASection />
    </>
  );
}
