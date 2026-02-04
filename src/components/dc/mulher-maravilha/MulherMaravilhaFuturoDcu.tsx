import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type MulherMaravilhaFuturoDcuProps = {
    article: Article;
};

const SECTIONS = [
    { id: "abertura", label: "Por que este reinício importa" },
    { id: "nucleo", label: "O núcleo que não pode sumir" },
    { id: "armadilhas", label: "Armadilhas típicas do reboot" },
    { id: "pilares", label: "3 pilares para a nova Diana" },
    { id: "mundo", label: "Themyscira e o mundo ao redor" },
    { id: "integracao", label: "Como encaixar no DCU sem diluir" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    // Keep predictable. The final label is already provided by article.publishedAtLabel.
    return iso;
}

function isPublishedNow(publishedAtISO: string) {
    // ISO includes -03:00, so Date() respects the offset.
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
                Ad placeholder (AdSense) — loaded after consent.
            </p>
        </aside>
    );
}

export default function MulherMaravilhaFuturoDcu({
    article,
}: MulherMaravilhaFuturoDcuProps) {
    // Scheduled publishing: before the time, the article does not exist publicly.
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
            { "@type": "Thing", name: "Wonder Woman" },
            { "@type": "Thing", name: "DCU" },
            { "@type": "Thing", name: "Themyscira" },
        ],
    };

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

    // Video support: DC Studios "Gods and Monsters" announcement (editorial context)
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
                id="ld-article-mulher-maravilha-futuro-dcu"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-mulher-maravilha-futuro-dcu"
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
                        Por que este reinício importa
                    </h2>

                    <p className="mb-3">
                        Quando um universo é reiniciado, a tentação mais comum é tratar o &quot;novo começo&quot; como um botão de apagar: muda-se o
                        elenco, troca-se o tom, redesenha-se o mundo e pronto — liberdade total. Só que essa liberdade quase sempre cobra um
                        preço invisível: a perda de identidade. No caso da Mulher-Maravilha, esse risco é ainda maior, porque Diana não é
                        apenas uma personagem &quot;forte&quot; ou &quot;icônica&quot;. Ela é uma ideia em movimento — um símbolo que funciona justamente porque
                        carrega contradições humanas (fé e ferida, coragem e compaixão, força e delicadeza) sem virar paródia de si mesma.
                        Por isso, recomeçar aqui não é apagar. É escolher, com precisão cirúrgica, o que deve continuar existindo para que
                        a personagem continue reconhecível mesmo em outra fase do estúdio.
                    </p>

                    <p className="mb-3">
                        O DCU vai precisar de personagens que funcionem como âncoras morais — não como &quot;professores&quot; do universo, mas como
                        presenças que impedem o mundo de deslizar para o cinismo fácil. Diana costuma ser isso quando o filme deixa o heroísmo
                        respirar: ela entra em cena sem a necessidade de provar que é dura o tempo inteiro, porque sua força não está no
                        tom agressivo, e sim na convicção. E aqui mora a diferença entre um reinício inteligente e um reinício ansioso:
                        modernizar não é &quot;deixar mais realista&quot;, nem &quot;deixar mais engraçado&quot;, nem &quot;deixar mais sombrio&quot;. Modernizar, no caso
                        da Mulher-Maravilha, é atualizar a linguagem sem destruir o núcleo — e o núcleo dela é raro: uma heroína capaz de ver
                        o pior do humano sem se tornar parecida com o pior do humano.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: reiniciar a Mulher-Maravilha não é trocar o figurino — é decidir qual tipo de heroísmo o DCU
                                quer defender quando a história fica difícil.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="nucleo"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O núcleo que não pode sumir
                    </h2>

                    <p className="mb-3">
                        A Mulher-Maravilha funciona melhor quando é tratada como ponte entre dois mundos que raramente convivem em harmonia:
                        o mito e a rua, o símbolo e a pessoa, o ideal e a falha humana. É nesse espaço intermediário que Diana ganha densidade.
                        Quando a narrativa a empurra apenas para o arquétipo da &quot;guerreira perfeita&quot;, ela se torna distante — admirável,
                        mas fria, quase decorativa. Por outro lado, quando tenta normalizá-la demais, reduzindo tudo à experiência cotidiana,
                        a personagem perde aquilo que a torna maior do que a cena: a sensação de que ela carrega algo antigo, quase
                        atemporal, que observa o mundo humano de fora e, ainda assim, decide protegê-lo.
                    </p>

                    <p className="mb-3">
                        O núcleo da Mulher-Maravilha é simples na forma, mas poderoso no efeito: ela acredita no humano mesmo depois de
                        testemunhar o pior do humano. Isso não é ingenuidade nem romantização da violência — é escolha consciente.
                        É disciplina ética. Diana não luta porque o mundo merece ser salvo; ela luta porque escolhe agir como se pudesse
                        ser melhor. E é exatamente por isso que essa personagem tem um papel único dentro do DCU: ela é a voz que impede
                        o universo de escorregar para o cinismo automático, para a ideia de que força precisa vir acompanhada de sarcasmo
                        ou desilusão permanente. Quando Diana funciona, o heroísmo volta a ser uma postura moral, não apenas uma estética.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">O que preservar (sem nostalgia)</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Preservar o núcleo não significa repetir fórmulas antigas ou congelar a personagem no passado. Significa manter
                                viva a ideia de que Diana é uma heroína que entra em conflito com o mundo sem abrir mão da compaixão. Ela pode ser
                                firme, estratégica e até implacável quando necessário — mas nunca perde a capacidade de enxergar o outro como
                                alguém que ainda pode ser alcançado. Essa humanidade não é fraqueza narrativa; é convicção ética.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Se o DCU quer trabalhar a ideia de &quot;esperança com maturidade&quot;, a Mulher-Maravilha não é coadjuvante: ela é uma das
                                peças mais valiosas do tabuleiro simbólico.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="armadilhas"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Armadilhas típicas do reboot
                    </h2>

                    <p className="mb-3">
                        Reboots costumam errar por um motivo simples: pressa em provar que &quot;agora vai ser diferente&quot;. A ansiedade por marcar
                        território leva muitas produções a confundir mudança com ruptura total, como se qualquer ligação com o passado fosse
                        um peso a ser descartado. O problema é que diferença sem direção vira ruído narrativo — e, no caso da Mulher-Maravilha,
                        esse ruído aparece rápido. Diana depende de coerência simbólica para funcionar: se cada decisão parece arbitrária,
                        a personagem deixa de ser um eixo moral e vira apenas mais uma peça estilizada dentro do universo.
                    </p>

                    <p className="mb-3">
                        A armadilha mais comum é reduzir toda a discussão a tom. Deixar &quot;mais sério&quot;, &quot;mais leve&quot; ou &quot;mais irônico&quot; vira uma
                        solução mágica, quando na verdade isso só troca a embalagem. O que realmente sustenta um reboot é foco narrativo:
                        qual dilema essa nova Diana carrega desde o primeiro ato? Qual ferida emocional ou ética ela tenta resolver ao longo
                        da história? E, talvez a pergunta mais importante, qual valor ela está disposta a pagar para continuar acreditando
                        no humano quando a realidade insiste em provar o contrário? Sem essas respostas, qualquer mudança estética soa vazia,
                        e o reboot perde a chance de construir uma Mulher-Maravilha que evolui sem se descaracterizar.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="pilares"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        3 pilares para a nova Diana
                    </h2>

                    <p className="mb-3">
                        Para que o reinício da Mulher-Maravilha não vire apenas um &quot;copiar e colar com outro elenco&quot;, a nova fase do DCU
                        precisa de pilares claros. Não no sentido de regras rígidas ou dogmas criativos, mas como trilhos narrativos:
                        estruturas que permitem mudança sem perda de identidade. Quando tudo ao redor muda — estética, tom, cronologia,
                        conexões de universo — são esses pilares que mantêm Diana reconhecível, coerente e emocionalmente legível para o
                        público, mesmo em contextos completamente novos.
                    </p>

                    <p className="mb-3">
                        A proposta aqui é deliberadamente simples e prática, porque funciona melhor quando testada em cena:
                        mito com intenção (não como decoração épica), humanidade com conflito real (não como fragilidade superficial)
                        e ação que comunica valores — não apenas coreografia bonita ou espetáculo vazio. Esses três elementos não competem
                        entre si; ao contrário, quando bem alinhados, eles se reforçam. O mito dá peso simbólico, a humanidade cria vínculo
                        emocional, e a ação transforma escolhas internas em consequências visíveis.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        Um jeito rápido de checar se &quot;está funcionando&quot;
                    </h3>

                    <p className="mb-3">
                        Existe um teste simples que raramente falha: depois de uma grande cena — uma batalha, um confronto verbal,
                        uma decisão difícil — você entende melhor quem Diana é ou apenas assistiu a uma sequência tecnicamente impressionante?
                        Quando a ação revela caráter, o filme avança junto com a personagem. Quando não revela nada além de impacto visual,
                        a narrativa estagna. Nesse ponto, a Mulher-Maravilha deixa de ser sujeito da história e vira embalagem: bonita,
                        poderosa, mas vazia de significado duradouro.
                    </p>

                    <h2
                        id="mundo"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Themyscira e o mundo ao redor
                    </h2>

                    <p className="mb-3">
                        Themyscira nunca foi apenas um cenário exótico ou um prólogo mitológico. Ela é a origem ideológica da Mulher-Maravilha.
                        É dali que nascem as perguntas que Diana carrega quando pisa no mundo moderno: como exercer poder sem repetir a lógica
                        da dominação? Como enfrentar a guerra sem se tornar prisioneira dela? Como lidar com a verdade quando ela machuca,
                        divide ou expõe contradições que ninguém quer encarar? Essas questões não são acessórios narrativos — elas formam o
                        filtro através do qual Diana observa a humanidade.
                    </p>

                    <p className="mb-3">
                        Se o DCU quiser diferenciar a Mulher-Maravilha de forma consistente, precisa tratar Themyscira como cultura viva,
                        política em tensão e memória ativa — não como &quot;lugar bonito para flashback&quot;. A ilha deve importar para o presente da
                        história, influenciando decisões, conflitos e até desconfortos da personagem no mundo dos homens. Quando Themyscira
                        existe apenas como lembrança estética, Diana perde profundidade. Quando ela existe como referência ética e ideológica,
                        cada escolha da personagem ganha peso: não é só uma heroína reagindo ao caos, é alguém tentando conciliar dois mundos
                        que operam sob valores radicalmente diferentes.
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
                        id="integracao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Como encaixar no DCU sem diluir
                    </h2>

                    <p className="mb-3">
                        Universos compartilhados carregam um risco silencioso, mas recorrente: personagens fortes viram peças de tabuleiro,
                        convocadas apenas quando a história precisa de impacto imediato. Nesse modelo, a individualidade se dissolve aos
                        poucos, e o herói passa a existir mais como função do evento do que como protagonista de uma jornada própria.
                        A Mulher-Maravilha não pode cair nessa armadilha. Se Diana for apenas &quot;a que aparece para ajudar na guerra final&quot;,
                        ela perde o que a torna singular — a capacidade de carregar conflitos morais complexos sem depender da validação
                        de outros ícones do universo.
                    </p>

                    <p className="mb-3">
                        O caminho para evitar essa diluição é mais simples do que parece: a Mulher-Maravilha precisa enfrentar dilemas que
                        ninguém mais do DCU consegue carregar do mesmo jeito. Superman costuma representar a esperança e o futuro possível;
                        Batman, a vigilância constante e o custo psicológico da obsessão. Diana ocupa outro espaço simbólico. Ela é a ponte
                        ética entre força e compaixão, entre ação e responsabilidade. Quando essa função aparece apenas no discurso, o papel
                        se esvazia. Quando aparece nas escolhas, nos erros e nas consequências, a personagem ganha peso real — e o universo
                        compartilhado passa a girar também em torno dela, não apenas ao redor dos mesmos polos de sempre.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        O futuro da Mulher-Maravilha no DCU não depende de fazer algo &quot;maior&quot;, mais barulhento ou mais espetacular do que já foi
                        feito antes. Depende de fazer algo mais verdadeiro para a personagem. Em um momento em que universos compartilhados
                        disputam atenção com escala e excesso, Diana se destaca justamente quando a narrativa confia na sua essência: a
                        coexistência entre símbolo e pessoa. Quando a nova fase entende que essas duas camadas não competem, mas se
                        complementam, o reinício deixa de ser um risco defensivo e passa a ser uma oportunidade criativa real.
                    </p>

                    <p className="mb-3">
                        O público não precisa de uma Mulher-Maravilha perfeita, infalível ou blindada de contradições. Precisa de uma
                        Mulher-Maravilha consistente — alguém capaz de atravessar um mundo quebrado sem se tornar reflexo desse mesmo mundo.
                        Essa consistência não nasce da força física nem do tom épico, mas da clareza moral: Diana erra, sofre e se frustra,
                        mas escolhe, repetidamente, não abandonar a compaixão como princípio. Em tempos de heróis cada vez mais cínicos,
                        essa escolha é o que a torna necessária.
                    </p>

                    <p>
                        Se o DCU acertar esse ponto, a Mulher-Maravilha não será apenas um retorno bem-sucedido dentro de um novo planejamento
                        de estúdio. Ela será uma fundação simbólica — a personagem que ajuda a sustentar o universo quando o espetáculo passa
                        e só a ideia de heroísmo permanece.
                    </p>

                    <div className="not-prose my-12 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <p className="text-sm font-semibold text-slate-100">
                            Continue no LEXARA
                        </p>

                        <p className="mt-2 text-sm text-slate-300">
                            Quer ampliar o mapa do DCU com o mesmo olhar editorial? Vale comparar os papéis simbólicos que sustentam esse
                            universo: Batman como vigilância, custo e trauma; Superman como esperança, futuro e ideal; e a Mulher-Maravilha
                            como ponte ética entre força e compaixão. Entender esses três eixos juntos ajuda a enxergar por que Diana é tão
                            central para que o DCU não perca o coração no processo de reconstrução.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                                href="/filmes-series/dc/batman/batman-dcu-futuro"
                                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
                            >
                                Batman no DCU <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/filmes-series/dc/superman/superman-dcu-futuro"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                Superman no DCU <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/filmes-series/dc/mulher-maravilha"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                Voltar à seção Mulher-Maravilha <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/filmes-series/dc"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                Explorar o hub DC <ArrowRight size={16} />
                            </Link>

                            {/* Ponte opcional para variar universo (sem competir com a trindade)
                            <Link
                                href="/filmes-series/marvel"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                Explorar Marvel <ArrowRight size={16} />
                            </Link> */}
                        </div>
                    </div>

                    <h2
                        id="fontes"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Fontes & contexto
                    </h2>

                    <p className="mb-3">
                        As fontes abaixo servem como base para dados verificáveis — nomes, projetos anunciados, posicionamentos institucionais
                        e contexto geral de estúdio. Elas ajudam a situar o leitor no que é informação pública confirmada e no que faz parte
                        do debate criativo em andamento. A leitura crítica, as conexões entre temas e as interpretações apresentadas ao longo
                        do artigo, no entanto, são originais do LEXARA. A proposta não é repetir comunicados oficiais, mas usá-los como ponto
                        de partida para analisar riscos, expectativas e escolhas narrativas possíveis para a Mulher-Maravilha dentro do DCU.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.dc.com/" rel="noreferrer noopener" target="_blank">
                                DC (site oficial) — universo, personagens e catálogos
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/" rel="noreferrer noopener" target="_blank">
                                IMDb — créditos, fichas técnicas e dados de produção
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=wY8XcmrIujE" rel="noreferrer noopener" target="_blank">
                                DC Studios — anúncio do Chapter One (Gods and Monsters)
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> esta análise é intencionalmente cautelosa. Projetos de estúdio mudam,
                        cronogramas se ajustam e direções criativas podem ser revistas. A ideia aqui é mapear cenários, dilemas e armadilhas
                        possíveis — não vender certeza onde ela ainda não existe.
                    </p>
                </section>

                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em{" "}
                        <span className="text-slate-300">{article.publishedAtLabel}</span>.{" "}
                        <span className="text-slate-500">
                            ({formatISOToDateLabel(article.publishedAtISO)})
                        </span>
                    </p>
                </footer>
            </article>
        </>
    );
}
