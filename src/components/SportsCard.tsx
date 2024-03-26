import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface Props {
    imgURL: any;
    name: string;
    events: string;
    sport: string;
    desc?: string; // Making desc property optional
}
const SportsCard: React.FC<Props> = ({ imgURL, name, events, sport, desc }) => {
    return (

        <div className="flex flex-col flex-1 w-full max-sm:w-full h-[480px] justify-start   sm:h-[511px] bg-[#3B3E47] px-0  py-0  sm:px-2 sm:py-2">
            <Image
                src={imgURL}
                alt={name}
                className=" object-cover   p-2 sm:p-0  sm:h-[385px] h-[75%] w-full "
                width={1080}
                height={1080}

            />

            <div className="flex items-start justify-start px-1 sm:px-0">
                <h1 className="text-[13px] font-medium leading-5  text-left py-2 sm:py-5 font-inter tracking-wider sm:text-base ">
                    {name}
                </h1>
            </div>
            {desc && (
                <p className="font-inter sm:text-xs text-[9px] font-normal leading-3 sm:leading-6 text-left  tracking-normal sm:tracking-wide">
                    {desc}
                </p>
            )}
            {events && sport && (
                <div className="flex sm:justify-between justify-normal gap-x-16 sm:gap-0 w-full   sm:space-y-0   space-y-2   h-[78px] sm:h-[54px] bg-[#292B32] px-2 items-center">
                    <div className="flex-col  flex items-start">
                        <p className="font-inter whitespace-nowrap sm:text-xs text-[9px] font-normal leading-4 text-[#DFDFDF] tracking-wide ">Total Events</p>
                        <p className="font-inter sm:text-sm text-xs font-medium leading-4.5 tracking-wider">{events}</p>
                    </div>
                    <div className="flex flex-col items-start ">
                        <p className="font-inter whitespace-nowrap sm:text-xs text-[9px] font-normal leading-4 text-[#DFDFDF] tracking-wide ">Sport</p>
                        <p className="font-inter sm:text-sm text-xs font-medium leading-4.5 tracking-wider mb-2">{sport}</p>
                    </div>
                </div>
            )}
        </div>

    );
};

export default SportsCard;
