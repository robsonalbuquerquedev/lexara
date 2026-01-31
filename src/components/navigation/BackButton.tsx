// components/navigation/BackButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type BackButtonProps = {
    fallbackHref?: string;
    label?: string;
    className?: string;
    mode?: "history" | "fixed";
};

export default function BackButton({
    fallbackHref = "/",
    label = "Voltar",
    className = "",
    mode = "history",
}: BackButtonProps) {
    const router = useRouter();

    const handleBack = () => {
        if (mode === "history") {
            if (typeof window !== "undefined" && window.history.length > 1) {
                router.back();
                return;
            }
        }
        router.push(fallbackHref);
    };

    return (
        <div className={`w-full ${className}`}>
            <button
                type="button"
                onClick={handleBack}
                className="
          inline-flex items-center gap-2
          rounded-full border border-slate-700
          bg-slate-950/40 px-4 py-2 text-sm font-semibold text-slate-200
          transition hover:bg-slate-900/60 hover:border-slate-500
          focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70
          cursor-pointer
        "
                aria-label={label}
            >
                <ArrowLeft className="w-4 h-4" />
                <span>{label}</span>
            </button>
        </div>
    );
}
