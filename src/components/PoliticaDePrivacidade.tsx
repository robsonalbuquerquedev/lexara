"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Database, Cookie, ExternalLink, Mail, } from "lucide-react";

function getFormattedDate() {
    return new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

export default function PoliticaDePrivacidade() {
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
                        <ShieldCheck className="h-6 w-6 text-indigo-400" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-slate-100">
                        Política de Privacidade
                    </h1>
                </div>

                <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
                    A sua privacidade é importante. Esta página explica, de forma clara e direta,
                    como a LEXARA lida com informações, dados e navegação dentro do site.
                </p>

                <p className="mt-3 text-xs text-slate-400">
                    Última atualização: <strong>{lastUpdate}</strong>
                </p>
            </motion.header>

            {/* Conteúdo */}
            <section className="space-y-12 text-slate-200 leading-relaxed text-sm md:text-base">
                {/* Coleta de dados */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <Eye className="h-5 w-5 text-indigo-400" />
                        Coleta de informações
                    </h2>

                    <p>
                        A LEXARA não exige cadastro para navegação e não coleta dados pessoais
                        sensíveis de forma direta. Você pode acessar conteúdos, páginas e recursos
                        sem informar nome, e-mail ou qualquer outro dado identificável.
                    </p>

                    <p className="mt-3">
                        Informações técnicas básicas — como tipo de navegador, páginas visitadas
                        e tempo de permanência — podem ser coletadas de forma automática, apenas
                        para fins estatísticos e de melhoria da experiência.
                    </p>
                </section>

                {/* Uso das informações */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <Database className="h-5 w-5 text-indigo-400" />
                        Uso das informações
                    </h2>

                    <p>
                        Os dados coletados são utilizados exclusivamente para:
                    </p>

                    <ul className="list-disc list-inside mt-3 space-y-2 text-slate-300">
                        <li>Entender como o site é utilizado</li>
                        <li>Melhorar navegação, estrutura e conteúdos</li>
                        <li>Manter o funcionamento técnico da plataforma</li>
                    </ul>

                    <p className="mt-3">
                        A LEXARA não vende, aluga ou compartilha informações pessoais com terceiros.
                    </p>
                </section>

                {/* Cookies e anúncios */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <Cookie className="h-5 w-5 text-indigo-400" />
                        Cookies e publicidade
                    </h2>

                    <p>
                        O site pode utilizar cookies para melhorar a experiência do usuário e,
                        eventualmente, exibir anúncios relevantes por meio de plataformas de
                        publicidade (como o Google AdSense).
                    </p>

                    <p className="mt-3">
                        Esses cookies permitem entender padrões de navegação, mas não identificam
                        você pessoalmente. Você pode desativar cookies a qualquer momento nas
                        configurações do seu navegador.
                    </p>

                    <p className="mt-3">
                        Para mais detalhes sobre como o Google utiliza dados de sites parceiros,
                        consulte a política oficial:
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
                </section>

                {/* Links externos */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <ExternalLink className="h-5 w-5 text-indigo-400" />
                        Links para sites externos
                    </h2>

                    <p>
                        A LEXARA pode conter links para sites externos. Ao acessar esses links,
                        você estará sujeito às políticas de privacidade e termos desses
                        respectivos sites, que não são controlados pela LEXARA.
                    </p>
                </section>

                {/* Alterações */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <ShieldCheck className="h-5 w-5 text-indigo-400" />
                        Alterações nesta política
                    </h2>

                    <p>
                        Esta Política de Privacidade pode ser atualizada a qualquer momento para
                        refletir mudanças no site, em práticas legais ou em ferramentas utilizadas.
                    </p>

                    <p className="mt-3">
                        Sempre que isso ocorrer, a data de atualização no topo da página será
                        ajustada automaticamente.
                    </p>
                </section>

                {/* Contato */}
                <section>
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100 mb-3">
                        <Mail className="h-5 w-5 text-indigo-400" />
                        Contato
                    </h2>

                    <p>
                        Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre
                        como a LEXARA funciona, utilize a página de contato para falar conosco.
                    </p>
                </section>
            </section>
        </div>
    );
}
