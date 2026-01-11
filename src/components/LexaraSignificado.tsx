"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles, Infinity } from "lucide-react";

export default function LexaraSignificado() {
    return (
        <section className="relative max-w-5xl mx-auto px-6 py-20 space-y-14">
            {/* Título */}
            <motion.header
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center space-y-6"
            >
                <div className="flex justify-center">
                    <BookOpen className="w-10 h-10 text-indigo-400" />
                </div>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                    O que é LEXARA?
                </h2>

                <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto">
                    Toda grande história começa com um nome. E toda palavra
                    carrega mais do que letras — carrega intenção, memória e
                    propósito.
                </p>
            </motion.header>

            {/* Conteúdo */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-8 text-slate-300 text-base md:text-lg leading-relaxed"
            >
                <p>
                    <strong>LEXARA</strong> não é apenas um nome criado para soar
                    moderno ou diferente. Ele nasce da ideia de{" "}
                    <em>lexicon</em>, linguagem e palavras, misturada ao conceito
                    de <em>arquivo</em>, lugar onde histórias são guardadas,
                    revisitadas e reinterpretadas. LEXARA representa o espaço
                    onde narrativas vivem além do tempo, livres de rótulos,
                    disputas ou hierarquias.
                </p>

                <p>
                    Em LEXARA, histórias não são descartáveis. Filmes, séries,
                    games, quadrinhos e universos inteiros não surgem apenas para
                    serem consumidos e esquecidos. Eles deixam marcas. Criam
                    memórias. Moldam conversas, amizades e até quem somos. Este
                    projeto nasce exatamente dessa percepção: de que o universo
                    geek é um vasto arquivo vivo, pulsando ideias, emoções e
                    significados.
                </p>

                <p>
                    O nome também carrega a noção de continuidade. Nada em
                    LEXARA começa ou termina de forma definitiva. Cada texto,
                    análise ou reflexão é apenas mais uma camada adicionada a um
                    universo compartilhado. Aqui, o passado conversa com o
                    presente, e o presente constrói o futuro, sempre iluminado
                    pela curiosidade e pelo respeito às histórias que nos
                    trouxeram até aqui.
                </p>

                <p>
                    LEXARA existe para quem ama explorar, revisitar e entender.
                    Para quem sabe que por trás de cada cena icônica, cada
                    personagem marcante e cada mundo fantástico, existe algo
                    maior: uma história que continua viva enquanto alguém ainda
                    se importa em contá-la.
                </p>
            </motion.div>

            {/* Encerramento */}
            <motion.footer
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="pt-10 border-t border-slate-800 space-y-6"
            >
                <div className="flex items-center gap-3 text-indigo-400">
                    <Infinity className="w-6 h-6" />
                    <Sparkles className="w-5 h-5" />
                </div>

                <p className="text-slate-400 text-sm md:text-base max-w-3xl">
                    Mais do que um site, LEXARA é um ponto de encontro. Um lugar
                    onde histórias não competem entre si — elas coexistem. Onde
                    cada leitor também faz parte do arquivo. Onde o universo geek
                    é infinito, diverso e profundamente humano.
                </p>
            </motion.footer>
        </section>
    );
}
