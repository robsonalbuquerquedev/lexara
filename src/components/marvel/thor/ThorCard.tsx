"use client";

import { Zap } from "lucide-react";
import CharacterHubSection from "@/components/hubs/CharacterHubSection";
import { thorArticles } from "@/data/marvel/thor/thorArticles";

export default function ThorCard() {
    return (
        <CharacterHubSection
            title="Thor"
            description="Do mito ao trauma: um deus que aprende limites humanos. Acompanhe a evolução entre destino, humor como máscara e a busca por sentido depois das perdas."
            icon={Zap}
            articles={thorArticles}
            startHereHref="/filmes-series/marvel/thor/thor-no-mcu-evolucao"
            defaultSort="newest"
        />
    );
}
