import { Gamepad2, BookOpen, Blocks, Users, History, } from "lucide-react";

export const categoryGames = [
    {
        title: "Narrativa & Mundo",
        description:
            "Histórias, lore, personagens e a construção de universos que fazem alguns jogos parecerem livros jogáveis.",
        href: "/games/narrativa-mundo",
        icon: BookOpen,
    },
    {
        title: "Mecânicas & Design",
        description:
            "Gameplay na veia: sistemas, progressão, combate, level design e por que certos jogos viciam (no bom sentido).",
        href: "/games/mecanicas-design",
        icon: Blocks,
    },
    {
        title: "Indies & Autorais",
        description:
            "Experiências criativas, diferentes e cheias de personalidade — onde inovação costuma aparecer primeiro.",
        href: "/games/indies-autorais",
        icon: Gamepad2,
    },
    {
        title: "Multiplayer & Competitivo",
        description:
            "Coop, PVP, ranked, meta, balanceamento e aquela adrenalina de jogar contra ou com outras pessoas.",
        href: "/games/multiplayer-competitivo",
        icon: Users,
    },
    {
        title: "Retro & Clássicos",
        description:
            "Do 8-bit ao PS2: jogos que marcaram época, influenciaram o mercado e ainda são referência hoje.",
        href: "/games/retro-classicos",
        icon: History,
    },
];
