export const SITE_URL = "https://lexara.com.br";

export function absoluteUrl(path: string = "") {
    if (!path) return SITE_URL;
    if (path.startsWith("http")) return path;
    return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
