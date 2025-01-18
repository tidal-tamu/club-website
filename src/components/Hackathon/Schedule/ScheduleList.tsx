import { ScheduleItem } from "./Schedule";
import { Meteors } from "../Meteors";

interface ScheduleListProps {
    list: ScheduleItem[];
    day: string;
}

export default function ScheduleList({ list, day }: ScheduleListProps) {
    return (
        <div className="flex flex-col flex-1 min-w-60 relative">
            <Meteors number={7}/>
            <h1 className="text-navy text-5xl font-bold text-center text-nowrap mb-4">
                {day}
            </h1>
            <div className="relative">
                {list.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="flex items-center relative pb-6"
                    >
                        <div className="bg-[#E2F6FF] hover:bg-navy hover:text-white transition-transform transform hover:scale-110 border border-navy rounded-md p-4 flex-1 relative z-[1]">
                            <div className="font-mont flex justify-between gap-10 transition-colors">
                                <p className="text-lg font-medium whitespace-nowrap">
                                    {item["time"]}
                                </p>
                                <p className="text-lg font-medium whitespace">
                                    {item["event"]}
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <p className="font-light">{item["location"]}</p>
                            </div>
                        </div>
                        {index < list.length - 1 && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 border-2 h-full border-l-2 border-navy"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
