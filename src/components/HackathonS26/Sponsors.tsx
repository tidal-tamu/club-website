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
];

const Sponsors = () => {
    const goldSponsors = sponsors.filter((s) => s.tier === "gold");
    const silverSponsors = sponsors.filter((s) => s.tier === "silver");
    const bronzeSponsors = sponsors.filter((s) => s.tier === "bronze");

    const renderTierSection = (
        tierName: string,
        tierSponsors: typeof sponsors,
        tierKey: SponsorTier,
    ) => {
        const { size, globePath, color } = TIER_CONFIG[tierKey];

        return (
            <div key={tierKey} className="mb-12 md:mb-16 select-none">
                <h3
                    className="s26-section-header font-bold text-white uppercase tracking-widest mb-6 md:mb-8 text-center"
                    style={{
                        fontSize: "clamp(18px, 3vw, 32px)",
                        color: color,
                        textShadow: `0 0 20px ${color}40`,
                    }}
                >
                    {tierName} Partners
                </h3>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
                    {tierSponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.id}
                            className="relative flex items-center justify-center"
                            style={{ width: size, height: size }}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                initial: {
                                    duration: 1,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                },
                                y: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.15,
                                },
                            }}
                            viewport={{ once: true }}
                        >
                            {/* Globe background */}
                            <img
                                src={globePath}
                                alt={`${tierName} globe`}
                                className="absolute w-full h-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.2)]"
                                loading="lazy"
                                decoding="async"
                            />

                            {/* Logo container with hover effect */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {sponsor.isDummy ? (
                                    <span className="text-white font-caudex font-bold text-center px-2 leading-tight">
                                        {sponsor.name}
                                    </span>
                                ) : (
                                    <img
                                        src={sponsor.logo ?? ""}
                                        alt={sponsor.name}
                                        style={{
                                            width: `${sponsor.logoSize || 70}%`,
                                            height: `${sponsor.logoSize || 70}%`,
                                            objectFit: "contain",
                                        }}
                                        className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                                        loading="lazy"
                                    />
                                )}
                            </motion.div>

                            {/* Label on hover */}
                            <motion.div
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-2 bg-white rounded px-2 py-1 whitespace-nowrap pointer-events-none text-xs font-semibold"
                                initial={{ opacity: 0, y: -5 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                style={{ color: color }}
                            >
                                {sponsor.name}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section
            id="sponsors"
            className="relative w-full overflow-x-hidden px-4 sm:px-6 lg:px-8"
            style={{
                backgroundColor: "#79b0cf",
                paddingTop: "clamp(60px, 8vw, 140px)",
                paddingBottom: "clamp(40px, 5vw, 72px)",
            }}
        >
            <motion.h2
                className="s26-section-header font-bold text-center text-white uppercase tracking-widest mb-12 md:mb-16 lg:mb-20"
                style={{ fontSize: "clamp(28px, 5vw, 52px)" }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Our Amazing Sponsors
            </motion.h2>

            <div className="max-w-7xl mx-auto w-full">
                {renderTierSection("Platinum", goldSponsors, "gold")}
                {renderTierSection("Silver", silverSponsors, "silver")}
                {renderTierSection("Bronze", bronzeSponsors, "bronze")}
            </div>
        </section>
    );
};

export default Sponsors;
