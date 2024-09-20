"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import HomeForm from "./_components/HomeForm";

export default function HomePage(): React.ReactNode {
    const { data: session, status } = useSession();
    if(status !== "authenticated") {
        redirect("/sign-in");
    } else { 
        redirect("/dashboard");
    }
    return (
        <div className={``}>
            This is the home page
            {/*<HomeForm />*/}
        </div>
    );
}
