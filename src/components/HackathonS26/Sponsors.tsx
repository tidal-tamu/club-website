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
    return (
        <section
            id="sponsors"
            className="relative w-full overflow-x-hidden px-4 sm:px-6 lg:px-8"
            style={{
                backgroundColor: "#79b0cf",
                paddingTop: "clamp(60px, 8vw, 140px)",
                paddingBottom: "clamp(40px, 5vw, 72px)",
                minHeight: "600px",
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

            <div className="relative max-w-7xl mx-auto w-full h-full">
                <div className="absolute -left-30 bottom-50 w-[600px] h-[600px]">
                    <img
                        src="/s26/lilguywatchingtv.png"
                        alt="Lil guy watching TV on ice"
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="absolute top-50 -right-30 w-[600px] h-[600px]">
                    <img
                        src="/s26/foxsleeping.png"
                        alt="Fox sleeping on ice"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Sponsors Grid in Center */}
                <div className="relative flex items-center justify-center py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-8 w-full max-w-4xl">
                        {sponsors.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.id}
                                className="flex flex-col items-center justify-center"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="bg-[#3A729B] bg-opacity-80 rounded-lg p-6 hover:bg-opacity-50 transition-all shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {sponsor.isDummy ? (
                                        <span className="text-white font-caudex font-bold text-center">
                                            {sponsor.name}
                                        </span>
                                    ) : (
                                        <img
                                            src={sponsor.logo ?? ""}
                                            alt={sponsor.name}
                                            style={{
                                                width: "120px",
                                                height: "80px",
                                                objectFit: "contain",
                                            }}
                                            className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                                            loading="lazy"
                                        />
                                    )}
                                </motion.div>
                                <p className="text-white text-sm font-semibold mt-3 text-center">
                                    {sponsor.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
