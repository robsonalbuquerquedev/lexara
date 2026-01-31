import { absoluteUrl } from "./url";

export type BreadcrumbListItem = {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
};

export function breadcrumbItem(
    name: string,
    path: string,
    position: number
): BreadcrumbListItem {
    return {
        "@type": "ListItem",
        position,
        name,
        item: absoluteUrl(path),
    };
}
