import Link from "next/link";
import Script from "next/script";
import { Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type GalGadotDceuProps = {
    article: Article;
};

const SECTIONS = [
    { id: "por-que-essa-diana-importa", label: "Por que essa Diana importa" },
    { id: "a-virada-do-dceu", label: "A virada do DCEU" },
    { id: "carisma-e-iconografia", label: "Carisma e iconografia" },
    { id: "fisicalidade-e-acao", label: "Fisicalidade e ação" },
    { id: "limites-e-direcao", label: "Limites e escolhas de direção" },
    { id: "impacto-cultural", label: "Impacto cultural e legado" },
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
                Espaço reservado para anúncio (AdSense) — carregado conforme consentimento.
            </p>
        </aside>
    );
}

export default function GalGadotDceu({ article }: GalGadotDceuProps) {
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
            { "@type": "Thing", name: "Gal Gadot" },
            { "@type": "Thing", name: "DCEU" },
            { "@type": "Thing", name: "Zack Snyder" },
        ],
    };

    // 🔹 Schema
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
    const video = {
        embedUrl: "https://www.youtube-nocookie.com/embed/ZrdQSAX2kyw",
        title: "Zack Snyder’s Justice League — Trailer oficial",
        heading: "Vídeo de apoio: trailer oficial para enxergar a Diana no “modo mito”",
        description:
            "Use este trailer como referência de linguagem visual: repare nas entradas coreografadas, na escala épica e no modo como a câmera transforma a Diana em ícone. Isso ajuda a entender a ‘gramática’ Snyder aplicada à Mulher-Maravilha antes de voltar ao texto.",
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-gal-gadot-dceu"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-gal-gadot-dceu"
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
                        caption="Gal Gadot consolidou uma Diana ‘de ícone’: monumental, reconhecível e feita para a memória visual."
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
                        id="por-que-essa-diana-importa"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Por que essa Diana importa mesmo fora dos filmes &quot;solo&quot;
                    </h2>

                    <p className="mb-3">
                        A Mulher-Maravilha da era DCEU não virou símbolo só porque &quot;funcionou no marketing&quot; ou porque a franquia precisava de um
                        rosto novo para equilibrar o peso do universo. Ela virou símbolo porque entrega uma coisa rara em blockbuster serializado:
                        <strong> presença</strong>. Em cena, Gal Gadot não precisa explicar Diana o tempo todo — ela ocupa o quadro como alguém que
                        já carrega história, como se a personagem tivesse vivido mais do que o filme mostra. Isso aparece nas entradas, no modo como
                        ela se posiciona antes do conflito e, principalmente, na sensação de que a câmera &quot;acredita&quot; nela. Mesmo quando o roteiro
                        economiza contexto, a imagem sustenta a ideia de mito: uma heroína que não está ali apenas para cumprir função de equipe,
                        mas para projetar um sentido maior de coragem, proteção e ideal.
                    </p>

                    <p className="mb-3">
                        Esse tipo de construção tem um ganho claro e um risco inevitável. O ganho é imediato: a personagem vira ícone pop e atravessa
                        filmes irregulares mantendo reconhecimento e força simbólica — o público sabe quando ela entrou, sabe o que ela representa,
                        e sabe o que esperar do impacto emocional da presença dela. O risco é mais sutil: quando a imagem fica grande demais, o lado
                        íntimo encolhe. A Diana pode ficar &quot;perfeita&quot; demais — monumental demais — e isso às vezes empobrece a personagem por dentro,
                        porque contradição e vulnerabilidade precisam de espaço narrativo para existir. Em outras palavras: a Diana vira maior do que
                        a pessoa, e a pessoa some atrás do emblema. O desafio do DCEU, especialmente na fase mais épica, é não usar o símbolo como
                        atalho: deixar que ele seja consequência de escolhas humanas, não substituto delas.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: a Diana de Gal Gadot funciona melhor quando o filme deixa a imagem &quot;respirar&quot; — silêncio,
                                postura, olhar — e pior quando tenta transformar o símbolo em solução automática.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="a-virada-do-dceu"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        A virada do DCEU: da &quot;participação especial&quot; ao centro emocional
                    </h2>

                    <p className="mb-3">
                        A entrada da Mulher-Maravilha no DCEU não acontece por acaso nem apenas como expansão de elenco. Ela carrega uma estratégia
                        clara: introduzir uma heroína capaz de gerar impacto imediato e, ao mesmo tempo, oferecer um eixo moral para um universo
                        ainda em formação. Para isso, direção e montagem são fundamentais. A Diana é filmada como <strong>evento cinematográfico</strong>:
                        sua chegada é marcada por música reconhecível, câmera em reverência e um timing preciso que transforma cada aparição em
                        assinatura visual. Mesmo quando sua participação narrativa é curta, o filme faz questão de sinalizar ao espectador que
                        algo importante acabou de entrar em cena.
                    </p>

                    <p className="mb-3">
                        Essa escolha dialoga diretamente com a estética da era Snyder. O heroísmo aqui é menos cotidiano e mais mítico, mais
                        monumental, quase como um &quot;pôster em movimento&quot;. A Mulher-Maravilha não surge apenas para resolver conflitos pontuais, mas
                        para representar um ideal: honra, coragem e senso de justiça acima do cinismo que domina boa parte do universo. Esse estilo
                        funciona muito bem quando o público busca grandeza e impacto simbólico. Ao mesmo tempo, ele divide opiniões quando o desejo
                        é proximidade emocional, nuances íntimas e desenvolvimento mais silencioso. A virada do DCEU está justamente nessa aposta:
                        usar a Diana como âncora emocional sem necessariamente aprofundá-la em cada cena.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">Como ler essa fase sem cair no 8 ou 80</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Pense na Diana do DCEU como uma &quot;imagem-mãe&quot;: ela estabelece um padrão visual, emocional e ético para o universo.
                                O problema não é a grandiosidade em si — ela é parte da proposta. O risco aparece quando essa grandiosidade passa
                                a substituir desenvolvimento dramático, em vez de ser consequência dele.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                A personagem assume o papel de bússola moral do time, mas nem sempre recebe tempo de tela suficiente para que esse
                                papel seja construído de dentro para fora.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="carisma-e-iconografia"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Carisma e iconografia: o que ela comunica sem falar
                    </h2>

                    <p className="mb-3">
                        Gal Gadot tem um trunfo que o cinema valoriza como poucos: <strong>leitura rápida</strong>. Em questão de segundos,
                        o espectador entende qual é o &quot;tipo&quot; de heroína que está em cena — não porque o roteiro explica, mas porque o corpo,
                        o enquadramento e o ritmo da atuação já entregam a mensagem. Isso não é simplificação; é linguagem cinematográfica em
                        estado puro. Ícones funcionam justamente assim: eles comunicam antes da frase, antes da motivação verbal, antes mesmo
                        da ação explícita. Quando a câmera encontra uma figura que se sustenta sozinha no quadro, o filme ganha tempo narrativo
                        e impacto simbólico ao mesmo tempo.
                    </p>

                    <p className="mb-3">
                        A Diana do DCEU comunica nobreza e firmeza de forma quase instintiva. O olhar tende ao &quot;alto&quot;, apontando para um ideal
                        maior do que o conflito imediato; a postura é frontal, estável, como alguém que não hesita diante da decisão. Essa
                        gramática visual cria reconhecimento imediato e ajuda a personagem a virar referência cultural — basta uma imagem,
                        uma entrada ou um gesto para que o público saiba exatamente quem ela é e o que representa. O risco aparece quando essa
                        gramática se repete sem variação: o que antes era força vira pose, e o símbolo começa a se sobrepor à pessoa. O desafio
                        da era Snyder não é criar iconografia — isso ela faz muito bem —, mas encontrar espaço para que o ícone respire sem
                        virar estátua.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="fisicalidade-e-acao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Fisicalidade e ação: a Diana como corpo em movimento
                    </h2>

                    <p className="mb-3">
                        A presença da Mulher-Maravilha não se sustenta apenas em carisma ou iconografia: ela se completa na fisicalidade.
                        Para funcionar em cena, Diana precisa ser crível como guerreira e, ao mesmo tempo, legível como símbolo — alguém
                        que pode lutar, cair, levantar e ainda carregar um ideal maior do que o confronto imediato. A atuação física de
                        Gal Gadot, especialmente nas cenas de combate, ajuda a consolidar essa dupla leitura. O corpo comunica preparo,
                        decisão e confiança, criando a sensação de que aquela personagem &quot;poderia estar ali de verdade&quot;, mesmo dentro de
                        um universo estilizado e mitológico.
                    </p>

                    <p className="mb-3">
                        Esse realismo corporal melhora a fantasia. Mesmo quando o espectador não compra completamente o universo, os tons
                        ou as escolhas narrativas do filme, ele tende a comprar a personagem. E essa compra emocional é decisiva: ela
                        mantém a Diana funcionando como ponto de estabilidade quando o restante do filme oscila em ritmo, tom ou coerência.
                        A personagem vira âncora — não porque é invencível, mas porque o corpo em cena convence antes da lógica do roteiro.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        O detalhe que muita gente não percebe: &quot;força&quot; também é ritmo
                    </h3>

                    <p className="mb-3">
                        Força não é apenas pancada, impacto ou destruição em larga escala. Força também é pausa, preparação e intenção.
                        É o microsegundo em que a câmera escolhe ficar com a personagem antes do golpe, permitindo que o espectador
                        antecipe o movimento e sinta o peso da decisão. A era Snyder entende bem esse princípio e o transforma em assinatura:
                        a ação ganha ritmo próprio, quase cerimonial, e cada movimento da Diana reforça não só sua potência física, mas
                        sua função simbólica dentro da cena.
                    </p>

                    <h2
                        id="limites-e-direcao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Limites e escolhas de direção: quando o mito engole a pessoa
                    </h2>

                    <p className="mb-3">
                        É aqui que o &quot;limite&quot; do pacote começa a aparecer. Quando a Diana é filmada quase sempre como ícone absoluto, o filme
                        corre o risco de esquecer a mulher por trás do emblema. E isso não é uma falha de atuação — é uma decisão clara de
                        direção e foco narrativo. A câmera escolhe o mito, o enquadramento privilegia a grandiosidade e o roteiro frequentemente
                        pede função: a Diana como eixo moral do grupo, como presença salvadora, como símbolo que organiza a cena. Nesse processo,
                        sobra pouco espaço para contradições íntimas, hesitações ou conflitos que não tenham escala épica.
                    </p>

                    <p className="mb-3">
                        O resultado é uma personagem inegavelmente poderosa, mas que às vezes soa distante. A Diana fica impecável — e o
                        impecável, em excesso, pode esfriar a relação com o espectador. Falta fricção, falta falha, falta a sensação de que
                        aquela figura monumental também carrega dúvidas que não cabem em câmera lenta ou trilha grandiosa. O verdadeiro
                        desafio da era Snyder não é criar impacto visual — isso ela faz com eficiência —, mas equilibrar o épico, que marca
                        a memória coletiva, com o humano, que sustenta a conexão emocional ao longo do tempo.
                    </p>

                    <ArticleVideo
                        embedUrl={video.embedUrl}
                        title={video.title}
                        heading={video.heading}
                        description={video.description}
                    />

                    <h2
                        id="impacto-cultural"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Impacto cultural: por que essa versão virou &quot;a&quot; Mulher-Maravilha para muita gente
                    </h2>

                    <p className="mb-3">
                        Ícones produzem um efeito curioso: eles viram atalho mental. Com o tempo, deixam de ser apenas personagens e passam a
                        funcionar como imagens automáticas na memória coletiva. Para muita gente, &quot;Mulher-Maravilha&quot; passou a significar
                        imediatamente &quot;a imagem da Gal Gadot&quot; — postura firme, figurino reconhecível, trilha marcante e entradas coreografadas
                        como eventos. Isso é impacto cultural em estado puro: quando a personagem deixa de depender de contexto e passa a ser
                        identificada em um segundo, ela ganha um rosto definitivo para uma geração inteira de espectadores.
                    </p>

                    <p className="mb-3">
                        Essa cristalização muda o jogo para qualquer adaptação posterior. Quem vier depois não compete apenas com uma
                        interpretação anterior, mas com uma memória afetiva já consolidada. O público não compara cenas; compara sensações,
                        expectativas e símbolos. O legado da Diana de Gal Gadot, portanto, é duplo: ele abre caminho ao provar que a
                        personagem funciona como protagonista e como ícone global, mas também eleva a cobrança para o futuro. Reimaginar
                        a Mulher-Maravilha passa a exigir não só criatividade, mas coragem para dialogar com uma imagem que já se tornou
                        referência cultural.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        A Diana interpretada por Gal Gadot é, acima de tudo, uma vitória de presença. Ela sustenta o símbolo com naturalidade e
                        transforma cada entrada em cena em assinatura visual e emocional. É uma Mulher-Maravilha construída para ser lembrada,
                        reconhecível em poucos segundos e capaz de atravessar filmes irregulares sem perder força simbólica. Isso explica por que,
                        mesmo em meio às turbulências criativas do DCEU, a personagem permaneceu como um de seus pilares mais sólidos e
                        identificáveis — um ponto de estabilidade em um universo frequentemente dividido.
                    </p>

                    <p className="mb-3">
                        Os limites aparecem quando esse mesmo mito vira padrão único. Ao ser filmada quase sempre no registro épico, a Diana
                        perde espaço para a contradição, para o conflito íntimo e para a fragilidade que aproximam personagem e público. O
                        melhor da era Snyder com a Mulher-Maravilha está na iconografia: a imagem forte, a gramática visual clara, o senso de
                        grandeza. O que às vezes falta é a &quot;vida pequena&quot; — os gestos cotidianos, as dúvidas silenciosas — que fazem a
                        grandiosidade não apenas impressionar, mas doer.
                    </p>

                    <p>
                        No fim, impacto cultural não nasce de perfeição técnica ou narrativa. Nasce de clareza. Você olha e entende quem ela é,
                        o que representa e por que importa. E a Mulher-Maravilha de Gal Gadot, gostando mais ou menos do caminho escolhido pelo
                        DCEU, é clara como poucas: um ícone que marcou uma geração, mesmo quando o universo ao redor ainda buscava sua forma.
                    </p>

                    {/* CTA interno — sequência editorial Mulher-Maravilha */}
                    <ContinueNoLexara
                        description="Se este texto foi seu ponto de partida, o caminho mais natural é voltar aos filmes &quot;solo&quot; para ver a Diana em camadas diferentes — e depois seguir para o que vem pela frente no DCU."
                        links={[
                            {
                                href: "/filmes-series/dc/mulher-maravilha/mulher-maravilha-2017",
                                label: "Voltar: Mulher-Maravilha (2017)",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/dc/mulher-maravilha/mulher-maravilha-1984",
                                label: "Ler: Mulher-Maravilha 1984",
                            },
                            {
                                href: "/filmes-series/dc/mulher-maravilha/mulher-maravilha-futuro-dcu",
                                label: "Próximo: Futuro da personagem no DCU",
                            },
                            {
                                href: "/filmes-series/dc/mulher-maravilha",
                                label: "Ver a seção Mulher-Maravilha",
                            },
                            {
                                href: "/filmes-series/dc",
                                label: "Explorar o hub DC",
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
                        As fontes listadas abaixo servem como base para dados verificáveis — créditos, fichas técnicas, informações de produção
                        e contexto geral de estúdio. Elas ajudam a situar a personagem, os filmes e o momento histórico do DCEU, oferecendo
                        referências objetivas para o leitor. A leitura crítica, as conexões interpretativas e as conclusões apresentadas ao
                        longo do artigo, no entanto, são originais do LEXARA e fazem parte de sua linha editorial analítica.
                    </p>

                    <p className="mb-3">
                        Ao separar dados factuais de interpretação, o objetivo não é &quot;fechar&quot; sentidos, mas dar transparência ao processo
                        de análise. Cinema é linguagem, não planilha: os números e registros informam, mas a compreensão do impacto cultural,
                        simbólico e narrativo depende de leitura contextual, comparação histórica e sensibilidade crítica.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.dc.com/" rel="noreferrer noopener" target="_blank">
                                DC (site oficial) — universo, personagens, comunicados institucionais e catálogos
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/title/tt0451279/" rel="noreferrer noopener" target="_blank">
                                IMDb — Wonder Woman (2017): elenco, créditos, ficha técnica e dados de produção
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/watch?v=ZrdQSAX2kyw"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                YouTube — Zack Snyder’s Justice League (2021) Official Trailer
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> esta análise separa intencionalmente atuação, direção e roteiro para evitar
                        leituras &quot;tudo ou nada&quot;. Uma interpretação pode se tornar icônica mesmo quando o projeto como um todo oscila em tom,
                        coesão ou recepção crítica.
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
