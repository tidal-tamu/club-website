import ScheduleList from "./ScheduleList";

export interface ScheduleItem {
    time: string;
    event: string;
    location: string;
}

const day1: ScheduleItem[] = [
    { time: "9:00 AM", event: "Check-in Starts", location: "REC Lobby" },
    { time: "10:00 AM", event: "Company Chat", location: "REC 243" },
    { time: "10:30 AM", event: "Opening Ceremony", location: "REC 243" },
    { time: "11:00 AM", event: "NVIDIA Workshop", location: "REC 243" },
    { time: "12:30 PM", event: "Lunch & Company Presentations", location: "REC 243" },
    { time: "2:00 PM", event: "Candy Networking Event", location: "REC 243" },
    { time: "5:00 PM", event: "Wrap up on day one", location: "Get some rest and come back for day 2!" },
];

const day2: ScheduleItem[] = [
    { time: "9:00 AM", event: "Check-in", location: "REC Lobby" },
    { time: "11:00 AM", event: "Final Submissions", location: "REC 243" },
    { time: "11:30 AM", event: "Lunch & Company presentations", location: "REC 243" },
    { time: "12:30 PM", event: "Judging begins", location: "Judges provided by company partners" },
    { time: "3:00 PM", event: "Finalist judging", location: "Judges provided by company partners" },
    { time: "4:00 PM", event: "Closing Ceremony", location: "REC 243" },
    { time: "5:00 PM", event: "Go home!", location: "(Perhaps with some prizes!)" },
];

export default function Schedule() {
    return (
        <div className="flex flex-col justify-center gap-16 select-none">
            <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-16 mx-8 lg:mx-44 select-none">
                <ScheduleList list={day1} day={"Saturday"} />
                <ScheduleList list={day2} day={"Sunday"} />
            </div>
            <a
                href="https://calendar.google.com/calendar/u/4?cid=OWFmZGJlYjFjZDk0NWFiZjU5OWMyYjg0YzgzZGZlY2QzOWQxZTk4ZWRlYjVjNmMxZWQ4ZWQ5NGNlMjdkNWE1YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                target="_blank"
                className="text-gray-500 flex justify-center items-center gap-2 text-center text-sm hover:underline"
            >
                Add to Google Calendar
                <img src="./icons/shapes/external-link.svg" className="w-4" />
            </a>
        </div>
    );
}
