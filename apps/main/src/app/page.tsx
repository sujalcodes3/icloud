import HomeForm from "./_components/HomeForm";

export default function HomePage(): React.ReactNode {
    return (
        <div className={`h-screen w-screen flex items-center justify-center`}>
            <HomeForm />
        </div>
    );
}
