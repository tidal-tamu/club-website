import { useState } from "react";

interface PrizeListProps {
    details: {
        place: string;
        desc: string;
        icon: string;
    };
}

export default function PrizeList({ details }: PrizeListProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative flex w-full lg:w-2/5 h-40 justify-center items-center border-navy border-[7px] rounded-3xl transition-all duration-300 p-12 ${
                isHovered ? "bg-navy" : "bg-white text-black"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h1
                className={`absolute transition-opacity duration-300 text-3xl font-bold text-nowrap select-none ${
                    isHovered ? "opacity-0" : "opacity-100"
                }`}
            >
                {details.place}
            </h1>
            <p
                className={`absolute transition-opacity duration-300 text-xl text-center select-none p-3 ${
                    isHovered ? "opacity-100 text-white" : "opacity-0"
                }`}
            >
                {details.desc}
            </p> 
            <img
                src="./icons/shapes/yellow-star.svg"
                className={`absolute transition-opacity duration-300 right-0 top-0 -translate-x-1 lg:-translate-x-2 translate-y-2 w-[85px] lg:w-[120px] ${
                    isHovered ? "opacity-25" : "opacity-100"
                }`}
            />
        </div>
    );
}
