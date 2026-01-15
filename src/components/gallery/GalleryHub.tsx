"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/galleryImages";

const ITEMS_PER_PAGE = 20;

export default function GalleryHub() {
    const [page, setPage] = useState(1);

    const totalPages = useMemo(() => {
        return Math.max(1, Math.ceil(galleryImages.length / ITEMS_PER_PAGE));
    }, []);

    const paginatedImages = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return galleryImages.slice(start, end);
    }, [page]);

    const goToPage = (nextPage: number) => {
        const safePage = Math.min(Math.max(nextPage, 1), totalPages);
        setPage(safePage);

        // Volta para o topo da galeria (melhora UX)
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            {/* Header */}
            <header className="text-center mb-10">
                <div className="flex justify-center mb-4">
                    <ImageIcon className="w-10 h-10 text-slate-100" />
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-100">
                    Galeria do LEXARA
                </h1>

                <p className="mt-4 max-w-3xl mx-auto text-slate-300 text-sm md:text-lg leading-relaxed">
                    Uma coleção visual com artes, capas e imagens usadas nos conteúdos do LEXARA.
                    Explore, aprecie, utilize como wallpaper ou apenas revisite universos que marcaram
                    filmes, séries, games e narrativas icônicas.
                </p>

                {/* Barra de paginação (topo) */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <div className="text-xs md:text-sm text-slate-300">
                        Exibindo{" "}
                        <span className="font-semibold text-slate-100">
                            {paginatedImages.length}
                        </span>{" "}
                        de{" "}
                        <span className="font-semibold text-slate-100">
                            {galleryImages.length}
                        </span>{" "}
                        imagens • Página{" "}
                        <span className="font-semibold text-slate-100">{page}</span> de{" "}
                        <span className="font-semibold text-slate-100">{totalPages}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => goToPage(page - 1)}
                            disabled={page === 1}
                            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10 transition disabled:opacity-40 disabled:cursor-not-allowed"
                            aria-label="Página anterior"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Anterior
                        </button>

                        <button
                            type="button"
                            onClick={() => goToPage(page + 1)}
                            disabled={page === totalPages}
                            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition disabled:opacity-40 disabled:cursor-not-allowed"
                            aria-label="Próxima página"
                        >
                            Próximo
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Grid */}
            <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {paginatedImages.map((image, index) => (
                    <motion.article
                        key={image.src}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                    >
                        <Image
                            src={image.src}
                            alt={image.title}
                            width={600}
                            height={400}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="p-4">
                                <h3 className="text-sm font-semibold text-white">
                                    {image.title}
                                </h3>
                                <p className="text-xs text-slate-300 mb-3">{image.category}</p>

                                <a
                                    href={image.src}
                                    download
                                    className="inline-flex items-center gap-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition"
                                >
                                    <Download className="w-4 h-4" />
                                    Download
                                </a>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </section>

            {/* Paginação (rodapé) — repetida para não obrigar a voltar pro topo */}
            <div className="mt-10 flex items-center justify-center gap-2">
                <button
                    type="button"
                    onClick={() => goToPage(page - 1)}
                    disabled={page === 1}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Anterior
                </button>

                <span className="text-xs md:text-sm text-slate-300 px-2">
                    Página <span className="font-semibold text-slate-100">{page}</span> de{" "}
                    <span className="font-semibold text-slate-100">{totalPages}</span>
                </span>

                <button
                    type="button"
                    onClick={() => goToPage(page + 1)}
                    disabled={page === totalPages}
                    className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    Próximo
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
