import { motion } from "framer-motion";
import { FaTrophy, FaAward } from "react-icons/fa";

export default function About() {
    return (
        <div className="w-full font-mont overflow-x-clip -mt-1" id="about-us">
            <section
                id="about-us"
                className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white relative overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#336699]/20 to-[#706993]/20"
                    style={{
                        clipPath: "polygon(0 4px, 100% 4px, 100% 100%, 0 100%)",
                    }}
                ></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-0">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center bg-[#336699]/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <FaAward className="w-4 h-4 mr-2" />
                                Award-Winning Organization
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6">
                                About{" "}
                                <span className="text-[#336699]">TIDAL</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                                The Tethered Informatics and Data Analytics Lab
                                (TIDAL) is Texas A&M University's premier
                                student organization dedicated to advancing AI
                                and machine learning education through hands-on
                                experiences, collaborative projects, and
                                community engagement.
                            </p>
                            <div className="bg-gradient-to-r from-[#336699] to-[#706993] p-6 rounded-2xl text-white">
                                <div className="flex items-center mb-2">
                                    <FaTrophy className="w-6 h-6 mr-3" />
                                    <span className="font-bold text-lg">
                                        Adair Student Organization of the Year
                                        2025
                                    </span>
                                </div>
                                <p className="text-white/90">
                                    Recognized for excellence in student
                                    leadership and community impact
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            {/* Image container with enhanced styling */}
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-[#336699]/10 to-[#706993]/10 p-2">
                                <img
                                    src="/images/about-image.JPG"
                                    alt="About Us"
                                    className="w-full h-auto rounded-xl object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                                />

                                {/* Gradient overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Decorative border */}
                                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-[#336699]/30 to-[#706993]/30 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Floating decorative elements around the image */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-8 h-8 bg-[#336699]/20 rounded-full"
                                animate={{
                                    y: [0, -8, 0],
                                    rotate: [0, 180, 360],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#706993]/25"
                                style={{
                                    clipPath:
                                        "polygon(50% 0%, 0% 100%, 100% 100%)",
                                }}
                                animate={{
                                    rotate: [0, 360],
                                    y: [0, 6, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                }}
                            />

                            {/* Subtle glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#336699]/5 to-[#706993]/5 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        </motion.div>
                    </div>
                </div>

                {/* Floating shapes */}
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <motion.div
                        className="absolute top-20 left-10 w-12 h-12 bg-[#336699]/20 rounded-full"
                        animate={{ y: [0, -8, 0], rotate: [0, 180, 360] }}
                        transition={{
                            duration: 6,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute top-40 left-32 w-6 h-6 bg-[#706993]/25"
                        style={{
                            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        }}
                        animate={{ rotate: [0, 360] }}
                        transition={{
                            duration: 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />

                    <motion.div
                        className="absolute top-16 right-20 w-10 h-10 bg-[#336699]/20"
                        style={{
                            clipPath:
                                "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                        }}
                        animate={{ x: [0, 12, 0], y: [0, -6, 0] }}
                        transition={{
                            duration: 7,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute top-40 right-10 w-5 h-5 bg-[#706993]/30 rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className="absolute bottom-32 left-20 w-8 h-8 bg-[#706993]/25"
                        style={{
                            clipPath:
                                "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        }}
                        animate={{ y: [0, 10, 0], rotate: [0, 90, 0] }}
                        transition={{
                            duration: 9,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className="absolute bottom-20 right-32 w-16 h-8 bg-[#336699]/18 rounded-full"
                        animate={{ x: [0, -15, 0], scale: [1, 1.05, 1] }}
                        transition={{
                            duration: 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-40 right-8 w-6 h-6 bg-[#706993]/22"
                        style={{
                            clipPath:
                                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                        }}
                        animate={{ rotate: [0, 360] }}
                        transition={{
                            duration: 15,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />

                    <motion.div
                        className="absolute top-1/3 left-1/3 w-4 h-4 bg-[#336699]/20 rounded-full"
                        animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#706993]/25"
                        style={{
                            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        }}
                        animate={{ rotate: [0, 180, 360] }}
                        transition={{
                            duration: 12,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                </div>
            </section>
        </div>
    );
}
