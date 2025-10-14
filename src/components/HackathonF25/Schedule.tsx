import { motion } from "framer-motion";
import FloatingParticles from "./ui/FloatingParticles";

const schedule = [
    ["7:00AM", "Student Check In Begins"],
    ["7:30AM", "Open Ceremony"],
    ["8:30AM", "Start Hacking!"],
    ["12:00PM", "Lunch"],
    ["5:00PM", "Judging"],
    ["6:00PM", "Closing Ceremony and Awards"],
];

export default function Schedule() {
    return (
        <div
            className="relative px-6 lg:px-12 xl:px-24 pt-20 flex flex-row justify-center max-w-5xl mx-auto"
            id="schedule"
        >
            <FloatingParticles count={4} />
            <div className="flex flex-col justify-center items-center w-full gap-6 mb-20">
                <motion.span
                    className="text-white font-bungee text-3xl md:text-5xl lg:text-6xl mb-8 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    SCHEDULE
                </motion.span>
                <div className="w-full max-w-4xl">
                    {schedule.map((info, index) => {
                        return (
                            <motion.div
                                key={index}
                                className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-2 sm:gap-4 mb-6 last:mb-0"
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -50 : 50,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <span className="font-inter text-[#FFA722] font-bold text-xl sm:text-2xl lg:text-3xl text-left sm:text-right">
                                    {info[0]}
                                </span>
                                <p className="text-white font-inter font-light text-lg sm:text-xl lg:text-2xl xl:text-3xl text-left sm:text-left">
                                    {info[1]}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
