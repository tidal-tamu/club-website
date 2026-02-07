import { useEffect, useState } from "react";
import LiveScheduleList from "./LiveScheduleList";
import { ScheduleItem } from "./Schedule";
import heroImage from "/s26/hero-text.svg";
import FloatingParticles from "../HackathonS26/ui/FloatingParticles";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// THIS LIVE SCHEDULE DOESNT ACCOUNT FOR EVENTS THAT SPAN ACROSS DAYS
// FOR EXAMPLE, 02/07 11:00 PM START TO 02/08 12:00 AM END WILL NOT FUNCTION PROPERLY
// INSTEAD USE 02/07 11:00 PM START TO 02/07 11:59 PM END
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const day1 = [
    { time: "9:00 AM", event: "Student Check In" },
    { time: "11:00 AM", event: "Opening Ceremony" },
    { time: "12:00 PM", event: "Start Hacking!" },
    { time: "12:30 PM", event: "Lunch: Pizza" },
    { time: "2:00 PM", event: "MLH Workshop" },
    { time: "4:00 PM", event: "Intro to Git" },
    { time: "5:00 PM", event: "MLH Tech Together" },
    { time: "6:00 PM", event: "Dinner: Mai Shan Yun" },
];

const day2 = [
    { time: "8:00 AM", event: "Breakfast: Donuts" },
    { time: "11:00 AM", event: "Pitch Workshop" },
    { time: "12:00 PM", event: "Hacking Ends!" },
    { time: "12:30 PM", event: "Lunch: Roni's + Canes" },
    { time: "1:00 PM", event: "Judging" },
    { time: "3:00 PM", event: "Judging Ends" },
    { time: "4:00 PM", event: "Closing Ceremony" },
];

const parseTime = (time: string) => {
    const [rawTime, rawPeriod] = time.split(" ");
    const [rawHour, rawMinute] = rawTime.split(":").map(Number);
    const period = rawPeriod.toUpperCase();
    let hour = rawHour % 12;
    if (period === "PM") hour += 12;
    return hour * 60 + rawMinute;
};

const formatTime = (minutes: number) => {
    const total = ((minutes % (24 * 60)) + 24 * 60) % (24 * 60);
    const hour24 = Math.floor(total / 60);
    const minute = total % 60;
    const period = hour24 >= 12 ? "PM" : "AM";
    const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
    return `${hour12}:${minute.toString().padStart(2, "0")} ${period}`;
};

const buildSchedule = (
    day: string,
    items: { time: string; event: string; location?: string }[],
): ScheduleItem[] => {
    return items.map((item, index) => {
        const currentTime = parseTime(item.time);
        const nextTime = items[index + 1]?.time;
        const endTime = nextTime
            ? formatTime(parseTime(nextTime) - 1)
            : formatTime(currentTime + 60);

        return {
            day,
            time: item.time,
            end_time: endTime,
            event: item.event,
            location: item.location ?? "TBD",
        };
    });
};

const sched: ScheduleItem[] = [
    ...buildSchedule("02/07", day1),
    ...buildSchedule("02/08", day2),
];

export default function LiveSchedule() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="block relative w-full h-screen overflow-hidden select-none bg-[#77A5C6]">
            <div className="absolute inset-0">
                <img
                    src="/s26/Hero/BackBushes.png"
                    alt="Back Bushes"
                    className="absolute bottom-[30vh] left-0 right-0 w-full min-w-0 -z-[1]"
                    decoding="async"
                />
                <img
                    src="/s26/Hero/TopHill.png"
                    alt="Top Hill"
                    className="absolute bottom-0 left-0 right-0 w-full min-w-0 h-[55%] -z-[1]"
                    decoding="async"
                    fetchPriority="high"
                />
                <img
                    src="/s26/Hero/LowHill.png"
                    alt="Low Hill"
                    className="absolute bottom-8 sm:left-0 right-0 w-full min-w-0 h-[33%] z-[2]"
                    decoding="async"
                />
            </div>

            <div className="absolute inset-0">
                <img
                    src="/s26/Hero/TreesPreShadowed.png"
                    alt="Trees Pre Shadowed"
                    className="absolute left-0 bottom-[46vh] sm:bottom-[45vh] md:bottom-[44vh] lg:bottom-[43vh] xl:bottom-[41vh] 2xl:bottom-[40vh] w-full sm:w-[80%] z-[1]"
                    decoding="async"
                />
            </div>
            <div
                className="absolute inset-0 w-full min-w-0 overflow-hidden"
                style={{ left: 0, right: 0 }}
            >
                <img
                    src="/s26/Hero/HouseGlowing.png"
                    alt="House Glowing"
                    className="absolute bottom-[48vh] right-[-10vh] sm:right-[3vh] md:right-[6vh] lg:right-[10vh] xl:right-[14vh] 2xl:right-[18vh] w-[40vh] object-contain"
                    decoding="async"
                />
            </div>

            <div
                className="absolute inset-0 w-full min-w-0 z-[2]"
                style={{ left: 0, right: 0 }}
            >
                <img
                    src="/s26/Hero/LargeBrownTreeAlt.png"
                    alt="Large Brown Tree Alt"
                    className="absolute md:right-0 bottom-[18vh] -translate-x-32 md:translate-x-16 lg:translate-x-20 xl:translate-x-24 2xl:translate-x-28 h-full min-w-[700px]"
                    decoding="async"
                />
            </div>

            <div className="absolute left-120 bottom-[16vh] z-30 scale-[2]">
                <img src="/s26/pebble.gif" className="w-[28vw]" />
                <img
                    src="/s26/Hero/PenguinCover.png"
                    className="absolute bottom-0 w-[14vw]"
                />
            </div>

            <div className="absolute inset-0 z-20">
                <FloatingParticles
                    count={192}
                    speedMultiplier={0.6}
                    sizeMultiplier={2.3}
                />
            </div>

            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden w-full z-20">
                    <img
                        src="/s26/Hero/LowSnowPreShadowed.png"
                        alt="Low Snow Pre Shadowed"
                        className="left-0 scale-[3] sm:scale-[2] lg:scale-[1]"
                        decoding="async"
                    />
                    <div
                        className="h-[8rem] z-20"
                        style={{
                            background:
                                "linear-gradient(transparent 20%, #76A4C5 66%)",
                        }}
                    />
                </div>
            </div>

            <div className="relative w-full h-full flex flex-col text-white z-40 px-8 md:px-12 xl:px-16 2xl:px-24 py-0">
                <div className="flex justify-center items-center pb-2 md:pb-3 2xl:pb-4">
                    <img
                        src={heroImage}
                        className="w-full max-w-[54vw] md:max-w-[38rem] 2xl:max-w-[46vw]"
                        alt="TIDALhack Spring 26"
                    />
                </div>

                <div className="absolute top-[3vh] left-[3vw] z-50 flex flex-col items-start gap-2">
                    <div className="bg-white/20 backdrop-blur-md rounded-[32px] px-6 py-6 border-2 border-white/50 shadow-2xl">
                        <p className="text-white font-caudex text-[clamp(40px,3.6vw,88px)] font-bold tracking-wider drop-shadow-lg tabular-nums">
                            {date.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                            })}
                        </p>
                    </div>

                    <p className="text-white/90 text-[clamp(14px,1.2vw,26px)] font-bold tracking-wide uppercase">
                        Current Time
                    </p>
                </div>

                <div className="w-full px-[500px] order-3 xl:order-none flex items-center">
                    <LiveScheduleList list={sched} now={date} year={2026} />
                </div>

                <div className="absolute top-[3vh] right-[3vw] z-50 flex flex-col items-center gap-2">
                    <div className="bg-white/20 backdrop-blur-md rounded-[32px] p-4 border-2 border-white/50 shadow-2xl">
                        <div className="bg-white p-4 rounded-2xl shadow-lg">
                            <img
                                src="/images/tidal_discord_qr.png"
                                alt="Join our Discord"
                                className="w-44 h-44 2xl:w-64 2xl:h-64"
                            />
                        </div>
                    </div>
                    <p className="text-white font-bold tracking-wide">
                        JOIN DISCORD
                    </p>
                </div>
            </div>
        </div>
    );
}
