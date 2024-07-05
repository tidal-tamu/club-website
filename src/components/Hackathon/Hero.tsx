import "../Home/Hero/HeroBackground.css";

export default function Hero() {
    return (
        <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center pt-10 transition-[padding] bg-[url('./waves/wave-1.svg')] bg-repeat-x bg-left-bottom pb-10">
            <img
                src="./images/hackathon-sheep.png"
                className="mb-5 md:ml-20 md:mb-0 w-64 md:w-auto"
            />
            <div className="flex flex-col grow justify-start items-center lg:items-end font-mont px-5 gap-8 md:gap-14 md:mr-20">
                <div className="flex flex-col justify-center items-center lg:items-end gap-5">
                    <h1 className="text-navy font-bold text-5xl xl:text-8xl 2xl:text-9xl text-center lg:text-end">
                        TIDALTAMU HACKATHON
                    </h1>
                    <p className="text-navy font-semibold text-2xl xl:text-4xl 2xl:text-6xl">
                        NOV 11th - NOV 12th
                    </p>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <a
                        href="https://discord.gg/eQ8ScamG4H"
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
                        Apply
                        <img
                            src="./icons/arrow.svg"
                            alt="->"
                            className="w-[24px] h-[20px] transition-all"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
