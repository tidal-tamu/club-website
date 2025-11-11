import { motion } from "framer-motion";
import FloatingParticles from "./ui/FloatingParticles";
import AnimatedCounter from "./ui/AnimatedCounter";

const About = () => {
    return (
        <div
            className="relative px-6 lg:px-12 xl:px-24 pt-16 max-w-7xl mx-auto"
            id="about"
        >
            <FloatingParticles count={8} />

            {/* Section 1: About TIDALHack - Text Left, Penguin Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-40">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1"
                >
                    <span className="text-white font-chelsea text-2xl sm:text-3xl md:text-6xl mb-4 block whitespace-nowrap">
                        ABOUT TIDALHACK
                    </span>
                    <p className="text-white font-inter font-light text-base md:text-lg">
                        <span className="font-bold">TIDALHack 2025</span> is a{" "}
                        <span className="font-bold">9-hour</span> event where
                        data science and machine learning enthusiasts come
                        together to build creative, open-ended ML projects!
                        <br />
                        <br />
                        We'll provide all the resources, mentorship, and freedom
                        you need to create something amazing, whether that's a
                        resume-worthy project, a chance to sharpen your skills,
                        or just a fun day of hacking with friends! Enjoy free
                        food, connect with our sponsors, and take advantage of
                        networking and learning opportunities throughout the
                        day.
                        <br />
                        <br />
                        Join us on{" "}
                        <span className="font-bold">October 25th</span> for a
                        full day of learning, collaboration, and innovation!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                >
                    <div className="relative group">
                        <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                            {/* Blurred background glow */}
                            <div
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                style={{
                                    transform: "translateZ(0)",
                                    willChange: "transform",
                                }}
                            >
                                <div
                                    className="absolute w-[120%] h-[120%] blur-3xl"
                                    style={{
                                        backgroundColor:
                                            "rgba(54, 86, 76, 0.3)",
                                        transform: "translateZ(0)",
                                        backfaceVisibility: "hidden",
                                    }}
                                />
                            </div>
                            <motion.img
                                src="/f25/static/about_penguin.png"
                                alt="TIDAL Penguin"
                                className="relative w-full h-auto object-contain"
                                whileHover={{
                                    scale: 1.05,
                                    rotate: 2,
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="text-center mb-40 overflow-hidden px-4">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1"
                >
                    <span className="text-white font-chelsea text-2xl sm:text-3xl md:text-6xl mb-8 md:mb-20 block whitespace-nowrap">
                        LAST YEAR WE HAD...
                    </span>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center justify-center text-[#FFA722] gap-2 xl:gap-3 text-sm xl:text-base font-chelsea px-8">
                        <div className="flex flex-col gap-1 -rotate-6 flex-shrink-0">
                            <span className="text-white text-5xl xl:text-6xl tabular-nums inline-block w-[160px] xl:w-[200px] text-center">
                                $<AnimatedCounter from={0} to={2} />
                                k+
                            </span>
                            in prizes
                        </div>

                        <motion.img
                            src="/f25/static/blue_gem.png"
                            alt="Gem"
                            className="w-16 h-16 xl:w-20 xl:h-20 object-contain flex-shrink-0"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        <div className="flex flex-col gap-1 rotate-6 mt-20 flex-shrink-0">
                            <span className="text-white text-5xl xl:text-6xl tabular-nums inline-block w-[160px] xl:w-[200px] text-center">
                                <AnimatedCounter from={0} to={300} />+
                            </span>
                            participants
                        </div>

                        <motion.img
                            src="/f25/static/green_gem.png"
                            alt="Gem"
                            className="w-16 h-16 xl:w-20 xl:h-20 object-contain flex-shrink-0"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                        />

                        <div className="flex flex-col gap-1 -rotate-6 flex-shrink-0">
                            <span className="text-white text-5xl xl:text-6xl tabular-nums inline-block w-[160px] xl:w-[200px] text-center">
                                <AnimatedCounter from={0} to={20} />+
                            </span>
                            mentors
                        </div>

                        <motion.img
                            src="/f25/static/yellow_gem.png"
                            alt="Gem"
                            className="w-16 h-16 xl:w-20 xl:h-20 object-contain flex-shrink-0"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2,
                            }}
                        />

                        <div className="flex flex-col gap-1 rotate-6 mt-20 flex-shrink-0">
                            <span className="text-white text-5xl xl:text-6xl tabular-nums inline-block w-[160px] xl:w-[200px] text-center">
                                <AnimatedCounter from={0} to={10} />+
                            </span>
                            sponsors
                        </div>
                    </div>

                    {/* Mobile/Tablet Layout - Vertical Stack */}
                    <div className="lg:hidden flex flex-col items-center text-[#FFA722] gap-6 font-chelsea">
                        <div className="flex flex-col items-center gap-1 -rotate-6 flex-shrink-0">
                            <span className="text-white text-5xl md:text-6xl font-bold tabular-nums inline-block w-[200px] md:w-[240px] text-center">
                                $<AnimatedCounter from={0} to={2} />
                                k+
                            </span>
                            <span className="text-sm md:text-base">
                                in prizes
                            </span>
                        </div>

                        <motion.img
                            src="/f25/static/blue_gem.png"
                            alt="Gem"
                            className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0"
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        <div className="flex flex-col items-center gap-1 rotate-6 flex-shrink-0">
                            <span className="text-white text-5xl md:text-6xl font-bold tabular-nums inline-block w-[200px] md:w-[240px] text-center">
                                <AnimatedCounter from={0} to={300} />+
                            </span>
                            <span className="text-sm md:text-base">
                                participants
                            </span>
                        </div>

                        <motion.img
                            src="/f25/static/green_gem.png"
                            alt="Gem"
                            className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0"
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                        />

                        <div className="flex flex-col items-center gap-1 -rotate-6 flex-shrink-0">
                            <span className="text-white text-5xl md:text-6xl font-bold tabular-nums inline-block w-[200px] md:w-[240px] text-center">
                                <AnimatedCounter from={0} to={20} />+
                            </span>
                            <span className="text-sm md:text-base">
                                mentors
                            </span>
                        </div>

                        <motion.img
                            src="/f25/static/yellow_gem.png"
                            alt="Gem"
                            className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0"
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2,
                            }}
                        />

                        <div className="flex flex-col items-center gap-1 rotate-6 flex-shrink-0">
                            <span className="text-white text-5xl md:text-6xl font-bold tabular-nums inline-block w-[200px] md:w-[240px] text-center">
                                <AnimatedCounter from={0} to={10} />+
                            </span>
                            <span className="text-sm md:text-base">
                                sponsors
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Section 3: Event Information */}
            <div className="mb-20">
                {/* Title - Centered */}
                <div className="text-center mb-12">
                    <span className="text-white font-chelsea text-2xl sm:text-3xl md:text-6xl block whitespace-nowrap">
                        EVENT INFO
                    </span>
                </div>

                {/* Map Left, Text Right */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="relative group">
                            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                                {/* Yellow radial glow effect for location map */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                    style={{
                                        transform: "translateZ(0)",
                                        willChange: "transform",
                                    }}
                                >
                                    <div
                                        className="absolute w-[120%] h-[120%] bg-gradient-radial from-[#FFAC29]/40 via-[#FFAC29]/20 to-transparent blur-3xl"
                                        style={{
                                            transform: "translateZ(0)",
                                            backfaceVisibility: "hidden",
                                        }}
                                    />
                                </div>
                                <img
                                    src="/f25/msc_map.png"
                                    alt="Event Location"
                                    className="relative w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300 rounded-lg shadow-2xl"
                                    style={{
                                        filter: "drop-shadow(0 0 40px rgba(255, 172, 41, 0.3))",
                                        transform: "translateZ(0)",
                                        willChange: "transform",
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <span className="text-[#FFA722] font-chelsea text-xl md:text-2xl block mb-2">
                            LOCATION
                        </span>
                        <p className="text-white font-inter font-light text-base md:text-lg mb-6">
                            MSC Bethancourt Ballroom (MSC 2300)
                            <br />
                            275 Joe Routt Blvd, College Station, TX 77843
                            <br />
                            <br />
                            <a
                                href="https://www.google.com/maps?sca_esv=deb0b5a04aa924a5&biw=1440&bih=812&output=search&q=directions+to+bethancourt+ballroom&source=lnms&fbs=AIIjpHzkVKqxs4K0fKwoDSUgo5iVwltk49sNU9rmnb7cwy9D9u2ABp4cGhxggR31ZU4sYMDgE38D1qeypgAcE1s7or1Vl_kR1aW7mJUQ_iSGe_h-wAkokaktq_1IUa45FXcwFj8ipgMfr0Y7WOp26GqrV-82ZXBDNzsdL6DvdAHpLFTsqiFbe2nxDaDmA_X_CCj0ZKut3ZYs_C4s7Zw918nL5IeCqQ-I_9P6mIoj2WKHKv0V04EYroU&entry=mc&ved=1t:200715&ictx=111"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FFA722] underline inline-flex gap-1 items-center hover:text-white transition-colors duration-300"
                            >
                                Directions{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-3.5 h-3.5 ml-1"
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                >
                                    <path d="M432 320h-32a16 16 0 0 0-16 16v112H64V128h112a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H48A48 48 0 0 0 0 112v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V336a16 16 0 0 0-16-16zm56-320H320a32 32 0 0 0-22.63 54.63l35.74 35.74-201 201a16 16 0 0 0 0 22.62l22.62 22.63a16 16 0 0 0 22.63 0l201-201 35.74 35.74A32 32 0 0 0 512 192V24a24 24 0 0 0-24-24z" />
                                </svg>
                            </a>
                        </p>

                        <span className="text-[#FFA722] font-chelsea text-xl md:text-2xl block mb-2">
                            PARKING
                        </span>
                        <p className="text-white font-inter font-light text-base md:text-lg">
                            <span className="underline">
                                University Center Garage (UCG)
                            </span>
                            <br />
                            <span className="underline">
                                Lot 74 (Free on Weekends)
                            </span>
                            <br />
                            <span className="underline">
                                Lot 100 (Free on Weekends)
                            </span>
                            <br />
                            <br />
                            Parking is free on weekends in most TAMU owned lots.
                            Keep in mind that you cannot park in reserved,
                            timed, business, or service vehicle spaces. We hope
                            to see you there!
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
