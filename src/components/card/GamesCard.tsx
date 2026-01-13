import Link from "next/link";
import { categoryGames } from "@/data/categoryGames";

export default function GamesCard() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <header className="mb-12 text-center">
                <h1 className="text-3xl font-bold tracking-tight">Games</h1>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                    Explorações detalhadas de jogos, mecânicas, histórias e experiências
                    que definem o universo dos games no console e no PC.
                </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryGames.map((category) => {
                    const Icon = category.icon;

                    return (
                        <Link
                            key={category.title}
                            href={category.href}
                            className="group rounded-2xl border border-border p-6 transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <article className="flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <Icon className="w-6 h-6 text-primary" />
                                    <h2 className="text-xl font-semibold">{category.title}</h2>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {category.description}
                                </p>

                                <span className="mt-auto pt-6 text-sm font-medium text-primary group-hover:underline">
                                    Explorar →
                                </span>
                            </article>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
