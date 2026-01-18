"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Cookie,
    ShieldCheck,
    Sliders,
    Globe,
    ExternalLink,
    BarChart3,
    BadgeCheck,
    Mail,
} from "lucide-react";

function getFormattedDate() {
    return new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

export default function PoliticaDeCookies() {
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
                        <Cookie className="h-6 w-6 text-indigo-400" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-slate-100">
                        Política de Cookies
                    </h1>
                </div>

                <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
                    Esta página explica como a LEXARA usa cookies e tecnologias similares
                    para manter o site funcionando, medir desempenho e exibir publicidade.
                    Você pode aceitar ou recusar — e ainda assim continuar navegando.
                </p>

                <p className="mt-3 text-xs text-slate-400">
                    Última atualização: <strong>{lastUpdate}</strong>
                </p>
            </motion.header>

            {/* Conteúdo */}
            <section className="space-y-12 text-slate-200 leading-relaxed text-sm md:text-base">
                {/* O que são cookies */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <Cookie className="h-5 w-5 text-indigo-400" />
                        O que são cookies?
                    </h2>

                    <p>
                        Cookies são pequenos arquivos salvos no seu navegador que ajudam um site
                        a lembrar preferências, entender como as páginas são usadas e oferecer
                        funcionalidades com mais estabilidade.
                    </p>

                    <p className="mt-3 text-slate-300">
                        Eles não são &quot;vírus&quot; e não executam ações no seu computador. Em geral,
                        servem para melhorar a experiência e dar suporte a métricas e publicidade.
                    </p>
                </section>

                {/* Como a LEXARA usa */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <Sliders className="h-5 w-5 text-indigo-400" />
                        Como a LEXARA usa cookies
                    </h2>

                    <p>Os cookies podem ser utilizados para:</p>

                    <ul className="list-disc list-inside mt-3 space-y-2 text-slate-300">
                        <li>Manter o funcionamento técnico do site (segurança e estabilidade)</li>
                        <li>Entender desempenho e navegação (estatísticas e melhoria contínua)</li>
                        <li>Exibir publicidade, inclusive em modo não personalizado</li>
                    </ul>

                    <p className="mt-3">
                        A LEXARA busca ser transparente e permitir que você controle suas escolhas
                        com clareza.
                    </p>
                </section>

                {/* Categorias */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <BadgeCheck className="h-5 w-5 text-indigo-400" />
                        Tipos de cookies que podem existir aqui
                    </h2>

                    <div className="space-y-4">
                        <div className="rounded-2xl border border-white/10 bg-slate-900/30 p-4">
                            <p className="font-semibold text-slate-100">1) Necessários</p>
                            <p className="mt-1 text-slate-300">
                                São os cookies essenciais para o site funcionar corretamente. Sem eles,
                                recursos básicos podem falhar.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-900/30 p-4">
                            <p className="font-semibold text-slate-100">2) Desempenho / Medição</p>
                            <p className="mt-1 text-slate-300">
                                Ajudam a entender páginas mais acessadas, tempo de permanência e melhorias
                                de navegação. Quando você recusa, a LEXARA pode limitar ou desativar esse uso,
                                dependendo da configuração de consentimento.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-900/30 p-4">
                            <p className="font-semibold text-slate-100">3) Publicidade</p>
                            <p className="mt-1 text-slate-300">
                                Podem ser usados para exibir anúncios. Se você recusar, a LEXARA ainda pode
                                exibir <span className="font-medium">anúncios não personalizados</span>{" "}
                                (ou &quot;limitados&quot;), com coleta reduzida, respeitando sua escolha.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Consent Mode / escolha do usuário */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <ShieldCheck className="h-5 w-5 text-indigo-400" />
                        Consentimento e anúncios não personalizados
                    </h2>

                    <p>
                        A LEXARA pode utilizar o Google Consent Mode para aplicar sua decisão de forma coerente.
                        Isso ajuda a ajustar o comportamento de medição e publicidade conforme você escolhe:
                    </p>

                    <ul className="list-disc list-inside mt-3 space-y-2 text-slate-300">
                        <li>
                            <span className="font-semibold text-slate-100">Aceitar</span>: permite medição e personalização,
                            quando aplicável.
                        </li>
                        <li>
                            <span className="font-semibold text-slate-100">Recusar</span>: reduz/limita a coleta e pode manter
                            anúncios em modo não personalizado.
                        </li>
                    </ul>

                    <p className="mt-3">
                        Importante: &quot;não personalizado&quot; significa que o anúncio não usa seus dados pessoais
                        para tentar adivinhar interesses. Ele pode se basear em contexto (página atual, tema, idioma
                        e informações gerais do dispositivo).
                    </p>
                </section>

                {/* Ferramentas comuns (Analytics/Ads) */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <BarChart3 className="h-5 w-5 text-indigo-400" />
                        Ferramentas e terceiros
                    </h2>

                    <p>
                        A LEXARA pode integrar ferramentas de terceiros para medição e publicidade (como Google Analytics e
                        Google AdSense). Esses serviços podem usar cookies ou identificadores similares.
                    </p>

                    <p className="mt-3">
                        Para entender como o Google trata dados em sites parceiros, consulte:
                        {" "}
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-indigo-300 underline underline-offset-4"
                        >
                            Política de Privacidade do Google
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    </p>

                    <p className="mt-3">
                        E também:
                        {" "}
                        <a
                            href="https://policies.google.com/technologies/cookies"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-indigo-300 underline underline-offset-4"
                        >
                            Como o Google usa cookies
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    </p>
                </section>

                {/* Como gerenciar */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <Globe className="h-5 w-5 text-indigo-400" />
                        Como gerenciar ou desativar cookies
                    </h2>

                    <p>
                        Você pode controlar cookies de duas formas:
                    </p>

                    <ul className="list-disc list-inside mt-3 space-y-2 text-slate-300">
                        <li>Pelo banner de consentimento exibido no site</li>
                        <li>Pelas configurações do seu navegador (bloquear, limpar ou permitir)</li>
                    </ul>

                    <p className="mt-3">
                        Ao bloquear cookies, algumas funcionalidades podem não funcionar como esperado.
                    </p>
                </section>

                {/* Links externos */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <ExternalLink className="h-5 w-5 text-indigo-400" />
                        Links para outros sites
                    </h2>

                    <p>
                        A LEXARA pode conter links para sites externos. Cookies e tecnologias desses sites seguem
                        as regras próprias deles, não controladas pela LEXARA.
                    </p>
                </section>

                {/* Relacionados */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <ShieldCheck className="h-5 w-5 text-indigo-400" />
                        Documentos relacionados
                    </h2>

                    <ul className="list-disc list-inside mt-3 space-y-2 text-slate-300">
                        <li>
                            <Link
                                href="/politica-de-privacidade"
                                className="text-indigo-300 underline underline-offset-4 hover:text-indigo-200"
                            >
                                Política de Privacidade
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/termos-de-uso"
                                className="text-indigo-300 underline underline-offset-4 hover:text-indigo-200"
                            >
                                Termos de Uso
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Alterações */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <ShieldCheck className="h-5 w-5 text-indigo-400" />
                        Alterações nesta política
                    </h2>

                    <p>
                        Esta Política de Cookies pode ser atualizada para refletir mudanças em ferramentas,
                        requisitos legais ou melhorias no site.
                    </p>

                    <p className="mt-3 text-slate-300">
                        Quando houver atualização, a data no topo desta página será ajustada automaticamente.
                    </p>
                </section>

                {/* Contato */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <Mail className="h-5 w-5 text-indigo-400" />
                        Contato
                    </h2>

                    <p>
                        Se tiver dúvidas sobre cookies, consentimento ou publicidade, use a página de contato
                        para falar com a LEXARA.
                    </p>
                </section>
            </section>
        </div>
    );
}
