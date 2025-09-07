import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import confetti from "canvas-confetti";

export default function Sponsor() {
    const handleEmailClick = () => {
        navigator.clipboard.writeText("sponsorship@tidaltamu.org");
        
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: .5 },
            colors: ['#336699', '#706993', '#ffffff']
        });
    };

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Sponsors</h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Thank you to our amazing partners who make our events and programs possible.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
                >
                    {[
                        { name: "AWS", logo: "/icons/logos/companies/aws-light-logo.png", link: "https://aws.amazon.com/" },
                        { name: "Blue Origin", logo: "/icons/logos/companies/bo-logo.png", link: "https://www.blueorigin.com/" },
                        { name: "NVIDIA", logo: "/icons/logos/companies/nvidia-logo-green.png", link: "https://www.nvidia.com/" },
                        { name: "Google", logo: "/icons/logos/companies/google-color.png", link: "https://www.google.com/" },
                        { name: "Jane Street", logo: "/icons/logos/companies/jane-street-blue.png", link: "https://www.janestreet.com/" },
                        { name: "Chevron", logo: "/icons/logos/companies/chevron-logo.png", link: "https://www.chevron.com/" },
                        { name: "ConocoPhillips", logo: "/icons/logos/companies/conocophillips-logo.png", link: "https://www.conocophillips.com/" },
                        { name: "Phillips 66", logo: "/icons/logos/companies/phillips66-logo.png", link: "https://www.phillips66.com/" },
                        { name: "PNNL", logo: "/icons/logos/companies/pnnl.png", link: "https://www.pnnl.gov/" },
                        { name: "Slalom", logo: "/icons/logos/companies/slalom-logo.png", link: "https://www.slalom.com/" },
                        { name: "Pariveda", logo: "/icons/logos/companies/pariveda-logo.png", link: "https://www.parivedasolutions.com/" },
                        { name: "Wolfram", logo: "/icons/logos/companies/wolfram-logo.png", link: "https://www.wolfram.com/" },
                    ].map((sponsor, index) => (
                        <motion.a
                            key={index}
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center justify-center p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all duration-300 group"
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="max-h-12 sm:max-h-16 lg:max-h-20 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Sponsor Us!</h3>
                    <p className="text-base sm:text-lg text-gray-600 mb-6">
                        Interested in sponsoring? Click the button below to copy our email!
                    </p>
                    <motion.button
                        onClick={handleEmailClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#336699] to-[#706993] hover:from-[#336699]/90 hover:to-[#706993]/90 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
                    >
                        <FaEnvelope className="w-5 h-5" />
                        sponsorship@tidaltamu.org
                    </motion.button>
                    <p className="text-sm text-gray-500 mt-4">We would love to hear from you!</p>
                </motion.div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-12 h-12 bg-[#336699]/10 rounded-full"
                    animate={{ y: [0, -8, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />

                <motion.div
                    className="absolute top-16 right-20 w-8 h-8 bg-[#706993]/15"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                <motion.div
                    className="absolute bottom-32 left-20 w-10 h-10 bg-[#706993]/15"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                    animate={{ y: [0, 10, 0], rotate: [0, 90, 0] }}
                    transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />

                <motion.div
                    className="absolute bottom-20 right-32 w-16 h-8 bg-[#336699]/8 rounded-full"
                    animate={{ x: [0, -15, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 13, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
            </div>
        </section>
    );
}
