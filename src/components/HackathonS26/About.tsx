import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  suffix?: string;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({
  from,
  to,
  suffix = "",
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  //only animate once in view
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = String(from) + suffix;

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to) + suffix;
      return;
    }

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0) + suffix;
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to, suffix]);

  return <span ref={ref} />;
};

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #77a5c6, #79b0cf)",
      }}
    >
      {/* Background Path Image - Full height preserved */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url('/s26/SkiSlope.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat"
        }}
        aria-label="Snowy Path"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* About Title Section */}
        <div className="max-w-4xl">
          <h2
            className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-tight"
            style={{
              fontFamily: "'Caudex', serif",
              textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
            }}
          >
            ABOUT TIDALHACK
          </h2>

          {/* Red underline */}
          <div className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[723px] h-[5px] md:h-[7px] bg-[#b34756] mt-2 mb-6" />

          {/* Description paragraphs */}
          <div 
            className="text-white text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-relaxed space-y-4 max-w-3xl backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8"
            style={{
              textShadow: "0 0 6px #77A5C6",
            }}
          >
            <p style={{ fontFamily: "'Inter', sans-serif" }}>
              TidalHack Spring 2026 is a{" "}
              <span className="font-bold">24-hour</span> event for{" "}
              <span className="font-bold">data science and ML enthusiasts</span>{" "}
              to build open-ended projects, learn new skills, and have fun with
              friends.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif" }}>
              Enjoy free food, mentorship, and networking with sponsors on{" "}
              <span className="font-bold">Feb. 7-8th</span>
            </p>
          </div>
        </div>

        {/* Pebble Ski Character */}
        <div className="flex justify-start md:justify-center mt-8 md:mt-12 lg:mt-16">
          <div className="w-[200px] md:w-[280px] lg:w-[350px] xl:w-[400px] transform rotate-[10deg]">
            <img
              src="/s26/Pebble Ski.png"
              alt="Pebble Skiing"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Last Year Stats Section */}
        <div className="mt-16 md:mt-24 lg:mt-32 text-center">
          <h3
            className="text-[#3a729b] text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[96px] font-bold leading-tight"
            style={{
              fontFamily: "'Caudex', serif",
            }}
          >
            LAST YEAR WE HAD...
          </h3>

          {/* Stats Grid */}
          <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Participants */}
            <div className="flex flex-col items-center">
              <span
                className="text-[#3a729b] text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-normal"
                style={{ fontFamily: "'Chelsea Market', cursive" }}
              >
                <AnimatedCounter from={0} to={300} />
              </span>
              <span
                className="text-[#004272] text-lg md:text-xl lg:text-2xl mt-2 transform -rotate-2"
                style={{ fontFamily: "'Pangolin', cursive" }}
              >
                participants
              </span>
            </div>

            {/* Prizes */}
            <div className="flex flex-col items-center">
              <span
                className="text-[#3a729b] text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-normal"
                style={{ fontFamily: "'Chelsea Market', cursive" }}
              >
                <AnimatedCounter from={0} to={2} suffix="k+" />
              </span>
              <span
                className="text-[#004272] text-lg md:text-xl lg:text-2xl mt-2 transform rotate-1"
                style={{ fontFamily: "'Pangolin', cursive" }}
              >
                in prizes
              </span>
            </div>

            {/* Mentors */}
            <div className="flex flex-col items-center">
              <span
                className="text-[#3a729b] text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-normal"
                style={{ fontFamily: "'Chelsea Market', cursive" }}
              >
                <AnimatedCounter from={0} to={20} suffix="+" />
              </span>
              <span
                className="text-[#004272] text-lg md:text-xl lg:text-2xl mt-2"
                style={{ fontFamily: "'Pangolin', cursive" }}
              >
                mentors
              </span>
            </div>

            {/* Sponsors */}
            <div className="flex flex-col items-center">
              <span
                className="text-[#3a729b] text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-normal"
                style={{ fontFamily: "'Chelsea Market', cursive" }}
              >
                <AnimatedCounter from={0} to={11} />
              </span>
              <span
                className="text-[#004272] text-lg md:text-xl lg:text-2xl mt-2 transform -rotate-2"
                style={{ fontFamily: "'Pangolin', cursive" }}
              >
                sponsors
              </span>
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-24 md:h-32 lg:h-40" />
      </div>
    </section>
  );
};

export default About;
