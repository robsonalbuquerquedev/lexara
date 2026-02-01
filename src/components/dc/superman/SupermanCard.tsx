"use client";

import { Shield } from "lucide-react";
import CharacterHubSection from "@/components/hubs/CharacterHubSection";
import { supermanArticles } from "@/data/dc/superman/supermanArticles";

export default function SupermanCard() {
    return (
        <CharacterHubSection
            title="Superman"
            description="Análises narrativas e críticas sobre o Superman no cinema, explorando o simbolismo da esperança, os dilemas morais do herói e sua evolução nas diferentes fases da DC."
            icon={Shield}
            articles={supermanArticles}
            startHereHref="/filmes-series/dc/superman/superman-esperanca-cinema"
            defaultSort="newest"
        />
    );
}
