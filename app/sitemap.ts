import { MetadataRoute } from "next";
import { allArticles } from "@/data/articles/allArticles";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://lexara.com.br";

    // Páginas institucionais
    const staticRoutes = [
        "",
        "sobre",
        "faq",
        "conteudos",
        "galeria",
        "contato",
        "termos-de-uso",
        "politica-de-privacidade",
    ];

    // Páginas de seções e módulos
    const moduleRoutes = [
        "filmes-series",
        "games",
        "hqs-mangas",
        "historia-origem",
        "curiosidades",

        "filmes-series/marvel",
        "filmes-series/dc",
        "filmes-series/live-action",
        "filmes-series/animacoes",
        "filmes-series/narrativas",

        "games/narrativa-mundo",
        "games/mecanicas-design",
        "games/indies-autorais",
        "games/multiplayer-competitivo",
        "games/retro-classicos",

        "hqs-mangas/origens-historia",
        "hqs-mangas/arcos-classicos-sagas",
        "hqs-mangas/autores-estilos",
        "hqs-mangas/universos-continuidades",
        "hqs-mangas/narrativas-simbolismos",

        "historia-origem/linha-do-tempo-movimentos",
        "historia-origem/bastidores-producao",
        "historia-origem/influencias-referencias",
        "historia-origem/evolucao-criativa",
        "historia-origem/impacto-cultural-legado",

        "curiosidades/easter-eggs-referencias",
        "curiosidades/conexoes-entre-universos",
        "curiosidades/bastidores-curiosos",
        "curiosidades/detalhes-canonicos-retcons",
        "curiosidades/numeros-recordes-impacto",
    ];

    // ✅ Artigos dinâmicos via data layer (+ imagens)
    const articleRoutes: MetadataRoute.Sitemap = allArticles
        .filter((a) => !!a.href)
        .map((a) => {
            const url = a.href.startsWith("http")
                ? a.href
                : `${baseUrl}${a.href.startsWith("/") ? "" : "/"}${a.href}`;

            const lastModified = a.publishedAtISO ? new Date(a.publishedAtISO) : new Date();

            // ✅ image sitemap: Next espera string[]
            const images = a.ogImagePath
                ? [`${baseUrl}${a.ogImagePath.startsWith("/") ? "" : "/"}${a.ogImagePath}`]
                : undefined;

            return {
                url,
                lastModified,
                changeFrequency: "monthly" as const,
                priority: 0.6,
                images,
            };
        });


    // ✅ Remove duplicadas (caso algum href bata com moduleRoutes no futuro)
    const dedupeByUrl = (items: MetadataRoute.Sitemap) => {
        const seen = new Set<string>();
        return items.filter((item) => {
            if (seen.has(item.url)) return false;
            seen.add(item.url);
            return true;
        });
    };

    const staticMapped: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${baseUrl}/${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1.0 : 0.8,
    }));

    const moduleMapped: MetadataRoute.Sitemap = moduleRoutes.map((route) => ({
        url: `${baseUrl}/${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return dedupeByUrl([...staticMapped, ...moduleMapped, ...articleRoutes]);
}
