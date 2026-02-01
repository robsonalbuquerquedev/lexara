// src/lib/is-published-now.ts
export function isPublishedNow(publishedAtISO?: string | null): boolean {
    if (!publishedAtISO) return false;

    const publishedAt = Date.parse(publishedAtISO);

    if (Number.isNaN(publishedAt)) return false;

    return Date.now() >= publishedAt;
}
