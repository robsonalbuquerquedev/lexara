// data/articles/allArticles.ts
import { batmanArticles } from "@/data/dc/batman/batmanArticles";
import { supermanArticles } from "@/data/dc/superman/supermanArticles";
import { mulherMaravilhaArticles } from "@/data/dc/mulher-maravilha/mulherMaravilhaArticles";
import { homemDeFerroArticles } from "@/data/marvel/homem-de-ferro/homemDeFerroArticles";
import { capitaoAmericaArticles } from "@/data/marvel/capitao-america/capitaoAmericaArticles";
import { thorArticles } from "@/data/marvel/thor/thorArticles";

export type ArticleListItem = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    href: string;
    publishedAtISO?: string;
    ogImagePath?: string;
};

export const allArticles: ArticleListItem[] = [
    ...batmanArticles,
    ...supermanArticles,
    ...mulherMaravilhaArticles,
    ...homemDeFerroArticles,
    ...capitaoAmericaArticles,
    ...thorArticles,
];

export function getLatestArticles(limit = 8): ArticleListItem[] {
    return [...allArticles]
        .filter((a) => !!a.publishedAtISO)
        .sort((a, b) => {
            const ta = new Date(a.publishedAtISO!).getTime();
            const tb = new Date(b.publishedAtISO!).getTime();
            return tb - ta;
        })
        .slice(0, limit);
}
