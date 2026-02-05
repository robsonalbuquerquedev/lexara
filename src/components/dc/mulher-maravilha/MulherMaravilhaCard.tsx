"use client";

import { Shield } from "lucide-react";
import CharacterHubSection from "@/components/hubs/CharacterHubSection";
import { mulherMaravilhaArticles } from "@/data/dc/mulher-maravilha/mulherMaravilhaArticles";

export default function MulherMaravilhaCard() {
    return (
        <CharacterHubSection
            title="Mulher-Maravilha"
            description="Análises narrativas e críticas sobre as diferentes fases da Mulher-Maravilha no cinema, do mito ao símbolo cultural — com curadoria para entender escolhas de tom, legado e futuro no DCU."
            icon={Shield}
            articles={mulherMaravilhaArticles}
            startHereHref="/filmes-series/dc/mulher-maravilha/mulher-maravilha-2017"
            defaultSort="newest"
        />
    );
}
