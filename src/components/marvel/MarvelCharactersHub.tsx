import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Film, Shield } from "lucide-react";

type CharacterHubItem = {
    title: string;
    description: string;
    href: string;
    image: string;
    badge: string;
    icon: React.ReactNode;
    status?: "Pronto" | "Em breve";
};

const MARVEL_CHARACTERS: CharacterHubItem[] = [
    {
        title: "Homem de Ferro",
        description:
            "A porta de entrada do MCU: carisma, tecnologia e o nascimento de uma era. Entenda como o tom do universo começa aqui — e como ele muda com o tempo.",
        href: "/filmes-series/marvel/homem-de-ferro",
        image: "/images/featured/marvel/homem-de-ferro/iron-man.png",
        badge: "Seção especial",
        icon: <Shield size={18} />,
        status: "Em breve",
    },
    {
        title: "Capitão América",
        description:
            "O símbolo em guerra com o próprio símbolo. Compare ideal, propaganda, culpa histórica e escolhas morais — do “soldado perfeito” ao líder fraturado.",
        href: "/filmes-series/marvel/capitao-america",
        image: "/images/featured/marvel/capitao-america/captain-america.png",
        badge: "Em Construção",
        icon: <Sparkles size={18} />,
        status: "Em breve",
    },
    {
        title: "Thor",
        description:
            "Mito, família e humor como ferramenta dramática. Veja como o personagem muda de registro (épico → trágico → cômico) sem perder o coração da jornada.",
        href: "/filmes-series/marvel/thor",
        image: "/images/featured/marvel/thor/thor.png",
        badge: "Em Construção",
        icon: <Sparkles size={18} />,
        status: "Em breve",
    },
];

export default function MarvelCharactersHub() {
    return (
        <section className="space-y-10">
            {/* Cabeçalho editorial */}
            <header className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-3xl">
                        <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1 text-xs font-semibold text-slate-200">
                            <Film size={14} />
                            Marvel no cinema
                        </p>

                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-100 md:text-4xl">
                            Personagens, fases e leituras editoriais
                        </h1>

                        <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                            Explore as seções da Marvel no LEXARA. Cada personagem reúne artigos e análises para entender
                            tom, direção, contexto de estúdio e o que muda de uma fase para outra no MCU.
                        </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
                        <Link
                            href="/filmes-series"
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/30 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                        >
                            Voltar para Filmes & Séries <ArrowRight size={16} />
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
                        <p className="text-sm font-semibold text-slate-100">1) Escolha um personagem</p>
                        <p className="mt-1 text-xs text-slate-300">
                            Entre pela seção dedicada para ter contexto, linha editorial e artigos relacionados.
                        </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
                        <p className="text-sm font-semibold text-slate-100">2) Leia por fases</p>
                        <p className="mt-1 text-xs text-slate-300">
                            Compare tom, direção e decisões criativas entre eras do MCU e seus “pontos de virada”.
                        </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
                        <p className="text-sm font-semibold text-slate-100">3) Continue pelo hub</p>
                        <p className="mt-1 text-xs text-slate-300">
                            Use os CTAs internos para seguir no LEXARA sem cair em rotas soltas.
                        </p>
                    </div>
                </div>
            </header>

            {/* Grid de personagens */}
            <div className="grid gap-6 md:grid-cols-2">
                {MARVEL_CHARACTERS.map((item) => (
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
                                    priority={item.href === "/filmes-series/marvel/homem-de-ferro"}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

                                <div className="absolute left-4 top-4 flex items-center gap-2">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-200">
                                        {item.icon}
                                        {item.badge}
                                    </span>

                                    {item.status && (
                                        <span
                                            className={[
                                                "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
                                                item.status === "Pronto"
                                                    ? "bg-emerald-500/15 text-emerald-200 border border-emerald-500/20"
                                                    : "bg-amber-500/15 text-amber-200 border border-amber-500/20",
                                            ].join(" ")}
                                        >
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

            {/* CTA final */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                <p className="text-sm font-semibold text-slate-100">Continue explorando</p>
                <p className="mt-2 text-sm text-slate-300">
                    A Marvel tem muitas portas de entrada. Comece por um personagem e siga pelos links internos para manter a
                    leitura fluida no LEXARA.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                        href="/filmes-series/marvel"
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
                    >
                        Ir para Marvel <ArrowRight size={16} />
                    </Link>

                    <Link
                        href="/filmes-series"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                    >
                        Voltar para Filmes & Séries <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
