import { motion } from "framer-motion";

type SponsorTier = "platinum" | "gold" | "silver";

const TIER_SIZE: Record<SponsorTier, { size: string; fontSize: string }> = {
    platinum: { size: "clamp(140px, 18vw, 220px)", fontSize: "clamp(12px, 1.6vw, 18px)" },
    gold: { size: "clamp(110px, 14vw, 180px)", fontSize: "clamp(11px, 1.3vw, 16px)" },
    silver: { size: "clamp(90px, 11vw, 140px)", fontSize: "clamp(10px, 1.1vw, 14px)" },
};

const sponsors: {
    id: number;
    name: string;
    logo: string | null;
    isDummy: boolean;
    tier: SponsorTier;
    position: { left: string; top: string };
}[] = [
    { id: 1, name: "AWS", logo: "/icons/logos/companies/aws-logo.png", isDummy: false, tier: "platinum", position: { left: "0%", top: "20%" } },
    { id: 2, name: "XPerf", logo: "/icons/logos/companies/xperf-white.png", isDummy: false, tier: "gold", position: { left: "80%", top: "18%" } },
    { id: 3, name: "Google", logo: "/icons/logos/companies/google-color.png", isDummy: false, tier: "gold", position: { left: "80%", top: "56%" } },
    { id: 4, name: "Wolfram", logo: "/icons/logos/companies/wolfram-logo.png", isDummy: false, tier: "gold", position: { left: "6%", top: "60%" } },
    { id: 5, name: "Celsius", logo: null, isDummy: true, tier: "silver", position: { left: "18%", top: "75%" } },
    { id: 6, name: "Mai Shan Yun", logo: null, isDummy: true, tier: "silver", position: { left: "72%", top: "78%" } },
    { id: 7, name: "Frogslayer", logo: null, isDummy: true, tier: "silver", position: { left: "22%", top: "36%" } },
    { id: 8, name: "IT Bridge", logo: null, isDummy: true, tier: "silver", position: { left: "74%", top: "40%" } },
];

const blurStyle = {
    background: "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 50%, transparent 72%)",
    filter: "blur(10px)",
};

const Sponsors = () => {
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
            <h2
                className="font-caudex font-bold text-center text-white uppercase tracking-widest mb-8 md:mb-12 lg:mb-16"
                style={{ fontSize: "clamp(28px, 5vw, 52px)" }}
            >
                Our Amazing Sponsors
            </h2>

            <div className="max-w-5xl mx-auto w-full">
                <div className="block md:hidden">
                    <div className="flex justify-center mb-6">
                        <div
                            style={{
                                width: "clamp(180px, 55vw, 260px)",
                                height: "clamp(180px, 55vw, 260px)",
                            }}
                        >
                            <img
                                src="/s26/globe.png"
                                alt="TIDALHACK"
                                className="w-full h-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:gap-5">
                        {sponsors.map((sponsor) => {
                            const { size, fontSize } = TIER_SIZE[sponsor.tier];
                            return (
                                <div key={sponsor.id} className="flex items-center justify-center">
                                    <div style={{ width: size, height: size }}>
                                        {sponsor.isDummy ? (
                                            <span
                                                className="text-[#5a9bb8] font-caudex font-bold text-center px-1 leading-tight"
                                                style={{ fontSize }}
                                            >
                                                {sponsor.name}
                                            </span>
                                        ) : (
                                            <img
                                                src={sponsor.logo ?? ""}
                                                alt={sponsor.name}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div
                    className="hidden md:block relative w-full overflow-hidden mx-auto"
                    style={{ minHeight: "clamp(400px, 70vw, 640px)" }}
                >
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                            className="relative z-10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                                width: "clamp(200px, 42vw, 420px)",
                                height: "clamp(200px, 42vw, 420px)",
                            }}
                        >
                            <img
                                src="/s26/globe.png"
                                alt="TIDALHACK"
                                className="w-full h-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.div>
                    </div>

                    {sponsors.map((sponsor, index) => {
                        const { size, fontSize } = TIER_SIZE[sponsor.tier];
                        const { left, top } = sponsor.position;
                        return (
                            <motion.div
                                key={sponsor.id}
                                className="absolute z-20 flex items-center justify-center animate-float-around"
                                style={{
                                    width: size,
                                    height: size,
                                    left,
                                    top,
                                    transform: "translate(-50%, -50%)",
                                    animationDelay: `${index * 0.12}s`,
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative flex items-center justify-center w-full h-full min-w-0 min-h-0">
                                    <div
                                        className="absolute rounded-full pointer-events-none w-[115%] h-[115%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                        style={blurStyle}
                                        aria-hidden
                                    />
                                    {sponsor.isDummy ? (
                                        <span
                                            className="relative z-10 text-[#5a9bb8] font-caudex font-bold text-center px-1 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                                            style={{ fontSize }}
                                        >
                                            {sponsor.name}
                                        </span>
                                    ) : (
                                        <img
                                            src={sponsor.logo ?? ""}
                                            alt={sponsor.name}
                                            className="relative z-10 w-full h-full object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.25)]"
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
