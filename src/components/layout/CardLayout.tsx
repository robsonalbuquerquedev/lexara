import { ReactNode } from "react";

type CardLayoutProps = {
    header?: ReactNode;
    children: ReactNode;
};

export default function CardLayout({ header, children }: CardLayoutProps) {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            {header && <div className="mb-8">{header}</div>}

            <div className="flex flex-col gap-20">
                {children}
            </div>
        </div>
    );
}
