import { useEffect, useMemo, useState } from "react";
import { Meteors } from "../Meteors";

export default function LiveSchedule() {
    const meteors = useMemo(() => <Meteors number={7} />, []);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 100);
    }, []);

    return (
        <>
            <div className="w-full h-full flex justify-center items-center bg-spaceBlack bg-[url('stars.svg')] text-white">
                <img
                    src="/icons/shapes/8star.png"
                    className="lg:ml-32 2xl:ml-36 md:mb-0 w-64 md:w-1/2 xl:w-1/3 animate-pulse"
                />
                <p className="zing-base text-8xl">
                    {date.toLocaleTimeString()}
                </p>
            </div>
            <div className="w-full h-full">{meteors}</div>
        </>
    );
}
