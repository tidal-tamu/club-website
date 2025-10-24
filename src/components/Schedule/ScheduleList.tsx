import { ScheduleItem } from "./Schedule";
import { motion } from "framer-motion";

export interface ScheduleListProps {
    list: ScheduleItem[];
    day?: string;
}

export default function ScheduleList({ list, day }: ScheduleListProps) {
    return (
        <div className="flex flex-col flex-1 w-full relative" id="schedule">
            <motion.div
                className="w-full bg-black/20 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-white font-chelsea text-3xl sm:text-4xl lg:text-5xl text-center mb-8 font-bold">
                    {day}
                </h2>
                <div className="space-y-4">
                    {list.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            className="flex flex-row items-center gap-4 sm:gap-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <span className="font-inter bg-[#2F735E] text-white font-bold text-sm sm:text-base lg:text-lg px-4 py-2 rounded-full whitespace-nowrap shadow-md">
                                {item["time"]}
                            </span>
                            <div className="flex-1">
                                <p className="text-white font-inter font-semibold text-base sm:text-lg lg:text-xl">
                                    {item["event"]}
                                </p>
                                <p className="text-gray-300 font-inter text-sm sm:text-base mt-1">
                                    {item["location"]}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
