import { motion } from "framer-motion";

// Schedule data for both days
const day1Schedule = [
    { time: "9:00 AM", event: "Student Check In" },
    { time: "11:00 AM", event: "Opening Ceremony" },
    { time: "12:00 PM", event: "Start Hacking!" },
    { time: "12:30 PM", event: "Lunch" },
];

const day1ScheduleLater = [
    { time: "2:00 PM", event: "Company Workshop 1" },
    { time: "4:00 PM", event: "Company Workshop 2" },
    { time: "6:00 PM", event: "Dinner: Mai Shun Yun" },
    { time: "10:00 PM", event: "Late Night Snack: Boba" },
];

const day2ScheduleEarly = [
    { time: "8:00 AM", event: "Breakfast: Tacos" },
    { time: "11:00 AM", event: "Pitch Workshop" },
    { time: "12:00 PM", event: "Hacking Ends!" },
    { time: "12:30 PM", event: "Lunch: Pizza" },
];

const day2ScheduleLater = [
    { time: "2:00 PM", event: "Judging" },
    { time: "3:00 PM", event: "Judging Ends" },
    { time: "4:00 PM", event: "Closing Ceremony" },
];

interface ScheduleItemProps {
    time: string;
    event: string;
    index: number;
}

const ScheduleItem = ({ time, event, index }: ScheduleItemProps) => (
    <motion.div
        className="flex justify-between items-center py-2 md:py-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
    >
        <span
            className="font-caudex font-bold text-[#b34756] text-lg sm:text-xl md:text-2xl lg:text-3xl"
        >
            {time}
        </span>
        <span
            className="font-caudex font-bold text-[#004272] text-lg sm:text-xl md:text-2xl lg:text-3xl text-right"
        >
            {event}
        </span>
    </motion.div>
);

interface IceRinkSectionProps {
    dayNumber: number;
    earlySchedule: { time: string; event: string }[];
    laterSchedule: { time: string; event: string }[];
    isSecondRink?: boolean;
}

const IceRinkSection = ({ dayNumber, earlySchedule, laterSchedule, isSecondRink = false }: IceRinkSectionProps) => (
    <motion.div
        className="relative w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
    >
        {/* Ice Rink Background */}
        <img
            src={isSecondRink ? "/s26/Ice Rink 2.png" : "/s26/Ice Rink 1.png"}
            alt={`Ice Rink ${dayNumber}`}
            className="w-full h-auto"
        />

        {/* Schedule Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20">
            {/* Day Title */}
            <motion.h3
                className="font-caudex font-bold text-[#18339f] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-4 md:mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Day {dayNumber}
            </motion.h3>

            {/* Early Schedule Items */}
            <div className="space-y-0 md:space-y-1">
                {earlySchedule.map((item, index) => (
                    <ScheduleItem
                        key={`${dayNumber}-early-${index}`}
                        time={item.time}
                        event={item.event}
                        index={index}
                    />
                ))}
            </div>

            {/* Visual gap to match rink design */}
            <div className="h-8 sm:h-12 md:h-16 lg:h-20" />

            {/* Later Schedule Items */}
            <div className="space-y-0 md:space-y-1">
                {laterSchedule.map((item, index) => (
                    <ScheduleItem
                        key={`${dayNumber}-later-${index}`}
                        time={item.time}
                        event={item.event}
                        index={index + earlySchedule.length}
                    />
                ))}
            </div>
        </div>
    </motion.div>
);

const Schedule = () => {
    return (
        <section
            className="relative py-16 md:py-24 overflow-hidden"
            style={{ backgroundColor: "#79b0cf" }}
        >
            {/* Schedule Title */}
            <motion.h2
                className="font-caudex font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-8 md:mb-12 drop-shadow-lg"
                style={{
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                SCHEDULE
            </motion.h2>

            {/* Fox decoration - top right of first rink */}
            <motion.div
                className="absolute top-32 md:top-40 lg:top-48 right-4 sm:right-8 md:right-16 lg:right-24 xl:right-32 z-20 hidden md:block"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <img
                    src="/s26/fox.png"
                    alt="Arctic Fox"
                    className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain"
                />
            </motion.div>

            {/* Day 1 Ice Rink */}
            <div className="relative px-4 md:px-8 mb-8 md:mb-12">
                <IceRinkSection
                    dayNumber={1}
                    earlySchedule={day1Schedule}
                    laterSchedule={day1ScheduleLater}
                    isSecondRink={false}
                />
            </div>

            {/* Pebble Penguin decoration - between rinks */}
            <motion.div
                className="relative z-20 -my-8 md:-my-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <img
                    src="/s26/pebble-smol.png"
                    alt="Pebble Smol"
                    className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain ml-4 md:ml-8 lg:ml-16"
                />
            </motion.div>

            {/* Day 2 Ice Rink */}
            <div className="relative px-4 md:px-8 mt-8 md:mt-12">
                <IceRinkSection
                    dayNumber={2}
                    earlySchedule={day2ScheduleEarly}
                    laterSchedule={day2ScheduleLater}
                    isSecondRink={true}
                />
            </div>

            {/* Mug Car decoration - bottom right */}
            <motion.div
                className="flex justify-end pr-4 sm:pr-8 md:pr-16 lg:pr-24 xl:pr-32 mt-8 md:mt-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <img
                    src="/s26/Mug Car.png"
                    alt="Cat in Mug Car"
                    className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 h-auto object-contain drop-shadow-lg"
                />
            </motion.div>
        </section>
    );
};

export default Schedule;
