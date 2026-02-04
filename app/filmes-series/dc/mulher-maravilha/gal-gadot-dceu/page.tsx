import type { Metadata } from "next";
import GalGadotDceu from "@/components/dc/mulher-maravilha/GalGadotDceu";
import { buildArticleMetadata } from "@/lib/seo/build-article-metadata";
import { galGadotDceuArticle } from "@/content/articles/mulher-maravilha/gal-gadot-dceu";
import ShareBar from "@/components/share/ShareBar";
import HomeNewsletter from "@/components/HomeNewsletter";

export async function generateMetadata(): Promise<Metadata> {
    return buildArticleMetadata({
        article: galGadotDceuArticle,

        title:
            "Gal Gadot como Mulher-Maravilha: carisma, limites e o impacto cultural da era Snyder | LEXARA",

        description:
            "Uma leitura crítica da Mulher-Maravilha de Gal Gadot no DCEU: presença em cena, fisicalidade, iconografia e as escolhas da era Snyder que tornaram essa Diana um ícone — e também revelaram seus limites.",

        keywords: [
            "Gal Gadot Mulher-Maravilha",
            "Mulher-Maravilha Gal Gadot",
            "Mulher-Maravilha DCEU",
            "DCEU Mulher-Maravilha",
            "era Snyder Mulher-Maravilha",
            "Zack Snyder Mulher-Maravilha",
            "Zack Snyder’s Justice League Mulher-Maravilha",
            "Diana Prince DCEU",
            "Wonder Woman DCEU",
            "Mulher-Maravilha no cinema",
            "iconografia da Mulher-Maravilha",
            "impacto cultural Mulher-Maravilha",
            "análise Mulher-Maravilha",
            "LEXARA Mulher-Maravilha",
        ],

        ogDescription:
            "O que define a Diana de Gal Gadot no DCEU: presença, ação, iconografia e o “modo mito” da era Snyder — com seus acertos, limites e legado cultural.",

        twitterDescription:
            "Presença, fisicalidade e iconografia: por que a Mulher-Maravilha de Gal Gadot virou referência no DCEU — e onde a era Snyder fortalece (e engessa) a personagem.",

        ogImagePath:
            "/og/mulhermaravilha/og-gal-gadot-mulher-maravilha-era-snyder.png",

        ogImageAlt:
            "LEXARA — Gal Gadot como Mulher-Maravilha: impacto cultural e era Snyder",
    });
}

export const revalidate = 60;

export default function GalGadotDceuPage() {
    return (
        <>
            <GalGadotDceu article={galGadotDceuArticle} />
            <ShareBar
                title={galGadotDceuArticle.title}
                slug={galGadotDceuArticle.slug}
                canonicalBase="https://lexara.com.br"
            />
            <HomeNewsletter />
        </>
    )
}