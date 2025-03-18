import { ScheduleListProps } from "./ScheduleList";

export default function LiveScheduleList({ list }: ScheduleListProps) {
    return (
        <div className="flex flex-col justify-self-start" id="schedule">
            <div className="relative">
                {list.map((item: any, index: number) => {
                    const scaleValue = (100 - index * 10) / 100;
                    const opacityValue = (100 - index * 35) / 100;
                    return (
                        <div
                            key={index}
                            className="flex items-center relative pb-6"
                        >
                            <div
                                className="flex flex-col font-mont bg-transparent border-4 border-gray-300 rounded-xl p-4 z-[1] text-2xl gap-4 w-[700px]"
                                style={{
                                    transform: `scale(${scaleValue})`,
                                    opacity: opacityValue,
                                }}
                            >
                                <div className="flex justify-between font-semibold">
                                    <div className=" whitespace-nowrap">
                                        {item["time"]}
                                    </div>

                                    <div className="whitespace-nowrap">
                                        {item["event"]}
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <p className="whitespace-nowrap">
                                        {item["location"]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
