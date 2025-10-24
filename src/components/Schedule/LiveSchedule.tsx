import { useEffect, useState } from "react";
import LiveScheduleList from "./LiveScheduleList";
import { ScheduleItem } from "./Schedule";
import tidalBackground from "/f25/tidal-background.png";
import heroImage from "/f25/hero.png";
import lightImage from "/f25/Light.png";
import FloatingParticles from "../HackathonF25/ui/FloatingParticles";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// THIS LIVE SCHEDULE DOESNT ACCOUNT FOR EVENTS THAT SPAN ACROSS DAYS
// FOR EXAMPLE, 10/25 11:00 PM START TO 10/26 12:00 AM END WILL NOT FUNCTION PROPERLY
// INSTEAD USE 10/25 11:00 PM START TO 10/25 11:59 PM END
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const sched: ScheduleItem[] = [
    {
        day: "10/25",
        time: "7:30 AM",
        end_time: "8:00 AM",
        event: "Check In + Breakfast",
        location: "MSC 2300",
    },
    {
        day: "10/25",
        time: "8:00 AM",
        end_time: "9:00 AM",
        event: "Opening Ceremony",
        location: "MSC 2300",
    },
    {
        day: "10/25",
        time: "9:00 AM",
        end_time: "10:00 AM",
        event: "Google Cloud Workshop #1",
        location: "MSC 2401",
    },
    {
        day: "10/25",
        time: "10:00 AM",
        end_time: "11:00 AM",
        event: "Google Cloud Workshop #2",
        location: "MSC 2401",
    },
    {
        day: "10/25",
        time: "11:00 AM",
        end_time: "1:00 PM",
        event: "Google Cloud Workshop #3",
        location: "MSC 2401",
    },
    {
        day: "10/25",
        time: "1:00 PM",
        end_time: "2:00 PM",
        event: "Lunch",
        location: "MSC 2300",
    },
    {
        day: "10/25",
        time: "4:30 PM",
        end_time: "5:00 PM",
        event: "Project Submission Deadline",
        location: "MSC 2300",
    },
    {
        day: "10/25",
        time: "5:00 PM",
        end_time: "6:30 PM",
        event: "Judging Begins",
        location: "MSC 2300",
    },
    {
        day: "10/25",
        time: "6:30 PM",
        end_time: "7:00 PM",
        event: "Closing Ceremony",
        location: "MSC 2300",
    },
];

export default function LiveSchedule() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 100); // 100 ms for accuracy
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="block relative w-full h-screen overflow-hidden select-none"
            style={{
                backgroundImage: `url(${tidalBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-tidal-deep/85 backdrop-blur-[1px]" />

            {/* Light overlay effect from Hero */}
            <div
                className="absolute top-0 left-0 w-auto h-full pointer-events-none z-5 opacity-40"
                style={{
                    mixBlendMode: "screen" as any,
                }}
            >
                <img
                    src={lightImage}
                    alt=""
                    className="h-full w-auto object-cover"
                />
            </div>

            <FloatingParticles count={10} sizeMultiplier={1.2} />

            <div className="relative w-full h-full flex flex-col text-white z-10 py-4 px-8">
                {/* Middle Section - Time, Schedule Cards, QR Code */}
                <div className="flex-1 flex flex-col justify-center gap-4">
                    {/* Hero Logo - centered above schedule cards */}
                    <div className="flex justify-center items-center pt-4">
                        <img
                            src={heroImage}
                            className="w-full max-w-3xl"
                            alt="TidalHack Hero"
                        />
                    </div>

                    {/* Time, Schedule Cards, QR Code */}
                    <div className="flex items-center justify-between gap-12 px-8">
                        {/* Left: Current Time */}
                        <div className="flex flex-col items-center gap-3 flex-shrink-0">
                            <div className="bg-black/40 backdrop-blur-md rounded-3xl px-8 py-6 border-2 border-white/30 shadow-2xl w-[320px]">
                                <p className="text-yellow-400 font-chelsea text-6xl font-bold tracking-wider drop-shadow-lg text-center tabular-nums">
                                    {date.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                    })}
                                </p>
                            </div>
                            <p className="text-white/90 text-xl font-bold tracking-wide uppercase">
                                Current Time
                            </p>
                        </div>

                        {/* Center: Schedule Cards with Penguin */}
                        <div className="w-full flex-grow mx-[250px] px-2">
                            <LiveScheduleList list={sched} now={date} />
                        </div>

                        {/* Right: Discord QR Code */}
                        <div className="flex flex-col items-center gap-3 flex-shrink-0">
                            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-4 border-2 border-white/30 shadow-2xl">
                                <div className="bg-white p-4 rounded-2xl shadow-lg">
                                    <img
                                        src="/images/tidal_discord_qr.png"
                                        alt="Join our Discord"
                                        className="w-48 h-48"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-white font-bold text-xl mb-1 tracking-wide">
                                    JOIN DISCORD
                                </p>
                                <p className="text-yellow-400 font-mono text-lg font-semibold">
                                    discord.gg/eQ8ScamG4H
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
