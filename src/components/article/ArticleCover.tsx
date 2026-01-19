import Image from "next/image";

type ArticleCoverProps = {
    src: string;
    alt: string;

    /** Optional caption below the image */
    caption?: string;

    /** Aspect ratio of the cover area (default 16/9) */
    aspect?: "16/9" | "4/3" | "1/1" | "21/9";

    /** If true, Next will preload the image (good for top-of-article cover) */
    priority?: boolean;

    /** Optional sizes override */
    sizes?: string;

    /** Optional extra classes for outer figure */
    className?: string;
};

function getAspectClass(aspect: ArticleCoverProps["aspect"]) {
    switch (aspect) {
        case "4/3":
            return "aspect-[4/3]";
        case "1/1":
            return "aspect-square";
        case "21/9":
            return "aspect-[21/9]";
        case "16/9":
        default:
            return "aspect-[16/9]";
    }
}

export default function ArticleCover({
    src,
    alt,
    caption,
    aspect = "16/9",
    priority = false,
    sizes = "(max-width: 768px) 100vw, 768px",
    className = "",
}: ArticleCoverProps) {
    const aspectClass = getAspectClass(aspect);

    return (
        <figure
            className={[
                "mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40",
                className,
            ].join(" ")}
        >
            <div className={["relative w-full", aspectClass].join(" ")}>
                {/* Background fill (decorative blur) */}
                <Image
                    src={src}
                    alt=""
                    fill
                    priority={false}
                    sizes={sizes}
                    className="object-cover scale-110 blur-2xl opacity-30"
                    aria-hidden="true"
                />

                {/* Atmospheric overlay (LEXARA look) */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-900/40 to-indigo-950/60" />

                {/* Foreground glass frame */}
                <div className="absolute inset-0 grid place-items-center p-4 sm:p-6">
                    <div
                        className="
              relative h-full w-full max-w-4xl rounded-xl
              border border-white/10
              bg-white/5 backdrop-blur-md
              shadow-[0_20px_60px_rgba(0,0,0,0.65)]
              ring-1 ring-white/5
            "
                    >
                        {/* Subtle highlight */}
                        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40" />

                        {/* Image (no cropping) */}
                        <div className="relative h-full w-full p-3 sm:p-4">
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                priority={priority}
                                sizes={sizes}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {caption ? (
                <figcaption className="px-6 pb-4 pt-3">
                    <p
                        className="
        mx-auto max-w-3xl
        text-[0.7rem] sm:text-xs
        leading-relaxed
        tracking-wide
        text-slate-400/90
      "
                    >
                        <span className="mr-2 inline-block h-[1px] w-6 align-middle bg-slate-500/40" />
                        {caption}
                    </p>
                </figcaption>
            ) : null}
        </figure>
    );
}
