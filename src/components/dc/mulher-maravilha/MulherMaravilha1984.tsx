import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type MulherMaravilha1984Props = {
    article: Article;
};

const SECTIONS = [
    { id: "premissa", label: "O que WW84 quer ser" },
    { id: "tom", label: "Tom oitentista: charme e risco" },
    { id: "desejo", label: "Desejo como motor da trama" },
    { id: "dilemas", label: "Dilemas morais e consequências" },
    { id: "vilao", label: "Maxwell Lord e a lógica do excesso" },
    { id: "diana", label: "Diana: força, solidão e limites" },
    { id: "video", label: "Vídeo: trailer oficial (apoio)" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    // Mantém simples e previsível. A label final já está pronta em article.publishedAtLabel.
    return iso;
}

function isPublishedNow(publishedAtISO: string) {
    // O ISO já inclui -03:00, então o Date() interpreta com offset corretamente.
    return new Date(publishedAtISO).getTime() <= Date.now();
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
                Espaço reservado para anúncio (AdSense) — carregado conforme
                consentimento.
            </p>
        </aside>
    );
}

export default function MulherMaravilha1984({
    article,
}: MulherMaravilha1984Props) {
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
            { "@type": "Thing", name: "Mulher-Maravilha" },
            { "@type": "Thing", name: "DC" },
            { "@type": "Thing", name: "Wonder Woman 1984" },
        ],
    };

    // 🔹 Schema (Breadcrumbs)
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

    // ✅ Vídeo (apoio editorial)
    const video: null | {
        embedUrl: string;
        title: string;
        heading: string;
        description: string;
    } = {
        embedUrl: "https://www.youtube-nocookie.com/embed/sfM7_JLk-84",
        title: "Mulher-Maravilha 1984 — Trailer oficial",
        heading: "Vídeo (apoio): trailer oficial para calibrar o tom",
        description:
            "Este trailer funciona como apoio de leitura: ele explicita a aposta estética de WW84 — cores saturadas, ritmo mais leve e atmosfera de fábula. Assistir ajuda a entender por que o filme escolhe emoção e fantasia como linguagem central, além de antecipar o risco do exagero que a análise discute ao longo do texto.",
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-mulher-maravilha-1984"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLdArticle),
                }}
            />
            <Script
                id="ld-breadcrumbs-mulher-maravilha-1984"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLdBreadcrumbs),
                }}
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
                        caption=""
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
                        id="premissa"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O que WW84 quer ser (e por que isso já divide)
                    </h2>

                    <p className="mb-3">
                        Se <em>Mulher-Maravilha</em> (2017) funciona como um filme de origem — a heroína descobrindo o mundo e o mundo
                        descobrindo a heroína — <em>Mulher-Maravilha 1984</em> tenta mudar completamente o jogo. Ele quer ser um conto pop
                        com cara de fábula: mais colorido, mais &quot;alto&quot;, mais sentimental, como se a realidade fosse só um pano de fundo
                        para uma mensagem sobre esperança. É uma escolha de identidade (e de risco): em vez de gravidade, o filme aposta
                        em ritmo, fantasia e emoção direta, como se estivesse dizendo que a Diana não precisa provar força — ela precisa
                        provar o que faz com o poder quando o desejo vira tentação.
                    </p>

                    <p className="mb-3">
                        Só que esse tipo de filme exige disciplina narrativa, porque fantasia sem regra vira bagunça emocional. E é aqui
                        que a experiência divide o público: WW84 tenta ser leve e épico ao mesmo tempo, tenta ser ingênuo e moralmente
                        sério no mesmo fôlego, tenta ser &quot;divertido&quot; sem abandonar o peso das consequências. Quando ele acerta, a história
                        ganha um brilho raro em cinema de super-herói: a ideia de que heroísmo é, muitas vezes, recusar o atalho mais
                        confortável. Quando ele exagera, o tom começa a engolir a tensão — e a mensagem fica menos inevitável, mais
                        &quot;encenada&quot;. Essa é a fratura central do filme: não falta ambição; às vezes falta poda.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: WW84 é menos sobre &quot;vencer o vilão&quot; e mais sobre o que acontece quando o mundo inteiro
                                recebe permissão para desejar sem freio — e quando a única resposta ética é voltar atrás, mesmo doendo.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="tom"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Tom oitentista: charme, fantasia e risco de caricatura
                    </h2>

                    <p className="mb-3">
                        O &quot;modo anos 80&quot; de <em>Mulher-Maravilha 1984</em> não funciona apenas como pano de fundo visual. Ele contamina tudo:
                        o comportamento dos personagens, o tipo de humor escolhido, a paleta de cores exagerada, a coreografia das cenas
                        de ação e até o ritmo mais alongado de algumas sequências. O filme quer parecer um sonho acordado — menos preso à
                        lógica do real e mais guiado por sensações. É uma decisão consciente de linguagem: WW84 não quer soar moderno ou
                        cínico, quer soar ingênuo, quase otimista demais, como uma fábula pop que acredita na bondade sem pedir ironia em
                        troca.
                    </p>

                    <p className="mb-3">
                        Quando esse tom encontra equilíbrio, ele dá identidade ao filme e o diferencia do restante do cinema de
                        super-heróis contemporâneo. O problema surge quando a estética começa a engolir o conflito. Em vez de amplificar
                        a emoção, o excesso de leveza transforma cenas que deveriam doer em algo próximo da encenação. A sensação deixa
                        de ser &quot;isso precisava acontecer&quot; e passa a ser &quot;isso foi organizado para acontecer assim&quot;. É nesse ponto que o
                        charme flerta com a caricatura — e o filme perde parte da força dramática que sua proposta pede.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">
                                O que o tom promete
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                Uma fantasia com coração: escapismo consciente, esperança sem cinismo e um tipo de heroísmo &quot;limpo&quot;, onde fazer
                                o bem não precisa ser justificado nem desconstruído o tempo todo. O filme quer lembrar que acreditar ainda pode
                                ser um gesto radical.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">
                                Destaque
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                Quando o filme exagera, ele não fica apenas &quot;camp&quot;: ele dilui a consequência. E sem consequência, até a fantasia
                                perde peso emocional.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="desejo"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Desejo como motor: a ideia é ótima, a execução é instável
                    </h2>

                    <p className="mb-3">
                        A grande sacada narrativa de <em>Mulher-Maravilha 1984</em> é transformar o desejo em motor dramático. Não se trata
                        apenas de um &quot;artefato poderoso&quot; típico do gênero, mas de algo mais perigoso: uma promessa simples, direta e
                        profundamente humana. Qualquer pessoa pode desejar algo — sucesso, amor, reconhecimento, poder — e é justamente
                        essa universalidade que amplia o alcance do tema. O conflito deixa de ser restrito a heróis e vilões e passa a
                        refletir uma sociedade inteira seduzida pela ideia de que querer já é quase o mesmo que merecer.
                    </p>

                    <p className="mb-3">
                        O problema é que conceitos grandes exigem regras claras para manter o impacto emocional. Quanto mais abstrata é a
                        ideia, mais rigor o filme precisa ter com limites e consequências. Em WW84, esse rigor oscila. O roteiro estabelece
                        regras, flexibiliza, reaplica e volta atrás conforme a cena pede, criando um &quot;vai e vem&quot; que enfraquece a tensão.
                        Quando o espectador começa a perceber essas brechas, o desejo deixa de ser ameaça inevitável e vira ferramenta
                        conveniente da narrativa — e o motor que deveria sustentar o filme passa a falhar nos momentos-chave.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="dilemas"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Dilemas morais: quando o filme encosta no tema certo
                    </h2>

                    <p className="mb-3">
                        <em>Mulher-Maravilha 1984</em> encontra seu melhor caminho quando desacelera e permite que a pergunta central
                        apareça com clareza: o que você está disposto a sacrificar para não perder aquilo que deseja? Nesse momento, o
                        filme deixa de ser apenas uma fantasia de super-herói e se aproxima de uma fábula moral. A ameaça já não é
                        simplesmente externa ou física; ela se torna íntima, silenciosa e desconfortável, porque exige escolha — e toda
                        escolha verdadeira cobra um preço.
                    </p>

                    <p className="mb-3">
                        É justamente aí que Diana funciona melhor como personagem. Seu heroísmo não se define pela força ou pela vitória
                        imediata, mas pela dificuldade da decisão. Quando a resposta não é fácil, quando abrir mão dói mais do que
                        lutar, o filme encontra um tipo de conflito raro no gênero. O poder da personagem passa a ser ético, não
                        muscular — e o drama ganha peso porque não existe solução sem perda.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        O preço do desejo é o preço da escolha
                    </h3>

                    <p className="mb-3">
                        A moral que WW84 tenta construir é simples, mas incômoda: desejar sem freio é uma forma de violência, mesmo
                        quando o desejo parece legítimo ou &quot;inocente&quot;. Ao transformar vontade em direito, o filme sugere que alguém,
                        em algum lugar, sempre paga a conta. É essa lógica que aproxima a história de uma fábula clássica, onde a
                        tentação vem acompanhada de consequências. WW84 nem sempre consegue sustentar essa ideia com rigor narrativo,
                        mas a intenção é clara — e, quando ela aparece sem distrações, o filme toca em algo genuinamente relevante.
                    </p>

                    <h2
                        id="vilao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Maxwell Lord: excesso como ideologia
                    </h2>

                    <p className="mb-3">
                        Maxwell Lord é o personagem que &quot;explica&quot; <em>Mulher-Maravilha 1984</em>. Ele não funciona apenas como antagonista,
                        mas como encarnação de uma lógica que o filme quer discutir: a lógica do &quot;mais&quot;. Mais poder, mais reconhecimento,
                        mais status, mais desejo atendido — independentemente do custo. Diferente de vilões clássicos movidos por vingança
                        ou dominação direta, Lord é movido por uma ideia sedutora: a promessa de que querer é suficiente para merecer.
                        Nesse sentido, ele não impõe nada à força; ele oferece. E é isso que o torna perigoso.
                    </p>

                    <p className="mb-3">
                        É por isso que o exagero do filme dialoga diretamente com o personagem. Quando WW84 sobe o tom, alonga cenas ou
                        beira o absurdo, ele também está comentando esse excesso como ideologia: um mundo onde tudo pode crescer sem
                        limite até colapsar. O problema surge quando o exagero deixa de servir à crítica e vira ruído narrativo. Nesse
                        ponto, a mensagem se dilui, e o vilão perde parte de sua força simbólica — não porque a ideia seja fraca, mas
                        porque o filme nem sempre consegue decidir quando parar.
                    </p>

                    <h2
                        id="diana"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Diana: a melhor parte do filme ainda é a personagem
                    </h2>

                    <p className="mb-3">
                        Diana Prince funciona porque é um símbolo que insiste em ser humano. Em <em>Mulher-Maravilha 1984</em>, ela já não está descobrindo o mundo — ela está
                        sobrevivendo a ele. O tempo passou, os amores ficaram para trás, as pessoas
                        envelheceram ou morreram, e ela permaneceu. Essa é uma solidão específica,
                        silenciosa, que não vem da rejeição, mas da permanência. Diana é poderosa,
                        mas carrega o peso de observar a história seguir em frente sem poder
                        acompanhá-la por completo.
                    </p>

                    <p className="mb-3">
                        Quando o roteiro desacelera e permite que esse estado exista, Diana se torna
                        o centro moral do filme. Suas escolhas ganham densidade porque não partem da
                        força, mas da renúncia. O problema surge quando o filme acelera demais em
                        direção ao espetáculo: nesses momentos, a personagem deixa de conduzir a
                        narrativa e passa a servi-la. Esse é o pêndulo de WW84 — entre a heroína como
                        consciência ética e a heroína como ferramenta de cena. Sempre que o filme
                        escolhe a primeira opção, ele encontra sua versão mais forte e mais honesta.
                    </p>

                    <h2
                        id="video"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Vídeo (apoio): trailer oficial
                    </h2>

                    {video ? (
                        <ArticleVideo
                            embedUrl={video.embedUrl}
                            title={video.title}
                            heading={video.heading}
                            description={video.description}
                        />
                    ) : null}

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        <em>Mulher-Maravilha 1984</em> divide opiniões porque tenta ser uma fábula sobre desejo em forma de blockbuster.
                        Ele quer falar de ambição, tentação e consequências usando um filme grande, colorido e emocional, mas nem sempre
                        consegue escolher com firmeza entre o coração da história e o apelo do espetáculo. Quando essas duas forças
                        caminham juntas, o filme encontra identidade. Quando entram em conflito, a experiência se fragmenta — e o tom
                        parece oscilar sem saber exatamente para onde ir.
                    </p>

                    <p className="mb-3">
                        Ainda assim, quando o tema central emerge com clareza, WW84 acerta em cheio. O filme propõe um tipo de heroísmo
                        menos comum no gênero: não o de dominar o mundo, vencer o inimigo ou impor força, mas o de abrir mão do que se
                        deseja quando esse desejo se transforma em injustiça. É uma ideia simples, quase clássica, que ganha força
                        justamente por ir contra a lógica do &quot;mais&quot; que domina tanto o vilão quanto o próprio cenário da história.
                    </p>

                    <p>
                        No fim, WW84 é um filme movido por ambição genuína. Ele quer ser maior, mais emotivo e mais simbólico do que a
                        média. O problema é que ambição sem poda vira excesso — e excesso, quase sempre, cobra juros narrativos. Ainda
                        assim, quando o filme lembra que seu centro é Diana e sua capacidade de renunciar, ele se aproxima de algo raro:
                        um conto de super-herói mais interessado em escolhas morais do que em vitórias fáceis.
                    </p>

                    <div className="not-prose my-12 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <p className="text-sm font-semibold text-slate-100">
                            Continue no LEXARA
                        </p>

                        <p className="mt-2 text-sm text-slate-300">
                            Se este foi seu ponto de partida, a leitura agora avança além dos filmes.
                            Estes textos ajudam a entender como a personagem se consolida no DCEU e
                            quais caminhos se abrem a partir daqui.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                                href="/filmes-series/dc/mulher-maravilha/gal-gadot-dceu"
                                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
                            >
                                Próximo: Gal Gadot no DCEU <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/filmes-series/dc/mulher-maravilha/mulher-maravilha-futuro-dcu"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                Futuro da personagem no DCU <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/filmes-series/dc/mulher-maravilha"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                Voltar à seção Mulher-Maravilha <ArrowRight size={16} />
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
                        As fontes abaixo servem como base para dados verificáveis — créditos, ficha técnica, informações de produção e
                        contexto geral de estúdio relacionados a <em>Mulher-Maravilha 1984</em>. Elas ajudam a ancorar a análise em fatos
                        públicos e reconhecidos, oferecendo um ponto de partida sólido para compreender o filme dentro do universo da
                        DC e do cinema de super-heróis contemporâneo. A leitura crítica, as conexões temáticas e as interpretações
                        apresentadas ao longo do artigo são originais do LEXARA.
                    </p>

                    <ul>
                        <li>
                            <a
                                href="https://www.dc.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                DC (site oficial) — informações institucionais, personagens e catálogos do universo DC
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.imdb.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                IMDb — créditos, elenco, ficha técnica e dados de produção
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.boxofficemojo.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Box Office Mojo — dados de bilheteria, desempenho comercial e comparativos de mercado
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> esta análise privilegia escolhas narrativas, construção temática e impacto
                        simbólico. Nem toda decisão criativa pode ser reduzida a &quot;certo&quot; ou &quot;errado&quot; — mas toda decisão carrega
                        consequências, e é nesse custo que o filme revela sua identidade.
                    </p>
                </section>

                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em{" "}
                        <span className="text-slate-300">
                            {article.publishedAtLabel}
                        </span>
                        .{" "}
                        <span className="text-slate-500">
                            ({formatISOToDateLabel(article.publishedAtISO)})
                        </span>
                    </p>
                </footer>
            </article>
        </>
    );
}
