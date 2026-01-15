"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, Info, HelpCircle, BookOpen, Image, Mail } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav aria-label="Main navigation" className="relative">
            {/* Desktop menu */}
            <ul className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
                <NavItem href="/" icon={<Home size={16} />} label="Início" />
                <NavItem href="/sobre" icon={<Info size={16} />} label="Sobre" />
                <NavItem href="/faq" icon={<HelpCircle size={16} />} label="FAQ" />
                <NavItem href="/conteudos" icon={<BookOpen size={16} />} label="Conteúdos" />
                <NavItem href="/galeria" icon={<Image size={16} />} label="Galeria" />
                <NavItem href="/contato" icon={<Mail size={16} />} label="Contato" />
            </ul>

            {/* Mobile button */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-neutral-300 hover:text-white transition-colors"
                aria-label="Abrir menu"
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile menu */}
            {open && (
                <div className="absolute right-0 top-12 z-50 w-56 bg-neutral-950 border border-neutral-800 rounded-lg shadow-lg md:hidden">
                    <ul className="flex flex-col divide-y divide-neutral-800 text-sm">
                        <MobileItem href="/" icon={<Home size={16} />} label="Início" onClick={() => setOpen(false)} />
                        <MobileItem href="/sobre" icon={<Info size={16} />} label="Sobre" onClick={() => setOpen(false)} />
                        <MobileItem href="/faq" icon={<HelpCircle size={16} />} label="FAQ" onClick={() => setOpen(false)} />
                        <MobileItem href="/conteudos" icon={<BookOpen size={16} />} label="Conteúdos" onClick={() => setOpen(false)} />
                        <MobileItem href="/galeria" icon={<Image size={16} />} label="Galeria" onClick={() => setOpen(false)} />
                        <MobileItem href="/contato" icon={<Mail size={16} />} label="Contato" onClick={() => setOpen(false)} />
                    </ul>
                </div>
            )}
        </nav>
    );
}

/* Helpers */

function NavItem({
    href,
    icon,
    label,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <li>
            <Link
                href={href}
                className="flex items-center gap-2 hover:text-white transition-colors"
            >
                {icon}
                {label}
            </Link>
        </li>
    );
}

function MobileItem({
    href,
    icon,
    label,
    onClick,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
}) {
    return (
        <li>
            <Link
                href={href}
                onClick={onClick}
                className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-900 transition-colors"
            >
                {icon}
                {label}
            </Link>
        </li>
    );
}
