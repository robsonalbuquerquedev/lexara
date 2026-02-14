"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface StrategicHubBlockProps {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    href: string;
    accentColor?: string; // ex: "indigo" | "blue" | "red"
}

export default function StrategicHubBlock({
    eyebrow,
    title,
    description,
    ctaLabel,
    href,
    accentColor = "indigo",
}: StrategicHubBlockProps) {
    return (
        <section
            className={`relative overflow-hidden rounded-2xl border border-${accentColor}-700/40 bg-gradient-to-r from-${accentColor}-950 via-slate-900 to-${accentColor}-950 p-8 md:p-10 opacity-0 animate-fadeIn`}
        >
            <div className="max-w-3xl">

                <p className={`text-xs font-semibold uppercase tracking-wider text-${accentColor}-400`}>
                    {eyebrow}
                </p>

                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-slate-100">
                    {title}
                </h2>

                <p className="mt-4 text-slate-300 leading-relaxed">
                    {description}
                </p>

                <Link
                    href={href}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                >
                    {ctaLabel} <ArrowRight size={18} />
                </Link>

            </div>
        </section>
    );
}
