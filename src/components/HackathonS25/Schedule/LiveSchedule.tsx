import { useEffect, useMemo, useState } from "react";
import { Meteors } from "../Meteors";
import LiveScheduleList from "./LiveScheduleList";
import { ScheduleItem } from "./Schedule";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// THIS LIVE SCHEDULE DOESNT ACCOUNT FOR EVENTS THAT SPAN ACROSS DAYS
// FOR EXAMPLE, 3/22 11:00 PM START TO 3/23 12:00 AM END WILL NOT FUNCTION PROPERLY
// INSTEAD USE 3/22 11:00 PM START TO 3/22 11:59 PM END
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// TODO: ensure schedule is full and correct
const sched: ScheduleItem[] = [
    {
        day: "3/22",
        time: "8:00 AM",
        end_time: "9:00 AM",
        event: "Student Check-in Begins",
        location: "REC 243",
    },
    {
        day: "3/22",
        time: "9:00 AM",
        end_time: "9:30 AM",
        event: "Opening Ceremony",
        location: "REC 243",
    },
    {
        day: "3/22",
        time: "10:00 AM",
        end_time: "11:00 AM",
        event: "Keynote Speaker",
        location: "REC 243",
    },
    {
        day: "3/22",
        time: "11:00 AM",
        end_time: "12:00 PM",
        event: "AWS Presentation",
        location: "REC 243",
    },
    {
        day: "3/22",
        time: "12:00 PM",
        end_time: "12:30 PM",
        event: "Lunch!",
        location: "REC 243",
    },
    {
        day: "3/22",
        time: "12:00 PM",
        end_time: "12:30 PM",
        event: "Google Cloud Workshop",
        location: "REC 243",
    },
    {
        day: "3/22",
        time: "3:00 PM",
        end_time: "3:45 PM",
        event: "MLH Github Copilot Workshop",
        location: "REC 243",
    },
    {
        day: "3/22",
        time: "6:00 PM",
        end_time: "6:30 PM",
        event: "Dinner!",
        location: "REC 243",
    },
    {
        day: "3/22",
        time: "7:00 PM",
        end_time: "8:00 PM",
        event: "ROBLOX Shrimp Game Tournament",
        location: "REC 243",
    },
    {
        day: "3/22",
        time: "8:00 PM",
        end_time: "9:00 PM",
        event: "GeoGuessr Tournament",
        location: "REC 243",
    },
    {
        day: "3/22",
        time: "9:00 PM",
        end_time: "10:00 PM",
        event: "Connect4 Tournament",
        location: "REC 243",
    },
    {
        day: "3/23",
        time: "8:00 AM",
        end_time: "8:30 AM",
        event: "Breakfast!",
        location: "REC 243",
    },
    {
        day: "3/23",
        time: "11:30 AM",
        end_time: "11:30 AM",
        event: "Project Submission Deadline",
        location: "REC 243",
    },
    {
        day: "3/23",
        time: "11:30 AM",
        end_time: "12:00 PM",
        event: "Lunch!",
        location: "REC 243",
    },
    {
        day: "3/23",
        time: "12:00 PM",
        end_time: "1:00 PM",
        event: "Presentation Worktime + Relax",
        location: "REC 243",
    },
    {
        day: "3/23",
        time: "2:15 PM",
        end_time: "2:45 PM",
        event: "Finalists Announcement",
        location: "REC 243",
    },
    {
        day: "3/23",
        time: "5:00 PM",
        event: "Closing Ceremony",
        location: "REC 243",
    },
];
export default function LiveSchedule() {
    const meteors = useMemo(() => <Meteors number={7} />, []);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 100); // 100 ms for accuracy
    }, []);

    return (
        <div className="block relative w-full h-full overflow-hidden select-none">
            <div className="-z-10">{meteors}</div>
            <div className="w-full h-full flex justify-center items-center bg-spaceBlack bg-[url('/stars.svg')] text-white z-10 gap-24">
                <img
                    src="/icons/shapes/8star.png"
                    className="w-[500px] animate-pulse"
                />

                <div className="relative flex flex-col items-center">
                    <img
                        src="./icons/logos/tidal-sp24.png"
                        className="w-[700px] mb-36"
                    />

                    <div className="relative h-[500px] w-[900px] overflow-ellipsis flex justify-center">
                        <LiveScheduleList list={sched} now={date} />
                    </div>
                </div>

                <p className="flex text-hackRed justify-center items-center zing-base text-9xl w-120 h-120 whitespace-nowrap">
                    {date.toLocaleTimeString()}
                </p>
            </div>
        </div>
    );
}
