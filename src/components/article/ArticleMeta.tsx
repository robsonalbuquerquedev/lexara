import Image from "next/image";
import { Clock, CalendarDays } from "lucide-react";

type Author = {
    name: string;
    avatar: string;
    role?: string; // opcional (ex: Autor, Editor-chefe)
};

type Reviewer = {
    name: string;
    avatar: string;
    role?: string; // ex: Revisão
};

type ArticleMetaProps = {
    author: Author;
    reviewers?: Reviewer[];
    readingTime: string;
    publishedAtLabel: string; // ex: 18.01.2026, às 23H12
};

export default function ArticleMeta({
    author,
    reviewers = [],
    readingTime,
    publishedAtLabel,
}: ArticleMetaProps) {
    return (
        <section
            aria-label="Informações do artigo"
            className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/40 p-5 md:flex-row md:items-center md:justify-between"
        >
            {/* Autor */}
            <div className="flex items-center gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-800">
                    <Image
                        src={author.avatar}
                        alt={`Foto de ${author.name}`}
                        fill
                        sizes="40px"
                        className="object-cover"
                    />
                </div>

                <div>
                    <p className="text-sm font-semibold text-slate-100">
                        Por: <span className="font-bold">{author.name}</span>
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                        <span className="inline-flex items-center gap-1">
                            <Clock size={14} />
                            {readingTime}
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <CalendarDays size={14} />
                            {publishedAtLabel}
                        </span>
                        {author.role && (
                            <span className="inline-flex items-center gap-1">
                                • {author.role}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Revisores */}
            {reviewers.length > 0 && (
                <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs font-medium text-slate-300">Revisado por:</p>

                    {reviewers.map((r) => (
                        <div key={r.name} className="flex items-center gap-2">
                            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-slate-800">
                                <Image
                                    src={r.avatar}
                                    alt={`Foto de ${r.name}`}
                                    fill
                                    sizes="32px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="leading-tight">
                                <p className="text-xs font-semibold text-slate-200">{r.name}</p>
                                {r.role && (
                                    <p className="text-[11px] text-slate-400">{r.role}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
