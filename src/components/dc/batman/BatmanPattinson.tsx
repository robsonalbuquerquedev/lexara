import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Film, List, Quote, Shield, Search, Sparkles, Skull, Map, BadgeCheck, } from "lucide-react";

import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";

type Reviewer = {
    name: string;
    role: string;
    avatarSrc: string;
};

const ARTICLE = {
    title: "Robert Pattinson: o Batman detetive e o nascimento de um novo universo",
    subtitle:
        "Uma análise do Batman mais investigativo já visto no cinema e o impacto dessa abordagem para o futuro da DC.",
    badge: "Filmes & Séries — DC",
    categoryHref: "/filmes-series/dc",
    topic: "Batman",
    topicHref: "/filmes-series/dc/batman",
    slug: "/filmes-series/dc/batman/robert-pattinson",
    publishedAtISO: "2026-01-29T19:45:00-03:00",
    publishedLabel: "29.01.2026, às 19H45",
    readingTime: "3 min de leitura",
    coverImage: {
        src: "/images/featured/batman-pattinson.png",
        alt: "Robert Pattinson como Batman em The Batman (2022), em clima noir e investigativo.",
    },
    author: {
        name: "Robson Albuquerque",
        avatarSrc: "/images/about/robson.png",
        role: "Autor",
    },
    reviewers: [
        { name: "Emanuel José", role: "Revisão", avatarSrc: "/images/about/emanuel.jpeg" },
        { name: "Celso Lopes", role: "Revisão", avatarSrc: "/images/about/celso.jpeg" },
    ] as Reviewer[],
};

const SECTIONS = [
    { id: "abertura", label: "Por que este Batman é diferente" },
    { id: "detetive", label: "O Batman detetive (noir + método)" },
    { id: "bruce", label: "Um Bruce ainda quebrado" },
    { id: "gotham", label: "Gotham como personagem" },
    { id: "universo", label: "O “nascimento” de um novo universo" },
    { id: "impacto", label: "Impacto para o futuro da DC" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    // Keep it simple and predictable. The final label is already in ARTICLE.publishedLabel.
    return iso;
}

function classNames(...parts: Array<string | false | null | undefined>) {
    return parts.filter(Boolean).join(" ");
}

function AdSlot({ label }: { label: string }) {
    // Placeholder for your real ad component.
    // Replace with <AdSenseUnit .../> when your Consent Mode integration is live.
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

export default function BatmanPattinson() {
    const jsonLdArticle = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: ARTICLE.title,
        description: ARTICLE.subtitle,
        datePublished: ARTICLE.publishedAtISO,
        dateModified: ARTICLE.publishedAtISO,
        author: {
            "@type": "Person",
            name: ARTICLE.author.name,
        },
        publisher: {
            "@type": "Organization",
            name: "LEXARA",
        },
        mainEntityOfPage: ARTICLE.slug,
        image: [ARTICLE.coverImage.src],
        about: [{ "@type": "Thing", name: "Batman" }, { "@type": "Thing", name: "DC" }],
    };

    const jsonLdBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Filmes & Séries", item: "/filmes-series" },
            { "@type": "ListItem", position: 2, name: "DC", item: ARTICLE.categoryHref },
            { "@type": "ListItem", position: 3, name: "Batman", item: ARTICLE.topicHref },
            { "@type": "ListItem", position: 4, name: ARTICLE.title, item: ARTICLE.slug },
        ],
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-batman-pattinson"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-batman-pattinson"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
            />

            <article className="mx-auto w-full max-w-4xl px-6 py-14">
                {/* Badge + visual breadcrumbs */}
                <header className="mb-10">
                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href={ARTICLE.categoryHref}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-200 hover:border-slate-700"
                        >
                            <Shield size={14} />
                            {ARTICLE.badge}
                        </Link>

                        <Link
                            href={ARTICLE.topicHref}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/30 px-3 py-1 text-xs text-slate-300 hover:border-slate-700 hover:text-slate-100"
                            title="Ver a seção Batman"
                        >
                            <Film size={14} />
                            {ARTICLE.topic}
                        </Link>
                    </div>

                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-100 md:text-5xl lg:text-6xl">
                        {ARTICLE.title}
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                        {ARTICLE.subtitle}
                    </p>

                    <ArticleMeta
                        author={{
                            name: ARTICLE.author.name,
                            avatar: ARTICLE.author.avatarSrc,
                            role: ARTICLE.author.role,
                        }}
                        reviewers={ARTICLE.reviewers.map((r) => ({
                            name: r.name,
                            avatar: r.avatarSrc,
                            role: r.role,
                        }))}
                        readingTime={ARTICLE.readingTime}
                        publishedAtLabel={ARTICLE.publishedLabel}
                    />

                    {/* Cover */}
                    <ArticleCover
                        src={ARTICLE.coverImage.src}
                        alt={ARTICLE.coverImage.alt}
                        caption=""
                        priority
                        aspect="21/9"
                    />
                </header>

                {/* Table of contents */}
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

                {/* Content */}
                <section className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-slate-100">
                    <h2
                        id="abertura"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Por que este Batman é diferente
                    </h2>

                    <p className="mb-3">
                        Em muitas versões do Batman vistas no cinema, a ação costuma vir em primeiro
                        plano, enquanto a investigação funciona quase como um “tempero narrativo” —
                        presente, mas raramente central. Em <em>The Batman</em> (2022), dirigido por
                        Matt Reeves, essa lógica é invertida de forma consciente: a história se constrói
                        como um verdadeiro caso policial, no qual cada pista, cada silêncio e cada erro
                        importam tanto quanto os confrontos físicos.
                    </p>

                    <p className="mb-3">
                        Nesse contexto, o herói não age como alguém que já domina o caos, mas como uma
                        figura em formação, que precisa compreender o crime antes de tentar combatê-lo.
                        Robert Pattinson entrega um Batman intenso e emocionalmente instável, ainda
                        distante do símbolo completo que Gotham projeta. Ele observa, anota, associa,
                        volta atrás — e é justamente essa obsessão por detalhes que redefine o ritmo do
                        filme, tornando a narrativa mais densa e imersiva.
                    </p>

                    <p>
                        O impacto dessa abordagem vai além do personagem. Ela transforma o clima da
                        obra como um todo e altera a forma como a própria cidade é percebida. O resultado
                        é um filme com alma de <strong>noir</strong>: chuva constante, sombras profundas,
                        culpa difusa, pistas fragmentadas e uma Gotham que nunca se revela por inteiro,
                        como se estivesse sempre escondendo algo nas entrelinhas.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA:{" "}
                                <strong>quando o Batman investiga, o mundo fica maior</strong> — porque a
                                cidade, os suspeitos e o próprio Bruce Wayne deixam de ser arquétipos de
                                ação e passam a existir como camadas narrativas, psicológicas e simbólicas.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="detetive"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O Batman detetive (noir + método)
                    </h2>

                    <p className="mb-3">
                        Este Batman não “chega pronto” à cena do crime. Ele testa hipóteses, erra conclusões,
                        volta atrás, compara evidências e observa detalhes que normalmente passariam despercebidos.
                        Em vez de reagir automaticamente à violência, ele tenta compreender a lógica por trás
                        dela, montando o quebra-cabeça peça por peça. Essa postura confere ao personagem algo
                        raro nas adaptações cinematográficas: <strong>método</strong>, não apenas força.
                    </p>

                    <p className="mb-3">
                        A direção e a linguagem visual acompanham essa escolha narrativa com precisão.
                        A câmera permanece mais tempo nos rostos, nos ambientes e nos objetos, dando peso
                        dramático às cenas de investigação. Quando a violência surge, ela não funciona como
                        espetáculo isolado, mas como consequência direta de uma cidade estruturalmente doente,
                        onde cada crime parece conectado a algo maior e mais profundo.
                    </p>

                    <p>
                        É como se o filme sugerisse, de forma silenciosa, que o verdadeiro poder do Batman
                        não está apenas no traje que intimida, mas na mente que analisa e conecta padrões.
                        Essa abordagem aproxima o personagem de suas raízes mais investigativas nos quadrinhos
                        e reposiciona o herói como alguém que resolve problemas antes de simplesmente combatê-los.
                    </p>

                    {/* Visual bridge */}
                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                                <Search size={16} /> O que muda quando a investigação vira o centro
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                O ritmo desacelera de forma estratégica, mas a imersão aumenta.
                                Pistas visuais, símbolos recorrentes, leitura de cena e tensão psicológica
                                passam a conduzir a narrativa. Você não “assiste apenas ao Batman” —
                                você participa do processo, entrando no caso junto com ele.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Gotham se torna mais crível quando o crime possui lógica interna,
                                motivação clara e rastros que podem ser seguidos — mesmo que levem
                                a lugares desconfortáveis.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="bruce"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Um Bruce ainda quebrado
                    </h2>

                    <p className="mb-3">
                        O Bruce Wayne interpretado por Robert Pattinson está longe do arquétipo do
                        “playboy que equilibra duas vidas” com charme e naturalidade. Aqui, a persona
                        pública praticamente não existe: ele é um homem fechado, introspectivo e
                        emocionalmente isolado, consumido pela própria missão. Não há espaço para
                        performance social ou para a máscara do bilionário carismático — apenas para
                        o peso constante da perda e da culpa.
                    </p>

                    <p className="mb-3">
                        Essa escolha narrativa reforça uma ideia poderosa e desconfortável: no início,
                        o Batman pode ser mais <strong>obsessão</strong> do que heroísmo. A cruzada contra
                        o crime não nasce como altruísmo claro, mas como uma tentativa de dar forma à
                        dor. É justamente esse limite perigoso — entre justiça e compulsão — que o filme
                        decide explorar, evitando romantizar completamente o personagem.
                    </p>

                    <p className="mb-3">
                        À medida que a história avança, o ponto de virada não está em derrotar um vilão
                        específico, mas em compreender o impacto real do símbolo que ele representa.
                        Quando Bruce começa a perceber como o Batman é visto pelos outros — como medo,
                        inspiração ou esperança — surge a possibilidade de transformação. Nesse momento,
                        a narrativa deixa de ser apenas sobre “pegar um culpado” e passa a tratar de algo
                        maior: <strong>tornar-se um significado</strong> para uma cidade à deriva.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="gotham"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Gotham como personagem
                    </h2>

                    <p className="mb-3">
                        Em <em>The Batman</em>, Gotham está longe de funcionar apenas como pano de fundo
                        para a ação. Ela se apresenta como atmosfera constante, quase opressiva,
                        uma ferida aberta que nunca cicatriza. A cidade “fala” com o espectador por
                        meio de sua arquitetura pesada, da chuva persistente, do neon distorcido e
                        da sensação contínua de decadência, criando um ambiente onde o crime parece
                        consequência natural do próprio espaço urbano.
                    </p>

                    <p className="mb-3">
                        Esse tratamento faz o Batman existir menos como um “herói genérico” e mais
                        como uma resposta inevitável a um ambiente estruturalmente doente. O mundo
                        que o cerca parece coerente com sua presença: não é exagerado, nem artificial,
                        mas funcional dentro de suas próprias regras. Essa coerência fortalece o
                        universo narrativo e ajuda o espectador a aceitar que figuras extremas só
                        surgem quando o contexto também é extremo.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl flex items-center gap-2">
                        <Skull size={18} /> O crime não é só o vilão — é a engrenagem
                    </h3>

                    <p className="mb-3">
                        A trama deixa claro que o problema de Gotham não se resume a um antagonista
                        isolado. Ela aponta para redes de poder, corrupção institucionalizada e
                        símbolos que se perpetuam ao longo do tempo. Quando o mal é estrutural,
                        um “final feliz” simples se torna impossível, e a narrativa naturalmente
                        exige continuidade, aprofundamento e consequências que ultrapassam um único
                        filme.
                    </p>

                    <h2
                        id="universo"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O “nascimento” de um novo universo
                    </h2>

                    <p className="mb-3">
                        Diferente de muitas produções recentes de super-heróis, <em>The Batman</em> não
                        demonstra pressa em chegar a um “grande crossover” ou em empilhar referências
                        a outros personagens. A proposta é mais paciente e estratégica: construir
                        uma base sólida a partir de personagens bem definidos, de um clima coerente
                        e de regras claras para o funcionamento daquele mundo. Só depois disso surge,
                        de forma natural, o espaço para expansão.
                    </p>

                    <p className="mb-3">
                        Esse é o ponto-chave da abordagem. Um universo cinematográfico não nasce quando
                        muitos heróis aparecem em cena, mas quando o mundo apresentado possui
                        consistência suficiente para sustentar novas histórias sem perder identidade.
                        Quando o espectador acredita naquele ambiente, ele aceita acompanhá-lo por
                        múltiplos caminhos narrativos.
                    </p>

                    <p>
                        Ao apostar no noir investigativo como linguagem central, a DC passa a oferecer
                        um “sabor” próprio para esse novo ciclo. Trata-se de algo distinto tanto do
                        épico clássico quanto do espetáculo acelerado que domina parte do gênero,
                        abrindo espaço para narrativas mais densas, sombrias e autorais dentro do
                        cinema de super-heróis.
                    </p>

                    <ArticleVideo
                        embedUrl="https://www.youtube-nocookie.com/embed/mqqft2x_Aa4"
                        title="The Batman (2022) — Trailer Oficial"
                        heading="Vídeo de apoio"
                        description="Trailer oficial para contextualizar o tom noir e investigativo do filme."
                    />

                    <h2
                        id="impacto"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Impacto para o futuro da DC
                    </h2>

                    <p className="mb-3">
                        A maior força desse caminho está na construção de identidade. Quando o espectador
                        assiste ao filme e sente imediatamente que “isso tem uma cara própria”, a
                        confiança na continuidade aumenta de forma quase automática. Uma identidade
                        clara funciona como promessa implícita: ela sinaliza que as próximas histórias
                        seguirão regras reconhecíveis, em vez de mudar de tom a cada novo lançamento.
                    </p>

                    <p className="mb-3">
                        Dentro dessa lógica, o Batman detetive abre portas narrativas mais amplas e
                        maduras. As histórias deixam de girar apenas em torno da ação física e passam
                        a explorar mistério, política urbana, medo coletivo e dilemas morais. Esse tipo
                        de abordagem amplia o alcance temático da DC, permitindo narrativas que dialogam
                        não só com o espetáculo, mas também com questões sociais e psicológicas.
                    </p>

                    <p className="mb-3">
                        Se a DC pretende construir algo realmente sólido a longo prazo, iniciar o
                        processo com um alicerce coerente — combinando tom, mundo e personagens —
                        revela-se uma estratégia mais inteligente do que tentar “apressar o universo”.
                        Antes de pensar em escala, é preciso garantir profundidade; só assim a expansão
                        deixa de ser um risco e passa a ser uma consequência natural.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        O Batman interpretado por Robert Pattinson funciona justamente por abraçar um
                        lado humano que é, ao mesmo tempo, desconfortável e imperfeito. Ele não surge
                        como um herói plenamente formado, mas como alguém incompleto, intenso e
                        emocionalmente instável, ainda tentando compreender o que realmente significa
                        tornar-se um símbolo para uma cidade marcada pelo medo e pela corrupção.
                    </p>

                    <p className="mb-3">
                        Ao colocar a investigação no centro da narrativa, <em>The Batman</em> resgata uma
                        essência fundamental do personagem que o cinema raramente priorizou. Essa
                        escolha não apenas aprofunda o retrato psicológico do herói, como também
                        estabelece um terreno fértil para expansão, onde novas histórias podem surgir
                        de forma orgânica, sustentadas por método, atmosfera e coerência de mundo.
                    </p>

                    <p>
                        Se esse “novo universo” continuar respeitando a identidade construída aqui —
                        sombria, investigativa e autoral — a DC tem uma oportunidade concreta de
                        desenvolver algo consistente e duradouro. Mais do que multiplicar personagens,
                        trata-se de manter significado, profundidade e memória, criando um legado que
                        possa ser lembrado além do impacto imediato de cada lançamento.
                    </p>

                    {/* Internal CTA */}
                    <div className="not-prose my-12 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <p className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                            <Sparkles size={16} /> Continue no LEXARA
                        </p>
                        <p className="mt-2 text-sm text-slate-300">
                            Quer ir além deste artigo? Explore a seção especial do Batman no LEXARA, com análises por fase,
                            interpretações marcantes e os caminhos do herói no cinema.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                                href="/filmes-series/dc/batman"
                                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
                            >
                                Ver a seção Batman <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/filmes-series/dc"
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
                        Ao longo do artigo, referências a <strong>anos de lançamento</strong>,
                        <strong> diretores</strong> e contextos históricos não aparecem por acaso.
                        Elas funcionam como âncoras factuais que conectam a análise crítica a dados
                        verificáveis de produção e mercado, ajudando o leitor a situar cada fase do
                        Batman dentro de um recorte real do cinema contemporâneo.
                    </p>

                    <p className="mb-3">
                        Para essa curadoria, foram utilizadas fontes amplamente reconhecidas por sua
                        confiabilidade no registro de créditos, datas, produção e desempenho comercial:
                    </p>

                    <ul className="space-y-2">
                        <li className={classNames("flex items-center gap-2")}>
                            <BadgeCheck size={16} className="text-slate-300" />
                            <a
                                href="https://www.imdb.com/title/tt1877830/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-slate-600 underline-offset-4 hover:text-slate-100"
                            >
                                IMDb
                            </a>
                            <span className="text-slate-400 text-sm">
                                — créditos, elenco e ficha técnica de <em>The Batman</em> (2022).
                            </span>
                        </li>

                        <li className={classNames("flex items-center gap-2")}>
                            <Map size={16} className="text-slate-300" />
                            <a
                                href="https://pt.wikipedia.org/wiki/The_Batman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-slate-600 underline-offset-4 hover:text-slate-100"
                            >
                                Wikipedia
                            </a>
                            <span className="text-slate-400 text-sm">
                                — contexto de produção, lançamento e recepção crítica (utilizada como ponto
                                de partida, com dados cruzados).
                            </span>
                        </li>

                        <li className={classNames("flex items-center gap-2")}>
                            <BadgeCheck size={16} className="text-slate-300" />
                            <a
                                href="https://www.dc.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-slate-600 underline-offset-4 hover:text-slate-100"
                            >
                                DC (site oficial)
                            </a>
                            <span className="text-slate-400 text-sm">
                                — materiais institucionais, personagens e referências do universo Batman.
                            </span>
                        </li>

                        <li className={classNames("flex items-center gap-2")}>
                            <BadgeCheck size={16} className="text-slate-300" />
                            <a
                                href="https://www.boxofficemojo.com/title/tt1877830/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-slate-600 underline-offset-4 hover:text-slate-100"
                            >
                                Box Office Mojo
                            </a>
                            <span className="text-slate-400 text-sm">
                                — dados de bilheteria e desempenho comercial, quando relevantes para contexto
                                de mercado.
                            </span>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> as fontes acima são utilizadas
                        exclusivamente para dados verificáveis, como datas, nomes, créditos e registros
                        de lançamento. A análise crítica, a interpretação temática e a leitura cultural
                        desenvolvidas ao longo do artigo são originais e fazem parte da proposta
                        editorial da LEXARA.
                    </p>
                </section>

                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                {/* Semantic footer */}
                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em <span className="text-slate-300">{ARTICLE.publishedLabel}</span>.{" "}
                        <span className="text-slate-500">({formatISOToDateLabel(ARTICLE.publishedAtISO)})</span>
                    </p>
                </footer>
            </article>
        </>
    );
}
