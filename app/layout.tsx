import "./globals.css";
import {cn} from "@/lib/utils";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "TajMeet",
    description: "TajMeet is a platform for connecting with people.",
};

const RootLayout = ({children}: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang="en">
        <body className={cn(inter.className, "bg-dark-2")}>
        {children}
        </body>
        </html>
    );
};

export default RootLayout;
