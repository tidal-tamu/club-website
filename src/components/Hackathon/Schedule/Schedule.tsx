import ScheduleList from "./ScheduleList";

export interface ScheduleItem {
    time: string;
    event: string;
    location: string;
}

const day1: ScheduleItem[] = [
    { time: "9:00 AM", event: "Check-in Starts", location: "Outside MSC 2300" },
    { time: "9:00 AM", event: "Check-in Starts", location: "Outside MSC 2300" },
    { time: "9:00 AM", event: "Check-in Starts", location: "Outside MSC 2300" },
    { time: "9:00 AM", event: "Check-in Starts", location: "Outside MSC 2300" },
];

const day2: ScheduleItem[] = [
    { time: "9:00 AM", event: "Check-in Starts", location: "Outside MSC 2300" },
    { time: "9:00 AM", event: "Check-in Starts", location: "Outside MSC 2300" },
    { time: "9:00 AM", event: "Check-in Starts", location: "Outside MSC 2300" },
    { time: "9:00 AM", event: "Check-in Starts", location: "Outside MSC 2300" },
];

export default function Schedule() {
    return (
        <div className="flex flex-col justify-center gap-16">
            <h1 className="text-navy text-5xl lg:text-6xl font-bold text-center text-nowrap">
                SCHEDULE
            </h1>
            <div className="flex justify-center items-center gap-10 mx-32">
                <ScheduleList list={day1} />
                <ScheduleList list={day2} />
            </div>
        </div>
    );
}
