"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { getLatestArticles } from "@/data/articles/allArticles";

export default function HomeLatestCarousel() {
    const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true });
    const items = getLatestArticles(8);

    return (
        <section className="w-full py-20" aria-label="Últimos publicados">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-10 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold">Últimos publicados</h2>
                    <p className="text-slate-400 mt-4 text-sm md:text-base max-w-3xl mx-auto">
                        Os artigos mais recentes do LEXARA — pra você começar pelo que está fresco.
                    </p>

                    <div className="mt-5">
                        <Link
                            href="/filmes-series"
                            className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
                        >
                            Ver todos os artigos →
                        </Link>
                    </div>
                </div>

                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex gap-6">
                        {items.map((item) => (
                            <article
                                key={item.href}
                                className="min-w-[280px] md:min-w-[340px] lg:min-w-[380px]
                  rounded-2xl overflow-hidden border border-slate-800
                  bg-slate-900/40 backdrop-blur
                  hover:border-indigo-500/40 focus-within:border-indigo-500/40
                  transition-colors"
                            >
                                <Link href={item.href} className="block">
                                    <div className="relative h-44 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 380px"
                                            className="object-cover"
                                            priority={false}
                                        />
                                    </div>
                                </Link>

                                <div className="p-6 space-y-3">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-xs uppercase tracking-wide text-indigo-400">
                                            {item.category}
                                        </span>

                                        {item.publishedAtISO && (
                                            <time
                                                className="text-xs text-slate-500"
                                                dateTime={item.publishedAtISO}
                                            >
                                                {new Date(item.publishedAtISO).toLocaleDateString("pt-BR")}
                                            </time>
                                        )}
                                    </div>

                                    <h3 className="text-base md:text-lg font-semibold leading-snug">
                                        <Link href={item.href} className="hover:underline underline-offset-4">
                                            {item.title}
                                        </Link>
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                                        {item.excerpt}
                                    </p>

                                    <Link
                                        href={item.href}
                                        className="inline-block text-sm font-medium text-indigo-400 hover:text-indigo-300"
                                        aria-label={`Ler agora: ${item.title}`}
                                    >
                                        Ler agora →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
