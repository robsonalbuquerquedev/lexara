import Link from "next/link";
import Script from "next/script";
import { Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type ThorPosEndgameLutoSentidoProps = {
    article: Article;
};

const SECTIONS = [
    { id: "depois-do-apocalipse", label: "Depois do apocalipse: o silêncio" },
    { id: "luto-sem-ritual", label: "Luto sem ritual: quando não dá pra “voltar ao normal”" },
    { id: "forca-nao-resolve", label: "Quando força não resolve: o herói sem ferramenta" },
    { id: "identidade-sem-trono", label: "Identidade sem trono: quem é Thor quando ele falha?" },
    { id: "humor-e-fuga", label: "Humor, fuga e anestesia emocional" },
    { id: "o-heroi-sem-mapa", label: "O herói sem mapa: sentido como nova batalha" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return iso;

    return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
        timeZone: "America/Recife",
    }).format(date);
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

export default function ThorPosEndgameLutoSentido({ article }: ThorPosEndgameLutoSentidoProps) {
    // ✅ Publicação programada (#1): antes do horário, o artigo NÃO existe publicamente.
    if (!isPublishedNow(article.publishedAtISO)) {
        return (
            <section className="mx-auto max-w-2xl py-20 text-center">
                <h1 className="text-2xl font-bold">Publicação programada</h1>

                <p className="mt-4 text-slate-400">
                    Este artigo ficará disponível em{" "}
                    <span className="text-slate-200">{formatISOToDateLabel(article.publishedAtISO)}</span>.
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
            { "@type": "Thing", name: "Thor pós-Endgame" },
            { "@type": "Thing", name: "Luto e trauma no MCU" },
            { "@type": "Thing", name: "Identidade e propósito" },
            { "@type": "Thing", name: "Vulnerabilidade do herói" },
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
        embedUrl: "https://www.youtube-nocookie.com/embed/Go8nTmfrQd8",
        title: "Thor: Love and Thunder — Trailer oficial",
        heading: "Vídeo (apoio): quando o riso aparece depois do colapso",
        description:
            "Use o trailer para sentir o contraste que define essa fase: cor, piada e espetáculo… por cima de um Thor tentando sobreviver ao próprio vazio.",
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-thor-thor-pos-endgame-luto-sentido"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-thor-thor-pos-endgame-luto-sentido"
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
                        publishedAtLabel={article.publishedAtLabel}
                    />

                    <ArticleCover
                        src={article.coverImage.src}
                        alt={article.coverImage.alt}
                        caption="Quando o mundo é salvo, mas o herói não volta inteiro."
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
                        id="depois-do-apocalipse"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Depois do apocalipse: o silêncio
                    </h2>

                    <p className="mb-3">
                        Em histórias de herói, a vitória costuma ser um ponto final com gosto de alívio: a ameaça cai, o mundo respira,
                        e a vida &quot;volta ao normal&quot;. Em <strong>Endgame</strong>, o MCU faz a escolha mais incômoda — e mais humana.
                        A guerra termina, mas o final feliz não chega como música triunfal. Ele chega como <strong>silêncio</strong>.
                        E, no silêncio, você não escuta aplausos: você escuta o que ficou para trás.
                    </p>

                    <p className="mb-3">
                        Para o Thor, esse &quot;pós&quot; não é descanso. É um território sem chão, onde nenhuma conquista apaga o preço.
                        Ele não está apenas cansado; ele está <strong>desorientado</strong>. Porque a batalha que ele perdeu não foi
                        contra Thanos — foi contra a ideia de que &quot;se eu for forte o bastante, eu consigo impedir o inevitável&quot;.
                        Quando essa crença quebra, a força continua existindo… mas vira só volume. É poder sem direção.
                    </p>

                    <p className="mb-3">
                        E aqui está a virada que fecha o arco com maturidade: o Thor sempre soube o que fazer quando a dor tinha rosto.
                        Um inimigo, uma guerra, um destino profetizado — qualquer coisa que pudesse ser enfrentada com martelo, raio e
                        coragem. No pós-Endgame, o inimigo não tem armadura, nem exército, nem plano. Ele é uma sensação: <strong>vazio</strong>. E vazio é perigoso porque não dá para &quot;derrotar&quot; com impacto. Só dá para atravessar.
                    </p>

                    <p className="mb-3">
                        É por isso que essa fase é a mais arriscada (e a mais interessante) do personagem. O MCU coloca Thor num ponto
                        raro em blockbuster: o momento em que salvar o universo não resolve o que acontece por dentro.
                        Quando o mundo para de pedir heroísmo, sobra a pergunta que nenhum deus quer encarar: <strong>quem sou eu quando não existe uma missão me explicando?</strong>
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: <strong>a fase mais perigosa do herói</strong> não é quando ele
                                está fraco — é quando ele não sabe mais <strong>por que</strong> lutar.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="luto-sem-ritual"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Luto sem ritual: quando não dá pra &quot;voltar ao normal&quot;
                    </h2>

                    <p className="mb-3">
                        Thor não perde uma vez. Ele perde em camadas. Mãe. Pai. Irmão. Amigos.
                        Reino. Futuro. Identidade. Em <Link href="/filmes-series/marvel/thor/thor-ragnarok-analise#perdas" className="text-slate-200 underline hover:text-white">Perdas gigantes (sem melodrama)</Link>,
                        vimos como o MCU já vinha preparando esse terreno: cada destruição em <strong>Ragnarok</strong> parecia
                        estilizada, quase pop — mas o impacto era real. O que muda no pós-Endgame não é o tamanho da perda.
                        É a ausência de espaço para processá-la.
                    </p>

                    <p className="mb-3">
                        Em narrativas clássicas, o luto tem rito: despedida, silêncio, reconstrução. O herói cai, reflete,
                        retorna transformado. Thor não tem esse luxo. Ele salta de tragédia em tragédia como se a próxima missão
                        pudesse apagar a anterior. Só que o luto ignorado não desaparece. Ele se acumula.
                        E acúmulo emocional vira peso invisível.
                    </p>

                    <p className="mb-3">
                        O MCU faz algo raro aqui: mostra que o luto não é apenas tristeza nobre.
                        Ele também é <strong>fuga, vergonha, irritação, desistência</strong>.
                        Quando o coração não aguenta sentir, a mente procura anestesia.
                        Não é fraqueza moral — é mecanismo de defesa. Só que defesa prolongada vira prisão.
                    </p>

                    <p className="mb-3">
                        O Thor pós-Endgame não está apenas sofrendo. Ele está tentando não sentir.
                        E essa tentativa cobra preço. Porque quando você evita a dor,
                        você também evita a clareza. Sem clareza, não existe propósito.
                        E sem propósito, até um deus do trovão parece pequeno dentro da própria história.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">O que muda no pós-Endgame?</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Antes, Thor perdia e reagia com ação: vingança, promessa, batalha.
                                A dor virava combustível. Depois, ele perde e reage com <strong>vazio</strong>.
                                A ação ainda existe, mas a motivação já não sustenta.
                                É movimento sem direção — esforço sem convicção.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Quando &quot;ser forte&quot; vira obrigação constante, qualquer pausa parece falha.
                                E o herói começa a se isolar não porque é orgulhoso —
                                mas porque tem medo de ser visto quebrado.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="forca-nao-resolve"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Quando força não resolve: o herói sem ferramenta
                    </h2>

                    <p className="mb-3">
                        Thor sempre teve uma saída &quot;lógica&quot; para o caos: se algo ameaça o mundo,
                        ele levanta o martelo e resolve. A força era resposta, linguagem e identidade.
                        Mas existe um tipo de crise que não recua diante de trovões — <strong>o problema de sentido</strong>.
                    </p>

                    <p className="mb-3">
                        Em <Link href="/filmes-series/marvel/thor/thor-ragnarok-analise#identidade" className="text-slate-200 underline hover:text-white">Quem é Thor sem martelo?</Link>,
                        o MCU já ensaiava essa pergunta ao quebrar Mjolnir e retirar do personagem sua referência mais visível.
                        A lição ali era clara: o poder não mora na arma. Só que no pós-Endgame a pergunta evolui.
                        Não é mais &quot;quem é Thor sem martelo?&quot; — é <strong>quem é Thor quando nem a força explica quem ele é?</strong>
                    </p>

                    <p className="mb-3">
                        Quando a utilidade vira identidade, o herói começa a medir o próprio valor pela capacidade de salvar alguém.
                        Se ele é necessário, ele existe. Se não é, ele encolhe.
                        Essa é a armadilha silenciosa: transformar força em prova constante de merecimento.
                    </p>

                    <p className="mb-3">
                        O MCU expõe essa fragilidade com coragem rara em blockbuster.
                        Thor encara um inimigo que não tem corpo, não tem exército e não pode ser esmagado.
                        É um buraco interno — e buracos internos não sangram por fora.
                        Por isso são tão fáceis de negar.
                    </p>

                    <p className="mb-3">
                        A fase pós-Endgame é perigosa porque revela algo incômodo:
                        Thor não tem medo de morrer.
                        Ele tem medo de não ser mais necessário.
                        E quando o herói acredita que só vale enquanto é útil,
                        qualquer pausa vira fracasso.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="identidade-sem-trono"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Identidade sem trono: quem é Thor quando ele falha?
                    </h2>

                    <p className="mb-3">
                        Um rei sem reino pode virar lenda… ou pode virar silêncio.
                        Quando Thor abre mão do trono, ele não perde apenas uma coroa.
                        Ele perde uma resposta pronta para a pergunta que sempre o sustentou: <strong>&quot;quem sou eu?&quot;</strong>
                    </p>

                    <p className="mb-3">
                        Durante anos, a identidade de Thor foi estruturada em camadas externas:
                        príncipe, guerreiro, herdeiro, deus, vingador.
                        Cada título funcionava como escudo contra a dúvida.
                        No pós-Endgame, esses rótulos deixam de ser suficientes.
                        E quando o título não sustenta mais o peso interno,
                        sobra a parte mais difícil: <strong>ser pessoa sem função</strong>.
                    </p>

                    <p className="mb-3">
                        O choque de identidade aqui é brutal porque não envolve perda de poder —
                        envolve perda de referência.
                        Thor ainda tem força, ainda tem respeito, ainda tem história.
                        O que ele não tem é clareza sobre quem ele é
                        quando não está salvando alguém.
                    </p>

                    <p className="mb-3">
                        É nesse ponto que o arco encontra o tema explorado em{" "}
                        <Link
                            href="/filmes-series/marvel/thor/mjolnir-stormbreaker-identidade#ego"
                            className="text-slate-200 underline hover:text-white"
                        >
                            Ego, falha e maturidade: o preço do símbolo
                        </Link>.
                        Lá, vimos como o martelo não definia Thor — mas o orgulho podia aprisioná-lo.
                        Aqui, o aprisionamento é mais sutil: ele não está preso ao ego grandioso,
                        mas à expectativa de ser sempre o pilar.
                    </p>

                    <p className="mb-3">
                        E quando você vive tempo demais como símbolo,
                        qualquer fragilidade parece traição à própria imagem.
                        O problema é que símbolos não respiram —
                        pessoas, sim.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        O preço de virar símbolo
                    </h3>

                    <p className="mb-3">
                        Dentro e fora da narrativa, Thor é visto como âncora:
                        forte, resiliente, espirituoso, invencível.
                        Só que a âncora sustenta o navio — ela não navega.
                        Quando o personagem começa a questionar o próprio valor,
                        o público estranha.
                        Porque estamos acostumados a heróis que superam —
                        não a heróis que hesitam.
                    </p>

                    <p className="mb-3">
                        Mas é justamente nessa hesitação que o personagem amadurece.
                        O símbolo precisa rachar para que a pessoa apareça.
                        E quando a imagem perfeita quebra,
                        o que resta não é fraqueza —
                        é humanidade.
                    </p>

                    <h2
                        id="humor-e-fuga"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Humor, fuga e anestesia emocional
                    </h2>

                    <p className="mb-3">
                        O humor do Thor nunca foi apenas estilo.
                        Desde o início, ele usava a piada como escudo — algo já discutido em{" "}
                        <Link
                            href="/filmes-series/marvel/thor/thor-no-mcu-evolucao#humor"
                            className="text-slate-200 underline hover:text-white"
                        >
                            Humor como defesa — e como maturidade
                        </Link>.
                        Lá, o riso servia para suavizar arrogância, quebrar tensão,
                        mostrar que o príncipe estava aprendendo a ser humano.
                        No pós-Endgame, o riso ganha outra função.
                    </p>

                    <p className="mb-3">
                        Ele não ri porque está confortável.
                        Ele ri porque precisa continuar respirando.
                        A piada vira armadura social:
                        se ele faz os outros rirem, ninguém pergunta se ele está bem.
                        Se o ambiente continua leve, talvez a dor pareça menor.
                    </p>

                    <p className="mb-3">
                        O problema é que o humor pode anestesiar não só quem está ao redor —
                        mas quem o usa.
                        Quando cada desconforto vira sarcasmo,
                        quando cada insegurança vira exagero performático,
                        o herói começa a se esconder atrás da própria caricatura.
                    </p>

                    <p className="mb-3">
                        O MCU acerta ao mostrar essa ambiguidade:
                        o riso pode ser maturidade,
                        mas também pode ser fuga.
                        A diferença está na intenção.
                        Rir com consciência é leveza.
                        Rir para evitar sentir é adiamento.
                    </p>

                    <p className="mb-3">
                        E o Thor pós-Endgame vive nessa linha tênue.
                        Ele não quer que os outros o vejam quebrado.
                        Porque, se o símbolo racha,
                        o que sobra?
                        Então ele exagera.
                        Brinca.
                        Desvia.
                        E cada desvio adia um confronto inevitável:
                        ficar sozinho consigo mesmo.
                    </p>

                    <p className="mb-3">
                        O desconforto dessa fase está aqui:
                        o herói que fazia piadas para crescer
                        agora faz piadas para não encarar o quanto ainda dói.
                        E quanto mais alto o riso,
                        mais evidente fica o silêncio por trás dele.
                    </p>

                    <ArticleVideo
                        embedUrl={video.embedUrl}
                        title={video.title}
                        heading={video.heading}
                        description={video.description}
                    />

                    <h2
                        id="o-heroi-sem-mapa"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O herói sem mapa: sentido como nova batalha
                    </h2>

                    <p className="mb-3">
                        O Thor &quot;pós&quot; é um herói que venceu o impossível… e ainda assim perdeu por dentro.
                        Isso cria um conflito raríssimo em blockbuster:
                        a luta já não é por poder — é por <strong>direção</strong>.
                        Ele sabe lutar. Ele sabe sacrificar.
                        O que ele não sabe é quem se torna quando a guerra termina.
                    </p>

                    <p className="mb-3">
                        A pergunta que ecoa é simples e brutal: <strong>qual é a missão quando a missão acabou?</strong> Quando não existe vilão imediato,
                        quando não há reino para proteger,
                        quando ninguém está gritando por socorro —
                        quem você é?
                    </p>

                    <p className="mb-3">
                        Essa é a parte em que o MCU toca algo profundamente contemporâneo.
                        Vivemos numa cultura que valoriza produtividade, utilidade, impacto.
                        Enquanto estamos &quot;resolvendo&quot;, nos sentimos necessários.
                        Mas quando a urgência acaba,
                        muitos de nós enfrentamos o mesmo vazio que Thor encara:
                        a sensação de não saber o próximo passo.
                    </p>

                    <p className="mb-3">
                        O herói sem mapa não é fraco.
                        Ele está diante da batalha mais silenciosa:
                        escolher um caminho sem garantia de aplauso.
                        E essa escolha exige algo mais difícil do que força —
                        exige autoconhecimento.
                    </p>

                    <p className="mb-3">
                        Thor representa essa crise moderna de identidade:
                        não a falta de capacidade,
                        mas a falta de clareza.
                        Ele não precisa provar que é poderoso.
                        Ele precisa decidir por que ainda quer lutar.
                    </p>

                    <p className="mb-3">
                        E aqui o arco fecha com maturidade.
                        O verdadeiro antagonista do pós-Endgame não é um vilão cósmico —
                        é a ausência de sentido.
                        Porque quando não existe propósito definido,
                        qualquer direção parece válida.
                        E qualquer distração parece solução.
                    </p>

                    <p className="mb-3">
                        O desconforto dessa fase não está no que Thor perdeu.
                        Está no que ele precisa construir.
                        Não é sobre recuperar um trono.
                        É sobre criar uma identidade que não dependa dele.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        Thor pós-Endgame é a versão mais humana do personagem — não porque ele perdeu força,
                        mas porque perdeu certeza.
                        E perder certeza é algo que nenhum raio resolve.
                    </p>

                    <p className="mb-3">
                        O MCU não está diminuindo Thor.
                        Está mudando a régua.
                        Durante anos, ele provou valor por vitória, impacto e poder.
                        Agora, o valor não está em vencer —
                        está em continuar.
                    </p>

                    <p className="mb-3">
                        Persistir quando não existe aplauso.
                        Levantar quando ninguém exige.
                        Buscar sentido quando o mundo já foi salvo.
                    </p>

                    <p className="mb-3">
                        Essa é a maturidade que fecha o arco:
                        o herói deixa de ser definido pelo que derrota
                        e passa a ser definido pelo que constrói depois da queda.
                    </p>

                    <p>
                        Talvez por isso essa seja a fase mais perigosa —
                        porque o inimigo não tem rosto,
                        não tem exército,
                        não tem trilha sonora.
                        O campo de batalha é silencioso.
                        E a pergunta que resta não é &quot;quem Thor pode vencer?&quot;,
                        mas &quot;quem ele escolhe ser quando ninguém está olhando?&quot;.
                    </p>

                    {/* CTA interno — sequência editorial Thor */}
                    <ContinueNoLexara
                        description="Se o campo de batalha agora é silencioso, esta é a sequência para acompanhar como Thor constrói sentido depois da queda — do orgulho à maturidade, da força à persistência."
                        links={[
                            {
                                href: "/filmes-series/marvel/thor/thor-no-mcu-evolucao",
                                label: "1) Thor no MCU: do deus arrogante ao herói que aprende a perder",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/marvel/thor/thor-ragnarok-analise",
                                label: "2) Thor: Ragnarok — o humor como máscara de uma tragédia",
                            },
                            {
                                href: "/filmes-series/marvel/thor/mjolnir-stormbreaker-identidade",
                                label: "3) Mjolnir e Stormbreaker: dignidade, identidade e o mito por trás das armas",
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
                        A análise acima parte de uma leitura crítica do arco de Thor no MCU,
                        especialmente a partir de <strong>Avengers: Endgame</strong> e seus desdobramentos.
                        Os materiais abaixo servem como base para informações verificáveis —
                        créditos, fichas técnicas, cronologia de lançamentos e contexto institucional.
                    </p>

                    <p className="mb-3">
                        A interpretação sobre luto, identidade, propósito e maturidade narrativa
                        é original do LEXARA, construída a partir da observação do desenvolvimento
                        do personagem ao longo da franquia e da comparação entre suas fases.
                        O objetivo não é afirmar verdades absolutas,
                        mas oferecer um mapa de leitura possível.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.marvel.com/" rel="noreferrer noopener" target="_blank">
                                Marvel (site oficial) — informações institucionais, personagens e catálogo
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/" rel="noreferrer noopener" target="_blank">
                                IMDb — créditos, elenco, equipe técnica e dados de produção
                            </a>
                        </li>
                        <li>
                            <a href="https://www.boxofficemojo.com/" rel="noreferrer noopener" target="_blank">
                                Box Office Mojo — dados de bilheteria e desempenho comercial
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> análises narrativas lidam com interpretações,
                        e interpretações evoluem. Rumos de estúdio mudam, projetos são ajustados,
                        personagens ganham novas camadas. O compromisso aqui é com rigor crítico,
                        não com previsões definitivas.
                    </p>
                </section>

                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em{" "}
                        <span className="text-slate-300">{article.publishedAtLabel}</span>.{" "}
                        <span className="text-slate-500">({formatISOToDateLabel(article.publishedAtISO)})</span>
                    </p>
                </footer>
            </article>
        </>
    );
}
