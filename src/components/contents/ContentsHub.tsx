"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Gem, Compass, ArrowRight } from "lucide-react";
import HomePillars from "@/components/HomePillars";

export default function ContentsHub() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            {/* HERO */}
            <motion.header
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <div className="flex justify-center mb-4">
                    <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
                        <Gem className="w-5 h-5 text-slate-100" />
                        <span className="text-sm text-slate-200">O ouro do LEXARA</span>
                    </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
                    Conteúdos do LEXARA
                </h1>

                <p className="mt-5 text-slate-300 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed">
                    Aqui está o coração do LEXARA: análises profundas, leituras narrativas, contexto histórico e
                    conexões que passam despercebidas no olhar apressado. Se você quer entender o &rdquo;porquê&rdquo; por trás
                    de filmes, séries, games e quadrinhos — este é o seu ponto de partida.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="#categorias"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 text-sm font-semibold shadow-xl shadow-indigo-600/25 transition-colors"
                    >
                        Explorar categorias
                        <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-100 px-6 py-3 text-sm font-semibold transition-colors"
                    >
                        Voltar para a home
                    </Link>
                </div>
            </motion.header>

            {/* COMO USAR */}
            <motion.section
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
            >
                <div className="flex items-center justify-center gap-2 mb-3">
                    <Compass className="w-5 h-5 text-slate-100" />
                    <h2 className="text-lg md:text-xl font-semibold text-slate-100">
                        Como navegar por aqui
                    </h2>
                </div>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-4xl mx-auto text-center">
                    Escolha uma categoria para mergulhar no tipo de conteúdo que você quer agora. Cada seção foi pensada
                    para te levar além do óbvio — com leitura crítica, referências e um mapa claro do que vale a pena explorar.
                    Se estiver indeciso, comece por <strong>Filmes & Séries</strong> ou <strong>Curiosidades</strong> e siga os links internos.
                </p>
            </motion.section>

            {/* CATEGORIAS (REUSO DOS CARDS) */}
            <section id="categorias" className="scroll-mt-24">
                <HomePillars />
            </section>
        </div>
    );
}
