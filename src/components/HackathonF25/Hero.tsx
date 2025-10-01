import { FaPlay } from "react-icons/fa";
import FloatingParticles from "./ui/FloatingParticles";
import tidalHeroText from "/f25/hero.png";
import tidalBackground from "/f25/tidal-background.png";
import lightImage from "/f25/Light.png";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div
            className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden pt-20"
            style={{
                backgroundImage: `url(${tidalBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* MLH Banner - only show on laptops and up */}
            <a
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
                className="hidden lg:block max-w-[100px] min-w-[60px] absolute top-0 right-[20px] w-[10%] z-30 hover:scale-105 transition-transform duration-200"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
                    alt="Major League Hacking 2025 Hackathon Season"
                />
            </a>

            <FloatingParticles count={12} />

            {/* Light.png overlay - top left with pass-through blend */}
            <div
                className="absolute top-0 left-0 w-auto h-full pointer-events-none z-5"
                style={{
                    mixBlendMode: "screen" as any,
                }}
            >
                <img
                    src={lightImage}
                    alt=""
                    className="h-full w-auto object-cover"
                    style={{
                        opacity: 0.8,
                    }}
                />
            </div>

            <div className="text-center z-20 max-w-4xl mx-auto -mt-4 md:mt-12">
                {/* Pills - positioned independently */}
                <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 sm:gap-3 md:gap-4 z-20 mb-4">
                    <div className="bg-[rgba(47,115,94,0.39)] border-[2px] border-[rgba(255,255,255,0.11)] px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-xl whitespace-nowrap hover:bg-[rgba(47,115,94,0.6)] hover:border-[rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-200 cursor-pointer">
                        <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                            MSC Bethancourt
                        </span>
                    </div>
                    <div className="bg-[rgba(47,115,94,0.39)] border-[2px] border-[rgba(255,255,255,0.11)] px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-xl whitespace-nowrap hover:bg-[rgba(47,115,94,0.6)] hover:border-[rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-200 cursor-pointer">
                        <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                            9 AM - 6 PM
                        </span>
                    </div>
                    <div className="bg-[rgba(47,115,94,0.39)] border-[2px] border-[rgba(255,255,255,0.11)] px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-xl whitespace-nowrap hover:bg-[rgba(47,115,94,0.6)] hover:border-[rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-200 cursor-pointer">
                        <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                            Oct 25
                        </span>
                    </div>
                </div>

                <div className="mb-6 md:mb-8 relative">
                    <img
                        src={tidalHeroText}
                        alt="TIDAL HACK25"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto drop-shadow-2xl animate-float-subtle"
                        style={{
                            filter: "drop-shadow(0 0 40px rgba(255, 200, 50, 0.08))",
                        }}
                    />

                    <div className="absolute inset-0 bg-gradient-radial from-yellow-400/5 to-transparent blur-2xl scale-125 -z-10" />
                </div>

                <div className="flex flex-col items-center gap-8">
                    <Link
                        to="/register"
                        className="bg-[#FFAC29] hover:bg-[#FFAC29] text-black font-bold text-lg md:text-xl px-4 md:px-6 py-1.5 md:py-2.5 rounded-xl transition-all duration-150 flex items-center gap-3 -mt-6"
                        style={{
                            filter: "drop-shadow(0 8px 0 #CC8A21) drop-shadow(0 12px 16px rgba(0, 0, 0, 0.3))",
                            boxShadow:
                                "inset 0 0 0 1.8px rgba(255, 255, 255, 0.10)",
                        }}
                    >
                        APPLY NOW
                        <FaPlay className="h-4 w-4 md:h-5 md:w-5 text-black" />
                    </Link>

                    <p className="text-gray-300 text-sm md:text-base font-medium">
                        More Details Coming Soon!
                    </p>
                </div>
            </div>

            <div className="absolute top-1/4 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse" />
            <div
                className="absolute bottom-1/3 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "2s" }}
            />
            <div
                className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/15 rounded-full blur-lg animate-pulse"
                style={{ animationDelay: "3s" }}
            />
        </div>
    );
};

export default Hero;
