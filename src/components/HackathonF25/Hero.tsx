import { FaPlay } from "react-icons/fa";
import FloatingParticles from "./ui/FloatingParticles";
import tidalHeroText from "/s25/hero.png";
import tidalBackground from "/s25/tidal-background.png";

const Hero = () => {

    return (
        <div 
            className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden pt-20"
            style={{
                backgroundImage: `url(${tidalBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat'
            }}
        >
            
            {/* MLH Banner - only show on laptops and up */}
            <a 
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" 
                className="hidden lg:block max-w-[100px] min-w-[60px] absolute top-0 right-[80px] w-[10%] z-30 hover:scale-105 transition-transform duration-200"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img 
                    src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" 
                    alt="Major League Hacking 2025 Hackathon Season"
                />
            </a>

            <FloatingParticles count={12} />

            <div className="absolute top-36 md:top-48 left-1/2 transform -translate-x-1/2 flex flex-wrap md:flex-nowrap justify-center gap-2 sm:gap-3 md:gap-4 z-20">
                <div className="bg-gray-800/80 backdrop-blur-sm border border-yellow-400/30 px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-xl whitespace-nowrap">
                    <span className="text-white font-medium text-xs sm:text-sm md:text-base">MSC Bethancourt</span>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm border border-yellow-400/30 px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-xl whitespace-nowrap">
                    <span className="text-white font-medium text-xs sm:text-sm md:text-base">9 AM - 6 PM</span>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm border border-yellow-400/30 px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-xl whitespace-nowrap">
                    <span className="text-white font-medium text-xs sm:text-sm md:text-base">Oct 25</span>
                </div>
            </div>

            <div className="text-center z-20 max-w-4xl mx-auto mt-8 md:mt-12">
                <div className="mb-6 md:mb-8 relative">
                    <img
                        src={tidalHeroText}
                        alt="TIDAL HACK25"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto drop-shadow-2xl animate-float-subtle"
                        style={{
                            filter: "drop-shadow(0 0 30px hsl(var(--tidal-bright) / 0.3))"
                        }}
                    />

                    <div className="absolute inset-0 bg-gradient-radial from-tidal-bright/20 to-transparent blur-3xl scale-150 -z-10" />
                </div>


                 <div className="flex flex-col items-center gap-4">
                     <a 
                         href="/register" 
                         target="_blank"
                         className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                     >
                         <FaPlay className="h-4 w-4 md:h-5 md:w-5" />
                         APPLY NOW
                     </a>
                    <p className="text-gray-300 text-sm md:text-base font-medium my-8">
                        More Details Coming Soon!
                    </p>
                </div>

            </div>

            <div className="absolute top-1/4 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '3s' }} />
        </div>
    );
};

export default Hero;