import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaExternalLinkAlt,
} from "react-icons/fa";

// TODO: Add links when sections are ready
const navLinks: { title: string; path: string; isExternal?: boolean }[] = [
    { title: "Home", path: "/", isExternal: true },
    // { title: "About", path: "about" },
    // { title: "Schedule", path: "schedule" },
    // { title: "Prizes", path: "prizes" },
    // { title: "FAQ", path: "faq" },
    // { title: "Sponsors", path: "sponsors" },
];

interface NavbarProps {
    dark?: boolean;
}

export default function Navbar({ dark = false }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (isOpen) {
            // Prevent scrolling on both body and html elements
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.width = "100%";
        } else {
            // Restore scrolling
            const scrollY = document.body.style.top;
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || "0") * -1);
            }
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.nav
            className={`fixed top-0 w-full font-mont font-semibold z-50 transition-all duration-300 ${
                dark ? "bg-transparent text-white" : "bg-transparent text-black"
            }`}
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
                <a href="/hackathon" className="flex items-center">
                    <img
                        src={
                            dark
                                ? "./icons/logos/tidal-white-transparent.png"
                                : "./icons/logos/tidal-newblue.svg"
                        }
                        alt="TIDAL Logo"
                        className="h-3 w-auto md:h-5"
                    />
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks
                        .filter((link) => !link.isExternal) // Hide external links (Home) on desktop
                        .map((link) => (
                            <Link
                                key={link.title}
                                to={link.path}
                                smooth={true}
                                duration={500}
                                className="text-gray-600 hover:text-[#336699] transition-all duration-300 font-medium"
                            >
                                {link.title}
                            </Link>
                        ))}
                    {/** Apply button temporarily disabled **/}
                    {false && (
                        <a
                            href="/register"
                            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                        >
                            Apply
                        </a>
                    )}
                </div>

                {/** Hamburger icon **/}
                <button
                    className={`md:hidden inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg focus:outline-none focus:ring-2 z-50 relative ${
                        dark
                            ? "hover:bg-white/10 focus:ring-white/20"
                            : "hover:bg-gray-100 focus:ring-gray-200"
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    className={`md:hidden fixed inset-0 top-0 left-0 w-full h-screen backdrop-blur-xl ${
                        dark
                            ? "bg-black/20 text-white"
                            : "bg-white/20 text-black"
                    } z-40`}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{
                        x: isOpen ? "0%" : "100%",
                        opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <div className="flex flex-col h-full px-6 py-12">
                        {/* Navigation Links - Center Section */}
                        <div className="flex-1 flex flex-col items-center justify-center space-y-12">
                            {navLinks.map((link) =>
                                link.isExternal ? (
                                    <a
                                        key={link.title}
                                        href={link.path}
                                        className={`text-2xl transition-all duration-300 font-medium text-center ${
                                            dark
                                                ? "text-gray-300 hover:text-white"
                                                : "text-gray-600 hover:text-[#336699]"
                                        }`}
                                    >
                                        {link.title}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.title}
                                        to={link.path}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-2xl transition-all duration-300 font-medium text-center ${
                                            dark
                                                ? "text-gray-300 hover:text-white"
                                                : "text-gray-600 hover:text-[#336699]"
                                        }`}
                                    >
                                        {link.title}
                                    </Link>
                                )
                            )}
                            <a
                                href="/register"
                                className="bg-[#FFAC29] hover:bg-[#CC8A21] text-black px-14 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-xl mt-8"
                                style={{
                                    filter: "drop-shadow(0 8px 0 #CC8A21) drop-shadow(0 12px 16px rgba(0, 0, 0, 0.3))",
                                    boxShadow:
                                        "inset 0 0 0 1.8px rgba(255, 255, 255, 0.10)",
                                }}
                            >
                                Apply
                            </a>
                        </div>

                        {/* Contact Links - Bottom Section */}
                        <div className="flex flex-col items-center pb-16">
                            <div className="flex space-x-5">
                                <a
                                    href="https://github.com/tidal-tamu/"
                                    target="_blank"
                                    className={`w-12 h-12 ${
                                        dark
                                            ? "bg-gray-800 hover:bg-[#336699]"
                                            : "bg-gray-200 hover:bg-[#336699]"
                                    } rounded-xl flex items-center justify-center transition-all duration-300 group`}
                                >
                                    <FaGithub
                                        className={`w-5 h-5 ${
                                            dark
                                                ? "text-gray-400 group-hover:text-white"
                                                : "text-gray-600 group-hover:text-white"
                                        }`}
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/tidaltamu"
                                    target="_blank"
                                    className={`w-12 h-12 ${
                                        dark
                                            ? "bg-gray-800 hover:bg-[#336699]"
                                            : "bg-gray-200 hover:bg-[#336699]"
                                    } rounded-xl flex items-center justify-center transition-all duration-300 group`}
                                >
                                    <FaLinkedin
                                        className={`w-5 h-5 ${
                                            dark
                                                ? "text-gray-400 group-hover:text-white"
                                                : "text-gray-600 group-hover:text-white"
                                        }`}
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/tidaltamu/"
                                    target="_blank"
                                    className={`w-12 h-12 ${
                                        dark
                                            ? "bg-gray-800 hover:bg-[#336699]"
                                            : "bg-gray-200 hover:bg-[#336699]"
                                    } rounded-xl flex items-center justify-center transition-all duration-300 group`}
                                >
                                    <FaInstagram
                                        className={`w-5 h-5 ${
                                            dark
                                                ? "text-gray-400 group-hover:text-white"
                                                : "text-gray-600 group-hover:text-white"
                                        }`}
                                    />
                                </a>
                                <a
                                    href="https://discord.gg/eQ8ScamG4H"
                                    target="_blank"
                                    className={`w-12 h-12 ${
                                        dark
                                            ? "bg-gray-800 hover:bg-[#336699]"
                                            : "bg-gray-200 hover:bg-[#336699]"
                                    } rounded-xl flex items-center justify-center transition-all duration-300 group`}
                                >
                                    <FaExternalLinkAlt
                                        className={`w-5 h-5 ${
                                            dark
                                                ? "text-gray-400 group-hover:text-white"
                                                : "text-gray-600 group-hover:text-white"
                                        }`}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
