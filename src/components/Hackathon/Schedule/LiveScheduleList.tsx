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
            className="flex flex-col justify-self-start overflow-hidden"
            id="schedule"
        >
            <div className="relative">
                <AnimatePresence>
                    {upcomingEvents
                        .slice(0, 3)
                        .map((item: any, index: number) => {
                            const scaleValue = (100 - index * 10) / 100;
                            const opacityValue = (100 - index * 35) / 100;
                            const eventStartTime = new Date(
                                `2025-${item.day} ${item.time}`
                            );
                            const eventEndTime = new Date(
                                `2025-${item.day} ${item.end_time}`
                            );
                            const live =
                                eventStartTime <= now && eventEndTime >= now;

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
                                        className="flex flex-col font-mont bg-transparent border-4 border-gray-300 rounded-xl p-4 z-[1] text-2xl gap-3 w-[650px]"
                                        style={{
                                            transform: `scale(${scaleValue})`,
                                            opacity: opacityValue,
                                        }}
                                    >
                                        <div className="flex justify-between font-semibold">
                                            <div className="whitespace-nowrap">
                                                {item["time"]}
                                            </div>
                                            <div className="whitespace-nowrap">
                                                {item["event"]}
                                            </div>
                                        </div>

                                        <div
                                            className={`flex ${
                                                live
                                                    ? "justify-between"
                                                    : "justify-end"
                                            } font-semibold`}
                                        >
                                            {live && (
                                                <div className="flex justify-center items-center gap-2 animate-pulse uppercase whitespace-nowrap">
                                                    <div className="bg-hackRed w-3 h-3 rounded-full" />
                                                    live
                                                </div>
                                            )}
                                            <p className="whitespace-nowrap">
                                                {item["location"]}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                </AnimatePresence>
            </div>
        </div>
    );
}
