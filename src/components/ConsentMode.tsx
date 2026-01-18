"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ConsentChoice = "accepted" | "rejected";
const STORAGE_KEY = "lexara_consent_choice";
const OPEN_EVENT = "lexara:open-cookie-settings";

declare global {
    interface Window {
        dataLayer?: any[];
        gtag?: (...args: any[]) => void;
    }
}

function safeGtag(...args: any[]) {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag === "function") window.gtag(...args);
    else window.dataLayer.push(args);
}

export function openCookieSettings() {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event(OPEN_EVENT));
}

export default function ConsentMode() {
    const [choice, setChoice] = useState<ConsentChoice | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    // Load saved choice
    useEffect(() => {
        const saved = (localStorage.getItem(STORAGE_KEY) as ConsentChoice | null) ?? null;
        setChoice(saved);

        // If no choice, show banner immediately
        if (!saved) setIsOpen(true);

        // Apply saved consent if exists
        if (saved) applyConsent(saved);
    }, []);

    // Listen for "open settings" event
    useEffect(() => {
        function handleOpen() {
            setIsOpen(true);
        }

        window.addEventListener(OPEN_EVENT, handleOpen);
        return () => window.removeEventListener(OPEN_EVENT, handleOpen);
    }, []);

    function applyConsent(value: ConsentChoice) {
        if (value === "accepted") {
            safeGtag("consent", "update", {
                ad_storage: "granted",
                ad_user_data: "granted",
                ad_personalization: "granted",
                analytics_storage: "granted",
            });
            return;
        }

        // Rejected: ads can run but non-personalized/limited; analytics denied
        safeGtag("consent", "update", {
            ad_storage: "granted",
            ad_user_data: "denied",
            ad_personalization: "denied",
            analytics_storage: "denied",
        });
    }

    function saveChoice(value: ConsentChoice) {
        localStorage.setItem(STORAGE_KEY, value);
        setChoice(value);
        applyConsent(value);
        setIsOpen(false);
    }

    function handleAccept() {
        saveChoice("accepted");
    }

    function handleReject() {
        saveChoice("rejected");
    }

    // If banner is closed, render nothing
    if (!isOpen) return null;

    return (
        <section
            role="dialog"
            aria-label="Preferências de cookies"
            className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-950/95 backdrop-blur"
        >
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
                <div className="text-sm text-slate-200">
                    <p className="font-semibold text-slate-100">Cookies & Privacidade</p>

                    <p className="mt-1 text-slate-300">
                        Usamos cookies para medir desempenho e exibir anúncios. Se você recusar,
                        ainda poderemos exibir{" "}
                        <span className="font-medium">anúncios não personalizados</span>, com coleta limitada.
                    </p>

                    <p className="mt-2">
                        <Link
                            href="/politica-de-cookies"
                            className="text-indigo-400 underline underline-offset-2 hover:text-indigo-300"
                        >
                            Ler Política de Cookies
                        </Link>
                    </p>

                    {choice && (
                        <p className="mt-2 text-xs text-slate-400">
                            Preferência atual:{" "}
                            <strong className="text-slate-200">
                                {choice === "accepted" ? "Aceitou" : "Recusou"}
                            </strong>
                        </p>
                    )}
                </div>

                <div className="flex gap-3 md:shrink-0">
                    <button
                        onClick={handleReject}
                        className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/5 cursor-pointer"
                    >
                        Recusar
                    </button>

                    <button
                        onClick={handleAccept}
                        className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 cursor-pointer"
                    >
                        Aceitar tudo
                    </button>
                </div>
            </div>
        </section>
    );
}
