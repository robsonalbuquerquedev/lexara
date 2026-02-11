import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type HomemDeFerro2E3EvolucaoMcuProps = {
    article: Article;
};

const SECTIONS = [
    { id: "por-que-essas-sequencias-importam", label: "Por que 2 e 3 importam" },
    { id: "homem-de-ferro-2-expande-o-mapa", label: "Homem de Ferro 2: expansão e ruído" },
    { id: "o-humor-como-ajuste-de-tom", label: "Humor: ferramenta ou muleta?" },
    { id: "homem-de-ferro-3-trauma-e-identidade", label: "Homem de Ferro 3: trauma e identidade" },
    { id: "o-que-o-mcu-aprende-aqui", label: "O que o MCU aprende aqui" },
    { id: "video", label: "Vídeo (apoio): trailer oficial" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    // Se você já tem util global, troque por ele.
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

export default function HomemDeFerro2E3EvolucaoMcu({
    article,
}: HomemDeFerro2E3EvolucaoMcuProps) {
    // ✅ Publicação programada: antes do horário, o artigo NÃO existe publicamente.
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
            { "@type": "Thing", name: "Homem de Ferro" },
            { "@type": "Thing", name: "Tony Stark" },
            { "@type": "Thing", name: "MCU" },
            { "@type": "Thing", name: "Marvel Studios" },
        ],
    };

    const jsonLdBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            breadcrumbItem("Filmes & Séries", "/filmes-series", 1),
            breadcrumbItem("MARVEL", article.categoryHref, 2),
            breadcrumbItem("Homem de Ferro", article.topicHref, 3),
            breadcrumbItem(article.title, article.slug, 4),
        ],
    };

    // ✅ Vídeo (apoio editorial): trailer oficial (YouTube no-cookie)
    const video = {
        embedUrl: "https://www.youtube-nocookie.com/embed/wKtcmiifycU",
        title: "Iron Man 3 (2013) — Trailer oficial",
        heading: "Vídeo (apoio): quando o MCU testa a mistura",
        description:
            "Assista ao trailer para perceber o novo peso emocional (ansiedade, trauma e identidade) convivendo com humor e set pieces maiores. É um bom termômetro do “ajuste de tom” pós-Vingadores.",
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-homem-de-ferro-2-e-3-evolucao-mcu"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-homem-de-ferro-2-e-3-evolucao-mcu"
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
                            title="Ver a seção Homem de Ferro"
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
                        caption="Do laboratório ao palco global: aqui o MCU aprende a calibrar espetáculo, humor e drama."
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
                        id="por-que-essas-sequencias-importam"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Por que 2 e 3 importam
                    </h2>

                    <p className="mb-3">
                        O primeiro{" "}
                        <Link
                            href="/filmes-series/marvel/homem-de-ferro/2008-nascimento-mcu"
                            className="font-medium text-amber-400 hover:text-amber-300"
                        >
                            <em>Homem de Ferro (2008)</em>
                        </Link>{" "}
                        é fundação: ele define o &quot;sabor&quot; do MCU antes mesmo de existir um MCU como
                        conhecemos — carisma como motor dramático, tecnologia como espetáculo narrativo e humor como linguagem de
                        personagem (não como distração). Por isso ele funciona como ponto zero: não é só um filme que deu certo,
                        é um filme que <strong>ensinou a Marvel a contar histórias em cinema</strong> com ritmo pop, risco real e uma
                        energia de improviso que parece viva.
                    </p>

                    <p className="mb-3">
                        Já <em>Homem de Ferro 2</em> e <em>Homem de Ferro 3</em> são o momento em que a promessa vira <strong>plano de expansão</strong>. O universo cresce, as peças do tabuleiro aumentam, e o protagonista
                        passa a carregar dois pesos ao mesmo tempo: ser Tony Stark (com todas as suas falhas) e ser um &quot;pilar&quot; de
                        franquia (com todas as suas responsabilidades). É aí que aparecem os atritos que definem o MCU por muitos
                        anos: quanto humor cabe sem virar muleta? Quanta dor pessoal dá para sustentar sem cair no melodrama?
                        Quanto &quot;universo compartilhado&quot; entra sem engolir o filme por dentro?
                    </p>

                    <p className="mb-3">
                        O ponto é que essas sequências não são apenas &quot;mais do mesmo&quot;. Elas funcionam como um laboratório de tom:
                        a Marvel tenta ampliar o espetáculo sem perder a intimidade do personagem, tenta colocar o mundo maior em
                        cena sem transformar a história em checklist de franquia. Quando isso dá certo, o MCU ganha musculatura.
                        Quando não dá, você sente aquele ruído típico de um universo que ainda está aprendendo a respirar:
                        personagens e tramas competindo por espaço, cenas que parecem carregar recado e não consequência.
                    </p>

                    <p className="mb-3">
                        Se o MCU virou um idioma global, <em>Homem de Ferro 2</em> e <em>3</em> são os filmes em que a franquia aprende
                        gramática. Nem sempre soa elegante — às vezes o texto fica &quot;alto&quot; demais, às vezes o ritmo quebra — mas o
                        método aparece. E é justamente por isso que eles são tão úteis para leitura crítica: aqui você enxerga o
                        MCU testando a mistura que depois vira padrão — ação, piada, trauma, legado, ameaça e espetáculo — tentando
                        manter coesão sem perder a leveza que o público associa à marca.
                    </p>

                    <p className="mb-3">
                        Em termos simples: o 2 e o 3 mostram a franquia descobrindo um problema que ela mesma criou. Quanto mais o
                        universo cresce, mais o personagem precisa disputar atenção com o próprio universo. E, no caso do Tony, isso
                        é ainda mais afiado — porque a armadura não é só visual, é metáfora de controle. Quanto maior o mundo lá fora,
                        maior a necessidade dele &quot;segurar&quot; tudo. E é desse atrito que nasce a mudança de tom: não como moda, mas como
                        consequência.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: a mudança de tom no MCU não acontece &quot;do nada&quot; — ela nasce quando o universo cresce
                                e o personagem precisa disputar espaço com a própria franquia.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="homem-de-ferro-2-expande-o-mapa"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Homem de Ferro 2: expansão e ruído
                    </h2>

                    <p className="mb-3">
                        O segundo filme carrega uma missão delicada: <strong>continuar sendo um filme sobre Tony Stark</strong> e,
                        simultaneamente, funcionar como engrenagem do universo em expansão da Marvel. Diferente do primeiro,
                        que podia concentrar toda a energia na origem e no carisma do protagonista, aqui a narrativa precisa
                        dividir atenção. Surge o chamado &quot;duplo foco&quot;: de um lado, a crise interna — o corpo falhando, o peso
                        do legado, a autodestruição disfarçada de confiança; do outro, a ampliação do tabuleiro, com novas peças,
                        novas forças e a promessa de algo maior no horizonte.
                    </p>

                    <p className="mb-3">
                        Essa tensão estrutural molda o tom do filme. Quando a história consegue integrar expansão e intimidade,
                        o MCU ganha musculatura dramática: o mundo cresce sem engolir o personagem. Mas quando o equilíbrio
                        falha, surge a sensação de que o filme está cumprindo tarefas externas — plantando sementes, organizando
                        futuras conexões, preparando terreno — enquanto a jornada emocional do Tony perde nitidez. Não é
                        falta de energia. É excesso de agenda narrativa.
                    </p>

                    <p className="mb-3">
                        E é justamente nesse ponto que o ruído aparece. A expansão do universo compartilhado exige que cada
                        filme seja mais do que autônomo: ele precisa dialogar com o que veio antes e preparar o que virá depois.
                        Isso fortalece a ideia de continuidade — algo que se tornaria marca registrada do MCU — mas também
                        impõe uma nova responsabilidade dramática. O protagonista deixa de ser apenas centro da própria história
                        e passa a ser peça estratégica de uma arquitetura maior.
                    </p>

                    <p className="mb-3">
                        Em termos de construção narrativa, <em>Homem de Ferro 2</em> é o primeiro grande teste do modelo &quot;filme-capítulo&quot;.
                        Ele ainda precisa emocionar, divertir e desenvolver personagem, mas agora também precisa sustentar
                        expectativas de franquia. O resultado é um filme que oscila entre brilho e sobrecarga — e, exatamente por
                        isso, se torna fundamental para entender como o MCU aprende a calibrar ambição e foco.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">O que muda aqui</p>
                            <p className="mt-2 text-sm text-slate-300">
                                O MCU começa a exigir que cada filme funcione como &quot;história individual + capítulo de saga&quot;.
                                Isso amplia a sensação de universo vivo, interligado e estratégico, mas cria um novo risco:
                                o protagonista pode deixar de conduzir a narrativa para apenas hospedar acontecimentos.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                A armadura cresce… e a pressão também. Quanto maior o mundo ao redor de Tony Stark,
                                maior a necessidade dele provar controle — e maior o desgaste interno.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="o-humor-como-ajuste-de-tom"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Humor: ferramenta ou muleta?
                    </h2>

                    <p className="mb-3">
                        O humor sempre fez parte do DNA de Tony Stark. Ele não é apenas um traço de personalidade —
                        é mecanismo de defesa, estratégia de charme e forma de manter controle em ambientes hostis.
                        No primeiro <em>Homem de Ferro</em>, a ironia funciona como assinatura autoral: revela inteligência,
                        insegurança e até fragilidade sem precisar nomear esses sentimentos. O riso nasce do personagem,
                        não da situação isolada — algo que já exploramos ao analisar{" "}
                        <Link
                            href="/filmes-series/marvel/homem-de-ferro/tony-stark-personagem#humor-como-arma"
                            className="font-medium text-amber-400 hover:text-amber-300"
                        >
                            o humor como arma na construção do Tony
                        </Link>.
                    </p>

                    <p className="mb-3">
                        Nas sequências, porém, o humor ganha uma nova função dentro do MCU: ele vira <strong>mecanismo de calibragem de tom</strong>. Quando a trama escurece — seja pela pressão pública,
                        pelo desgaste físico ou pelo trauma pós-grandes-eventos — a piada entra como válvula de escape.
                        Isso não é um erro automático. Pelo contrário: pode ser uma ferramenta sofisticada de ritmo.
                        A questão é como e por que ela aparece.
                    </p>

                    <p className="mb-3">
                        Existe uma diferença decisiva entre humor que revela personagem e humor que interrompe emoção.
                        Quando a piada surge como extensão da mente hiperativa de Tony, ela aprofunda a experiência:
                        mostra desconforto, ansiedade, necessidade de dominar a cena. Mas quando aparece para aliviar
                        tensão antes que o conflito amadureça, ela quebra o impacto dramático. A sensação é de que a
                        narrativa não confia totalmente no peso da própria cena.
                    </p>

                    <p className="mb-3">
                        É nesse equilíbrio instável que o MCU começa a definir sua identidade tonal. A mistura de ação,
                        espetáculo e leveza passa a ser marca registrada da franquia, mas <em>Homem de Ferro 2</em> e <em>3</em> expõem o processo de aprendizagem. O estúdio testa até onde pode ir sem comprometer
                        consequência emocional. Às vezes acerta a mão; outras vezes, a leveza parece entrar antes da hora.
                    </p>

                    <p className="mb-3">
                        No fundo, a pergunta não é se o MCU deve ser engraçado. A pergunta é se o humor está a serviço
                        da história ou se a história está se curvando ao humor. E, nesses filmes, a Marvel começa a
                        entender que o tom não se define apenas pelo que faz rir — mas pelo que ela decide sustentar
                        quando o riso termina.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="homem-de-ferro-3-trauma-e-identidade"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Homem de Ferro 3: trauma e identidade
                    </h2>

                    <p className="mb-3">
                        O terceiro filme representa a virada emocional mais explícita da trilogia. Diferente do segundo,
                        que estava ocupado expandindo o universo, aqui o foco se desloca para dentro. O pós-grande-evento
                        não é tratado como espetáculo, mas como consequência psicológica. O mundo já foi ameaçado — e
                        salvo — mas o impacto permanece. Sem transformar a narrativa em drama puro, o filme assume que
                        existe um custo interno para quem esteve no centro do caos.
                    </p>

                    <p className="mb-3">
                        Essa abordagem marca um ponto importante na evolução do MCU: o herói deixa de ser apenas
                        engrenagem de franquia e volta a ser indivíduo. A armadura já não é símbolo exclusivo de poder,
                        mas também de compensação. O brilho tecnológico convive com fragilidade emocional. E isso altera
                        o tom do filme de forma sutil, porém decisiva. A ação continua presente, o humor ainda existe,
                        mas o eixo dramático agora é a instabilidade do próprio Tony.
                    </p>

                    <p className="mb-3">
                        Aqui o MCU começa a consolidar algo que definiria seus personagens por anos:
                        <strong>o herói como pessoa antes do herói como função narrativa</strong>. Não é apenas sobre
                        upgrades ou novas ameaças. É sobre identidade. Quem é Tony Stark quando a armadura falha?
                        Quem ele é quando não consegue antecipar o próximo risco? E, mais importante, quem ele é
                        quando o controle — sua maior obsessão — escapa?
                    </p>

                    <p className="mb-3">
                        Em termos de construção de personagem, <em>Homem de Ferro 3</em> desloca o conflito do exterior
                        para o interior. A batalha não é apenas contra vilões ou forças maiores, mas contra ansiedade,
                        medo e a necessidade constante de provar valor. O filme sugere que tecnologia pode ampliar
                        poder, mas não resolve vulnerabilidade. E essa constatação adiciona uma camada que o primeiro
                        filme não precisava explorar.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        A pergunta central
                    </h3>

                    <p className="mb-3">
                        Se a armadura é a resposta, qual é a pergunta? O terceiro filme insinua que a pergunta nunca foi
                        apenas &quot;como salvar o mundo?&quot;, mas &quot;como manter controle quando o mundo foge do controle?&quot;.
                        A necessidade de antecipar ameaças, construir defesas e prever cenários não nasce do heroísmo —
                        nasce do medo. Medo de falhar. Medo de perder. Medo de não ser suficiente sem a própria criação.
                    </p>

                    <p className="mb-3">
                        Essa é a camada que torna o filme relevante dentro da trajetória do MCU. Ele mostra que o
                        espetáculo pode coexistir com consequência emocional. E, ao fazer isso, prepara o terreno para
                        um universo em que grandes eventos deixam marcas duradouras nos personagens — não apenas
                        cicatrizes visuais, mas internas.
                    </p>

                    <h2
                        id="o-que-o-mcu-aprende-aqui"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O que o MCU aprende aqui
                    </h2>

                    <p className="mb-3">
                        As sequências de <em>Homem de Ferro</em> não são apenas continuações narrativas — elas funcionam
                        como laboratório estrutural do próprio MCU. É aqui que a Marvel testa os limites do modelo
                        &quot;universo compartilhado&quot; e começa a perceber duas lições fundamentais que moldariam a franquia
                        por mais de uma década. A primeira é clara: <strong>expansão precisa de foco</strong>. Quando o
                        filme tenta acomodar personagens, ganchos futuros e promessas de saga sem uma linha emocional
                        sólida, a narrativa corre o risco de virar uma lista de recados disfarçada de blockbuster.
                    </p>

                    <p className="mb-3">
                        A segunda lição é ainda mais delicada: <strong>tom é contrato com o público</strong>. O espectador
                        aceita mudanças — mais drama, mais humor, mais escala — desde que exista coerência interna.
                        O MCU descobre que alterar o equilíbrio entre ação, comédia e consequência não significa
                        abandonar identidade, mas recalibrá-la. E recalibrar exige consciência: saber quando aliviar,
                        quando sustentar e quando permitir que o silêncio carregue peso.
                    </p>

                    <p className="mb-3">
                        O ajuste de tom, portanto, não é simplesmente &quot;ficar mais sério&quot; ou &quot;ficar mais engraçado&quot;.
                        É aprender a dosar camadas sem romper a experiência acumulada. Em <em>Homem de Ferro 2</em>,
                        a expansão tensiona o foco. Em <em>Homem de Ferro 3</em>, a introspecção testa o limite
                        emocional da marca. Juntos, os dois filmes revelam um processo de amadurecimento: o MCU
                        entende que espetáculo sem consequência cansa, mas consequência sem leveza descaracteriza.
                    </p>

                    <p className="mb-3">
                        E é justamente por isso que Tony Stark se torna peça-chave nesse aprendizado. Ele é humano
                        demais para ser apenas símbolo e carismático demais para ser tratado como função. Sua
                        instabilidade emocional, sua ironia constante e sua obsessão por controle fazem dele
                        o campo de testes ideal para a franquia equilibrar ambição e intimidade. Ao ajustar o
                        personagem, o MCU ajusta a si mesmo.
                    </p>

                    <p className="mb-3">
                        Em retrospecto, essas sequências mostram que a Marvel não acerta por acaso — ela aprende
                        em público. Cada oscilação de tom, cada excesso de informação e cada virada emocional
                        alimentam a construção de um modelo que, nos anos seguintes, se tornaria referência
                        de continuidade e coesão no cinema de super-heróis. O MCU descobre aqui que crescer
                        é inevitável — mas crescer com identidade é escolha.
                    </p>

                    <div id="video" className="scroll-mt-24" />

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
                        <em>Homem de Ferro 2</em> e <em>Homem de Ferro 3</em> funcionam menos como simples continuações
                        e mais como termômetros da ambição do MCU. Eles revelam uma franquia tentando expandir
                        escala, aprofundar consequências e consolidar um universo compartilhado sem perder o
                        carisma que a tornou relevante. Ao mesmo tempo, mostram Tony Stark lutando para não
                        se tornar apenas símbolo institucional — ou mascote de uma marca — mas permanecer
                        personagem com falhas, medo e identidade própria.
                    </p>

                    <p className="mb-3">
                        Quando o tom muda, não é necessariamente ruptura: é recalibração. O ajuste pode soar
                        irregular em alguns momentos, mas ele nasce de uma necessidade real — equilibrar
                        espetáculo, humor e consequência emocional dentro de um modelo que ainda estava
                        sendo construído. A questão central não é se a mudança acontece, mas se ela respeita
                        o personagem. E é justamente nesse ponto que essas sequências se tornam tão reveladoras
                        para entender a evolução do MCU.
                    </p>

                    <p className="mb-3">
                        Se o primeiro filme estabeleceu o DNA narrativo da Marvel nos cinemas, aqui vemos
                        o organismo em movimento, reagindo a pressões externas e internas. O universo cresce,
                        as expectativas aumentam e a responsabilidade dramática se torna mais complexa.
                        Manter consistência tonal enquanto se amplia escopo é um desafio maior do que
                        construir qualquer armadura — porque exige coerência, não apenas tecnologia.
                    </p>

                    <p>
                        No fim, essas obras mostram que o sucesso do MCU não está apenas na expansão,
                        mas na capacidade de aprender em público. Cada oscilação de foco, cada teste
                        de humor e cada mergulho emocional ajudam a moldar o modelo que dominaria o
                        cinema de super-heróis nos anos seguintes. E Tony Stark, com toda sua humanidade
                        imperfeita, foi o campo de testes ideal para essa transformação.
                    </p>

                    {/* CTA interno — sequência editorial Homem de Ferro */}
                    <ContinueNoLexara
                        description="Se este foi seu ponto de partida, aqui está a sequência natural para entender o Tony como personagem e o impacto dele no MCU."
                        links={[
                            {
                                href: "/filmes-series/marvel/homem-de-ferro/2008-nascimento-mcu",
                                label: "Começar pelo início: Homem de Ferro (2008) e o nascimento do MCU",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/marvel/homem-de-ferro/tony-stark-personagem",
                                label: "Tony Stark: carisma, ego e humanidade por trás da armadura",
                            },
                            {
                                href: "/filmes-series/marvel/homem-de-ferro/legado-tony-stark-mcu",
                                label: "Depois: o legado de Tony Stark e o efeito dominó no MCU",
                            },
                            {
                                href: "/filmes-series/marvel/homem-de-ferro",
                                label: "Voltar à seção Homem de Ferro",
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
                        As referências abaixo servem como base para informações verificáveis — como dados de produção,
                        elenco, desempenho comercial e posicionamento oficial dentro do catálogo da Marvel Studios.
                        Elas ajudam a situar <em>Homem de Ferro 2</em> e <em>Homem de Ferro 3</em> dentro do contexto mais amplo
                        do MCU, especialmente no que diz respeito à evolução do universo compartilhado no cinema.
                    </p>

                    <p className="mb-3">
                        A interpretação crítica, as conexões temáticas e a leitura sobre tom, identidade e construção
                        de personagem são originais do LEXARA. O objetivo não é apenas reunir informações,
                        mas organizá-las de forma coerente para compreender como essas sequências contribuíram
                        para o amadurecimento estrutural da franquia.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.marvel.com/" rel="noreferrer noopener" target="_blank">
                                Marvel (site oficial) — universo, personagens e catálogo institucional
                            </a>
                        </li>
                        <li>
                            <a href="https://www.marvel.com/movies" rel="noreferrer noopener" target="_blank">
                                Marvel — seção de filmes (cronologia e posicionamento no MCU)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/" rel="noreferrer noopener" target="_blank">
                                IMDb — ficha técnica, créditos e informações de produção
                            </a>
                        </li>
                        <li>
                            <a href="https://www.boxofficemojo.com/" rel="noreferrer noopener" target="_blank">
                                Box Office Mojo — dados de bilheteria e desempenho comercial
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> análises sobre franquias cinematográficas exigem cautela,
                        especialmente em universos em constante expansão como o MCU. Estratégias de estúdio,
                        planos de continuidade e interpretações oficiais podem evoluir ao longo do tempo.
                        A proposta aqui é mapear o que está consolidado em tela, mantendo distinção clara
                        entre fato verificável e leitura crítica.
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
