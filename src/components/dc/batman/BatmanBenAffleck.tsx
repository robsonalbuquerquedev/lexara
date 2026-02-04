import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type BatmanBenAffleckProps = {
    article: Article;
};

const SECTIONS = [
    { id: "ponto-de-partida", label: "O ponto de partida do DCEU" },
    { id: "mito-e-icones", label: "O mito do Batman e os ícones que ele carrega" },
    { id: "brutalidade", label: "A brutalidade como linguagem" },
    { id: "controversias", label: "A controvérsia: por que dividiu tanto?" },
    { id: "legado", label: "O que ficou: legado e influência" },
    { id: "onde-se-encaixa", label: "Onde essa versão se encaixa no cinema" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    // Keep simple and predictable. Final label is already provided in ARTICLE.publishedLabel.
    return iso;
}

function classNames(...parts: Array<string | false | null | undefined>) {
    return parts.filter(Boolean).join(" ");
}

function AdSlot({ label }: { label: string }) {
    // Placeholder for your real ads component.
    // Replace with <AdSenseUnit .../> once integrated with Consent Mode.
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

export default function BatmanBenAffleck({ article }: BatmanBenAffleckProps) {
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
        about: [{ "@type": "Thing", name: "Batman" }, { "@type": "Thing", name: "DC" }, { "@type": "Thing", name: "DCEU" }],
    };

    // 🔹 Schema
    const jsonLdBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            breadcrumbItem("Filmes & Séries", "/filmes-series", 1),
            breadcrumbItem("DC", article.categoryHref, 2),
            breadcrumbItem("Batman", article.topicHref, 3),
            breadcrumbItem(article.title, article.slug, 4),
        ],
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-batman-ben-affleck"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-batman-ben-affleck"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
            />

            <article className="mx-auto w-full max-w-4xl px-6 py-14">
                {/* Badge + breadcrumbs visual */}
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
                            title="Ver a seção Batman"
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

                    {/* Cover */}
                    <ArticleCover
                        src={article.coverImage.src}
                        alt={article.coverImage.alt}
                        caption="Entre o símbolo e o choque: a leitura do Batman no DCEU."
                        priority
                        aspect="16/9"
                    />
                </header>

                {/* Table of contents (time on page ↑) */}
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

                {/* Ad (top of body) */}
                {/* <AdSlot label="Anúncio (Topo do artigo)" /> */}

                {/* Content */}
                <section className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-slate-100">
                    <h2
                        id="ponto-de-partida"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O ponto de partida do DCEU
                    </h2>

                    <p className="mb-3">
                        Quando Ben Affleck veste a armadura do Batman, ele não chega &quot;para começar&quot; — ele chega como quem já viveu
                        demais e já pagou caro por isso. O DCEU escolhe apresentar um <strong>Batman mais velho</strong>, <strong>mais cínico</strong> e
                        emocionalmente marcado, alguém que não carrega apenas traumas antigos, mas um histórico inteiro de perdas, erros e
                        decisões difíceis. Essa abordagem muda o tipo de tensão do personagem: em vez de acompanhar o surgimento do herói,
                        o filme sugere um herói que está há tempo demais em guerra com o próprio mundo — e consigo mesmo.
                    </p>

                    <p className="mb-3">
                        É por isso que a leitura desse Batman funciona melhor quando você pensa em <strong>desgaste</strong> e <strong>controle</strong>.
                        Aqui, o Cavaleiro das Trevas não é só símbolo: ele é método. Ele tenta impedir o caos com força, estratégia e medo,
                        porque já não acredita tanto em soluções limpas. E é justamente esse desgaste que vira o motor do conflito com o
                        Superman: não se trata apenas de uma briga de poderes, mas de uma colisão de <strong>ideias</strong> sobre justiça,
                        responsabilidade e limite. Em outras palavras: o choque nasce menos do soco e mais da visão de mundo.
                    </p>

                    <p>
                        No papel, é uma ideia poderosa — e muito “Batman”. Na prática, foi isso que transformou o personagem em ponto de
                        discussão: para alguns, a versão do Affleck trouxe um realismo emocional brutal; para outros, forçou a mão e
                        distorceu a essência do herói. Mas é exatamente aí que ele marca época: o Batman do DCEU não passa despercebido,
                        porque ele provoca, divide e obriga o público a tomar posição.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: <strong>um Batman não precisa &quot;agradar&quot; para ser relevante</strong> — mas precisa fazer sentido
                                dentro do próprio universo que o filme constrói, com regras claras e consequências reais.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="mito-e-icones"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O mito do Batman e os ícones que ele carrega
                    </h2>

                    <p className="mb-3">
                        Batman não é apenas um personagem de cinema ou de quadrinhos — ele é um <strong>símbolo cultural</strong> construído ao longo
                        de décadas. E símbolos, por definição, carregam expectativas difíceis de ignorar: o detetive genial, o estrategista
                        frio, a figura do medo urbano, a disciplina quase militar e o controle absoluto da própria violência. Cada nova
                        interpretação do Batman dialoga, consciente ou não, com esse “pacote simbólico”. Quando um filme decide mexer nele,
                        a reação costuma ser imediata, especialmente com um herói que já foi reinterpretado tantas vezes na memória
                        coletiva.
                    </p>

                    <p className="mb-3">
                        O Batman de Ben Affleck escolhe enfatizar o lado <strong>guerreiro tático</strong> — alguém preparado para a guerra, não
                        apenas para o mistério. Essa leitura desloca o foco do <strong>detetive noir</strong> para o combatente estratégico, mais
                        próximo de um general urbano do que de um investigador solitário. Não é, por si só, um erro narrativo. É uma
                        escolha estética e temática. O conflito surge porque, para muitos espectadores, o Batman sem investigação,
                        dedução e preparação mental parece um Batman &quot;faltando peça&quot;, como se um pilar essencial do mito tivesse sido
                        deixado de lado.
                    </p>

                    <p>
                        É aí que nasce o choque central dessa versão: o DCEU aposta em um Batman <strong>mítico</strong>, quase <strong>bíblico</strong>, uma
                        figura maior que a vida, moldada para confrontos épicos e dilemas morais extremos. Já parte do público comparava
                        essa leitura com referências recentes mais <strong>&quot;pé no chão&quot;</strong>, onde o herói parecia mais humano, falível e
                        reconhecível. Essa colisão de expectativas — mito versus realismo — explica boa parte da controvérsia que acompanha
                        o Batman de Affleck até hoje.
                    </p>

                    {/* Visual block between sections */}
                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">Resumo em 10 segundos</p>
                            <p className="mt-2 text-sm text-slate-300">
                                O Batman de Ben Affleck não tenta &quot;ser o Batman definitivo&quot;. Ele tenta ser o Batman de um mundo onde a
                                esperança ficou cara, a violência virou linguagem e a guerra passou a ser método.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Nesta leitura, a narrativa prioriza <strong>mito</strong> e <strong>impacto simbólico</strong> mais do que
                                &quot;realismo psicológico&quot;.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="brutalidade"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        A brutalidade como linguagem
                    </h2>

                    <p className="mb-3">
                        A palavra mais usada para definir esse Batman é direta e inevitável: <strong>brutal</strong>. Ele luta como um tanque,
                        avança como ameaça constante e parece sempre a um passo de cruzar a própria linha moral. Nada disso acontece
                        &quot;por acaso&quot;. Essa brutalidade é o retrato de um personagem <strong>cansado</strong>, <strong>desconfiado</strong> e
                        emocionalmente endurecido, alguém que já tentou outros caminhos e passou a acreditar que encurtar trajetos pode
                        ser a única forma de manter o controle em um mundo fora de ordem.
                    </p>

                    <p className="mb-3">
                        No cinema, essa escolha funciona como uma verdadeira <strong>linguagem visual</strong>. As pancadas são mais secas, os
                        movimentos mais pesados e os enquadramentos transformam o Batman em um <strong>predador urbano</strong>, quase uma força
                        da natureza à solta na cidade. Para parte do público, essa abordagem é eletrizante, visceral e coerente com a
                        proposta do DCEU. Para outra parte, ela soa como uma ruptura incômoda com a imagem clássica do herói, aproximando-o
                        demais daquilo que ele deveria combater.
                    </p>

                    <p className="mb-3">
                        É aqui que surge o ponto mais sensível da discussão: quando a violência vira uma <strong>solução rápida</strong> e
                        recorrente, o Batman corre o risco de parecer apenas um <strong>&quot;vigilante agressivo&quot;</strong>, movido por raiva e
                        eficiência, e não um personagem guiado por um código ético rígido. Esse desconforto não é acidental. Ele faz parte
                        da proposta narrativa e ajuda a explicar por que essa versão provoca tanto debate — ela obriga o espectador a
                        perguntar onde termina o herói e onde começa o abismo.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="controversias"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        A controvérsia: por que dividiu tanto?
                    </h2>

                    <p className="mb-3">
                        O debate em torno do Batman de Ben Affleck nunca foi apenas &quot;gostei&quot; contra &quot;não gostei&quot;. Ele rapidamente
                        se transformou em uma discussão sobre <strong>identidade</strong>: o que, afinal, define o Batman no cinema? Para uma
                        parte do público, o DCEU demonstrou coragem ao apresentar um herói falho, cansado e potencialmente perigoso, alguém
                        que já não opera com conforto moral. Para outra parte, essa mesma escolha foi sentida como uma ruptura excessiva,
                        mexendo em pilares considerados essenciais para o personagem.
                    </p>

                    <p className="mb-3">
                        Um dos pontos que mais retornam nessas discussões é o da <strong>linha moral</strong>. Tradicionalmente, o Batman é visto
                        como alguém que caminha no escuro, mas se recusa a se tornar o próprio abismo que combate. Ele flerta com a violência,
                        mas impõe limites claros a si mesmo. Quando os filmes do DCEU passam a brincar com a ideia de romper esse limite,
                        muitos espectadores sentem que &quot;perderam o Batman&quot; que conheciam — mesmo que a intenção narrativa seja justamente
                        mostrar um herói em crise, à beira de atravessar uma fronteira perigosa.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        O detalhe que pouca gente percebe
                    </h3>

                    <p className="mb-3">
                        A versão interpretada por Ben Affleck funciona menos como uma &quot;definição definitiva&quot; e mais como um <strong>capítulo específico</strong> dentro de uma trajetória maior. Ela ganha força quando lida da seguinte forma:
                        &quot;este Batman está errado agora — e precisa se reposicionar&quot;. Esse é o arco dramático proposto. Se o espectador não
                        aceita essa premissa, tudo soa exagerado, incoerente ou barulhento. Mas, quando essa leitura é feita, a controvérsia
                        deixa de ser ruído e passa a ser parte central da experiência.
                    </p>

                    <h2
                        id="legado"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O que ficou: legado e influência
                    </h2>

                    <p className="mb-3">
                        Mesmo cercado por polêmicas, o Batman interpretado por Ben Affleck deixou marcas claras no cinema de super-heróis.
                        A estética mais pesada, a sensação constante de guerra e a figura de um herói que carrega o peso do mundo no olhar
                        não desapareceram com o fim daquela fase do DCEU. Mais do que cenas ou escolhas visuais, ficou a consolidação da
                        ideia de que o Batman pode ser lido como um <strong>mito trágico</strong>: alguém definido menos pela vitória e mais pelo
                        custo psicológico de continuar lutando, e não apenas como um &quot;herói funcional&quot; que resolve problemas e segue em
                        frente.
                    </p>

                    <p className="mb-3">
                        Outra herança importante foi o tipo de conversa que essa versão provocou. O público passou a discutir com mais força
                        o que realmente <strong>define</strong> o Batman no cinema: seus limites morais, sua relação com a violência e o papel do
                        medo como ferramenta narrativa. Esse debate atravessou redes sociais, críticas especializadas e análises culturais,
                        mostrando que o personagem ainda é vivo o suficiente para gerar interpretações conflitantes — algo que só acontece
                        com figuras culturalmente relevantes.
                    </p>

                    <p className="mb-3">
                        Em um cenário onde muitas franquias parecem repetir fórmulas e apostar no caminho mais seguro, personagens que
                        provocam reações intensas — sejam elas positivas ou negativas — tendem a permanecer mais tempo na memória coletiva.
                        Nesse sentido, o Batman de Affleck pode não ter sido unânime, mas foi marcante. E, no cinema, ser marcante costuma
                        ser mais duradouro do que simplesmente ser confortável.
                    </p>

                    <ArticleVideo
                        embedUrl="https://www.youtube-nocookie.com/embed/0WWzgGyAH6Y"
                        title="Batman v Superman: Dawn of Justice — Trailer Oficial"
                        heading="Vídeo de apoio"
                        description="Trailer para relembrar o tom épico e a proposta de conflito que moldam o Batman do DCEU."
                    />

                    <h2
                        id="onde-se-encaixa"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Onde essa versão se encaixa no cinema
                    </h2>

                    <p className="mb-3">
                        Quando olhamos para a trajetória do Batman no cinema, fica mais fácil entender onde a versão de Ben Affleck se
                        posiciona. Se o Batman de Tim Burton flertava com o gótico estilizado e o de Christopher Nolan apostava em um
                        realismo urbano e político, o Batman do DCEU ocupa outra prateleira: a do <strong>mito grandioso</strong>. Ele foi
                        concebido para telas enormes, narrativas épicas, símbolos quase religiosos e confrontos que soam mais como lenda
                        do que como crônica do cotidiano.
                    </p>

                    <p className="mb-3">
                        Isso ajuda a explicar por que tantas pessoas descrevem esse Batman mais em termos de <strong>arquétipos</strong> do que
                        de <strong>pessoas reais</strong>. Ele não se comporta como &quot;um cara de capa resolvendo crimes&quot;, mas como uma <strong>ideia vestida de armadura</strong>: a personificação do medo, da culpa e da vigilância levada ao extremo.
                        Nesse contexto, suas ações fazem mais sentido como símbolos narrativos do que como decisões psicológicas
                        minuciosamente realistas.
                    </p>

                    <p className="mb-3">
                        É justamente aqui que está o ponto-chave para a leitura dessa versão. Quando o espectador entende a intenção
                        criativa por trás do personagem, consegue avaliar melhor a execução. Pode não ser o Batman que muitos queriam ver
                        — e isso é legítimo —, mas talvez seja exatamente o Batman que aquela proposta específica tentava entregar dentro
                        do universo cinematográfico que estava sendo construído.
                    </p>

                    <p className="mb-3">
                        A leitura mais justa, portanto, é simples e honesta: o Batman de Ben Affleck foi uma aposta de <strong>alto
                            risco</strong>. E apostas de alto risco raramente passam despercebidas. Elas tendem a virar clássico para alguns,
                        rejeição para outros — ou, como aconteceu aqui, uma <strong>polêmica duradoura</strong> que continua sendo debatida
                        muito depois do fim da projeção.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        O Batman interpretado por Ben Affleck está longe de ser confortável — e talvez nunca tenha sido essa a sua intenção.
                        Ele representa uma versão do Cavaleiro das Trevas que observa o mundo ao redor e conclui que, em determinados
                        contextos, <strong>o medo funciona mais rápido do que a esperança</strong>. Essa leitura carrega um peso moral alto,
                        porque coloca o herói constantemente à beira de se tornar aquilo que combate, transformando cada decisão em um
                        risco narrativo.
                    </p>

                    <p className="mb-3">
                        É justamente por isso que essa versão divide tanto. Ela toca em elementos sensíveis do mito do Batman, questionando
                        limites que muitos consideram intocáveis. Para alguns espectadores, isso soa como ousadia criativa e maturidade
                        temática; para outros, como um desvio que enfraquece a essência do personagem. Ainda assim, o ponto central
                        permanece: <strong>esse Batman força a conversa</strong>, provoca desconforto e impede uma leitura passiva.
                    </p>

                    <p>
                        E no cinema — especialmente em universos tão explorados quanto o da DC — personagens que obrigam o público a
                        discutir, reinterpretar e discordar tendem a sobreviver ao tempo com mais força do que aqueles que apenas
                        &quot;passam&quot; pela tela. Nesse sentido, o Batman de Ben Affleck pode não ter sido unanimidade, mas garantiu algo
                        raro: relevância duradoura.
                    </p>

                    {/* CTA interno — sequência editorial Batman */}
                    <div className="not-prose my-12 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <p className="text-sm font-semibold text-slate-100">
                            Continue no LEXARA
                        </p>

                        <p className="mt-2 text-sm text-slate-300">
                            Se este foi seu ponto de partida, a leitura agora avança para outras interpretações do personagem.
                            Compare abordagens, entenda mudanças de tom e acompanhe os próximos caminhos do Batman no cinema.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                                href="/filmes-series/dc/batman/batman-pattinson"
                                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
                            >
                                Próximo: Batman de Robert Pattinson <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/filmes-series/dc/batman/batman-dcu-futuro"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                O futuro do Batman no DCU <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/filmes-series/dc/batman"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                Voltar à seção Batman <ArrowRight size={16} />
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
                        Ao longo do artigo, referências a <strong>anos de lançamento</strong>, <strong>diretores</strong> e contextos históricos não
                        aparecem por acaso. Elas funcionam como pontos de ancoragem que conectam a análise crítica a fatos
                        verificáveis, ajudando o leitor a situar cada fase do Batman dentro de um recorte real de tempo, mercado e
                        produção cinematográfica. Essa base factual é essencial para que a interpretação vá além da opinião solta e
                        se sustente como leitura cultural.
                    </p>

                    <p className="mb-3">
                        Para essa curadoria, foram utilizadas fontes amplamente reconhecidas por seu caráter histórico e
                        informativo, especialmente quando o foco é registro de lançamento, créditos e dados de produção. Entre elas
                        estão:
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.imdb.com/" target="_blank" rel="noreferrer">
                                IMDb
                            </a>{" "}
                            — créditos, elenco e registros de lançamento.
                        </li>
                        <li>
                            <a href="https://www.dc.com/" target="_blank" rel="noreferrer">
                                DC (site oficial)
                            </a>{" "}
                            — contexto institucional e personagem.
                        </li>
                        <li>
                            <a href="https://www.britannica.com/" target="_blank" rel="noreferrer">
                                Encyclopaedia Britannica
                            </a>{" "}
                            — contexto cultural e histórico (quando aplicável).
                        </li>
                        <li>
                            <a href="https://www.warnerbros.com/" target="_blank" rel="noreferrer">
                                Warner Bros. (site oficial)
                            </a>{" "}
                            — informações institucionais e materiais oficiais.
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> as fontes acima são utilizadas exclusivamente para dados verificáveis,
                        como datas, nomes e registros de lançamento. A análise crítica, interpretação temática e leitura cultural
                        apresentadas ao longo do artigo são originais e fazem parte da proposta editorial da LEXARA.
                    </p>
                </section>

                {/* Ad (bottom of article) */}
                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                {/* Semantic footer */}
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
