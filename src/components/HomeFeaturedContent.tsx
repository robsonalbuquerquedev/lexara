"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { featuredContent } from "@/data/featuredContent";

export default function HomeFeaturedContent() {
    return (
        <section className="w-full py-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* Cabeçalho da seção */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-4xl font-bold">Séries editoriais em destaque</h2>
                    <p className="text-slate-400 mt-4 text-sm md:text-base max-w-3xl mx-auto">
                        Portas de entrada editoriais para maratonar no LEXARA: cada seção reúne contexto,
                        ordem de leitura e artigos conectados por tema.
                    </p>
                </motion.div>

                {/* Grid de cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredContent.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="rounded-2xl overflow-hidden
                         border border-slate-800
                         bg-slate-900/40 backdrop-blur
                         hover:border-indigo-500/40
                         transition-colors"
                        >
                            {/* Imagem */}
                            <Link href={item.href} className="block">
                                <div className="relative h-48 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                                    <Image src={item.image} alt={item.title} fill className="object-contain" />
                                </div>
                            </Link>

                            {/* Conteúdo */}
                            <div className="p-6 space-y-4">
                                <span className="text-xs uppercase tracking-wide text-indigo-400">
                                    {item.category}
                                </span>

                                <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>

                                <p className="text-slate-400 text-sm leading-relaxed">{item.excerpt}</p>

                                <Link
                                    href={item.href}
                                    className="inline-block text-sm font-medium text-indigo-400 hover:text-indigo-300"
                                >
                                    Explorar seção →
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
