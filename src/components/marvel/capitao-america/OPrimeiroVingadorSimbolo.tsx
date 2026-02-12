import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type OPrimeiroVingadorSimboloProps = {
    article: Article;
};

const SECTIONS = [
    { id: "nascimento", label: "O nascimento do símbolo" },
    { id: "propaganda", label: "Propaganda: quando o herói vira produto" },
    { id: "escolha", label: "O soro não cria caráter — ele revela" },
    { id: "relacoes", label: "Peggy, Bucky e a bússola moral" },
    { id: "guerra", label: "HYDRA e o espelho sombrio do patriotismo" },
    { id: "tragedia", label: "A tragédia do ideal absoluto" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string, fallbackLabel?: string) {
    return fallbackLabel ?? iso;
}

function isPublishedNow(publishedAtISO: string) {
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
                Espaço reservado para anúncio (AdSense) — carregado conforme consentimento.
            </p>
        </aside>
    );
}

export default function OPrimeiroVingadorSimbolo({
    article,
}: OPrimeiroVingadorSimboloProps) {
    // ✅ Publicação programada (#1): antes do horário, o artigo NÃO existe publicamente.
    if (!isPublishedNow(article.publishedAtISO)) {
        return (
            <section className="mx-auto max-w-2xl py-20 text-center">
                <h1 className="text-2xl font-bold">Publicação programada</h1>

                <p className="mt-4 text-slate-400">
                    Este artigo ficará disponível em {article.publishedAtLabel ?? article.publishedAtISO}.
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
            { "@type": "Thing", name: "Capitão América" },
            { "@type": "Thing", name: "Steve Rogers" },
            { "@type": "Thing", name: "MCU" },
            { "@type": "Thing", name: "Segunda Guerra Mundial" },
            { "@type": "Thing", name: "Propaganda" },
        ],
    };

    // 🔹 Schema
    const jsonLdBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            breadcrumbItem("Filmes & Séries", "/filmes-series", 1),
            breadcrumbItem("MARVEL", article.categoryHref, 2),
            breadcrumbItem("Capitão América", article.topicHref, 3),
            breadcrumbItem(article.title, article.slug, 4),
        ],
    };

    // ✅ Vídeo (apoio editorial): trailer oficial (YouTube no-cookie)
    const video = {
        embedUrl: "https://www.youtube-nocookie.com/embed/ru0MEXIX_ZE",
        title: "Captain America: The First Avenger (2011) — Trailer oficial",
        heading: "Vídeo (apoio): quando o símbolo é fabricado em público",
        description:
            "Repare como o filme vende o “herói perfeito” para a plateia — e, ao mesmo tempo, semeia o preço humano dessa perfeição. O contraste é o coração do artigo.",
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-capitao-america-o-primeiro-vingador-simbolo"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-capitao-america-o-primeiro-vingador-simbolo"
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
                            title="Ver a seção Capitão América"
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
                        publishedAtLabel={article.publishedAtLabel ?? article.publishedAtISO}
                    />

                    <ArticleCover
                        src={article.coverImage.src}
                        alt={article.coverImage.alt}
                        caption="Capitão América: O Primeiro Vingador (2011) — quando o símbolo nasce em público."
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
                        id="nascimento"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O nascimento do símbolo
                    </h2>

                    <p className="mb-3">
                        &quot;O Primeiro Vingador&quot; começa com uma aposta simples — e perigosíssima: se você fabricar um herói &quot;perfeito&quot;,
                        talvez consiga colar um mundo quebrado com a cola mais antiga da história… esperança. Só que o filme é esperto
                        demais para cair na fantasia limpa. Ele deixa uma pista desde cedo: heróis perfeitos não aparecem do nada. Eles
                        são <strong>projetados</strong>, <strong>apresentados</strong> e, muitas vezes, <strong>vendidos</strong>.
                    </p>

                    <p className="mb-3">
                        É por isso que Steve Rogers funciona como motor dramático. Ele não entra como &quot;o escolhido&quot; no sentido clássico
                        — entra como o improvável. Fisicamente, ele é tudo o que o imaginário militar rejeita: frágil, doente, pequeno.
                        Socialmente, ele é invisível. Só que o filme coloca a câmera onde importa: no que Steve faz quando ninguém está
                        aplaudindo. E o que ele faz é insistir. Insistir em se alistar. Insistir em proteger quem está apanhando.
                        Insistir em dizer &quot;isso está errado&quot; num mundo que já normalizou o errado como rotina.
                    </p>

                    <p className="mb-3">
                        Essa teimosia moral é o verdadeiro &quot;superpoder&quot; inicial. Antes do soro, antes do escudo, antes do uniforme, Steve
                        já tem uma bússola. E é exatamente essa bússola que transforma a origem do Capitão América numa história menos
                        sobre músculo e mais sobre <strong>caráter</strong>: o símbolo nasce quando alguém escolhe fazer o certo sem ter
                        garantia nenhuma de vitória, reconhecimento ou recompensa.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: o MCU não &quot;cria&quot; um Capitão América — ele mostra como um símbolo nasce em público
                                e vira tragédia em privado. Quanto mais o mundo precisa de uma certeza, mais caro fica ser essa certeza.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="propaganda"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Propaganda: quando o herói vira produto
                    </h2>

                    <p className="mb-3">
                        A decisão mais estratégica do filme não é transformar Steve em super-soldado — é transformá-lo, primeiro,
                        em espetáculo. Antes do campo de batalha, vem o palco. Antes do confronto real, vem o número ensaiado.
                        O &quot;Capitão América&quot; nasce como <strong>performance</strong>: figurino chamativo, escudo polido, slogans
                        fáceis de repetir, coreografias que cabem num cartaz. Ele é menos combatente e mais campanha.
                    </p>

                    <p className="mb-3">
                        Essa escolha não é cômica por acaso. Ela é cirúrgica. O filme mostra como o símbolo pode ser fabricado
                        rapidamente quando existe urgência coletiva. A guerra precisa de uma imagem clara, simples, inspiradora.
                        E Steve vira exatamente isso: um produto emocional que vende esperança para o público e vende confiança
                        para o sistema. A narrativa da guerra fica limpa, organizada, quase didática.
                    </p>

                    <p className="mb-3">
                        Mas é aí que a fratura começa a aparecer. Porque Steve não quer ser útil no palco — ele quer ser útil no
                        mundo real. Enquanto o público aplaude a caricatura heroica, o próprio herói sente que está sendo
                        reduzido a mascote. O sistema quer que ele seja <em>visível</em>. Ele quer ser <strong>necessário</strong>.
                        Essa tensão é o início da tragédia do símbolo: quando o mundo te transforma em imagem antes de te permitir
                        ser pessoa.
                    </p>

                    <p className="mb-3">
                        E o filme é sutil ao sugerir algo ainda mais desconfortável: talvez a propaganda funcione bem demais.
                        Talvez o mito seja tão eficiente que quase substitua o homem. Quanto mais o Capitão América cresce como
                        ícone, mais Steve Rogers precisa lutar para não desaparecer dentro da própria bandeira.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">
                                Leitura rápida (sem perder a nuance)
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                O filme usa a propaganda como atalho narrativo porque é a maneira mais rápida de fabricar um mito
                                em tempos de crise. Só que esse atalho tem custo: quanto mais eficiente é a construção do símbolo,
                                mais difícil fica para o homem por trás dele provar que é algo além de um poster patriótico.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                O palco cria o herói público; o conflito nasce quando o homem quer sair da vitrine e entrar na história.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="escolha"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O soro não cria caráter — ele revela
                    </h2>

                    <p className="mb-3">
                        O projeto do &quot;Super Soldado&quot; poderia ser tratado como pura fantasia científica: uma fórmula milagrosa,
                        um laboratório secreto, um corpo transformado da noite para o dia. Mas o filme faz algo mais interessante
                        — ele desloca o foco da ciência para a ética. A pergunta central nunca é &quot;como funciona o soro?&quot;, e sim <strong>quem deve recebê-lo?</strong>
                    </p>

                    <p className="mb-3">
                        Essa escolha muda tudo. Porque poder, no universo do MCU, nunca é neutro. Ele amplifica o que já existe.
                        Se for entregue a alguém movido por ego, o resultado é tirania. Se for entregue a alguém movido por medo,
                        o resultado é controle. O soro não fabrica virtude. Ele escancara intenções.
                    </p>

                    <p className="mb-3">
                        É aqui que Steve Rogers deixa de ser improvável e passa a ser inevitável. Sua coragem não vem de bravata,
                        nem de desejo de glória. Vem de algo menos cinematográfico e mais difícil: ele apanha… e volta. Ele falha…
                        e insiste. Ele perde… e continua escolhendo o lado mais fraco. Não é força física. É uma teimosia moral que
                        não depende de plateia.
                    </p>

                    <p className="mb-3">
                        Quando o soro entra em cena, o filme não está criando um herói — está ampliando uma convicção. O corpo muda,
                        mas o eixo já estava ali. E é justamente por isso que a transformação funciona narrativamente: o poder
                        não transforma Steve em outra pessoa. Ele torna visível aquilo que sempre esteve presente — um homem que
                        simplesmente não tolera ver alguém sendo esmagado e ficar parado.
                    </p>

                    <p className="mb-3">
                        O detalhe sutil (e poderoso) é que essa amplificação também aumenta a responsabilidade. Quanto maior o
                        alcance do gesto, maior o peso da decisão. O soro entrega força, mas também remove a desculpa da impotência.
                        A partir dali, cada escolha deixa de ser pessoal e passa a ter impacto coletivo.
                    </p>

                    <p className="mb-3">
                        E é nesse ponto que o filme dá seu recado mais maduro: caráter não nasce do poder. É o poder que nasce
                        do caráter. O escudo só se torna símbolo porque quem o carrega já tinha decidido, muito antes do laboratório,
                        qual lado da história queria defender.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="relacoes"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Peggy, Bucky e a bússola moral
                    </h2>

                    <p className="mb-3">
                        Se o escudo representa o símbolo, Peggy e Bucky representam o chão onde esse símbolo pisa.
                        Eles não são acessórios narrativos — são âncoras. São a lembrança constante de que, antes de
                        virar bandeira, Steve Rogers era um homem tentando encontrar seu lugar no mundo.
                    </p>

                    <p className="mb-3">
                        Peggy Carter não ocupa o espaço de &quot;prêmio romântico&quot; — e é justamente aí que o filme acerta.
                        Ela não admira o uniforme; ela admira a convicção. Ela enxerga Steve antes do experimento,
                        antes do palco, antes da legenda patriótica. O que a atrai não é o músculo, é o eixo moral.
                        Peggy funciona como espelho lúcido: ela reconhece o potencial, mas também exige responsabilidade.
                        Ao tratá-lo como igual, ela impede que ele se esconda atrás do símbolo.
                    </p>

                    <p className="mb-3">
                        Já Bucky representa algo mais íntimo e silencioso. Ele é o vínculo com a vida comum,
                        com a amizade que não depende de títulos ou uniformes. Bucky conheceu Steve quando ele
                        ainda era &quot;pequeno&quot; aos olhos do mundo — e isso importa. Porque a guerra tenta arrancar
                        exatamente esse pedaço de humanidade: a memória de quem você era antes de virar mito.
                    </p>

                    <p className="mb-3">
                        O contraste é poderoso. Enquanto o mundo passa a enxergar o Capitão América como ícone,
                        Peggy e Bucky continuam enxergando Steve. E essa diferença sustenta o drama: o símbolo
                        precisa ser coerente; o homem precisa ser compreendido. Sem essas relações, o herói
                        correria o risco de virar caricatura — forte por fora, vazio por dentro.
                    </p>

                    <p className="mb-3">
                        É através deles que o filme planta sua camada mais humana: o heroísmo não é uma
                        performance solitária. Ele é testado nas relações. É nas conversas, nos olhares,
                        nas perdas e nos silêncios que Steve é lembrado de que proteger o mundo começa
                        por proteger pessoas concretas.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        A sacada do MCU aqui
                    </h3>

                    <p className="mb-3">
                        O MCU entende um risco clássico das histórias de origem: quanto maior o mito,
                        mais distante o personagem pode ficar. Por isso, ancora Steve em laços afetivos.
                        Quanto mais &quot;grande&quot; o Capitão América se torna em escala simbólica, mais essencial
                        é lembrar que ele sente medo, hesita, ama e perde.
                    </p>

                    <p className="mb-3">
                        Essa estratégia impede que o herói vire estátua. Porque estátuas não duvidam.
                        Não sofrem. Não erram. Steve, ao contrário, carrega o peso dessas emoções —
                        e é justamente isso que torna o símbolo convincente. O escudo só tem significado
                        porque há alguém atrás dele disposto a pagar o preço humano de carregá-lo.
                    </p>

                    <h2
                        id="guerra"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        HYDRA e o espelho sombrio do patriotismo
                    </h2>

                    <p className="mb-3">
                        HYDRA não surge apenas como &quot;o vilão da vez&quot;. Ela surge como distorção lógica.
                        Se o Capitão América representa o ideal elevado do patriotismo — proteção,
                        sacrifício, responsabilidade — HYDRA representa a pergunta incômoda que sempre
                        ronda símbolos nacionais: <em>e se a bandeira for só uma desculpa para concentrar poder?</em>
                    </p>

                    <p className="mb-3">
                        A organização não nega o discurso de grandeza. Ela o radicaliza. Não rejeita a ideia
                        de superioridade — apenas a assume sem pudor. Onde há promessa de ordem,
                        ela entrega controle. Onde há discurso de segurança, ela instala dominação.
                        HYDRA funciona como uma caricatura perigosa: remove a ética, mantém a ambição.
                    </p>

                    <p className="mb-3">
                        O Caveira Vermelha é o reflexo mais claro dessa lógica. Ele também quer ser mais
                        do que homem. Também deseja transcender limites. Mas enquanto Steve entende
                        o poder como responsabilidade, Schmidt o enxerga como direito. Steve protege.
                        Schmidt conquista. Steve assume risco. Schmidt impõe medo.
                    </p>

                    <p className="mb-3">
                        Isso transforma o conflito em algo mais sofisticado do que &quot;bem contra mal&quot;.
                        O embate deixa de ser físico e passa a ser filosófico: é a disputa entre ética
                        e vaidade vestida de missão. Entre servir algo maior e usar algo maior para
                        servir a si mesmo.
                    </p>

                    <p className="mb-3">
                        O filme sugere algo ainda mais inquietante: ambos nasceram da mesma obsessão
                        por superação. Ambos passaram por experiências que ampliaram suas capacidades.
                        A diferença não está na potência — está no propósito. E propósito é aquilo que
                        o soro não pode fabricar.
                    </p>

                    <p className="mb-3">
                        Ao colocar HYDRA como espelho sombrio, o MCU faz um movimento maduro:
                        ele questiona o próprio conceito de patriotismo. O símbolo pode inspirar,
                        mas também pode justificar excessos. Pode unir, mas também pode manipular.
                        O Capitão América só se sustenta como ideal porque existe uma linha ética
                        que ele se recusa a cruzar — mesmo quando cruzá-la seria mais fácil.
                    </p>

                    <p className="mb-3">
                        E é exatamente aí que a guerra deixa de ser apenas geopolítica e passa a ser
                        interna. Porque lutar contra HYDRA não é só derrotar um inimigo externo.
                        É provar, a cada escolha, que o símbolo não será capturado pelo mesmo desejo
                        de poder que ele afirma combater.
                    </p>

                    <ArticleVideo
                        embedUrl={video.embedUrl}
                        title={video.title}
                        heading={video.heading}
                        description={video.description}
                    />

                    <h2
                        id="tragedia"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        A tragédia do ideal absoluto
                    </h2>

                    <p className="mb-3">
                        O filme planta uma melancolia silenciosa que só cresce com o tempo: o símbolo
                        precisa ser coerente o tempo inteiro. Ele não pode hesitar demais. Não pode
                        fraquejar demais. Não pode errar demais. Só que pessoas não funcionam assim.
                        Pessoas cansam. Pessoas mudam. Pessoas perdem — e às vezes duvidam.
                    </p>

                    <p className="mb-3">
                        É aqui que nasce a tragédia central do Capitão América. Steve começa como
                        &quot;certeza&quot; porque o mundo precisa desesperadamente de uma certeza. Em tempos
                        de guerra, nuance soa como fraqueza. Complexidade parece ameaça. O símbolo
                        surge para simplificar o caos — para dizer &quot;este é o lado certo&quot;.
                    </p>

                    <p className="mb-3">
                        Mas simplificar o mundo tem um preço. Para continuar sendo essa referência
                        moral inabalável, Steve precisa repetir escolhas difíceis sem pausa. Cada
                        sacrifício reafirma o ideal… e ao mesmo tempo afasta o homem da vida comum.
                        O que começa como decisão vira expectativa. O que vira expectativa se
                        transforma em obrigação. E obrigação constante molda identidade.
                    </p>

                    <p className="mb-3">
                        A dor não está no gesto heroico isolado — está na repetição. Está no fato
                        de que o símbolo não pode simplesmente &quot;tirar o uniforme&quot; quando a missão
                        termina. Porque o mundo passa a enxergar o Capitão América antes de enxergar
                        Steve Rogers. E viver como ideal permanente significa abdicar de partes
                        muito humanas: tempo, relações, descanso, futuro.
                    </p>

                    <p className="mb-3">
                        O filme não dramatiza isso com discursos longos. Ele sugere. E é nessa
                        sugestão que mora a maturidade do MCU. O herói que começa como propaganda,
                        depois como promessa, termina como sacrifício consciente. Ele sabe o que
                        está perdendo — e escolhe mesmo assim.
                    </p>

                    <p className="mb-3">
                        Essa é a verdadeira tragédia do ideal absoluto: quando você representa algo
                        maior que si mesmo, sua vida deixa de ser apenas sua. O símbolo inspira
                        milhões, mas cobra individualmente. E, no fim, o que permanece não é a
                        perfeição — é a decisão contínua de continuar sendo o que o mundo precisa,
                        mesmo quando isso dói.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        &quot;O Primeiro Vingador&quot; não é apenas uma história de origem. É uma tese sobre símbolos.
                        O MCU pega um ícone patriótico, tradicionalmente tratado como certeza moral absoluta,
                        e o reconstrói como drama humano. Ao colocar o &quot;ideal&quot; sobre os ombros de um homem
                        real, o filme transforma propaganda em personagem — e personagem em tragédia.
                    </p>

                    <p className="mb-3">
                        Steve Rogers funciona porque nunca é reduzido a poder. Ele é definido por escolha.
                        Escolher entrar na guerra quando ninguém o queria lá. Escolher proteger antes de atacar.
                        Escolher sacrificar antes de dominar. O escudo deixa de ser arma e passa a ser
                        compromisso. Não representa força bruta, mas prioridade moral: <strong>proteger primeiro</strong>,
                        mesmo quando proteger custa caro.
                    </p>

                    <p className="mb-3">
                        É essa decisão repetida que sustenta o mito. Não a estética. Não o uniforme.
                        Não o slogan. O Capitão América sobrevive como símbolo porque o homem por trás
                        dele continua escolhendo coerência, mesmo quando o contexto muda. E o contexto muda —
                        rápido, imprevisível, desconfortável.
                    </p>

                    <p className="mb-3">
                        Ao final, o filme deixa uma pergunta que ecoa para além da Segunda Guerra:
                        o que acontece quando um ideal atravessa o tempo e encontra um mundo que já não
                        compartilha as mesmas certezas? Se o símbolo nasce como promessa pública,
                        o arco inteiro passa a ser sobre o preço de continuar merecendo essa promessa
                        quando as cores ficam mais cinza.
                    </p>

                    <p>
                        É por isso que &quot;O Primeiro Vingador&quot; importa dentro do MCU. Ele não apresenta
                        apenas um herói. Ele estabelece um padrão moral que será testado, tensionado
                        e, em certos momentos, quase quebrado. O símbolo nasceu. Agora resta descobrir
                        se ele consegue sobreviver ao mundo que ajudou a salvar.
                    </p>

                    {/* CTA interno — sequência editorial Capitão América */}
                    <ContinueNoLexara
                        description="Se este foi seu ponto de partida, aqui vai a sequência natural de leitura para entender como o símbolo atravessa a guerra, enfrenta a culpa histórica e é testado quando o mundo deixa de ser preto e branco."
                        links={[
                            {
                                href: "/filmes-series/marvel/capitao-america/culpa-historica-e-ideal",
                                label: "Próximo: Culpa histórica e o peso do ideal",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/marvel/capitao-america/o-soldado-invernal-analise",
                                label: "Depois: O Soldado Invernal — paranoia, política e ruptura",
                            },
                            {
                                href: "/filmes-series/marvel/capitao-america/guerra-civil-escolhas",
                                label: "Fechar o ciclo: Guerra Civil — quando o ideal divide heróis",
                            },
                            {
                                href: "/filmes-series/marvel/capitao-america",
                                label: "Voltar à seção Capitão América",
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
                        As referências abaixo sustentam os dados objetivos utilizados neste artigo —
                        créditos, ficha técnica, material promocional e desempenho comercial.
                        Elas funcionam como base verificável para a conversa.
                        A interpretação crítica, os paralelos temáticos e as leituras simbólicas
                        são construções originais do LEXARA.
                    </p>

                    <p className="mb-3">
                        Separar dado de análise é parte do compromisso editorial: primeiro,
                        entendemos o que foi oficialmente apresentado; depois, refletimos sobre
                        o que isso significa dentro do MCU e no imaginário cultural mais amplo.
                        O símbolo pode ser narrativo, mas a informação precisa ser concreta.
                    </p>

                    <ul>
                        <li>
                            <a
                                href="https://www.marvel.com/watch/trailers-and-extras/marvel-studios-captain-america-the-first-avenger-official-trailer"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Marvel.com — trailer oficial e material promocional de Captain America: The First Avenger
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.imdb.com/title/tt0458339/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                IMDb — ficha técnica, elenco, direção e dados de produção
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.boxofficemojo.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Box Office Mojo — números de bilheteria e contexto de mercado
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> símbolos inspiram, mas também carregam
                        peso histórico e político. Esta análise parte de dados verificáveis e avança
                        para interpretação consciente, evitando exageros e simplificações fáceis.
                        O objetivo é compreender a força do mito sem ignorar o custo humano que o sustenta.
                    </p>
                </section>

                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em{" "}
                        <span className="text-slate-300">
                            {article.publishedAtLabel ?? article.publishedAtISO}
                        </span>
                        .{" "}
                        <span className="text-slate-500">
                            ({formatISOToDateLabel(article.publishedAtISO, article.publishedAtLabel)})
                        </span>
                    </p>
                </footer>
            </article>
        </>
    );
}
