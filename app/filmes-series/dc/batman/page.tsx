import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import BatmanCard from "@/components/dc/batman/BatmanCard";

export const revalidate = 60;

export default function DcBatmanPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/filmes-series/dc"
                    label="Voltar para Filmes & Séries"
                />
            }
        >
            <BatmanCard />
        </CardLayout>
    );
}
