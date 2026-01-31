import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight, Film, List, Quote, Shield } from "lucide-react";

import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";

type Reviewer = {
    name: string;
    role: string;
    avatarSrc: string;
};

const ARTICLE = {
    title: "O dilema do Superman moderno: força absoluta, escolhas morais e consequências",
    subtitle:
        "Ser o herói mais poderoso do mundo não significa ter respostas simples. Exploramos os dilemas morais do Superman contemporâneo e como o cinema passou a questionar sua figura.",
    badge: "Filmes & Séries — DC",
    categoryHref: "/filmes-series/dc",
    topic: "Superman",
    topicHref: "/filmes-series/dc/superman",
    slug: "/filmes-series/dc/superman/superman-dilema-moral",
    publishedAtISO: "2026-01-31T15:45:00-03:00",
    publishedLabel: "31.01.2026, às 15H45",
    readingTime: "3 min de leitura",
    coverImage: {
        src: "/images/featured/superman/superman-dilema-moral.png",
        alt: "Superman em reflexão: poder absoluto, moral e consequências no cinema moderno",
    },
    author: {
        name: "Robson Albuquerque",
        avatarSrc: "/images/about/robson.png",
        role: "Autor",
    },
    reviewers: [
        { name: "Emanuel José", role: "Revisão", avatarSrc: "/images/about/emanuel.jpeg" },
        { name: "Celso Lopes", role: "Revisão", avatarSrc: "/images/about/celso.jpeg" },
    ] as Reviewer[],
};

const SECTIONS = [
    { id: "poder-absoluto", label: "Poder absoluto, responsabilidade real" },
    { id: "sem-resposta-perfeita", label: "Quando não existe decisão limpa" },
    { id: "moral-em-tempo-real", label: "Moral em tempo real: salvar quem primeiro?" },
    { id: "consequencias-politicas", label: "Consequências políticas e medo público" },
    { id: "cinema-questiona-mito", label: "Quando o cinema decide questionar o mito" },
    { id: "o-que-sobra", label: "O que sobra do herói quando sobra poder?" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    // Keep it simple and predictable. The final label is already in ARTICLE.publishedLabel.
    return iso;
}

function isPublishedNow(publishedAtISO: string) {
    return Date.now() >= Date.parse(publishedAtISO);
}

function AdSlot({ label }: { label: string }) {
    // Placeholder for your real ads component.
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

export default function SupermanDilemaMoral() {
    // ✅ Scheduled publishing: before the time, the article does NOT exist publicly.
    if (!isPublishedNow(ARTICLE.publishedAtISO)) {
        notFound();
    }

    const jsonLdArticle = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: ARTICLE.title,
        description: ARTICLE.subtitle,
        datePublished: ARTICLE.publishedAtISO,
        dateModified: ARTICLE.publishedAtISO,
        author: {
            "@type": "Person",
            name: ARTICLE.author.name,
        },
        publisher: {
            "@type": "Organization",
            name: "LEXARA",
        },
        mainEntityOfPage: ARTICLE.slug,
        image: [ARTICLE.coverImage.src],
        about: [
            { "@type": "Thing", name: "Superman" },
            { "@type": "Thing", name: "DCU" },
            { "@type": "Thing", name: "filmes de super-herói" },
        ],
    };

    const jsonLdBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Filmes & Séries", item: "/filmes-series" },
            { "@type": "ListItem", position: 2, name: "DC", item: ARTICLE.categoryHref },
            { "@type": "ListItem", position: 3, name: "Superman", item: ARTICLE.topicHref },
            { "@type": "ListItem", position: 4, name: ARTICLE.title, item: ARTICLE.slug },
        ],
    };

    // Optional video: add a real embed when you want (or keep null).
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
                id="ld-article-superman-dilema-moral"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-superman-dilema-moral"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
            />

            <article className="mx-auto w-full max-w-4xl px-6 py-14">
                <header className="mb-10">
                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href={ARTICLE.categoryHref}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-200 hover:border-slate-700"
                        >
                            <Shield size={14} />
                            {ARTICLE.badge}
                        </Link>

                        <Link
                            href={ARTICLE.topicHref}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/30 px-3 py-1 text-xs text-slate-300 hover:border-slate-700 hover:text-slate-100"
                            title="Ver a seção Superman"
                        >
                            <Film size={14} />
                            {ARTICLE.topic}
                        </Link>
                    </div>

                    <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-100 md:text-5xl lg:text-6xl">
                        {ARTICLE.title}
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                        {ARTICLE.subtitle}
                    </p>

                    <ArticleMeta
                        author={{
                            name: ARTICLE.author.name,
                            avatar: ARTICLE.author.avatarSrc,
                            role: ARTICLE.author.role,
                        }}
                        reviewers={ARTICLE.reviewers.map((r) => ({
                            name: r.name,
                            avatar: r.avatarSrc,
                            role: r.role,
                        }))}
                        readingTime={ARTICLE.readingTime}
                        publishedAtLabel={ARTICLE.publishedLabel}
                    />

                    <ArticleCover
                        src={ARTICLE.coverImage.src}
                        alt={ARTICLE.coverImage.alt}
                        caption="O Superman moderno não é só sobre força — é sobre o peso de decidir."
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
                        id="poder-absoluto"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Poder absoluto, responsabilidade real
                    </h2>

                    <p className="mb-3">
                        O Superman sempre foi vendido ao público como a resposta perfeita: quando o perigo aparece, ele chega, resolve e vai embora —
                        como se o mundo fosse um problema de &quot;força contra força&quot; esperando o impacto certo. Só que o mundo moderno não funciona assim.
                        O perigo raramente é um vilão isolado; ele vem em camadas, com consequências, efeitos colaterais e, principalmente, com gente
                        observando e interpretando cada gesto. E é aqui que a pergunta muda de verdade:{" "}
                        <strong>mesmo que ele consiga, ele deveria?</strong> Porque “conseguir” não significa &quot;estar certo&quot;. Em muitos cenários, a vitória
                        não é o final da história — é o começo do debate.
                    </p>

                    <p className="mb-3">
                        Esse é o ponto onde o poder absoluto deixa de ser fantasia e vira responsabilidade real. A força do Superman não elimina dilemas —
                        ela <em>aumenta</em> o preço de cada escolha. Se um gesto salva cem pessoas, mas cria medo em milhões, esse gesto foi &quot;correto&quot;?
                        Se ele atravessa fronteiras para impedir uma tragédia, ele salvou vidas… ou abriu uma crise política? Se ele decide agir rápido
                        demais, ele evita um desastre… ou vira o exemplo perfeito de por que o mundo tem medo de alguém &quot;acima das regras&quot;? O cinema
                        contemporâneo começou a tratar isso como drama central, não como detalhe técnico: não basta salvar. É preciso encarar o que
                        fica depois — a narrativa pública, a desconfiança, a reação, o custo invisível.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: quando o herói vira &quot;o último recurso&quot;, toda decisão dele deixa de ser só salvamento e passa a ser{" "}
                                <strong>política, moral e simbólica</strong> — porque o mundo não avalia apenas o resultado, mas o que aquela decisão <em>autoriza</em> para o futuro.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="sem-resposta-perfeita"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Quando não existe decisão limpa
                    </h2>

                    <p className="mb-3">
                        A versão moderna do dilema do Superman quase sempre gira em torno do mesmo nó impossível de desatar:{" "}
                        <strong>toda opção tem custo</strong>. Se ele interfere, corre o risco de virar “ameaça”, “intervenção excessiva” ou até
                        “força fora de controle”. Se decide não interferir, vira “omissão”, “covardia” ou “abandono”. Não existe um espaço seguro
                        entre esses dois extremos, porque o mundo não avalia intenções — avalia consequências. E, nesse julgamento coletivo, o
                        coração do herói é invisível; o que fica visível é o impacto, o estrago, a manchete e a reação em cadeia.
                    </p>

                    <p className="mb-3">
                        É exatamente esse tipo de conflito que o cinema contemporâneo passou a explorar com mais coragem. A pergunta central deixou
                        de ser “ele consegue?” — porque isso já sabemos que sim — e passou a ser “ele escolhe o quê… e por quê?”. O foco muda do
                        espetáculo da força para o peso da decisão. O resultado é um Superman que parece mais humano justamente porque seu poder não
                        simplifica o mundo; ele o torna mais complexo, mais exposto e mais difícil de controlar. Quanto maior a capacidade de agir,
                        maior a responsabilidade de aceitar que não há vitória sem perda.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">Checklist mental do Superman moderno</p>
                            <p className="mt-2 text-sm text-slate-300">
                                A pergunta deixou de ser “posso salvar?”. Ela virou “se eu salvar desse jeito, o que eu viro depois?” — símbolo de
                                esperança, arma política, argumento ideológico? E, mais importante: qual é a consequência para quem não tem superpoder,
                                mas vai viver no mundo moldado por essa decisão?
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Quanto maior o poder, menor a chance de existir uma escolha realmente “neutra”.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="moral-em-tempo-real"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Moral em tempo real: salvar quem primeiro?
                    </h2>

                    <p className="mb-3">
                        Um dilema clássico se torna brutal quando combinado com supervelocidade: duas tragédias acontecendo ao mesmo tempo, em lugares
                        diferentes, ambas urgentes, ambas irreversíveis se ignoradas por segundos demais. Mesmo sendo o ser mais rápido do planeta,
                        o Superman ainda enfrenta limites muito humanos: atenção dividida, informação incompleta, avaliação de risco colateral e
                        prioridade sob pressão extrema. A fantasia da velocidade absoluta esbarra em um detalhe desconfortável — decidir também
                        consome tempo, e tempo é exatamente o que não existe nessas situações.
                    </p>

                    <p className="mb-3">
                        É nesse ponto que surge a pergunta mais incômoda de todas: <strong>quem decide o que é “mais importante”?</strong> Em histórias
                        mais antigas, esse dilema era suavizado pela própria narrativa — ele sempre chegava “bem na hora”, e o problema desaparecia.
                        No cinema mais recente, a escolha não é escondida; ela é exposta. Escolher significa aceitar culpa, mesmo quando o resultado
                        final é positivo. Salvar um grupo implica, inevitavelmente, não salvar outro. E, para um herói que carrega o peso simbólico
                        do Superman, essa culpa não morre com o resgate — ela permanece como marca, dúvida e questionamento público.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="consequencias-politicas"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Consequências políticas e medo público
                    </h2>

                    <p className="mb-3">
                        O Superman é um indivíduo. Mas, na prática, ele opera como uma força geopolítica ambulante: atravessa fronteiras sem pedir
                        permissão, altera o curso de conflitos, impede guerras antes que elas aconteçam e derruba planos que estavam em movimento
                        há anos. Isso pode soar heroico — até o momento em que surge a pergunta inevitável:{" "}
                        <strong>quem autorizou?</strong> Em um mundo regido por tratados, soberania e equilíbrio de poder, a simples existência de
                        alguém capaz de ignorar essas regras já é, por si só, um fator de instabilidade.
                    </p>

                    <p className="mb-3">
                        É desse ponto que nasce o medo público. Não porque as pessoas acreditem que o Superman seja “mau”, mas porque entendem algo
                        ainda mais inquietante: se um dia ele decidir agir de forma diferente, não existe força equivalente para contê-lo. O temor
                        não está no que ele faz hoje, mas no precedente que ele cria para amanhã. O cinema moderno usa esse medo como combustível
                        dramático ao mostrar que, para governos e sociedades, confiar não elimina a sensação de vulnerabilidade — apenas a adia.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        O paradoxo: confiança não é controle
                    </h3>

                    <p className="mb-3">
                        Dá para confiar no caráter do Superman. Mas confiar não é o mesmo que ter controle. E o mundo moderno é obcecado por controle:
                        regras claras, cadeias de comando, supervisão constante, mecanismos de responsabilização. O problema é que tudo isso entra
                        em colapso quando o “recurso final” tem rosto, nome e escolhas próprias. O paradoxo se instala: quanto mais o mundo precisa
                        dele, mais desconfortável fica o fato de que ele está além de qualquer sistema que conhecemos.
                    </p>

                    <h2
                        id="cinema-questiona-mito"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Quando o cinema decide questionar o mito
                    </h2>

                    <p className="mb-3">
                        O cinema moderno não “odeia” o Superman — ele testa a fantasia. A pergunta deixou de ser se o herói ainda funciona e passou
                        a ser outra, bem mais incômoda: e se um símbolo absoluto de esperança existisse em um mundo que transforma tudo em debate,
                        crise e polarização? Um mundo onde cada ação gera reação imediata, onde não existe gesto neutro e onde até o silêncio
                        vira posicionamento. Nesse contexto, o mito não desaparece, mas passa a ser pressionado por expectativas impossíveis de
                        conciliar.
                    </p>

                    <p className="mb-3">
                        Em vez de colocar o herói acima do caos — como uma figura intocável que resolve e segue adiante — algumas versões do cinema
                        contemporâneo escolhem colocá-lo <strong>dentro</strong> do caos. Isso muda completamente o tom da narrativa. A história
                        deixa de ser apenas aventura ou espetáculo visual e passa a lidar com percepção pública, consequências simbólicas e o
                        peso psicológico de ser referência para milhões de pessoas que projetam nele suas próprias crenças, medos e frustrações.
                        O Superman continua sendo forte, mas agora o conflito principal não está nos punhos — está no significado de cada escolha.
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
                        id="o-que-sobra"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O que sobra do herói quando sobra poder?
                    </h2>

                    <p className="mb-3">
                        Quando a força é praticamente ilimitada, a história precisa encontrar tensão em outro lugar. E ela encontra onde dói mais:
                        <strong> na consciência</strong>. O conflito deixa de ser físico e passa a ser interno. O drama não está no que o Superman
                        consegue fazer, mas no que ele decide não fazer — mesmo quando seria mais rápido, mais eficiente ou mais “resolutivo”.
                        Cada limite autoimposto vira uma escolha moral, não uma fraqueza. E é exatamente essa contenção que sustenta o mito.
                    </p>

                    <p className="mb-3">
                        É nesse ponto que o Superman moderno se torna realmente interessante. Ele não é o mais forte porque vence todas as batalhas,
                        mas porque suporta o peso contínuo de escolher sem virar tirano, sem se transformar em arma política e sem abrir mão da
                        própria humanidade. Em um mundo que associa poder a dominação, ele insiste em associá-lo a responsabilidade. O heroísmo,
                        aqui, não está no impacto do soco — está na decisão consciente de não usá-lo.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        O dilema do Superman contemporâneo não fala sobre fraqueza, dúvida ou perda de relevância. Ele fala sobre responsabilidade em
                        escala absurda. A cada decisão, o herói não está apenas salvando pessoas ou evitando tragédias imediatas — ele está{" "}
                        <strong>ensinando o mundo</strong> como lidar com poder, autoridade e limite. Suas escolhas viram referência, precedente e
                        argumento, mesmo quando ele só queria fazer o que parecia certo naquele instante.
                    </p>

                    <p className="mb-3">
                        Quando o cinema decide questionar essa figura, não está destruindo o símbolo da esperança. Está, na verdade, tentando
                        responder uma pergunta que define o nosso tempo:{" "}
                        <strong>o que acontece quando o “bem” tem poder suficiente para impor o bem?</strong> A resposta nunca é simples. Porque
                        impor o bem sem diálogo pode virar dominação, e salvar sem refletir pode gerar novos medos. O mito permanece — mas agora
                        cercado por consequências que não podem mais ser ignoradas.
                    </p>

                    <p>
                        No fim, o Superman mais interessante não é aquele que poderia fazer qualquer coisa, mas aquele que escolhe limites mesmo
                        quando ninguém poderia obrigá-lo a isso. É nesses limites autoimpostos que mora a moral, a humanidade e a relevância do
                        personagem. Porque, em um mundo obcecado por força, o verdadeiro heroísmo talvez esteja em saber até onde não ir.
                    </p>

                    <div className="not-prose my-12 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <p className="text-sm font-semibold text-slate-100">Continue no LEXARA</p>
                        <p className="mt-2 text-sm text-slate-300">
                            Quer ir além deste artigo? Explore mais análises de personagens e como o cinema contemporâneo reposiciona mitos clássicos
                            para dialogar com o nosso tempo.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                                href="/filmes-series/dc/superman"
                                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
                            >
                                Ver a seção Superman <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/filmes-series/dc"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                Explorar DC <ArrowRight size={16} />
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
                        As fontes listadas abaixo servem como base para informações verificáveis — como créditos, filmografias, dados de produção e
                        contexto institucional. Elas ajudam a ancorar o debate em fatos concretos, enquanto a leitura crítica, as conexões temáticas
                        e as interpretações apresentadas ao longo do artigo são originais do LEXARA. A proposta aqui não é repetir dados, mas usá-los
                        como ponto de partida para reflexão.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.dc.com/" rel="noreferrer noopener" target="_blank">
                                DC (site oficial) — visão institucional do universo, personagens, linhas editoriais e projetos anunciados
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/" rel="noreferrer noopener" target="_blank">
                                IMDb — créditos técnicos, elencos, equipes criativas e histórico de produções
                            </a>
                        </li>
                        <li>
                            <a href="https://www.boxofficemojo.com/" rel="noreferrer noopener" target="_blank">
                                Box Office Mojo — dados de desempenho comercial e alcance público (quando aplicável)
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> esta análise é intencionalmente cautelosa. Projetos criativos mudam, leituras evoluem
                        e interpretações se transformam com o tempo. A intenção não é vender certezas, mas mapear dilemas, riscos e consequências —
                        especialmente quando o cinema decide revisitar mitos sob novas lentes.
                    </p>
                </section>

                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em <span className="text-slate-300">{ARTICLE.publishedLabel}</span>.{" "}
                        <span className="text-slate-500">({formatISOToDateLabel(ARTICLE.publishedAtISO)})</span>
                    </p>
                </footer>
            </article>
        </>
    );
}
