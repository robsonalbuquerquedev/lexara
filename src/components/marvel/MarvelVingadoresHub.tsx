import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Film, Shield } from "lucide-react";
import StrategicHubBlock from "@/components/strategic/StrategicHubBlock";
import UniverseFinalCTA from "@/components/strategic/UniverseFinalCTA";

type VingadoresHubItem = {
    title: string;
    description: string;
    href: string;
    image: string;
    badge: string;
    icon: React.ReactNode;
    status?: "Pronto" | "Em breve";
};

const MARVEL_VINGADORES: VingadoresHubItem[] = [
    {
        title: "Os Vingadores (2012)",
        description:
            "O momento em que heróis isolados se tornam uma equipe. O início do eixo que redefine o cinema blockbuster moderno.",
        href: "/filmes-series/marvel/vingadores-2012",
        image: "/images/featured/marvel/vingadores/vingadores-2012.png",
        badge: "Fase 1",
        icon: <Shield size={18} />,
        status: "Em breve",
    },
    {
        title: "Vingadores: Era de Ultron",
        description:
            "A primeira fratura interna. Tecnologia, responsabilidade e as consequências de brincar de deuses.",
        href: "/filmes-series/marvel/vingadores-era-de-ultron",
        image: "/images/featured/marvel/vingadores/era-de-ultron.png",
        badge: "Fase 2",
        icon: <Shield size={18} />,
        status: "Em breve",
    },
    {
        title: "Vingadores: Guerra Infinita",
        description:
            "O colapso da esperança. A saga atinge sua dimensão cósmica máxima com perdas irreversíveis.",
        href: "/filmes-series/marvel/vingadores-guerra-infinita",
        image: "/images/featured/marvel/vingadores/guerra-infinita.png",
        badge: "Fase 3",
        icon: <Sparkles size={18} />,
        status: "Em breve",
    },
    {
        title: "Vingadores: Ultimato",
        description:
            "Encerramento de ciclo. Sacrifício, legado e a conclusão emocional de uma construção de mais de uma década.",
        href: "/filmes-series/marvel/vingadores-end-game",
        image: "/images/featured/marvel/vingadores/ultimato.png",
        badge: "Conclusão da Saga",
        icon: <Sparkles size={18} />,
        status: "Em breve",
    },
    {
        title: "Vingadores: Doutor Destino",
        description:
            "O próximo grande ponto de ruptura. A promessa de uma nova era e um novo centro de gravidade para o universo.",
        href: "/filmes-series/marvel/vingadores-doutor-destino",
        image: "/images/featured/marvel/vingadores/doutor-destino.png",
        badge: "Nova Saga",
        icon: <Sparkles size={18} />,
        status: "Em breve",
    },
];

export default function MarvelVingadoresHub() {
    return (
        <section className="space-y-10">
            {/* Cabeçalho editorial */}
            <header className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-3xl">
                        <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1 text-xs font-semibold text-slate-200">
                            <Film size={14} />
                            Evento Central do Universo Marvel
                        </p>

                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-100 md:text-4xl">
                            Vingadores: O Eixo que Sustenta a Saga Marvel
                        </h1>

                        <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                            De 2012 até Ultimato, a união dos heróis redefiniu o cinema e conectou
                            jornadas individuais em uma única linha narrativa épica.
                            Aqui está o centro estrutural da saga.
                        </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
                        <Link
                            href="/filmes-series/marvel"
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/30 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                        >
                            Voltar para Universo Marvel <ArrowRight size={16} />
                        </Link>

                        <Link
                            href="/conteudos"
                            className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
                        >
                            Ver conteúdos do site <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

                {/* Mini-guia de navegação */}
                <div className="mt-6 grid gap-3 md:grid-cols-3">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
                        <p className="text-sm font-semibold text-slate-100">1) Entenda o ponto central</p>
                        <p className="mt-1 text-xs text-slate-300">
                            Cada filme dos Vingadores funciona como eixo estrutural que reorganiza todo o MCU.
                        </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
                        <p className="text-sm font-semibold text-slate-100">2) Observe as rupturas</p>
                        <p className="mt-1 text-xs text-slate-300">
                            Conflitos internos, decisões morais e perdas definem as mudanças de fase.
                        </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
                        <p className="text-sm font-semibold text-slate-100">3) Siga a linha épica</p>
                        <p className="mt-1 text-xs text-slate-300">
                            Use os artigos conectados para percorrer a saga como uma narrativa única.
                        </p>
                    </div>
                </div>
            </header>

            {/* Grid */}
            <div className="grid gap-6 md:grid-cols-2">
                {MARVEL_VINGADORES.map((item) => (
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
                eyebrow="Ápice Estrutural da Saga"
                title="O momento em que tudo colide"
                description="Após anos de construção narrativa, Guerra Infinita representa o ponto máximo de convergência, risco e ruptura do Universo Marvel."
                ctaLabel="Explorar Guerra Infinita"
                href="/filmes-series/marvel/vingadores-guerra-infinita"
                accentColor="indigo"
            />

            {/* CTA Final */}
            <UniverseFinalCTA
                title="Continue explorando o Universo Marvel"
                description="Aprofunde-se nos heróis centrais ou avance para o eixo que conecta toda a saga."
                buttons={[
                    {
                        label: "Ir para Os Vingadores (2012)",
                        href: "/filmes-series/marvel/vingadores-2012",
                        variant: "primary",
                    },
                    {
                        label: "Explorar Universo Marvel",
                        href: "/filmes-series/marvel",
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
