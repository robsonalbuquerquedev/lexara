// BatmanEvolucao.tsx
import Link from "next/link";
import Script from "next/script";
import { Film, Shield, Quote, List } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type BatmanEvolucaoProps = {
    article: Article;
};

const SECTIONS = [
    { id: "por-que-muda", label: "Por que o Batman muda tanto?" },
    { id: "burton", label: "Burton: o mito gótico" },
    { id: "schumacher", label: "Schumacher: espetáculo e exagero" },
    { id: "nolan", label: "Nolan: realismo e dilemas" },
    { id: "reeves", label: "Reeves: detetive noir" },
    { id: "o-que-fica", label: "O que permanece em todas as versões" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    // Mantém simples e previsível. A label final já está pronta em ARTICLE.publishedLabel.
    return iso;
}

function classNames(...parts: Array<string | false | null | undefined>) {
    return parts.filter(Boolean).join(" ");
}

function AdSlot({ label }: { label: string }) {
    // Placeholder para seu componente real de anúncio.
    // Troque por <AdSenseUnit .../> quando você já tiver o componente integrado ao Consent Mode.
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

export default function BatmanEvolucao({ article }: BatmanEvolucaoProps) {
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
        about: [{ "@type": "Thing", name: "Batman" }, { "@type": "Thing", name: "DC" }],
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
                id="ld-article-batman-evolucao"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-batman-evolucao"
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
                            role: article.author.role, // "Autor"
                        }}
                        reviewers={article.reviewers.map((r) => ({
                            name: r.name,
                            avatar: r.avatarSrc,
                            role: r.role, // "Revisão"
                        }))}
                        readingTime={article.readingTime}
                        publishedAtLabel={article.publishedAtLabel}
                    />

                    {/* Cover */}
                    <ArticleCover
                        src={article.coverImage.src}
                        alt={article.coverImage.alt}
                        caption="No cinema, o Batman vira “espelho” do que a época teme — e do que ela precisa acreditar."
                        priority
                        aspect="16/9"
                    />
                </header>

                {/* Sumário (tempo de permanência ↑) */}
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

                {/* Ad (topo do corpo) */}
                {/* <AdSlot label="Anúncio (Topo do artigo)" /> */}

                {/* Conteúdo */}
                <section className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-slate-100">
                    <h2 id="por-que-muda" className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">
                        Por que o Batman muda tanto?
                    </h2>

                    <p className="mb-3">
                        O Batman não é apenas um personagem de histórias em quadrinhos ou cinema.
                        Ele funciona como um verdadeiro <strong>termômetro cultural</strong>:
                        cada nova versão do herói revela muito mais sobre a época em que foi criada
                        do que sobre o próprio Bruce Wayne.
                    </p>

                    <p className="mb-3">
                        Quando o público busca <strong>mito, atmosfera e escapismo</strong>,
                        o Batman se aproxima de uma lenda urbana — uma figura quase sobrenatural,
                        envolta em sombras, símbolos e medo. Já em períodos marcados por
                        insegurança social e descrença nas instituições, ele se transforma em algo
                        mais <strong>realista e humano</strong>: um vigilante imperfeito tentando impor
                        ordem em meio ao caos.
                    </p>

                    <p>
                        Há ainda momentos em que a própria indústria do entretenimento dita o tom.
                        Quando o objetivo é <strong>espetáculo e grandiosidade</strong>,
                        a fantasia ganha espaço, os excessos aparecem e o Batman vira parte de um
                        universo maior, mais colorido e expansivo. Em todos os casos, a essência
                        permanece — mas a forma muda para refletir os medos, desejos e contradições
                        de quem está assistindo.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: não é &quot;qual é o melhor Batman?&quot;, e sim{" "}
                                <strong>o que cada Batman revela</strong> sobre medo, justiça e poder.
                            </p>
                        </div>
                    </blockquote>

                    <h2 id="burton" className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">Burton: o mito gótico</h2>

                    <p className="mb-3">
                        Em <strong>Batman (1989)</strong> e <strong>Batman Returns (1992)</strong>, Tim Burton não tenta explicar o Batman
                        como um produto da lógica ou da investigação policial. Pelo contrário: ele empurra Gotham City para o território
                        da <strong>fábula gótica</strong>, onde a cidade parece viva, opressiva e quase monstruosa. A arquitetura exagerada,
                        as sombras profundas e os cenários artificiais criam um ambiente que lembra um pesadelo expressionista, no qual
                        o Batman surge menos como um herói racional e mais como uma <strong>criatura da noite</strong>, um símbolo que
                        assusta tanto os criminosos quanto o próprio espectador.
                    </p>

                    <p className="mb-3">
                        Nesse contexto, o Batman de Burton funciona como uma <strong>lenda urbana cinematográfica</strong>. Ele não está ali
                        para ser compreendido por completo, mas para ser temido e observado à distância. Bruce Wayne é quase um detalhe,
                        enquanto a figura mascarada domina a narrativa como um reflexo visual do medo coletivo. Esse distanciamento emocional
                        reforça a ideia de mito: o Batman não resolve crimes como um detetive clássico, ele impõe presença, silêncio e ameaça.
                    </p>

                    <p>
                        Esse período foi decisivo para consolidar o personagem como um <strong>ícone pop de massa</strong> no cinema moderno.
                        O sucesso de bilheteria, o impacto no marketing e a avalanche de produtos licenciados mostraram que o Batman podia
                        funcionar não apenas como adaptação de quadrinhos, mas como um fenômeno cultural global. Mais do que filmes de
                        super-herói, as obras de Burton ajudaram a redefinir como personagens dos quadrinhos poderiam ocupar o imaginário
                        adulto, sombrio e estilizado das grandes produções de Hollywood.
                    </p>

                    {/* Bloco visual entre seções */}
                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">Como essa fase &quot;fala&quot; com o público?</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Ela transforma o herói em símbolo. O medo não é só um obstáculo — é uma linguagem. A máscara vira
                                argumento: &quot;Gotham precisa acreditar em algo maior do que ela mesma&quot;.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Gotham como &quot;personagem&quot;: cenário que dita o tom e muda como o Batman é percebido.
                            </p>
                        </div>
                    </div>

                    <h2 id="schumacher" className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">Schumacher: espetáculo e exagero</h2>

                    <p className="mb-3">
                        Na fase seguinte, já em meados dos anos 1990, o Batman entra em um território
                        muito mais <strong>colorido, performático e barulhento</strong>. Sob a direção
                        de Joel Schumacher, o cinema abandona quase totalmente a introspecção e passa
                        a tratar o herói como uma <strong>atração visual</strong>, próxima do entretenimento
                        pop imediato. Gotham deixa de ser um espaço opressivo e simbólico para se tornar
                        um palco iluminado, cheio de excessos estéticos, personagens caricatos e
                        decisões visuais pensadas para impactar mais do que para aprofundar.
                    </p>

                    <p className="mb-3">
                        Esse deslocamento de tom é fundamental para entender a evolução do personagem.
                        Ao priorizar o espetáculo acima do conflito interno, o Batman perde parte da
                        tensão que sempre o definiu: o equilíbrio frágil entre <strong>trauma pessoal</strong> e <strong>controle racional</strong>. Quando essa camada psicológica é deixada de lado,
                        o herói continua reconhecível na superfície, mas se torna mais leve, menos denso
                        e, para muitos, emocionalmente vazio. O resultado é um Batman que funciona como
                        ícone visual, mas não como figura trágica.
                    </p>

                    <p className="mb-3">
                        Ainda assim, mesmo os críticos dessa fase costumam reconhecer seu valor simbólico.
                        Ela prova que o Batman é um personagem extremamente <strong>maleável</strong>,
                        capaz de suportar leituras muito diferentes ao longo do tempo. Ao mesmo tempo,
                        deixa clara uma lição importante para o cinema e para o público: nem toda leitura,
                        por mais criativa ou ousada que seja, sustenta o mesmo <strong>peso dramático</strong>.
                        Algumas versões divertem, outras permanecem — e essa distinção molda o caminho
                        que o personagem seguiria a partir dali.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2 id="nolan" className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">Nolan: realismo e dilemas</h2>

                    <p className="mb-3">
                        Com <strong>Batman Begins (2005)</strong> e <strong>The Dark Knight (2008)</strong>,
                        Christopher Nolan reorganiza completamente o mito do Batman a partir de uma
                        lógica próxima do <strong>mundo real</strong>. Gotham passa a refletir cidades
                        contemporâneas marcadas por instituições frágeis, corrupção estrutural e um
                        crime que não surge do nada, mas de motivações compreensíveis, ainda que
                        moralmente perturbadoras. Nesse cenário, o herói deixa de agir em um universo
                        simbólico ou fantasioso e passa a operar dentro de um sistema que cobra um
                        preço alto por cada escolha tomada.
                    </p>

                    <p className="mb-3">
                        Aqui, o Batman não é apenas &quot;o cara que bate em bandido&quot;. Ele se transforma em
                        uma <strong>pergunta incômoda</strong> lançada ao espectador: até onde a justiça
                        pode ir quando o medo domina a cidade e as regras parecem insuficientes?
                        Cada ação do herói gera consequências políticas, sociais e morais, criando um
                        desconforto constante. O filme não oferece respostas fáceis — ele força o
                        público a conviver com dilemas, ambiguidades e perdas reais.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        O ponto-chave dessa era
                    </h3>


                    <p className="mb-3">
                        Nolan trata o Batman como um verdadeiro <strong>projeto</strong>. Não se trata
                        apenas de força física ou tecnologia avançada, mas de <strong>consistência</strong>.
                        A máscara deixa de ser fantasia e vira método; o símbolo deixa de ser ornamento
                        e se torna estratégia. O problema é que toda estratégia carrega um custo: para
                        manter a ordem, o Batman precisa assumir um papel que o isola, o desgasta e o
                        transforma em alvo. O símbolo que inspira esperança também alimenta o caos que
                        tenta combater.
                    </p>

                    <h2 id="reeves" className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">Reeves: detetive noir</h2>

                    <p className="mb-3">
                        Em <strong>The Batman (2022)</strong>, Matt Reeves conduz o personagem de volta
                        às suas raízes como <strong>detetive</strong>, resgatando uma faceta muitas vezes
                        deixada em segundo plano nas adaptações cinematográficas. A atmosfera noir,
                        marcada por chuva constante, sombras densas e um ritmo mais contemplativo,
                        transforma Gotham em um quebra-cabeça urbano, onde cada cena funciona como
                        uma pista e cada descoberta aprofunda a sensação de decadência moral. Nesse
                        contexto, o Batman surge como um herói ainda cru, inexperiente e em formação,
                        tentando entender o impacto real de suas ações.
                    </p>

                    <p className="mb-3">
                        Diferente de versões mais estabelecidas, esse Batman não domina totalmente
                        o símbolo que veste. Ele aprende, erra e observa. A investigação ocupa o
                        centro da narrativa, e a violência deixa de ser solução automática para se
                        tornar sintoma de um problema maior. Reeves usa o gênero noir para deslocar
                        o foco da força para a <strong>interpretação dos sinais</strong>, reforçando
                        a ideia de que compreender Gotham é tão importante quanto combatê-la.
                    </p>

                    <p>
                        A guinada é sutil, mas poderosa. O filme se pergunta menos &quot;como derrotar o
                        crime&quot; e mais <strong>como impedir que Gotham se torne refém da reação e da
                            vingança</strong>. Ao fazer isso, redefine o papel do Batman como algo além
                        da punição: ele precisa aprender a ser esperança, não apenas medo. Essa
                        abordagem adiciona profundidade emocional e abre espaço para um herói que,
                        antes de salvar a cidade, precisa entender o que ela realmente precisa.
                    </p>

                    <ArticleVideo
                        embedUrl="https://www.youtube-nocookie.com/embed/mqqft2x_Aa4"
                        title="The Batman (2022) — Trailer Oficial"
                        heading="Vídeo de apoio"
                        description="O trailer ajuda a visualizar o tom noir e investigativo discutido nesta seção."
                    />

                    <h2 id="o-que-fica" className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">O que permanece em todas as versões</h2>

                    <p className="mb-3">
                        Mesmo atravessando estéticas tão diferentes — do gótico ao pop, do realismo ao
                        noir — o Batman preserva um conjunto de elementos centrais que funcionam como
                        o <strong>núcleo dramático</strong> do personagem. São esses pilares que permitem
                        que ele se reinvente sem perder identidade, mantendo-se relevante para públicos
                        de épocas distintas e para leituras cada vez mais complexas no cinema.
                    </p>

                    <p className="mb-3">
                        O primeiro desses pilares é o <strong>trauma</strong>. A perda que define Bruce
                        Wayne não é apenas um evento do passado, mas uma ferida aberta que impulsiona
                        suas decisões e, ao mesmo tempo, ameaça consumi-lo. Em todas as versões, o
                        trauma funciona como motor narrativo e como risco permanente: ele pode gerar
                        propósito, mas também pode justificar excessos.
                    </p>

                    <p className="mb-3">
                        O segundo núcleo é o <strong>controle</strong>. Seja por meio de planejamento
                        obsessivo, tecnologia avançada ou disciplina extrema, o Batman tenta impor
                        ordem a um mundo que parece sempre à beira do colapso. Essa busca por controle
                        revela tanto sua inteligência estratégica quanto sua dificuldade em aceitar
                        limites — um traço que o aproxima perigosamente daquilo que combate.
                    </p>

                    <p className="mb-3">
                        Por fim, existe o <strong>limite moral</strong>, talvez o aspecto mais testado
                        do personagem. A linha que ele jura não cruzar é constantemente pressionada
                        por uma realidade violenta, injusta e imprevisível. Cada versão do Batman
                        coloca esse limite à prova, transformando-o em dilema ético: até que ponto é
                        possível manter princípios quando o mundo insiste em quebrá-los?
                    </p>

                    <h2 id="conclusao" className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">Conclusão</h2>

                    <p className="mb-3">
                        O Batman do cinema não &quot;evolui&quot; de maneira linear, como se fosse uma criatura
                        acumulando poderes ao longo do tempo. Ele evolui como um <strong>espelho cultural</strong>.
                        Cada era escolhe qual medo deseja encarar, qual conflito prefere discutir e
                        qual esperança está disposta a projetar na figura do herói. É por isso que
                        versões tão diferentes conseguem coexistir sem que o personagem perca sua
                        essência.
                    </p>

                    <p className="mb-3">
                        Tim Burton amplia o mito e transforma o Batman em lenda sombria. Christopher
                        Nolan questiona o preço da ordem, da vigilância e do sacrifício individual.
                        Matt Reeves resgata o detetive e desloca o foco para o significado de <strong>ser símbolo</strong> em uma cidade que confunde justiça com vingança.
                        Juntas, essas leituras não se anulam — elas se complementam, formando um
                        retrato complexo de um herói moldado pelas ansiedades do seu tempo.
                    </p>

                    <p>
                        Para o leitor, fica algo raro no cinema de grandes franquias: um personagem
                        capaz de mudar sem perder o centro. O Batman continua sendo trauma, controle
                        e limite moral — apenas reorganizados conforme o mundo muda ao redor. Talvez
                        seja justamente isso que explica sua longevidade: enquanto houver medo,
                        caos e perguntas difíceis sobre justiça, sempre haverá espaço para mais um
                        Batman olhando de volta do espelho.
                    </p>

                    {/* CTA interno — sequência editorial Batman */}
                    <ContinueNoLexara
                        description="Se este foi seu ponto de partida, aqui está a sequência natural de leitura para entender as diferentes fases, interpretações e rumos do Batman no cinema."
                        links={[
                            {
                                href: "/filmes-series/dc/batman/batman-ben-affleck",
                                label: "Próximo: Batman de Ben Affleck",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/dc/batman/batman-pattinson",
                                label: "Batman de Robert Pattinson",
                            },
                            {
                                href: "/filmes-series/dc/batman/batman-dcu-futuro",
                                label: "O futuro do Batman no DCU",
                            },
                            {
                                href: "/filmes-series/dc",
                                label: "Explorar o hub DC",
                            },
                        ]}
                    />

                    <h2 id="fontes" className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">Fontes & contexto</h2>

                    <p className="mb-3">
                        Ao longo do artigo, referências a <strong>anos de lançamento</strong>, <strong>diretores</strong> e contextos históricos não aparecem por acaso.
                        Elas funcionam como pontos de ancoragem que conectam a análise crítica a fatos
                        verificáveis, ajudando o leitor a situar cada fase do Batman dentro de um
                        recorte real de tempo, mercado e produção cinematográfica. Essa base factual
                        é essencial para que a interpretação vá além da opinião solta e se sustente
                        como leitura cultural.
                    </p>

                    <p className="mb-3">
                        Para essa curadoria, foram utilizadas fontes amplamente reconhecidas por seu
                        caráter histórico e informativo, especialmente quando o foco é registro de
                        lançamento, créditos e dados de produção. Entre elas estão:
                    </p>

                    <ul>
                        {/* <li>
                            <a
                                href="https://www.history.com/this-day-in-history/june-23/batman-released"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                            >
                                History.com — registro histórico do lançamento de &quot;Batman&quot; (1989)
                            </a>
                        </li> */}
                        <li>
                            <a
                                href="https://en.wikipedia.org/wiki/Batman_Returns"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                            >
                                Wikipedia — &quot;Batman Returns&quot; (1992)
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://en.wikipedia.org/wiki/Batman_Begins"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                            >
                                Wikipedia — &quot;Batman Begins&quot; (2005)
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://en.wikipedia.org/wiki/The_Dark_Knight"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                            >
                                Wikipedia — &quot;The Dark Knight&quot; (2008)
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://en.wikipedia.org/wiki/The_Batman_(film)"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                            >
                                Wikipedia — &quot;The Batman&quot; (2022)
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> as fontes acima são utilizadas
                        exclusivamente para dados verificáveis, como datas, nomes e registros de
                        lançamento. A análise crítica, interpretação temática e leitura cultural
                        apresentadas ao longo do artigo são originais e fazem parte da proposta
                        editorial da LEXARA.
                    </p>
                </section>

                {/* Ad (rodapé do artigo) */}
                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                {/* Rodapé semântico */}
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
