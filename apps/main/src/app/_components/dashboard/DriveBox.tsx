import Image from "next/image";
import DashCardWrapper from "../ui/DashCardWrapper";

import Logo from "../../../../public/icloud-logo.webp";
import { Clock } from "lucide-react";

export default function DriveBox(): React.ReactNode {
    return (
        <DashCardWrapper className={`md:col-span-2`}>
            <nav className={`flex justify-start items-center h-1/5 gap-4 px-4`}>
                <Image alt={`photos logos`} src={Logo} height={50} width={50} />
                <div className={`flex flex-col text-slate-900`}>
                    <p className={`text-xl font-bold`}>Drive</p>
                    <div className={`flex gap-2 items-center`}>
                        <Clock color="#3b82f6" size={20} /> <span>Recents</span>
                    </div>
                </div>
            </nav>
            <section
                className={`rounded-b-2xl h-4/5 bg-white bg-opacity-75`}
            ></section>
        </DashCardWrapper>
    );
}
