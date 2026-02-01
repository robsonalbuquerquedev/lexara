type AdSlotProps = {
    label: string;
    children?: React.ReactNode;
};

export function AdSlot({ label, children }: AdSlotProps) {
    return (
        <aside
            aria-label={label}
            className="my-10 rounded-2xl border border-slate-800 bg-slate-950/40 p-6 text-center"
        >
            {children ? (
                children
            ) : (
                <>
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="mt-2 text-sm text-slate-300">
                        Espaço reservado para anúncio (AdSense) — carregado conforme consentimento.
                    </p>
                </>
            )}
        </aside>
    );
}
