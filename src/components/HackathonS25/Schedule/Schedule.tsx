import ScheduleList from "./ScheduleList";

export interface ScheduleItem {
    day?: string,
    time: string;
    end_time?: string,
    event: string;
    location: string;
}

const day1: ScheduleItem[] = [
    { time: "8:00 AM", event: "Student Check-in Begins", location: "REC 243" },
    { time: "9:00 AM", event: "Opening Ceremony", location: "REC 243" },
    { time: "9:30 AM", event: "Keynote Speakers", location: "REC 243" },
    { time: "10:30 AM", event: "Networking / Project Work", location: "REC 243" },
    { time: "11:30 AM", event: "Lunch!", location: "REC 243" },
    { time: "5:00 PM", event: "Mentors Dismissed", location: "REC 243" },
    { time: "6:00 PM", event: "Dinner!", location: "REC 243" },
    { time: "11:00 PM", event: "REC closes, overnight starts", location: "REC 243" },
    { time: "11:59 PM", event: "End of Day One!", location: "REC 243" },
];

const day2: ScheduleItem[] = [
    { time: "12:00 AM", event: "New Day begins!", location: "REC 243" },
    { time: "8:00 AM", event: "Breakfast!", location: "REC 243" },
    { time: "11:30 AM", event: "Project Submission Deadline", location: "REC 243" },
    { time: "11:30 AM", event: "Lunch!", location: "REC 243" },
    { time: "12:30 PM", event: "Judging rules announced", location: "REC 243" },
    { time: "1:00 PM", event: "Round One Judging", location: "REC 243" },
    { time: "2:00 PM", event: "Finalists are announced", location: "REC 243" },
    { time: "3:00 PM", event: "Finalists Presentations", location: "REC 243" },
    { time: "5:00 PM", event: "Closing Ceremony", location: "REC 243" },
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
                    href="https://calendar.google.com/calendar/u/4?cid=MThhNjQ5OGQ5OWY1Mjk5ZjJkYjVkNWM0ZjE3NWE5ZGM0YjYwYTExNTYxOGNmNTA1MDllNjA4YWU1NjkwNDU1NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
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
