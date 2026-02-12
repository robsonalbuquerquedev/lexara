import Link from "next/link";
import Script from "next/script";
import { Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type OSoldadoInvernalAnaliseProps = {
    article: Article;
};

const SECTIONS = [
    { id: "abertura", label: "Quando o herói desconfia do próprio uniforme" },
    { id: "thriller", label: "Thriller político disfarçado de super-herói" },
    { id: "escudo", label: "O escudo como contrato moral (e sua quebra)" },
    { id: "vigilancia", label: "Vigilância, medo e o preço da segurança" },
    { id: "bucky", label: "Bucky: a arma perfeita e o trauma perfeito" },
    { id: "tom", label: "O tom que virou regra no MCU" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year}, às ${hours}h${minutes}`;
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

export default function OSoldadoInvernalAnalise({ article }: OSoldadoInvernalAnaliseProps) {
    // ✅ Publicação programada: antes do horário, o artigo NÃO existe publicamente.
    if (!isPublishedNow(article.publishedAtISO)) {
        return (
            <section className="mx-auto max-w-2xl py-20 text-center">
                <h1 className="text-2xl font-bold text-slate-100">Publicação programada</h1>

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
            { "@type": "Thing", name: "Marvel Cinematic Universe" },
            { "@type": "Thing", name: "Capitão América" },
            { "@type": "Thing", name: "O Soldado Invernal" },
            { "@type": "Thing", name: "Thriller político" },
        ],
    };

    const jsonLdBreadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            breadcrumbItem("Filmes & Séries", "/filmes-series", 1),
            breadcrumbItem("MARVEL", article.categoryHref, 2),
            breadcrumbItem("Capitão América", article.topicHref, 3),
            breadcrumbItem(article.title, article.slug, 4),
        ],
    };

    // ✅ Vídeo (apoio editorial): trailer oficial (YouTube no-cookie)
    const video = {
        embedUrl: "https://www.youtube-nocookie.com/embed/7SlILk2WMTI",
        title: "Captain America: The Winter Soldier (2014) — Trailer oficial",
        heading: "Vídeo (apoio): o MCU quando vira espionagem",
        description:
            "Assista ao trailer para sentir a virada de tom: menos fantasia de uniformes, mais paranoia, vigilância e decisões morais sem saída.",
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-capitao-america-o-soldado-invernal-analise"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-capitao-america-o-soldado-invernal-analise"
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
                            title="Ver a seção Capitão América"
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
                        caption="O MCU troca a fantasia do heroísmo pela suspeita do poder."
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
                        Quando o herói desconfia do próprio uniforme
                    </h2>

                    <p className="mb-3">
                        O que torna <em>O Soldado Invernal</em> um ponto de virada no MCU não é um novo inimigo, nem uma ameaça maior — é
                        uma mudança de pergunta. O filme não começa em &quot;como salvar o mundo&quot;, mas em algo bem mais desconfortável:
                        <strong> quem decide o que é um mundo &quot;seguro&quot;?</strong> E, principalmente, <strong>qual é o preço</strong> quando essa
                        decisão fica na mão de instituições que operam com poder, sigilo e pressa — sempre alegando que é &quot;pelo bem de todos&quot;.
                    </p>

                    <p className="mb-3">
                        Steve Rogers sempre foi a versão humana de um &quot;sim&quot;: sim para coragem, sim para dever, sim para aquilo que parece certo.
                        Só que aqui o filme faz o símbolo tropeçar na própria base. Porque, quando a guerra vira política e a política vira
                        engenharia de medo, o &quot;certo&quot; pode ser usado como embalagem. A pergunta que dói — e que o roteiro empurra sem gentileza —
                        é esta: <strong>e se o ideal estiver sendo usado como slogan?</strong> Não para inspirar, mas para justificar.
                    </p>

                    <p className="mb-3">
                        É por isso que o tom parece diferente desde a primeira sensação: a ameaça não chega com risada de vilão nem com discurso
                        épico. Ela chega como <strong>procedimento</strong>. Como protocolo. Como reunião fechada. Como alguém dizendo &quot;é necessário&quot;
                        e esperando que você engula sem perguntar. O filme coloca Steve num território onde força física não resolve tudo, porque o
                        inimigo não é só alguém para derrotar — é um sistema para entender. E quando um herói descobre que pode estar servindo a um
                        mecanismo maior do que ele, a história deixa de ser sobre vitória e passa a ser sobre consciência.
                    </p>

                    <p className="mb-3">
                        A partir daí, o escudo muda de função: não é apenas arma ou símbolo — é um contrato moral. E o filme vai apertando esse
                        contrato até ele ranger. Porque existe um tipo de poder que não quer te convencer; quer te acostumar. Quer que a vigilância
                        pareça normal, que a exceção vire regra, que a liberdade seja tratada como risco. É assim que o thriller político entra no
                        MCU: quando &quot;proteção&quot; vira desculpa para controle, e confiança vira a primeira vítima.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: o vilão mais perigoso não é quem quebra regras — é quem escreve as regras e decide quando elas
                                &quot;não valem&quot;.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="thriller"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Thriller político disfarçado de super-herói
                    </h2>

                    <p className="mb-3">
                        A verdadeira virada de <em>O Soldado Invernal</em> não é narrativa — é estrutural. O filme assume o formato de um <strong>thriller político</strong> dentro do universo dos super-heróis. A ação continua presente, mas o motor da tensão
                        deixa de ser &quot;quem é mais forte&quot; e passa a ser &quot;quem controla a informação&quot;. Em vez de batalhas abertas, temos
                        espionagem, vigilância, arquivos secretos e decisões tomadas em salas fechadas. Informação vira arma. Confiança vira risco.
                    </p>

                    <p className="mb-3">
                        A paranoia não é detalhe estético: é linguagem. A câmera observa corredores como se fossem trincheiras,
                        salas de reunião como se fossem arenas, e cada conversa parece esconder algo não dito. Aliados tornam-se suspeitos,
                        protocolos parecem ameaças, e a sensação constante é de que alguém está sempre vendo — mesmo quando ninguém aparece.
                        O perigo não grita; ele assina documentos.
                    </p>

                    <p className="mb-3">
                        Isso altera o próprio DNA do MCU. Quando a ameaça é institucional, não existe vitória limpa. Não há explosão final
                        que resolva tudo. Mesmo quando o herói &quot;vence&quot;, algo se quebra no processo — confiança pública, estabilidade política,
                        inocência moral. O conflito deixa de ser contra um indivíduo e passa a ser contra uma engrenagem. E você não derruba
                        uma engrenagem com um discurso inspirador: você precisa entender como ela funciona.
                    </p>

                    <p className="mb-3">
                        Ao trocar o vilão caricato por um sistema infiltrado, o filme redefine o que significa heroísmo nesse universo.
                        Não basta derrotar um inimigo externo; é preciso questionar estruturas internas. É aqui que o gênero de espionagem
                        encontra o símbolo do Capitão América — e o resultado é um herói que precisa escolher entre obedecer ou confrontar.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">O que o filme faz de diferente?</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Abandona a lógica do &quot;chefe final&quot; e constrói um labirinto institucional. Você não derrota um sistema com um soco.
                                Você tenta sobreviver ao jogo… sem se tornar parte dele.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                A tensão nasce do controle invisível: quem monitora tudo, decide tudo — inclusive quem é o inimigo.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="escudo"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O escudo como contrato moral (e sua quebra)
                    </h2>

                    <p className="mb-3">
                        O escudo do Capitão América sempre foi apresentado como símbolo — coragem, dever, ideal democrático.
                        Em <em>O Soldado Invernal</em>, porém, ele ganha uma camada mais desconfortável: torna-se um <strong>contrato moral</strong>.
                        Não é apenas um objeto circular de vibranium; é a promessa de que poder e ética caminham juntos. Steve Rogers
                        não carrega só uma arma defensiva — ele carrega uma ideia. E quando a estrutura que sustenta essa ideia começa
                        a apodrecer por dentro, o contrato deixa de ser silencioso e passa a ranger.
                    </p>

                    <p className="mb-3">
                        Esse é o ponto em que o símbolo vira conflito. Porque o escudo não representa apenas &quot;América&quot; como território,
                        mas como princípio. E o filme força Steve a encarar a pergunta que nenhum slogan responde:
                        <strong>a quem pertence essa ideia?</strong> Ao governo? À instituição? À bandeira? Ou aos valores que deveriam
                        justificá-la? Quando a política usa o medo como ferramenta e a vigilância como justificativa,
                        o herói precisa decidir se continua obedecendo… ou se rompe.
                    </p>

                    <p className="mb-3">
                        É aqui que o MCU transforma ação em ética. O conflito deixa de ser físico e passa a ser filosófico:
                        lealdade à bandeira ou lealdade aos princípios? O filme deixa claro que as duas coisas podem se separar —
                        e quando se separam, o herói precisa escolher qual delas realmente define seu caráter.
                    </p>

                    <p className="mb-3">
                        Esse dilema não surge do nada. Ele ecoa a própria história simbólica do escudo, discutida no segundo artigo da sequência,
                        <Link
                            href="/filmes-series/marvel/capitao-america/culpa-historica-e-ideal#abertura"
                            className="underline decoration-slate-600 hover:decoration-slate-400"
                        >
                            “O escudo como arquivo histórico”
                        </Link>,
                        onde o objeto deixa de ser propaganda e passa a carregar camadas políticas, guerras e silêncios.
                        Em <em>O Soldado Invernal</em>, essa memória histórica volta à superfície — e o símbolo precisa provar
                        se ainda merece o peso que carrega.
                    </p>

                    <p className="mb-3">
                        No fim das contas, o escudo não se quebra fisicamente — o que se rompe é a confiança no sistema que o utiliza.
                        E quando confiança se rompe, não é o metal que faz diferença. É a consciência de quem o segura.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="vigilancia"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Vigilância, medo e o preço da segurança
                    </h2>

                    <p className="mb-3">
                        O coração político de <em>O Soldado Invernal</em> pulsa no medo como combustível social. O filme entende que
                        nada mobiliza mais rápido do que a promessa de segurança — especialmente quando o perigo é invisível.
                        A proposta parece simples: antecipar ameaças, neutralizar riscos, proteger vidas. Mas por trás dessa lógica
                        eficiente existe uma pergunta incômoda: <strong>quem decide o que é ameaça?</strong> E com base em quais critérios?
                    </p>

                    <p className="mb-3">
                        Quando uma sociedade aceita a ideia de &quot;segurança total&quot;, ela quase sempre está aceitando também <strong>controle total</strong>. Monitoramento constante, dados acumulados, decisões automatizadas.
                        Tudo vem embalado como proteção. O discurso é preventivo: agir antes que o crime aconteça, eliminar o risco
                        antes que ele exista. Só que prevenção absoluta exige poder absoluto — e poder absoluto raramente vem
                        acompanhado de transparência.
                    </p>

                    <p className="mb-3">
                        A paranoia aqui não é estilo visual, é tema central. O filme sugere que, quando a vigilância se torna
                        rotina, a liberdade deixa de ser direito e passa a ser concessão. A exceção vira regra, o sigilo vira prática,
                        e questionar passa a soar como ameaça. O que está em jogo não é apenas tecnologia militar ou inteligência
                        estratégica; é a redefinição silenciosa dos limites entre proteção e opressão.
                    </p>

                    <p className="mb-3">
                        É nesse ponto que Steve Rogers entra em guerra com o sistema. Ele não luta para administrar melhor a máquina,
                        nem para assumir o controle dela. Ele luta para impedir que ela exista daquele jeito. Porque, se o herói
                        aceita a lógica de que fins justificam meios, o símbolo que ele carrega perde sentido. A batalha deixa de ser
                        contra um vilão específico e passa a ser contra a normalização do medo como política de Estado.
                    </p>

                    <p className="mb-3">
                        No fim, <em>O Soldado Invernal</em> não condena segurança — ele questiona a forma como ela é construída.
                        Mostra que proteger não pode significar vigiar tudo, controlar todos e decidir previamente quem merece
                        confiança. E quando o medo vira argumento definitivo, o heroísmo deixa de ser força física e passa a ser
                        resistência moral.
                    </p>

                    <h2
                        id="bucky"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Bucky: a arma perfeita e o trauma perfeito
                    </h2>

                    <p className="mb-3">
                        O Soldado Invernal é mais inquietante do que qualquer &quot;vilão forte&quot; porque ele não nasce do caos — ele nasce
                        do método. Ele é um <strong>resultado</strong>. A prova de que o sistema não apenas combate ameaças: ele as constrói,
                        aperfeiçoa e descarta quando necessário. Bucky Barnes não é apresentado como um antagonista clássico;
                        ele é apresentado como um projeto bem-sucedido de desumanização.
                    </p>

                    <p className="mb-3">
                        Transformado em arma por meio de manipulação, lavagem cerebral e repetição traumática, Bucky representa o
                        extremo lógico da política de controle mostrada no filme. Se a vigilância antecipa riscos, a engenharia de
                        soldados elimina vontades. Ele não decide, não questiona, não hesita. Sua força não é só física — é simbólica.
                        Ele encarna o medo institucionalizado, a eficiência sem ética, a obediência sem memória.
                    </p>

                    <p className="mb-3">
                        Para Steve Rogers, porém, o conflito é ainda mais profundo. Bucky não é apenas um inimigo mascarado;
                        ele é a lembrança viva de quem ele foi antes do soro, antes do escudo, antes do mito. No primeiro artigo da
                        sequência,
                        <Link
                            href="/filmes-series/marvel/capitao-america/o-primeiro-vingador-simbolo#relacoes"
                            className="underline decoration-slate-600 hover:decoration-slate-400"
                        >
                            &quot;Peggy, Bucky e a bússola moral&quot;
                        </Link>,
                        vimos como essas relações formam o eixo emocional que sustenta o símbolo. Aqui, esse eixo é testado até o limite.
                    </p>

                    <p className="mb-3">
                        Salvar Bucky deixa de ser apenas um gesto de amizade — torna-se uma recusa ideológica. É dizer que pessoas
                        não podem ser reduzidas a ferramentas, que identidade não pode ser apagada por conveniência estratégica.
                        Quando Steve escolhe acreditar que ainda existe alguém por trás da máscara, ele está confrontando não apenas
                        um adversário, mas a própria lógica do sistema que o produziu.
                    </p>

                    <p className="mb-3">
                        O trauma de Bucky é, ao mesmo tempo, pessoal e político. Ele é a cicatriz visível de uma estrutura que prefere
                        apagar indivíduos a admitir falhas. E é justamente por isso que o embate final não é só sobre derrotar um
                        soldado — é sobre recuperar uma memória. Porque, se o sistema vence ao transformar pessoas em armas,
                        o heroísmo aqui vence ao devolver humanidade a quem foi programado para esquecê-la.
                    </p>

                    <h2
                        id="tom"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O tom que virou regra no MCU
                    </h2>

                    <p className="mb-3">
                        Depois de <em>O Soldado Invernal</em>, o MCU percebe que pode ser popular sem ser ingênuo. Pode ter ação,
                        humor e espetáculo — mas também <strong>consequência</strong>. O filme mostra que entretenimento e densidade
                        política não são opostos. Pelo contrário: quando combinados com precisão, ampliam o impacto. O público
                        começa a aceitar que &quot;o bem&quot; pode estar contaminado por interesses, que instituições podem falhar,
                        e que heroísmo nem sempre significa obedecer.
                    </p>

                    <p className="mb-3">
                        Essa mudança não acontece apenas dentro da história; acontece na linguagem do próprio universo.
                        A confiança cega dá lugar à desconfiança estratégica. O vilão deixa de ser apenas externo e passa a
                        infiltrar estruturas. A vitória deixa de ser definitiva e passa a ser provisória. O MCU amadurece —
                        não porque fica mais sombrio, mas porque passa a reconhecer que poder, política e moralidade nunca
                        são simples.
                    </p>

                    <p className="mb-3">
                        É por isso que o filme funciona como ponto de virada. Ele redefine expectativas. A partir daqui,
                        cada decisão carrega peso institucional. Cada escolha pode gerar divisão. Cada símbolo pode ser
                        questionado. O herói deixa de ser apenas forte; ele precisa ser crítico. E o público passa a esperar
                        mais do que explosões — passa a esperar debate.
                    </p>

                    <p className="mb-3">
                        Se voltarmos ao início desse universo, lá em
                        <Link
                            href="/filmes-series/marvel/homem-de-ferro/2008-nascimento-mcu#ponto-zero"
                            className="underline decoration-slate-600 hover:decoration-slate-400"
                        >
                            “O ponto zero do MCU”
                        </Link>,
                        vemos um cenário diferente: um herói carismático, tecnológico, ainda isolado de grandes conflitos
                        institucionais. <em>O Soldado Invernal</em> amplia esse escopo. Ele transforma o universo compartilhado
                        em um espaço onde consequências se acumulam e decisões reverberam. O que começou como experimento
                        narrativo passa a ser uma estrutura política interligada.
                    </p>

                    <p className="mb-3">
                        A partir daqui, o MCU se torna mais consciente de si mesmo. Mais político. Mais disposto a explorar
                        fraturas internas. E essa mudança de tom não é um detalhe estilístico — é a base que sustenta os
                        conflitos ideológicos que viriam depois. O universo aprende que crescer não é apenas expandir;
                        é aprofundar.
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
                        <em>O Soldado Invernal</em> marca o momento em que o Capitão América descobre que o inimigo pode usar crachá,
                        assinatura e autorização institucional. O confronto deixa de ser contra um rosto específico e passa a ser
                        contra uma lógica. O filme redefine o heroísmo dentro do MCU: não se trata apenas de derrotar alguém,
                        mas de escolher aquilo que você se recusa a aceitar — mesmo quando essa escolha te isola.
                    </p>

                    <p className="mb-3">
                        Ao transformar um blockbuster de super-herói em thriller político sobre vigilância, controle e poder,
                        a narrativa amplia o peso simbólico do escudo. Ele continua sendo ícone, mas agora carrega fissuras.
                        E essas fissuras não o enfraquecem — tornam-no mais humano. Porque um símbolo sem tensão é propaganda;
                        um símbolo sob pressão é caráter.
                    </p>

                    <p className="mb-3">
                        O filme também altera permanentemente a estrutura do MCU. A partir daqui, instituições podem falhar,
                        aliados podem esconder segredos, e decisões individuais podem gerar rupturas coletivas. A maturidade
                        narrativa deixa de ser opção estética e passa a ser fundamento dramático. O universo cresce não apenas
                        em escala, mas em responsabilidade.
                    </p>

                    <p className="mb-3">
                        No fim, o que permanece não é a explosão final nem a coreografia das lutas. O que permanece é a pergunta:
                        <strong>o que você faz quando percebe que o sistema que deveria proteger pode ser parte do problema?</strong> Steve Rogers responde com desobediência consciente. Ele escolhe princípios em vez de obediência cega.
                    </p>

                    <p className="mb-3">
                        E é justamente essa escolha que transforma <em>O Soldado Invernal</em> em um divisor de águas. O escudo
                        não representa mais apenas um país — representa a decisão de defender valores mesmo quando eles
                        colidem com estruturas oficiais. O ideal deixa de ser slogan e vira prática. E, nesse processo,
                        o MCU aprende que crescer não é apenas expandir seu universo — é questioná-lo.
                    </p>

                    <ContinueNoLexara
                        description="Se este foi seu ponto de partida, aqui está a sequência natural para acompanhar como o símbolo vira conflito — e como a política do MCU chega ao ponto de ruptura."
                        links={[
                            {
                                href: "/filmes-series/marvel/capitao-america/guerra-civil-escolhas",
                                label: "Próximo: Guerra Civil — quando a ideologia vira guerra",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/marvel/capitao-america/o-primeiro-vingador-simbolo",
                                label: "Voltar ao começo: O Primeiro Vingador — nascimento do símbolo",
                            },
                            {
                                href: "/filmes-series/marvel/capitao-america/culpa-historica-e-ideal",
                                label: "Entre propaganda e ideal — a culpa histórica do escudo",
                            },
                            {
                                href: "/filmes-series/marvel/capitao-america",
                                label: "Voltar à seção Capitão América",
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
                        A análise apresentada neste artigo parte de uma leitura crítica do filme dentro do contexto do <strong>Marvel Cinematic Universe (MCU)</strong>, mas está ancorada em informações públicas verificáveis.
                        Dados como elenco, direção, ano de lançamento, desempenho comercial e posicionamento dentro do calendário
                        do estúdio podem ser consultados em bases oficiais e especializadas.
                    </p>

                    <p className="mb-3">
                        O objetivo desta seção é separar claramente dois níveis de informação: de um lado, fatos objetivos —
                        ficha técnica, contexto de produção, recepção e números divulgados por fontes reconhecidas; de outro,
                        a interpretação editorial construída pelo LEXARA a partir desses elementos. A proposta não é substituir
                        a obra por opinião, mas contextualizá-la dentro de seu momento histórico, político e industrial.
                    </p>

                    <p className="mb-3">
                        <em>O Soldado Invernal</em> foi lançado em 2014 pela Marvel Studios e representou uma mudança perceptível
                        no tom do universo compartilhado, incorporando elementos de thriller político, espionagem e debate
                        institucional. Esse enquadramento pode ser confirmado tanto em entrevistas promocionais da época quanto
                        na própria estratégia narrativa adotada pelo estúdio após o filme.
                    </p>

                    <ul>
                        <li>
                            <a
                                href="https://www.marvel.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Marvel (site oficial) — informações institucionais e catálogo de produções
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.imdb.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                IMDb — ficha técnica, elenco e equipe criativa
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.boxofficemojo.com/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Box Office Mojo — dados públicos de bilheteria e desempenho comercial
                            </a>
                        </li>
                    </ul>

                    <p className="mt-6 text-sm text-slate-400">
                        <strong>Nota editorial LEXARA:</strong> análises narrativas envolvem interpretação. Sempre que possível,
                        distinguimos fatos verificáveis de leitura crítica. O compromisso aqui é com rigor contextual,
                        clareza argumentativa e respeito ao leitor.
                    </p>
                </section>

                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em{" "}
                        <span className="text-slate-300">
                            {article.publishedAtLabel ?? formatISOToDateLabel(article.publishedAtISO)}
                        </span>
                        .{" "}
                        <span className="text-slate-500">
                            ({formatISOToDateLabel(article.publishedAtISO)})
                        </span>
                    </p>
                </footer>
            </article>
        </>
    );
}
