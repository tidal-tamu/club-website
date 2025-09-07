import { useState, useEffect, useMemo } from "react";
import "../Home/Hero/HeroBackground.css";
import { Meteors } from "./Meteors";

export default function Hero() {
    const targetDate = new Date("March 22, 2025 09:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
    const formatNumber = (num:number) => num.toString().padStart(2, "0");
    const meteors = useMemo(() => <Meteors number={7} />, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    function calculateTimeLeft(targetDate: number) {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    return (
        <div className="h-full w-full flex flex-col md:flex-row gap-7 justify-center justify-self-center items-center transition-[padding] place-self-center px-8 pt-8">
             <a href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" className="max-w-[100px] min-w-[60px] absolute top-0 right-[80px] sm:right-[50px] w-[10%] z-30"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" alt="Major League Hacking 2025 Hackathon Season"/></a>
             
            {meteors}
            
            <img
                src="/icons/shapes/8star.png"
                className="lg:ml-32 2xl:ml-36 md:mb-0 w-64 md:w-1/2 xl:w-1/3 animate-pulse"
            />

            <div className="absolute zing-base left-[25vw] top-[55vh] text-white font-bold px-4 py-2 rounded-lg hidden md:block w-[25vw] lg:w-[25vw] xl:w-[20vw] 2xl:w-[15vw]">
                <p className="text-left w-full  text-4xl lg:text-5xl 2xl:text-6xl font-light">
                    {formatNumber(timeLeft.days)}:{formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
                    <br />
                    <p className="text-xl lg:text-2xl 2xl:text-3xl text-right font-light w-full" >till hacking starts!</p>
                </p>
            </div>

            <div className="flex flex-col grow justify-start items-center lg:items-end font-mont gap-8 md:gap-14 lg:mr-32 2xl:mr-44">
                <div className="flex flex-col justify-center items-center lg:items-end gap-4 md:gap-0">
                    <div className="tracking-widest">
                        <h1 className="text-white blocky-div font-bold text-5xl lg:text-7xl 2xl:text-8xl text-center md:text-start animate__animated animate__fadeIn">
                            TIDAL
                        </h1>
                        <h1 className="text-white blocky-div font-bold text-5xl lg:text-7xl 2xl:text-8xl text-center md:text-start md:pl-28 md:pr-12  animate__animated animate__fadeIn">
                            HACK
                        </h1>
                        <p className="text-hackRed blocky-div font-bold text-4xl lg:text-6xl 2xl:text-7xl text-center md:text-right ml-auto pt-5 -translate-y-2 md:-translate-y-4">
                            2025
                        </p>
                        <p className="text-hackBeige zing-base tracking-[8px] text-center font-semibold text-2xl lg:text-4xl 2xl:text-5xl lg:pl-10">
                            March 22nd-23rd
                        </p>
                    </div>

                </div>
                <div className="flex justify-center items-center gap-5">
                    <a
                        href="https://discord.gg/QCHKPUUxRB"
                        target="_blank"
                        className="flex justify-center items-center shrink-0 gap-3 font-bold text-navy bg-[#EDEAE6] px-3 py-2 sm:p1 lg:px-6 md:text-xl rounded-lg border-[1px] border-[#C9C9C9] cursor-pointer hover:bg-[#c6c4c4] transition-all"
                    >
                        Discord
                        <img
                            src="./icons/logos/discord-logo.svg"
                            alt="Discord Logo"
                            className="w-[24px] h-[18px] md:w-[28px] md:h-[21px] transition-all"
                        />
                    </a>
                    <a
                        href="/register"
                        className="flex justify-center items-center shrink-0 gap-3 font-bold text-white bg-hackRed px-3 py-2 sm:p1 lg:px-6 md:text-xl rounded-lg border-[1px] cursor-pointer border-[#ba5353] hover:bg-[#9e3b3b] transition-all"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Apply
                        <img
                            src="./icons/shapes/arrow.svg"
                            alt="->"
                            className="w-[24px] h-[20px] transition-all"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
