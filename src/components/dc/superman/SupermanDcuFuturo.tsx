import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type SupermanDcuFuturoProps = {
    article: Article;
};

const SECTIONS = [
    { id: "por-que-agora", label: "Por que o Superman virou o centro do DCU" },
    { id: "o-que-esta-em-jogo", label: "O que está em jogo no recomeço" },
    { id: "riscos-criativos", label: "Riscos criativos: tom, excesso e pressa" },
    { id: "peso-da-esperanca", label: "O peso da esperança: tema e identidade" },
    { id: "sinais-de-acerto", label: "Sinais de acerto (e o que observar)" },
    { id: "estrategia-dc", label: "Estratégia de universo: o filme como âncora" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    // Mantém simples e previsível. A label final já está pronta em ARTICLE.publishedAtLabel.
    return iso;
}

function isPublishedNow(publishedAtISO: string) {
    return Date.now() >= Date.parse(publishedAtISO);
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

export default function SupermanDcuFuturo({ article }: SupermanDcuFuturoProps) {
    // ✅ Publicação programada (#1): antes do horário, o artigo NÃO existe publicamente.
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
        about: [{ "@type": "Thing", name: "Superman" }, { "@type": "Thing", name: "DCU" }],
    };

    // 🔹 Schema
    const jsonLdBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            breadcrumbItem("Filmes & Séries", "/filmes-series", 1),
            breadcrumbItem("DC", article.categoryHref, 2),
            breadcrumbItem("Superman", article.topicHref, 3),
            breadcrumbItem(article.title, article.slug, 4),
        ],
    };

    // ✅ Vídeo (trailer apoio)
    const video = {
        embedUrl: "https://www.youtube-nocookie.com/embed/Ox8ZLF6cGM0",
        title: "Superman no DCU — Trailer oficial e pistas sobre o novo tom do universo",
        heading: "Vídeo (apoio): o trailer como termômetro do novo DCU",
        description:
            "O trailer oficial ajuda a observar escolhas de tom, atmosfera e ritmo do novo Superman. Mais do que antecipar cenas, ele oferece pistas sobre identidade, emoção e o tipo de esperança que o DCU pretende construir neste recomeço.",
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-superman-dcu-futuro"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-superman-dcu-futuro"
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
                            title="Ver a seção Superman"
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
                        caption="Um recomeço só funciona quando o símbolo volta a fazer sentido."
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
                        id="por-que-agora"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Por que o Superman virou o centro do DCU
                    </h2>

                    <p className="mb-3">
                        Quando um estúdio decide &quot;reiniciar&quot; um universo compartilhado, ele não está apenas trocando elenco, estética ou cronologia — ele está
                        pedindo ao público um tipo de confiança que não se compra com anúncio. O primeiro filme desse novo ciclo precisa parecer inevitável, como se a
                        escolha fosse a única que faz sentido para reabrir a porta e dizer: &quot;agora é daqui que tudo começa&quot;. E, dentro da DC, poucas decisões
                        carregam esse peso com a mesma clareza simbólica de colocar o Superman de volta no centro: ele é o personagem que historicamente organiza a
                        identidade do universo, porque tudo ao redor dele fica mais fácil de medir — tom, ética, emoção e ambição.
                    </p>

                    <p className="mb-3">
                        O Superman não é só um nome forte no cartaz. Ele funciona como um termômetro do projeto inteiro: se o filme acerta o tom do personagem, o público
                        entende rapidamente como esse DCU vai respirar. Isso significa definir, sem didatismo, qual é a combinação que o universo quer entregar daqui pra
                        frente — esperança sem ingenuidade, humanidade sem &quot;sermão&quot;, e escala épica sem virar barulho. Em outras palavras: o Superman é o teste de
                        qualidade do recomeço, porque ele expõe o que muitas franquias tentam esconder: a diferença entre um universo que tem alma e um universo que só tem
                        conexões.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: recomeço não é &quot;apagar o passado&quot;; é escolher um símbolo forte o bastante para puxar o futuro sem parecer
                                marketing.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="o-que-esta-em-jogo"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O que está em jogo no recomeço
                    </h2>

                    <p className="mb-3">
                        O primeiro risco é direto e difícil de contornar depois: se o Superman parecer &quot;genérico&quot;, o universo nasce sem identidade própria.
                        Em um cenário saturado de franquias, não basta ser funcional ou correto — é preciso ser reconhecível. A DC já passou por momentos em que
                        personagens isolados funcionaram, cenas específicas viralizaram e até filmes agradaram parte do público, mas a visão do todo nunca se
                        consolidou. Quando isso acontece, o universo não falha de imediato — ele simplesmente não cria vínculo, e sem vínculo não existe longevidade.
                    </p>

                    <p className="mb-3">
                        O segundo risco é mais silencioso, porém mais perigoso a médio prazo. Um filme pode ser tecnicamente bom, bem recebido pela crítica e ainda
                        assim falhar como âncora de universo se não deixar claro qual é a &quot;alma&quot; do DCU. Isso envolve decisões menos visíveis, mas fundamentais:
                        que tipo de conflito esse mundo privilegia, que tipo de humor é permitido sem quebrar o clima e, principalmente, que tipo de emoção a DC quer
                        provocar no espectador. Sem essa definição emocional, o universo até existe no papel, mas não se sustenta na memória do público.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">Checklist do &quot;filme-âncora&quot;</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Um bom começo precisa cumprir funções básicas antes de pensar em expansão: ser claro no tom, estabelecer um protagonista forte,
                                apresentar um conflito compreensível e ser simples de acompanhar. Só depois disso ele pode ser grande o bastante para abrir portas
                                narrativas — sem exigir &quot;dever de casa&quot; do público ou conhecimento prévio de um universo que ainda nem se provou relevante.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Quanto mais &quot;explicação de universo&quot; aparece antes do público se importar com o herói, maior é a sensação de artificialidade —
                                e maior o risco de rejeição precoce.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="riscos-criativos"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Riscos criativos: tom, excesso e pressa
                    </h2>

                    <p className="mb-3">
                        O Superman funciona plenamente quando o filme entende uma regra simples, mas frequentemente ignorada: poder não é o drama
                        principal — o drama é caráter. A força, a invulnerabilidade e a escala cósmica já estão garantidas; o que realmente sustenta
                        o personagem é a maneira como ele escolhe agir diante dessas capacidades. Quando a narrativa troca esse conflito interno
                        por uma obsessão com &quot;escala&quot;, o herói deixa de ser uma figura humana ampliada e passa a existir apenas como um
                        efeito especial bem-renderizado com capa.
                    </p>

                    <p className="mb-3">
                        O risco do &quot;excesso&quot; nasce exatamente desse desvio. Muitas participações especiais, muitas referências cruzadas e
                        explicações constantes sobre o universo podem parecer empolgantes no papel, mas tendem a diluir o protagonista dentro do
                        próprio filme. Em vez de guiar o olhar do espectador, a história se fragmenta em pequenas promessas de futuro. Em um
                        recomeço, isso é especialmente perigoso: antes de expandir o mundo, o filme precisa convencer o público de que vale a pena
                        habitar aquele ponto de vista específico.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="peso-da-esperanca"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O peso da esperança: tema e identidade
                    </h2>

                    <p className="mb-3">
                        &quot;Esperança&quot; é uma palavra fácil de usar e difícil de sustentar — justamente por isso ela costuma falhar quando vira apenas discurso.
                        No Superman, esperança não pode existir como conceito abstrato ou frase de efeito: ela precisa se manifestar em decisões pequenas,
                        quase silenciosas. Está em como ele escolhe salvar sem humilhar, em como escuta antes de agir e em como protege sem transformar o outro
                        em figurante do próprio heroísmo. Quando esses gestos aparecem com naturalidade, a ideia deixa de ser simbólica e passa a ser sentida.
                    </p>

                    <p className="mb-3">
                        Se o filme conseguir fazer a esperança parecer uma atitude constante — e não um slogan repetido — ele conquista algo raro no cinema de
                        super-heróis: um protagonista que inspira sem parecer propaganda. Esse tipo de identificação não nasce da grandiosidade, mas da coerência
                        entre poder e responsabilidade. O público não precisa que o Superman diga o que ele representa; precisa ver isso refletido nas escolhas
                        que ele faz quando ninguém está aplaudindo.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        O ponto mais difícil: ser &quot;leve&quot; sem ser &quot;bobo&quot;
                    </h3>

                    <p className="mb-3">
                        Existe uma diferença crucial entre &quot;mais luz&quot; e &quot;menos seriedade&quot;. Um tom mais otimista não exige histórias vazias nem
                        conflitos simplificados. A DC pode — e talvez precise — buscar um clima menos pesado sem abrir mão de maturidade, desde que a emoção
                        seja honesta e as decisões tenham consequência real. Ser leve, nesse contexto, significa confiar no público o bastante para não
                        subestimar o impacto emocional das escolhas, mesmo quando o mundo é salvo no final.
                    </p>

                    <h2
                        id="sinais-de-acerto"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Sinais de acerto (e o que observar)
                    </h2>

                    <p className="mb-3">
                        Alguns sinais de acerto são práticos e aparecem cedo na tela. Um Superman que conversa com pessoas comuns, que interage com a
                        cidade como parte dela — e não como algo acima ou distante — ajuda a ancorar o personagem no mundo que o cerca. Quando Metrópolis
                        parece viva, com cidadãos reagindo, errando e participando da narrativa, o universo deixa de ser cenário e passa a ter peso real.
                        Da mesma forma, um bom conflito não testa apenas força ou resistência, mas valores: o que o herói aceita perder, até onde ele vai
                        e que tipo de exemplo escolhe deixar.
                    </p>

                    <p className="mb-3">
                        Existe também um sinal menos visível, mas decisivo: o emocional. Quando o público sai do filme com vontade de ver mais daquele
                        mundo por causa do personagem — e não apenas pela curiosidade da próxima &quot;cena pós-créditos&quot; — algo deu certo. Esse tipo
                        de engajamento indica que a história criou vínculo, não dependência de promessa futura. Em um recomeço de universo, esse é talvez
                        o termômetro mais confiável de todos.
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
                        id="estrategia-dc"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Estratégia de universo: o filme como âncora
                    </h2>

                    <p className="mb-3">
                        No papel, o Superman é a escolha mais lógica para abrir caminho em um novo universo compartilhado. Ele é reconhecível,
                        carrega simbolismo histórico e funciona como referência ética para os outros personagens. Mas, na prática, o DCU só
                        começa a &quot;se explicar&quot; depois que o público sente que vale a pena permanecer ali. Antes de apresentar mapas,
                        cronologias ou conexões futuras, o filme precisa criar encanto — aquele tipo de envolvimento emocional que faz o
                        espectador confiar no mundo apresentado.
                    </p>

                    <p className="mb-3">
                        Essa ordem é decisiva. Primeiro, encanto. Depois, expansão. Quando essa lógica se inverte — expansão antes de encanto —
                        o risco é o universo nascer grande, mas frio: altamente conectado, cheio de promessas e referências, mas pouco amado.
                        Universos duradouros não se sustentam apenas por continuidade narrativa; eles sobrevivem porque o público quer voltar,
                        mesmo quando não há nenhuma promessa explícita do que vem a seguir.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        O futuro do Superman no DCU não depende apenas de &quot;acertar um filme&quot; do ponto de vista técnico ou comercial. Ele depende de algo
                        mais profundo: acertar o significado do personagem dentro desse novo contexto. O Superman só cumpre seu papel quando inspira por
                        escolhas conscientes — pela forma como age, protege e se posiciona — e não simplesmente por ser invencível ou maior do que tudo ao
                        seu redor.
                    </p>

                    <p className="mb-3">
                        Esse recomeço representa uma chance real de reposicionamento, mas também funciona como um teste definitivo de entendimento criativo.
                        Se o DCU compreender que esperança é construção diária, feita de atitudes e consequências, e não uma frase de efeito repetida em
                        discursos, o Superman volta naturalmente ao centro. Não por nostalgia, mas por relevância narrativa e emocional.
                    </p>

                    <p>
                        Se der certo, o ganho é enorme. A DC pode estabelecer um universo capaz de ser épico sem cair no cinismo, acessível sem ser raso
                        e popular sem perder identidade. Mais do que lançar um novo ciclo de filmes, seria a recuperação de um símbolo que faz sentido —
                        exatamente quando o cinema de super-heróis mais precisa disso.
                    </p>

                    {/* CTA interno — fechamento editorial (Superman no DCU) */}
                    <ContinueNoLexara
                        description="Quer ampliar o mapa do DCU com o mesmo olhar editorial? Compare os papéis simbólicos que estruturam esse universo: Batman como vigilância, custo e trauma; Superman como esperança, futuro e ideal; e a Mulher-Maravilha como ponte ética entre força e compaixão. Ver esses três eixos juntos ajuda a entender que &quot;recomeçar&quot; não é só trocar elenco — é redefinir valores."
                        links={[
                            {
                                href: "/filmes-series/dc/batman/batman-dcu-futuro",
                                label: "Batman no DCU",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/dc/mulher-maravilha/mulher-maravilha-futuro-dcu",
                                label: "Mulher-Maravilha no DCU",
                            },
                            {
                                href: "/filmes-series/dc/superman",
                                label: "Voltar à seção Superman",
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
                        As fontes listadas abaixo servem como base para informações verificáveis — como nomes envolvidos, projetos oficialmente
                        anunciados e o contexto geral de estúdio que cerca o novo DCU. Elas ajudam a situar o leitor dentro do que é público,
                        confirmado ou institucional. A análise, as leituras de impacto e as interpretações apresentadas ao longo do artigo,
                        no entanto, são resultado de curadoria editorial própria do LEXARA.
                    </p>

                    <ul>
                        <li>
                            <a
                                href="https://www.dc.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Site oficial da DC — comunicados institucionais, catálogos e posicionamento do estúdio
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.imdb.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                IMDb — créditos, filmografias, dados de produção e histórico de projetos
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.warnerbros.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Warner Bros. — contexto corporativo, estrutura de estúdio e projetos anunciados
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> esta análise adota uma abordagem intencionalmente cautelosa. Projetos de estúdio
                        estão sujeitos a mudanças de cronograma, escopo e direção criativa. O objetivo aqui não é vender certezas, mas mapear
                        expectativas, riscos e sinais com responsabilidade crítica.
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
