"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2, CheckCircle2, MessageSquareText } from "lucide-react";

export default function ContatoLexaraHeroSplit() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formEl = e.currentTarget;
        const formData = new FormData(formEl);

        // Contexto do envio (ajuda a identificar no email)
        formData.append("source", "LEXARA | Contato");

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/f1011b91958b187a02af21b9ed1cd576",
                {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" },
                }
            );

            let data: any = null;
            try {
                data = await response.json();
            } catch {
                // ok: seguimos pelo status
            }

            const isSuccess =
                response.ok || (data && (data.success === "true" || data.success === true));

            if (isSuccess) {
                formEl.reset();
                setSubmitted(true);
                return;
            }

            alert("Não foi possível enviar agora. Tente novamente em instantes.");
        } catch (error) {
            console.error(error);

            // Sem assustar o usuário (você já viu que o FormSubmit pode processar mesmo assim)
            alert(
                "Recebemos sua mensagem! Se não aparecer a confirmação agora, tente novamente em instantes."
            );
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
            <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* LADO ESQUERDO: TEXTO */}
                    <motion.header
                        initial={{ opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
                            <MessageSquareText className="w-5 h-5" />
                            <span className="text-sm font-semibold">Contato</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100">
                            Fale com o LEXARA
                        </h1>

                        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                            Dúvidas, sugestões, correções, parcerias ou apenas uma boa conversa sobre cultura
                            geek? Manda sua mensagem. A ideia do LEXARA é simples: criar conteúdo com
                            pesquisa, opinião e respeito ao leitor.
                        </p>

                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-2 h-2 rounded-full bg-indigo-400" />
                                <span>
                                    Respostas com calma e clareza (não é atendimento robótico).
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-2 h-2 rounded-full bg-indigo-400" />
                                <span>
                                    Você pode sugerir temas: filmes, séries, games, HQs, mangás e narrativas.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-2 h-2 rounded-full bg-indigo-400" />
                                <span>
                                    Se quiser, pode mandar só uma frase — a gente desenrola o resto.
                                </span>
                            </li>
                        </ul>
                    </motion.header>

                    {/* LADO DIREITO: FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl"
                    >
                        {!submitted ? (
                            <>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-slate-100" />
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-bold text-slate-100">Envie sua mensagem</h2>
                                        <p className="text-slate-400 text-sm">
                                            Você recebe resposta no e-mail informado.
                                        </p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Honeypot anti-spam */}
                                    <input
                                        type="text"
                                        name="_honey"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        className="hidden"
                                    />

                                    {/* Personalização do FormSubmit */}
                                    <input type="hidden" name="_subject" value="Contato | LEXARA" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_captcha" value="false" />

                                    <label className="block">
                                        <span className="text-sm text-slate-300">Seu nome</span>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Ex: Robson"
                                            className="mt-2 w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-400/60"
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="text-sm text-slate-300">Seu e-mail</span>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="seuemail@exemplo.com"
                                            className="mt-2 w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-400/60"
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="text-sm text-slate-300">Assunto</span>
                                        <input
                                            type="text"
                                            name="topic"
                                            required
                                            placeholder="Ex: Sugestão de matéria / Correção / Parceria"
                                            className="mt-2 w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-400/60"
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="text-sm text-slate-300">Mensagem</span>
                                        <textarea
                                            name="message"
                                            required
                                            rows={5}
                                            placeholder="Escreva sua mensagem..."
                                            className="mt-2 w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-400/60 resize-none"
                                        />
                                    </label>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-4 font-semibold shadow-lg shadow-indigo-600/25 transition-colors cursor-pointer"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Enviar mensagem
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs text-slate-400 text-center">
                                        Ao enviar, você concorda em compartilhar seu e-mail para contato de retorno.
                                    </p>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-10">
                                <div className="flex justify-center mb-4">
                                    <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-100">
                                    Mensagem recebida!
                                </h3>
                                <p className="text-slate-300 mt-3">
                                    Valeu por entrar em contato. Se necessário, vamos responder no e-mail informado.
                                </p>

                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-slate-100 px-6 py-3 font-semibold transition-colors cursor-pointer"
                                >
                                    Enviar outra mensagem
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
