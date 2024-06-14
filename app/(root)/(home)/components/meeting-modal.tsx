import Image from "next/image";
import {cn} from "@/lib/utils";
import {FC, ReactNode} from "react";
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent,} from "@/components/ui/dialog"


interface MeetingModalProps {
    title: string;
    image?: string;
    isOpen: boolean;
    buttonIcon?: string;
    buttonText?: string;
    className?: string;
    children?: ReactNode;
    onClose: () => void;
    handleClick?: () => void;
}

const MeetingModal: FC<MeetingModalProps> = ({
                                                 isOpen,
                                                 onClose,
                                                 title,
                                                 className,
                                                 buttonText,
                                                 handleClick,
                                                 image,
                                                 buttonIcon,
                                                 children
                                             }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className={'flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white'}>
                <div className={'flex flex-col gap-6'}>
                    {image && (
                        <div className={'flex justify-center'}>
                            <Image
                                src={image}
                                alt={image}
                                width={72}
                                height={72}
                            />
                        </div>
                    )}
                    <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>{title}</h1>
                    {children}
                    <Button
                        className={'bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0'}
                        onClick={handleClick}
                    >
                        {buttonIcon && (
                            <Image
                                src={buttonIcon}
                                alt={buttonIcon}
                                width={13}
                                height={13}
                            />
                        )} &nbsp;
                        {buttonText || 'Schedule Meeting'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>

    );
};

export default MeetingModal;