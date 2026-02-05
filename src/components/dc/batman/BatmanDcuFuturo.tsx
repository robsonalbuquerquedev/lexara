import Link from "next/link";
import Script from "next/script";
import { Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type BatmanDcuFuturoProps = {
    article: Article;
};

const SECTIONS = [
    { id: "contexto-dcu", label: "O que muda com o DCU" },
    { id: "por-que-batman-importa", label: "Por que o Batman é peça-chave" },
    { id: "expectativas", label: "Expectativas: o que faria sentido" },
    { id: "riscos", label: "Riscos: onde o plano pode escorregar" },
    { id: "caminhos", label: "Caminhos possíveis" },
    { id: "o-que-observar", label: "O que observar a partir de agora" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    // Mantém simples e previsível. A label final já está pronta em ARTICLE.publishedLabel.
    return iso;
}

function isPublishedNow(publishedAtISO: string) {
    return Date.now() >= Date.parse(publishedAtISO);
}

function AdSlot({ label }: { label: string }) {
    // Placeholder para seu componente real de anúncio.
    return (
        <aside
            aria-label={label}
            className="my-10 rounded-2xl border border-slate-800 bg-slate-950/40 p-6 text-center"
        >
            <p className="text-xs text-slate-400">{label}</p>
            <p className="mt-2 text-sm text-slate-300">
                Espaço reservado para anúncio (AdSense) — carregado conforme consentimento.
            </p>
        </aside>
    );
}

export default function BatmanDcuFuturo({ article }: BatmanDcuFuturoProps) {
    // ✅ Publicação programada (#1): antes do horário, o artigo NÃO existe publicamente.
    if (!isPublishedNow(article.publishedAtISO)) {
        return (
            <section className="mx-auto max-w-2xl py-20 text-center">
                <h1 className="text-2xl font-bold">Publicação programada</h1>

                <p className="mt-4 text-slate-400">
                    Este artigo ficará disponível em {article.publishedAtLabel}.
                </p>
            </section>
        );
    }

    const jsonLdArticle = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.subtitle,
        datePublished: article.publishedAtISO,
        dateModified: article.publishedAtISO,
        author: {
            "@type": "Person",
            name: article.author.name,
        },
        publisher: {
            "@type": "Organization",
            name: "LEXARA",
        },
        mainEntityOfPage: article.slug,
        image: [article.coverImage.src],
        about: [{ "@type": "Thing", name: "Batman" }, { "@type": "Thing", name: "DCU" }],
    };

    // 🔹 Schema
    const jsonLdBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            breadcrumbItem("Filmes & Séries", "/filmes-series", 1),
            breadcrumbItem("DC", article.categoryHref, 2),
            breadcrumbItem("Batman", article.topicHref, 3),
            breadcrumbItem(article.title, article.slug, 4),
        ],
    };

    // Vídeo é opcional: coloque um embed real quando quiser (ou deixe null).
    const video = null as null | {
        embedUrl: string;
        title: string;
        heading: string;
        description: string;
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-batman-dcu-futuro"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-batman-dcu-futuro"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
            />

            <article className="mx-auto w-full max-w-4xl px-6 py-14">
                <header className="mb-10">
                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href={article.categoryHref}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-200 hover:border-slate-700"
                        >
                            <Shield size={14} />
                            {article.badge}
                        </Link>

                        <Link
                            href={article.topicHref}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/30 px-3 py-1 text-xs text-slate-300 hover:border-slate-700 hover:text-slate-100"
                            title="Ver a seção Batman"
                        >
                            <Film size={14} />
                            {article.topic}
                        </Link>
                    </div>

                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-100 md:text-5xl lg:text-6xl">
                        {article.title}
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                        {article.subtitle}
                    </p>

                    <ArticleMeta
                        author={{
                            name: article.author.name,
                            avatar: article.author.avatarSrc,
                            role: article.author.role,
                        }}
                        reviewers={article.reviewers.map((r) => ({
                            name: r.name,
                            avatar: r.avatarSrc,
                            role: r.role,
                        }))}
                        readingTime={article.readingTime}
                        publishedAtLabel={article.publishedAtLabel}
                    />

                    <ArticleCover
                        src={article.coverImage.src}
                        alt={article.coverImage.alt}
                        caption="O Batman sempre volta — a questão é: em qual forma, e com qual impacto no DCU?"
                        priority
                        aspect="16/9"
                    />
                </header>

                <nav
                    aria-label="Sumário do artigo"
                    className="mb-10 rounded-2xl border border-slate-800 bg-slate-950/40 p-5"
                >
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-100">
                        <List size={16} />
                        Neste artigo
                    </div>

                    <ul className="grid gap-2 md:grid-cols-2">
                        {SECTIONS.map((s) => (
                            <li key={s.id}>
                                <a
                                    href={`#${s.id}`}
                                    className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-900/40 hover:text-slate-100"
                                >
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* <AdSlot label="Anúncio (Topo do artigo)" /> */}

                <section className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-slate-100">
                    <h2
                        id="contexto-dcu"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O que muda com o DCU
                    </h2>

                    <p className="mb-3">
                        Quando um estúdio &quot;reinicia&quot; um universo, ele não está apenas trocando atores, mudando o logo ou ajustando o tom do marketing.
                        Ele está redefinindo as regras do jogo: o que é canônico, qual é o ponto de partida, quais personagens carregam o peso do mundo
                        e, principalmente, qual promessa narrativa será entregue ao público daqui para frente. No caso do DCU, essa mudança mexe direto
                        com a expectativa de coerência — e é aí que o Batman vira peça central, porque poucos personagens são tão populares, tão exigidos
                        e tão comparados quanto ele.
                    </p>

                    <p className="mb-3">
                        A promessa do DCU é organização: um plano com começo, meio e continuidade, onde cada filme parece parte de algo maior e não um
                        &quot;evento isolado&quot; tentando se salvar sozinho. Mas o risco vem no mesmo pacote. Se esse plano soar como &quot;projeto de marketing&quot; em vez
                        de visão criativa, o público percebe rápido — e com o Batman, essa percepção é ainda mais cruel, porque o personagem já foi vivido
                        por versões muito diferentes no cinema, cada uma com seus acertos, erros e fãs fiéis. Em outras palavras: se o encaixe não parecer
                        natural, a sensação de artificialidade aparece antes mesmo da história engrenar.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: o Batman funciona como termômetro do universo. Se ele estiver bem encaixado, o DCU parece coerente e sólido.
                                Se ele parecer &quot;puxado pelo braço&quot;, o universo balança — e o público sente isso antes de qualquer grande crossover.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="por-que-batman-importa"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Por que o Batman é peça-chave
                    </h2>

                    <p className="mb-3">
                        O Batman tem duas vantagens raras dentro do cinema de super-heróis: ele é imediatamente reconhecível em qualquer versão
                        e consegue existir em quase qualquer tom narrativo — do detetive urbano ao épico grandioso, do sombrio realista ao
                        fantástico. Essa flexibilidade é uma força enorme, porque permite reinventar o personagem sem quebrar sua essência.
                        Mas ela também carrega um risco evidente: quando não há direção clara, essa versatilidade deixa de ser riqueza e vira
                        bagunça, com versões que não conversam entre si.
                    </p>

                    <p className="mb-3">
                        Em um universo compartilhado como o DCU, o Batman não pode ser apenas &quot;o personagem popular&quot; que aparece para agradar
                        fãs ou inflar expectativas. Ele precisa cumprir uma função narrativa bem definida. Em alguns momentos, isso significa
                        atuar como limite moral; em outros, como cérebro estratégico que enxerga o tabuleiro inteiro; em outros ainda, como o
                        símbolo humano em um mundo habitado por deuses, alienígenas e criaturas quase invencíveis. Sem essa função clara, o
                        personagem perde peso — e, junto com ele, o próprio universo perde equilíbrio.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">Pergunta que organiza tudo</p>
                            <p className="mt-2 text-sm text-slate-300">
                                O Batman do DCU será o centro que organiza o universo ao seu redor ou uma engrenagem essencial entre várias outras
                                peças igualmente importantes?
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Se ele dominar demais, rouba o brilho dos outros personagens. Se aparecer pouco ou sem propósito, o universo perde
                                um de seus pilares narrativos mais fortes.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="expectativas"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Expectativas: o que faria sentido
                    </h2>

                    <p className="mb-3">
                        Um caminho narrativo especialmente promissor para o Batman no DCU é o do herói
                        &quot;estratégico&quot;: menos focado em provar força física e mais dedicado a criar planos,
                        investigar padrões, antecipar ameaças e tomar decisões difíceis que afetam não apenas
                        a si mesmo, mas todo o universo ao redor. Essa abordagem funciona melhor em um cenário
                        compartilhado, onde nem tudo se resolve no soco e onde inteligência, preparo e leitura
                        de contexto podem ser tão decisivos quanto poder bruto.
                    </p>

                    <p className="mb-3">
                        Outro ponto que faz sentido fortalecer é Gotham como um verdadeiro &quot;microcosmo&quot;.
                        Em vez de ser apenas pano de fundo, a cidade pode representar os problemas reais
                        que o DCU corre o risco de diluir: crime organizado, corrupção sistêmica, medo cotidiano
                        e escolhas morais ambíguas. Esse contraste direto com o lado mais fantástico do universo —
                        repleto de deuses, criaturas e ameaças cósmicas — ajuda a manter o Batman ancorado no
                        humano, reforçando sua relevância mesmo quando o palco se torna grandioso demais.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="riscos"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Riscos: onde o plano pode escorregar
                    </h2>

                    <p className="mb-3">
                        O maior risco para o Batman no DCU é o da &quot;identidade duplicada&quot;. Se o público estiver
                        acompanhando o personagem em uma linha bem definida — por exemplo, uma versão mais
                        investigativa, contida e fechada em si mesma — e, ao mesmo tempo, o universo compartilhado
                        apresentar outra interpretação completamente diferente, a experiência deixa de ser
                        enriquecedora e vira ruído. Em vez de múltiplas camadas, o espectador sente quebra de
                        continuidade, dificuldade de conexão emocional e, em casos mais extremos, simples confusão.
                    </p>

                    <p className="mb-3">
                        Outro risco central é o tom. Um universo cinematográfico pode — e deve — ter variedade,
                        mas ele precisa de uma &quot;cola&quot; perceptível. Se o Batman parecer sair de um filme e entrar
                        em outro sem transição clara, como se cada obra existisse em um mundo à parte, a imersão
                        se quebra. Para um personagem tão simbólico, essa instabilidade tonal não passa despercebida
                        e pode enfraquecer justamente aquilo que deveria dar unidade ao DCU.
                    </p>

                    <h2
                        id="caminhos"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Caminhos possíveis
                    </h2>

                    <p className="mb-3">
                        Existem rotas narrativas que podem funcionar sem cair em uma &quot;guerra de versões&quot;.
                        Uma das mais sólidas é posicionar o Batman do DCU como um herói já em atividade,
                        com histórico, aliados e impacto real dentro do mundo em que vive. Isso evita a
                        repetição exaustiva de uma história de origem que o público já conhece de cor e
                        permite que o foco esteja nas decisões, nas consequências e no papel estratégico
                        que o personagem ocupa dentro do universo compartilhado.
                    </p>

                    <p className="mb-3">
                        Outro caminho interessante é usar o Batman como ponte entre mundos. Ele continua
                        sendo profundamente humano, limitado fisicamente e guiado por escolhas morais,
                        mas é obrigado a lidar com o impossível: ameaças cósmicas, entidades quase divinas
                        e conflitos em escala global. Essa posição intermediária cria senso de escala sem
                        eliminar a sensação de perigo, porque cada vitória ainda parece conquistada — e
                        não garantida por poder absoluto.
                    </p>

                    {video ? (
                        <ArticleVideo
                            embedUrl={video.embedUrl}
                            title={video.title}
                            heading={video.heading}
                            description={video.description}
                        />
                    ) : null}

                    <h2
                        id="o-que-observar"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O que observar a partir de agora
                    </h2>

                    <p className="mb-3">
                        Para prever se o Batman realmente vai &quot;encaixar&quot; no DCU, vale observar menos os anúncios
                        grandiosos e mais os sinais práticos que costumam passar despercebidos. O cronograma de
                        lançamentos, a consistência de tom entre diferentes projetos e, principalmente, a forma
                        como as histórias se conectam dizem muito mais do que trailers ou promessas em entrevistas.
                        Quando essa conexão acontece de maneira orgânica, sem parecer uma obrigação imposta pelo
                        estúdio, o universo começa a ganhar credibilidade.
                    </p>

                    <p className="mb-3">
                        No fim das contas, o Batman no DCU precisa cumprir uma promessa simples, porém exigente:
                        ser essencial. Não por hype, não por nostalgia, mas por função narrativa. Se o personagem
                        tiver um papel claro e necessário dentro do todo, o universo ganha estabilidade e direção.
                        Se isso não acontecer, o resultado tende a ser apenas mais uma fase de tentativa, marcada
                        por ajustes constantes e pela sensação de que algo fundamental nunca se encaixou de vez.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        O futuro do Batman no DCU pode, sim, ser brilhante — mas ele está longe de ser automático.
                        A força histórica do personagem joga a favor, ao mesmo tempo em que eleva o nível de
                        cobrança a um patamar difícil de ignorar. Quanto maior o símbolo, maior a expectativa
                        do público e, consequentemente, menor a margem de erro para decisões narrativas,
                        escolhas de tom e posicionamento dentro do universo compartilhado.
                    </p>

                    <p className="mb-3">
                        Se o DCU acertar a função do Batman — a forma como ele investiga, decide, se antecipa
                        aos conflitos e influencia o tabuleiro como um todo — o personagem se transforma na
                        cola que mantém o universo coeso. Mas, se houver falhas de tom, coerência ou propósito,
                        essa mesma figura central pode virar peso, concentrando críticas e evidenciando
                        desequilíbrios que se espalham por todo o projeto.
                    </p>

                    <p>
                        No fim das contas, o Batman sempre volta. A questão que fica não é se ele retornará,
                        mas se voltará para sustentar o DCU como seu pilar mais sólido… ou para revelar,
                        de forma inevitável, as rachaduras que o universo tentou esconder.
                    </p>

                    {/* CTA interno — fechamento editorial (Batman no DCU) */}
                    <ContinueNoLexara
                        description="Quer ampliar o mapa do DCU com o mesmo olhar editorial? Vale comparar os três eixos que sustentam esse universo: Batman como vigilância, custo e trauma; Superman como esperança, futuro e ideal; e a Mulher-Maravilha como ponte ética entre força e compaixão. Lidos juntos, eles mostram como a reconstrução do DCU depende tanto de símbolos quanto de escolhas."
                        links={[
                            {
                                href: "/filmes-series/dc/superman/superman-dcu-futuro",
                                label: "Superman no DCU",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/dc/mulher-maravilha/mulher-maravilha-futuro-dcu",
                                label: "Mulher-Maravilha no DCU",
                            },
                            {
                                href: "/filmes-series/dc/batman",
                                label: "Voltar à seção Batman",
                            },
                            {
                                href: "/filmes-series/dc",
                                label: "Explorar o hub DC",
                            },
                        ]}
                    />

                    <h2
                        id="fontes"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Fontes & contexto
                    </h2>

                    <p className="mb-3">
                        As fontes listadas abaixo são utilizadas como base para dados verificáveis — como nomes,
                        projetos anunciados, cronologia e contexto geral de estúdio. Elas funcionam como pontos
                        de ancoragem factual para a análise. A leitura crítica, a interpretação temática e as
                        conclusões apresentadas ao longo do artigo são originais do LEXARA e refletem sua proposta
                        editorial.
                    </p>

                    <ul>
                        <li>
                            <a
                                href="https://www.dc.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-slate-500 hover:decoration-slate-300"
                            >
                                DC Studios
                            </a>{" "}
                            — comunicados oficiais e anúncios institucionais (quando disponíveis).
                        </li>
                        <li>
                            <a
                                href="https://www.imdb.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-slate-500 hover:decoration-slate-300"
                            >
                                IMDb
                            </a>{" "}
                            e{" "}
                            <a
                                href="https://pt.wikipedia.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-slate-500 hover:decoration-slate-300"
                            >
                                Wikipedia
                            </a>
                            : referência rápida para créditos, filmografias e dados básicos de produção.
                        </li>
                        <li>
                            Entrevistas e matérias de veículos especializados em cinema — utilizadas como
                            contexto editorial, e não como &quot;verdade final&quot; sobre projetos em desenvolvimento.
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> esta análise adota um tom deliberadamente cauteloso.
                        Projetos de estúdio mudam com frequência, especialmente em universos compartilhados.
                        O objetivo aqui é mapear expectativas, riscos e possibilidades sem vender certezas
                        onde elas ainda não existem.
                    </p>
                </section>

                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em <span className="text-slate-300">{article.publishedAtLabel}</span>.{" "}
                        <span className="text-slate-500">({formatISOToDateLabel(article.publishedAtISO)})</span>
                    </p>
                </footer>
            </article>
        </>
    );
}
