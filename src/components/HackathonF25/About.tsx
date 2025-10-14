import { motion } from "framer-motion";
import FloatingParticles from "./ui/FloatingParticles";

const About = () => {
    return (
        <div className="relative px-4 md:px-8 pt-16" id="about">
            <FloatingParticles count={8} />
            {/* Section 1: About TIDALHack - Text Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1"
                >
                    <span className="text-white font-bungee text-3xl md:text-6xl mb-4 block">
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
                        <div className="absolute -inset-4 bg-gradient-radial from-[#FFA722]/25 via-[#FFA722]/15 to-transparent blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="absolute -inset-8 bg-gradient-radial from-[#FFA722]/20 to-transparent blur-3xl group-hover:blur-[40px] transition-all duration-500"></div>
                        <div className="relative w-120 mx-auto">
                            <img
                                src="/f25/about_picture.jpg"
                                alt="TIDALHack Event"
                                className=" h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded-md"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Section 2: Event Information - Text Right, Image Left */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-1"
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-radial from-[#FFA722]/25 via-[#FFA722]/15 to-transparent blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="absolute -inset-8 bg-gradient-radial from-[#FFA722]/20 to-transparent blur-3xl group-hover:blur-[40px] transition-all duration-500"></div>
                        <div className="relative w-120 mx-auto">
                            <img
                                src="/f25/msc_map.png"
                                alt="TIDALHack Event"
                                className=" h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded-md"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-2"
                >
                    <span className="text-white font-bungee text-3xl md:text-6xl mb-4 block">
                        EVENT INFORMATION
                    </span>
                    <span className="text-[#FFA722] font-bungee text-xl md:text-2xl block mb-2">
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

                    <span className="text-[#FFA722] font-bungee text-xl md:text-2xl block mb-2">
                        PARKING
                    </span>
                    <p className="text-white font-inter font-light text-base md:text-lg">
                        <span className="underline">
                            University Center Garage (UCG)
                        </span>
                        <br />
                        <span className="underline">
                            Central Parking Garage (CPG)
                        </span>
                        <br />
                        <span className="underline">
                            Lot 100 (Free On Weekends)
                        </span>
                        <br />
                        <br />
                        Parking is free on weekends in all TAMU owned lots. Keep
                        in mind that you cannot park in reserved, timed,
                        business, or service vehicle spaces. We hope to see you
                        there!
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
