import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type SponsorTier = "gold" | "silver" | "bronze";

const sponsors: {
  id: number;
  name: string;
  logo: string | null;
  isDummy: boolean;
  tier: SponsorTier;
  logoSize?: number;
}[] = [
    {
        id: 1,
        name: "Jane Street",
        logo: "/icons/logos/companies/jane-street-blue.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 60,
    },
    {
        id: 12,
        name: "Raising Cane's",
        logo: "/icons/logos/companies/raising-canes.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 49,
    },
    {
        id: 3,
        name: "Wolfram",
        logo: "/icons/logos/companies/wolfram-logo.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 60,
    },
    {
        id: 11,
        name: "RankRabbit",
        logo: "/icons/logos/companies/rankrabbit.png",
        isDummy: false,
        tier: "silver",
        logoSize: 71,
    },
    {
        id: 4,
        name: "XPerf",
        logo: "/icons/logos/companies/xperf-white.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 60,
    },
    {
        id: 5,
        name: "Celsius",
        logo: "/icons/logos/companies/celsius.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 60,
    },
    {
        id: 6,
        name: "Mai Shan Yun",
        logo: "/icons/logos/companies/msy.png",
        isDummy: false,
        tier: "silver",
        logoSize: 70,
    },
    {
        id: 7,
        name: "Frogslayer",
        logo: "/icons/logos/companies/frogslayer.png",
        isDummy: false,
        tier: "silver",
        logoSize: 71,
    },
    {
        id: 8,
        name: "Google",
        logo: "/icons/logos/companies/google-color.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 65,
    },
    {
        id: 9,
        name: "IT Bridge",
        logo: "/icons/logos/companies/itbridge.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 58,
    },
    {
        id: 10,
        name: "ElevenLabs",
        logo: "/icons/logos/companies/elevenlabs.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 52,
    },
    {
        id: 13,
        name: "Roni's Mac Bar",
        logo: "/icons/logos/companies/ronis.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 46,
    },
    {
        id: 2,
        name: "AWS",
        logo: "/icons/logos/companies/aws-logo.png",
        isDummy: false,
        tier: "silver",
        logoSize: 39,
    },
    {
        id: 14,
        name: "featherless.ai",
        logo: "/icons/logos/companies/featherlessai-transparent.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 69,
    },
];

const Sponsors = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (!trackRef.current) {
      return;
    }

    const element = trackRef.current;
    const updateWidth = () => {
      const fullWidth = element.scrollWidth;
      setTrackWidth(fullWidth > 0 ? fullWidth / 2 : 0);
    };

    updateWidth();
    const observer = new ResizeObserver(() => updateWidth());
    observer.observe(element);
    window.addEventListener("resize", updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <section
      id="sponsors"
      className="relative w-full h-full px-4 sm:px-6 lg:px-8 overflow-x-hidden pointer-events-none select-none"
      style={{
        backgroundColor: "#79b0cf",
        paddingTop: "clamp(60px, 8vw, 140px)",
        paddingBottom: "clamp(40px, 5vw, 72px)",
      }}
    >
      <motion.h2
        className="s26-section-header font-bold text-center text-white uppercase tracking-widest mb-8 md:mb-16 lg:mb-20"
        style={{
          fontSize: "clamp(28px, 5vw, 52px)",
          textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Amazing Sponsors
      </motion.h2>

      <div className="absolute top-20 -left-30 w-[600px] h-[600px] hidden md:block pointer-events-none">
        <img
          src="/s26/lilguywatchingtv.png"
          alt="Lil guy watching TV on ice"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-0 -right-30 w-[600px] h-[600px] hidden md:block pointer-events-none">
        <img
          src="/s26/foxsleeping.png"
          alt="Fox sleeping on ice"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Sponsors Grid in Center with Central Globe */}
        {/* Desktop: Orbital Layout */}
        <div className="hidden md:relative md:flex md:items-center md:justify-center md:py-32 md:h-[800px]">
          {/* Central Globe */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-0">
            <img
              src="/s26/globe.png"
              alt="Central globe"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Sponsors floating around */}
          <div className="absolute inset-0 flex items-center justify-center">
            {sponsors.map((sponsor, index) => {
              // 1. Calculate the coordinates
              const angle =
                (index / sponsors.length) * 2 * Math.PI;
              const radius = 320;
              const xPos = Math.cos(angle) * radius;
              const yPos = Math.sin(angle) * radius;
              const baseSize = sponsor.logoSize ?? 60;
              const logoWidth = Math.round(baseSize * 2.8);
              const logoHeight = Math.round(baseSize * 2.1);

              return (
                <motion.div
                  key={sponsor.id}
                  className="absolute pointer-events-auto"
                  // 2. We use 'x' and 'y' for positioning.
                  // We DO NOT use 'rotate' here at all.
                  style={{
                    x: xPos,
                    y: yPos,
                    left: "50%",
                    top: "50%",
                    // Ensure the logo itself is centered on the coordinate
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  {/* 3. The Wavering Animation */}
                  <motion.div
                    animate={{
                      x: [0, 8, 3, -6, -2, 5, 0],
                      y: [0, -4, 7, 2, -8, -1, 0],
                      rotate: [0, 1.5, -0.6, 1.1, -0.9, 0.4, 0],
                    }}
                    transition={{
                      duration: 11 + (index % 5),
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.18, 0.34, 0.52, 0.7, 0.86, 1],
                      delay: index * 0.2,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {sponsor.isDummy ? (
                      <span className="text-white font-caudex font-bold text-xl drop-shadow-md">
                        {sponsor.name}
                      </span>
                    ) : (
                      <img
                        src={sponsor.logo ?? ""}
                        alt={sponsor.name}
                        style={{
                          width: `${logoWidth}px`,
                          height: `${logoHeight}px`,
                          objectFit: "contain",
                          transform: "rotate(0deg)",
                        }}
                        className="drop-shadow-2xl"
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Auto-Scrolling Carousel */}
        <div
          className="md:hidden relative w-full py-8"
          style={{ minHeight: "700px" }}
        >
          <div className="w-[600px] h-[600px] -translate-x-32 -my-36">
            <img
              src="/s26/lilguywatchingtv.png"
              alt="Lil guy watching TV on ice"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex w-max"
              animate={trackWidth ? { x: [0, -trackWidth] } : { x: 0 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...sponsors, ...sponsors].map((sponsor, index) => {
                const baseSize = sponsor.logoSize ?? 60;
                const logoWidth = Math.round(baseSize * 2.8);
                const logoHeight = Math.round(baseSize * 2.1);
                return (
                <div
                  key={`${sponsor.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center mr-10"
                >
                  {sponsor.isDummy ? (
                    <span className="text-white font-caudex font-bold text-center px-3 bg-white bg-opacity-20 rounded-lg p-2 text-sm">
                      {sponsor.name}
                    </span>
                  ) : (
                    <img
                      src={sponsor.logo ?? ""}
                      alt={sponsor.name}
                      style={{
                        width: `${logoWidth}px`,
                        height: `${logoHeight}px`,
                        objectFit: "contain",
                      }}
                      className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
                      loading="lazy"
                    />
                  )}
                </div>
              )})}
            </motion.div>
          </div>

          {/* Fox bottom-right - same sizing as desktop */}
          <div className="w-[600px] h-[600px] -translate-x-20 -my-36">
            <img
              src="/s26/foxsleeping.png"
              alt="Fox sleeping on ice"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
