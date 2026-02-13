import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type ThorRagnarokAnaliseProps = {
    article: Article;
};

const SECTIONS = [
    { id: "tese", label: "A tese: o riso como armadura" },
    { id: "comedia", label: "Comédia como linguagem do trauma" },
    { id: "perdas", label: "Perdas gigantes (sem melodrama)" },
    { id: "asgard", label: "Asgard não é lugar: é pertencimento" },
    { id: "identidade", label: "Quem é Thor sem martelo?" },
    { id: "taika", label: "O estilo visual como contraste" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    // Se você já tem um formatter central no projeto, substitua aqui.
    return iso;
}

function isPublishedNow(publishedAtISO: string) {
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
                Espaço reservado para anúncio (AdSense) — carregado conforme consentimento.
            </p>
        </aside>
    );
}

export default function ThorRagnarokAnalise({ article }: ThorRagnarokAnaliseProps) {
    // ✅ Publicação programada: antes do horário, o artigo NÃO existe publicamente.
    if (!isPublishedNow(article.publishedAtISO)) {
        return (
            <section className="mx-auto max-w-2xl py-20 text-center">
                <h1 className="text-2xl font-bold">Publicação programada</h1>

                <p className="mt-4 text-slate-400">
                    Este artigo ficará disponível em {formatISOToDateLabel(article.publishedAtISO)}.
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
            { "@type": "Thing", name: "Thor: Ragnarok" },
            { "@type": "Thing", name: "MCU" },
            { "@type": "Thing", name: "Comédia e tragédia" },
            { "@type": "Thing", name: "Luto e amadurecimento" },
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

    // ✅ Vídeo (apoio editorial): trailer oficial (YouTube no-cookie)
    const video: null | {
        embedUrl: string;
        title: string;
        heading: string;
        description: string;
    } = {
        embedUrl: "https://www.youtube-nocookie.com/embed/ue80QwXMRHg",
        title: "Thor: Ragnarok (2017) — Trailer oficial",
        heading: "Vídeo (apoio): quando o riso aparece antes da queda",
        description:
            "Repare como o trailer vende leveza e energia, mas já deixa pistas do núcleo emocional: ruptura, deslocamento e a sensação de que Thor está perdendo o chão — mesmo enquanto faz piada.",
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-thor-thor-ragnarok-analise"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-thor-thor-ragnarok-analise"
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
                        caption="Ragnarok troca a “pose de deus” por um Thor que sangra por dentro — e ri por fora."
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
                        id="tese"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        A tese: o riso como armadura
                    </h2>

                    <p className="mb-3">
                        <em>Thor: Ragnarok</em> parece um filme que decidiu trocar peso por energia: cores estouradas, ritmo rápido,
                        piadas em sequência e um visual que lembra um pôster neon que ganhou vida. Só que esse &quot;brilho pop&quot; não é
                        maquiagem para esconder o drama. Ele é o jeito que a história encontra para tornar a queda suportável — para
                        o público e, principalmente, para o próprio Thor.
                    </p>

                    <p className="mb-3">
                        Porque o que Ragnarok faz com o personagem não é uma &quot;reinvenção engraçadinha&quot;. É uma depuração cruel:
                        quando o mundo de Thor começa a ruir, ele não vira um herói mais sério, mais sombrio, mais fechado. Ele vira
                        um herói que aprende a se defender com leveza. Humor, aqui, não é só tom — é estratégia emocional. É o
                        mecanismo que mantém o personagem em movimento quando parar significaria encarar, de uma vez só, perdas
                        grandes demais para caberem numa única cena.
                    </p>

                    <p className="mb-3">
                        E é por isso que a comédia funciona tão bem: ela não reduz a tragédia, ela cria contraste. Quanto mais o filme
                        acelera e brinca, mais a gente percebe o vazio por trás do sorriso. Em vez de &quot;aliviar&quot;, o riso destaca a rachadura.
                        Thor não está fazendo graça porque está tudo bem — ele está fazendo graça porque, se a máscara cair, o colapso
                        vem junto. Ragnarok transforma o carisma em escudo e usa a leveza como uma forma de mostrar luto sem
                        melodrama.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: em Ragnarok, a comédia não &quot;alivia&quot; a tragédia — ela revela como Thor usa o riso
                                como armadura para não quebrar em público, mesmo quando tudo ao redor está desabando.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="comedia"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Comédia como linguagem do trauma
                    </h2>

                    <p className="mb-3">
                        Em muitos filmes, o humor funciona como tempero: entra para aliviar, suavizar ou quebrar a tensão.
                        Em <em>Ragnarok</em>, não. Aqui, o humor é mecanismo narrativo. É a engrenagem emocional que permite
                        que Thor continue andando quando o chão começa a ceder. Ele não faz piadas porque a situação é leve —
                        ele faz piadas porque precisa manter alguma sensação de controle enquanto perde o controle do próprio destino.
                    </p>

                    <p className="mb-3">
                        A grande inteligência do filme está em não transformar essa leveza em caricatura. Thor não vira
                        um herói &quot;bobo&quot; nem um alívio cômico ambulante. Ele continua decisivo, fisicamente imponente,
                        estrategicamente ativo. O que muda é a camada interna: existe um deslocamento emocional.
                        Ele fala rápido demais, ironiza demais, reage com graça demais — como alguém que está tentando
                        não sentir tudo de uma vez.
                    </p>

                    <p className="mb-3">
                        Esse detalhe muda completamente a leitura do personagem. O humor deixa de ser traço de personalidade
                        e vira sintoma. Não é só carisma: é defesa. Ragnarok entende algo que poucos filmes de herói exploram
                        com clareza — que a maturidade nem sempre aparece como silêncio solene; às vezes ela surge como
                        riso nervoso, como comentário atravessado, como energia exagerada para esconder o vazio.
                    </p>

                    <p className="mb-3">
                        E quanto mais o filme abraça esse ritmo acelerado e colorido, mais evidente fica a rachadura.
                        A comédia não reduz o trauma; ela cria contraste. E contraste faz a dor aparecer com mais nitidez.
                        Thor não está fugindo da responsabilidade — ele está tentando sobreviver emocionalmente a uma
                        sequência de rupturas que não dão tempo para luto organizado.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">O que muda em Ragnarok</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Nos primeiros filmes, Thor era o príncipe que precisava aprender humildade.
                                Em <em>Ragnarok</em>, ele aprende algo mais duro: nem toda perda tem compensação imediata,
                                nem toda dor vem acompanhada de vitória redentora. O humor deixa de ser charme
                                e vira cinto de segurança emocional — uma forma de continuar liderando
                                mesmo quando o mundo que ele conhecia está desaparecendo.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Em Ragnarok, rir não significa estar bem. Significa ainda não ter desmoronado.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="perdas"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Perdas gigantes (sem melodrama)
                    </h2>

                    <p className="mb-3">
                        <em>Thor: Ragnarok</em> é, no fundo, um filme sobre perdas em sequência. Algumas são íntimas,
                        outras são simbólicas; algumas atingem o homem, outras atingem o mito. Mas o roteiro não escolhe
                        o caminho mais fácil — não transforma cada ruptura em uma cena feita para arrancar lágrimas.
                        O objetivo não é fazer o público chorar a cada ato. É algo mais incômodo: mostrar que Thor vai
                        ficando sem chão enquanto o mundo continua exigindo que ele permaneça de pé.
                    </p>

                    <p className="mb-3">
                        Essa escolha narrativa é essencial para entender a maturidade do personagem. Lá atrás,
                        como analisado em{" "}
                        <Link
                            href="/filmes-series/marvel/thor/thor-no-mcu-evolucao#perdas"
                            className="text-slate-100 underline underline-offset-4 hover:text-slate-300"
                        >
                            O herói: perdas como treinamento emocional
                        </Link>
                        , as perdas funcionavam quase como etapas de aprendizado — golpes que ensinavam humildade,
                        responsabilidade e autocontrole. Em <em>Ragnarok</em>, o cenário muda. Aqui, a perda não parece
                        treinamento. Parece exaustão.
                    </p>

                    <p className="mb-3">
                        O filme não desacelera para transformar cada impacto em discurso. Ele acelera.
                        Ele colore. Ele brinca. E é justamente essa decisão que amplia o peso dramático.
                        Porque quando não há pausa para o luto tradicional, a sensação é de acúmulo.
                        Thor não está vivendo uma tragédia isolada — ele está acumulando rupturas
                        sem tempo para reorganizar a própria identidade.
                    </p>

                    <p className="mb-3">
                        O humor, então, funciona como amortecedor. Se ele parar para encarar tudo de uma vez,
                        ele paralisa. E o roteiro entende isso: mantém o personagem em movimento constante,
                        como alguém que sabe que, se ficar em silêncio por muito tempo, o silêncio vira abismo.
                        Não há melodrama porque não há espaço emocional seguro. Há sobrevivência.
                    </p>

                    <p className="mb-3">
                        E talvez esse seja o ponto mais adulto do filme: a vida raramente organiza o luto
                        em capítulos bem definidos. Às vezes, ela apenas empilha perdas e exige decisão.
                        Ragnarok captura essa sensação com precisão desconfortável — e é por isso que,
                        quando a tragédia finalmente se impõe, ela dói mais do que se o filme tivesse
                        pedido nossa emoção de forma explícita.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="asgard"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Asgard não é lugar: é pertencimento
                    </h2>

                    <p className="mb-3">
                        A grande virada emocional de <em>Thor: Ragnarok</em> não está apenas naquilo que o protagonista
                        perde, mas naquilo que ele é obrigado a redefinir. Até aqui, Asgard sempre foi apresentada como
                        símbolo máximo de poder: palácios dourados, linhagem real, tradição, autoridade divina.
                        Em <em>Ragnarok</em>, esse símbolo é desmontado. E o que sobra não é ruína — é revelação.
                    </p>

                    <p className="mb-3">
                        O filme desloca o significado de Asgard do espaço físico para o campo simbólico.
                        Ela deixa de ser &quot;castelo e coroa&quot; e passa a ser comunidade, memória, continuidade.
                        Essa mudança é profunda porque altera o centro do conflito: Thor já não luta
                        para preservar estruturas. Ele luta para preservar pessoas.
                    </p>

                    <p className="mb-3">
                        Isso é maturidade narrativa. Porque existe uma diferença brutal entre perder um endereço
                        e perder uma identidade. Endereços podem ser reconstruídos. Identidades, não.
                        Quando o filme retira o chão físico de Thor, ele força o personagem a descobrir
                        onde realmente está sua responsabilidade. Não na arquitetura, mas na liderança.
                    </p>

                    <p className="mb-3">
                        E é nesse ponto que o herói se humaniza de verdade. Ele não está tentando salvar
                        um império para manter a própria imagem. Ele está tentando impedir que seu povo
                        desapareça da história. A batalha deixa de ser sobre vitória e passa a ser
                        sobre continuidade. Não é mais sobre glória — é sobre sobrevivência.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        A coragem aqui não é atacar: é continuar existindo
                    </h3>

                    <p className="mb-3">
                        Em muitos filmes de super-herói, coragem é avançar contra o inimigo,
                        enfrentar o vilão, erguer a arma e declarar superioridade.
                        Em <em>Ragnarok</em>, coragem assume outra forma.
                    </p>

                    <p className="mb-3">
                        Coragem é aceitar que o passado não volta. É liderar mesmo quando o cenário
                        já não oferece estabilidade. É carregar a vergonha, a dor, o vazio —
                        e ainda assim se colocar à frente. Thor não prova seu valor ao destruir;
                        ele prova seu valor ao sustentar o que resta.
                    </p>

                    <p className="mb-3">
                        E talvez essa seja a camada mais adulta do filme: entender que existir,
                        depois da queda, é um ato de resistência. Quando Asgard deixa de ser um lugar
                        e vira uma ideia, o herói também deixa de ser um símbolo estático
                        e vira alguém que precisa decidir, conscientemente, continuar.
                    </p>

                    <h2
                        id="identidade"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Quem é Thor sem martelo?
                    </h2>

                    <p className="mb-3">
                        <em>Thor: Ragnarok</em> atinge um dos pilares mais sólidos do personagem:
                        durante anos, Thor foi &quot;o deus com um símbolo&quot;. O martelo não era apenas
                        arma — era assinatura, validação, extensão de poder e de identidade.
                        Quando esse símbolo vira ausência, o filme não está apenas criando um choque visual.
                        Está provocando uma crise existencial.
                    </p>

                    <p className="mb-3">
                        A ausência força maturidade. Pela primeira vez, Thor precisa encarar
                        uma pergunta desconfortável: seu poder vem do objeto ou de si mesmo?
                        Se a identidade depende de uma ferramenta, então ela é frágil.
                        E Ragnarok entende isso com precisão. Ao retirar o martelo,
                        o roteiro retira a muleta simbólica.
                    </p>

                    <p className="mb-3">
                        O filme não está dizendo que o martelo &quot;não importa&quot;.
                        Ele importa — e muito. O que a narrativa questiona é outra coisa:
                        o que acontece quando aquilo que sempre confirmou quem você é
                        deixa de existir? Se você só se reconhece por um objeto,
                        uma função ou um título, então ainda não aprendeu
                        a sustentar sua própria definição.
                    </p>

                    <p className="mb-3">
                        É aqui que Ragnarok dialoga diretamente com o amadurecimento do personagem.
                        Thor não perde apenas uma arma; ele perde a forma mais fácil de
                        se enxergar como herói. E, sem essa referência externa,
                        precisa reconstruir sua autopercepção do zero.
                        O poder deixa de ser algo que ele empunha.
                        Passa a ser algo que ele assume.
                    </p>

                    <p className="mb-3">
                        Essa mudança é sutil, mas profunda. Enquanto outros filmes de super-herói
                        reforçam o vínculo entre herói e artefato, Ragnarok faz o movimento inverso:
                        desmonta o símbolo para revelar a essência. A identidade não pode depender
                        do que se segura nas mãos — ela precisa sobreviver quando as mãos estão vazias.
                    </p>

                    <p className="mb-3">
                        E talvez essa seja a maior provocação do filme: Thor só descobre
                        quem é quando deixa de se apoiar naquilo que sempre o definiu.
                        O martelo não criava o deus. O martelo confirmava uma versão
                        ainda imatura dele. Quando ele desaparece, sobra algo mais difícil —
                        e mais verdadeiro.
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
                        id="taika"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O estilo visual como contraste
                    </h2>

                    <p className="mb-3">
                        O visual exagerado de <em>Thor: Ragnarok</em> não é apenas uma escolha estética ousada.
                        Ele é parte ativa do discurso do filme. As cores saturadas, os cenários quase
                        psicodélicos e a trilha energética criam uma atmosfera vibrante — mas essa vibração
                        não suaviza o drama. Ela o enquadra. Quanto mais colorido o mundo parece,
                        mais evidente se torna aquilo que está rachando por dentro.
                    </p>

                    <p className="mb-3">
                        Existe uma estratégia narrativa nessa decisão. Em vez de pintar a tragédia
                        com tons cinzentos e silêncios solenes, o filme opta por contraste.
                        E contraste amplia percepção. Quando o ambiente é leve, a ruptura emocional
                        se destaca com mais força. O brilho não esconde o colapso; ele o evidencia.
                    </p>

                    <p className="mb-3">
                        Esse jogo visual também reforça a sensação de deslocamento de Thor.
                        O universo ao redor pulsa com energia, mas ele atravessa essa energia
                        enquanto redefine quem é. O caos pode ter neon, humor e ritmo acelerado —
                        mas continua sendo caos. E aprender a existir dentro desse caos,
                        sem endurecer por completo, é parte do amadurecimento do personagem.
                    </p>

                    <p className="mb-3">
                        O estilo visual, portanto, não está ali para “deixar o filme mais divertido”.
                        Está ali para criar tensão entre forma e conteúdo. A estética comunica movimento,
                        mas a narrativa fala de ruptura. A tela explode em cor, enquanto o protagonista
                        aprende a lidar com perdas profundas. É uma escolha arriscada — e justamente
                        por isso tão eficaz.
                    </p>

                    <p className="mb-3">
                        Ao final, o impacto não vem só da história contada, mas da maneira como ela
                        é apresentada. O contraste entre espetáculo e fragilidade humana transforma
                        Ragnarok em algo mais do que uma comédia vibrante. Ele vira um estudo sobre
                        como o brilho externo pode coexistir com rachaduras internas — e como,
                        mesmo cercado de caos visual, Thor precisa encontrar estabilidade emocional.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        <em>Thor: Ragnarok</em> representa uma virada porque entende uma verdade que nem todo filme de herói
                        tem coragem de assumir: existe um tipo de amadurecimento que não nasce da vitória,
                        mas da perda. Nem toda evolução vem acompanhada de triunfo épico.
                        Às vezes, ela surge quando o personagem percebe que não conseguirá consertar tudo —
                        e mesmo assim decide continuar.
                    </p>

                    <p className="mb-3">
                        O humor, nesse contexto, não diminui o herói. Ele revela o esforço para permanecer inteiro.
                        Cada piada carrega uma tentativa de manter estabilidade emocional.
                        Cada resposta espirituosa é uma forma de não permitir que o peso se torne paralisante.
                        A leveza não é fuga; é mecanismo de sobrevivência.
                    </p>

                    <p className="mb-3">
                        Ao longo do filme, a armadura simbólica de Thor muda.
                        O que antes era sustentado por símbolo, território e poder externo
                        passa a depender de responsabilidade, liderança e definição interna.
                        A coroa deixa de ser ornamento e vira compromisso.
                        A força deixa de ser instrumento de afirmação e vira suporte coletivo.
                    </p>

                    <p className="mb-3">
                        Ragnarok não entrega o &quot;Thor engraçado&quot; como simplificação.
                        Entrega o Thor que ri para não desabar.
                        O Thor que entende que perder faz parte da formação.
                        O Thor que descobre que identidade não é o que se empunha,
                        mas o que se sustenta quando tudo ao redor cai.
                    </p>

                    <p>
                        No fim, o filme não celebra apenas espetáculo ou reinvenção estética.
                        Ele consolida um estágio mais adulto do personagem.
                        Thor não sai maior porque venceu.
                        Sai mais consciente porque aprendeu a carregar.
                        E essa diferença redefine o herói para o que vem depois.
                    </p>

                    {/* CTA interno — sequência editorial Thor */}
                    <ContinueNoLexara
                        description="Se este foi seu ponto de partida no arco do Ragnarok, aqui vai a sequência natural para ver como Thor transforma perda em identidade — e como isso ecoa depois do MCU apertar ainda mais."
                        links={[
                            {
                                href: "/filmes-series/marvel/thor/mjolnir-stormbreaker-identidade",
                                label: "Próximo: Mjölnir x Stormbreaker — identidade e poder",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/marvel/thor/thor-pos-endgame-luto-sentido",
                                label: "Depois: Thor pós-Endgame — luto, humor e sentido",
                            },
                            {
                                href: "/filmes-series/marvel/thor/thor-no-mcu-evolucao",
                                label: "Voltar: Thor no MCU — do deus arrogante ao herói",
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
                        Toda análise parte de uma base concreta. Os dados abaixo — créditos oficiais,
                        ficha técnica, informações de produção e desempenho comercial — servem como
                        referência verificável para o universo discutido neste artigo.
                        A interpretação, no entanto, é construída a partir de leitura crítica
                        própria, alinhada à proposta editorial do LEXARA: entender personagem,
                        linguagem e simbolismo além da superfície.
                    </p>

                    <p className="mb-3">
                        <em>Thor: Ragnarok</em> não é analisado aqui apenas como entretenimento,
                        mas como peça narrativa dentro do MCU. Por isso, além de dados técnicos,
                        consideramos contexto de estúdio, posicionamento cronológico na franquia
                        e escolhas criativas que impactam diretamente a construção do herói.
                    </p>

                    <p className="mb-3">
                        As fontes a seguir garantem a base factual.
                        A leitura interpretativa é responsabilidade editorial do LEXARA.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.marvel.com/" rel="noreferrer noopener" target="_blank">
                                Marvel (site oficial) — personagens, cronologia e catálogo do MCU
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/" rel="noreferrer noopener" target="_blank">
                                IMDb — Thor: Ragnarok (2017), créditos completos e ficha técnica
                            </a>
                        </li>
                        <li>
                            <a href="https://www.boxofficemojo.com/" rel="noreferrer noopener" target="_blank">
                                Box Office Mojo — desempenho de bilheteria e dados de mercado
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> esta análise prioriza linguagem narrativa,
                        construção de personagem e coerência temática dentro do MCU.
                        Informações de estúdio, calendários e planos futuros podem sofrer alterações.
                        O compromisso aqui é com interpretação responsável, não com especulação.
                    </p>
                </section>

                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em <span className="text-slate-300">{article.publishedAtLabel ?? article.publishedAtISO}</span>.{" "}
                        <span className="text-slate-500">({formatISOToDateLabel(article.publishedAtISO)})</span>
                    </p>
                </footer>
            </article>
        </>
    );
}
