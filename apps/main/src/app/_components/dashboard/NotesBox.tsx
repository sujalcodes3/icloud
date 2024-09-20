import Image from "next/image";
import DashCardWrapper from "../ui/DashCardWrapper";

import Logo from "../../../../public/notes-logo.webp";
import { Folder, FilePlus2 } from "lucide-react";

export default function NotesBox(): React.ReactNode {
    return (
        <DashCardWrapper>
            <nav className={`flex justify-between items-center h-1/5 px-4`}>
                <span className={`flex gap-4`}>
                    <Image alt={`photos logos`} src={Logo} height={50} width={50} />
                    <div className={`flex flex-col text-slate-900`}>
                        <p className={`text-xl font-bold`}>Notes</p>
                        <div className={`flex gap-2 items-center`}>
                            <Folder color="#facc15" size={20} /> <span>All iCloud</span>
                        </div>
                    </div>
                </span>
                <button className={`cursor-pointer`}>
                    <FilePlus2 color="#facc15" size={30} />
                </button>
            </nav>
            <section
                className={`rounded-b-2xl h-4/5 bg-white bg-opacity-75`}
            ></section>
        </DashCardWrapper>
    );
}
