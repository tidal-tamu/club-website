import FloatingParticles from "./ui/FloatingParticles";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        {/* Background layer - hills and bushes */}
        <div className="absolute inset-0 z-0">
          <img
            src="/s26/Hero/BackBushes.png"
            alt="Back Bushes"
            className="absolute bottom-[30vh] left-0 w-screen"
          />
          <img
            src="/s26/Hero/TopHill.png"
            alt="Top Hill"
            className="absolute bottom-0 left-0 w-screen h-[55%]"
          />
          <img
            src="/s26/Hero/LowHill.png"
            alt="Low Hill"
            className="hidden sm:block absolute bottom-0 left-0 w-screen h-[33%]"
          />
        </div>

        {/* House layer */}
        <div className="absolute w-screen inset-0 z-7">
          <img
            src="/s26/Hero/HouseGlowing.png"
            alt="House Glowing"
            className="hidden sm:block absolute bottom-[48vh] sm:right-[3vh] md:right-[6vh] lg:right-[10vh] xl:right-[14vh] 2xl:right-[18vh] w-[40vh]"
          />
        </div>

        {/* Trees layer */}

        <div className="hidden sm:block absolute w-screen inset-0 z-5">
          <img
            src="/s26/Hero/LargeBrownTreeAlt.png"
            alt="Large Brown Tree Alt"
            className="absolute right-0 bottom-[20vh] translate-x-[20%] h-[85vh]"
          />
        </div>
        <div className="absolute inset-0 z-5">
          <img
            src="/s26/Hero/TreesPreShadowed.png"
            alt="Trees Pre Shadowed"
            className="absolute bottom-0 left-0 w-screen bottom-[46vh] sm:bottom-[45vh] md:bottom-[44vh] lg:bottom-[43vh] xl:bottom-[41vh] 2xl:bottom-[40vh] w-full sm:w-[80%]"
          />
        </div>

        <a
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
          className="hidden lg:block max-w-[80px] min-w-[50px] absolute top-0 right-[20px] w-[8%] z-30 hover:scale-105 transition-transform duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
            alt="Major League Hacking 2026 Hackathon Season"
          />
        </a>

        <FloatingParticles count={64} />

        {/* LowSnow layer */}
        <div className="absolute inset-0 z-10">
          <div className="absolute bottom-0 overflow-hidden w-screen">
            <img
              src="/s26/Hero/LowSnowPreShadowed.png"
              alt="Low Snow Pre Shadowed"
              className="left-0 scale-[3] sm:scale-[2] lg:scale-[1]"
            />
            <div
              className="h-[8rem]"
              style={{
                background: "linear-gradient(to bottom, #76a4c5, #6fa7cf)"
              }}
            />
          </div>
        </div>

        <div className="absolute left-0 z-10 bottom-[5rem] lg:bottom-[8rem]" >
          <img
            src="/s26/pebble.gif"
            alt="Penguin mascot"
            className="w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] flex-shrink-0 animate-float-subtle bottom-0"
          />
          <img
            src="/s26/PenguinCover.png"
            alt="Penguin Cover"
            className="absolute bottom-0 w-[200px] md:w-[250px] lg:w-[325px] xl:w-[400px] flex-shrink-0"
          />
        </div>

        <div className="text-center z-20 max-w-4xl mx-auto -translate-y-[5vh] space-y-0 flex flex-col gap-5">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 sm:gap-3 z-20">
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

          <div className="relative flex items-center justify-center gap-6 md:gap-8 lg:gap-10 xl:gap-10 animate-float-subtle">
            <h1
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dynapuff"
              style={{
                fontWeight: 'bold',
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 40px rgba(255, 200, 50, 0.08))",
                lineHeight: '1.1',
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              Tidal<br />Hack
            </h1>
            <span
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dynapuff inline-flex items-center scale-[2]"
              style={{
                fontWeight: 'bold',
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 40px rgba(255, 200, 50, 0.08))",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                height: '2.2em',
                lineHeight: '1.1',
                marginLeft: '0.5em',
              }}
            >
              '26
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 mt-12 md:mt-16">
            <Link
              to="/register"
              className="bg-[#AB3243] hover:bg-[#8F2838] text-white font-bold text-lg md:text-xl px-6 md:px-8 py-2.5 md:py-3 rounded-xl transition-all duration-200 flex items-center gap-3 hover:scale-105 hover:shadow-lg"
              style={{
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))",
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
