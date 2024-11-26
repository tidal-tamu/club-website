import "./HeroBackground.css";
import "animate.css"

export default function Hero() {
    return (
        <div className="h-full w-full flex flex-col grow justify-start items-center font-mont px-5 gap-12 md:gap-14 backgroundImage">
            <h1 className="text-navy font-bold text-4xl md:text-6xl lg:text-7xl text-center pt-10 md:pt-36 transition-[padding] animate__animated animate__zoomInDown animate__duration-2s animate__delay-0.5s">
                THE AI WAVE <br /> STARTS HERE.
            </h1>
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
                    href="/hackathon"
                    className="flex justify-center items-center shrink-0 gap-3 font-bold text-white bg-navy px-3 py-1 md:px-6 md:py-2 md:text-xl rounded-lg border-[1px] cursor-pointer border-[#0094D3] hover:bg-[#0094D3] transition-all"
                >
                    Hackathon
                    <img
                        src="./icons/shapes/arrow.svg"
                        alt="->"
                        className="w-[24px] h-[20px] transition-all"
                    />
                </a>
            </div>
        </div>
    );
}
