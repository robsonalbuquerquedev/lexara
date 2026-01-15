"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HelpCircle, Search, ChevronDown, ShieldCheck, BookOpen, Sparkles, Mail, Image as ImageIcon, Info, Home, } from "lucide-react";

type FaqItem = {
    id: string;
    question: string;
    answer: React.ReactNode;
    tags: string[];
};

function slugify(input: string) {
    return input
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

function TagPill({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200">
            {label}
        </span>
    );
}

function FaqRow({
    item,
    isOpen,
    onToggle,
}: {
    item: FaqItem;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const anchor = item.id || slugify(item.question);

    return (
        <article
            id={anchor}
            className="rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/10"
        >
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`${anchor}-content`}
            >
                <div className="min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-slate-100 leading-snug">
                        {item.question}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.slice(0, 4).map((t) => (
                            <TagPill key={t} label={t} />
                        ))}
                    </div>
                </div>

                <ChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-slate-200 transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                />
            </button>

            <motion.div
                id={`${anchor}-content`}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { height: "auto", opacity: 1 },
                    closed: { height: 0, opacity: 0 },
                }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
            >
                <div className="px-5 pb-5 text-sm md:text-[15px] leading-relaxed text-slate-200">
                    {item.answer}
                </div>
            </motion.div>
        </article>
    );
}

export default function FAQContent() {
    const [query, setQuery] = useState("");
    const [openId, setOpenId] = useState<string | null>("o-que-e-lexara");

    const faqs: FaqItem[] = useMemo(
        () => [
            {
                id: "o-que-e-lexara",
                question: "O que é a LEXARA, em uma frase?",
                tags: ["lexara", "identidade", "cultura geek", "conteúdo"],
                answer: (
                    <>
                        <p>
                            A <strong>LEXARA</strong> é um site editorial que organiza e publica
                            conteúdo sobre cultura geek com foco em leitura agradável, pesquisa,
                            contexto e navegação clara.
                        </p>
                        <p className="mt-3">
                            Se você acabou de chegar, o melhor começo costuma ser por{" "}
                            <Link href="/conteudos" className="text-indigo-200 underline underline-offset-4">
                                Conteúdos
                            </Link>{" "}
                            — e, se quiser entender a proposta do projeto, a rota{" "}
                            <Link href="/sobre" className="text-indigo-200 underline underline-offset-4">
                                Sobre
                            </Link>{" "}
                            dá o panorama completo.
                        </p>
                    </>
                ),
            },
            {
                id: "lexara-tema",
                question: "Quais temas a LEXARA aborda?",
                tags: ["temas", "categorias", "filmes", "games", "hqs"],
                answer: (
                    <>
                        <p>
                            A LEXARA reúne conteúdos ligados ao universo geek — como filmes e séries,
                            HQs e mangás, games, curiosidades e histórias/origens — sempre com
                            linguagem acessível e estrutura pensada para leitura.
                        </p>
                        <p className="mt-3">
                            Para explorar por &ldquo;blocos&ldquo;, use{" "}
                            <Link href="/conteudos" className="text-indigo-200 underline underline-offset-4">
                                /conteudos
                            </Link>
                            . Se você curte algo mais visual, a{" "}
                            <Link href="/galeria" className="text-indigo-200 underline underline-offset-4">
                                Galeria
                            </Link>{" "}
                            ajuda a navegar por referências.
                        </p>
                    </>
                ),
            },
            {
                id: "conteudo-autoral",
                question: "Os textos são autorais? Como a LEXARA trata fontes e referências?",
                tags: ["autoral", "fontes", "credibilidade", "confiança"],
                answer: (
                    <>
                        <p>
                            O objetivo é produzir conteúdo <strong>original</strong>, com pesquisa e
                            curadoria. Quando algo depende de informação externa (datas, nomes,
                            eventos), a recomendação editorial é <strong>referenciar</strong> e
                            deixar claro o contexto, evitando copiar trechos ou &ldquo;colar&ldquo; descrições.
                        </p>
                        <p className="mt-3">
                            Isso aumenta a confiança do leitor e melhora a experiência, porque você
                            não só &ldquo;lê&ldquo;, você entende <em>por que</em> aquilo faz sentido.
                        </p>
                    </>
                ),
            },
            {
                id: "atualizacao",
                question: "Com que frequência a LEXARA publica ou atualiza conteúdos?",
                tags: ["atualização", "frequência", "organização"],
                answer: (
                    <>
                        <p>
                            A LEXARA pode publicar e atualizar conteúdos em ritmos diferentes,
                            dependendo do tema e do planejamento editorial. Em geral, páginas de
                            categoria e hubs tendem a ser aprimoradas com frequência, enquanto
                            conteúdos &ldquo;atemporais&ldquo; podem receber ajustes pontuais.
                        </p>
                        <p className="mt-3">
                            Um bom sinal de qualidade aqui é consistência: mesmo quando algo não é
                            publicado &ldquo;todo dia&ldquo;, a navegação e a estrutura seguem sólidas.
                        </p>
                    </>
                ),
            },
            {
                id: "por-que-faq",
                question: "Por que existe uma página de FAQ na LEXARA?",
                tags: ["faq", "navegação", "ux", "confiança"],
                answer: (
                    <>
                        <p>
                            Porque uma FAQ reduz dúvidas comuns antes que elas virem fricção.
                            Ela serve como ponto de apoio editorial: explica o que o site é, como
                            ele funciona e como o leitor pode aproveitar melhor.
                        </p>
                        <p className="mt-3">
                            Isso ajuda em três frentes: <strong>confiança</strong> (clareza),
                            <strong> permanência</strong> (menos abandono) e <strong>SEO</strong>{" "}
                            (conteúdo útil, estruturado e com intenção bem definida).
                        </p>
                    </>
                ),
            },
            {
                id: "posso-sugerir",
                question: "Posso sugerir temas, correções ou ideias de conteúdo?",
                tags: ["sugestões", "comunidade", "contato"],
                answer: (
                    <>
                        <p>
                            Sim. Sugestões ajudam a manter a LEXARA alinhada com o interesse real
                            de quem lê. Se você encontrou algo para corrigir ou quer sugerir um tema,
                            o caminho ideal é pela rota{" "}
                            <Link href="/contato" className="text-indigo-200 underline underline-offset-4">
                                Contato
                            </Link>
                            .
                        </p>
                        <p className="mt-3">
                            Quanto mais específico você for (ex.: &ldquo;&ldquo;ual parte&ldquo;&ldquo; &ldquo;&ldquo;ual título&ldquo;&ldquo; &ldquo;&ldquo;ual
                            dúvida&ldquo;&ldquo;, mais fácil é transformar o feedback em melhoria.
                        </p>
                    </>
                ),
            },
            {
                id: "galeria-uso",
                question: "Qual é o papel da Galeria dentro da LEXARA?",
                tags: ["galeria", "visual", "referências", "organização"],
                answer: (
                    <>
                        <p>
                            A Galeria é uma rota de apoio visual: ela complementa a leitura com
                            referências e organização por imagens — ideal para quem gosta de explorar
                            com o olhar antes de mergulhar nos textos.
                        </p>
                        <p className="mt-3">
                            Para manter boa navegação, faz sentido paginar ou limitar a quantidade de
                            itens por tela. Assim, a experiência continua fluida em qualquer dispositivo.
                        </p>
                    </>
                ),
            },
            {
                id: "privacidade",
                question: "A LEXARA coleta dados? Como fica privacidade e anúncios?",
                tags: ["privacidade", "ads", "transparência", "confiança"],
                answer: (
                    <>
                        <p>
                            A postura da LEXARA é a transparência. Cookies e anúncios podem ser utilizados
                            para melhorar a experiência e viabilizar o projeto, sempre respeitando boas
                            práticas de privacidade.
                        </p>

                        <p className="mt-3">
                            Para entender em detalhes como dados, cookies e publicidade funcionam,
                            consulte a{" "}
                            <Link
                                href="/politica-de-privacidade"
                                className="text-indigo-200 underline underline-offset-4"
                            >
                                Política de Privacidade
                            </Link>
                            .
                        </p>

                        <p className="mt-3">
                            Já as regras de uso do conteúdo, limitações de responsabilidade e direitos
                            autorais estão descritas nos{" "}
                            <Link
                                href="/termos-de-uso"
                                className="text-indigo-200 underline underline-offset-4"
                            >
                                Termos de Uso
                            </Link>
                            .
                        </p>
                    </>
                ),
            },
            {
                id: "como-navegar",
                question: "Por onde começar a navegar na LEXARA?",
                tags: ["começar", "navegação", "conteúdos"],
                answer: (
                    <>
                        <p>
                            Se você quer uma visão geral, comece por{" "}
                            <Link href="/conteudos" className="text-indigo-200 underline underline-offset-4">
                                Conteúdos
                            </Link>
                            . Se você quer entender a proposta e o &ldquo;porquê&ldquo; do site, vá em{" "}
                            <Link href="/sobre" className="text-indigo-200 underline underline-offset-4">
                                Sobre
                            </Link>
                            . E se você prefere explorar visualmente, use a{" "}
                            <Link href="/galeria" className="text-indigo-200 underline underline-offset-4">
                                Galeria
                            </Link>
                            .
                        </p>
                        <p className="mt-3">
                            A melhor navegação é a que parece óbvia. A LEXARA tenta seguir esse princípio:
                            poucas opções, bem organizadas, e com rótulos claros.
                        </p>
                    </>
                ),
            },
        ],
        []
    );

    const normalizedQuery = query.trim().toLowerCase();
    const filtered = useMemo(() => {
        if (!normalizedQuery) return faqs;

        return faqs.filter((item) => {
            const q = item.question.toLowerCase();
            const tags = item.tags.join(" ").toLowerCase();
            return q.includes(normalizedQuery) || tags.includes(normalizedQuery);
        });
    }, [faqs, normalizedQuery]);

    const quickLinks = useMemo(
        () => [
            { href: "/", label: "Início", icon: <Home className="h-4 w-4" /> },
            { href: "/sobre", label: "Sobre", icon: <Info className="h-4 w-4" /> },
            { href: "/conteudos", label: "Conteúdos", icon: <BookOpen className="h-4 w-4" /> },
            { href: "/galeria", label: "Galeria", icon: <ImageIcon className="h-4 w-4" /> },
            { href: "/contato", label: "Contato", icon: <Mail className="h-4 w-4" /> },
        ],
        []
    );

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            {/* Hero */}
            <motion.header
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 md:p-10 shadow-2xl shadow-black/20"
            >
                <div className="flex items-center gap-3 text-slate-100">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                        <HelpCircle className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                            FAQ — Perguntas Frequentes
                        </h1>
                        <p className="mt-1 text-sm md:text-base text-slate-200">
                            Respostas rápidas e transparentes para você navegar com mais confiança.
                        </p>
                    </div>
                </div>

                {/* Trust / SEO cues */}
                <div className="mt-6 grid gap-3 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2 text-slate-100 font-semibold">
                            <ShieldCheck className="h-5 w-5" />
                            Transparência editorial
                        </div>
                        <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                            Explicamos o que o site é, como o conteúdo nasce e como você pode aproveitar melhor cada rota.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2 text-slate-100 font-semibold">
                            <Sparkles className="h-5 w-5" />
                            Leitura sem fricção
                        </div>
                        <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                            Perguntas bem escolhidas economizam tempo, reduzem dúvida e ajudam você a ficar mais tempo explorando.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2 text-slate-100 font-semibold">
                            <BookOpen className="h-5 w-5" />
                            Navegação guiada
                        </div>
                        <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                            Links internos e respostas objetivas para te levar exatamente ao que você veio procurar.
                        </p>
                    </div>
                </div>

                {/* Search */}
                <div className="mt-7 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Buscar na FAQ (ex.: ‘autoral’, ‘galeria’, ‘sugestões’)..."
                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-11 py-3 text-sm text-slate-100 placeholder:text-slate-300 outline-none focus:border-white/20"
                            aria-label="Buscar na FAQ"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {quickLinks.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-100 hover:bg-white/10 transition-colors"
                            >
                                {l.icon}
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.header>

            {/* Results meta */}
            <section className="mt-10">
                <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-slate-300">
                        {filtered.length === faqs.length
                            ? `Mostrando ${filtered.length} perguntas.`
                            : `Encontramos ${filtered.length} resultado(s) para “${query.trim()}”.`}
                    </p>

                    {query.trim() ? (
                        <button
                            type="button"
                            onClick={() => setQuery("")}
                            className="text-sm text-indigo-200 underline underline-offset-4 hover:text-indigo-100"
                        >
                            Limpar busca
                        </button>
                    ) : null}
                </div>

                {/* FAQ list */}
                <div className="mt-4 grid gap-4">
                    {filtered.map((item) => {
                        const id = item.id || slugify(item.question);
                        const isOpen = openId === id;

                        return (
                            <FaqRow
                                key={id}
                                item={{ ...item, id }}
                                isOpen={isOpen}
                                onToggle={() => setOpenId((prev) => (prev === id ? null : id))}
                            />
                        );
                    })}
                </div>

                {/* Empty state */}
                {filtered.length === 0 ? (
                    <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                        <p className="text-slate-100 font-semibold">Nada encontrado.</p>
                        <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                            Tente buscar por termos como <strong>conteúdos</strong>, <strong>galeria</strong>,{" "}
                            <strong>autoral</strong> ou <strong>sugestões</strong>. Se preferir, envie sua
                            dúvida em{" "}
                            <Link href="/contato" className="text-indigo-200 underline underline-offset-4">
                                Contato
                            </Link>
                            .
                        </p>
                    </div>
                ) : null}
            </section>

            {/* Footer CTA */}
            <section className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 md:p-10">
                <h2 className="text-xl md:text-2xl font-bold text-slate-100">
                    Ainda ficou alguma dúvida?
                </h2>
                <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-200 max-w-3xl">
                    Se sua pergunta não está aqui, você pode enviar uma mensagem. Quanto mais contexto você
                    der (tema, rota e o que você esperava encontrar), mais fácil é transformar sua dúvida em
                    melhoria editorial.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                        href="/contato"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-600/25 transition-colors"
                    >
                        <Mail className="h-4 w-4" />
                        Falar com a LEXARA
                    </Link>

                    <Link
                        href="/conteudos"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors"
                    >
                        <BookOpen className="h-4 w-4" />
                        Explorar Conteúdos
                    </Link>
                </div>
            </section>
        </div>
    );
}
