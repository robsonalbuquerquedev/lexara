import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Film, Shield } from "lucide-react";
import StrategicHubBlock from "@/components/strategic/StrategicHubBlock";
import UniverseFinalCTA from "@/components/strategic/UniverseFinalCTA";

type JusticeLeagueHubItem = {
    title: string;
    description: string;
    href: string;
    image: string;
    badge: string;
    icon: React.ReactNode;
    status?: "Pronto" | "Em breve";
};

const DC_JUSTICELEAGUE: JusticeLeagueHubItem[] = [
    {
        title: "Liga da Justiça (2017)",
        description:
            "A primeira reunião oficial dos maiores heróis da DC nos cinemas. Um encontro marcado por tensões criativas e mudanças de direção.",
        href: "/filmes-series/dc/liga-da-justica-2017",
        image: "/images/featured/dc/justice-league/liga-da-justica-2017.png",
        badge: "Versão Cinematográfica",
        icon: <Shield size={18} />,
        status: "Em breve",
    },
    {
        title: "Liga da Justiça — Versão de Zack Snyder",
        description:
            "A visão expandida e autoral que redefiniu o tom épico da equipe, restaurando arcos, motivações e a escala mitológica da narrativa.",
        href: "/filmes-series/dc/liga-da-justica-versao-estendida",
        image: "/images/featured/dc/justice-league/liga-da-justica-snyder.png",
        badge: "Visão Expandida",
        icon: <Sparkles size={18} />,
        status: "Em breve",
    },
];

export default function DCJusticeLeagueHub() {
    return (
        <section className="space-y-10">
            {/* Cabeçalho editorial */}
            <header className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-3xl">
                        <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1 text-xs font-semibold text-slate-200">
                            <Film size={14} />
                            Evento Central do Universo DC
                        </p>

                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-100 md:text-4xl">
                            Liga da Justiça: O Encontro dos Maiores Heróis
                        </h1>

                        <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                            Da versão de 2017 à visão expandida de Zack Snyder,
                            a Liga da Justiça representa o ponto de convergência entre Batman, Superman e Mulher-Maravilha.
                            Aqui está o centro estrutural da narrativa DC nos cinemas.
                        </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
                        <Link
                            href="/filmes-series/dc"
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/30 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                        >
                            Voltar para Universo DC <ArrowRight size={16} />
                        </Link>

                        <Link
                            href="/conteudos"
                            className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
                        >
                            Ver conteúdos do site <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

                {/* Mini-guia */}
                <div className="mt-6 grid gap-3 md:grid-cols-3">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
                        <p className="text-sm font-semibold text-slate-100">1) Compare as versões</p>
                        <p className="mt-1 text-xs text-slate-300">
                            Entenda como decisões criativas alteraram ritmo, tom e construção dos personagens.
                        </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
                        <p className="text-sm font-semibold text-slate-100">2) Observe o eixo narrativo</p>
                        <p className="mt-1 text-xs text-slate-300">
                            A Liga é o ponto onde os heróis deixam de ser individuais e passam a funcionar como mitologia coletiva.
                        </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
                        <p className="text-sm font-semibold text-slate-100">3) Siga os desdobramentos</p>
                        <p className="mt-1 text-xs text-slate-300">
                            Use os artigos conectados para compreender as implicações futuras dentro do universo DC.
                        </p>
                    </div>
                </div>
            </header>

            {/* Grid */}
            <div className="grid gap-6 md:grid-cols-2">
                {DC_JUSTICELEAGUE.map((item) => (
                    <article
                        key={item.href}
                        className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/30 hover:bg-slate-950/45 transition-colors"
                    >
                        <Link href={item.href} className="block">
                            <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                                <Image
                                    src={item.image}
                                    alt={`${item.title} — seção no LEXARA`}
                                    fill
                                    className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

                                <div className="absolute left-4 top-4 flex items-center gap-2">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-200">
                                        {item.icon}
                                        {item.badge}
                                    </span>

                                    {item.status && (
                                        <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-amber-500/15 text-amber-200 border border-amber-500/20">
                                            {item.status}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-bold tracking-tight text-slate-100 md:text-2xl">
                                    {item.title}
                                </h2>

                                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                    {item.description}
                                </p>

                                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-100">
                                    Explorar seção <ArrowRight size={16} className="opacity-80" />
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>

            {/* Bloco Estratégico */}
            <StrategicHubBlock
                eyebrow="Versão de Estúdio vs Visão Autoral"
                title="Quando uma mesma história ganha duas identidades"
                description="Entre interferências de produção e a reconstrução criativa de Zack Snyder, Liga da Justiça se tornou um raro caso em que o embate entre estúdio e autor moldou duas experiências completamente distintas."
                ctaLabel="Comparar as Duas Versões"
                href="/filmes-series/dc/liga-da-justica-versao-estudio-vs-versao-autoral"
                accentColor="indigo"
            />

            {/* CTA Final */}
            <UniverseFinalCTA
                title="Continue explorando o Universo DC"
                description="Aprofunde-se nos heróis centrais ou avance para os grandes eventos que moldaram o universo cinematográfico."
                buttons={[
                    {
                        label: "Ir para Liga da Justiça",
                        href: "/filmes-series/dc/liga-da-justica-2017",
                        variant: "primary",
                    },
                    {
                        label: "Explorar Universo DC",
                        href: "/filmes-series/dc",
                        variant: "secondary",
                    },
                    {
                        label: "Voltar para Filmes & Séries",
                        href: "/filmes-series",
                        variant: "secondary",
                    },
                ]}
            />
        </section>
    );
}
