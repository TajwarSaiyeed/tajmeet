import {FC} from 'react';
import {cn} from "@/lib/utils";
import Image from "next/image";

interface HomeCardProps {
    img: string;
    title: string;
    description: string;
    handleClick: () => void;
    className?: string;
}

const HomeCard: FC<HomeCardProps> = ({img, title, description, handleClick, className}) => {
    return (
        <div
            className={cn("bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[470px] min-h-[260px] rounded-[14px] cursor-pointer", className)}
            onClick={handleClick}
        >
            <div className={'flex-center glassmorphism size-12 rounded-[10px]'}>
                <Image
                    src={img}
                    alt={"meeting"}
                    width={27}
                    height={27}
                />
            </div>
            <div className={'flex flex-col gap-2'}>
                <h1 className={'text-2xl font-bold'}>{title}</h1>
                <p className={'text-lg font-normal'}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HomeCard;