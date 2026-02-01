import { motion } from "framer-motion";

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
        name: "AWS",
        logo: "/icons/logos/companies/aws-logo.png",
        isDummy: false,
        tier: "gold",
        logoSize: 50,
    },
    {
        id: 2,
        name: "Jane Street",
        logo: "/icons/logos/companies/jane-street-blue.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 60,
    },
    {
        id: 3,
        name: "Google",
        logo: "/icons/logos/companies/google-color.png",
        isDummy: false,
        tier: "silver",
        logoSize: 55,
    },
    {
        id: 4,
        name: "Wolfram",
        logo: "/icons/logos/companies/wolfram-logo.png",
        isDummy: false,
        tier: "gold",
        logoSize: 60,
    },
    {
        id: 5,
        name: "XPerf",
        logo: "/icons/logos/companies/xperf-white.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 60,
    },
    {
        id: 6,
        name: "Celsius",
        logo: "/icons/logos/companies/celsius.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 60,
    },
    {
        id: 7,
        name: "Mai Shan Yun",
        logo: "/icons/logos/companies/msy.png",
        isDummy: false,
        tier: "silver",
        logoSize: 70,
    },
    {
        id: 8,
        name: "Frogslayer",
        logo: "/icons/logos/companies/frogslayer.png",
        isDummy: false,
        tier: "silver",
        logoSize: 60,
    },
    {
        id: 9,
        name: "IT Bridge",
        logo: "/icons/logos/companies/itbridge.png",
        isDummy: false,
        tier: "bronze",
        logoSize: 65,
    },
];

const Sponsors = () => {
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
                style={{ fontSize: "clamp(28px, 5vw, 52px)" }}
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
                            const radius = 280;
                            const xPos = Math.cos(angle) * radius;
                            const yPos = Math.sin(angle) * radius;

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
                                            y: [0, -15, 0, 15, 0],
                                            x: [0, 10, 0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 4 + (index % 3),
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.5,
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
                                                    width: "180px",
                                                    height: "140px",
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

                    <style>{`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(calc(-100% - 24px)); }
                        }
                        .auto-scroll {
                            animation: scroll 30s linear infinite;
                        }
                        @media (hover: hover) {
                            .auto-scroll:hover {
                                animation-play-state: paused;
                            }
                        }
                    `}</style>
                    <div className="w-full">
                        <div className="auto-scroll flex gap-6 w-max">
                            {[...sponsors, ...sponsors].map(
                                (sponsor, index) => (
                                    <div
                                        key={`${sponsor.id}-${index}`}
                                        className="flex-shrink-0 flex flex-col items-center justify-center"
                                    >
                                        <div className="relative flex items-center justify-center">
                                            {sponsor.isDummy ? (
                                                <span className="text-white font-caudex font-bold text-center px-3 bg-white bg-opacity-20 rounded-lg p-2 text-sm">
                                                    {sponsor.name}
                                                </span>
                                            ) : (
                                                <img
                                                    src={sponsor.logo ?? ""}
                                                    alt={sponsor.name}
                                                    style={{
                                                        width: "200px",
                                                        height: "150px",
                                                        objectFit: "contain",
                                                    }}
                                                    className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
                                                    loading="lazy"
                                                />
                                            )}
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>
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
