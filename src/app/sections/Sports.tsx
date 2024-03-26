import SportsCard from "@/components/SportsCard";
import React from "react";
import { sportsData } from '../../constants'


const Sports = () => {
    return (
        <section>
            <div className="">
                <div className=" font-poppins font-bold leading-36 text-left text-2xl pb-1">
                    Sports
                </div>
                <div className="bg-[#738FFF] border-2 w-[80px] border-[#738FFF] h-[0.5px]"></div>
            </div>

            <div className="grid gap-2 sm:gap-4 grid-cols-2 mt-16 lg:grid-cols-4 md:grid-cols-3  gap-y-5 sm:grid-cols-2 pa  sm:gap-y-14 xl:grid-cols-5">
                {sportsData.map((item) => (
                    <SportsCard key={item.name + item.id} {...item} />
                ))}
            </div>
            <div className="flex justify-center items-center my-6 ">
                <button className="bg-[#2C9CF0] px-4 py-2 rounded-sm">
                    See More</button>
            </div>
        </section>
    );
};

export default Sports;
