// components/shared/ArticleUnderConstruction.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Construction, ArrowLeft, Sparkles } from "lucide-react";

import BackButton from "@/components/navigation/BackButton";
import SectionPillsNav from "@/components/navigation/SectionPillsNav";

type ArticleUnderConstructionProps = {
    title?: string;
    message?: string;
    fallbackHref?: string; // para onde voltar se não tiver histórico
};

export default function ArticleUnderConstruction({
    title = "Conteúdo em produção",
    message = "Este artigo ainda está sendo preparado com o padrão do LEXARA: pesquisa, contexto e uma leitura crítica que vai além da superfície. Em breve ele estará disponível por aqui.",
    fallbackHref = "/",
}: ArticleUnderConstructionProps) {
    return (
        <section className="w-full">
            <div className="mb-6">
                <BackButton fallbackHref={fallbackHref} label="Voltar" />
            </div>

            <div className="mb-8">
                <SectionPillsNav />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="
          rounded-3xl border border-slate-800 bg-slate-950/40
          p-8 shadow-xl shadow-indigo-900/10
        "
            >
                <div className="flex items-start gap-4">
                    <div
                        className="
              flex h-12 w-12 items-center justify-center
              rounded-2xl bg-indigo-600/20 border border-indigo-500/30
              text-indigo-200
            "
                    >
                        <Construction className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100">
                            {title}
                        </h1>

                        <p className="mt-3 text-slate-300 leading-relaxed max-w-3xl">
                            {message}
                        </p>

                        {/* <div className="mt-6 flex flex-wrap items-center gap-3">
                            <Link
                                href={fallbackHref}
                                className="
                  inline-flex items-center gap-2 rounded-full
                  bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white
                  shadow-lg shadow-indigo-600/20 transition
                  hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70
                "
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Voltar para a seção
                            </Link>

                            <Link
                                href="/"
                                className="
                  inline-flex items-center gap-2 rounded-full
                  border border-slate-700 bg-slate-950/30 px-5 py-2.5
                  text-sm font-semibold text-slate-200 transition
                  hover:bg-slate-900/50 hover:border-slate-500
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70
                "
                            >
                                <Sparkles className="w-4 h-4" />
                                Ir para o início
                            </Link>
                        </div> */}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
