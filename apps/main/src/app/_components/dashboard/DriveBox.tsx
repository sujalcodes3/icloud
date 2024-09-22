"use client";
import { useState } from "react";
import Image from "next/image";
import DashCardWrapper from "../ui/DashCardWrapper";

import Logo from "../../../../public/icloud-logo.webp";
import { CircleEqual, CirclePlus, Clock } from "lucide-react";
import { Session } from "next-auth";

import UploadFileDialog from "./modals/UploadFiles";
import { trpc } from "@/app/_trpc/client";
import FileInfo from "../ui/FileInfo";

export default function DriveBox({
    session,
}: {
    session: Session;
}): React.ReactNode {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const getPdfs = trpc.getPdfsByUser.useQuery({ id: session.user.id });
    return (
        <>
            <DashCardWrapper className={`h-1/3 md:h-full md:w-2/3`}>
                <nav className={`flex justify-between items-center h-1/5 gap-4 px-4`}>
                    <div className={`justify-start flex gap-4`}>
                        <Image alt={`photos logos`} src={Logo} height={50} width={50} />
                        <div className={`flex flex-col text-slate-900`}>
                            <p className={`text-xl font-bold`}>Drive</p>
                            <div className={`flex gap-2 items-center`}>
                                <Clock color="#3b82f6" size={20} /> <span>Recents</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            setModalOpen(true);
                        }}
                    >
                        <CirclePlus color="#4987EA" />
                    </button>
                </nav>
                <section className={`rounded-b-2xl px-6 py-3 h-4/5 bg-white bg-opacity-75`}>
                    {getPdfs.data !== undefined && getPdfs.data.length > 0
                        ? getPdfs.data?.map((ent, idx) => (
                            <FileInfo file={ent} key={idx} refetchPoint={getPdfs} />
                        ))
                        : "No Photos"}
                </section>
            </DashCardWrapper>
            <UploadFileDialog isOpen={modalOpen} setIsOpen={setModalOpen} />
        </>
    );
}
