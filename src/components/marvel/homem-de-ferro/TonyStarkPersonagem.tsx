import Link from "next/link";
import Script from "next/script";
import { Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type TonyStarkPersonagemProps = {
    article: Article;
};

const SECTIONS = [
    { id: "genio-ego", label: "Gênio, bilionário… e ego inflado" },
    { id: "falhas-vulnerabilidade", label: "Falhas e vulnerabilidade" },
    { id: "humor-como-arma", label: "O humor como mecanismo de defesa" },
    { id: "arco-narrativo", label: "A evolução ao longo do MCU" },
    { id: "icones-cinema", label: "Por que Tony virou um ícone moderno" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    return iso;
}

function isPublishedNow(publishedAtISO: string) {
    return new Date(publishedAtISO).getTime() <= Date.now();
}

export default function TonyStarkPersonagem({ article }: TonyStarkPersonagemProps) {
    if (!isPublishedNow(article.publishedAtISO)) {
        return (
            <section className="mx-auto max-w-2xl py-20 text-center">
                <h1 className="text-2xl font-bold">Publicação programada</h1>
                <p className="mt-4 text-slate-400">
                    Este artigo ficará disponível em {article.publishedAtISO}.
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
            { "@type": "Thing", name: "Homem de Ferro" },
            { "@type": "Thing", name: "Tony Stark" },
            { "@type": "Thing", name: "MCU" },
        ],
    };

    const jsonLdBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            breadcrumbItem("Filmes & Séries", "/filmes-series", 1),
            breadcrumbItem("MARVEL", article.categoryHref, 2),
            breadcrumbItem("Homem de Ferro", article.topicHref, 3),
            breadcrumbItem(article.title, article.slug, 4),
        ],
    };

    const video = null as null | {
        embedUrl: string;
        title: string;
        heading: string;
        description: string;
    };

    return (
        <>
            <Script
                id="ld-article-tony-stark-personagem"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-tony-stark-personagem"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
            />

            <article className="mx-auto w-full max-w-4xl px-6 py-14">
                <header className="mb-10">
                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href={article.categoryHref}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-200"
                        >
                            <Shield size={14} />
                            {article.badge}
                        </Link>

                        <Link
                            href={article.topicHref}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/30 px-3 py-1 text-xs text-slate-300"
                        >
                            <Film size={14} />
                            {article.topic}
                        </Link>
                    </div>

                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-100 md:text-5xl">
                        {article.title}
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
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
                        caption="Tony Stark é o coração emocional do MCU."
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
                        id="genio-ego"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Gênio, bilionário… e ego inflado
                    </h2>

                    <p className="mb-3">
                        Tony Stark não entra no MCU como &quot;herói em construção&quot;. Ele entra como produto pronto — e perigoso: celebridade
                        da indústria bélica, rosto de uma empresa que vende poder embalado como segurança, e um homem que confunde
                        inteligência com permissão para não ter limites. Antes de existir qualquer &quot;missão&quot;, existe performance:
                        frases rápidas, charme estudado, e a certeza absoluta de que o mundo sempre vai se curvar ao seu talento.
                    </p>

                    <p className="mb-3">
                        O detalhe que torna isso narrativamente forte é que o filme não tenta &quot;purificar&quot; Tony logo de cara. Pelo contrário:
                        ele é sedutor justamente porque é errado. O público ri com ele, se impressiona com ele e, ao mesmo tempo, percebe
                        uma rachadura ética crescendo por baixo do brilho. Essa ambiguidade é o motor do personagem: você admira o gênio,
                        mas começa a desconfiar do homem.
                    </p>

                    <p className="mb-3">
                        E é aí que o MCU acerta em cheio no tom: Tony é um protagonista moderno porque não vende santidade — vende
                        contradição. O ego não é só um traço de personalidade; é uma armadura invisível. Serve para dominar salas,
                        vencer discussões e evitar silêncio. O carisma vira estratégia, e a arrogância vira anestesia: se ele parecer
                        invencível, talvez não precise encarar o estrago que ajudou a criar.
                    </p>

                    <p className="mb-3">
                        Em outras palavras: o Homem de Ferro começa como um homem que já &quot;ganhou&quot; tudo — dinheiro, status, acesso —
                        mas ainda não descobriu o que isso custa. E quando a história coloca Tony frente a frente com consequências,
                        o que importa não é a tecnologia que ele vai construir… é a responsabilidade que ele vai aceitar (ou tentar
                        negar) enquanto constrói.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: o que sustenta o Homem de Ferro não é a armadura — é a transformação moral.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="falhas-vulnerabilidade"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Falhas e vulnerabilidade
                    </h2>

                    <p className="mb-3">
                        O sequestro no Afeganistão não cria apenas o herói — cria fratura. Pela primeira vez,
                        Tony Stark é colocado em um espaço onde dinheiro, influência e genialidade não
                        resolvem nada de imediato. O homem que sempre controlou o ambiente passa a depender
                        de outros para sobreviver. Essa inversão é o verdadeiro ponto de ruptura do personagem.
                    </p>

                    <p className="mb-3">
                        Mais do que um evento de origem, essa experiência inaugura uma camada psicológica que
                        acompanha Tony por todo o MCU: trauma, culpa e medo constante de perder o controle.
                        O público começa a perceber que o sarcasmo e a confiança quase teatral escondem algo
                        mais profundo — insegurança. Ele não teme apenas morrer. Ele teme falhar.
                    </p>

                    <p className="mb-3">
                        A partir desse momento, cada armadura construída carrega um subtexto emocional.
                        Não é apenas tecnologia de ponta; é tentativa de compensação. Tony constrói porque
                        quer proteger. Mas também constrói porque quer evitar reviver a sensação de impotência.
                        A genialidade vira mecanismo de defesa. A inovação vira anestesia.
                    </p>

                    <p className="mb-3">
                        Essa é a grande diferença entre Tony Stark e muitos heróis tradicionais: ele não
                        supera suas falhas — ele convive com elas. A ansiedade que explode em &quot;Homem de Ferro 3&quot;
                        não surge do nada; ela é consequência direta da consciência de que o mundo agora é maior
                        do que ele. E quanto maior a ameaça, maior a necessidade de controle.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">
                                Trauma como motor narrativo
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                Diferente de uma simples &quot;origem heroica&quot;, o trauma de Tony se transforma em
                                combustível dramático recorrente. Ele influencia decisões, alimenta conflitos
                                internos e justifica excessos. Não é um detalhe de roteiro — é a base emocional
                                do personagem ao longo de toda a saga.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Tony não constrói armaduras porque ama tecnologia. Ele constrói porque tem medo.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="humor-como-arma"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O humor como mecanismo de defesa
                    </h2>

                    <p className="mb-3">
                        Tony Stark não usa apenas armaduras de metal — ele usa palavras. Em momentos de
                        tensão máxima, enquanto o mundo ameaça desmoronar, ele escolhe a ironia. A piada
                        rápida, o comentário sarcástico, o deboche elegante. O humor se torna seu reflexo
                        automático diante do perigo.
                    </p>

                    <p className="mb-3">
                        Mas esse traço não é apenas estilo ou carisma cinematográfico. É estratégia emocional.
                        A ironia funciona como escudo psicológico: se ele consegue transformar o medo em
                        entretenimento, talvez consiga manter o controle da situação. Ao rir do caos, ele
                        cria a ilusão de domínio sobre ele.
                    </p>

                    <p className="mb-3">
                        Esse recurso aproxima Tony do público contemporâneo. Diferente do herói solene
                        e moralmente inabalável, ele reage como muitas pessoas reagiriam — com sarcasmo.
                        O humor revela inteligência, mas também vulnerabilidade. É a forma moderna de
                        admitir fragilidade sem precisar verbalizá-la.
                    </p>

                    <p className="mb-3">
                        Ao longo do MCU, fica claro que quanto maior a pressão, mais afiada fica a ironia.
                        Não é coincidência. A comédia de Tony é um termômetro emocional: quanto mais ele
                        brinca, maior é o peso que está tentando esconder. E essa camada dupla — charme
                        na superfície, ansiedade por baixo — é o que torna o personagem tão magnético.
                    </p>

                    <h2
                        id="arco-narrativo"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        A evolução ao longo do MCU
                    </h2>

                    <p className="mb-3">
                        O arco de Tony Stark no MCU é um dos mais consistentes do cinema de franquias.
                        Ele começa como um homem centrado em si mesmo — confiante, brilhante e indiferente
                        às consequências globais de suas criações. Em 2008, o que move Tony é sobrevivência
                        e autopreservação. Ele quer sair da caverna, quer retomar o controle e provar que
                        ainda é o mais inteligente da sala.
                    </p>

                    <p className="mb-3">
                        Com o passar dos filmes, porém, o foco se desloca. A ameaça deixa de ser pessoal
                        e passa a ser coletiva. A invasão alienígena em Nova York redefine sua percepção
                        de escala. O universo é maior do que sua empresa, maior do que sua tecnologia,
                        maior do que seu ego. E, pela primeira vez, Tony entende que não basta reagir —
                        é preciso antecipar.
                    </p>

                    <p className="mb-3">
                        Essa mudança altera completamente sua função dentro do MCU. O antigo fabricante
                        de armas se transforma em arquiteto de proteção global. Ele financia, organiza,
                        planeja e, muitas vezes, tenta controlar. O mentor nasce do medo. A liderança
                        nasce da culpa. Cada nova armadura é menos sobre autopromoção e mais sobre
                        responsabilidade.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        Do controle ao sacrifício
                    </h3>

                    <p className="mb-3">
                        O ponto mais alto desse arco não é uma vitória tecnológica, mas uma escolha moral.
                        Quando Tony decide sacrificar a própria vida em &quot;Vingadores: Ultimato&quot;, o ciclo
                        iniciado em &quot;Homem de Ferro (2008)&quot; se fecha de maneira simbólica e narrativa.
                        O homem que antes priorizava sua própria sobrevivência agora coloca o universo
                        acima de si.
                    </p>

                    <p className="mb-3">
                        Esse desfecho não surge de forma abrupta. Ele é construído ao longo de mais de
                        uma década de histórias, conflitos e falhas. A genialidade continua presente,
                        mas já não é o centro. O que define Tony Stark no fim não é sua armadura mais
                        avançada — é a disposição de assumir o peso final da responsabilidade.
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
                        id="icones-cinema"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Por que Tony virou um ícone moderno
                    </h2>

                    <p className="mb-3">
                        Tony Stark rompe com o arquétipo clássico do herói cinematográfico. Ele não é
                        silencioso, não é moralmente perfeito e não representa um ideal inalcançável.
                        Pelo contrário: ele é impulsivo, sarcástico e frequentemente contraditório.
                        Essa imperfeição não enfraquece sua imagem — ela a torna reconhecível.
                    </p>

                    <p className="mb-3">
                        Em um século marcado por excesso de informação, exposição pública e cultura
                        da performance, Tony parece entender o próprio espetáculo. Ele é empresário,
                        celebridade, inventor e símbolo midiático ao mesmo tempo. Sua identidade não
                        está escondida atrás de uma máscara; ela é transmitida ao vivo. Isso o conecta
                        diretamente com o imaginário do século XXI, onde autenticidade e branding
                        coexistem de maneira quase inseparável.
                    </p>

                    <p className="mb-3">
                        Além disso, o sucesso de Tony Stark redefine o próprio cinema de super-herói.
                        O MCU nasce com um protagonista que fala rápido, ironiza a própria grandiosidade
                        e assume falhas em público. Esse tom influencia toda a franquia e estabelece
                        um novo padrão narrativo: heróis podem ser vulneráveis, engraçados e ainda assim
                        profundamente responsáveis.
                    </p>

                    <p className="mb-3">
                        O resultado é um personagem que ultrapassa o roteiro e entra na cultura popular.
                        Tony Stark não é lembrado apenas por batalhas ou armaduras icônicas. Ele é
                        lembrado por frases, atitudes e escolhas morais. Em um mercado saturado de
                        figuras heroicas, ele se destaca porque parece humano demais para ser mito —
                        e mito demais para ser apenas humano.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        Tony Stark redefiniu o arquétipo do herói no cinema contemporâneo. Ele não se
                        tornou icônico por vestir a armadura mais avançada do MCU, mas por atravessar
                        uma jornada moral visível ao público. Diferente do herói clássico que nasce
                        pronto, Tony nasce incompleto — e é justamente essa incompletude que sustenta
                        sua força narrativa.
                    </p>

                    <p className="mb-3">
                        Ao longo de mais de uma década de histórias no Universo Cinematográfico Marvel,
                        acompanhamos não apenas batalhas épicas, mas decisões internas. O ego se transforma
                        em responsabilidade. O humor deixa de ser fuga e passa a ser maturidade. O medo,
                        antes disfarçado por arrogância, se converte em proteção ativa. Cada filme amplia
                        essa transformação até culminar em uma escolha definitiva: colocar o coletivo
                        acima do indivíduo.
                    </p>

                    <p className="mb-3">
                        No fim, a maior tecnologia de Tony Stark não é o reator arc nem a armadura Mark
                        mais sofisticada. É a capacidade de reconhecer falhas e agir apesar delas. Essa
                        escolha de mudança — repetida, consciente e progressiva — é o que transforma um
                        gênio bilionário em um símbolo cultural. O Homem de Ferro pode ter sido o ponto
                        de partida do MCU, mas foi a humanidade de Tony Stark que sustentou seu coração.
                    </p>

                    {/* CTA interno — sequência editorial Homem de Ferro */}
                    <ContinueNoLexara
                        description="Se este foi seu ponto de partida para entender o lado humano do Tony, o próximo passo é observar como essa construção impactou diretamente os filmes seguintes — e como o MCU começou a girar ao redor dele."
                        links={[
                            {
                                href: "/filmes-series/marvel/homem-de-ferro/2-e-3-evolucao-mcu",
                                label: "Próximo: Homem de Ferro 2 e 3 — evolução, conflitos e amadurecimento",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/marvel/homem-de-ferro/legado-tony-stark-mcu",
                                label: "Depois: o legado de Tony Stark e o efeito dominó no MCU",
                            },
                            {
                                href: "/filmes-series/marvel/homem-de-ferro",
                                label: "Voltar à seção Homem de Ferro",
                            },
                            {
                                href: "/filmes-series/marvel",
                                label: "Explorar o hub Marvel",
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
                        A análise de <strong>Tony Stark</strong> apresentada neste artigo parte de dados
                        verificáveis — créditos oficiais, informações de produção, desempenho comercial
                        de <strong>Homem de Ferro (2008)</strong> e seu posicionamento dentro do
                        <strong> Universo Cinematográfico da Marvel (MCU)</strong>. As fontes abaixo
                        oferecem base factual para compreender o contexto histórico do personagem no
                        início da franquia, enquanto a leitura crítica desenvolvida aqui é autoral e
                        editorialmente independente.
                    </p>

                    <p className="mb-3">
                        Ao separar informação confirmada de interpretação analítica, o LEXARA mantém
                        clareza e responsabilidade narrativa. O objetivo não é apenas registrar dados
                        técnicos ou números de bilheteria, mas utilizá-los como sustentação para entender
                        por que <strong>Tony Stark</strong> se tornou o eixo emocional do MCU e um dos
                        personagens mais influentes do cinema de super-heróis no século XXI.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.marvel.com/" rel="noreferrer noopener" target="_blank">
                                Marvel (site oficial) — catálogo, histórico do personagem e posicionamento dentro do MCU
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/title/tt0371746/" rel="noreferrer noopener" target="_blank">
                                IMDb — elenco, equipe técnica, datas de lançamento e ficha completa de produção
                            </a>
                        </li>
                        <li>
                            <a href="https://www.boxofficemojo.com/title/tt0371746/" rel="noreferrer noopener" target="_blank">
                                Box Office Mojo — dados de bilheteria e desempenho comercial global
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> análises de personagens evoluem conforme
                        novas fases e direções criativas surgem no MCU. Aqui, a prioridade é compreender <strong>Tony Stark</strong> como construção narrativa e símbolo cultural dentro
                        da saga iniciada em 2008 — não antecipar movimentos futuros com falsa certeza.
                    </p>
                </section>

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
