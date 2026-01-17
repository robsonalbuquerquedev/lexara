import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";

import { detalhesCanonicosRetconsArticles } from "@/data/detalhesCanonicosRetconsArticles";

export default function DetalhesCanonicosRetconsCard() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            {/* Header */}
            <header className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold tracking-tight">
                        Detalhes Canônicos & Retcons
                    </h2>
                </div>

                <p className="text-muted-foreground max-w-3xl">
                    O que virou cânone oficial, o que foi retcon e como
                    contradições, mudanças de lore e ajustes de continuidade
                    foram explicados — ou simplesmente ignorados com estilo.
                    Uma análise sobre como universos sobrevivem ao próprio passado.
                </p>
            </header>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {detalhesCanonicosRetconsArticles.map((article) => (
                    <Link
                        key={article.id}
                        href={article.href}
                        className="group rounded-2xl overflow-hidden border border-border transition-all hover:shadow-lg hover:-translate-y-1"
                    >
                        <article className="flex flex-col h-full">
                            <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex flex-col flex-1 p-5">
                                <span className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                                    {article.category}
                                </span>

                                <h3 className="text-lg font-semibold leading-snug mb-2">
                                    {article.title}
                                </h3>

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
