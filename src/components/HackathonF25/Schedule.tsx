
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
    <div className="relative px-6 md:px-16 pt-20 flex flex-row justify-center">
      <div className="flex flex-col justify-center items-center md:w-1/2 gap-6 mb-20">
        <span className="text-white font-bungee text-3xl md:text-6xl mb-4">
          SCHEDULE
        </span>
        {schedule
          .map((info, index) => {
            return (
              <div key={index} className="flex flex-col md:flex-row justify-between w-full md:gap-5">
                <span className="font-inter text-[#FFA722] font-bold text-3xl">
                  {info[0]}
                </span>
                <p className="text-white font-inter font-light text-3xl">
                  {info[1]}
                </p>
              </div>
            );
          })}
      </div>
    </div >
  );
}
