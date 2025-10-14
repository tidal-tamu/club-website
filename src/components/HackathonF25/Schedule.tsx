
const schedule = [
  ["7:00AM", "Student Check In Begins"],
  ["7:30AM", "Open Ceremony"],
  ["8:30AM", "Start Hacking!"],
  ["12:00PM", "Lunch"],
  ["5:00PM", "Judging"],
  ["6:00PM", "Closing Ceremony and Awards"],
]
export default function Schedule() {
  return (
    <div className="relative px-6 lg:px-12 xl:px-24 pt-20 flex flex-row justify-center max-w-7xl mx-auto">
      <div className="flex flex-col justify-center items-center w-full gap-6 mb-20">
        <span className="text-white font-bungee text-3xl md:text-5xl lg:text-6xl mb-8 text-center">
          SCHEDULE
        </span>
        <div className="w-full max-w-4xl">
          {schedule.map((info, index) => {
            return (
              <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-2 sm:gap-4 mb-6 last:mb-0">
                <span className="font-inter text-[#FFA722] font-bold text-xl sm:text-2xl lg:text-3xl text-left sm:text-right">
                  {info[0]}
                </span>
                <p className="text-white font-inter font-light text-lg sm:text-xl lg:text-2xl xl:text-3xl text-left sm:text-left">
                  {info[1]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
