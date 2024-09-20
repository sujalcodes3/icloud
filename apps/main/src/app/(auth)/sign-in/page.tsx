"use client";
import HomeForm from "@/app/_components/HomeForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Sign(): React.ReactNode {
    const { status } = useSession();
    if (status === "authenticated") {
        redirect("/");
    }
    return <div>{status === "unauthenticated" ? <HomeForm /> : <></>}</div>;
}
