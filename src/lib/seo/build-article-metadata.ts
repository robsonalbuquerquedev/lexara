import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/url";
import { isPublishedNow } from "@/lib/is-published-now";

type ArticleLike = {
    slug: string;
    publishedAtISO: string;
};

type BuildArticleMetadataInput = {
    article: ArticleLike;
    title: string;
    description: string;
    keywords: string[];
    ogDescription?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    ogImagePath?: string;
    ogImageAlt?: string;
    category?: string;
    creator?: string;
    publisher?: string;
    siteName?: string;
    locale?: string;
};

export function buildArticleMetadata(input: BuildArticleMetadataInput): Metadata {
    const {
        article,
        title,
        description,
        keywords,
        ogDescription,
        twitterTitle,
        twitterDescription,
        ogImagePath = "/og/og-filmes-series-dc.png",
        ogImageAlt,
        category = "Filmes & Séries",
        creator = "Robson Albuquerque",
        publisher = "LEXARA",
        siteName = "LEXARA",
        locale = "pt_BR",
    } = input;

    const isPublished = isPublishedNow(article.publishedAtISO);

    const canonical = absoluteUrl(article.slug);
    const ogImage = absoluteUrl(ogImagePath);

    const robots: Metadata["robots"] = isPublished
        ? {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        }
        : {
            index: false,
            follow: false,
            googleBot: {
                index: false,
                follow: false,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        };

    const finalOgDescription = ogDescription ?? description;
    const finalTwitterTitle = twitterTitle ?? title;
    const finalTwitterDescription = twitterDescription ?? description;

    const finalOgAlt =
        ogImageAlt ?? `${publisher} — ${title.replace(" | LEXARA", "")}`;

    return {
        title: { absolute: title },
        description,
        keywords,
        alternates: { canonical },
        robots,

        openGraph: {
            type: "article",
            url: canonical,
            title,
            description: finalOgDescription,
            siteName,
            locale,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: finalOgAlt,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: finalTwitterTitle,
            description: finalTwitterDescription,
            images: [ogImage],
        },

        category,
        creator,
        publisher,
    };
}
