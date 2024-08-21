import { ScheduleItem } from "./Schedule";

interface ScheduleListProps {
    list: ScheduleItem[]; // Add the 'list' prop here
}

export default function ScheduleList({ list }: ScheduleListProps) {
    return (
        <div className="flex flex-col flex-1">
            {list.map((item: any, index: number) => (
                <div
                    className=" bg-lightBlue bg-opacity-50 border border-navy rounded-md p-4 mb-4"
                    key={index}
                >
                    <div className="font-mont flex justify-between">
                        <p className="font-medium">{item["time"]}</p>
                        <p className="font-medium">{item["event"]}</p>
                    </div>
                    <div className="flex justify-end">
                        <p className="font-light">{item["location"]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
