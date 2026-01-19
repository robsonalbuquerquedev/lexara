type ArticleVideoProps = {
    /** YouTube embed URL (prefer youtube-nocookie) */
    embedUrl: string;

    /** Iframe title (accessibility + SEO) */
    title: string;

    /** Small heading above the video */
    heading?: string;

    /** Editorial helper text */
    description?: string;

    /** Extra wrapper classes if needed */
    className?: string;
};

export default function ArticleVideo({
    embedUrl,
    title,
    heading = "Vídeo (opcional): trailer oficial",
    description = "Dica editorial: use trailers oficiais para enriquecer a leitura sem depender de trechos do filme.",
    className = "",
}: ArticleVideoProps) {
    return (
        <div
            className={[
                "not-prose my-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/30",
                className,
            ].join(" ")}
        >
            {/* Editorial context */}
            <div className="px-5 py-4">
                <p className="text-sm font-semibold text-slate-100">{heading}</p>
                <p className="mt-1 text-xs text-slate-400">{description}</p>
            </div>

            {/* Video */}
            <div className="relative aspect-video w-full">
                <iframe
                    className="absolute inset-0 h-full w-full"
                    src={embedUrl}
                    title={title}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
