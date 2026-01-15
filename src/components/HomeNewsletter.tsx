"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

export default function HomeNewsletter() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formEl = e.currentTarget; // guarda referência do form
        const formData = new FormData(formEl);

        formData.append("source", "LEXARA | Home Newsletter");

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/00e62b2eb50670b440cf470c86da243f",
                {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" },
                }
            );

            // Alguns casos: email chega, mas response pode não ser ok por algum detalhe.
            // Vamos tentar interpretar o retorno com segurança.
            let data: any = null;
            try {
                data = await response.json();
            } catch {
                // se não vier JSON, seguimos com a avaliação pelo status
            }

            const isSuccess =
                response.ok || (data && (data.success === "true" || data.success === true));

            if (isSuccess) {
                // Reset ANTES de esconder o form (evita null)
                formEl.reset();
                setSubmitted(true);
                return;
            }

            alert("Erro ao enviar. Tente novamente.");
        } catch (error) {
            console.error(error);

            // Como você já confirmou que o email chega,
            // aqui é melhor não assustar o usuário com "erro de conexão".
            alert("Recebemos sua inscrição! Se não aparecer a confirmação agora, tente novamente em instantes.");
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="max-w-6xl mx-auto px-6 py-14">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 md:p-12 shadow-2xl">
                <header className="text-center mb-10">
                    <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                            <Mail className="w-7 h-7 text-slate-100" />
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">
                        Receba novos artigos do LEXARA
                    </h2>

                    <p className="text-slate-300 mt-3 max-w-2xl mx-auto text-sm md:text-base">
                        Um e-mail quando sair conteúdo novo. Sem spam, sem enrolação. Só
                        cultura geek em análise.
                    </p>
                </header>

                {!submitted ? (
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-2xl mx-auto"
                        aria-label="Newsletter form"
                    >
                        {/* Honeypot anti-spam (bots tendem a preencher) */}
                        <input
                            type="text"
                            name="_honey"
                            tabIndex={-1}
                            autoComplete="off"
                            className="hidden"
                        />

                        {/* Configs úteis do FormSubmit */}
                        <input type="hidden" name="_subject" value="Novo inscrito na Newsletter | LEXARA" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />
                        {/* Você pode ativar captcha depois se quiser: true */}

                        <div className="flex flex-col md:flex-row gap-3">
                            <label className="w-full">
                                <span className="sr-only">Seu e-mail</span>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="seuemail@exemplo.com"
                                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-400/60"
                                />
                            </label>

                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-4 font-semibold shadow-lg shadow-indigo-600/25 transition-colors cursor-pointer"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    "Quero receber"
                                )}
                            </button>
                        </div>

                        <p className="text-slate-400 text-xs mt-4 text-center">
                            Ao se inscrever, você concorda em receber e-mails do LEXARA. Você
                            pode sair a qualquer momento.
                        </p>
                    </form>
                ) : (
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="flex justify-center mb-4">
                            <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-slate-100">
                            Inscrição confirmada!
                        </h3>

                        <p className="text-slate-300 mt-3">
                            Pronto! Quando sair artigo novo, você vai ficar sabendo. 😄
                        </p>

                        <button
                            onClick={() => setSubmitted(false)}
                            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-slate-100 px-6 py-3 font-semibold transition-colors cursor-pointer"
                        >
                            Cadastrar outro e-mail
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
