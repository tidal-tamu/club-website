import { motion } from "framer-motion";

const day1Schedule = [
  { time: "9:00 AM", event: "Student Check In" },
  { time: "11:00 AM", event: "Opening Ceremony" },
  { time: "12:00 PM", event: "Start Hacking!" },
  { time: "12:30 PM", event: "Lunch" },
  { time: "2:00 PM", event: "Company Workshop 1" },
  { time: "4:00 PM", event: "Company Workshop 2" },
  { time: "6:00 PM", event: "Dinner: Mai Shan Yun" },
  { time: "10:00 PM", event: "Late Night Snack: Boba" },
];

const day2Schedule = [
  { time: "8:00 AM", event: "Breakfast: Tacos" },
  { time: "11:00 AM", event: "Pitch Workshop" },
  { time: "12:00 PM", event: "Hacking Ends!" },
  { time: "12:30 PM", event: "Lunch: Pizza" },
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
    className="flex justify-between items-center py-2 sm:py-2.5 md:py-3 lg:py-4 xl:py-5 2xl:py-6 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <span
      className="font-caudex font-bold text-[#b34756] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
    >
      {time}
    </span>
    <span
      className="font-caudex font-bold text-[#004272] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-right"
    >
      {event}
    </span>
  </motion.div>
);

interface IceRinkSectionProps {
  dayLabel: string;
  schedule: { time: string; event: string }[];
  isSecondRink?: boolean;
}

const IceRinkSection = ({ dayLabel, schedule, isSecondRink = false }: IceRinkSectionProps) => (
  <motion.div
    className="relative w-full max-w-4xl mx-auto flex justify-center items-center"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <img
      src={isSecondRink ? "/s26/Ice Rink 2.png" : "/s26/Ice Rink 1.png"}
      alt={`Ice Rink ${dayLabel}`}
      className="w-full h-auto"
      loading="lazy"
      decoding="async"
    />

    <div className="absolute inset-0 flex flex-col px-8 sm:px-12 md:px-16 lg:px-20">
      <div className="flex-[0_0_20%] flex items-end justify-center">
        <motion.h3
          className="font-caudex font-bold text-[#18339f] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {dayLabel}
        </motion.h3>
      </div>
      <div className="flex-[0_0_5%]"></div>

      <div className="flex-[0_0_75%] flex flex-col justify-start space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-8 overflow-y-auto">
        {schedule.map((item, index) => (
          <ScheduleItem
            key={`${dayLabel}-${index}`}
            time={item.time}
            event={item.event}
            index={index}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#79b0cf" }}
    >
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


      <div className="flex flex-col lg:flex-row gap-10 px-4 md:px-8 sm:justify-center">
        <div className="relative">
          <IceRinkSection
            dayLabel="Saturday 2/7"
            schedule={day1Schedule}
          />
          <motion.div
            className="absolute bottom-0 left-0 z-20 -translate-x-5 translate-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/s26/pebble-smol.png"
              alt="Pebble Smol"
              className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
        <div className="relative">
          <IceRinkSection
            dayLabel="Sunday 2/8"
            schedule={day2Schedule}
            isSecondRink={true}
          />
        </div>

      </div>

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
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </section>
  );
};

export default Schedule;
