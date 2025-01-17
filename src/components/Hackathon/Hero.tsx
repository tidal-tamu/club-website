import "../Home/Hero/HeroBackground.css";

export default function Hero() {
    return (
        <div className="h-full w-full flex flex-col lg:flex-row gap-7 justify-center items-center transition-[padding]">
            <img
                src="./images/hackathon-sheep.png"
                className="mb-5 lg:ml-32 2xl:ml-44 md:mb-0 w-64 lg:w-auto animate-float"
            />
            <div className="flex flex-col grow justify-start items-center lg:items-end font-mont gap-8 md:gap-14 lg:mr-32 2xl:mr-44">
                <div className="flex flex-col justify-center items-center lg:items-end gap-5">
                    <h1 className="text-navy font-bold text-5xl lg:text-7xl 2xl:text-8xl text-center lg:text-end">
                        TIDALTAMU <br /> HACKATHON
                    </h1>
                    <p className="text-navy font-semibold text-2xl lg:text-4xl 2xl:text-5xl">
                        OCT 19th - 20th
                    </p>
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
                        // href="https://docs.google.com/forms/d/e/1FAIpQLSdNIKh8oVORsjkzpOxAy-AgCURFudlWtAP8hR6eI0gISAky7A/viewform"
                        href="/register"
                        className="flex justify-center items-center shrink-0 gap-3 font-bold text-white bg-navy px-3 py-1 md:px-6 md:py-2 md:text-xl rounded-lg border-[1px] cursor-pointer border-[#0094D3] hover:bg-[#0094D3] transition-all"
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
