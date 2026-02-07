import { ScheduleItem } from "./Schedule";
import { motion, AnimatePresence } from "framer-motion";

export interface LiveScheduleListProps {
    list: ScheduleItem[];
    now: Date;
    year?: number;
}

export default function LiveScheduleList({
    list,
    now,
    year = 2026,
}: LiveScheduleListProps) {
    const parsed = list
        .map((item: any) => {
            const start = new Date(`${year}-${item.day} ${item.time}`);
            const end = new Date(`${year}-${item.day} ${item.end_time}`);
            return { ...item, start, end };
        })
        .sort((a, b) => a.start.getTime() - b.start.getTime());

    const currentIndex = parsed.findIndex(
        (item) => item.start <= now && item.end >= now
    );

    const total = parsed.length;
    let selectedIndices: number[] = [];
    let centerIndex = 1;
    let stackOffsetClass = "";

    if (total === 0) {
        selectedIndices = [];
    } else if (currentIndex === -1) {
        const nextIndex = parsed.findIndex((item) => item.start > now);
        if (nextIndex <= 0) {
            selectedIndices = [0, 1, 2].filter((i) => i < total);
            centerIndex = 0;
        } else if (nextIndex >= total - 1) {
            selectedIndices = [
                total - 3,
                total - 2,
                total - 1,
            ].filter((i) => i >= 0);
            centerIndex = selectedIndices.length - 1;
        } else {
            selectedIndices = [nextIndex - 1, nextIndex, nextIndex + 1];
            centerIndex = 1;
        }
    } else if (currentIndex <= 1) {
        if (currentIndex === 0) {
            selectedIndices = [0, 1].filter((i) => i < total);
            centerIndex = 0;
            stackOffsetClass = "pt-12";
        } else {
            selectedIndices = [
                currentIndex - 1,
                currentIndex,
                currentIndex + 1,
            ].filter((i) => i < total);
            centerIndex = 1;
        }
    } else if (currentIndex >= total - 2) {
        if (currentIndex === total - 1) {
            selectedIndices = [currentIndex - 1, currentIndex].filter(
                (i) => i >= 0
            );
            centerIndex = 1;
            stackOffsetClass = "pt-8";
        } else {
            selectedIndices = [
                currentIndex - 1,
                currentIndex,
                currentIndex + 1,
            ].filter((i) => i >= 0 && i < total);
            centerIndex = 1;
        }
    } else {
        selectedIndices = [
            currentIndex - 1,
            currentIndex,
            currentIndex + 1,
        ];
        centerIndex = 1;
    }

    const selected = selectedIndices
        .filter((index, position, all) => all.indexOf(index) === position)
        .map((index) => parsed[index]);

    return (
        <div
            className="flex flex-col justify-center overflow-visible w-full h-full"
            id="schedule"
        >
            <div className={`relative space-y-6 ${stackOffsetClass}`}>
                <AnimatePresence>
                    {selected.map((item: any, index: number) => {
                            const live = item.start <= now && item.end >= now;

                            const isCenter = index === centerIndex;
                            const scaleValue = isCenter ? 1 : index === 0 ? 0.9 : 0.85;
                            const opacityValue = isCenter ? 1 : index === 0 ? 0.7 : 0.55;

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
                                        className="flex flex-col font-caudex bg-white/70 backdrop-blur-sm rounded-[28px] shadow-2xl border border-white/70 p-8 md:p-10 2xl:p-12 z-[1] gap-6 2xl:gap-8 w-full"
                                        style={{
                                            transform: `scale(${scaleValue})`,
                                            opacity: opacityValue,
                                        }}
                                    >
                                        <div className="flex justify-between items-center font-semibold">
                                            <div className="bg-[#b34756] text-white px-6 md:px-8 2xl:px-10 py-3 md:py-4 rounded-full text-[clamp(22px,2.2vw,56px)] whitespace-nowrap shadow-md">
                                                {item["time"]}
                                            </div>
                                            <div className="whitespace-nowrap text-[#004272] text-[clamp(22px,2.2vw,56px)] ml-5 md:ml-6 font-bold">
                                                {item["event"]}
                                            </div>
                                        </div>

                                        <div
                                            className={`flex ${
                                                live
                                                    ? "justify-between"
                                                    : "justify-end"
                                            } font-medium text-[clamp(14px,1.5vw,32px)]`}
                                        >
                                            {live && (
                                                <span className="uppercase whitespace-nowrap text-[#b34756] font-semibold tracking-wide">
                                                    live
                                                </span>
                                            )}
                                            <div className="bg-white/70 border border-white/80 shadow-lg rounded-full p-1">
                                                <img
                                                    src="/s26/pebble-smol.png"
                                                    alt="Event marker"
                                                    className="w-14 h-14 object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Live badge removed per request */}
                                </motion.div>
                            );
                        })}
                </AnimatePresence>
            </div>
        </div>
    );
}
