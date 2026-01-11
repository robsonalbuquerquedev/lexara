"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeAboutCodex() {
    return (
        <section id="about-lexara" className="w-full py-24">
            <div className="max-w-4xl mx-auto px-4 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl md:text-4xl font-bold">
                        Por que o LEXARA existe?
                    </h2>

                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                        O LEXARA nasceu entre amigos que sempre gostaram de conversar
                        sobre filmes, séries, games e histórias sem rótulos ou disputas.
                        Aqui, o foco não é escolher lados, mas entender, analisar e
                        compartilhar o que torna o universo geek tão rico.
                    </p>

                    <p className="text-slate-400 text-sm md:text-base">
                        Pesquisamos, debatemos e escrevemos porque acreditamos que
                        cultura também se constrói com troca de ideias.
                    </p>

                    <div className="pt-4">
                        <Link
                            href="/sobre"
                            className="inline-block text-sm font-medium
                                       text-indigo-400 hover:text-indigo-300"
                        >
                            Conheça mais sobre o LEXARA →
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
