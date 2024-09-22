"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import HomeForm from "./_components/HomeForm";

export default function HomePage() {
    const { data: session, status } = useSession();
    console.log("from home", session);

    if (status === "authenticated") redirect("/dashboard");

    return <HomeForm />;
}
