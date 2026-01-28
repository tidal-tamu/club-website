import FloatingParticles from "./ui/FloatingParticles";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

interface HeroProps {
  shouldAnimate?: boolean;
}

const Hero = ({ shouldAnimate = false }: HeroProps) => {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center px-6 md:px-12 select-none">
        {/* Background layer - hills and bushes */}
        <div className="absolute inset-0 z-0">
          <img
            src="/s26/Hero/BackBushes.png"
            alt="Back Bushes"
            className="absolute bottom-[30vh] left-0 w-screen slide-up-0"
          />
          <img
            src="/s26/Hero/TopHill.png"
            alt="Top Hill"
            className="absolute bottom-0 left-0 w-screen h-[55%] slide-up-0"
          />
          <img
            src="/s26/Hero/LowHill.png"
            alt="Low Hill"
            className="absolute bottom-8 left-5 sm:bottom-10 sm:left-0 w-screen h-[33%] slide-up-1"
          />
        </div>

        {/* House layer */}
        <div className="absolute w-screen inset-0 z-7 overflow-hidden">
          <img
            src="/s26/Hero/HouseGlowing.png"
            alt="House Glowing"
            className="absolute bottom-[48vh] right-[-10vh] sm:right-[3vh] md:right-[6vh] lg:right-[10vh] xl:right-[14vh] 2xl:right-[18vh] w-[40vh] object-contain slide-up-0"
          />
        </div>

        {/* Trees layer */}

        <div className="absolute w-screen inset-0 z-5">
          <img
            src="/s26/Hero/LargeBrownTreeAlt.png"
            alt="Large Brown Tree Alt"
            className="absolute md:right-0 bottom-[18vh] -translate-x-32 md:translate-x-16 lg:translate-x-20 xl:translate-x-24 2xl:translate-x-28 h-full min-w-[700px] slide-up-1"
          />
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="/s26/Hero/TreesPreShadowed.png"
            alt="Trees Pre Shadowed"
            className="absolute left-0 bottom-[46vh] sm:bottom-[45vh] md:bottom-[44vh] lg:bottom-[43vh] xl:bottom-[41vh] 2xl:bottom-[40vh] w-full sm:w-[80%] slide-up-0"
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
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 overflow-hidden w-screen">
            <img
              src="/s26/Hero/LowSnowPreShadowed.png"
              alt="Low Snow Pre Shadowed"
              className="left-0 scale-[3] sm:scale-[2] lg:scale-[1] slide-up-2"
            />
            <div
              className="h-[8rem]"
              style={{
                background:
                  //transitions between hero and about cleanly
                  "linear-gradient(to bottom, #77A5C6, #77A5C6)",
              }}
            />
          </div>
        </div>

        <div className="absolute left-0 z-10 bottom-[5rem] lg:bottom-[8rem] overflow-hidden">
          <div className="overflow-hidden">
            <img
              src="/s26/pebble.gif"
              alt="Penguin mascot"
              className="w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] flex-shrink-0 bottom-0 slide-up-3"
            />
          </div>
          <img
            src="/s26/PenguinCover.png"
            alt="Penguin Cover"
            className="absolute bottom-0 scale-[1.1] w-[200px] md:w-[250px] lg:w-[325px] xl:w-[400px] flex-shrink-0 slide-up-2"
          />
          <span className="absolute left-0 bottom-[5rem] lg:bottom-[8rem] left-[100px] md:left-[125px] lg:left-[163px] xl:left-[200px] translate-y-full text-4xl animate-rustle">rustle</span>
        </div>

        <div className="text-center z-20 max-w-4xl mx-auto -translate-y-[5vh] space-y-0 flex flex-col gap-5">
          {/* Pills - animate text only (top element, starts first) */}
          <motion.div
            className="flex flex-wrap md:flex-nowrap justify-center gap-2 sm:gap-3 z-20"
            initial={{ y: 30, opacity: 0 }}
            animate={shouldAnimate ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{
              duration: 2.0,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.1,
            }}
          >
            <div className="bg-[#9FC9E6] border-[2px] border-[#9FC9E6] px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-xl whitespace-nowrap hover:bg-[#8AB8D5] hover:border-[#8AB8D5] hover:scale-105 transition-all duration-200">
              <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                MSC Bethancourt
              </span>
            </div>
            <div className="bg-[#9FC9E6] border-[2px] border-[#9FC9E6] px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-xl whitespace-nowrap hover:bg-[#8AB8D5] hover:border-[#8AB8D5] hover:scale-105 transition-all duration-200">
              <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                24 Hours
              </span>
            </div>
            <div className="bg-[#9FC9E6] border-[2px] border-[#9FC9E6] px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-xl whitespace-nowrap hover:bg-[#8AB8D5] hover:border-[#8AB8D5] hover:scale-105 transition-all duration-200 cursor-pointer">
              <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                Feb 7-8
              </span>
            </div>
          </motion.div>

          {/* Main title - animate text only (middle element, starts after pills) */}
          <motion.div
            className="relative flex items-center justify-center gap-6 md:gap-8 lg:gap-10 xl:gap-10 animate-float-subtle"
            initial={{ y: 40, opacity: 0 }}
            animate={shouldAnimate ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{
              duration: 2.2,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.8,
            }}
          >
            <h1
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dynapuff"
              style={{
                fontWeight: "bold",
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 40px rgba(255, 200, 50, 0.08))",
                lineHeight: "1.1",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              Tidal
              <br />
              Hack
            </h1>
            <span
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dynapuff inline-flex items-center scale-[2]"
              style={{
                fontWeight: "bold",
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 40px rgba(255, 200, 50, 0.08))",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                height: "2.2em",
                lineHeight: "1.1",
                marginLeft: "0.5em",
              }}
            >
              '26
            </span>
          </motion.div>

          {/* Buttons - animate text only (bottom element, starts last) */}
          <motion.div
            className="flex flex-row items-center gap-3 sm:gap-4 mt-12 md:mt-16 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={shouldAnimate ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{
              duration: 2.0,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.6,
            }}
          >
            <Link
              to="/register"
              className="bg-[#AB3243] hover:bg-[#8F2838] text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 hover:scale-110 hover:shadow-lg border-[2.5px] border-[#AB3243] hover:border-[#8F2838] min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]"
              style={{
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))",
              }}
            >
              APPLY NOW
              <FaPlay className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-white" />
            </Link>
            <a
              href="https://forms.gle/oBEQk9y9xadLhYnE9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9FC9E6] hover:bg-[#8AB8D5] text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 hover:scale-110 hover:shadow-lg border-[2.5px] border-[#9FC9E6] hover:border-[#8AB8D5] min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]"
              style={{
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4))",
              }}
            >
              JUDGE / MENTOR
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
