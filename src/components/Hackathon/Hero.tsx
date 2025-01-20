import "../Home/Hero/HeroBackground.css";
import { Meteors } from "./Meteors";

export default function Hero() {
    return (
        <div className="h-full w-full flex flex-col md:flex-row gap-7 justify-center justify-self-center items-center transition-[padding] place-self-center px-8 pt-3">
            <Meteors number={7}/>
            <img
                src="/icons/shapes/8star.png"
                className="lg:ml-32 2xl:ml-36 md:mb-0 w-64 md:w-1/2 xl:w-1/3 animate-pulse"
            />
            <div className="flex flex-col grow justify-start items-center lg:items-end font-mont gap-8 md:gap-14 lg:mr-32 2xl:mr-44">
                <div className="flex flex-col justify-center items-center lg:items-end gap-4 md:gap-0">
                    <div className="tracking-widest">
                        <h1 className="text-white blocky-div font-bold text-5xl lg:text-7xl 2xl:text-8xl text-center md:text-start animate__animated animate__fadeIn">
                            TIDAL
                        </h1>
                        <h1 className="text-white blocky-div font-bold text-5xl lg:text-7xl 2xl:text-8xl text-center md:text-start md:pl-28 md:pr-12  animate__animated animate__fadeIn">
                            HACK
                        </h1>
                        <p className="text-hackRed blocky-div font-bold text-4xl lg:text-6xl 2xl:text-7xl text-center md:text-right ml-auto pt-2 -translate-y-2 md:-translate-y-4">
                            2025
                        </p>
                        <p className="text-hackBeige zing-base tracking-[10px] text-center font-semibold text-2xl lg:text-4xl 2xl:text-5xl lg:pl-10">
                            March 8th-9th
                        </p>
                    </div>

                </div>
                <div className="flex justify-center items-center gap-5">
                    <a
                        href="https://discord.gg/eQ8ScamG4H"
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
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdNIKh8oVORsjkzpOxAy-AgCURFudlWtAP8hR6eI0gISAky7A/viewform"
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
