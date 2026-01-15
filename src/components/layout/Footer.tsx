import Image from "next/image";
import {
    Instagram,
    ExternalLink,
    FileText,
    ShieldCheck,
    Layers,
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-400 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-3">

                {/* Brand & Legal */}
                <div className="space-y-5 text-sm">
                    <Image
                        src="/images/logolexara.png"
                        alt="LEXARA — Arquivo vivo do universo geek"
                        width={200}
                        height={200}
                        className="drop-shadow-xl"
                    />

                    <p className="text-slate-300 font-medium">
                        © {currentYear} LEXARA
                    </p>

                    <div className="flex flex-col gap-2">
                        <a
                            href="/termos-de-uso"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <FileText size={16} />
                            Termos de Uso
                        </a>

                        <a
                            href="/politica-de-privacidade"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <ShieldCheck size={16} />
                            Política de Privacidade
                        </a>
                    </div>
                </div>

                {/* Projects */}
                <div className="text-sm space-y-5">
                    <p className="text-slate-300 font-medium flex items-center gap-2">
                        <Layers size={16} />
                        Outros projetos
                    </p>

                    <ul className="space-y-3">
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

                {/* Social */}
                <div className="text-sm space-y-5">
                    <p className="text-slate-300 font-medium">
                        Conecte-se com a gente
                    </p>

                    <div className="flex flex-col gap-3">
                        <a
                            href="https://www.instagram.com/celsiuslopes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <Instagram size={18} />
                            @celsiuslopes
                        </a>

                        <a
                            href="https://www.instagram.com/_emanuell_j"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <Instagram size={18} />
                            @_emanuel_j
                        </a>

                        <a
                            href="https://www.instagram.com/robson.albuquerque_cm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <Instagram size={18} />
                            @robson.albuquerque_cm
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
