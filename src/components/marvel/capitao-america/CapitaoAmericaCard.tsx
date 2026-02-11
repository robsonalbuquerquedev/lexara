"use client";

import { Shield } from "lucide-react";
import CharacterHubSection from "@/components/hubs/CharacterHubSection";
import { capitaoAmericaArticles } from "@/data/marvel/capitao-america/capitaoAmericaArticles";

export default function CapitaoAmericaCard() {
    return (
        <CharacterHubSection
            title="Capitão América"
            description="O símbolo em guerra com o próprio símbolo. Compare ideal, propaganda, culpa histórica e escolhas morais — do “soldado perfeito” ao líder fraturado."
            icon={Shield}
            articles={capitaoAmericaArticles}
            startHereHref="/filmes-series/marvel/capitao-america/o-primeiro-vingador-simbolo"
            defaultSort="newest"
        />
    );
}
