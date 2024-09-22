"use client";
import Image from "next/image";

import DashCardWrapper from "../ui/DashCardWrapper";

import Logo from "../../../../public/photos-logo.webp";
import { Session } from "next-auth";
import UploadPhotoDialog from "./modals/UploadPhoto";
import { useState } from "react";
import { CirclePlus } from "lucide-react";
import { trpc } from "@/app/_trpc/client";
import ImageInfo from "../ui/ImageInfo";

export default function PhotosBox({
    session,
}: {
    session: Session;
}): React.ReactNode {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const getImages = trpc.getImagesByUser.useQuery({ id: session.user.id });
    return (
        <>
            <DashCardWrapper className={`h-1/3 md:h-full md:w-2/3`}>
                <nav className={`flex justify-between items-center h-1/5 gap-4 px-4`}>
                    <div className={`flex justify-start gap-4`}>
                        <Image alt={`photos logos`} src={Logo} height={50} width={50} />
                        <div className={`flex flex-col text-slate-900`}>
                            <p className={`text-xl font-bold`}>Photos</p>
                            <div className={`flex`}>
                                <span>Library &#8226; 0 Photos</span>
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
                <section
                    className={`rounded-b-2xl px-6 py-3 flex flex-wrap h-4/5 bg-white bg-opacity-75`}
                >
                    {getImages.data !== undefined && getImages.data.length > 0
                        ? getImages.data?.map((ent, idx) => (
                            <ImageInfo image={ent} key={idx} refetchPoint={getImages} />
                        ))
                        : "No Photos"}
                </section>
            </DashCardWrapper>
            <UploadPhotoDialog isOpen={modalOpen} setIsOpen={setModalOpen} />
        </>
    );
}
