import "./HeroBackground.css";
import "animate.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaDiscord } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative min-h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white pb-24 sm:pb-4">
            <div className="backgroundImage absolute inset-0">
                <motion.div
                    className="absolute top-20 left-4 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-5"
                    style={{
                        background:
                            "radial-gradient(circle, #336699 0%, transparent 70%)",
                    }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -25, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-40 right-4 sm:right-20 w-48 h-48 sm:w-80 sm:h-80 rounded-full opacity-5"
                    style={{
                        background:
                            "radial-gradient(circle, #706993 0%, transparent 70%)",
                    }}
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                        scale: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />

                <motion.div
                    className="hidden lg:block absolute top-32 left-1/3 text-6xl sm:text-8xl opacity-10 text-[#336699] font-mono"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                        duration: 30,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                >
                    ∑
                </motion.div>

                <motion.div
                    className="hidden lg:block absolute top-1/4 right-1/4 text-5xl sm:text-7xl opacity-8 text-[#706993] font-mono"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    ∇
                </motion.div>

                <motion.div
                    className="hidden lg:block absolute bottom-1/3 left-1/4 text-4xl sm:text-6xl opacity-12 text-[#336699] font-mono"
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    π
                </motion.div>

                <motion.div
                    className="hidden lg:block absolute bottom-1/4 right-1/4 text-5xl sm:text-7xl opacity-10 text-[#706993] font-mono"
                    animate={{ rotate: [0, -180, 0] }}
                    transition={{
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    ∞
                </motion.div>

                <motion.div
                    className="hidden lg:block absolute top-1/2 left-1/4 text-3xl sm:text-5xl opacity-15 text-[#336699] font-mono"
                    animate={{ x: [0, 30, 0] }}
                    transition={{
                        duration: 12,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    ∫
                </motion.div>

                <motion.div
                    className="hidden lg:block absolute top-3/4 right-1/3 text-4xl sm:text-6xl opacity-8 text-[#706993] font-mono"
                    animate={{
                        scale: [1, 0.8, 1],
                        x: [0, -15, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    ∂
                </motion.div>
                <div className="wave-box"></div>
                <div className="gradient-overlay"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-none bg-gradient-to-r from-[#336699] via-[#706993] to-[#336699] bg-clip-text text-transparent">
                            TIDALTAMU
                        </h1>

                        <div className="mb-8">
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#336699] mb-2">
                                October 25th, 2025 | 9AM-6PM
                            </p>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                                Join us for Texas A&M's most innovative AI/ML
                                hackathon!
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="https://discord.gg/QCHKPUUxRB"
                                target="_blank"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex justify-center items-center gap-3 font-bold text-white bg-gradient-to-r from-[#336699] to-[#706993] hover:from-[#336699]/90 hover:to-[#706993]/90 px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
                            >
                                <FaDiscord className="w-5 h-5" />
                                Join Discord
                                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="#about-us"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex justify-center items-center gap-3 font-bold border-2 border-[#336699] text-[#336699] hover:bg-[#336699] hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 bg-transparent"
                            >
                                Learn More
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
