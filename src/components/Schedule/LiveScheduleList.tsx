import { ScheduleItem } from "./Schedule";
import { motion, AnimatePresence } from "framer-motion";

export interface LiveScheduleListProps {
    list: ScheduleItem[];
    now: Date;
}

export default function LiveScheduleList({ list, now }: LiveScheduleListProps) {
    const upcomingEvents = list.filter((item: any) => {
        const eventEndTime = new Date(`2025-${item.day} ${item.end_time}`);
        return eventEndTime >= now;
    });

    return (
        <div
            className="flex flex-col justify-self-start overflow-visible w-full"
            id="schedule"
        >
            <div className="relative space-y-6">
                <AnimatePresence>
                    {upcomingEvents
                        .slice(0, 3)
                        .map((item: any, index: number) => {
                            const eventStartTime = new Date(
                                `2025-${item.day} ${item.time}`
                            );
                            const eventEndTime = new Date(
                                `2025-${item.day} ${item.end_time}`
                            );
                            const live =
                                eventStartTime <= now && eventEndTime >= now;

                            const isFirst = index === 0;
                            const scaleValue = (100 - index * 10) / 100;
                            const opacityValue = (100 - index * 35) / 100;

                            return (
                                <motion.div
                                    key={item.time + item.event}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex items-center relative pb-6"
                                >
                                    <div
                                        className="flex flex-col font-inter bg-black/20 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-10 md:p-12 z-[1] gap-8 w-full"
                                        style={{
                                            transform: `scale(${scaleValue})`,
                                            opacity: opacityValue,
                                        }}
                                    >
                                        <div className="flex justify-between items-center font-semibold">
                                            <div className="bg-[#2F735E] text-white px-8 py-4 rounded-full text-3xl md:text-4xl lg:text-5xl whitespace-nowrap shadow-md">
                                                {item["time"]}
                                            </div>
                                            <div className="whitespace-nowrap text-white text-3xl md:text-4xl lg:text-5xl ml-6 font-bold">
                                                {item["event"]}
                                            </div>
                                        </div>

                                        <div
                                            className={`flex ${
                                                live
                                                    ? "justify-between"
                                                    : "justify-end"
                                            } font-medium text-xl md:text-2xl lg:text-3xl`}
                                        >
                                            {live && (
                                                <div className="flex justify-center items-center gap-3 animate-pulse uppercase whitespace-nowrap text-red-400">
                                                    <div className="bg-red-400 w-4 h-4 rounded-full" />
                                                    live
                                                </div>
                                            )}
                                            <p className="whitespace-nowrap text-gray-300">
                                                📍 {item["location"]}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Penguin with LIVE badge pointing at the card */}
                                    {isFirst && (
                                        <div className="absolute -left-56 bottom-4 z-50">
                                            <div className="relative w-48 h-40">
                                                {/* Penguin pointing to top right */}
                                                <img
                                                    src="/f25/static/pointing_penguin.png"
                                                    alt="Live event indicator"
                                                    className="w-36 h-36 object-contain absolute bottom-0 left-0"
                                                />
                                                {/* LIVE badge positioned where penguin is pointing */}
                                                <div className="bg-red-500/90 backdrop-blur-md rounded-2xl px-5 py-2.5 border-2 border-white/30 shadow-2xl animate-pulse absolute top-0 right-0">
                                                    <div className="flex items-center gap-2">
                                                        <div className="bg-white w-3 h-3 rounded-full animate-pulse" />
                                                        <p className="text-white font-chelsea text-lg font-bold uppercase tracking-wide">
                                                            LIVE
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                </AnimatePresence>
            </div>
        </div>
    );
}
