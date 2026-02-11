import Link from "next/link";
import Script from "next/script";
import { Film, List, Quote, Shield } from "lucide-react";

import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type HomemDeFerro2008Props = {
    article: Article;
};

const SECTIONS = [
    { id: "ponto-zero", label: "O ponto zero do MCU" },
    { id: "tom-mcu", label: "O tom: carisma, improviso e consequências" },
    { id: "tony-stark", label: "Tony Stark: o herói que se denuncia" },
    { id: "tecnologia-mito", label: "Tecnologia como mito moderno" },
    { id: "fundacao-universo", label: "A fundação: regras do universo e continuidade" },
    { id: "pos-creditos", label: "Pós-créditos: a faísca do “universo”" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    return iso;
}

function isPublishedNow(publishedAtISO: string) {
    return new Date(publishedAtISO).getTime() <= Date.now();
}

function AdSlot({ label }: { label: string }) {
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

export default function HomemDeFerro2008({ article }: HomemDeFerro2008Props) {
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
            { "@type": "Thing", name: "Marvel Cinematic Universe" },
            { "@type": "Thing", name: "Marvel Studios" },
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

    // ✅ Vídeo (apoio editorial): trailer oficial (YouTube no-cookie)
    const video = {
        embedUrl: "https://www.youtube-nocookie.com/embed/8ugaeA-nMTc",
        title: "Homem de Ferro (2008) — Trailer oficial",
        heading: "Vídeo (apoio): o trailer como bússola de tom",
        description:
            "Use o trailer para sentir a mistura que o filme cravou no DNA do MCU: humor na medida, perigo real e tecnologia como espetáculo narrativo (não só efeito visual).",
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-homem-de-ferro-2008-nascimento-mcu"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-homem-de-ferro-2008-nascimento-mcu"
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
                            title="Ver a seção Homem de Ferro"
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
                        caption="O filme que definiu a voz do MCU: espetáculo tecnológico com personalidade."
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
                        id="ponto-zero"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O ponto zero do MCU
                    </h2>

                    <p className="mb-3">
                        Hoje é fácil olhar para o <strong>MCU</strong> e enxergar uma engrenagem perfeitamente montada: sagas conectadas,
                        eventos globais, heróis que atravessam filmes como peças de um tabuleiro cuidadosamente desenhado. Mas, em 2008,
                        nada disso era certeza. O que existia era apenas um risco calculado: <strong>Homem de Ferro (2008)</strong> precisava
                        funcionar como um filme completo, autônomo, convincente por si só — e, ao mesmo tempo, plantar discretamente a
                        semente de algo maior sem parecer um trailer estendido de projetos futuros.
                    </p>

                    <p className="mb-3">
                        Essa tensão entre independência e continuidade é o que torna o filme histórico. Ele não começa prometendo
                        &quot;universo compartilhado&quot;, não depende de referências externas e não exige conhecimento prévio. Em vez disso,
                        aposta no que realmente sustenta qualquer franquia duradoura: personagem forte, conflito claro e um mundo que
                        parece continuar respirando fora da tela. O espectador não sente que está assistindo a um capítulo de algo
                        maior — sente que está presenciando o nascimento orgânico de uma identidade.
                    </p>

                    <p className="mb-3">
                        O resultado é um começo raro no cinema de super-heróis: um blockbuster que confia no carisma do protagonista,
                        trata a tecnologia como parte da narrativa (e não apenas espetáculo visual) e utiliza o humor como instrumento
                        de tensão e humanidade, não como escudo para esconder fragilidades dramáticas. É aqui que o tom do
                        <strong> Universo Cinematográfico da Marvel</strong> começa a se formar: leve, mas não superficial; grandioso,
                        mas ancorado em decisões pessoais.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: o MCU não nasceu de &quot;multiverso&quot;. Nasceu de uma decisão simples —
                                <strong> fazer um herói com voz própria</strong> e construir um mundo que parece continuar existindo
                                quando a câmera desliga.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="tom-mcu"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O tom: carisma, improviso e consequências
                    </h2>

                    <p className="mb-3">
                        Se <strong>Homem de Ferro (2008)</strong> inaugura o MCU estruturalmente, é aqui que ele define seu tom emocional.
                        O filme encontra uma combinação que se tornaria assinatura do <strong>Universo Cinematográfico da Marvel</strong>:
                        leveza sem superficialidade, humor sem fuga dramática, espetáculo tecnológico sustentado por conflito humano.
                        Tony Stark fala rápido, responde com ironia, improvisa diante do perigo — mas o roteiro nunca usa esse carisma
                        como escudo para apagar erros. O charme existe, mas ele convive com falhas reais, decisões egoístas e consequências
                        que não podem ser ignoradas.
                    </p>

                    <p className="mb-3">
                        Essa é a virada que diferencia o filme de muitas origens heroicas anteriores. Não estamos diante de um herói
                        moralmente puro tentando proteger o mundo; estamos diante de um gênio industrial acostumado ao controle,
                        confrontado com o impacto concreto de suas próprias criações. O conflito não nasce apenas de um vilão externo,
                        mas de uma responsabilidade interna. E é nesse choque — entre ego, poder e culpa — que o tom do MCU encontra
                        equilíbrio: o humor humaniza, mas a consequência estrutura.
                    </p>

                    <p className="mb-3">
                        Ao estabelecer que o riso pode coexistir com risco real, <strong>Homem de Ferro</strong> constrói um modelo
                        replicável para um universo compartilhado. O público entende que pode se divertir, mas também percebe que
                        decisões importam e deixam marcas. Essa combinação de carisma e responsabilidade se tornaria uma das
                        bases narrativas do MCU, permitindo que filmes futuros transitassem entre leveza e gravidade sem quebrar
                        a coerência interna.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">O que o MCU aprendeu aqui</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Um universo compartilhado só funciona quando cada filme tem identidade própria, mas respeita regras
                                emocionais comuns. Em <strong>Homem de Ferro (2008)</strong>, essa identidade nasce da fusão entre
                                ação tecnológica, humor centrado no personagem e consequência moral como eixo dramático.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                O humor não dilui o drama — ele revela quem Tony Stark é quando a armadura não resolve o problema.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="tony-stark"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Tony Stark: o herói que se denuncia
                    </h2>

                    <p className="mb-3">
                        Diferente de muitos protagonistas clássicos do cinema de super-heróis, Tony Stark não constrói uma imagem
                        de virtude inabalável. Em <strong>Homem de Ferro (2008)</strong>, ele é apresentado como gênio bilionário,
                        celebridade midiática e símbolo de uma indústria que lucra com poder. Ele fala demais, provoca demais,
                        se exibe demais — e tenta resolver tudo com inteligência e controle. Não existe &quot;máscara emocional&quot;.
                        Existe transparência quase arrogante. Essa exposição constante não o enfraquece como personagem;
                        ao contrário, o torna surpreendentemente humano.
                    </p>

                    <p className="mb-3">
                        O filme não tenta suavizar essas falhas para torná-lo mais aceitável. Tony não é humilde, não é puro,
                        não é exemplo moral no início da história. Ele erra por excesso de confiança, ignora impactos
                        sociais de suas criações e só muda quando confrontado com o resultado direto de suas próprias
                        decisões. Esse arco de responsabilidade transforma o personagem em algo raro dentro de um <strong>universo compartilhado</strong>: um herói que nasce do erro, não da perfeição.
                    </p>

                    <p className="mb-3">
                        É justamente por isso que Tony Stark funciona como fundação do <strong>MCU</strong>. Um universo longo
                        precisa de espaço para crescimento, conflito interno e evolução dramática. Ao começar com alguém
                        falho, o <strong>Universo Cinematográfico da Marvel</strong> cria terreno fértil para continuidade.
                        Cada escolha futura carrega memória, cada decisão tem peso acumulado. O público não acompanha
                        apenas batalhas; acompanha transformação. E essa transformação começa aqui — quando o poder
                        deixa de ser exibicionismo e passa a ser responsabilidade.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="tecnologia-mito"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Tecnologia como mito moderno
                    </h2>

                    <p className="mb-3">
                        Em <strong>Homem de Ferro (2008)</strong>, a armadura não surge como fantasia conveniente entregue ao público
                        sem explicação. Ela é construída passo a passo, em ambiente improvisado, entre erro e dor, falha e correção.
                        O espectador acompanha solda, teste, combustão instável, impacto físico. Essa escolha narrativa faz toda
                        diferença: a tecnologia não é mágica disfarçada, é engenharia dramatizada. E ao vender a sensação de processo,
                        o filme aumenta a credibilidade do que, em essência, é extraordinário.
                    </p>

                    <p className="mb-3">
                        Essa construção cuidadosa é o que transforma a armadura em algo maior do que um traje de super-herói.
                        Dentro do <strong>MCU</strong>, ela funciona como símbolo do mito moderno: o poder não vem dos deuses,
                        nem de acidentes cósmicos, mas da capacidade humana de criar, testar e aperfeiçoar. A tecnologia,
                        nesse contexto, não substitui o conflito — ela o amplia. Cada melhoria técnica carrega também uma
                        decisão moral. Cada atualização é um reflexo da evolução (ou da obsessão) de <strong>Tony Stark</strong>.
                    </p>

                    <p className="mb-3">
                        No fundo, a armadura é um espelho. Ela amplifica o que Tony já era antes mesmo de vestir metal.
                        Se ele é arrogante, a armadura potencializa sua autoconfiança. Se ele aprende responsabilidade,
                        ela se torna ferramenta de proteção. Por isso o conflito central nunca foi simplesmente &quot;ele consegue voar?&quot;,
                        mas sim <strong>quem ele se torna quando pode</strong>. O poder não é o clímax da história — é o teste.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        A diferença que muda tudo: poder com assinatura
                    </h3>

                    <p className="mb-3">
                        Muitos heróis do cinema ganham habilidades por destino, acidente científico ou herança mística.
                        Tony Stark cria o próprio poder com suas mãos. Essa escolha narrativa muda completamente o peso
                        dramático da origem. Se você constrói a arma, você carrega responsabilidade direta por seu impacto.
                        Em <strong>Homem de Ferro</strong>, o filme não pergunta apenas se a tecnologia funciona — ele questiona
                        quem responde pelas consequências do que foi criado. E é essa pergunta que ajuda a definir o <strong>Universo Cinematográfico da Marvel</strong> desde o início: poder não é dom gratuito,
                        é decisão contínua.
                    </p>

                    <h2
                        id="fundacao-universo"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        A fundação: regras do universo e continuidade
                    </h2>

                    <p className="mb-3">
                        O <strong>MCU</strong> não nasce exigindo fé cega do espectador. Em vez de pedir que o público aceite
                        um mundo extraordinário sem questionamento, <strong>Homem de Ferro (2008)</strong> estabelece
                        regras simples, reconhecíveis e ancoradas na realidade: existe política internacional,
                        existe indústria armamentista, existe interesse econômico, existe repercussão pública.
                        O mundo reage às ações de Tony Stark. A mídia comenta. Governos observam.
                        Decisões geram consequências além do campo de batalha.
                    </p>

                    <p className="mb-3">
                        Essa escolha estrutural é o que diferencia o início do <strong>Universo Cinematográfico da Marvel</strong> de muitas franquias que dependem apenas de escala e espetáculo. Ao criar um ambiente onde
                        tecnologia, poder e responsabilidade coexistem dentro de sistemas reconhecíveis,
                        o filme constrói credibilidade narrativa. Quando novos personagens e histórias começam
                        a se conectar nos capítulos seguintes, essa expansão não parece &quot;mágica de roteiro&quot; —
                        parece continuidade orgânica de um mundo que já estava funcionando.
                    </p>

                    <p className="mb-3">
                        É por isso que <strong>Homem de Ferro</strong> continua sendo ponto de referência mesmo após
                        dezenas de produções do MCU. Ele não depende de conhecimento prévio, não exige que o
                        espectador saiba o que virá depois. Funciona plenamente como história isolada.
                        Mas, ao terminar, deixa a sensação clara de que algo maior foi ativado.
                        Não é promessa exagerada — é estrutura sólida. O universo não é anunciado;
                        ele é sugerido por meio de coerência.
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
                        id="pos-creditos"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Pós-créditos: a faísca do "universo"
                    </h2>

                    <p className="mb-3">
                        A cena pós-créditos se tornaria uma das marcas registradas do <strong>MCU</strong>, mas em
                        <strong> Homem de Ferro (2008)</strong> ela ainda não era fórmula — era experimento.
                        E funciona justamente porque é contida. Não tenta reescrever o filme, não corrige
                        lacunas narrativas e não transforma o final em propaganda de próximos capítulos.
                        Ela apenas amplia o horizonte com precisão cirúrgica.
                    </p>

                    <p className="mb-3">
                        O que essa breve sequência faz é simples e poderoso: introduz a ideia de que
                        o mundo apresentado não termina ali. Existe estrutura além do protagonista,
                        existe organização, existe articulação estratégica. O <strong>Universo Cinematográfico da Marvel</strong> não é anunciado com fogos de artifício; ele é insinuado com naturalidade.
                        Ao invés de prometer &quot;mil coisas&quot;, a cena oferece uma única informação clara:
                        há outras peças no tabuleiro — e elas já estão se movendo.
                    </p>

                    <p className="mb-3">
                        Esse detalhe muda tudo. Porque, ao contrário de franquias que dependem de
                        anúncios grandiosos, o MCU nasce de uma extensão coerente da própria história.
                        A pós-créditos não substitui o impacto do filme; ela o complementa.
                        Não é um atalho para o futuro — é a confirmação de que o mundo construído
                        ao longo da narrativa é grande o suficiente para continuar.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        <strong>Homem de Ferro (2008)</strong> não &quot;criou um universo&quot; sozinho — e talvez esse seja
                        justamente o ponto. O que ele construiu foi algo mais raro e mais difícil de alcançar:
                        confiança. Confiança de que o público aceitaria acompanhar um protagonista falho,
                        moralmente ambíguo, inserido em um mundo onde decisões têm consequência real.
                        Confiança de que humor e responsabilidade poderiam coexistir sem anular o peso dramático.
                        Confiança de que tecnologia, quando tratada como linguagem narrativa, poderia sustentar
                        um mito contemporâneo.
                    </p>

                    <p className="mb-3">
                        Antes de sagas épicas, antes de eventos globais e antes de multiversos,
                        o <strong>MCU</strong> começou como algo surpreendentemente simples:
                        um personagem com voz própria, um filme com identidade clara e uma estrutura
                        que permitia continuidade sem depender de promessas grandiosas.
                        O <strong>Universo Cinematográfico da Marvel</strong> nasce aqui não como espetáculo
                        acumulado, mas como coerência construída.
                    </p>

                    <p>
                        Talvez seja por isso que, mesmo após dezenas de produções e anos de expansão,
                        o início ainda pareça tão sólido. <strong>Homem de Ferro</strong> não tenta ser
                        &quot;evento&quot; antes da hora. Ele tenta ser um bom filme. E ao fazer isso,
                        estabelece a base que tornaria possível tudo o que veio depois.
                    </p>

                    {/* CTA interno — sequência editorial Homem de Ferro */}
                    <ContinueNoLexara
                        description="Se este foi seu ponto de partida, aqui vai a sequência natural de leitura para entender como o MCU se organizou ao redor do Tony — e o que mudou quando ele virou o centro do tabuleiro."
                        links={[
                            {
                                href: "/filmes-series/marvel/homem-de-ferro/tony-stark-personagem",
                                label: "Próximo: Tony Stark — carisma, falhas e o preço do ego",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/marvel/homem-de-ferro/2-e-3-evolucao-mcu",
                                label: "Depois: Homem de Ferro 2 e 3 — evolução, ruído e reinvenção",
                            },
                            {
                                href: "/filmes-series/marvel/homem-de-ferro/legado-tony-stark-mcu",
                                label: "Fechar o ciclo: o legado do Tony e o efeito dominó no MCU",
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
                        A análise de <strong>Homem de Ferro (2008)</strong> apresentada ao longo deste artigo parte
                        de dados verificáveis — créditos oficiais, informações de produção, desempenho comercial
                        e posicionamento histórico dentro do <strong>MCU</strong>. As fontes abaixo oferecem base
                        factual para compreender o contexto do filme no início do
                        <strong> Universo Cinematográfico da Marvel</strong>, enquanto a leitura crítica
                        desenvolvida aqui é autoral e editorialmente independente.
                    </p>

                    <p className="mb-3">
                        Ao separar informação confirmada de interpretação analítica, o LEXARA busca manter
                        clareza e responsabilidade narrativa. O objetivo não é apenas registrar números
                        ou listar fatos técnicos, mas utilizá-los como sustentação para compreender por que <strong>Homem de Ferro</strong> se tornou o ponto de partida estrutural de uma das
                        maiores franquias do cinema contemporâneo.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.marvel.com/" rel="noreferrer noopener" target="_blank">
                                Marvel (site oficial) — catálogo, histórico do personagem e posicionamento dentro do MCU
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/" rel="noreferrer noopener" target="_blank">
                                IMDb — elenco, equipe técnica, datas de lançamento e ficha completa de produção
                            </a>
                        </li>
                        <li>
                            <a href="https://www.boxofficemojo.com/" rel="noreferrer noopener" target="_blank">
                                Box Office Mojo — dados de bilheteria e desempenho comercial global
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> análises de franquias evoluem com o tempo,
                        porque decisões de estúdio e direções criativas também mudam. Aqui, a prioridade
                        é compreender <strong>Homem de Ferro (2008)</strong> como fundação de linguagem,
                        tom e estrutura do MCU — não antecipar movimentos futuros com falsa certeza.
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
