import ScheduleList from "./ScheduleList";
import tidalBackground from "/f25/tidal-background.png";
import heroImage from "/f25/hero.png";
import FloatingParticles from "../HackathonF25/ui/FloatingParticles";
import { motion } from "framer-motion";

export interface ScheduleItem {
    day?: string;
    time: string;
    end_time?: string;
    event: string;
    location: string;
}

const day1: ScheduleItem[] = [
    {
        time: "7:30 AM",
        event: "Doors open for check-in",
        location: "MSC Bethancourt",
    },
    {
        time: "7:30 AM",
        event: "Breakfast serving begins",
        location: "MSC Bethancourt",
    },
    { time: "8:00 AM", event: "Opening ceremony", location: "MSC Bethancourt" },
    {
        time: "9:00 AM",
        event: "Google Cloud workshop 1",
        location: "MSC Bethancourt",
    },
    {
        time: "10:00 AM",
        event: "Google Cloud workshop 2",
        location: "MSC Bethancourt",
    },
    {
        time: "11:00 AM",
        event: "Google Cloud workshop 3",
        location: "MSC Bethancourt",
    },
    {
        time: "1:00 PM",
        event: "Lunch serving begins",
        location: "MSC Bethancourt",
    },
    {
        time: "4:30 PM",
        event: "Project submission deadline",
        location: "MSC Bethancourt",
    },
    { time: "5:00 PM", event: "Judging begins", location: "MSC Bethancourt" },
    { time: "6:30 PM", event: "Closing ceremony", location: "MSC Bethancourt" },
    { time: "7:00 PM", event: "Event done!", location: "MSC Bethancourt" },
];

export default function Schedule() {
    return (
        <div
            className="min-h-screen hero-gradient relative overflow-hidden"
            style={{
                backgroundImage: `url(${tidalBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-tidal-deep/80 backdrop-blur-[1px]" />
            <FloatingParticles count={8} />

            <div className="relative z-10">
                {/* Hero Section */}
                <motion.div
                    className="flex flex-col items-center pt-12 pb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={heroImage}
                        alt="TidalHack Hero"
                        className="w-full max-w-3xl px-6 mb-8"
                    />
                </motion.div>

                {/* Main Content with Penguin and Schedule */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-8 px-6 pb-20 max-w-7xl mx-auto">
                    {/* Left Side: Penguin and Discord */}
                    <motion.div
                        className="flex flex-col items-center gap-6 lg:sticky lg:top-24 lg:max-w-xs w-full"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="/f25/static/pointing_penguin.png"
                            alt="Friendly penguin pointing"
                            className="w-48 h-48 object-contain"
                        />

                        <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl w-full">
                            <h3 className="text-white font-chelsea text-2xl text-center mb-4">
                                Join Our Community!
                            </h3>
                            <div className="flex flex-col items-center gap-4">
                                <div className="bg-white p-4 rounded-2xl shadow-lg">
                                    <img
                                        src="/images/tidal_discord_qr.png"
                                        alt="Discord QR Code"
                                        className="w-40 h-40"
                                    />
                                </div>
                                <p className="text-white/90 text-center text-sm">
                                    Scan to join our Discord server for updates,
                                    help, and to connect with other hackers!
                                </p>
                                <a
                                    href="https://discord.gg/eQ8ScamG4H"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-yellow-400 hover:text-yellow-300 font-semibold text-center underline transition-colors"
                                >
                                    discord.gg/eQ8ScamG4H
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Schedule */}
                    <motion.div
                        className="flex-1 w-full max-w-3xl"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h1 className="text-white font-chelsea text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8">
                            EVENT SCHEDULE
                        </h1>
                        <ScheduleList list={day1} day={"SATURDAY 10/25"} />

                        <a
                            href="https://calendar.google.com/calendar/u/4?cid=MThhNjQ5OGQ5OWY1Mjk5ZjJkYjVkNWM0ZjE3NWE5ZGM0YjYwYTExNTYxOGNmNTA1MDllNjA4YWU1NjkwNDU1NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                            target="_blank"
                            className="text-white flex justify-center items-center gap-2 text-center text-base hover:underline hover:text-yellow-400 transition-colors mt-8"
                        >
                            Add to Google Calendar
                            <img
                                src="./icons/shapes/external-link-white.svg"
                                className="w-4"
                            />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
