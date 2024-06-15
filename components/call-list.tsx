'use client';
import {useGetCalls} from "@/hooks/useGetCalls";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {CallRecording} from "@stream-io/video-client";
import MeetingCard from "@/components/meeting-card";
import Loader from "@/components/loader";
import {Call} from "@stream-io/video-react-sdk";

interface CallListProps {
    type: 'upcoming' | 'recordings' | 'ended';
}

const CallList = ({type}: CallListProps) => {

    const {isLoading, endedCalls, upcomingCalls, callRecordings} = useGetCalls();
    const router = useRouter();

    const [recordings, setRecordings] = useState<CallRecording[]>([])

    const getCalls = () => {
        switch (type) {
            case 'upcoming':
                return upcomingCalls;
            case 'recordings':
                return recordings;
            case 'ended':
                return endedCalls;
            default:
                return [];
        }
    }

    const getNoCallsMessage = () => {
        switch (type) {
            case 'upcoming':
                return "No upcoming calls"
            case 'recordings':
                return "No recordings"
            case 'ended':
                return "No Previous Calls"
            default:
                return ""
        }
    }

    const calls = getCalls();
    const noCallsMessage = getNoCallsMessage();

    useEffect(() => {
        const fetchRecordings = async () => {
            const callData = await Promise.all(
                callRecordings?.map((meeting) => meeting.queryRecordings()) ?? [],
            );

            const recordings = callData
                .filter((call) => call.recordings.length > 0)
                .flatMap((call) => call.recordings);

            setRecordings(recordings);
        };

        if (type === 'recordings') {
            fetchRecordings();
        }
    }, [type, callRecordings]);

    if (isLoading) return <Loader/>;


    return (
        <div className={'grid grid-cols-1 gap-5 xl:grid-cols-2'}>
            {
                calls && calls.length > 0 ? calls.map((meeting) => <MeetingCard
                    key={(meeting as Call).id}
                    icon={
                        type === 'ended'
                            ? '/icons/previous.svg'
                            : type === 'upcoming'
                                ? '/icons/upcoming.svg'
                                : '/icons/recordings.svg'
                    }
                    title={
                        (meeting as Call).state?.custom?.description ||
                        (meeting as CallRecording).filename?.substring(0, 20) ||
                        'No Description'
                    }
                    date={
                        (meeting as Call).state?.startsAt?.toLocaleString() ||
                        (meeting as CallRecording).start_time?.toLocaleString()
                    }
                    isPreviousMeeting={type === 'ended'}
                    link={
                        type === 'recordings'
                            ? (meeting as CallRecording).url
                            : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${(meeting as Call).id}`
                    }
                    buttonIcon1={type === 'recordings' ? '/icons/play.svg' : undefined}
                    buttonText={type === 'recordings' ? 'Play' : 'Start'}
                    handleClick={
                        type === 'recordings'
                            ? () => router.push(`${(meeting as CallRecording).url}`)
                            : () => router.push(`/meeting/${(meeting as Call).id}`)
                    }
                />) : (
                    <div className={'text-white'}>
                        {noCallsMessage}
                    </div>
                )
            }
        </div>
    );
};

export default CallList;