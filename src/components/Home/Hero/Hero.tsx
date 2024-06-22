import "./HeroBackground.css";

export default function Hero() {
    return (
        <div className="h-full w-full flex flex-col grow justify-start items-center font-mont px-5 gap-8 lg:gap-14 backgroundImage">
            <h1 className="text-navy font-bold text-6xl xl:text-7xl 2xl:text-8xl text-center pt-20 lg:pt-40">
                THE AI WAVE STARTS HERE.
            </h1>
            <div className="flex justify-center items-center gap-5">
                <a
                    href="https://discord.gg/eQ8ScamG4H"
                    className="flex justify-center items-center shrink-0 gap-3 font-bold text-navy bg-[#EDEAE6] px-3 py-1 lg:px-6 lg:py-2 lg:text-xl rounded-lg border-[1px] border-[#C9C9C9] cursor-pointer hover:bg-[#C9C9C9]"
                >
                    Discord
                    <img
                        src="./icons/logos/discord-logo.svg"
                        alt="Discord Logo"
                        className="w-[24px] h-[18px] lg:w-[28px] lg:h-[21px]"
                    />
                </a>
                <a
                    href="/hackathon"
                    className="flex justify-center items-center shrink-0 gap-3 font-bold text-white bg-navy px-3 py-1 lg:px-6 lg:py-2 lg:text-xl rounded-lg border-[1px] cursor-pointer border-[#0094D3] hover:bg-[#0094D3]"
                >
                    Hackathon
                    <img
                        src="./icons/arrow.svg"
                        alt="->"
                        className="w-[24px] h-[20px]"
                    />
                </a>
            </div>
        </div>
    );
}
