import "../Home/Hero/HeroBackground.css";
import { Meteors } from "./Meteors";

export default function Hero() {
    return (
        <div className="h-full w-11/12 flex flex-col lg:flex-row gap-7 justify-center justify-self-center items-center transition-[padding] place-self-center px-8">
            <Meteors number={7}/>
            <img
                src="/icons/shapes/8star.svg"
                className="mb-5 lg:ml-32 2xl:ml-44 md:mb-0 w-64 lg:w-auto animate-pulse"
            />
            <div className="flex flex-col grow justify-start items-center lg:items-end font-mont gap-8 md:gap-14 lg:mr-32 2xl:mr-44">
                <div className="flex flex-col justify-center items-center lg:items-end gap-4 md:gap-0">
                    <div>
                        <h1 className="text-white font-bold text-5xl lg:text-7xl 2xl:text-8xl text-start  animate__animated animate__fadeIn">
                            TIDAL
                        </h1>
                        <h1 className="text-white font-bold text-5xl lg:text-7xl 2xl:text-8xl text-start lg:pl-28 lg:pr-12  animate__animated animate__fadeIn">
                            HACK
                        </h1>
                        <p className="text-hackRed font-bold text-4xl lg:text-6xl 2xl:text-7xl text-center lg:text-right ml-auto md:-translate-y-2 lg:-translate-y-4">
                            25
                        </p>
                        <p className="text-hackBeige text-center font-semibold text-xl lg:text-3xl 2xl:text-4xl  md:-translate-y-2 lg:-translate-y-5 lg:pl-10">
                            March 8th - 9th
                        </p>
                    </div>

                </div>
                <div className="flex justify-center items-center gap-5">
                    <a
                        href="https://discord.gg/eQ8ScamG4H"
                        target="_blank"
                        className="flex justify-center items-center shrink-0 gap-3 font-bold text-navy bg-[#EDEAE6] px-3 py-1 md:px-6 md:py-2 md:text-xl rounded-lg border-[1px] border-[#C9C9C9] cursor-pointer hover:bg-[#C9C9C9] transition-all"
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
                        className="flex justify-center items-center shrink-0 gap-3 font-bold text-white bg-navy px-3 py-1 md:px-6 md:py-2 md:text-xl rounded-lg border-[1px] cursor-pointer border-[#C9C9C9] hover:bg-[#0094D3] transition-all"
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
