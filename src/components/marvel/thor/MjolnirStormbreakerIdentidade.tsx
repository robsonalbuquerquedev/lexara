import Link from "next/link";
import Script from "next/script";
import { Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type MjolnirStormbreakerIdentidadeProps = {
    article: Article;
};

const SECTIONS = [
    { id: "mito", label: "O mito: armas como prova, não como prêmio" },
    { id: "mjolnir", label: "Mjolnir: dignidade como disciplina" },
    { id: "stormbreaker", label: "Stormbreaker: identidade forjada na perda" },
    { id: "comparacao", label: "Do “merecer” ao “assumir”: a virada de Thor" },
    { id: "ego", label: "Ego, falha e maturidade: o preço do símbolo" },
    { id: "por-que-importa", label: "Por que isso importa no MCU" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    // Formats like: 13.02.2026, às 15h30 (America/Recife is UTC-03:00)
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year}, às ${hours}h${minutes}`;
}

function isPublishedNow(publishedAtISO: string) {
    return new Date(publishedAtISO).getTime() <= Date.now();
}

// Optional placeholder for ads (kept consistent with the rest of LEXARA)
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

export default function MjolnirStormbreakerIdentidade({
    article,
}: MjolnirStormbreakerIdentidadeProps) {
    // ✅ Scheduled publishing: before time, page should not be public.
    if (!isPublishedNow(article.publishedAtISO)) {
        return (
            <section className="mx-auto max-w-2xl py-20 text-center">
                <h1 className="text-2xl font-bold text-slate-100">Publicação programada</h1>

                <p className="mt-4 text-slate-400">
                    Este artigo ficará disponível em{" "}
                    <span className="text-slate-200">{formatISOToDateLabel(article.publishedAtISO)}</span>.
                </p>
            </section>
        );
    }

    // ✅ Video (editorial support): official trailer (Stormbreaker context is strong here).
    const video = null as null | {
        embedUrl: string;
        title: string;
        heading: string;
        description: string;
    };

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
            { "@type": "Thing", name: "Thor (Marvel Cinematic Universe)" },
            { "@type": "Thing", name: "Mjolnir" },
            { "@type": "Thing", name: "Stormbreaker" },
            { "@type": "Thing", name: "Worthiness and identity" },
        ],
    };

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

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-thor-mjolnir-stormbreaker-identidade"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-thor-mjolnir-stormbreaker-identidade"
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
                        caption="Mjolnir e Stormbreaker não são “itens”: são decisões — e cicatrizes."
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
                        id="mito"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O mito: armas como prova, não como prêmio
                    </h2>

                    <p className="mb-3">
                        No MCU, as armas de Thor são um &quot;atalho perigoso&quot; para o olhar do público: à primeira vista, parecem apenas
                        upgrades de combate — um martelo famoso, um machado ainda maior, uma estética que muda e pronto. Só que o
                        roteiro joga um truque melhor: essas armas não são sobre <strong>poder</strong>, são sobre <strong>critério</strong>.
                        Mjolnir e Stormbreaker funcionam como um tipo de &quot;documento&quot; narrativo. Elas carimbam, sem precisar explicar, <em>quem Thor está virando</em> em cada fase — e o que ele ainda não consegue sustentar.
                    </p>

                    <p className="mb-3">
                        Por isso o simbolismo pesa. Quando a arma muda, não é só a coreografia que muda — é a pergunta que a história
                        faz ao personagem. Mjolnir nasce como filtro moral: ele não aceita &quot;força bruta com ego no volante&quot;. Stormbreaker
                        surge como resposta desesperada: não exige pureza, exige decisão. E nesse contraste, o MCU deixa claro que o arco
                        de Thor não é uma subida reta rumo ao ápice: é uma travessia por falhas, luto e responsabilidade — e cada arma
                        vira um espelho dessa travessia.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: <strong>no MCU, símbolo não é enfeite</strong> — é uma régua moral que o personagem
                                precisa encarar.
                            </p>
                        </div>
                    </blockquote>

                    <p className="mb-3">
                        A partir daqui, a leitura fica simples: <strong>Mjolnir</strong> mede dignidade; <strong>Stormbreaker</strong> mede
                        custo. Uma pergunta &quot;você merece?&quot;, a outra pergunta &quot;você aguenta?&quot;. E a diferença entre as duas é onde o Thor
                        finalmente deixa de ser mito… e vira gente.
                    </p>

                    <h2
                        id="mjolnir"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Mjolnir: dignidade como disciplina
                    </h2>

                    <p className="mb-3">
                        Mjolnir é o &quot;não&quot; mais importante do arco de Thor no MCU. Ele não mede força física, nem coragem em batalha.
                        Ele mede <strong>postura</strong>. Quando o martelo se recusa a sair do chão, o roteiro está dizendo algo
                        muito claro: não basta querer ser herói — é preciso estar preparado para <em>ser responsável</em>.
                        Esse é o primeiro grande choque na jornada do deus arrogante que vimos no início da saga: poder sem caráter
                        é ruído; liderança sem maturidade é risco.
                    </p>

                    <p className="mb-3">
                        Como analisado em{" "}
                        <Link
                            href="/filmes-series/marvel/thor/thor-no-mcu-evolucao"
                            className="text-slate-100 underline decoration-slate-600 underline-offset-4 hover:text-white"
                        >
                            Thor no MCU: do deus arrogante ao herói que aprende a perder
                        </Link>
                        , a virada central não é de poder, mas de consciência. Mjolnir é a ferramenta que materializa essa ideia.
                        Ele funciona como filtro moral dentro do MCU: só responde quando o ego deixa de comandar. E isso dói.
                        Porque o martelo não humilha com violência — ele humilha com silêncio.
                    </p>

                    <p className="mb-3">
                        Até mesmo em{" "}
                        <Link
                            href="/filmes-series/marvel/thor/thor-ragnarok-analise"
                            className="text-slate-100 underline decoration-slate-600 underline-offset-4 hover:text-white"
                        >
                            Thor: Ragnarok — o humor como máscara de uma tragédia
                        </Link>
                        , quando o riso parece aliviar o peso da narrativa, o que está em jogo é essa mesma base: identidade.
                        O humor distrai, mas a pergunta moral permanece. Mjolnir pode se quebrar fisicamente, mas o critério que ele
                        representa — &quot;você é digno?&quot; — continua inteiro. E é essa pergunta que sustenta o arco emocional de Thor
                        muito além do objeto em si.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">O que Mjolnir &quot;cobra&quot; de um herói</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Controle do impulso, responsabilidade real e uma humildade ativa — não a fraqueza de quem se diminui,
                                mas a maturidade de quem entende o peso do próprio poder.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Mjolnir não &quot;te dá&quot; poder — ele <strong>confirma</strong> caráter. E confirmação exige coerência.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="stormbreaker"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Stormbreaker: identidade forjada na perda
                    </h2>

                    <p className="mb-3">
                        Stormbreaker surge quando o jogo narrativo muda completamente. Se Mjolnir era um teste de dignidade,
                        aqui já não há teste algum — há urgência. Não se trata mais de provar merecimento, mas de sobreviver ao
                        que foi perdido. Thor não busca aprovação divina, nem validação moral. Ele busca uma resposta para uma
                        dor que ultrapassou o limite da honra e entrou no território do trauma.
                    </p>

                    <p className="mb-3">
                        Em <Link
                            href="/filmes-series/marvel/thor/thor-ragnarok-analise#perdas"
                            className="text-slate-100 underline decoration-slate-600 underline-offset-4 hover:text-white"
                        >
                            Perdas gigantes (sem melodrama)
                        </Link>, vimos como o MCU remove de Thor tudo o que sustentava sua identidade:
                        reino, pai, martelo, referência. O humor de <em>Ragnarok</em> suaviza a superfície,
                        mas não apaga o impacto estrutural dessas perdas. Stormbreaker nasce exatamente nesse vazio.
                        Ela não é símbolo de pureza moral — é símbolo de reação.
                    </p>

                    <p className="mb-3">
                        E isso altera profundamente o significado da arma. Stormbreaker parece maior,
                        mais brutal, mais &quot;épica&quot;. Mas o que ela representa é mais frágil:
                        é a tentativa de reconstrução de alguém que falhou — e sabe disso.
                        Diferente de Mjolnir, que exige coerência antes da ação,
                        Stormbreaker aparece depois da ruptura. Ela não pergunta &quot;você é digno?&quot;.
                        Ela pergunta algo mais pesado: <strong>&quot;você vai continuar, mesmo assim?&quot;</strong>
                    </p>

                    <p className="mb-3">
                        Nesse contraste, o MCU amadurece Thor. O deus que antes precisava provar
                        valor agora precisa sustentar consequências. Stormbreaker não é um upgrade.
                        É um reflexo do momento em que o herói entende que poder não apaga culpa,
                        não reverte falhas e não ressuscita perdas — mas ainda assim pode ser
                        usado para assumir responsabilidade.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="comparacao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Do &quot;merecer&quot; ao &quot;assumir&quot;: a virada de Thor
                    </h2>

                    <p className="mb-3">
                        Mjolnir é sobre <strong>critério</strong>: &quot;você é digno?&quot;. Stormbreaker é sobre
                        <strong> consequência</strong>: &quot;você vai carregar isso até o fim?&quot;. A diferença parece
                        sutil, mas dentro do arco de Thor no MCU ela redefine completamente o tipo de herói
                        que estamos acompanhando. Uma arma mede caráter antes da ação. A outra surge depois
                        da falha — e mede resistência emocional.
                    </p>

                    <p className="mb-3">
                        Em termos narrativos, essa troca é gigantesca. O MCU começa com um príncipe arrogante,
                        convencido de que poder e direito são sinônimos. Aos poucos, a linguagem da história
                        muda. O foco deixa de ser provar valor para merecer autoridade e passa a ser
                        assumir responsabilidade mesmo quando o valor já não está em debate. Não é mais
                        sobre conquistar o martelo. É sobre sustentar o peso da própria história.
                    </p>

                    <p className="mb-3">
                        Essa é a transformação de identidade mais profunda de Thor. O herói que antes
                        precisava da validação simbólica de Mjolnir aprende, com Stormbreaker, que maturidade
                        não é receber aprovação — é continuar apesar da culpa, do luto e da falha.
                        O símbolo acompanha essa mudança como um espelho silencioso: primeiro ele pergunta
                        quem você é; depois, ele revela quem você se tornou.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        A diferença que muda tudo
                    </h3>

                    <p className="mb-3">
                        Quando Mjolnir está em cena, a pergunta central é: <em>quem você é por dentro?</em> É um exame de caráter, quase ritualístico. Já quando Stormbreaker domina a tela,
                        a pergunta muda para algo mais humano e mais duro: <em>o que você faz com a sua dor?</em> Essa mudança desloca o eixo do mito para a biografia. O deus deixa de ser apenas
                        símbolo de poder e passa a ser retrato de responsabilidade.
                    </p>

                    <p className="mb-3">
                        E é nesse ponto que o MCU consolida Thor como um dos arcos mais consistentes
                        da franquia: não por aumentar sua força, mas por aprofundar sua consciência.
                        A jornada deixa de ser vertical (mais poder) e passa a ser interna
                        (mais maturidade). O herói não cresce porque levanta algo mais pesado —
                        ele cresce porque decide não fugir do que pesa.
                    </p>

                    <h2
                        id="ego"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Ego, falha e maturidade: o preço do símbolo
                    </h2>

                    <p className="mb-3">
                        O ego de Thor sempre acreditou que força resolvia tudo. No início da jornada —
                        como detalhado em{" "}
                        <Link
                            href="/filmes-series/marvel/thor/thor-no-mcu-evolucao#asgard"
                            className="text-slate-100 underline decoration-slate-600 underline-offset-4 hover:text-white"
                        >
                            O príncipe: ego, honra e punição
                        </Link>
                        — poder e direito caminhavam juntos. Ele confundia coragem com impulsividade
                        e liderança com superioridade. O MCU desmonta essa lógica com um método cruel
                        e narrativamente inteligente: <strong>deixa ele perder</strong>.
                        E perder de verdade — perder pessoas, perder referências, perder a própria
                        imagem de invencibilidade.
                    </p>

                    <p className="mb-3">
                        A falha não é um detalhe no arco de Thor; ela é o motor da transformação.
                        Cada perda retira uma camada da identidade construída sobre orgulho.
                        Quando Mjolnir o rejeita, o ego é exposto. Quando Stormbreaker surge,
                        ela não apaga essa exposição — ela a carrega. Não é uma cura mágica,
                        é uma reação ao vazio. O símbolo amadurece porque o personagem amadurece.
                    </p>

                    <p className="mb-3">
                        É nesse ponto que a narrativa do MCU se diferencia do simples espetáculo.
                        Maturidade não é controle absoluto, nem retorno glorioso ao status anterior.
                        É aceitar que o poder não impede a falha — e que responsabilidade não depende
                        de aplauso. Thor cresce quando entende que não precisa vencer para ser herói;
                        precisa assumir o peso do que aconteceu.
                    </p>

                    <p className="mb-3">
                        O preço do símbolo, então, é emocional. Mjolnir exige coerência.
                        Stormbreaker exige resistência. Mas ambos revelam algo maior:
                        o mito só se sustenta quando o ego deixa de comandar.
                        E o que sobra, quando o brilho da armadura cai, é caráter.
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
                        id="por-que-importa"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Por que isso importa no MCU
                    </h2>

                    <p className="mb-3">
                        O MCU construiu sua força narrativa não apenas com diálogos marcantes ou cenas grandiosas,
                        mas com o uso consistente de <strong>atalhos emocionais</strong>. Em vez de explicar cada
                        transformação com discursos expositivos, ele utiliza objetos, cores, trilhas sonoras e
                        símbolos para comunicar mudanças internas de forma imediata. Um item em cena pode
                        carregar mais desenvolvimento de personagem do que várias linhas de roteiro.
                    </p>

                    <p className="mb-3">
                        Mjolnir e Stormbreaker são exemplos claros dessa estratégia. Eles funcionam como
                        marcadores visuais de identidade dentro do arco de Thor no MCU. Mesmo que o espectador
                        não formule isso conscientemente, percebe que algo mudou quando a arma muda.
                        O símbolo atua antes da reflexão racional — ele prepara a emoção.
                    </p>

                    <p className="mb-3">
                        Esse tipo de construção fortalece a coesão do universo compartilhado. Não se trata
                        apenas de continuidade estética, mas de continuidade temática. O MCU usa esses
                        elementos recorrentes para criar uma gramática própria: quando um objeto carrega
                        significado, ele não está ali por acaso. Ele representa decisão, consequência,
                        amadurecimento.
                    </p>

                    <p className="mb-3">
                        No caso de Thor, a troca entre Mjolnir e Stormbreaker consolida uma das transformações
                        mais consistentes da franquia. O público não precisa ouvir que ele amadureceu — vê isso
                        no peso que a narrativa atribui às suas escolhas. Não é apenas uma mudança de arma.
                        É uma mudança de eixo interno.
                    </p>

                    <p className="mb-3">
                        E é exatamente por isso que essa leitura importa. Quando entendemos o símbolo,
                        entendemos melhor o personagem. E quando entendemos o personagem,
                        percebemos que o espetáculo visual do MCU só funciona porque há
                        estrutura emocional sustentando cada imagem.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        Mjolnir simboliza o herói que aprende seus limites. Stormbreaker representa o herói
                        que aprende a continuar depois de ultrapassá-los. Um exige dignidade antes da ação.
                        O outro exige coragem depois da falha. Dentro do arco de Thor no MCU, essa transição
                        não é cosmética — é estrutural. Ela marca a passagem do orgulho juvenil para a
                        responsabilidade consciente.
                    </p>

                    <p className="mb-3">
                        O que poderia ser tratado como simples &quot;evolução de equipamento&quot; se revela,
                        na verdade, como biografia emocional. Cada arma funciona como uma frase na
                        construção da identidade de Thor: primeiro ele precisa provar que merece;
                        depois, precisa assumir o que fez — e o que não conseguiu impedir.
                        O símbolo acompanha essa mudança com precisão silenciosa.
                    </p>

                    <p className="mb-3">
                        É por isso que a leitura importa. Quando entendemos o significado por trás
                        de Mjolnir e Stormbreaker, entendemos melhor como o MCU constrói seus heróis:
                        não apenas com poder crescente, mas com consciência crescente.
                        O verdadeiro amadurecimento não está na força do golpe,
                        mas na capacidade de sustentar suas consequências.
                    </p>

                    <p>
                        No fim, nunca foi sobre levantar um martelo.
                        Foi — e sempre será — sobre sustentar o peso de quem você se tornou
                        e, mesmo assim, escolher responsabilidade.
                    </p>

                    {/* CTA interno — sequência editorial Thor */}
                    <ContinueNoLexara
                        description="Se este foi seu ponto de partida, aqui vai a sequência natural para ler Thor como arco emocional: da evolução, passando pela máscara do humor, até o símbolo das armas."
                        links={[
                            {
                                href: "/filmes-series/marvel/thor/thor-pos-endgame-luto-sentido",
                                label: "Próximo: pós-Endgame — luto e sentido",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/marvel/thor/thor-no-mcu-evolucao",
                                label: "1) Do deus arrogante ao herói que aprende a perder",
                            },
                            {
                                href: "/filmes-series/marvel/thor/thor-ragnarok-analise",
                                label: "2) Ragnarok — humor como máscara de tragédia",
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
                        As referências abaixo servem como base para informações verificáveis — créditos,
                        personagens, datas de lançamento e contexto geral do universo compartilhado.
                        Elas sustentam os dados factuais utilizados ao longo do artigo.
                        A interpretação crítica, as conexões simbólicas e a leitura sobre identidade,
                        dignidade e maturidade no arco de Thor no MCU são análises originais do LEXARA.
                    </p>

                    <p className="mb-3">
                        O objetivo aqui não é apenas listar fontes, mas contextualizar a discussão dentro
                        do ecossistema oficial da Marvel Studios e do próprio Marvel Cinematic Universe.
                        A análise considera a construção narrativa ao longo dos filmes, especialmente
                        no que diz respeito à evolução emocional de Thor e ao simbolismo de Mjolnir
                        e Stormbreaker.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.marvel.com/" rel="noreferrer noopener" target="_blank">
                                Marvel (site oficial) — universo, personagens e informações institucionais
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/" rel="noreferrer noopener" target="_blank">
                                IMDb — ficha técnica, elenco, datas e créditos oficiais
                            </a>
                        </li>
                        <li>
                            <a href="https://www.disneyplus.com/" rel="noreferrer noopener" target="_blank">
                                Disney+ — catálogo oficial e páginas dos títulos do MCU
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> símbolos narrativos evoluem conforme o arco
                        do personagem. Esta análise busca mapear o significado dramático de Mjolnir e
                        Stormbreaker dentro do MCU, evitando reduzi-los a mero fetiche de poder ou
                        a simples &quot;upgrade&quot; visual.
                    </p>
                </section>

                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em{" "}
                        <span className="text-slate-300">
                            {article.publishedAtLabel ?? formatISOToDateLabel(article.publishedAtISO)}
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
