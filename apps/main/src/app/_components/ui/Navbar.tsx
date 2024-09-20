import { CircleUser, CirclePlus, Library } from "lucide-react";

export default function Navbar(): React.ReactNode {
    return (
        <nav
            className={`px-5 py-3 bg-opacity-60 w-full bg-white flex items-center justify-between h-max drop-shadow-md`}
        >
            <h2 className={`select-none font-bold text-slate-800 text-2xl`}>
                iCloud
            </h2>
            <span className={`flex gap-8`}>
                <span className={`cursor-pointer`}>
                    <CirclePlus size={30} color="#1e293b" />
                </span>
                <span className={`cursor-pointer`}>
                    <Library size={30} color="#1e293b" />
                </span>
                <span className={`cursor-pointer`}>
                    <CircleUser size={30} color="#1e293b" />
                </span>
            </span>
        </nav>
    );
}
