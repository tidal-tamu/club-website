import { useEffect, useMemo, useState } from "react";
import { Meteors } from "../Meteors";
import LiveScheduleList from "./LiveScheduleList";
import { ScheduleItem } from "./Schedule";

const test: ScheduleItem[] = [
    { time: "8:00 AM", event: "Student Check-in Begins", location: "REC 243" },
    { time: "8:00 AM", event: "Student Check-in Begins", location: "REC 243" },
    { time: "8:00 AM", event: "Student Check-in Begins", location: "REC 243" },
];

export default function LiveSchedule() {
    const meteors = useMemo(() => <Meteors number={7} />, []);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 100); // 100 ms for accuracy
    }, []);

    return (
        <div className="hidden 2xl:block relative w-full h-full overflow-hidden">
            <div className="-z-10">{meteors}</div>
            <div className="w-full h-full flex justify-center items-center bg-spaceBlack bg-[url('stars.svg')] text-white z-10 gap-20">
                <img
                    src="/icons/shapes/8star.png"
                    className="w-[500px] animate-pulse"
                />
                <div className="flex flex-col justify-center items-center">
                    <img
                        src="./icons/logos/tidal-sp24.png"
                        className="w-[700px] mb-36"
                    />
                    <div>
                        <LiveScheduleList list={test} />
                    </div>
                </div>
                <p className="flex text-hackRed justify-center items-center zing-base text-9xl w-120 h-120 whitespace-nowrap">
                    {date.toLocaleTimeString()}
                </p>
            </div>
        </div>
    );
}
