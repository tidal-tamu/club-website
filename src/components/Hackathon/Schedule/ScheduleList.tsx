import { ScheduleItem } from "./Schedule";
import { Meteors } from "../Meteors";

export interface ScheduleListProps {
    list: ScheduleItem[];
    day?: string;
}

export default function ScheduleList({ list, day }: ScheduleListProps) {
    return (
        <div className="flex flex-col flex-1 min-w-60 relative" id="schedule">
            <Meteors number={7} />
            <h1 className="text-white font-semibold text-[42px] sm:text-5xl text-center mb-8 zing-base tracking-wide">
                {day}
            </h1>
            <div className="relative">
                {list.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="flex items-center relative pb-6"
                    >
                        <div className="bg-[white] hover:bg-gray-300 transition-transform transform hover:scale-105 border border-gray-400 rounded-md p-4 flex-1 relative z-[1]">
                            {/* <div className="font-mont h-[3vh] flex justify-between items-center transition-colors relative">
                                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-medium whitespace-nowrap">
                                    {item["time"]}
                                </div>

                                <div className="border-l-2 border-black h-[50px] absolute left-1/2 transform -translate-x-[12vw] translate-y-[27%] hidden lg:block mix-blend-difference"></div>

                                <div className="text-sm sm:text-base md:text-lg font-medium whitespace">
                                    {item["event"]}
                                </div>
                            </div> */}
                            <div className="font-mont h-[3vh] flex justify-between items-center transition-colors relative">
                                <div className="relative pl-8 text-sm sm:text-base md:text-lg lg:text-xl font-medium whitespace-nowrap">
                                    <div className="border-l-2 border-black h-[50px] absolute left-1 top-[100%] transform -translate-y-1/2"></div>
                                    {item["time"]}
                                </div>

                                <div className="text-sm sm:text-base md:text-lg font-medium whitespace-nowrap">
                                    {item["event"]}
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <p className="font-light text-sm sm:text-base md:text-lg ">
                                    {item["location"]}
                                </p>
                            </div>
                        </div>
                        {index < list.length - 1 && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 border-2 h-full border-l-2 border-black"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
