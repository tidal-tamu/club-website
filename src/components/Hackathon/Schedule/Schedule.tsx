import ScheduleList from "./ScheduleList";

export interface ScheduleItem {
    time: string;
    event: string;
    location: string;
}

const day1: ScheduleItem[] = [
    { time: "9:00 AM", event: "Coming Soon", location: "....." },
    { time: "10:00 AM", event: "Coming Soon", location: "....." },
    { time: "10:30 AM", event: "Coming Soon", location: "....." },
    { time: "11:00 AM", event: "Coming Soon", location: "....." },
    { time: "12:30 PM", event: "Coming Soon", location: "....." },
    { time: "2:00 PM", event: "Coming Soon", location: "....." },
    { time: "5:00 PM", event: "Coming Soon", location: "....." }
];

const day2: ScheduleItem[] = [
    { time: "9:00 AM", event: "Coming Soon", location: "....." },
    { time: "11:00 AM", event: "Coming Soon", location: "....." },
    { time: "11:30 AM", event: "Coming Soon", location: "....." },
    { time: "12:30 PM", event: "Coming Soon", location: "....." },
    { time: "3:00 PM", event: "Coming Soon", location: "....." },
    { time: "4:00 PM", event: "Coming Soon", location: "....." },
    { time: "5:00 PM", event: "Coming Soon", location: "....." },
];

export default function Schedule() {
    return (
        <>
            <h1 className="text-hackRed text-6xl lg:text-7xl font-bold text-center my-[12vh] plasma-bold">
                WHATS NEXT?
            </h1>
        
            <div className="flex flex-col justify-center gap-16 select-none">
                <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-16 mx-8 lg:mx-20 xl:mx-44 select-none">
                    <ScheduleList list={day1} day={"SATURDAY 3/22"} />
                    <ScheduleList list={day2} day={"SUNDAY 3/23"} />
                </div>
                <a
                    href="https://calendar.google.com/calendar/u/4?cid=OWFmZGJlYjFjZDk0NWFiZjU5OWMyYjg0YzgzZGZlY2QzOWQxZTk4ZWRlYjVjNmMxZWQ4ZWQ5NGNlMjdkNWE1YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                    target="_blank"
                    className="text-white flex justify-center gap-2 text-center text-sm hover:underline translate-x-1 pb-4 sm:pb-0"
                >
                    Add to Google Calendar
                    <img src="./icons/shapes/external-link-white.svg" className="w-4" />
                </a>
            </div>
        </>
    );
}
