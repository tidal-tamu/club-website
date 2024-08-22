import ScheduleList from "./ScheduleList";

export interface ScheduleItem {
    time: string;
    event: string;
    location: string;
}

const day1: ScheduleItem[] = [
    { time: "12:00 PM", event: "Lunch", location: "REC!" },
    { time: "12:00 PM", event: "Lunch", location: "REC!" },
    { time: "12:00 PM", event: "Lunch", location: "REC!" },
    { time: "12:00 PM", event: "Lunch", location: "REC!" },
];

const day2: ScheduleItem[] = [
    { time: "12:00 PM", event: "Lunch", location: "REC!" },
    { time: "12:00 PM", event: "Lunch", location: "REC!" },
    { time: "12:00 PM", event: "Lunch", location: "REC!" },
    { time: "12:00 PM", event: "Lunch", location: "REC!" },
];

export default function Schedule() {
    return (
        <div className="flex flex-col justify-center gap-16">
            <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-16 mx-8 lg:mx-32">
                <ScheduleList list={day1} day={1} />
                <ScheduleList list={day2} day={2} />
            </div>
            <a
                href="https://google.com" // change this link
                target="_blank"
                className="text-gray-500 flex justify-center items-center gap-2 text-center text-sm hover:underline"
            >
                Add to Google Calendar
                <img src="./icons/shapes/external-link.svg" className="w-4" />
            </a>
        </div>
    );
}
