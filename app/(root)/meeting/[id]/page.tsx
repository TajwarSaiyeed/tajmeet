'use client'
import React, {useState} from 'react';
import {useUser} from "@clerk/nextjs";
import {StreamCall, StreamTheme} from "@stream-io/video-react-sdk";
import MeetingSetup from "@/app/(root)/meeting/[id]/components/meeting-setup";
import MeetingRoom from "@/app/(root)/meeting/[id]/components/meeting-room";
import {useGetCallById} from "@/hooks/useGetCallById";
import Loader from "@/components/loader";

const Meeting = ({params: {id}}: { params: { id: string } }) => {
    const { isLoaded} = useUser();

    const [isSetupComplete, setIsSetupComplete] = useState(false);

    const {call, isCallLoading} = useGetCallById(id);

    if (!isLoaded || isCallLoading) return <Loader/>

    return (
        <main className={'h-screen w-full'}>
            <StreamCall call={call}>
                <StreamTheme>
                    {!isSetupComplete ? (
                        <MeetingSetup setIsSetupComplete={setIsSetupComplete}/>
                    ) : (
                        <MeetingRoom/>
                    )}
                </StreamTheme>
            </StreamCall>
        </main>
    );
};

export default Meeting;