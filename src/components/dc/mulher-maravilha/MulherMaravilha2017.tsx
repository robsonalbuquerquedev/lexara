"use client";

import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type MulherMaravilha2017Props = {
    article: Article;
};

const SECTIONS = [
    { id: "abertura", label: "Por que este filme importa" },
    { id: "mito-e-humanidade", label: "Mito + humanidade: o coração da Diana" },
    { id: "guerra-e-esperanca", label: "Guerra, esperança e o dilema moral" },
    { id: "linguagem", label: "Direção e linguagem: encanto sem cinismo" },
    { id: "impacto", label: "Impacto cultural: o que mudou na DC" },
    { id: "o-que-envelhece", label: "O que envelhece bem (e o que não)" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function isPublishedNow(publishedAtISO: string) {
    return new Date(publishedAtISO).getTime() <= Date.now();
}

export default function MulherMaravilha2017({ article }: MulherMaravilha2017Props) {
    // ✅ Publicação programada: antes do horário, o artigo NÃO existe publicamente.
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

    const canonicalUrl = `https://lexara.com.br${article.slug}`;

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
        mainEntityOfPage: canonicalUrl,
        image: [`https://lexara.com.br${article.coverImage.src}`],
        about: [
            { "@type": "Thing", name: "Mulher-Maravilha" },
            { "@type": "Thing", name: "Wonder Woman (2017)" },
            { "@type": "Thing", name: "DC" },
        ],
    };

    const jsonLdBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            breadcrumbItem("Filmes & Séries", "/filmes-series", 1),
            breadcrumbItem("DC", article.categoryHref, 2),
            breadcrumbItem("Mulher-Maravilha", article.topicHref, 3),
            breadcrumbItem(article.title, article.slug, 4),
        ],
    };

    // ✅ Vídeo (apoio): trailer oficial para calibrar o tom.
    // Observação: se quiser, troque o embed por um ID específico do trailer oficial que você preferir.
    const video = {
        embedUrl: "https://www.youtube-nocookie.com/embed/1Q8fG0TtVAY",
        title: "Mulher-Maravilha (2017) — Trailer",
        heading: "Vídeo (apoio): trailer para sentir o tom do filme",
        description:
            "O trailer ajuda a perceber o contraste do filme: guerra e beleza, ação e delicadeza, mito e humanidade.",
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-mulher-maravilha-2017"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-mulher-maravilha-2017"
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
                            title="Ver a seção Mulher-Maravilha"
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
                        caption="O encanto do filme nasce quando a força vira compaixão — não apenas espetáculo."
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

                <section className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-slate-100">
                    <h2
                        id="abertura"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Por que este filme importa
                    </h2>

                    <p className="mb-3">
                        Em 2017, a DC precisava de uma coisa simples — e justamente por isso difícil — para voltar a
                        conversar com o público sem parecer que estava sempre &quot;corrigindo rota&quot;: <strong>encanto</strong>.
                        Não a leveza automática das piadas, nem o cinismo que finge maturidade, nem um espetáculo que grita
                        importância o tempo inteiro. O que faltava era aquela sensação antiga (e poderosa) de que o
                        heroísmo pode ser bonito sem ser ingênuo — bonito porque escolhe significado, não porque foge da
                        realidade.
                    </p>

                    <p className="mb-3">
                        <em>Mulher-Maravilha</em> funciona porque coloca Diana Prince como ideia em movimento: ela não é só
                        uma guerreira impossível, é um <strong>símbolo testado pelo mundo real</strong>, colocado diante de
                        gente comum, decisões ruins, estruturas injustas e uma guerra que parece não ter fundo. E quanto
                        mais o filme confia nessa tensão — a de um mito atravessando um mundo imperfeito — mais ele se
                        fortalece. É nesse ponto que a narrativa acerta em cheio: força, quando aparece sozinha, vira só
                        barulho; força, quando vem com compaixão, vira direção.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA:{" "}
                                <strong>o melhor heroísmo não é o que vence — é o que não endurece.</strong>
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="mito-e-humanidade"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Mito + humanidade: o coração da Diana
                    </h2>

                    <p className="mb-3">
                        O filme acerta ao construir Diana como alguém que nasce do mito, mas aprende no contato com o
                        humano. Vinda de um lugar onde o bem e o mal parecem mais nítidos, ela chega ao chamado &quot;mundo dos
                        homens&quot; com um olhar quase inocente — e isso não é fragilidade. É <strong>clareza</strong>. Uma
                        clareza que não foi ainda corroída por justificativas, por cinismos ou pela normalização da
                        violência.
                    </p>

                    <p className="mb-3">
                        Essa clareza, no entanto, vira conflito quando encontra uma realidade suja, confusa e cheia de
                        &quot;meios-termos&quot;. Diana não entende por que o mundo aceita o horror como rotina, por que a guerra
                        pode virar estatística ou por que a crueldade precisa sempre de uma desculpa elegante. É nesse
                        choque que nasce a pergunta central do filme — e da personagem no cinema:{" "}
                        <strong>como ser um símbolo sem virar propaganda?</strong> Como manter valores sem transformar
                        convicção em rigidez?
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">O que o filme entende muito bem</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Diana não vira heroína quando aprende a lutar — isso ela já sabe desde o início. Ela vira
                                heroína quando decide <strong>se responsabilizar</strong> por um mundo que não é &quot;puro&quot;,
                                que não funciona por absolutos e que frequentemente decepciona. Mesmo assim, ela escolhe
                                agir. O heroísmo nasce quando o mito aceita o peso da realidade sem abrir mão de seus
                                princípios.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                O carisma da Diana vem de uma ideia simples e poderosa: poder só inspira quando não
                                humilha o outro — quando protege, em vez de se exibir.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="guerra-e-esperanca"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Guerra, esperança e o dilema moral
                    </h2>

                    <p className="mb-3">
                        Ambientar a história na Primeira Guerra Mundial dá ao filme um peso que conversa diretamente com a
                        essência da personagem. Não se trata de uma guerra estilizada ou romantizada, mas de um cenário em
                        que a vida parece barata, descartável, empilhada em trincheiras e decisões burocráticas. É um
                        mundo onde o sofrimento vira paisagem — e justamente por isso, um teste brutal para qualquer ideia
                        de heroísmo.
                    </p>

                    <p className="mb-3">
                        Nesse contexto, Diana busca uma explicação total, quase reconfortante: &quot;é Ares, pronto&quot;. A lógica é
                        simples — se existe um vilão absoluto, basta derrotá-lo e o mundo volta ao eixo. O roteiro acerta
                        quando não entrega essa resposta com facilidade. A guerra insiste em ser mais complexa do que um
                        único inimigo, mais difusa do que um rosto para culpar. E quando o filme respira, ele revela algo
                        raro em blockbusters: <strong>mesmo sem um culpado absoluto, ainda existe responsabilidade</strong>.
                    </p>

                    <p className="mb-3">
                        É nesse ponto que a esperança da Diana deixa de ser ingênua e passa a ser uma escolha consciente.
                        Ela percebe que acabar com o mal não é um gesto único, épico e limpo — é um processo imperfeito,
                        cheio de perdas, dúvidas e frustrações. Ainda assim, agir continua sendo necessário. O dilema
                        moral não está em &quot;vencer a guerra&quot;, mas em decidir quem você se torna enquanto tenta enfrentá-la.
                    </p>

                    <h2
                        id="linguagem"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Direção e linguagem: encanto sem cinismo
                    </h2>

                    <p className="mb-3">
                        A direção de <em>Mulher-Maravilha</em> aposta em algo que se tornou raro em grandes franquias: tempo.
                        Tempo para olhares, para silêncio, para o contraste entre beleza e ruína. Esses pequenos respiros
                        constroem o que o filme chama, na prática, de &quot;encanto&quot;. Não é um truque visual nem um discurso
                        inflamado — é a decisão consciente de deixar a emoção existir sem ironia. O filme não tem medo de
                        parecer sincero e, no cinema contemporâneo, isso é quase um superpoder.
                    </p>

                    <p className="mb-3">
                        Quando a ação finalmente acontece, ela ganha força justamente porque não surge do nada. Funciona
                        melhor quando é consequência de valores, e não apenas de coreografia ou escala. A cena mais
                        memorável — aquela que ficou gravada no imaginário coletivo — não é lembrada pela explosão ou
                        pela pose, mas porque traduz a ideia central da personagem: <strong>abrir caminho</strong>. Não
                        &quot;aparecer por aparecer&quot;, não provar superioridade, mas avançar para proteger quem não pode.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        O &quot;encanto&quot; não é ingenuidade — é intenção
                    </h3>

                    <p className="mb-3">
                        Existe uma diferença profunda entre ser ingênuo e ser intencional, e o filme entende isso muito
                        bem. <em>Mulher-Maravilha</em> escolhe acreditar em algo específico: que a compaixão pode ser um ato
                        de coragem, e não um sinal de fraqueza. Essa escolha não simplifica o mundo — ela define uma
                        postura diante dele. É assim que Diana constrói sua identidade no universo DC: não como a heroína
                        que ironiza tudo ao redor, mas como a que encara o horror sem deixar que ele a transforme.
                    </p>

                    <h2
                        id="impacto"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Impacto cultural: o que mudou na DC
                    </h2>

                    <p className="mb-3">
                        O impacto de <em>Mulher-Maravilha (2017)</em> vai muito além de números de bilheteria ou do entusiasmo
                        imediato do lançamento. Ele aparece, sobretudo, na forma como o filme recolocou a DC em uma
                        conversa mais ampla e mais honesta com o público: a de que heróis ainda podem funcionar como{" "}
                        <strong>símbolos</strong> sem virar caricatura, sem precisar recorrer constantemente à ironia ou à
                        desconstrução como muleta narrativa.
                    </p>

                    <p className="mb-3">
                        Ao apostar em uma protagonista que acredita no que faz — e que não pede desculpas por isso — o
                        filme ajudou a abrir espaço para uma outra sensibilidade dentro do gênero. Ele mostrou que uma
                        personagem icônica não precisa ser &quot;desmontada&quot; para parecer moderna ou relevante. Às vezes, o
                        gesto mais contemporâneo é justamente recuperar o básico: propósito claro, valores reconhecíveis
                        e emoção tratada com seriedade.
                    </p>

                    <p className="mb-3">
                        Esse efeito se espalhou para além do próprio título. <em>Mulher-Maravilha</em> passou a ser
                        referência quando se discute representatividade, heroísmo e linguagem no cinema de franquia.
                        Não porque resolve todas essas questões, mas porque prova que existe público para histórias que
                        não têm medo de parecer sinceras. Em um momento em que a DC buscava identidade, o filme lembrou
                        algo essencial: símbolos não precisam gritar para serem ouvidos.
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
                        id="o-que-envelhece"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O que envelhece bem (e o que não)
                    </h2>

                    <p className="mb-3">
                        O que envelhece melhor em <em>Mulher-Maravilha (2017)</em> é o seu núcleo dramático: Diana como um
                        símbolo que não perde humanidade ao longo da narrativa. O filme entende que heroísmo não se resume
                        a &quot;ganhar&quot; batalhas ou derrotar inimigos visíveis, mas a <strong>não virar pedra</strong> por
                        dentro — a não permitir que o mundo endureça aquilo que dá sentido à luta.
                    </p>

                    <p className="mb-3">
                        Essa escolha faz com que muitas cenas continuem funcionando mesmo anos depois do lançamento.
                        O olhar da personagem diante do sofrimento, sua recusa em tratar a violência como algo normal e a
                        insistência em agir apesar das contradições preservam o impacto emocional do filme. É um tipo de
                        envelhecimento raro em blockbusters: aquele que depende mais de valores do que de modismos.
                    </p>

                    <p className="mb-3">
                        O que envelhece pior, por outro lado, são alguns atalhos de roteiro que tentam simplificar demais
                        um mundo que o próprio filme apresentou como complexo. Em certos momentos, a narrativa parece
                        querer fechar arcos rápido demais, oferecendo respostas mais diretas do que a ambiguidade que vinha
                        sendo construída permitiria. Isso não destrói o filme — mas reduz um pouco a força de sua ideia
                        central, justamente quando ele poderia confiar mais na dúvida como parte da experiência.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        <em>Mulher-Maravilha (2017)</em> é, antes de tudo, um filme sobre não desistir do heroísmo como
                        linguagem. Em um momento em que o gênero parecia dividido entre cinismo e excesso, ele acerta ao
                        lembrar que símbolos não existem para parecer perfeitos ou inalcançáveis — eles existem para <strong>puxar o mundo para cima</strong>, mesmo quando o mundo resiste.
                    </p>

                    <p className="mb-3">
                        Diana funciona porque não é &quot;invencível&quot; no sentido emocional. Ela sente, se frustra, se decepciona
                        e aprende no contato direto com a realidade. Ainda assim, decide agir. O heroísmo aqui não nasce da
                        ausência de dúvida, mas da escolha consciente de não endurecer diante do horror. O encanto retorna
                        quando a narrativa permite que a heroína respire como pessoa, e não apenas como ícone.
                    </p>

                    <p>
                        No fim, o filme deixa uma promessa silenciosa — e talvez por isso tão poderosa: ainda é possível
                        fazer blockbusters com coração. Mas isso só acontece quando o coração faz parte da trama, orienta
                        as decisões dos personagens e sustenta o conflito moral. Não como adorno, não como trilha sonora,
                        mas como o verdadeiro motor da história.
                    </p>

                    <div className="not-prose my-12 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <p className="text-sm font-semibold text-slate-100">Continue no LEXARA</p>
                        <p className="mt-2 text-sm text-slate-300">
                            Se este foi seu ponto de partida, aqui vai a sequência natural de leitura para entender
                            as outras camadas da personagem no cinema.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                                href="/filmes-series/dc/mulher-maravilha/mulher-maravilha-1984"
                                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
                            >
                                Próximo: Mulher-Maravilha 1984 <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/filmes-series/dc/mulher-maravilha/gal-gadot-dceu"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                Gal Gadot no DCEU <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/filmes-series/dc/mulher-maravilha/mulher-maravilha-futuro-dcu"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                Futuro da personagem no DCU <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/filmes-series/dc"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                Explorar o hub DC <ArrowRight size={16} />
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
                        As fontes listadas abaixo servem como base para informações verificáveis, como créditos, fichas
                        técnicas, dados de produção e contexto institucional. Elas ajudam a situar o filme dentro do
                        universo da DC e do mercado cinematográfico em que foi lançado. A leitura crítica, as conexões
                        simbólicas e as interpretações apresentadas ao longo do artigo, no entanto, são originais do
                        LEXARA.
                    </p>

                    <p className="mb-3">
                        Sempre que possível, o texto prioriza fontes primárias ou bases amplamente reconhecidas pela
                        indústria, usando números e dados apenas como apoio — nunca como substitutos da análise
                        narrativa. O objetivo é oferecer contexto suficiente para o leitor formar sua própria leitura,
                        sem reduzir a experiência a estatísticas.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.dc.com/" rel="noreferrer noopener" target="_blank">
                                DC (site oficial) — universo, personagens, comunicados e catálogos
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/" rel="noreferrer noopener" target="_blank">
                                IMDb — créditos, elenco, equipe técnica e ficha de produção
                            </a>
                        </li>
                        <li>
                            <a href="https://www.boxofficemojo.com/" rel="noreferrer noopener" target="_blank">
                                Box Office Mojo — dados de bilheteria, desempenho comercial e comparativos de mercado
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> esta análise privilegia narrativa, símbolos e escolhas de
                        linguagem cinematográfica. Dados quantitativos ajudam a contextualizar, mas não substituem leitura
                        crítica nem interpretação cultural.
                    </p>
                </section>

                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em <span className="text-slate-300">{article.publishedAtLabel}</span>.
                    </p>
                </footer>
            </article>
        </>
    );
}
