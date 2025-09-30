import { motion } from "framer-motion";
import {
    FaUsers,
    FaCalendarAlt,
    FaCode,
    FaTrophy,
    FaBolt,
    FaAward,
} from "react-icons/fa";

function WhatWeDo() {
    return (
        <div className="w-full font-mont overflow-x-clip" id="what-we-do">
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
                        <div className="inline-flex items-center bg-[#336699]/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <FaAward className="w-4 h-4 mr-2" />
                            Our Impact
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6">
                            What We Do
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Empowering the next generation of AI/ML innovators
                            through hands-on experiences, collaborative
                            projects, and cutting-edge education.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
                        {/* Image Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-[#336699]/10 to-[#706993]/10 p-2">
                                {/* Placeholder for your image */}
                                <img
                                    src="/images/workshop.jpg"
                                    alt="Workshops and Events"
                                    className="w-full h-auto rounded-xl transform transition-transform duration-300 group-hover:scale-105"
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

                        {/* Feature Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <motion.div
                                    className="bg-gradient-to-br from-[#336699]/10 to-[#706993]/10 p-4 sm:p-6 rounded-2xl group hover:from-[#336699]/20 hover:to-[#706993]/20 transition-all duration-300 border border-[#336699]/20 hover:border-[#336699]/40"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-center mb-3 sm:mb-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#336699] to-[#336699]/80 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                                            <FaCode className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <h3 className="font-bold text-base sm:text-lg text-white">
                                            Hands-on Learning
                                        </h3>
                                    </div>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                        Real projects with real impact, building
                                        practical skills through immersive
                                        experiences.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-gradient-to-br from-[#706993]/10 to-[#336699]/10 p-4 sm:p-6 rounded-2xl sm:mt-8 group hover:from-[#706993]/20 hover:to-[#336699]/20 transition-all duration-300 border border-[#706993]/20 hover:border-[#706993]/40"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-center mb-3 sm:mb-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#706993] to-[#706993]/80 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                                            <FaUsers className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <h3 className="font-bold text-base sm:text-lg text-white">
                                            Community
                                        </h3>
                                    </div>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                        Connect with like-minded innovators and
                                        build lasting professional
                                        relationships.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-gradient-to-br from-[#336699]/10 to-[#706993]/10 p-4 sm:p-6 rounded-2xl sm:-mt-4 group hover:from-[#336699]/20 hover:to-[#706993]/20 transition-all duration-300 border border-[#336699]/20 hover:border-[#336699]/40"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-center mb-3 sm:mb-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#336699] to-[#336699]/80 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                                            <FaTrophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <h3 className="font-bold text-base sm:text-lg text-white">
                                            Excellence
                                        </h3>
                                    </div>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                        Award-winning programs and events that
                                        set the standard for student
                                        organizations.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-gradient-to-br from-[#706993]/10 to-[#336699]/10 p-4 sm:p-6 rounded-2xl group hover:from-[#706993]/20 hover:to-[#336699]/20 transition-all duration-300 border border-[#706993]/20 hover:border-[#706993]/40"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-center mb-3 sm:mb-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#706993] to-[#706993]/80 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                                            <FaBolt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <h3 className="font-bold text-base sm:text-lg text-white">
                                            Innovation
                                        </h3>
                                    </div>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                        Cutting-edge AI/ML projects that push
                                        the boundaries of what's possible.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                            Our Impact in Numbers
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            {
                                icon: FaUsers,
                                number: "150+",
                                label: "Active Members",
                                color: "from-[#336699] to-[#706993]",
                            },
                            {
                                icon: FaCalendarAlt,
                                number: "5+",
                                label: "Competitions Held",
                                color: "from-[#706993] to-[#336699]",
                            },
                            {
                                icon: FaCode,
                                number: "20+",
                                label: "Workshops Held",
                                color: "from-[#336699] to-[#706993]",
                            },
                            {
                                icon: FaTrophy,
                                number: "1000+",
                                label: "Hackathon Participants",
                                color: "from-[#706993] to-[#336699]",
                            },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.5 + index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div
                                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                >
                                    <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                                </div>
                                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2">
                                    {stat.number}
                                </div>
                                <p className="text-sm sm:text-base text-gray-300 font-medium text-center">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
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
            <div className="pt-64 bg-[url('/waves/v2-base-wave-180.svg')] bg-repeat-x bg-right-top transition-[padding]"></div>
        </div>
    );
}

export default WhatWeDo;
