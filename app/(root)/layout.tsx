import type {Metadata} from "next";
import React, {ReactNode} from 'react';
import StreamVideoProvider from "@/providers/StreamClient";

export const metadata: Metadata = {
    title: "TajMeet",
    description: "TajMeet is a platform for connecting with people.",
    icons: {
        icon: '/icons/logo.svg'
    }
};

const RootLayout = ({children}: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    );
};

export default RootLayout;