"use client";

import { Shield } from "lucide-react";
import CharacterHubSection from "@/components/hubs/CharacterHubSection";
import { batmanArticles } from "@/data/dc/batman/batmanArticles";

export default function BatmanCard() {
    return (
        <CharacterHubSection
            title="Batman"
            description="Análises narrativas e críticas sobre as diferentes versões do Batman no cinema, explorando suas transformações, conflitos e o impacto cultural do personagem ao longo das décadas."
            icon={Shield}
            articles={batmanArticles}
            startHereHref="/filmes-series/dc/batman/batman-evolucao"
            defaultSort="newest"
        />
    );
}
