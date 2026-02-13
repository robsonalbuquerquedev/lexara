import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type ThorNoMcuEvolucaoProps = {
    article: Article;
};

const SECTIONS = [
    { id: "virada", label: "A virada real: consciência, não poder" },
    { id: "asgard", label: "O príncipe: ego, honra e punição" },
    { id: "perdas", label: "O herói: perdas como treinamento emocional" },
    { id: "humor", label: "Humor como defesa — e como maturidade" },
    { id: "responsabilidade", label: "Responsabilidade: escolher o certo sem aplauso" },
    { id: "porque-importa", label: "Por que essa jornada funciona no MCU" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    try {
        return new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "short",
            timeStyle: "short",
            timeZone: "America/Recife",
        }).format(new Date(iso));
    } catch {
        return iso;
    }
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

export default function ThorNoMcuEvolucao({ article }: ThorNoMcuEvolucaoProps) {
    // ✅ Publicação programada (#1): antes do horário, o artigo NÃO existe publicamente.
    if (!isPublishedNow(article.publishedAtISO)) {
        return (
            <section className="mx-auto max-w-2xl py-20 text-center">
                <h1 className="text-2xl font-bold">Publicação programada</h1>

                <p className="mt-4 text-slate-400">
                    Este artigo ficará disponível em{" "}
                    <span className="text-slate-200">{article.publishedAtLabel ?? formatISOToDateLabel(article.publishedAtISO)}</span>.
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
            { "@type": "Thing", name: "Thor" },
            { "@type": "Thing", name: "Marvel Cinematic Universe" },
            { "@type": "Thing", name: "Jornada do herói" },
            { "@type": "Thing", name: "Luto e amadurecimento" },
        ],
    };

    // 🔹 Schema
    const jsonLdBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            breadcrumbItem("Filmes & Séries", "/filmes-series", 1),
            breadcrumbItem("MARVEL", article.categoryHref, 2),
            breadcrumbItem("Thor", article.topicHref, 3),
            breadcrumbItem(article.title, article.slug, 4),
        ],
    };

    // ✅ Vídeo (apoio editorial): trailer oficial (YouTube no-cookie)
    const video = {
        embedUrl: "https://www.youtube-nocookie.com/embed/JOddp-nlNvQ",
        title: "Thor (2011) — Trailer oficial",
        heading: "Vídeo (apoio): a queda que inicia a transformação",
        description:
            "Use o trailer como “termômetro” do primeiro Thor: o filme já diz que a história não é sobre ganhar força — é sobre merecer poder, aprender limites e encarar consequências.",
    } as const;

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-thor-thor-no-mcu-evolucao"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-thor-no-mcu-evolucao"
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
                            title="Ver a seção Thor"
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
                        publishedAtLabel={article.publishedAtLabel ?? formatISOToDateLabel(article.publishedAtISO)}
                    />

                    <ArticleCover
                        src={article.coverImage.src}
                        alt={article.coverImage.alt}
                        caption="No MCU, Thor só vira herói completo quando aceita perder — e ainda assim escolher proteger."
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
                        id="virada"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        A virada real: consciência, não poder
                    </h2>

                    <p className="mb-3">
                        Thor sempre teve força. O detalhe é que, por muito tempo, ele confundiu força com direito — como se nascer
                        &quot;grande&quot; fosse o mesmo que ser digno. E é justamente por isso que a maior transformação dele no MCU não
                        acontece no martelo, nem no raio, nem no número de inimigos derrotados. A virada acontece por dentro:
                        quando o príncipe impulsivo começa a entender o peso do que faz, do que quebra e do que perde.
                    </p>

                    <p className="mb-3">
                        Quando o MCU decide &quot;quebrar&quot; Thor, a mensagem não é sobre humilhar um deus. É sobre colocar limite em um
                        personagem que ainda não tinha limite. Poder sem maturidade vira risco para os outros — e, cedo ou tarde,
                        vira risco para si mesmo. O arco do Thor, então, vira um estudo de responsabilidade: aquela que aparece
                        quando você percebe que nem toda guerra é glória, nem toda vitória é mérito, e nem toda &quot;honra&quot; é, de fato,
                        honra.
                    </p>

                    <p className="mb-3">
                        O que torna isso tão forte é a lógica emocional: o MCU não transforma Thor em herói adicionando habilidade.
                        Ele transforma Thor em herói retirando certezas. Quando o mundo para de se curvar, quando a vida não &quot;faz
                        sentido&quot; do jeito que ele aprendeu em Asgard, ele precisa escolher quem é sem a coroa, sem a aprovação e,
                        em muitos momentos, sem a promessa de final feliz.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: Thor não fica mais herói quando fica mais forte — ele fica mais herói quando aprende
                                a perder sem virar monstro (ou criança mimada).
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="asgard"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O príncipe: ego, honra e punição
                    </h2>

                    <p className="mb-3">
                        No início do MCU, Thor não é exatamente um herói — ele é um herdeiro. Criado sob a sombra de um trono e
                        alimentado por histórias de conquista, ele cresce acreditando que destino e mérito são a mesma coisa.
                        Seu problema nunca foi falta de coragem; foi excesso de certeza. Ele age como se o mundo já lhe devesse
                        respeito, como se nascer poderoso fosse prova automática de grandeza.
                    </p>

                    <p className="mb-3">
                        É por isso que ele se comporta como um &quot;tanque sem volante&quot;: força impressionante, direção questionável.
                        Ele confunde honra com orgulho ferido, liderança com imposição, bravura com impulsividade. Para Thor,
                        naquele momento, vencer é suficiente — pouco importa o custo, o contexto ou as consequências.
                    </p>

                    <p className="mb-3">
                        A punição, então, não é apenas um recurso de roteiro. O exílio é uma cirurgia simbólica. O príncipe é
                        arrancado do ambiente que valida seu ego e lançado num espaço onde sua força não resolve tudo.
                        De repente, o aplauso some. O status evapora. E ele precisa confrontar algo que nunca tinha encarado:
                        quem ele é quando ninguém está impressionado?
                    </p>

                    <p className="mb-3">
                        O MCU constrói esse momento como um teste de identidade. Ao retirar o martelo, retira também a ilusão.
                        Não se trata de enfraquecer Thor — trata-se de expor a diferença entre poder e dignidade.
                        O personagem começa a aprender que ser digno não é conquistar territórios; é conquistar autocontrole.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">Leitura rápida</p>
                            <p className="mt-2 text-sm text-slate-300">
                                O MCU não &quot;tira o poder&quot; de Thor por drama. Ele tira para responder uma pergunta essencial: se você
                                não pode vencer na força, você ainda sabe quem você é? É nesse vazio que o herói começa a nascer.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                A queda do príncipe é o primeiro degrau do herói: humilhação vira humildade quando a pessoa decide
                                aprender — não quando decide reclamar.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="perdas"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O herói: perdas como treinamento emocional
                    </h2>

                    <p className="mb-3">
                        O MCU dá ao Thor algo que muitos &quot;deuses&quot; de blockbuster nunca enfrentam de verdade: perda real,
                        irreversível, desconfortável. Ele perde pessoas que moldaram sua identidade, perde a própria casa,
                        perde a sensação de estabilidade que sustentava sua confiança. E, curiosamente, não é nesse momento
                        que ele se torna mais distante — é quando ele se torna mais humano.
                    </p>

                    <p className="mb-3">
                        Diferente de outros arcos heroicos que usam tragédia apenas como combustível para vingança,
                        a jornada de Thor insiste em algo mais complexo: dor não garante maturidade automática.
                        Sofrer não transforma ninguém por mágica. O que transforma é a decisão tomada depois do sofrimento.
                        É nesse espaço — entre o impacto e a escolha — que o personagem começa a amadurecer.
                    </p>

                    <p className="mb-3">
                        A construção emocional do MCU não romantiza a perda. Perder não é bonito, não é épico, não é &quot;necessário&quot;
                        no sentido idealizado. Mas perder pode ensinar limites. Pode desmontar ilusões.
                        Thor aprende, pouco a pouco, que o mundo não lhe deve justiça apenas porque ele sofreu —
                        e que maturidade não é eliminar a dor, mas agir corretamente apesar dela.
                    </p>

                    <p className="mb-3">
                        Essa é a diferença fundamental entre o príncipe e o herói. O príncipe reage.
                        O herói escolhe. E escolher o certo quando você está emocionalmente quebrado exige
                        mais força do que qualquer batalha cósmica.
                    </p>

                    <p className="mb-3">
                        Ao atravessar luto, culpa e fracasso, Thor deixa de ser apenas o &quot;deus do trovão&quot;
                        e passa a representar algo mais reconhecível: alguém tentando continuar mesmo
                        quando a própria narrativa parece ter falhado. E isso cria identificação —
                        porque a maioria das pessoas não precisa aprender a vencer o mundo,
                        mas precisa aprender a sobreviver a ele.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="humor"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Humor como defesa — e como maturidade
                    </h2>

                    <p className="mb-3">
                        Existe uma leitura apressada que diz que o humor &quot;enfraquece&quot; o Thor. Mas, dentro do MCU, o riso nunca é
                        vazio — ele é ferramenta. Depois de perdas sucessivas, de falhas públicas e de culpas difíceis de digerir,
                        o humor passa a cumprir dois papéis claros: defesa emocional e adaptação ao caos. O Thor que brinca
                        não é apenas o Thor descontraído; muitas vezes é o Thor tentando continuar funcional.
                    </p>

                    <p className="mb-3">
                        Rir, nesse contexto, não significa ignorar a dor. Significa administrá-la. É uma forma de manter controle
                        quando o mundo parece fora de controle. O personagem aprende que pode carregar cicatrizes sem deixar que
                        elas dominem cada gesto. O humor vira um mecanismo de equilíbrio — uma válvula que impede o colapso
                        completo.
                    </p>

                    <p className="mb-3">
                        E há uma diferença importante entre o humor do príncipe e o humor do herói. No início, ele ironiza por
                        arrogância, por se sentir acima da situação. Com o tempo, a ironia muda de tom. Ela deixa de ser soberba
                        e passa a ser vulnerabilidade administrada. É quase uma declaração silenciosa: &quot;eu ainda estou aqui&quot; —
                        não intacto, mas consciente.
                    </p>

                    <p className="mb-3">
                        Essa construção aproxima Thor de outro pilar do MCU que também utiliza o humor como mecanismo psicológico.
                        Em <Link
                            href="/filmes-series/marvel/homem-de-ferro/tony-stark-personagem#humor-como-arma"
                            className="text-slate-200 underline decoration-slate-500 hover:decoration-slate-300"
                        >
                            Tony Stark e o humor como arma
                        </Link>,
                        vemos uma estratégia semelhante: a piada como escudo, a ironia como forma de sobreviver à pressão.
                        A diferença está na origem emocional. Enquanto Stark usa o humor para controlar a narrativa ao seu redor,
                        Thor aprende a usá-lo para controlar a própria reação ao trauma.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        O ponto-chave: rir não apaga a dor — organiza a dor
                    </h3>

                    <p className="mb-3">
                        O MCU evita transformar Thor em um herói monolítico, feito apenas de guerra e trovões. Ao permitir que ele
                        ria, erre o timing da piada e ainda assim siga lutando, a narrativa adiciona humanidade ao mito. Ele deixa
                        de ser apenas símbolo de força e passa a ser símbolo de resistência emocional.
                    </p>

                    <p className="mb-3">
                        E é justamente isso que amplia a identificação. Todo mundo já riu em um dia ruim para não afundar.
                        Todo mundo já usou leveza para atravessar peso. O Thor amadurecido entende que vulnerabilidade não
                        diminui poder — ela o torna mais sustentável.
                    </p>

                    <h2
                        id="responsabilidade"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Responsabilidade: escolher o certo sem aplauso
                    </h2>

                    <p className="mb-3">
                        A fase mais genuinamente &quot;herói&quot; do Thor começa quando ele deixa de agir para impressionar
                        e passa a agir para sustentar. No início do MCU, seu desejo é claro: ser rei, ser reconhecido,
                        ser validado. Ele associa liderança a prestígio, autoridade a admiração. Mas a narrativa o conduz
                        para uma descoberta mais incômoda: liderar não é ser celebrado — é ser responsável.
                    </p>

                    <p className="mb-3">
                        A maturidade chega quando ele entende que decisões difíceis raramente vêm acompanhadas
                        de aplausos. Às vezes, a escolha correta decepciona. Às vezes, proteger significa abrir mão
                        do próprio orgulho. O Thor amadurecido aprende que autoridade não nasce da força,
                        mas da disposição de assumir consequências.
                    </p>

                    <p className="mb-3">
                        Esse é um dos acertos mais consistentes do MCU: transformar responsabilidade em conflito interno,
                        não apenas externo. A batalha deixa de ser apenas contra vilões e passa a ser contra impulsos,
                        expectativas e culpas. O herói não é aquele que sempre vence — é aquele que continua decidindo
                        mesmo quando a decisão pesa.
                    </p>

                    <p className="mb-3">
                        Thor descobre que coragem não é derrotar o inimigo mais forte.
                        Coragem é permanecer responsável quando o cenário vira caos,
                        quando o plano falha, quando a perda dói. É continuar presente.
                        É escolher proteger, mesmo sem garantia de sucesso.
                    </p>

                    <p className="mb-3">
                        E talvez seja aí que o personagem atinge seu ponto mais humano:
                        ele entende que dignidade não depende de coroa, martelo ou título.
                        Depende de constância. De fazer o que precisa ser feito —
                        não para ser aplaudido, mas porque alguém precisa fazer.
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
                        id="porque-importa"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Por que essa jornada funciona no MCU
                    </h2>

                    <p className="mb-3">
                        A jornada do Thor funciona porque obedece a uma lógica emocional que qualquer pessoa reconhece:
                        o mundo testa, você falha, você perde, você muda. O diferencial é que o MCU aplica essa lógica
                        a um personagem mitológico. O &quot;deus do trovão&quot; enfrenta algo muito menos épico e muito mais
                        universal: a necessidade de crescer.
                    </p>

                    <p className="mb-3">
                        Crescer, nesse contexto, não é se tornar invencível. É se tornar consciente.
                        O Thor do início acredita que força resolve conflitos.
                        O Thor amadurecido entende que força sem direção cria novos conflitos.
                        Essa transição — da impulsividade para a reflexão — é o que sustenta o personagem
                        ao longo de múltiplos filmes sem torná-lo repetitivo.
                    </p>

                    <p className="mb-3">
                        O MCU evita o erro comum de muitos arcos heroicos: transformar evolução em perfeição.
                        Thor continua errando. Continua sofrendo. Continua carregando peso emocional.
                        Mas agora ele erra diferente. Sofre diferente. Decide diferente.
                        A mudança não está na ausência de falhas — está na forma como ele responde a elas.
                    </p>

                    <p className="mb-3">
                        Isso cria algo raro dentro de franquias longas: longevidade emocional.
                        O público não acompanha Thor apenas para ver batalhas maiores,
                        mas para entender como ele vai reagir à próxima perda,
                        à próxima crise, à próxima escolha difícil.
                    </p>

                    <p className="mb-3">
                        No fim, o que mantém o personagem relevante não é o raio mais forte,
                        nem o inimigo mais ameaçador. É a consciência adquirida.
                        Thor não se define apenas por vitórias — ele se define pela capacidade
                        de continuar, mesmo depois das derrotas.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        O MCU transforma Thor em uma ideia poderosa: o herói que aprende a perder sem perder a si mesmo.
                        Essa não é uma trajetória sobre acumular poder, conquistar armas maiores ou enfrentar vilões mais
                        ameaçadores. É uma trajetória sobre assumir responsabilidade quando a força já não resolve tudo.
                    </p>

                    <p className="mb-3">
                        No início, Thor quer provar valor ao mundo — quer ser digno porque acredita que merece.
                        Com o tempo, ele descobre que dignidade não se exige; constrói-se. A grande virada do personagem
                        não está em um novo martelo, em uma nova armadura ou em um novo título. Está na compreensão
                        de que liderança é constância, não espetáculo.
                    </p>

                    <p className="mb-3">
                        O que torna essa jornada relevante dentro do MCU é a coerência emocional. Thor erra,
                        sofre, falha publicamente — e ainda assim escolhe continuar responsável.
                        Ele não volta das quedas mais forte no sentido físico; ele volta mais consciente.
                    </p>

                    <p>
                        Talvez seja por isso que o personagem resista ao tempo dentro da franquia.
                        Ele representa algo raro em narrativas épicas: o mito que atravessa dor reconhecível
                        e retorna diferente não por magia, mas por aprendizado.
                        No fim, o trovão é apenas efeito sonoro. O que sustenta Thor é a consciência.
                    </p>

                    {/* CTA interno — sequência editorial Thor */}
                    <ContinueNoLexara
                        description="Se este foi seu ponto de partida, aqui está uma sequência natural para enxergar as fases do Thor no MCU: reinvenção tonal, símbolos de identidade e o pós-guerra emocional."
                        links={[
                            {
                                href: "/filmes-series/marvel/thor/thor-ragnarok-analise",
                                label: "Próximo: Ragnarok e a reinvenção do Thor",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/marvel/thor/mjolnir-stormbreaker-identidade",
                                label: "Mjolnir vs Stormbreaker: identidade em forma de arma",
                            },
                            {
                                href: "/filmes-series/marvel/thor/thor-pos-endgame-luto-sentido",
                                label: "Pós-Endgame: luto, culpa e sentido",
                            },
                            {
                                href: "/filmes-series/marvel/thor",
                                label: "Voltar à seção Thor",
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
                        A análise apresentada neste artigo parte de uma leitura crítica própria do LEXARA,
                        mas está ancorada em informações verificáveis sobre produção, elenco, cronologia
                        e desempenho comercial dos filmes do Thor no MCU. A proposta aqui não é repetir
                        sinopses, e sim interpretar escolhas narrativas com base em dados públicos e
                        referências consolidadas.
                    </p>

                    <p className="mb-3">
                        As fontes abaixo oferecem suporte factual — créditos oficiais, fichas técnicas,
                        contexto de lançamento e desempenho de mercado. Elas funcionam como ponto de partida
                        para quem deseja aprofundar aspectos históricos e industriais da franquia,
                        enquanto a interpretação editorial permanece independente.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.marvel.com/" rel="noreferrer noopener" target="_blank">
                                Marvel (site oficial) — universo, personagens e catálogos oficiais do MCU
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/" rel="noreferrer noopener" target="_blank">
                                IMDb — créditos, elenco, equipe técnica e informações de produção
                            </a>
                        </li>
                        <li>
                            <a href="https://www.boxofficemojo.com/" rel="noreferrer noopener" target="_blank">
                                Box Office Mojo — bilheteria global e desempenho comercial
                            </a>
                        </li>
                        <li>
                            <a href="https://en.wikipedia.org/wiki/Thor_(film)" rel="noreferrer noopener" target="_blank">
                                Wikipedia — panorama factual e compilação de referências públicas
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> esta análise é construída com base em dados disponíveis
                        publicamente e interpretação crítica autoral. Decisões de estúdio, direções criativas e
                        planos de franquia podem evoluir com o tempo. O objetivo aqui é mapear arcos narrativos,
                        símbolos e transformações do personagem sem transformar hipóteses em certezas.
                    </p>
                </section>

                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em{" "}
                        <span className="text-slate-300">{article.publishedAtLabel ?? formatISOToDateLabel(article.publishedAtISO)}</span>.{" "}
                        <span className="text-slate-500">({formatISOToDateLabel(article.publishedAtISO)})</span>
                    </p>
                </footer>
            </article>
        </>
    );
}
