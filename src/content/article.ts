export type ArticleAuthor = {
    name: string;
    avatarSrc: string;
    role?: string;
};

export type ArticleReviewer = {
    name: string;
    avatarSrc: string;
    role?: string;
};

export type Article = {
    title: string;
    subtitle: string;
    badge: string;
    categoryHref: string;
    topic: string;
    topicHref: string;
    slug: string;

    publishedAtISO: string;      // usado pelo generateMetadata e agendamento
    publishedAtLabel: string;      // usado no UI
    readingTime: string;

    coverImage: {
        src: string;
        alt: string;
    };

    author: ArticleAuthor;
    reviewers: ArticleReviewer[];
};

const DEFAULT_AUTHOR: ArticleAuthor = {
    name: "Robson Albuquerque",
    avatarSrc: "/images/about/robson.png",
    role: "Autor",
};

const DEFAULT_REVIEWERS: ArticleReviewer[] = [
    { name: "Emanuel José", role: "Revisão", avatarSrc: "/images/about/emanuel.jpeg" },
    { name: "Celso Lopes", role: "Revisão", avatarSrc: "/images/about/celso.jpeg" },
];

type CreateArticleInput = Omit<Article, "author" | "reviewers"> & {
    author?: ArticleAuthor;
    reviewers?: ArticleReviewer[];
};

export function createArticle(input: CreateArticleInput): Article {
    return {
        ...input,
        author: input.author ?? DEFAULT_AUTHOR,
        reviewers: input.reviewers ?? DEFAULT_REVIEWERS,
    };
}
