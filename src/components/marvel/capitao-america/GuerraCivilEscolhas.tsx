import Link from "next/link";
import Script from "next/script";
import { Film, List, Quote, Shield } from "lucide-react";
import ArticleMeta from "@/components/article/ArticleMeta";
import ArticleCover from "@/components/article/ArticleCover";
import ArticleVideo from "@/components/article/ArticleVideo";
import { ContinueNoLexara } from "@/components/ContinueNoLexara";
import { breadcrumbItem } from "@/lib/schema";
import type { Article } from "@/content/article";

type GuerraCivilEscolhasProps = {
    article: Article;
};

const SECTIONS = [
    { id: "quando-a-lei-vira-dilema", label: "Quando a lei vira dilema" },
    { id: "lideranca-sem-plateia", label: "Liderança sem plateia" },
    { id: "lealdade-versus-consciência", label: "Lealdade vs. consciência" },
    { id: "o-preco-da-escolha-certa", label: "O preço da escolha certa" },
    { id: "um-escudo-quebrado", label: "Um escudo quebrado" },
    { id: "video", label: "Vídeo (apoio): trailer oficial" },
    { id: "conclusao", label: "Conclusão" },
    { id: "fontes", label: "Fontes & contexto" },
];

function formatISOToDateLabel(iso: string) {
    try {
        const date = new Date(iso);
        if (Number.isNaN(date.getTime())) return iso;

        return date.toLocaleString("pt-BR", {
            timeZone: "America/Recife",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    } catch {
        return iso;
    }
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

export default function GuerraCivilEscolhas({ article }: GuerraCivilEscolhasProps) {
    // ✅ Publicação programada: antes do horário, o artigo NÃO existe publicamente.
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
            { "@type": "Thing", name: "Capitão América" },
            { "@type": "Thing", name: "Capitão América: Guerra Civil" },
            { "@type": "Thing", name: "Acordos de Sokovia" },
            { "@type": "Thing", name: "Ética e autoridade" },
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
        embedUrl: "https://www.youtube-nocookie.com/embed/dKrVegVI0Us",
        title: "Captain America: Civil War (2016) — Trailer oficial",
        heading: "Vídeo (apoio): quando a moral vira linha de frente",
        description:
            "Repare como o filme transforma um conflito de heróis em conflito de princípios: autoridade, responsabilidade e o custo humano de “fazer o certo”.",
    };

    return (
        <>
            {/* SEO: JSON-LD */}
            <Script
                id="ld-article-capitao-america-guerra-civil-escolhas"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
            />
            <Script
                id="ld-breadcrumbs-capitao-america-guerra-civil-escolhas"
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
                        caption="Guerra Civil: quando escolher “o certo” exige pagar um preço real."
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
                        id="quando-a-lei-vira-dilema"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Quando a lei vira dilema
                    </h2>

                    <p className="mb-3">
                        <em>Guerra Civil</em> não abre com um &quot;vilão do dia&quot; porque a ameaça aqui é mais sofisticada: é a ideia de que,
                        em nome da segurança, alguém precisa colocar o poder em uma coleira. E aí vem a pergunta que muda o tom do MCU:
                        <strong> quem tem o direito de autorizar o poder?</strong> Não é uma dúvida teórica — é uma pergunta que nasce
                        do estrago acumulado, dos danos colaterais que viraram estatística e da sensação de que, quando heróis decidem
                        sozinhos, o mundo inteiro paga a fatura.
                    </p>

                    <p className="mb-3">
                        É por isso que os Acordos de Sokovia funcionam como um gatilho narrativo tão forte: eles parecem &quot;só&quot; um documento,
                        mas carregam uma ideia explosiva por baixo. Para um lado, o texto promete responsabilidade, limites e prestação de
                        contas — o tipo de resposta que sociedades exaustas <em>querem</em> ouvir depois de uma tragédia. Para o outro,
                        o mesmo texto soa como terceirização moral: você ainda vai agir, mas apenas quando uma autoridade permitir — e,
                        se a autoridade estiver errada, a culpa vira burocracia. O filme não pede para você escolher rápido. Ele obriga
                        você a sentir como os dois argumentos podem ser razoáveis… e, ainda assim, incompatíveis.
                    </p>

                    <p className="mb-3">
                        O detalhe cruel é que Steve Rogers é o personagem menos &quot;confortável&quot; para esse tipo de acordo. Ele nasce como{" "}
                        <Link
                            href="/filmes-series/marvel/capitao-america/culpa-historica-e-ideal#propaganda"
                            className="text-slate-200 underline decoration-slate-600 hover:text-white"
                        >
                            propaganda
                        </Link>, cresce como símbolo e passa a vida tentando não virar ferramenta — então, quando aparece um sistema
                        dizendo &quot;vamos te controlar para o bem maior&quot;, o que está em jogo não é só liberdade de ação: é identidade.
                        O Capitão América vira campo de batalha porque ele representa a pergunta que ninguém quer encarar:
                        <em> o que fazemos quando a lei deixa de ser o caminho do certo e vira apenas o caminho do permitido?</em>
                    </p>

                    <p className="mb-3">
                        E é aqui que <em>Guerra Civil</em> dá o salto: ele transforma uma disputa de força em uma disputa de legitimidade.
                        Não é &quot;quem bate mais forte&quot;. É &quot;quem tem razão <em>para</em> bater&quot;. Quando o poder precisa ser autorizado, a
                        moral deixa de ser uma certeza e vira decisão — e decisão tem custo, deixa marca, quebra amizades e cria ruídos
                        que não se resolvem com um discurso bonito. O filme começa exatamente onde o mundo real costuma ficar mais confuso:
                        no ponto em que obedecer pode ser seguro, mas não necessariamente correto.
                    </p>

                    <blockquote className="not-prose my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start gap-3">
                            <Quote className="mt-1 text-slate-400" size={18} />
                            <p className="text-sm leading-relaxed text-slate-300">
                                Ideia-guia do LEXARA: quando o &quot;certo&quot; depende só de obedecer, a moral vira carimbo — e carimbo não salva ninguém.
                            </p>
                        </div>
                    </blockquote>

                    <h2
                        id="lideranca-sem-plateia"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Liderança sem plateia
                    </h2>

                    <p className="mb-3">
                        Steve Rogers lidera de um jeito que o marketing odeia. Ele não promete vitória rápida, não promete conforto,
                        não promete que todo mundo sairá inteiro da história. Ele promete algo muito menos sedutor — e muito mais raro:
                        coerência. Em um universo acostumado a discursos grandiosos e aplausos públicos, a liderança dele não nasce do
                        carisma, mas da constância. Ele faz o que considera certo mesmo quando isso não rende manchete, não rende
                        unanimidade e, principalmente, não rende aplauso.
                    </p>

                    <p className="mb-3">
                        É aqui que acontece a verdadeira virada dramática. O Capitão não está lutando para ser amado pelo mundo,
                        nem para preservar a própria imagem. Ele está lutando para não trair a própria consciência. E isso muda tudo.
                        Porque quando a prioridade deixa de ser aprovação e passa a ser integridade, o conflito deixa de ser político
                        e vira íntimo. A batalha já não é só contra um sistema — é contra a possibilidade de se tornar cúmplice dele.
                    </p>

                    <p className="mb-3">
                        Essa postura torna a ruptura inevitável. Lideranças populares unem; lideranças éticas dividem. Quando Steve
                        recusa os Acordos, ele sabe que está rompendo alianças. Sabe que pode perder amigos, reputação e até o próprio
                        escudo simbólico que carrega. Mas a escolha revela algo essencial: para ele, autoridade sem consciência é só
                        obediência organizada. E obediência organizada pode parecer ordem — mas não é necessariamente justiça.
                    </p>

                    <p className="mb-3">
                        O que o filme constrói aqui é desconfortável e maduro: liderar nem sempre significa manter todos ao seu lado.
                        Às vezes significa caminhar primeiro, sabendo que poucos vão acompanhar. O Steve não lidera porque tem certeza
                        de que está certo; ele lidera porque se recusa a agir como se estivesse errado. E essa diferença é sutil —
                        mas é exatamente ela que separa um símbolo de um homem.
                    </p>

                    <div className="not-prose my-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/30 p-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <p className="text-sm font-semibold text-slate-100">O que muda aqui?</p>
                            <p className="mt-2 text-sm text-slate-300">
                                O MCU deixa claro que &quot;ser herói&quot; não é apenas salvar pessoas. É decidir <em>como</em>, <em>quando</em> e
                                <em> sob quais limites</em> você aceita agir — mesmo que o mundo prefira soluções rápidas e supervisionadas.
                            </p>
                        </div>
                        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <p className="text-xs font-semibold text-slate-200">Destaque</p>
                            <p className="mt-2 text-sm text-slate-300">
                                Liderança real não busca aplauso. Busca coerência — mesmo que isso custe alianças.
                            </p>
                        </div>
                    </div>

                    <h2
                        id="lealdade-versus-consciência"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Lealdade vs. consciência
                    </h2>

                    <p className="mb-3">
                        Aqui o filme acerta em cheio: ele recusa a simplificação confortável de &quot;Capitão bom vs. Homem de Ferro ruim&quot;.
                        O que está em jogo não é caráter — é visão de mundo. São <strong>valores que não encaixam</strong>, mesmo quando
                        partem de intenções legítimas. E essa incompatibilidade é o que torna o conflito impossível de resolver com um
                        pedido de desculpas ou um discurso inspirador.
                    </p>

                    <p className="mb-3">
                        Tony Stark quer controle porque já viu o que acontece quando o poder age sem supervisão. Ele carrega culpa como
                        combustível permanente — cada erro passado vira argumento a favor de limites mais rígidos. Para ele, aceitar
                        fiscalização é uma forma de maturidade: é admitir que heróis também falham. Já Steve Rogers enxerga outro risco.
                        Ele sabe que sistemas não são neutros, que decisões políticas têm interesses, que &quot;ordens oficiais&quot; podem
                        mascarar omissões morais. Para ele, abrir mão da autonomia não é responsabilidade — é vulnerabilidade.
                    </p>

                    <p className="mb-3">
                        O ponto doloroso é que ambos estão certos dentro da própria lógica. Tony teme o caos. Steve teme o controle
                        errado. Um luta contra o peso da culpa; o outro luta contra o peso da história. E quando duas verdades parciais
                        colidem, o resultado não é consenso — é fratura. O filme constrói essa tensão com maturidade rara em blockbusters:
                        não há vilão manipulando cordas invisíveis. Há homens tentando proteger o mundo com ferramentas diferentes.
                    </p>

                    <p className="mb-3">
                        É por isso que o embate final não soa como espetáculo gratuito, mas como inevitabilidade moral. Quando a lealdade
                        ao amigo entra em choque com a lealdade à própria consciência, alguém vai sair ferido — e não apenas fisicamente.
                        O MCU entende que conflitos ideológicos não se resolvem com força bruta; eles deixam cicatrizes que atravessam
                        filmes, relações e identidades. A luta não é sobre quem vence. É sobre o que cada um está disposto a sacrificar
                        para continuar acreditando em si mesmo.
                    </p>

                    {/* <AdSlot label="Anúncio (Meio do artigo)" /> */}

                    <h2
                        id="o-preco-da-escolha-certa"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        O preço de fazer a escolha certa
                    </h2>

                    <p className="mb-3">
                        O filme insiste em uma ideia simples — e brutal: escolher o certo não garante que você será visto como certo.
                        Em um mundo que prefere estabilidade à fricção, quem desafia a regra costuma ser confundido com a ameaça.
                        E é exatamente essa inversão que transforma a decisão de Steve em algo mais pesado do que qualquer batalha física.
                    </p>

                    <p className="mb-3">
                        A partir daqui, &quot;obedecer&quot; e &quot;ser moral&quot; deixam de ser sinônimos. O MCU desmonta essa equivalência com frieza
                        cirúrgica. Seguir ordens pode preservar alianças, evitar manchetes negativas e manter a aparência de unidade.
                        Mas moralidade, aqui, não é aparência — é convicção. Quando Steve recusa os Acordos, ele sabe que está abrindo
                        mão da zona segura da legitimidade institucional. Ele escolhe carregar a dúvida pública para preservar a
                        própria coerência privada.
                    </p>

                    <p className="mb-3">
                        É nesse ponto que o Capitão deixa de ser apenas símbolo e se torna figura trágica. O herói criado como
                        <Link
                            href="/filmes-series/marvel/capitao-america/culpa-historica-e-ideal#propaganda"
                            className="text-slate-200 underline decoration-slate-600 hover:text-white"
                        > propaganda
                        </Link> aceita ser rotulado como obstáculo. O homem que representava consenso passa a representar ruptura.
                        Ele entende que, às vezes, evitar um problema maior exige parecer o problema imediato. E essa é uma decisão
                        que não rende aplauso — rende isolamento.
                    </p>

                    <p className="mb-3">
                        O custo real não é físico. É relacional. É olhar para antigos aliados e perceber que a confiança foi substituída
                        por desconfiança. É saber que sua escolha protege algo maior, mas machuca algo mais próximo. <em>Guerra Civil</em> não romantiza essa dor. Ele a mantém presente, silenciosa, atravessando cada gesto e cada silêncio entre os
                        personagens.
                    </p>

                    <h3 className="mt-10 mb-10 text-xl font-semibold text-slate-200 md:text-2xl">
                        O herói que perde para não se perder
                    </h3>

                    <p className="mb-3">
                        Steve não &quot;vence&quot; como quem levanta troféu. Ele vence como quem suporta. Suporta a fratura da equipe, suporta
                        o peso de decepcionar amigos, suporta a própria solidão política. A vitória dele não é espetáculo — é resistência.
                    </p>

                    <p className="mb-3">
                        Perder alianças para não perder a si mesmo é um tipo de triunfo que não aparece em manchetes. Mas é o único
                        que mantém a identidade intacta. O filme sugere algo desconfortável e maduro: às vezes, a escolha certa não
                        preserva reputações — preserva caráter. E caráter, diferente de popularidade, não pode ser delegado.
                    </p>

                    <h2
                        id="um-escudo-quebrado"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Um escudo quebrado
                    </h2>

                    <p className="mb-3">
                        O símbolo se parte porque o mundo se partiu antes. O escudo não quebra apenas por impacto físico — ele quebra
                        porque a ilusão de unidade já não se sustenta. Até ali, os Vingadores funcionavam como bloco narrativo:
                        divergiam, discutiam, mas marchavam juntos. <em>Guerra Civil</em> desmonta essa imagem com precisão.
                        O que parecia equipe revela-se coalizão frágil, sustentada por acordos silenciosos que agora vêm à tona.
                    </p>

                    <p className="mb-3">
                        O escudo sempre foi mais do que defesa. Era identidade visual, promessa de estabilidade,
                        lembrança de um{" "}
                        <Link
                            href="/filmes-series/marvel/capitao-america/culpa-historica-e-ideal#ideais"
                            className="text-slate-200 underline decoration-slate-600 hover:text-white"
                        >
                            ideal
                        </Link>{" "}
                        que sobrevivia ao caos. Quando ele se torna centro de ruptura, o filme sinaliza algo maior:
                        não existe símbolo forte o suficiente para manter coeso um grupo que já não compartilha a
                        mesma visão de mundo. A fratura não é metálica — é filosófica.
                    </p>

                    <p className="mb-3">
                        E é aqui que o arco do Capitão América encontra sua conclusão natural dentro desse primeiro ciclo. Steve
                        começa como propaganda impecável, atravessa o peso da culpa histórica, enfrenta a corrosão da confiança
                        institucional e termina encarando a consequência mais difícil de todas: coerência pode significar solidão.
                        O herói que nasceu para representar união aceita se tornar o ponto de divisão.
                    </p>

                    <p className="mb-3">
                        O escudo quebrado não simboliza derrota. Simboliza transição. Ele marca o momento em que o ideal deixa de ser
                        confortável e passa a ser custoso. A partir daqui, o Capitão não é mais apenas o homem que carrega um símbolo —
                        é o homem que aceita viver sem ele, se for preciso. E essa escolha é mais radical do que qualquer confronto
                        físico mostrado na tela.
                    </p>

                    <p className="mb-3">
                        Ao fim, o que se rompe não é só uma aliança. É a ideia de que heróis podem existir sem conflito interno.
                        <em>Guerra Civil</em> fecha o ciclo lembrando que maturidade narrativa não nasce da unanimidade, mas da tensão.
                        O mundo não ficou mais simples. Ficou mais honesto. E o escudo, rachado, passa a refletir essa verdade.
                    </p>

                    <h2
                        id="video"
                        className="mt-16 mb-10 scroll-mt-24 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl"
                    >
                        Vídeo (apoio): trailer oficial
                    </h2>

                    <p className="mb-3">
                        Se quiser sentir o tom de <em>Guerra Civil</em> em poucos minutos, o trailer funciona como uma bússola emocional.
                        Mais do que antecipar confrontos, ele revela a mudança de atmosfera do MCU: o brilho heroico dá lugar à tensão,
                        os diálogos ganham peso político e cada olhar carrega desconfiança. Não é apenas &quot;quem vai lutar contra quem&quot; —
                        é &quot;por que estão lutando&quot;.
                    </p>

                    <p className="mb-3">
                        Observe como o material promocional já abandona a ideia de espetáculo leve e assume o desconforto como motor
                        narrativo. A montagem enfatiza divisões, enquadra personagens em lados opostos e transforma o silêncio em
                        ferramenta dramática. O conflito não nasce da violência, mas da incompatibilidade de princípios. E essa escolha
                        estética já anuncia o que o filme vai aprofundar: quando heróis discordam sobre moral, o impacto é inevitável.
                    </p>

                    <p className="mb-3">
                        Assistir ao trailer depois desta análise pode mudar a percepção de detalhes que passam despercebidos em uma
                        primeira visualização. Expressões, pausas, hesitações — tudo sugere que o embate central não é físico, mas
                        ideológico. É ali, na tensão entre autoridade e consciência, que o filme encontra sua verdadeira força.
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
                        <em>Guerra Civil</em> é o momento em que o Capitão América finalmente paga a conta de ser &quot;o cara do certo&quot;.
                        Não porque ele falhou — mas porque insistiu. Aqui, fazer a escolha certa não produz aplauso, não gera unidade
                        e não preserva reputações. Produz ruptura. E ruptura, no MCU, tem consequências que atravessam amizades,
                        instituições e identidades.
                    </p>

                    <p className="mb-3">
                        O filme transforma Steve Rogers em uma pergunta incômoda: o que vale mais, legitimidade ou consciência?
                        Ao recusar obedecer automaticamente, ele não rejeita responsabilidade — ele redefine responsabilidade.
                        A moral deixa de ser uniforme, escudo ou discurso. Torna-se prática diária, repetida, custosa e, quase sempre,
                        impopular. Ser símbolo é fácil quando todos concordam. Difícil é continuar símbolo quando a própria presença
                        provoca divisão.
                    </p>

                    <p className="mb-3">
                        Ao fechar esse ciclo, o MCU amadurece junto com seu herói. O Steve que nasceu como propaganda atravessa
                        culpa histórica, enfrenta sistemas falhos e termina compreendendo algo que poucos líderes aceitam:
                        integridade pode significar isolamento. O preço do ideal não é derrota — é solidão.
                    </p>

                    <p>
                        E quando o símbolo quebra, o que resta não é a ausência de poder, mas a exposição da humanidade.
                        Não sobra o Capitão perfeito. Sobra um homem tentando permanecer inteiro em um mundo que prefere
                        respostas simples, protocolos claros e culpados definidos. <em>Guerra Civil</em> encerra essa etapa
                        lembrando que maturidade não é consenso — é tensão suportada. E Steve Rogers escolhe suportá-la.
                    </p>

                    {/* CTA interno — ciclo Capitão América (4 artigos) */}
                    <ContinueNoLexara
                        description="Para fechar o ciclo com ordem editorial (do símbolo ao rompimento), aqui está a sequência natural de leitura:"
                        links={[
                            {
                                href: "/filmes-series/marvel/capitao-america/o-primeiro-vingador-simbolo",
                                label: "1) O Primeiro Vingador: nascimento do símbolo",
                                primary: true,
                            },
                            {
                                href: "/filmes-series/marvel/capitao-america/culpa-historica-e-ideal",
                                label: "2) Entre propaganda e ideal: a culpa histórica",
                            },
                            {
                                href: "/filmes-series/marvel/capitao-america/o-soldado-invernal-analise",
                                label: "3) O Soldado Invernal: guerra contra o sistema",
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
                        As referências abaixo servem como base para dados verificáveis — elenco, direção, datas de lançamento,
                        desempenho de bilheteria e posicionamento oficial do estúdio. Elas sustentam o terreno factual da análise.
                        A leitura crítica, as conexões temáticas e as interpretações sobre símbolo, poder e ruptura são originais do LEXARA.
                    </p>

                    <p className="mb-3">
                        Em um universo cinematográfico que cresce por camadas, consultar fontes primárias ajuda a separar
                        intenção criativa de percepção do público. O objetivo aqui não é repetir sinopses, mas entender como
                        decisões narrativas dialogam com contexto industrial, recepção crítica e momento histórico do MCU.
                    </p>

                    <ul>
                        <li>
                            <a
                                href="https://www.marvel.com/movies/captain-america-civil-war"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Marvel.com — página oficial do filme, sinopse e materiais institucionais
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.imdb.com/title/tt3498820/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                IMDb — ficha técnica completa, elenco, equipe criativa e datas de lançamento
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.boxofficemojo.com/title/tt3498820/"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                Box Office Mojo — desempenho comercial, comparativos e números de bilheteria
                            </a>
                        </li>
                    </ul>

                    <p className="text-sm text-slate-400 mt-6">
                        <strong>Nota editorial LEXARA:</strong> esta análise prioriza estrutura narrativa, construção simbólica
                        e implicações temáticas. Não se trata de julgar personagens como exemplos morais absolutos, mas de compreender
                        como o filme articula poder, responsabilidade e fratura ideológica dentro do MCU.
                    </p>
                </section>

                {/* <AdSlot label="Anúncio (Rodapé do artigo)" /> */}

                <footer className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
                    <p>
                        Publicado em{" "}
                        <span className="text-slate-300">
                            {article.publishedAtLabel ?? formatISOToDateLabel(article.publishedAtISO)}
                        </span>
                        . <span className="text-slate-500">({formatISOToDateLabel(article.publishedAtISO)})</span>
                    </p>
                </footer>
            </article>
        </>
    );
}
