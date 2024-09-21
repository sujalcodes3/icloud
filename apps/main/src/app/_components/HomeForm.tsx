import Link from "next/link";
import Button from "./ui/Button";
import { signIn } from "next-auth/react";

export default function HomeForm(): React.ReactNode {
    return (
        <main
            className={`h-max w-max flex flex-col items-center gap-6 p-10 bg-white drop-shadow-md rounded-lg`}
        >
            <p className={`text-6xl text-slate-700 font-bold`}>iCloud</p>
            <Button
                text="Sign up using Github"
                type="primary"
                onClick={async () => {
                    await signIn("github", {
                        redirectTo: "/dashboard",
                    });
                }}
            />
            <div className={`flex flex-col gap-2 items-center select-none`}>
                <span className={`text-md text-slate-500`}>
                    Already have an account?
                </span>
                <Button text="Login using passkey" type="secondary" />
            </div>
        </main>
    );
}
