import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

type ContinueLink = {
    href: string;
    label: string;
    primary?: boolean;
};

type ContinueNoLexaraProps = {
    description: string;
    links: ContinueLink[];
};

export function ContinueNoLexara({ description, links }: ContinueNoLexaraProps) {
    return (
        <div className="not-prose my-12 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
            <p className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                <Sparkles size={16} /> Continue no LEXARA
            </p>

            <p className="mt-2 text-sm text-slate-300">
                {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={
                            link.primary
                                ? "inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
                                : "inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                        }
                    >
                        {link.label}
                        <ArrowRight size={16} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
