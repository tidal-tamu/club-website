import "./HeroBackground.css";
import "animate.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaDiscord, FaBolt } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-4 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-5"
                    style={{
                        background: "radial-gradient(circle, #336699 0%, transparent 70%)",
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
                        background: "radial-gradient(circle, #706993 0%, transparent 70%)",
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
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="inline-flex items-center bg-[#336699]/10 text-[#336699] px-4 py-2 rounded-full text-sm font-semibold mb-6"
                        >
                            <FaBolt className="w-4 h-4 mr-2" />
                            Texas A&M's Premier AI/ML Organization
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-6 leading-none">
                            <span className="text-gray-900">TIDAL</span><span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#336699] ml-2">TAMU</span>
                        </h1>

                        <div className="mb-8">
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#336699] mb-2">November 15-17, 2025</p>
                            <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                                Join us for Texas A&M's most innovative AI/ML hackathon. Build the future, one algorithm at a time.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative mt-8 lg:mt-0"
                    >
                        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gradient-to-br from-[#336699]/10 to-[#706993]/10 rounded-3xl flex items-center justify-center border border-gray-200">
                            <p className="text-gray-500 text-lg text-center px-4"> design here</p>
                        </div>
                        <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-[#336699] to-[#706993] rounded-2xl opacity-20 rotate-12"></div>
                        <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-[#706993] rounded-xl opacity-30 -rotate-12"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
