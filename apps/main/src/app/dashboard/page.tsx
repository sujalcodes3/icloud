"use client";
//import { useSession } from "next-auth/react";
import Dashboard from "../_components/dashboard/Dashboard";
//import { redirect } from "next/navigation";

export default function DashboardPage(): React.ReactNode {
    //const { data: session, status } = useSession();
    //if (status === "unauthenticated") {
    //    redirect("/sign-in");
    //}
    return (
        <>
            <Dashboard />
        </>
    );
}
