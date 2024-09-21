import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import TrpcProvider from "./_trpc/TrpcProvider";
import AuthProvider from "./_context/AuthProvider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "iCloud",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <TrpcProvider>
                    <AuthProvider>
                        <div
                            className={`h-screen w-screen flex items-center justify-center`}
                        >
                            {children}
                        </div>
                    </AuthProvider>
                </TrpcProvider>
            </body>
        </html>
    );
}
