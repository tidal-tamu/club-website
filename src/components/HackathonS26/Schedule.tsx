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
    className="flex items-center justify-between gap-1.5 sm:gap-3 lg:gap-6 xl:gap-8 text-left py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 2xl:py-4 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <span
      className="font-caudex font-bold text-[#b34756] leading-tight text-[clamp(12px,1.7vw,18px)] md:text-[clamp(14px,1.15vw,22px)] lg:text-[clamp(18px,1.05vw,26px)] whitespace-nowrap"
    >
      {time}
    </span>
    <span
      className="font-caudex font-bold text-[#004272] leading-tight text-[clamp(12px,1.8vw,18px)] md:text-[clamp(14px,1.2vw,22px)] lg:text-[clamp(18px,1.1vw,26px)] whitespace-nowrap overflow-hidden text-ellipsis min-w-0"
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

const splitSchedule = (items: { time: string; event: string }[]) => {
  if (items.length <= 4) return [items, []];
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
};

const IceRinkSection = ({ dayLabel, schedule, isSecondRink = false }: IceRinkSectionProps) => (
  <motion.div
    className="relative w-full max-w-4xl mx-auto flex justify-center items-center overflow-hidden"
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

    <div className="absolute inset-0 flex flex-col px-6 sm:px-10 md:px-14 lg:px-16">
      <div className="flex-[0_0_18%] flex items-end justify-center">
        <motion.h3
          className="font-caudex font-bold text-[#18339f] text-[clamp(22px,3.4vw,32px)] md:text-[clamp(26px,2.4vw,40px)] text-center leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {dayLabel}
        </motion.h3>
      </div>
      <div className="flex-[0_0_5%]" />

      <div className="flex-[0_0_77%] flex flex-col justify-start space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 items-center">
        {splitSchedule(schedule).map((group, groupIndex) => (
          <div
            key={`${dayLabel}-group-${groupIndex}`}
            className="w-[88%] sm:w-[84%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] max-w-2xl"
            style={groupIndex === 0 ? {} : { marginTop: "min(20vw, 140px)" }}
          >
            {group.map((item, index) => (
              <ScheduleItem
                key={`${dayLabel}-${groupIndex}-${index}`}
                time={item.time}
                event={item.event}
                index={index}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="s26-dynapuff-text relative py-16 md:py-24 pb-24 md:pb-32 overflow-visible"
      style={{ backgroundColor: "#79b0cf" }}
    >
      <motion.h2
        className="s26-section-header font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-8 md:mb-12 drop-shadow-lg"
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
            className="absolute left-0 z-20 -translate-x-6 sm:-translate-x-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              bottom: "-10%",
            }}
          >
            <img
              src="/s26/pebble-smol.png"
              alt="Pebble Smol"
              className="w-[clamp(12rem,18vw,18rem)] h-auto object-contain"
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
          <motion.div
            className="absolute right-0 z-20 translate-x-6 sm:translate-x-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              bottom: "-10%",
            }}
          >
            <img
              src="/s26/Mug Car.png"
              alt="Cat in Mug Car"
              className="w-[clamp(10rem,16vw,15rem)] h-auto object-contain drop-shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Schedule;
