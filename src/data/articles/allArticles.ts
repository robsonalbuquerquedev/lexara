// data/articles/allArticles.ts
import { batmanArticles } from "@/data/dc/batman/batmanArticles";
import { supermanArticles } from "@/data/dc/superman/supermanArticles";

export type ArticleListItem = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    href: string;
    publishedAtISO?: string;
};

export const allArticles: ArticleListItem[] = [
    ...batmanArticles,
    ...supermanArticles,
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
