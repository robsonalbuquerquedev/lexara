import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsentMode from "@/components/ConsentMode";
interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
            {/* Header semântico */}

            <header className="w-full">
                <Header />
            </header>

            {/* Conteúdo principal */}
            <main className="flex-1 w-full">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    {children}
                </div>
            </main>

            {/* Footer semântico */}
            <footer className="w-full">
                <Footer />
            </footer>
            <ConsentMode />
        </div>
    );
}
