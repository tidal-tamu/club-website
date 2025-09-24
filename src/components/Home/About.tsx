import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaCode, FaTrophy, FaAward, FaBolt } from "react-icons/fa";

export default function About() {
    return (
        <div className="w-full font-mont overflow-x-clip" id="about-us">
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#336699]/20 to-[#706993]/20"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-0">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"> What We Do</h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">Our impact on the Texas A&M AI/ML community</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            { icon: FaUsers, number: "150+", label: "Active Members", color: "from-[#336699] to-[#706993]" },
                            { icon: FaCalendarAlt, number: "5+", label: "Competitions Held", color: "from-[#706993] to-[#336699]" },
                            { icon: FaCode, number: "20+", label: "Workshops Held", color: "from-[#336699] to-[#706993]" },
                            { icon: FaTrophy, number: "1000+", label: "Hackathon Participants", color: "from-[#706993] to-[#336699]" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div
                                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                                </div>
                                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2">{stat.number}</div>
                                <p className="text-sm sm:text-base text-gray-300 font-medium text-center">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="about-us" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center bg-[#336699]/10 text-[#336699] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <FaAward className="w-4 h-4 mr-2" />
                                Award-Winning Organization
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6">
                                About <span className="text-[#336699]">TIDAL</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                                The Tethered Informatics and Data Analytics Lab (TIDAL) is Texas A&M University's premier student
                                organization dedicated to advancing AI and machine learning education through hands-on experiences,
                                collaborative projects, and community engagement.
                            </p>
                            <div className="bg-gradient-to-r from-[#336699] to-[#706993] p-6 rounded-2xl text-white">
                                <div className="flex items-center mb-2">
                                    <FaTrophy className="w-6 h-6 mr-3" />
                                    <span className="font-bold text-lg">Adair Student Organization of the Year 2025</span>
                                </div>
                                <p className="text-white/90">Recognized for excellence in student leadership and community impact</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div className="bg-gradient-to-br from-[#336699]/10 to-[#706993]/10 p-4 sm:p-6 rounded-2xl">
                                    <FaCode className="w-6 h-6 sm:w-8 sm:h-8 text-[#336699] mb-3 sm:mb-4" />
                                    <h3 className="font-bold text-base sm:text-lg mb-2">Hands-on Learning</h3>
                                    <p className="text-gray-600 text-sm">Real projects with real impact</p>
                                </div>
                                <div className="bg-gradient-to-br from-[#706993]/10 to-[#336699]/10 p-4 sm:p-6 rounded-2xl sm:mt-8">
                                    <FaUsers className="w-6 h-6 sm:w-8 sm:h-8 text-[#706993] mb-3 sm:mb-4" />
                                    <h3 className="font-bold text-base sm:text-lg mb-2">Community</h3>
                                    <p className="text-gray-600 text-sm">Connect with like-minded innovators</p>
                                </div>
                                <div className="bg-gradient-to-br from-[#336699]/10 to-[#706993]/10 p-4 sm:p-6 rounded-2xl sm:-mt-4">
                                    <FaTrophy className="w-6 h-6 sm:w-8 sm:h-8 text-[#336699] mb-3 sm:mb-4" />
                                    <h3 className="font-bold text-base sm:text-lg mb-2">Excellence</h3>
                                    <p className="text-gray-600 text-sm">Award-winning programs and events</p>
                                </div>
                                <div className="bg-gradient-to-br from-[#706993]/10 to-[#336699]/10 p-4 sm:p-6 rounded-2xl">
                                    <FaBolt className="w-6 h-6 sm:w-8 sm:h-8 text-[#706993] mb-3 sm:mb-4" />
                                    <h3 className="font-bold text-base sm:text-lg mb-2">Innovation</h3>
                                    <p className="text-gray-600 text-sm">Cutting-edge AI/ML projects</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Floating shapes */}
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <motion.div
                        className="absolute top-20 left-10 w-12 h-12 bg-[#336699]/10 rounded-full"
                        animate={{ y: [0, -8, 0], rotate: [0, 180, 360] }}
                        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute top-40 left-32 w-6 h-6 bg-[#706993]/15"
                        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    <motion.div
                        className="absolute top-16 right-20 w-10 h-10 bg-[#336699]/10"
                        style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
                        animate={{ x: [0, 12, 0], y: [0, -6, 0] }}
                        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute top-40 right-10 w-5 h-5 bg-[#706993]/20 rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />

                    <motion.div
                        className="absolute bottom-32 left-20 w-8 h-8 bg-[#706993]/15"
                        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                        animate={{ y: [0, 10, 0], rotate: [0, 90, 0] }}
                        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />

                    <motion.div
                        className="absolute bottom-20 right-32 w-16 h-8 bg-[#336699]/8 rounded-full"
                        animate={{ x: [0, -15, 0], scale: [1, 1.05, 1] }}
                        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-40 right-8 w-6 h-6 bg-[#706993]/12"
                        style={{
                            clipPath:
                                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                        }}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    <motion.div
                        className="absolute top-1/3 left-1/3 w-4 h-4 bg-[#336699]/10 rounded-full"
                        animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
                        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#706993]/15"
                        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                        animate={{ rotate: [0, 180, 360] }}
                        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
            </div>
            </section>
        </div>
    );
}
