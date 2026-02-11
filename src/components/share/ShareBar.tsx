"use client";

import { useMemo, useState } from "react";
import { MessageCircle, X, Facebook, Linkedin, Link as LinkIcon, Share2, } from "lucide-react";


type ShareBarProps = {
    title: string;
    slug: string; // ex: "/filmes-series/dc/batman/batman-ben-affleck"
    canonicalBase?: string; // ex: "https://lexara.com.br" (opcional)
    className?: string;
};

function buildUrl(canonicalBase: string | undefined, slug: string) {
    // Se vier URL absoluta, usa como está.
    if (slug.startsWith("http://") || slug.startsWith("https://")) return slug;

    // Se o user não passar canonicalBase, tenta pegar do browser.
    const base =
        canonicalBase ??
        (typeof window !== "undefined" ? window.location.origin : "");

    return `${base}${slug.startsWith("/") ? slug : `/${slug}`}`;
}

function encode(str: string) {
    return encodeURIComponent(str);
}

export default function ShareBar({
    title,
    slug,
    canonicalBase,
    className,
}: ShareBarProps) {
    const [copied, setCopied] = useState(false);

    const url = useMemo(() => buildUrl(canonicalBase, slug), [canonicalBase, slug]);

    const shareText = `${title}`;
    const shareTextWithUrl = `${shareText} — ${url}`;

    const links = useMemo(() => {
        return {
            whatsapp: `https://wa.me/?text=${encode(shareTextWithUrl)}`,
            x: `https://twitter.com/intent/tweet?text=${encode(shareText)}&url=${encode(url)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encode(url)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encode(url)}`,
        };
    }, [shareText, shareTextWithUrl, url]);

    async function copyLink() {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
        } catch {
            // fallback simples (menos elegante, mas funciona)
            const input = document.createElement("input");
            input.value = url;
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
        }
    }

    async function nativeShare() {
        if (!("share" in navigator)) return;
        try {
            await navigator.share({
                title,
                text: shareText,
                url,
            });
        } catch {
            // usuário cancelou ou erro — não precisa fazer nada
        }
    }

    const canNativeShare = typeof navigator !== "undefined" && "share" in navigator;

    return (
        <aside
            aria-label="Compartilhar este artigo"
            className={[
                "not-prose my-12 rounded-2xl border border-slate-800 bg-slate-950/40 p-6",
                className ?? "",
            ].join(" ")}
        >
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-sm font-semibold text-slate-100">
                        Este conteúdo fez sentido para você?
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                        Compartilhe com outros leitores. Um simples link ajuda a espalhar análises,
                        contexto e boas histórias — seja sobre cinema, séries, games, HQs ou cultura pop.
                    </p>
                </div>

                {canNativeShare ? (
                    <button
                        type="button"
                        onClick={nativeShare}
                        aria-label="Compartilhar (menu do dispositivo)"
                        className="mt-4 md:mt-0 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800 cursor-pointer"
                    >
                        <Share2 size={16} />
                        Compartilhar
                    </button>
                ) : null}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
                <a
                    href={links.whatsapp}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Compartilhar no WhatsApp"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800"
                >
                    <MessageCircle size={16} />
                    WhatsApp
                </a>

                <a
                    href={links.x}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Compartilhar no X"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800"
                >
                    <X size={16} />
                    X
                </a>

                <a
                    href={links.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Compartilhar no Facebook"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800"
                >
                    <Facebook size={16} />
                    Facebook
                </a>

                <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Compartilhar no LinkedIn"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800"
                >
                    <Linkedin size={16} />
                    LinkedIn
                </a>

                <button
                    type="button"
                    onClick={copyLink}
                    aria-label="Copiar link do artigo"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800 cursor-pointer"
                >
                    <LinkIcon size={16} />
                    {copied ? "Link copiado" : "Copiar link"}
                </button>
            </div>

            <p className="mt-4 text-xs text-slate-400 break-all">
                Link: <span className="text-slate-300">{url}</span>
            </p>
        </aside>
    );
}
