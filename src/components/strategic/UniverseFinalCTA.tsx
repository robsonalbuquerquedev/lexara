import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAButton {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
}

interface UniverseFinalCTAProps {
    title: string;
    description: string;
    buttons: CTAButton[];
}

export default function UniverseFinalCTA({
    title,
    description,
    buttons,
}: UniverseFinalCTAProps) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">

            <p className="text-sm font-semibold text-slate-100">
                {title}
            </p>

            <p className="mt-2 text-sm text-slate-300">
                {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
                {buttons.map((button, index) => (
                    <Link
                        key={index}
                        href={button.href}
                        className={
                            button.variant === "primary"
                                ? "inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
                                : "inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                        }
                    >
                        {button.label} <ArrowRight size={16} />
                    </Link>
                ))}
            </div>

        </div>
    );
}
