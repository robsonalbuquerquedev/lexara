"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutCodexHeroSplit() {
    return (
        <section className="w-full py-24">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Lado imagem */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-3 gap-4"
                >
                    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/about/emanuel.jpeg"
                            alt="Emanuel José, cofundador do CÓDEX"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/about/robson.png"
                            alt="Robson Albuquerque, cofundador do CÓDEX"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/about/celso.jpeg"
                            alt="Celso Lopes, cofundador do CÓDEX"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Lado texto */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {/* Título */}
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        A LEXARA nasceu de conversas reais entre amigos
                    </h1>

                    {/* Origem */}
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                        Antes de existir como site, a <strong>LEXARA</strong> foi conversa,
                        troca e curiosidade compartilhada. Surgiu em diálogos informais entre
                        amigos que sempre encontraram no universo geek um ponto de conexão —
                        um espaço onde filmes, séries, games e histórias eram debatidos sem
                        disputas, sem rótulos e com respeito genuíno pelas diferentes visões
                        que cada narrativa desperta.
                    </p>

                    {/* Propósito */}
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        Com o tempo, essas conversas pediram mais espaço. A LEXARA nasce
                        justamente dessa necessidade de transformar diálogo em registro,
                        opinião em reflexão e entusiasmo em conteúdo duradouro. Aqui,
                        revisitamos clássicos que marcaram gerações, acompanhamos lançamentos
                        com olhar crítico e buscamos entender por que certas histórias seguem
                        vivas dentro da gente, atravessando o tempo e conectando pessoas.
                    </p>

                    {/* Quem está por trás */}
                    <div className="pt-4 space-y-3 text-sm md:text-base text-slate-300">
                        <p>
                            <strong>Robson Albuquerque</strong> — Análise e Desenvolvimento de Sistemas
                        </p>
                        <p>
                            <strong>Emanuel José</strong> — Jornalismo
                        </p>
                        <p>
                            <strong>Celso Lopes</strong> — Engenharia da Computação
                        </p>
                    </div>

                    {/* Compromisso */}
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed pt-2">
                        A LEXARA não existe para entregar conteúdo apressado ou superficial.
                        Cada texto carrega ponto de vista, mas também pesquisa, contexto e
                        responsabilidade. Nosso compromisso é com a qualidade, com a
                        construção de conhecimento e com a valorização da cultura geek como
                        algo que vai além do entretenimento — ela é memória, identidade e
                        diálogo constante.
                    </p>

                    {/* Encerramento */}
                    <p className="text-slate-300 font-medium pt-2">
                        Este espaço nasceu entre amigos, cresceu com histórias e continua
                        aberto para todos que acreditam que bons universos são aqueles que
                        sabem acolher. A LEXARA é nossa. E agora, também é sua.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
