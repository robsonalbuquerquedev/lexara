"use client";

import { motion } from "framer-motion";
import { FileText, ShieldCheck, Copyright, ExternalLink, AlertTriangle, Mail, } from "lucide-react";

function getFormattedDate() {
    return new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

export default function TermosDeUso() {
    const lastUpdate = getFormattedDate();

    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/20 border border-indigo-500/30">
                        <FileText className="h-6 w-6 text-indigo-400" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-slate-100">
                        Termos de Uso
                    </h1>
                </div>

                <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
                    Estes Termos de Uso explicam as regras básicas para navegação e utilização
                    da LEXARA. A ideia é ser claro: o que você pode fazer, o que evitar e como
                    o conteúdo é tratado.
                </p>

                <p className="mt-3 text-xs text-slate-400">
                    Última atualização: <strong>{lastUpdate}</strong>
                </p>
            </motion.header>

            {/* Conteúdo */}
            <section className="space-y-12 text-slate-200 leading-relaxed text-sm md:text-base">
                {/* Aceitação */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <ShieldCheck className="h-5 w-5 text-indigo-400" />
                        Aceitação dos termos
                    </h2>

                    <p>
                        Ao acessar e utilizar a LEXARA, você concorda com estes Termos de Uso.
                        Se você não concordar com algum ponto, a recomendação é não utilizar o site.
                    </p>
                </section>

                {/* Finalidade */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <FileText className="h-5 w-5 text-indigo-400" />
                        Finalidade do site
                    </h2>

                    <p>
                        A LEXARA é um projeto editorial voltado para cultura geek, com conteúdo
                        organizado para leitura, pesquisa e navegação. O objetivo é informar,
                        contextualizar e entreter — sem prometer resultados específicos e sem
                        substituir fontes oficiais quando o assunto exige precisão institucional.
                    </p>
                </section>

                {/* Conteúdo e responsabilidade */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <AlertTriangle className="h-5 w-5 text-indigo-400" />
                        Conteúdo e limitações de responsabilidade
                    </h2>

                    <p>
                        A LEXARA busca manter os conteúdos corretos e atualizados, mas pode haver
                        mudanças com o tempo (datas, elencos, versões, eventos e detalhes de obras).
                        Por isso, o conteúdo deve ser entendido como material editorial.
                    </p>

                    <p className="mt-3">
                        A LEXARA não se responsabiliza por decisões tomadas com base no conteúdo do site,
                        nem por eventuais danos decorrentes do uso das informações apresentadas.
                    </p>
                </section>

                {/* Direitos autorais */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <Copyright className="h-5 w-5 text-indigo-400" />
                        Direitos autorais e uso do conteúdo
                    </h2>

                    <p>
                        Textos, estrutura editorial, organização e identidade visual da LEXARA são
                        protegidos por direitos autorais. Você pode compartilhar links para páginas
                        do site livremente.
                    </p>

                    <p className="mt-3">
                        Não é permitido copiar e republicar textos integralmente sem autorização.
                        Trechos curtos podem ser citados, desde que com crédito claro e link para a página original.
                    </p>
                </section>

                {/* Comentários e contato */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <Mail className="h-5 w-5 text-indigo-400" />
                        Contato, sugestões e correções
                    </h2>

                    <p>
                        Se você encontrou algo que precisa de ajuste (informação, ortografia, contexto)
                        ou quer sugerir um tema, você pode entrar em contato pela rota de contato do site.
                        Feedback específico ajuda muito a melhorar a experiência.
                    </p>
                </section>

                {/* Links externos */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <ExternalLink className="h-5 w-5 text-indigo-400" />
                        Links externos
                    </h2>

                    <p>
                        A LEXARA pode incluir links para sites de terceiros (fontes, referências,
                        plataformas e páginas externas). A navegação nesses sites segue as regras
                        e políticas das próprias plataformas.
                    </p>
                </section>

                {/* Alterações */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <ShieldCheck className="h-5 w-5 text-indigo-400" />
                        Alterações destes termos
                    </h2>

                    <p>
                        Estes Termos de Uso podem ser atualizados a qualquer momento para refletir
                        mudanças na estrutura do site, em ferramentas utilizadas ou em necessidades legais.
                    </p>

                    <p className="mt-3">
                        Sempre que houver atualização, a data no topo desta página será ajustada
                        automaticamente.
                    </p>
                </section>
            </section>
        </div>
    );
}
