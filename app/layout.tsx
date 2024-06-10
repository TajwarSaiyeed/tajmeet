import "./globals.css";
import {cn} from "@/lib/utils";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ReactNode} from "react";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "TajMeet",
    description: "TajMeet is a platform for connecting with people.",
};

const RootLayout = ({children}: Readonly<{ children: ReactNode }>) => {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={cn(inter.className, "bg-dark-2")}>
            {children}
            </body>
            </html>
        </ClerkProvider>
    );
};

export default RootLayout;
