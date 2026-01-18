import Image from "next/image";
import Link from "next/link";
import { Instagram, ExternalLink, FileText, ShieldCheck, Layers, HelpCircle, Cookie } from "lucide-react";
import { openCookieSettings } from "@/components/ConsentMode";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gradient-to-br from-indigo-400/10 via-indigo-400/5 to-transparent text-slate-400 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid gap-12 md:grid-cols-12">
                    {/* Brand */}
                    <div className="md:col-span-4 space-y-4">
                        <Link href="/" className="inline-flex items-center">
                            <Image
                                src="/images/logolexaraconceptual.png"
                                alt="LEXARA — Arquivo vivo do universo geek"
                                width={420}
                                height={280}
                                priority
                                className="w-auto h-20 sm:h-24 md:h-28 drop-shadow-xl"
                            />
                        </Link>

                        <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                            Um arquivo vivo de ideias, histórias e análises da cultura geek —
                            feito com cuidado editorial e organização.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <a
                                href="https://www.instagram.com/celsiuslopes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <Instagram size={16} />
                                @celsiuslopes
                            </a>

                            <a
                                href="https://www.instagram.com/_emanuell_j"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <Instagram size={16} />
                                @_emanuel_j
                            </a>

                            <a
                                href="https://www.instagram.com/robson.albuquerque_cm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <Instagram size={16} />
                                @robson.albuquerque_cm
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="md:col-span-4 space-y-4">
                        <p className="text-slate-300 font-medium text-sm flex items-center gap-2">
                            <FileText size={16} />
                            Legal
                        </p>

                        <nav className="flex flex-col gap-3 text-sm">
                            <Link
                                href="/termos-de-uso"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <FileText size={16} />
                                Termos de Uso
                            </Link>

                            <Link
                                href="/politica-de-privacidade"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <ShieldCheck size={16} />
                                Política de Privacidade
                            </Link>

                            <Link
                                href="/politica-de-cookies"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <Cookie size={16} />
                                Política de Cookies
                            </Link>

                            <button
                                type="button"
                                onClick={openCookieSettings}
                                className="flex items-center gap-2 text-left hover:text-white transition-colors cursor-pointer"
                            >
                                <Cookie size={16} />
                                Configurações de cookies
                            </button>

                            <Link
                                href="/faq"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <HelpCircle size={16} />
                                FAQ
                            </Link>
                        </nav>
                    </div>

                    {/* Projects */}
                    <div className="md:col-span-4 space-y-4">
                        <p className="text-slate-300 font-medium text-sm flex items-center gap-2">
                            <Layers size={16} />
                            Outros projetos
                        </p>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="https://aprenderviolaoonline.com.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    Aprender Violão Online
                                    <ExternalLink size={14} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://cantosjsm.com.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    Cantos JSM
                                    <ExternalLink size={14} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://englishstudyhub.com.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    English Study Hub
                                    <ExternalLink size={14} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://windly.com.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    Windly
                                    <ExternalLink size={14} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs">
                    <p className="text-slate-300 font-medium">
                        © {currentYear} LEXARA — Arquivo vivo do universo geek
                    </p>

                    <p className="text-slate-500">
                        Feito para leitura confortável, navegação clara e conteúdo bem organizado.
                    </p>
                </div>
            </div>
        </footer>
    );
}
