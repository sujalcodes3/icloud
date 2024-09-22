"use server";
import Dashboard from "../_components/dashboard/Dashboard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await auth();
    if (!session) redirect("/");
    console.log("from dashboarPage: ", session);
    return <Dashboard session={session} />;
}
