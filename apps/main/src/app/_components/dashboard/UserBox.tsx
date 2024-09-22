"use client";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import DashCardWrapper from "../ui/DashCardWrapper";
import { Session } from "next-auth";

export default function UserBox({
    session,
}: {
    session: Session;
}): React.ReactNode {
    return (
        <DashCardWrapper className={``}>
            <div
                className={`h-3/4 600 flex flex-col justify-evenly rounded-t-2xl px-10`}
            >
                <div className={`rounded-full h-20 w-20 overflow-hidden relative`}>
                    <Image
                        className="object-cover"
                        src={session.user.image!}
                        quality={100}
                        alt={session.user.name!}
                        priority={true}
                        fill={true}
                    />
                </div>
                <div className={`h-2/5`}>
                    <p className={`text-slate-900 text-3xl font-bold`}>
                        {session.user.name}
                    </p>
                </div>
            </div>
            <div
                className={`px-10 flex justify-between  items-center h-1/4 rounded-b-2xl`}
            >
                <p className={`text-slate-900 text-3xl font-semibold`}>iCloud</p>
                <button
                    className={`text-red-500 font-semibold text-xl`}
                    onClick={async () => {
                        await signOut({ redirectTo: "/api/auth/signin" });
                    }}
                >
                    Logout
                </button>
            </div>
        </DashCardWrapper>
    );
}
