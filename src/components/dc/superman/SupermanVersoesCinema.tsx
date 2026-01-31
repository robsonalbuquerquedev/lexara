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
    title: "As diferentes versões do Superman nas telonas — e o que cada uma diz sobre a DC",
    subtitle:
        "Cada ator, cada era e cada abordagem revelou uma face distinta do Homem de Aço. Esta análise mostra como o Superman mudou — e o que a DC tentou comunicar em cada fase.",
    badge: "Filmes & Séries — DC",
    categoryHref: "/filmes-series/dc",
    topic: "Superman",
    topicHref: "/filmes-series/dc/superman",
    slug: "/filmes-series/dc/superman/superman-versoes-cinema",
    publishedAtISO: "2026-01-31T12:00:00-03:00",
    publishedLabel: "31.01.2026, às 12H00",
    readingTime: "3 min de leitura",
    coverImage: {
        src: "/images/featured/superman/superman-versoes-cinema.png",
        alt: "Superman em diferentes eras do cinema e TV — análise LEXARA sobre versões nas telonas",
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
    { id: "por-que-muda", label: "Por que o Superman muda tanto?" },
    { id: "pioneiros", label: "Os pioneiros: ícone, moral e esperança" },
    { id: "reeve", label: "Christopher Reeve: o “padrão-ouro”" },
    { id: "tv-era", label: "A era da TV: humano, cotidiano e crescimento" },
    { id: "modernos", label: "Cinema moderno: legado, reinvenção e debate" },
    { id: "dcu", label: "DCU: o que o novo Superman promete" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    // Mantém simples e previsível. A label final já está pronta em ARTICLE.publishedLabel.
    return iso;
}

function isPublishedNow(publishedAtISO: string) {
    return Date.now() >= Date.parse(publishedAtISO);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

export default function SupermanVersoesCinema() {
    // ✅ Publicação programada (#1): antes do horário, o artigo NÃO existe publicamente.
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
            { "@type": "Thing", name: "DC" },
            { "@type": "Thing", name: "DCU" },
            { "@type": "Thing", name: "Cinema" },
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

    // ✅ Vídeo (trailer apoio)
    const video = {
        embedUrl: "https://www.youtube-nocookie.com/embed/Ox8ZLF6cGM0",
        title: "Superman — trailer oficial e o tom da nova era da DC",
        heading: "Vídeo de apoio: o trailer que resume o espírito do Superman",
        description:
            "Este trailer oficial ajuda a visualizar o tom, a energia e as escolhas criativas que a DC propõe para o Superman. Use como complemento da leitura: não para antecipar respostas, mas para sentir o clima da nova fase e conectar imagem, narrativa e contexto apresentados no artigo.",
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-superman-versoes-cinema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-superman-versoes-cinema"
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
                        caption="O Superman sempre foi o mesmo símbolo — mas cada década escolheu um jeito diferente de contar essa história."
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

                <section className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-slate-100">
                    <h2
                        id="por-que-muda"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Por que o Superman muda tanto?
                    </h2>

                    <p className="mb-3">
                        O Superman funciona como um &quot;termômetro cultural&quot; — e isso explica por que ele nunca fica exatamente igual por muito tempo.
                        Quando o mundo está otimista, o herói tende a ser mais solar, direto e inspirador, quase como uma lembrança viva de que &quot;dá pra acreditar&quot;.
                        Mas quando a época é mais tensa (crises, desconfiança, polarização, medo do futuro), a mesma ideia de esperança precisa se defender: o Superman
                        fica mais sério, mais conflituoso e, muitas vezes, mais &quot;realista&quot;, porque o público passa a exigir que a fantasia responda perguntas
                        difíceis em vez de apenas confortar.
                    </p>

                    <p className="mb-3">
                        Só que não é apenas o mundo que muda — o estúdio também muda. A DC nem sempre está só contando uma boa história: em várias fases, ela está tentando{" "}
                        <strong>se reposicionar</strong> diante do público, testando caminhos (cinema vs. TV, tom mais leve vs. tom mais pesado, universo compartilhado,
                        reboot, nova &quot;era&quot; editorial). E quando a DC quer mandar um recado sobre qual direção está tomando, ela costuma escolher justamente o seu
                        símbolo mais forte para ser a vitrine: o Superman. Por isso, cada versão do personagem não é só uma atuação diferente — é uma decisão de marca,
                        de tom e de identidade.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: <strong>cada Superman &quot;diz&quot; mais sobre a época</strong> (e sobre o que a DC quer ser naquele momento)
                                do que sobre o próprio personagem.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="pioneiros"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Os pioneiros: ícone, moral e esperança
                    </h2>

                    <p className="mb-3">
                        Nos primeiros anos, o objetivo do Superman era direto e sem rodeios: apresentar um herói fácil de reconhecer,
                        fácil de entender e impossível de confundir. A moral precisava ser clara, quase didática, porque o personagem
                        estava sendo apresentado a um público que ainda aprendia o que significava um “super-herói”.
                        Não havia espaço para ambiguidade ou tons intermediários — o Superman surgia como a personificação do certo
                        contra o errado, do bem contra o mal, do justo contra o injusto.
                    </p>

                    <p className="mb-3">
                        É aqui que nascem as raízes do chamado &quot;Superman símbolo&quot;: alguém maior do que a vida, quase mítico,
                        mas ao mesmo tempo acessível, compreensível e inspirador. Ele não precisava ser complexo para ser poderoso.
                        Pelo contrário — sua força vinha justamente da simplicidade. Esse DNA inicial, construído nos primórdios do
                        cinema e da televisão, moldou a forma como o personagem seria interpretado por décadas e criou uma expectativa
                        duradoura no imaginário popular sobre quem é (e deve ser) o Homem de Aço.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">Linha do tempo essencial</p>
                            <p className="mt-2 text-sm text-slate-300">
                                <strong>Kirk Alyn (1948–1950)</strong>: o primeiro ator a dar rosto e movimento ao Superman em live-action,
                                nos seriados de cinema, estabelecendo visual e postura do herói. <br />
                                <strong>George Reeves (1951–1958)</strong>: consolida a imagem &quot;clássica&quot; na televisão, reforçando
                                o Superman como herói-modelo, figura moral e referência positiva para o público da época.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                O Superman nasce como <strong>linguagem simples</strong>: verdade, justiça e esperança comunicadas de forma
                                direta — sem subtexto, sem ironia e sem precisar de manual.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="reeve"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Christopher Reeve: o &quot;padrão-ouro&quot;
                    </h2>

                    <p className="mb-3">
                        O Superman interpretado por <strong>Christopher Reeve (1978–1987)</strong> se torna referência quase imediata porque
                        consegue equilibrar duas forças que, à primeira vista, parecem incompatíveis. De um lado, a{" "}
                        <strong>grandiosidade</strong> do mito: o herói poderoso, símbolo máximo de esperança, maior do que a vida.
                        Do outro, a <strong>humanidade</strong> do indivíduo: gestos simples, vulnerabilidade emocional e uma empatia
                        que aproxima o personagem do público.
                    </p>

                    <p className="mb-3">
                        Essa combinação faz o Superman de Reeve funcionar como uma verdadeira &quot;fantasia com coração&quot;.
                        Ele inspira não apenas pelo que pode fazer, mas pelo modo como se comporta ao fazê-lo. Existe calor,
                        gentileza e até humor em sua presença — elementos que ajudam o espectador a se enxergar naquele personagem.
                        Por isso, para muitas pessoas, essa versão não é apenas mais uma adaptação bem-sucedida, mas o modelo que
                        passou a <strong>definir o Superman</strong> na cultura pop e a servir de régua para todas as interpretações
                        que vieram depois.
                    </p>

                    <h2
                        id="tv-era"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        A era da TV: humano, cotidiano e crescimento
                    </h2>

                    <p className="mb-3">
                        A televisão exige algo que o cinema raramente pede: <strong>constância e convivência</strong>.
                        Quando uma história é contada semana após semana, o público não quer apenas ver grandes feitos —
                        quer entender como aquele herói vive quando o mundo não está acabando. Isso empurra o Superman
                        para uma pergunta muito mais íntima e persistente:{" "}
                        <strong>&quot;como é ser o Superman todos os dias, quando ninguém está olhando?&quot;</strong>
                    </p>

                    <p className="mb-3">
                        É nesse contexto que surgem versões mais &quot;pé no chão&quot; do personagem. Não porque o Superman
                        seja menos poderoso, mas porque a narrativa passa a se interessar por <strong>consequências</strong>, <strong>relações pessoais</strong> e <strong>identidade</strong>. A TV transforma o herói em alguém
                        que precisa lidar com trabalho, amor, dúvidas e escolhas contínuas — e isso aproxima o personagem
                        do espectador de uma forma que o cinema, sozinho, dificilmente consegue.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        Do romance ao amadurecimento
                    </h3>

                    <p className="mb-3">
                        Em <strong>Lois &amp; Clark</strong>, <strong>Dean Cain (1993–1997)</strong> coloca o foco no romance
                        e no cotidiano: o Superman existe, mas a história gira em torno de relações, diálogo e vida pessoal.
                        Já em <strong>Smallville</strong>, <strong>Tom Welling (2001–2011)</strong> percorre um caminho mais
                        longo e paciente, mostrando a formação do Clark Kent antes mesmo de ele assumir totalmente o papel
                        de símbolo. O herói não nasce pronto — ele é construído aos poucos.
                    </p>

                    <p className="mb-3">
                        Anos depois, <strong>Tyler Hoechlin (2016–2024)</strong> leva essa lógica ainda mais longe ao unir
                        heroísmo, família e responsabilidade. Quando o Superman vira pai, cada decisão ganha um peso novo:
                        salvar o mundo continua sendo importante, mas proteger quem está mais perto passa a ser igualmente
                        essencial. A TV, assim, redefine o personagem não pela força, mas pela maturidade emocional.
                    </p>

                    <h2
                        id="modernos"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Cinema moderno: legado, reinvenção e debate
                    </h2>

                    <p className="mb-3">
                        A partir dos anos 2000, o Superman passa a ocupar um verdadeiro campo de disputa cultural.
                        O público ainda quer reconhecer o símbolo clássico — a figura inspiradora, quase mítica —,
                        mas ao mesmo tempo exige atualidade, complexidade e diálogo com um mundo que já não enxerga
                        o heroísmo da mesma forma. Conciliar essas duas expectativas se torna um desafio constante,
                        e nem sempre é possível agradar ambos os lados com o mesmo filme.
                    </p>

                    <p className="mb-3">
                        Nesse cenário, <strong>Brandon Routh (2006)</strong> surge como uma tentativa clara de olhar
                        para trás sem negar o presente. Seu Superman carrega a ideia de legado e nostalgia, quase
                        como uma continuação emocional do passado, reafirmando o valor do símbolo clássico.
                        Já <strong>Henry Cavill (2013–2023)</strong> representa uma virada mais radical: o chamado
                        &quot;mito em choque&quot;. Aqui, o Superman é colocado diante de um mundo desconfiado,
                        politizado e muitas vezes hostil, assumindo um tom mais sério, com peso épico e clima de
                        realidade dura que divide opiniões até hoje.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">O que a DC tentou comunicar aqui?</p>
                            <p className="mt-2 text-sm text-slate-300">
                                No cinema moderno, a DC buscou &quot;atualizar&quot; o Superman para uma era mais cética e
                                desconfiada do poder. Temas como responsabilidade, medo do poder absoluto, impacto público
                                das ações do herói e até repercussões políticas do símbolo passam a fazer parte da narrativa.
                                O Superman deixa de ser apenas um ideal a ser admirado e passa a ser uma força que o mundo
                                precisa aprender a aceitar — ou rejeitar.
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                O conflito central muda de forma clara: <strong>&quot;o mundo ainda aceita esperança?&quot;</strong>
                            </p>
                        </div>
                    </div>

                    <h2
                        id="dcu"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        DCU: o que o novo Superman promete
                    </h2>

                    <p className="mb-3">
                        É nesse ponto que entra <strong>David Corenswet (2025–presente)</strong>, agora sob a direção criativa de{" "}
                        <strong>James Gunn</strong>, marcando o início de uma nova fase para o personagem e para o próprio estúdio.
                        A promessa de tom, ao menos no discurso inicial, aponta para um retorno consciente ao
                        &quot;coração&quot; do Superman: esperança, compaixão e uma energia mais luminosa, capazes de inspirar
                        sem ingenuidade. A ideia não é ignorar conflitos ou simplificar o mundo, mas reenquadrar o herói
                        como alguém que enfrenta a dureza da realidade sem perder sua essência.
                    </p>

                    <p className="mb-3">
                        Em outras palavras, não se trata de &quot;voltar no tempo&quot; ou repetir fórmulas do passado.
                        O objetivo parece ser construir uma síntese moderna daquilo que o Superman sempre representou:
                        <strong> uma força de humanidade</strong> em um mundo que testa constantemente essa humanidade.
                        Se essa abordagem funcionar, o novo DCU pode transformar o Superman não apenas no ponto de partida
                        de um universo compartilhado, mas também no seu principal guia emocional.
                    </p>

                    <ArticleVideo
                        embedUrl={video.embedUrl}
                        title={video.title}
                        heading={video.heading}
                        description={video.description}
                    />

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        O Superman muda porque a DC muda — e porque o mundo ao redor também muda. Em cada fase, o personagem
                        funciona como um espelho do seu tempo, refletindo aquilo que a cultura aceita, teme, questiona ou
                        simplesmente precisa ouvir naquele momento. Não se trata de incoerência, mas de adaptação: o mesmo
                        símbolo respondendo a contextos diferentes.
                    </p>

                    <p className="mb-3">
                        Dos pioneiros que apresentaram um herói direto e moralmente claro, passando pelo
                        &quot;padrão-ouro&quot; de <strong>Christopher Reeve</strong>, pela televisão mais humana e cotidiana,
                        até o cinema moderno marcado por debates e divisões, o Superman permanece no centro de uma pergunta
                        simples — e poderosa:{" "}
                        <strong>o que significa ser bom quando é mais fácil ser cínico?</strong>
                    </p>

                    <p>
                        Se o DCU conseguir encontrar o tom certo, o novo Superman pode realizar algo raro no cinema atual:
                        unir quem busca o <strong>símbolo inspirador</strong> e quem deseja um{" "}
                        <strong>personagem de carne e osso</strong>, sem trair nenhuma dessas expectativas.
                        Nesse equilíbrio delicado entre mito e humanidade, talvez esteja a resposta para por que o Homem
                        de Aço continua relevante — geração após geração.
                    </p>

                    <div className="not-prose my-12 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <p className="text-sm font-semibold text-slate-100">Continue no LEXARA</p>
                        <p className="mt-2 text-sm text-slate-300">
                            Quer continuar nessa linha de &quot;como a DC se reinventa&quot;? Explore a seção do Superman ou compare com o
                            caminho do Batman no cinema.
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                                href="/filmes-series/dc/superman"
                                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
                            >
                                Ver a seção Superman <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/filmes-series/dc/batman"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900/30"
                            >
                                Comparar com Batman <ArrowRight size={16} />
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
                        As fontes a seguir servem como base para informações verificáveis — nomes de atores, períodos,
                        projetos oficialmente anunciados e contexto geral de estúdio. Elas funcionam como o alicerce
                        factual desta análise. A leitura crítica, as conexões entre eras e as interpretações apresentadas,
                        no entanto, são originais do LEXARA e refletem uma curadoria editorial própria.
                    </p>

                    <p className="mb-3">
                        Sempre que possível, priorizamos materiais oficiais e bases amplamente reconhecidas, não para
                        “confirmar opiniões”, mas para garantir que a discussão parta de dados sólidos antes de avançar
                        para reflexão e análise.
                    </p>

                    <ul>
                        <li>
                            <a
                                href="https://www.youtube.com/watch?v=Ox8ZLF6cGM0"
                                target="_blank"
                                rel="noreferrer"
                            >
                                DC (YouTube) — Superman | Official Trailer
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.imdb.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                IMDb — créditos, elencos e filmografias (consulta)
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://en.wikipedia.org/wiki/Superman_in_film"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Wikipedia — Superman in film (visão histórica e cronológica)
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> esta análise é intencionalmente cautelosa, porque projetos
                        de estúdio mudam, agendas criativas são revistas e decisões podem ser alteradas sem aviso prévio.
                        A proposta aqui é mapear tendências, expectativas e riscos — sem vender certezas onde elas ainda
                        não existem.
                    </p>
                </section>

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
