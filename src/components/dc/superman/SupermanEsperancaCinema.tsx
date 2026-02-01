import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type SupermanEsperancaCinemaProps = {
    article: Article;
};

const SECTIONS = [
    { id: "o-farol-da-esperanca", label: "O farol da esperança" },
    { id: "o-simbolo-moral", label: "O símbolo moral" },
    { id: "crise-e-releitura", label: "Crise e releitura" },
    { id: "dilema-do-poder", label: "O dilema do poder" },
    { id: "esperanca-na-era-cinica", label: "Esperança na era cínica" },
    { id: "o-que-o-cinema-ganha", label: "O que o cinema ganha com ele" },
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

export default function SupermanEsperancaCinema({ article }: SupermanEsperancaCinemaProps) {
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
        about: [
            { "@type": "Thing", name: "Superman" },
            { "@type": "Thing", name: "DC" },
            { "@type": "Thing", name: "Cinema" },
            { "@type": "Thing", name: "Esperança" },
        ],
    };

    // 🔹 Schema
    const jsonLdBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            breadcrumbItem("Filmes & Séries", "/filmes-series", 1),
            breadcrumbItem("DC", article.categoryHref, 2),
            breadcrumbItem("Superman", article.topicHref, 3),
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
                id="ld-article-superman-esperanca-cinema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-superman-esperanca-cinema"
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
                            title="Ver a seção Superman"
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
                        caption="Quando o mundo escurece, o Superman funciona como um “farol narrativo”: ele aponta para a esperança — e obriga o cinema a justificar por que ainda vale acreditar."
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
                        id="o-farol-da-esperanca"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O farol da esperança
                    </h2>

                    <p className="mb-3">
                        O Superman funciona no cinema como um verdadeiro &quot;ponto fixo&quot; em narrativas onde tudo ao redor parece instável.
                        Não se trata apenas de superpoderes, efeitos visuais ou cenas grandiosas de ação, mas da mensagem simbólica que ele
                        carrega. Em histórias marcadas por crise — seja ela social, política ou profundamente pessoal — o personagem surge
                        como um lembrete incômodo e, ao mesmo tempo, necessário: mesmo quando o mundo parece quebrado, ainda é possível
                        escolher o bem.
                    </p>

                    <p className="mb-3">
                        É justamente por isso que o Superman reaparece com força em épocas nas quais o público demonstra cansaço do cinismo
                        constante. A figura do herói &quot;bom demais para ser verdade&quot; não soa ingênua por acaso; ela funciona como um choque
                        narrativo. Se esse personagem realmente existe dentro daquele universo, o filme é obrigado a encarar uma pergunta
                        desconfortável — e profundamente atual: o que você faz com alguém que pode fazer tudo, mas escolhe conscientemente
                        não dominar ninguém?
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: <strong>o Superman não é interessante por ser invencível</strong>, e sim por ser
                                uma promessa moral — alguém com poder absoluto que insiste em viver com limites humanos.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="o-simbolo-moral"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O símbolo moral
                    </h2>

                    <p className="mb-3">
                        No essencial, o Superman se estabelece no cinema como um símbolo de responsabilidade moral. Ele possui força
                        ilimitada, mas também carrega um limite interno muito claro: a consciência de que resolver tudo &quot;na marra&quot;
                        destruiria a liberdade que ele tenta proteger. Esse autocontrole é o ponto central do personagem e o que o
                        diferencia de figuras de poder que se justificam apenas pela capacidade de agir.
                    </p>

                    <p className="mb-3">
                        Quando essa ideia é levada para a narrativa cinematográfica, o Superman se transforma em um verdadeiro teste ético.
                        Se o herói é, de fato, &quot;bom&quot;, o roteiro precisa demonstrar <em>como</em> ele continua sendo bom em situações nas
                        quais seria fácil se justificar, impor sua vontade ou simplesmente desistir. Nesse processo, o personagem deixa
                        de ser apenas um salvador e vira um espelho: a audiência passa a se perguntar se ainda acredita em bondade quando
                        não há recompensa, aplauso ou garantia de vitória.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">Por que isso &quot;pega&quot; tanto?</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Porque esperança não é um sentimento fofo ou abstrato. No cinema, esperança é uma decisão consciente:
                                continuar tentando, mesmo quando o contexto aponta para o cinismo, para a desistência ou para soluções
                                fáceis baseadas apenas em força.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                O &quot;S&quot; no peito funciona como linguagem visual imediata: ele comunica &quot;proteção&quot; e
                                responsabilidade antes mesmo de o personagem dizer qualquer palavra.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="crise-e-releitura"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Crise e releitura
                    </h2>

                    <p className="mb-3">
                        Sempre que o mundo real muda, o Superman muda junto — ou, mais precisamente, muda a forma como o cinema decide
                        enquadrá-lo. Em períodos de otimismo cultural, o personagem costuma ser apresentado de maneira mais direta:
                        o herói surge, inspira e cumpre sua função simbólica sem grandes questionamentos. Já em tempos marcados por
                        insegurança e ansiedade coletiva, o próprio cinema passa a &quot;testar&quot; o símbolo, levantando dúvidas que
                        dialogam diretamente com o espírito da época.
                    </p>

                    <p className="mb-3">
                        Nesses contextos, as histórias perguntam: e se as pessoas não confiarem nele? e se o herói for visto com medo,
                        suspeita ou hostilidade? Essas leituras mais sombrias não precisam, necessariamente, destruir a esperança.
                        Pelo contrário: quando bem conduzidas, elas a aprofundam, deixando claro que esperança não é ausência de medo,
                        mas a decisão de continuar sendo luz mesmo quando o ambiente é hostil. O risco surge quando o filme confunde
                        &quot;realismo&quot; com &quot;descrença total&quot; — nesse ponto, o símbolo deixa de provocar reflexão e passa apenas
                        a esvaziar seu próprio significado.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="dilema-do-poder"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O dilema do poder
                    </h2>

                    <p className="mb-3">
                        O dilema central do Superman é ao mesmo tempo simples e cruel: <strong>se ele pode impedir tragédias, por que nem
                            sempre impede?</strong> No cinema, uma resposta convincente nunca pode ser &quot;porque o roteiro quis&quot;. A
                        explicação precisa ser ética. Agir sem limites, mesmo movido por boas intenções, pode rapidamente se transformar
                        em tirania — e o personagem sabe disso. Cada intervenção absoluta carrega o risco de substituir a escolha humana
                        pela vontade de alguém que, embora poderoso, não deveria decidir tudo.
                    </p>

                    <p className="mb-3">
                        Quando o cinema acerta esse ponto, o Superman deixa de ser apenas um herói funcional e se torna um personagem
                        genuinamente interessante. Ele é obrigado a escolher o tempo todo, e cada escolha tem custo narrativo e moral.
                        Ele perde, falha, hesita e carrega consequências, mas tenta preservar aquilo que considera inegociável: a
                        dignidade humana. É nessa tensão constante entre poder e limite que o símbolo se sustenta — e onde a esperança
                        deixa de ser ingênua para se tornar consciente.
                    </p>

                    <h2
                        id="esperanca-na-era-cinica"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Esperança na era cínica
                    </h2>

                    <p className="mb-3">
                        Nos últimos anos, grande parte da narrativa pop passou a recompensar a figura do &quot;anti-herói cansado&quot;,
                        alguém que já não acredita em ideais e responde ao mundo com ironia, descrença ou distanciamento emocional.
                        Esse tipo de abordagem pode render histórias interessantes, mas também cria um vício cultural perigoso:
                        a noção de que ser sincero é, necessariamente, ser amargo. Dentro desse cenário, o Superman surge quase como
                        um corpo estranho, caminhando na direção oposta dessa tendência.
                    </p>

                    <p className="mb-3">
                        Quando o personagem é apresentado como símbolo de esperança, ele lança um desafio direto à audiência:
                        &quot;você ainda consegue levar a sério alguém que acredita nas pessoas?&quot;. Se a resposta imediata for &quot;não&quot;,
                        talvez o problema não esteja no personagem, mas no nosso hábito contemporâneo de confundir bondade com ingenuidade.
                        O incômodo que o Superman provoca não vem de sua simplicidade moral, mas do espelho que ele oferece a um público
                        acostumado a desconfiar de qualquer ideal que não venha acompanhado de cinismo.
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
                        id="o-que-o-cinema-ganha"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O que o cinema ganha com ele
                    </h2>

                    <p className="mb-3">
                        O Superman força o cinema a lidar com ideias grandes e desconfortáveis: moral, responsabilidade, exemplo público
                        e fé no futuro. Quando essas camadas são ignoradas, o personagem se reduz a um simples &quot;cara forte voando&quot;,
                        visualmente impressionante, mas narrativamente vazio. A presença do Superman só se justifica plenamente quando
                        o filme entende que seu verdadeiro impacto não está na força física, e sim no peso simbólico que ele carrega.
                    </p>

                    <p className="mb-3">
                        Quando o cinema compreende esse símbolo, cada cena ganha potencial comunicativo. A simples presença do Superman
                        pode acalmar multidões, inspirar escolhas difíceis e criar coragem onde antes havia medo. Ele não precisa vencer
                        todas as lutas para cumprir sua função narrativa; muitas vezes, basta aparecer. Nesse gesto aparentemente simples,
                        o filme transmite uma mensagem poderosa e silenciosa: &quot;eu estou aqui&quot;. E, em tempos de incerteza, essa
                        afirmação por si só já é esperança em forma de imagem.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        O Superman representa esperança no cinema porque funciona como uma resposta narrativa para tempos de crise.
                        Ele não promete que tudo vai dar certo, nem oferece soluções fáceis para problemas complexos. O que ele
                        insiste, de forma quase teimosa, é que <strong>vale a pena tentar</strong>. Em um cenário cultural cada vez
                        marcado pelo ceticismo, essa insistência ganha peso simbólico e transforma o personagem em algo maior do
                        que um herói: ele se torna um lembrete ético.
                    </p>

                    <p className="mb-3">
                        As versões mais sombrias do personagem podem funcionar — e muitas vezes funcionam bem — quando permitem que
                        o símbolo atravesse a tempestade sem quebrar o seu núcleo. Compaixão, autocontrole e responsabilidade não são
                        acessórios do Superman, mas a base que sustenta sua relevância. O &quot;super&quot; que define o personagem
                        não está apenas na força física ou na grandiosidade das cenas, e sim no caráter que permanece intacto mesmo
                        sob pressão.
                    </p>

                    <p>
                        No fim, o Superman continua importando porque ele faz ao cinema uma pergunta que nunca deveria ser esquecida:
                        quando ninguém está olhando, quando não há aplauso nem garantia de vitória, você ainda escolhe ser bom?
                    </p>

                    <div className="not-prose my-12 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <p className="text-sm font-semibold text-slate-100">Continue no LEXARA</p>
                        <p className="mt-2 text-sm text-slate-300">
                            Quer ir além deste artigo? Explore a seção do Superman e descubra outras análises sobre símbolos,
                            dilemas morais e o papel da DC no cinema contemporâneo.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                                href={article.topicHref}
                                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
                            >
                                Ver a seção Superman <ArrowRight size={16} />
                            </Link>

                            <Link
                                href={article.categoryHref}
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                Explorar DC <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <h2
                        id="fontes"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Fontes & contexto
                    </h2>

                    <p className="mb-3">
                        As fontes listadas a seguir servem como base para informações verificáveis, como nomes, filmografias,
                        projetos anunciados e o contexto geral de estúdio envolvendo o Superman no cinema. Elas ajudam a situar
                        historicamente o personagem e suas diferentes fases audiovisuais, mas não substituem a análise crítica.
                        As interpretações, conexões temáticas e leituras simbólicas apresentadas ao longo do artigo são originais
                        do LEXARA e fazem parte de sua linha editorial.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.dc.com/" rel="noreferrer noopener" target="_blank">
                                Site oficial da DC — visão institucional, anúncios e catálogos de filmes e personagens
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/" rel="noreferrer noopener" target="_blank">
                                IMDb — dados de produção, créditos, elencos e histórico cinematográfico
                            </a>
                        </li>
                        <li>
                            <a href="https://en.wikipedia.org/wiki/Superman_in_film" rel="noreferrer noopener" target="_blank">
                                Wikipedia — panorama histórico do Superman no cinema (utilize sempre com leitura crítica)
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> esta análise é intencionalmente cautelosa. Projetos de estúdio mudam,
                        visões criativas evoluem e interpretações se transformam ao longo do tempo. A proposta aqui é mapear
                        tendências, expectativas e riscos narrativos — sem vender certeza onde ela simplesmente não existe.
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
