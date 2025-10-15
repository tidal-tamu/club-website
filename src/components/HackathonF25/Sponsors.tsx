import { motion } from "framer-motion";
import FloatingParticles from "./ui/FloatingParticles";

const sponsors = [
    {
        id: 1,
        name: "Google",
        logo: "/f25/sponsors/sponsor_google.png",
        size: "default",
    },
    {
        id: 2,
        name: "AWS",
        logo: "/f25/sponsors/sponsor_aws.png",
        size: "default",
    },
    {
        id: 3,
        name: "Wolfram",
        logo: "/f25/sponsors/sponsor_wolfram.png",
        size: "medium",
    },
    {
        id: 4,
        name: "Jane Street",
        logo: "/f25/sponsors/sponsor_jane_street.png",
        size: "medium",
    },
    {
        id: 5,
        name: "Figma",
        logo: "/f25/sponsors/sponsor_figma.png",
        size: "default",
    },
    {
        id: 6,
        name: "XPerf",
        logo: "/icons/logos/companies/xperf-white.png",
        size: "default",
    },
];

const Sponsors = () => {
    return (
        <section className="py-20 px-6 lg:px-12" id="sponsors">
            <FloatingParticles count={4} />
            <div className="max-w-7xl mx-auto justify-center items-center">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-white font-chelsea text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                        Our Amazing Sponsors
                    </span>
                </motion.div>
                <motion.div
                    className="flex flex-wrap justify-center items-center gap-16 lg:gap-24 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.id}
                            className={`flex items-center justify-center ${
                                sponsor.size === "default" ? "w-40" : "w-52"
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.4 + index * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="max-w-full h-auto object-contain"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Sponsors;
