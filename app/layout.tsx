import '@stream-io/video-react-sdk/dist/css/styles.css'
import "react-datepicker/dist/react-datepicker.css";

import "./globals.css";
import {cn} from "@/lib/utils";
import {ReactNode} from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";
import {Toaster} from "@/components/ui/toaster";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "TajMeet",
    description: "TajMeet is a platform for connecting with people.",
    icons: {
        icon: '/icons/logo.svg'
    }
};

const RootLayout = ({children}: Readonly<{ children: ReactNode }>) => {
    return (
        <ClerkProvider
            appearance={{
                layout: {
                    logoImageUrl: "/icons/logo.svg",
                    socialButtonsVariant: "iconButton"
                },
                variables: {
                    colorText: "#fff",
                    colorPrimary: "#0E78F9",
                    colorBackground: "#1c1f2e",
                    colorInputBackground: "#252a41",
                    colorInputText: "#fff"
                }
            }}
        >
            <html lang="en">
            <body className={cn(inter.className, "bg-dark-2")}>
            {children}
            <Toaster/>
            </body>
            </html>
        </ClerkProvider>
    );
};

export default RootLayout;
