"use client";

import { Cpu } from "lucide-react";
import CharacterHubSection from "@/components/hubs/CharacterHubSection";
import { homemDeFerroArticles } from "@/data/marvel/homem-de-ferro/homemDeFerroArticles";

export default function HomemDeFerroCard() {
    return (
        <CharacterHubSection
            title="Homem de Ferro"
            description="A porta de entrada do MCU: carisma, tecnologia e o começo de uma era. Entenda como o tom nasce aqui — e como ele muda com o tempo."
            icon={Cpu}
            articles={homemDeFerroArticles}
            startHereHref="/filmes-series/marvel/homem-de-ferro/2008-nascimento-mcu"
            defaultSort="newest"
        />
    );
}
