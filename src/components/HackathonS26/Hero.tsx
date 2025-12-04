import { FaPlay } from "react-icons/fa";
import FloatingParticles from "./ui/FloatingParticles";
import tidalHeroText from "/s26/hero-text.svg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
                <a
                    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
                    className="hidden lg:block max-w-[100px] min-w-[60px] absolute top-0 right-[20px] w-[10%] z-30 hover:scale-105 transition-transform duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
                        alt="Major League Hacking 2026 Hackathon Season"
                    />
                </a>

                <FloatingParticles count={12} />

                <div className="text-center z-20 max-w-4xl mx-auto -translate-y-[6vh] space-y-10 md:space-y-12">
                    <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 sm:gap-3 md:gap-4 z-20 mb-4">
                        <div className="bg-[#9FC9E6] border-[2px] border-[rgba(255,255,255,0.11)] px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-xl whitespace-nowrap hover:bg-[#8AB8D5] hover:border-[rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-200">
                            <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                                MSC Bethancourt
                            </span>
                        </div>
                        <div className="bg-[#9FC9E6] border-[2px] border-[rgba(255,255,255,0.11)] px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-xl whitespace-nowrap hover:bg-[#8AB8D5] hover:border-[rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-200">
                            <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                                24 Hours
                            </span>
                        </div>
                        <div className="bg-[#9FC9E6] border-[2px] border-[rgba(255,255,255,0.11)] px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-xl whitespace-nowrap hover:bg-[#8AB8D5] hover:border-[rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-200 cursor-pointer">
                            <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                                Feb 7-8
                            </span>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-8 relative">
                        <img
                            src={tidalHeroText}
                            alt="TIDAL HACK26"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto drop-shadow-2xl animate-float-subtle"
                            style={{
                                filter: "drop-shadow(0 0 40px rgba(255, 200, 50, 0.08))",
                            }}
                        />
                    </div>

                    <div className="flex flex-col items-center gap-8">
                        <Link
                            to="/register"
                            className="bg-[#AB3243] hover:bg-[#8F2838] text-white font-bold text-lg md:text-xl px-4 md:px-6 py-1.5 md:py-2.5 rounded-xl transition-all duration-150 flex items-center gap-3"
                            style={{
                                filter: "drop-shadow(0 8px 0 #7A1F2E) drop-shadow(0 12px 16px rgba(0, 0, 0, 0.3))",
                                boxShadow:
                                    "inset 0 0 0 1.8px rgba(255, 255, 255, 0.10)",
                            }}
                        >
                            APPLY NOW
                            <FaPlay className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        </Link>
                    </div>
                </div>                
            </div>
        </>
    );
};

export default Hero;
