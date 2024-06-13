'use client'
import {useState} from "react";
import {useRouter} from "next/navigation";
import HomeCard from "@/app/(root)/(home)/components/home-card";

const MeetingTypeList = () => {
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();

    const router = useRouter();
    return (
        <section className={'grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'}>
            <HomeCard
                img={'/icons/add-meeting.svg'}
                title={'New Meeting'}
                description={'Start an instant meeting'}
                handleClick={() => setMeetingState('isJoiningMeeting')}
                className={'bg-orange-1'}
            />
            <HomeCard
                img={'/icons/schedule.svg'}
                title={'Schedule Meeting'}
                description={'Plan you meeting'}
                handleClick={() => setMeetingState('isScheduleMeeting')}
                className={'bg-blue-1'}
            />
            <HomeCard
                img={'/icons/recordings.svg'}
                title={'View Recordings'}
                description={'Check out you recordings.'}
                handleClick={() => router.push('/recordings')}
                className={'bg-purple-1'}
            />
            <HomeCard
                img={'/icons/join-meeting.svg'}
                title={'Join Meeting'}
                description={'via invitation link'}
                handleClick={() => setMeetingState('isJoiningMeeting')}
                className={'bg-yellow-1'}
            />
        </section>
    );
};

export default MeetingTypeList;