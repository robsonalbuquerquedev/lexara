import Link from "next/link";
import Script from "next/script";
import { Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type CulpaHistoricaEIdealProps = {
    article: Article;
};

const SECTIONS = [
    { id: "abertura", label: "O escudo como arquivo histórico" },
    { id: "propaganda", label: "Propaganda: o símbolo antes do homem" },
    { id: "culpa-historica", label: "Culpa histórica: guerras e silêncios" },
    { id: "ideais", label: "Ideal vs. Estado: quando o herói diz “não”" },
    { id: "mcu", label: "O MCU e o passado: confrontar sem glorificar" },
    { id: "por-que-funciona", label: "Por que isso funciona no personagem" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    // Mantemos simples e consistente: a label já existe em article.publishedAtLabel,
    // mas o footer usa esse helper. Você pode evoluir depois sem quebrar nada.
    return iso;
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

export default function CulpaHistoricaEIdeal({ article }: CulpaHistoricaEIdealProps) {
    // ✅ Publicação programada (#1): antes do horário, o artigo NÃO existe publicamente.
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
            { "@type": "Thing", name: "Capitão América" },
            { "@type": "Thing", name: "Steve Rogers" },
            { "@type": "Thing", name: "MCU" },
            { "@type": "Thing", name: "Marvel" },
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
                id="ld-article-capitao-america-culpa-historica-e-ideal"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-capitao-america-culpa-historica-e-ideal"
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
                        id="abertura"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O escudo como arquivo histórico
                    </h2>

                    <p className="mb-3">
                        O escudo do Capitão América costuma ser lido como &quot;proteção&quot;, &quot;honra&quot; e &quot;virtude&quot; — um atalho emocional
                        que resolve a conversa antes mesmo dela começar. Só que o MCU faz algo mais inteligente (e mais incômodo):
                        ele transforma o escudo em documento. Um objeto que não serve apenas para defender golpes, mas para
                        condensar decisões, discursos e versões convenientes do passado. E, como todo documento, ele diz tanto
                        pelo que mostra quanto pelo que escolhe não mostrar.
                    </p>

                    <p className="mb-3">
                        A partir do momento em que o símbolo vira personagem, ele para de ser decoração de pôster e vira cobrança
                        dramática. Porque símbolos não são neutros: eles nascem em momentos específicos, servem a propósitos
                        específicos e, com o tempo, vão sendo &quot;polidos&quot; até parecerem naturais. O escudo, então, vira uma espécie
                        de vitrine moral: quem olha de fora enxerga pureza; quem chega perto percebe as marcas, os remendos e os
                        silêncios que permitiram que aquela pureza fosse vendida como verdade.
                    </p>

                    <p className="mb-3">
                        É aqui que a culpa histórica entra em cena: não como &quot;culpa pessoal&quot; de Steve Rogers, mas como uma herança
                        que o personagem inevitavelmente carrega. A pergunta que o MCU nos empurra não é se o Capitão é bom — ele é.
                        A pergunta é mais cruel: <em>o que acontece quando um homem bom vira a embalagem perfeita para narrativas que
                            preferem esconder o preço da própria história?</em> O escudo fica pesado porque, além de metal, ele passa a
                        carregar memória.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: o Capitão América não é só &quot;patriotismo&quot;. Ele é um termômetro moral — e o escudo mede
                                o quanto a história foi romantizada.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="propaganda"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Propaganda: o símbolo antes do homem
                    </h2>

                    <p className="mb-3">
                        Steve Rogers nasce como ideia pública antes de nascer como sujeito — e isso é a engrenagem central da propaganda.
                        Propaganda não precisa que você seja &quot;real&quot;; ela precisa que você seja <em>legível</em>. Não importa quem você é,
                        importa o que você representa para quem está assistindo. Por isso o Capitão, antes de ser personagem, é embalagem:
                        uma promessa com uniforme, cores fáceis de reconhecer e um discurso que cabe em poucos segundos.
                    </p>

                    <p className="mb-3">
                        Se você quiser ver essa engrenagem funcionando sem filtro, vale revisitar o momento em que o LEXARA
                        desmonta a lógica da propaganda no primeiro artigo — quando o herói deixa de ser apenas símbolo
                        e passa a ser mercadoria emocional. É a mesma ferida, mas agora observada por outro ângulo:
                        lá, o nascimento do produto; aqui, o peso que ele carrega depois de vendido.{" "}
                        <Link
                            href="/filmes-series/marvel/capitao-america/o-primeiro-vingador-simbolo#propaganda"
                            className="font-semibold text-slate-100 underline decoration-slate-600 underline-offset-4 hover:decoration-slate-300"
                            title="Voltar ao trecho 'Propaganda: quando o herói vira produto'"
                        >
                            Releia &quot;Propaganda: quando o herói vira produto&quot;
                        </Link>
                        .
                    </p>

                    <p className="mb-3">
                        O filme coloca o leitor/espectador num lugar incômodo — e é aí que ele ganha retenção. A gente torce por Steve
                        porque ele é bom, mas reconhece que a máquina precisa dele porque ele é útil. A bondade vira combustível narrativo
                        e, ao mesmo tempo, mercadoria: é vendida como inspiração, usada como vitrine e repetida até parecer &quot;natural&quot;.
                        E quando algo parece natural demais, quase sempre é porque foi treinado para ser aceito sem pergunta.
                    </p>

                    <p className="mb-3">
                        O detalhe cruel é que o símbolo não nasce para proteger o homem; o homem é escolhido para proteger o símbolo.
                        Steve vira o &quot;corpo&quot; perfeito para uma história que quer ser simples, limpa, triunfante. Só que o MCU não deixa
                        isso confortável por muito tempo: ele insinua que, quanto mais o mito cresce, mais o sujeito some — e esse
                        desaparecimento é o preço escondido da propaganda.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">
                                O truque dramático que o MCU acerta aqui
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                Ele faz a propaganda parecer &quot;bonita&quot; por alguns minutos — e depois mostra a fatura: quando o símbolo fica
                                grande demais, o humano lá dentro começa a sumir. A graça amarga é essa: o público compra a imagem, e o
                                personagem precisa aprender a viver com o que a imagem exige dele.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Um herói pode ser virtuoso e ainda assim ser usado como vitrine — e o conflito começa quando ele percebe isso.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="culpa-historica"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Culpa histórica: guerras e silêncios
                    </h2>

                    <p className="mb-3">
                        O escudo não protege apenas pessoas. Ele também protege versões da história. E toda versão &quot;oficial&quot; nasce
                        com cortes bem calculados: conflitos simplificados, inimigos reduzidos a caricaturas, complexidades
                        transformadas em slogans fáceis de repetir. O símbolo funciona porque é limpo. E ele é limpo porque alguém
                        decidiu o que não deveria aparecer.
                    </p>

                    <p className="mb-3">
                        É aqui que a culpa histórica ganha peso real. Não se trata de uma culpa individual, emocional ou melodramática.
                        Trata-se de uma herança estrutural. Steve Rogers foi criado para comunicar uma mensagem — e toda mensagem
                        política escolhe o que iluminar e o que deixar na sombra. Quando o Capitão ergue o escudo, ele também ergue
                        uma narrativa. E narrativas sempre custam alguma coisa.
                    </p>

                    <p className="mb-3">
                        O desconforto surge quando o próprio personagem percebe que o mundo que o aplaude não é tão simples quanto
                        o cartaz que o estampou. Guerras não são tão organizadas quanto discursos. Instituições não são tão puras
                        quanto hinos. O escudo, então, deixa de ser apenas defesa física e passa a ser defesa simbólica — uma
                        tentativa de sustentar um ideal em um terreno que insiste em mostrar rachaduras.
                    </p>

                    <p className="mb-3">
                        A grande sacada do MCU é não transformar essa tensão em negação. Ele não apaga o passado do símbolo para
                        mantê-lo intacto. Ao contrário: ele força Steve a olhar para ele. E quando o herói começa a questionar
                        as estruturas que o criaram, a narrativa muda de tom. O mito deixa de ser celebração automática e vira
                        responsabilidade contínua.
                    </p>

                    <p className="mb-3">
                        A culpa histórica, então, não destrói o Capitão América — ela o amadurece. Porque o verdadeiro conflito
                        não é &quot;ser patriota ou não ser&quot;. É decidir o que fazer quando a própria história que te moldou revela
                        contradições. E essas contradições não são abstratas: elas têm rosto, ideologia e projeto de poder.
                        Quando o patriotismo encontra seu reflexo distorcido, como acontece na construção da HYDRA como
                        espelho sombrio do próprio discurso nacional, o símbolo deixa de ser confortável.{" "}
                        <Link
                            href="/filmes-series/marvel/capitao-america/o-primeiro-vingador-simbolo#guerra"
                            className="font-semibold text-slate-100 underline decoration-slate-600 underline-offset-4 hover:decoration-slate-300"
                            title="Voltar ao trecho sobre HYDRA como espelho sombrio do patriotismo"
                        >
                            Releia a análise sobre HYDRA e o espelho sombrio do patriotismo
                        </Link>
                        .
                        É nesse momento que o escudo começa a pesar de verdade: quando ele não pode mais ser levantado
                        sem consciência do que está sendo defendido — e do que precisa ser confrontado.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="ideais"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Ideal vs. Estado: quando o herói diz "não"
                    </h2>

                    <p className="mb-3">
                        O momento mais interessante do Capitão América no MCU não é quando ele obedece — é quando ele recusa.
                        Enquanto o símbolo funciona como extensão do Estado, tudo parece alinhado: uniforme, discurso, bandeira,
                        propósito. Mas o verdadeiro teste começa quando os valores que sustentam o homem entram em colisão com
                        as decisões da estrutura que o criou. É aí que o herói deixa de ser confortável.
                    </p>

                    <p className="mb-3">
                        Steve Rogers acredita em princípios, não em instituições. Essa distinção é pequena na superfície,
                        mas explosiva na prática. Porque instituições mudam, erram, se corrompem ou se escondem atrás de
                        justificativas estratégicas. Valores, não. Quando o Estado passa a agir em nome da segurança,
                        da ordem ou do medo, e esses argumentos entram em conflito com a ética que moldou o personagem,
                        o símbolo enfrenta sua maior prova: continuar representando o sistema ou permanecer fiel ao ideal?
                    </p>

                    <p className="mb-3">
                        É aqui que nasce a fratura dramática definitiva. O patriota perfeito se torna trágico não porque
                        deixa de amar seu país, mas porque entende que amor não é submissão automática. &quot;Amar um país&quot;
                        não significa assinar embaixo de cada decisão governamental. Pelo contrário: às vezes significa
                        confrontar o próprio poder que reivindica falar em seu nome.
                    </p>

                    <p className="mb-3">
                        Esse &quot;não&quot; é o ponto de maturidade do personagem. Não é rebeldia vazia, nem heroísmo performático.
                        É responsabilidade moral. O símbolo que nasceu para unificar passa a dividir opiniões — e é
                        exatamente isso que o torna mais humano. Porque um herói que nunca discorda nunca cresce.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        O escudo como &quot;não&quot; visual
                    </h3>

                    <p className="mb-3">
                        Quando o MCU coloca o escudo em choque — bloqueando aliados, confrontando autoridades,
                        rompendo formações — ele está traduzindo conflito moral em linguagem visual. O objeto deixa
                        de ser apenas proteção física e vira argumento. Cada impacto comunica uma tese silenciosa:
                        é possível defender pessoas sem defender narrativas oficiais.
                    </p>

                    <p className="mb-3">
                        O escudo, então, não é só defesa. Ele vira limite. Ele diz: &quot;até aqui&quot;. E quando um símbolo
                        nacional aprende a impor limites ao próprio poder que o ergueu, a narrativa muda de patamar.
                        O herói deixa de ser propaganda amadurecida e passa a ser consciência ativa.
                    </p>

                    <p className="mb-3">
                        E é nesse ponto que a pergunta se impõe com força total: se o símbolo pode dizer &quot;não&quot; ao Estado,
                        o que acontece quando o Estado tenta substituir o símbolo? É essa tensão que abre caminho
                        para a próxima camada do debate — quem tem direito de carregar o escudo e o que ele realmente representa.
                    </p>

                    <h2
                        id="mcu"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O MCU e o passado: confrontar sem glorificar
                    </h2>

                    <p className="mb-3">
                        O MCU acerta quando resiste à tentação mais fácil: limpar o passado do símbolo para preservá-lo intacto.
                        Seria simples transformar o Capitão América em relíquia intocável, congelada em uma versão heroica da
                        história. Mas a franquia prefere o caminho mais difícil — e mais interessante. Ao invés de proteger o mito,
                        ela o coloca em tensão constante.
                    </p>

                    <p className="mb-3">
                        Steve Rogers não é apresentado como dono da verdade. Ele é colocado diante de estruturas que falham,
                        instituições que se contradizem e decisões que não cabem em slogans patrióticos. O MCU entende algo
                        fundamental: ser referência moral não significa ter respostas prontas. Significa suportar o peso do
                        contexto sem abandonar o próprio eixo ético.
                    </p>

                    <p className="mb-3">
                        Isso muda completamente a leitura do herói. Ele deixa de ser &quot;propaganda viva&quot; e passa a ser um personagem
                        que negocia com memórias, com instituições e com consequências. O símbolo não é apagado — ele é
                        problematizado. E quando um símbolo é problematizado, ele ganha profundidade.
                    </p>

                    <p className="mb-3">
                        O mito continua existindo, mas agora ele sangra. Ele não é mais uma narrativa selada; é um debate em
                        andamento. O escudo não é apenas escudo — é herança. E heranças não vêm só com honra, vêm com
                        responsabilidades, com erros históricos e com a necessidade constante de revisão.
                    </p>

                    <p className="mb-3">
                        Ao confrontar o passado sem glorificá-lo, o MCU faz algo raro em narrativas de super-herói:
                        ele transforma o símbolo em processo. O Capitão América deixa de ser resposta e vira pergunta.
                        E perguntas sustentam histórias por mais tempo do que certezas.
                    </p>

                    <p className="mb-3">
                        É justamente essa escolha que prepara o terreno para a etapa seguinte da discussão: se o símbolo
                        não é estático, se ele pode ser questionado e reinterpretado, então quem tem o direito — ou a
                        responsabilidade — de carregá-lo depois? Quando o mito amadurece, o legado se torna inevitável.
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
                        id="por-que-funciona"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Por que isso funciona no personagem
                    </h2>

                    <p className="mb-3">
                        Funciona porque Steve Rogers não é construído como espetáculo — ele é construído como parâmetro.
                        O soro não cria caráter; ele amplifica o que já estava lá. E essa não é apenas uma frase de efeito,
                        é a base moral do personagem — algo que já analisamos quando discutimos a escolha que define
                        o herói desde o início.{" "}
                        <Link
                            href="/filmes-series/marvel/capitao-america/o-primeiro-vingador-simbolo#escolha"
                            className="font-semibold text-slate-100 underline decoration-slate-600 underline-offset-4 hover:decoration-slate-300"
                            title="Voltar ao trecho 'O soro não cria caráter — ele revela'"
                        >
                            Releia &quot;O soro não cria caráter — ele revela&quot;
                        </Link>
                        . O poder físico é impressionante, mas o que realmente sustenta o personagem é a coerência interna.
                        Ele é apresentado como ideal humano antes de ser ideal nacional.
                    </p>

                    <p className="mb-3">
                        Isso torna o conflito brutalmente simples: se ele é &quot;o melhor de nós&quot;, o que acontece quando
                        &quot;nós&quot; escolhemos o caminho errado? O drama do Capitão não está na dúvida sobre quem ele é.
                        Está na dúvida sobre quem o mundo está se tornando. E essa inversão é poderosa, porque desloca
                        o foco do herói para a sociedade que o observa.
                    </p>

                    <p className="mb-3">
                        A culpa histórica, então, deixa de ser peso decorativo e vira motor narrativo. Steve não existe
                        para celebrar a vitória — ele existe para perguntar o preço da vitória. Quem ficou para trás?
                        Que narrativa foi simplificada? Que decisão foi justificada em nome de algo maior? Quando o
                        herói começa a fazer essas perguntas, a história ganha profundidade moral.
                    </p>

                    <p className="mb-3">
                        O personagem funciona porque ele não se rende ao cinismo. Ele não abandona o ideal, mas também
                        não fecha os olhos para a contradição. Essa combinação rara — convicção sem ingenuidade —
                        transforma o símbolo em consciência ativa. E consciência é sempre mais dramática do que força.
                    </p>

                    <p className="mb-3">
                        No fim, o Capitão América não é interessante por ser invencível. Ele é interessante porque
                        escolhe permanecer íntegro mesmo quando isso o coloca em desacordo com o próprio sistema que
                        o ergueu. É essa tensão constante entre ideal e realidade que mantém o personagem relevante —
                        não como propaganda, mas como pergunta moral em movimento.
                    </p>

                    <p className="mb-3">
                        E é justamente por isso que a discussão não termina aqui. Se o símbolo amadureceu, se o mito
                        foi confrontado e se o ideal sobreviveu ao choque com a história, resta a questão final:
                        o que isso diz sobre o tipo de herói que escolhemos sustentar?
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        &quot;Entre propaganda e ideal&quot; é exatamente o território onde o Capitão América se torna mais complexo —
                        e, paradoxalmente, mais humano. Quando ele deixa de ser cartaz e vira consciência, o símbolo abandona
                        a superfície confortável da celebração e mergulha no terreno instável da responsabilidade. O escudo
                        já não é troféu exibido; ele é pergunta levantada.
                    </p>

                    <p className="mb-3">
                        O MCU não escolhe destruir o mito, nem preservá-lo intacto. Ele faz algo mais difícil: permite que
                        o mito amadureça. E amadurecer significa aceitar que a própria origem carrega contradições. O símbolo
                        continua existindo, mas agora ele sabe de onde veio — e sabe o que precisa confrontar para continuar
                        sendo legítimo.
                    </p>

                    <p className="mb-3">
                        É por isso que o Capitão América não se esgota como personagem. Ele não representa um país perfeito,
                        mas um ideal em constante revisão. Ele não é propaganda reciclada; é consciência ativa. E consciência
                        ativa incomoda, questiona, tensiona — exatamente como um símbolo deveria fazer quando carrega história.
                    </p>

                    <p className="mb-3">
                        No fim, Steve Rogers continua sendo um ideal. Só que agora é um ideal adulto. Um ideal que não depende
                        de silêncios para existir, que não precisa apagar o passado para parecer puro e que entende que amar
                        um país inclui a coragem de discordar dele.
                    </p>

                    <p>
                        Talvez seja essa a verdadeira força do escudo: não proteger narrativas imaculadas, mas sustentar
                        a pergunta que permanece depois do impacto. E enquanto essa pergunta continuar ecoando, o símbolo
                        continuará vivo.
                    </p>

                    {/* CTA interno — sequência editorial Capitão América */}
                    <ContinueNoLexara
                        description="Se este artigo abriu a ferida certa, aqui vai a sequência natural para entender como o MCU transforma símbolo em conflito — e conflito em identidade."
                        links={[
                            {
                                href: "/filmes-series/marvel/capitao-america/o-primeiro-vingador-simbolo",
                                label: "Anterior: O Primeiro Vingador e o nascimento do símbolo",
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
                        A análise apresentada aqui parte de dados verificáveis — créditos oficiais, contexto de produção,
                        informações públicas sobre personagens e desempenho comercial — mas vai além deles. O objetivo
                        do LEXARA não é apenas organizar fatos: é interpretá-los à luz do conflito moral que sustenta
                        o Capitão América dentro do MCU.
                    </p>

                    <p className="mb-3">
                        As fontes abaixo oferecem a base factual que sustenta o cenário narrativo. A leitura crítica,
                        as conexões entre propaganda, guerra, culpa estrutural e idealismo adulto são construções
                        editoriais próprias — pensadas para ampliar o debate, não para encerrá-lo.
                    </p>

                    <ul>
                        <li>
                            <a
                                href="https://www.marvel.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Marvel (site oficial) — universo, personagens e catálogos
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.imdb.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                IMDb — créditos, elenco e ficha técnica
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.boxofficemojo.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Box Office Mojo — desempenho e bilheteria (contexto)
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> símbolos não são estáticos — eles atravessam contextos,
                        revisões históricas e disputas culturais. Esta análise assume essa complexidade como ponto
                        de partida. O Capitão América não é tratado aqui como ícone imune ao tempo, mas como narrativa
                        em evolução.
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
                            ({formatISOToDateLabel(article.publishedAtISO)})
                        </span>
                    </p>
                </footer>
            </article>
        </>
    );
}
