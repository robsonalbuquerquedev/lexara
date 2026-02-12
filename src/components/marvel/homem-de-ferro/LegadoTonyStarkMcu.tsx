import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type LegadoTonyStarkMcuProps = {
    article: Article;
};

const SECTIONS = [
    { id: "tese", label: "A tese: por que ele virou o coração" },
    { id: "tom", label: "O “tom Stark” como DNA do MCU" },
    { id: "arquitetura", label: "O arquiteto do universo: conexões e caos controlado" },
    { id: "emocao", label: "A emoção como tecnologia: humanidade por trás do metal" },
    { id: "heranca", label: "A herança: quem carrega o método Stark" },
    { id: "ponte-peter", label: "Ponte futura: Peter Parker e a ideia de “herdeiro”" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    const date = new Date(iso);

    try {
        return new Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }).format(date);
    } catch {
        return iso;
    }
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

export default function LegadoTonyStarkMcu({ article }: LegadoTonyStarkMcuProps) {
    // ✅ Publicação programada (#1): antes do horário, o artigo NÃO existe publicamente.
    if (!isPublishedNow(article.publishedAtISO)) {
        return (
            <section className="mx-auto max-w-2xl py-20 text-center">
                <h1 className="text-2xl font-bold">Publicação programada</h1>

                <p className="mt-4 text-slate-400">
                    Este artigo ficará disponível em{" "}
                    <span className="text-slate-200">{formatISOToDateLabel(article.publishedAtISO)}</span>.
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
            { "@type": "Thing", name: "Marvel" },
            { "@type": "Thing", name: "MCU" },
            { "@type": "Thing", name: "Homem de Ferro" },
            { "@type": "Thing", name: "Tony Stark" },
            { "@type": "Thing", name: "Vingadores" },
            { "@type": "Thing", name: "Peter Parker" },
        ],
    };

    // 🔹 Schema
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
                id="ld-article-homem-de-ferro-legado-tony-stark-mcu"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-homem-de-ferro-legado-tony-stark-mcu"
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
                        publishedAtLabel={article.publishedAtLabel ?? formatISOToDateLabel(article.publishedAtISO)}
                    />

                    <ArticleCover
                        src={article.coverImage.src}
                        alt={article.coverImage.alt}
                        caption="O MCU nasceu com um personagem que parecia impossível — e virou a régua emocional do universo."
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
                        A tese: por que ele virou o coração
                    </h2>

                    <p className="mb-3">
                        O MCU não começou como &quot;um universo&quot;. Começou como um risco calculado: um estúdio apostando alto em um personagem
                        que não era a escolha óbvia do grande público, em um filme que precisava funcionar sozinho e, ao mesmo tempo,
                        sugerir que algo maior podia nascer dali. O plano não era vender &quot;saga&quot;. Era vender uma ideia simples — e difícil:
                        um herói que parece brilhante por fora, mas está em colapso por dentro.
                    </p>

                    <p className="mb-3">
                        Tony Stark inaugura esse tom porque ele não chega como símbolo pronto. Ele chega como problema andando: ego,
                        arrogância, excesso de confiança, uma relação perigosa com poder e uma facilidade quase assustadora de transformar
                        qualquer conversa em palco. Só que, ao contrário de muitos protagonistas &quot;invencíveis&quot;, Tony é bom de assistir
                        justamente porque é falho. Ele fala demais, erra demais, provoca demais — e, quando o mundo cobra a conta, ele não
                        tem para onde correr além de encarar o que ele mesmo criou.
                    </p>

                    <p className="mb-3">
                        É aí que o MCU encontra seu motor emocional. Quando Tony funciona, ele faz algo raro em franquias gigantes:
                        ele transforma espetáculo em sentimento. A armadura chama atenção — mas a retenção vem do humano lá dentro, tentando
                        ser melhor do que era ontem, sem perder o vício do aplauso e sem saber muito bem como pedir perdão. O público não
                        volta só para ver upgrades, vilões e explosões; volta para acompanhar uma pessoa que vive como se pudesse controlar
                        tudo… até perceber que algumas coisas não se resolvem com dinheiro, nem com genialidade.
                    </p>

                    <p className="mb-3">
                        Por isso, falar em &quot;legado&quot; aqui não é só lembrar cenas marcantes ou repetir o caminho até o sacrifício final.
                        É entender por que Tony vira o coração do MCU: ele dá ao universo um jeito de respirar. Ele permite que o mesmo filme
                        tenha humor e peso, coragem e medo, arrogância e arrependimento — e ainda pareça coerente. E, quando um universo
                        aprende a contar histórias nesse ritmo, ele consegue sobreviver até quando seu personagem central sai de cena.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: o legado de Tony não é &quot;ser o mais forte&quot;. É ter virado o padrão do MCU
                                para carisma, consequência e coração.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="tom"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O &quot;tom Stark&quot; como DNA do MCU
                    </h2>

                    <p className="mb-3">
                        O MCU aprendeu cedo uma lição que muitas franquias demoram anos para entender: humor não precisa
                        enfraquecer o drama — ele pode ser o jeito mais honesto de encarar o medo. Tony Stark faz piada
                        quando está acuado, provoca quando está inseguro e ironiza quando a situação ameaça sair do
                        controle. Isso não é só estilo; é mecanismo de defesa. E quando o público percebe isso, o riso
                        deixa de ser superficial e passa a revelar algo sobre o personagem.
                    </p>

                    <p className="mb-3">
                        Esse padrão vira linguagem. A leveza aparece na superfície — diálogos rápidos, tiradas espirituosas,
                        referências pop — mas por baixo existe tensão real, responsabilidade real e consequências reais.
                        O &quot;tom Stark&quot; ensina ao MCU que o espetáculo pode ser divertido sem ser vazio. A ação pode ser
                        grandiosa, mas precisa ter um custo emocional. Quando esse equilíbrio funciona, o universo parece
                        coeso. Quando falha, o público sente que a piada substituiu o peso — e não dialogou com ele.
                    </p>

                    <p className="mb-3">
                        Aos poucos, esse equilíbrio (charmoso, rápido, moderno) deixa de ser característica individual
                        e vira identidade do Universo Cinematográfico da Marvel. Outros filmes passam a falar esse mesmo
                        &quot;idioma&quot;: humor como válvula de escape, drama como consequência inevitável. Nem todos alcançam
                        a mesma precisão, mas quase todos seguem a mesma intenção narrativa — manter o público envolvido,
                        sorrindo, enquanto algo maior está em jogo.
                    </p>

                    <p className="mb-3">
                        É por isso que o legado de Tony não é apenas cronológico; é estrutural. Ele estabelece o padrão
                        de ritmo, diálogo e construção emocional que sustenta a franquia por anos. Mesmo quando ele não
                        está em cena, o universo ainda respira no compasso que ele ajudou a definir. O &quot;tom Stark&quot; vira
                        DNA — algo que não se vê diretamente, mas que molda tudo o que cresce a partir dele.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">O truque que virou fórmula</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Tony não &quot;alivia&quot; a cena — ele revela o personagem. Quando ele brinca, está se protegendo.
                                Quando provoca, está escondendo medo. O MCU adotou essa dinâmica como assinatura narrativa:
                                humor como camada visível, vulnerabilidade como estrutura invisível. E, quando o equilíbrio
                                se perde, o público percebe rapidamente.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Carisma + consequência: a combinação que transformou o MCU em fenômeno global.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="arquitetura"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O arquiteto do universo: conexões e caos controlado
                    </h2>

                    <p className="mb-3">
                        Tony Stark vira um eixo no MCU porque ele nunca existe apenas &quot;no próprio filme&quot;. Desde o início,
                        suas decisões ultrapassam fronteiras individuais e atravessam o universo compartilhado: tecnologia
                        que redefine batalhas, alianças que moldam equipes, conflitos que geram divisões internas. Ele não
                        é só um protagonista — é um ponto de interseção entre narrativas.
                    </p>

                    <p className="mb-3">
                        Em termos estruturais, o MCU cresce porque Tony cria conexões. Ele financia, provoca, desafia,
                        lidera e, muitas vezes, complica. Cada avanço tecnológico abre novas possibilidades — e novos riscos.
                        Cada escolha estratégica aproxima heróis — ou os afasta. Essa dinâmica transforma o universo em
                        algo orgânico, onde ações não desaparecem no filme seguinte. Elas ecoam.
                    </p>

                    <p className="mb-3">
                        Mas a arquitetura de Tony não é feita apenas de pontes; é feita também de incêndios. Muitas das
                        crises que movem o MCU nascem de tentativas de controle excessivo, de medo disfarçado de proteção
                        ou de genialidade aplicada sem freio emocional. Esse padrão cria algo essencial para franquias
                        longas: consequência. Quando o público percebe que decisões têm impacto real, o universo deixa
                        de parecer episódico e passa a parecer contínuo.
                    </p>

                    <p className="mb-3">
                        Em outras palavras: o MCU encontra em Tony o modelo ideal para narrativa seriada. Toda solução
                        vira gancho. Todo avanço cobra uma conta. Cada tentativa de proteger o mundo redefine o próprio
                        conceito de ameaça. E é justamente essa engrenagem — progresso seguido de colisão — que mantém
                        o universo em movimento.
                    </p>

                    <p className="mb-3">
                        Por isso, chamar Tony de &quot;arquiteto&quot; não é exagero retórico. Ele ajuda a estabelecer o formato
                        de interconexão que transforma filmes isolados em capítulos de uma saga maior. Sem esse eixo,
                        o MCU poderia até existir — mas dificilmente teria a mesma sensação de continuidade, escala
                        e relevância emocional.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="emocao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        A emoção como tecnologia: humanidade por trás do metal
                    </h2>

                    <p className="mb-3">
                        A Marvel entendeu algo essencial para transformar o MCU em fenômeno global: &quot;armadura&quot; é impacto visual,
                        mas &quot;legado&quot; é construção emocional. O público pode sair do cinema lembrando de explosões e batalhas,
                        mas o que permanece são as decisões difíceis, as perdas irreversíveis e o instante em que alguém escolhe
                        carregar um peso que poderia evitar. É nessa camada invisível que Tony Stark deixa sua marca mais profunda.
                    </p>

                    <p className="mb-3">
                        O diferencial do personagem não está apenas na genialidade ou na tecnologia de ponta, mas na capacidade
                        de errar publicamente e evoluir diante dos olhos do espectador. Diferente de muitos heróis estáticos,
                        Tony envelhece dentro da narrativa. Ele aprende com as próprias falhas. Ele lida com culpa, medo e
                        responsabilidade. E cada novo traje não é apenas um avanço técnico — é reflexo de uma tentativa de
                        corrigir algo que deu errado antes.
                    </p>

                    <p className="mb-3">
                        Esse movimento contínuo — falha, ajuste, consequência — dá ao espetáculo um sentido maior. O MCU não
                        depende só de escala; depende de memória emocional. Quando Tony toma uma decisão extrema, ela não surge
                        do nada. Surge de anos de construção dramática. O público acompanha o peso acumulado e entende que
                        aquela escolha não é heroísmo instantâneo, mas resultado de um percurso.
                    </p>

                    <p className="mb-3">
                        É por isso que ele se torna o coração do MCU. Porque ele não representa apenas força ou inteligência,
                        mas transformação. Ele prova que um blockbuster pode crescer junto com seu protagonista. E quando um
                        universo compartilha esse crescimento com a audiência, ele cria algo raro: vínculo.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        O herói que muda o mundo — e aceita o custo
                    </h3>

                    <p className="mb-3">
                        O arco de Tony Stark é simples de explicar e complexo de executar: ego → consciência → responsabilidade.
                        No início, ele quer provar que é o mais inteligente da sala. Depois, percebe que inteligência sem ética
                        gera caos. Por fim, entende que poder exige sacrifício. Essa progressão narrativa não é apenas eficiente —
                        é memorável. Ela transforma entretenimento em experiência.
                    </p>

                    <p className="mb-3">
                        Quando funciona, esse arco vira memória coletiva. O público não lembra só da armadura dourada e vermelha;
                        lembra do homem que aprendeu a colocar o mundo acima de si mesmo. E quando o MCU tenta repetir essa fórmula,
                        ele percebe que precisa de novos &quot;corações&quot; capazes de sustentar o mesmo nível de consequência emocional.
                        Porque espetáculo sozinho impressiona — mas transformação é o que permanece.
                    </p>

                    <h2
                        id="heranca"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        A herança: quem carrega o método Stark
                    </h2>

                    <p className="mb-3">
                        No MCU, &quot;legado&quot; nunca foi apenas objeto físico, armadura atualizada ou frase de efeito repetida em momentos
                        dramáticos. Legado é comportamento. É método. É a maneira como um personagem reage quando o mundo sai do
                        controle: pensar rápido, construir soluções sob pressão, assumir riscos gigantescos — e aceitar que cada
                        decisão pode gerar consequências imprevisíveis.
                    </p>

                    <p className="mb-3">
                        O chamado &quot;método Stark&quot; nasce da combinação entre genialidade e falha humana. Ele resolve problemas em
                        grande escala, mas frequentemente cria novos no processo. Essa dinâmica se torna parte estrutural do
                        Universo Cinematográfico da Marvel: tecnologia como ferramenta, responsabilidade como obrigação e
                        consciência como limite. Não é sobre ser perfeito; é sobre evoluir depois do erro.
                    </p>

                    <p className="mb-3">
                        Por isso, a marca de Tony continua visível mesmo quando ele não está em cena. Ela aparece na estética
                        tecnológica que domina batalhas, no ritmo acelerado dos diálogos, na autoconfiança que beira a arrogância
                        — e, principalmente, na ideia central de que genialidade sem responsabilidade se transforma em ameaça.
                        Esse princípio atravessa personagens, conflitos e decisões futuras dentro do MCU.
                    </p>

                    <p className="mb-3">
                        Mais do que um mentor tradicional, Tony deixa um padrão. Ele redefine o que significa ser herói em um
                        universo compartilhado: não basta ter poder; é preciso saber o que fazer com ele quando ninguém está
                        aplaudindo. E essa é a herança mais difícil de carregar — porque não é material, é ética.
                    </p>

                    <p className="mb-3">
                        É nesse ponto que o legado deixa de ser memória e vira pressão narrativa. Outros heróis passam a operar
                        sob a sombra de um exemplo que elevou a régua emocional do MCU. Alguns tentam replicar a inteligência,
                        outros absorvem a responsabilidade. Mas todos, de alguma forma, respondem à pergunta que Tony ajudou
                        a consolidar: o que você faz quando entende o tamanho do impacto das suas escolhas?
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
                        id="ponte-peter"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Ponte futura: Peter Parker e a ideia de “herdeiro”
                    </h2>

                    <p className="mb-3">
                        Se o MCU precisasse escolher um espelho emocional para Tony Stark, dificilmente encontraria alguém
                        mais simbólico do que Peter Parker. Jovem, brilhante, inseguro e movido por uma vontade genuína de
                        fazer o certo, Peter representa o tipo de herói que ainda está aprendendo a lidar com o próprio
                        potencial. E é justamente nessa fase de construção que o legado de Tony encontra terreno fértil.
                    </p>

                    <p className="mb-3">
                        A relação entre os dois nunca foi sobre substituir o Homem de Ferro ou replicar sua genialidade.
                        Foi sobre aprendizado e expectativa. Tony enxerga em Peter algo que reconhece em si mesmo — talento
                        precoce sem maturidade suficiente para medir consequências. Ao aproximá-lo do centro do MCU, o
                        universo cria uma ponte narrativa poderosa: o mentor que tenta corrigir no outro os erros que
                        cometeu no passado.
                    </p>

                    <p className="mb-3">
                        Quando o mentor se torna ausência, a herança se transforma em pressão. Peter não carrega apenas
                        um traje avançado ou acesso à tecnologia; ele carrega a memória de alguém que redefiniu o padrão
                        de responsabilidade dentro do universo compartilhado da Marvel. O peso não é técnico — é emocional.
                        E isso muda a forma como o personagem toma decisões.
                    </p>

                    <p className="mb-3">
                        É nesse ponto que o MCU mostra maturidade narrativa. O legado de Tony não é tratado como objeto
                        de culto, mas como conflito interno. O jovem herói precisa descobrir se será uma extensão do
                        mentor ou se terá coragem de trilhar um caminho próprio. Essa tensão dá profundidade à ideia
                        de herdeiro: não é copiar, é transformar.
                    </p>

                    <p className="mb-3">
                        Quando essa engrenagem funciona, o universo permanece vivo. Porque o coração pode sair de cena,
                        mas o impacto continua pulsando em quem ficou. E ao transformar ausência em motor dramático,
                        o MCU prova que seu legado mais forte não está na armadura — está na responsabilidade que ela
                        simbolizava.
                    </p>

                    <h2
                        id="conclusao"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Conclusão
                    </h2>

                    <p className="mb-3">
                        Tony Stark não foi apenas &quot;o primeiro&quot; herói do MCU. Ele foi o molde que ensinou o Universo
                        Cinematográfico da Marvel a equilibrar humor e drama, espetáculo e consequência, tecnologia
                        e humanidade. Antes de sagas épicas e eventos grandiosos, foi ele quem estabeleceu o ritmo,
                        a linguagem e a régua emocional que sustentariam o crescimento da franquia por mais de uma década.
                    </p>

                    <p className="mb-3">
                        O MCU se tornou gigantesco em escala, mas só se tornou inesquecível quando aprendeu a ser humano.
                        E essa humanidade tem assinatura. Está nas falhas que geram conflito, nas decisões que carregam peso
                        real e na compreensão de que poder exige responsabilidade contínua. O legado de Tony Stark não é
                        apenas narrativo — é estrutural. Ele molda como histórias são contadas dentro desse universo.
                    </p>

                    <p className="mb-3">
                        É por isso que seu impacto permanece mesmo após sua saída de cena. Porque ele ensinou o universo
                        a ter coração — e ensinou os próximos heróis a conviver com o peso de continuar a história.
                        O verdadeiro teste de um legado não é a ausência que deixa, mas a transformação que provoca
                        em quem fica.
                    </p>

                    <p>
                        Se o MCU é uma saga interconectada, Tony é o capítulo que define o tom e estabelece a base.
                        O que vem depois — incluindo Peter Parker e outros heróis que assumem a linha de frente —
                        não é repetição nem substituição. É resposta. E enquanto o universo continuar respondendo
                        a essa herança com consequência e emoção, o coração que o iniciou continuará pulsando.
                    </p>

                    {/* CTA interno — sequência editorial Homem de Ferro */}
                    <ContinueNoLexara
                        description="Se este foi seu fechamento do arco, aqui está a ordem natural para reler a jornada completa — e preparar o terreno para os ecos do legado (como Peter Parker)."
                        links={[
                            {
                                href: "/filmes-series/marvel/homem-de-ferro",
                                label: "Voltar ao hub: Homem de Ferro",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/marvel/homem-de-ferro/2008-nascimento-mcu",
                                label: "Voltar ao início: Homem de Ferro (2008)",
                            },
                            {
                                href: "/filmes-series/marvel/homem-de-ferro/tony-stark-personagem",
                                label: "Entender o personagem: Tony Stark",
                            },
                            {
                                href: "/filmes-series/marvel/homem-de-ferro/2-e-3-evolucao-mcu",
                                label: "Ver a virada de tom: Homem de Ferro 2 e 3",
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
                        A análise apresentada neste artigo sobre o legado de Tony Stark no MCU parte de uma leitura crítica
                        das obras já lançadas, combinada com dados públicos verificáveis. As fontes abaixo servem como base
                        para informações objetivas — créditos oficiais, fichas técnicas, elenco, datas de lançamento e
                        desempenho comercial dentro do Universo Cinematográfico da Marvel.
                    </p>

                    <p className="mb-3">
                        A interpretação narrativa, a leitura sobre construção de personagem, tom e impacto estrutural
                        no MCU são originais do LEXARA. Nosso objetivo não é apenas listar acontecimentos, mas contextualizar
                        como o Homem de Ferro moldou o formato de universo compartilhado que redefiniu o cinema de super-heróis
                        no século XXI.
                    </p>

                    <ul>
                        <li>
                            <a href="https://www.marvel.com/" rel="noreferrer noopener" target="_blank">
                                Marvel (site oficial) — catálogo oficial de personagens, filmes e comunicados institucionais
                            </a>
                        </li>
                        <li>
                            <a href="https://www.imdb.com/" rel="noreferrer noopener" target="_blank">
                                IMDb — créditos completos, elenco, equipe técnica e histórico de produção
                            </a>
                        </li>
                        <li>
                            <a href="https://www.boxofficemojo.com/" rel="noreferrer noopener" target="_blank">
                                Box Office Mojo — dados públicos de bilheteria e desempenho comercial
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> esta leitura prioriza análise narrativa, evolução de personagem
                        e impacto estrutural dentro do MCU. Informações industriais podem mudar conforme decisões de estúdio,
                        mas o foco aqui é compreender o que as obras já lançadas consolidaram como legado.
                    </p>
                </section>

                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em{" "}
                        <span className="text-slate-300">
                            {article.publishedAtLabel ?? formatISOToDateLabel(article.publishedAtISO)}
                        </span>
                        .
                    </p>
                </footer>
            </article>
        </>
    );
}
