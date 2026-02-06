import { motion } from "framer-motion";

type SponsorTier = "gold" | "silver" | "bronze";

const TIER_CONFIG: Record<
    SponsorTier,
    { size: string; globePath: string; color: string; colorName: string }
> = {
    gold: {
        size: "clamp(200px, 28vw, 340px)",
        globePath: "/s26/Sponsors/PurpleSponsor.png",
        color: "#a855f7",
        colorName: "purple",
    },
    silver: {
        size: "clamp(180px, 25vw, 320px)",
        globePath: "/s26/Sponsors/SilverSponsor.png",
        color: "#c0c0c0",
        colorName: "silver",
    },
    bronze: {
        size: "clamp(160px, 22vw, 300px)",
        globePath: "/s26/Sponsors/RedSponsor.png",
        color: "#ef4444",
        colorName: "red",
    },
};

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
    {
        id: 10,
        name: "ElevenLabs",
        logo: "/icons/logos/companies/elevenlabs-logo-black.png",
        isDummy: false,
        tier: "silver",
        logoSize: 60,
    },
];

const Sponsors = () => {
    return (
        <section
            id="sponsors"
            className="relative w-full px-4 sm:px-6 lg:px-8 overflow-x-hidden"
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

            <div className="absolute inset-y-0 left-0 hidden md:flex items-center pointer-events-none">
                <div className="w-[min(600px,38vw)] h-[min(600px,38vw)] -translate-x-[12%]">
                    <img
                        src="/s26/lilguywatchingtv.png"
                        alt="Lil guy watching TV on ice"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <div className="absolute inset-y-0 right-0 hidden md:flex items-center pointer-events-none">
                <div className="w-[min(600px,38vw)] h-[min(600px,38vw)] translate-x-[12%]">
                    <img
                        src="/s26/foxsleeping.png"
                        alt="Fox sleeping on ice"
                        className="w-full h-full object-contain"
                    />
                </div>
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
                            const angle =
                                (index / sponsors.length) * Math.PI * 2;
                            const radius = 280;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                                <motion.div
                                    key={sponsor.id}
                                    className="absolute flex flex-col items-center justify-center"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 100,
                                    }}
                                    viewport={{ once: true }}
                                    animate={{
                                        x: [x, x * 1.15, x],
                                        y: [y, y * 1.15, y],
                                    }}
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="relative flex items-center justify-center">
                                            {sponsor.isDummy ? (
                                                <span className="text-white font-caudex font-bold text-center px-4 bg-white bg-opacity-20 rounded-lg p-3">
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
                                                    className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                                                    loading="lazy"
                                                />
                                            )}
                                        </div>
                                    </div>
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
