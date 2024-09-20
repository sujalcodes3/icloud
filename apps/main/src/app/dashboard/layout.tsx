import Navbar from "../_components/ui/Navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <div className={`flex flex-col items-center justify-start w-screen h-screen gap-10`}>
            <Navbar />
            {children}
        </div>
    );
}
