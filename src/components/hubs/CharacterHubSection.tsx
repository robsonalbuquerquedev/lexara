"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type SortMode = "newest" | "oldest";

export type HubArticle = {
    id: number | string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    href: string;
    publishedAtISO?: string;
};

export type CharacterHubSectionProps = {
    title: string;
    description: string;
    icon?: LucideIcon;
    articles: HubArticle[];

    // opcional: se você quiser “começar por aqui” fixo e não pelo mais antigo
    startHereHref?: string;

    // opcional: define a ordenação inicial
    defaultSort?: SortMode;

    // opcional: esconder botão de ordenação
    showSortToggle?: boolean;

    // opcional: limitar quantidade no hub
    limit?: number;
};

function isPublishedNow(publishedAtISO?: string) {
    if (!publishedAtISO) return true;
    return Date.now() >= Date.parse(publishedAtISO);
}

function getTime(iso?: string) {
    if (!iso) return 0;
    const t = Date.parse(iso);
    return Number.isFinite(t) ? t : 0;
}

export default function CharacterHubSection({
    title,
    description,
    icon: Icon,
    articles,
    startHereHref,
    defaultSort = "newest",
    showSortToggle = true,
    limit,
}: CharacterHubSectionProps) {
    const [sortMode, setSortMode] = useState<SortMode>(defaultSort);

    const published = useMemo(() => {
        const base = articles
            .filter((a) => !!a.href)
            .filter((a) => isPublishedNow(a.publishedAtISO))
            .map((a) => ({ ...a, publishedTime: getTime(a.publishedAtISO) }));

        return limit ? base.slice(0, Math.max(limit, 0)) : base;
    }, [articles, limit]);

    const { startHere, list } = useMemo(() => {
        const oldestFirst = [...published].sort((a, b) => a.publishedTime - b.publishedTime);
        const newestFirst = [...published].sort((a, b) => b.publishedTime - a.publishedTime);

        const start =
            (startHereHref && published.find((a) => a.href === startHereHref)) ||
            oldestFirst[0] ||
            null;

        const ordered = sortMode === "oldest" ? oldestFirst : newestFirst;

        return { startHere: start, list: ordered };
    }, [published, sortMode, startHereHref]);

    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    {Icon ? <Icon className="w-6 h-6 text-primary" /> : null}
                    <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
                </div>

                <p className="text-muted-foreground max-w-3xl">{description}</p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                    {startHere ? (
                        <Link
                            href={startHere.href}
                            className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
                        >
                            Começar por aqui →
                        </Link>
                    ) : null}

                    {showSortToggle ? (
                        <button
                            type="button"
                            onClick={() => setSortMode((s) => (s === "newest" ? "oldest" : "newest"))}
                            className="inline-flex items-center rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold hover:bg-muted/40 cursor-pointer"
                        >
                            Ordem: {sortMode === "newest" ? "Mais recentes" : "Do começo ao fim"}
                        </button>
                    ) : null}

                    <span className="text-xs text-muted-foreground">{list.length} artigos publicados</span>
                </div>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((article) => (
                    <Link
                        key={String(article.id)}
                        href={article.href}
                        className="group rounded-2xl overflow-hidden border border-border transition-all hover:shadow-lg hover:-translate-y-1"
                    >
                        <article className="flex flex-col h-full">
                            <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                                <Image src={article.image} alt={article.title} fill className="object-contain" />
                            </div>

                            <div className="flex flex-col flex-1 p-5">
                                <div className="flex items-center justify-between gap-3 mb-2">
                                    <span className="text-xs uppercase tracking-wide text-muted-foreground">
                                        {article.category}
                                    </span>

                                    {article.publishedAtISO ? (
                                        <time className="text-xs text-muted-foreground">
                                            {new Date(article.publishedAtISO).toLocaleDateString("pt-BR")}
                                        </time>
                                    ) : null}
                                </div>

                                <h2 className="text-lg font-semibold leading-snug mb-2">{article.title}</h2>

                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    {article.excerpt}
                                </p>

                                <span className="mt-auto text-sm font-medium text-primary group-hover:underline">
                                    Ler análise →
                                </span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}
