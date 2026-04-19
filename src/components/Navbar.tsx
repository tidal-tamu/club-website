import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaExternalLinkAlt,
} from "react-icons/fa";

const DISCORD_URL = "https://discord.gg/eQ8ScamG4H";
const HACKATHON_URL = "https://s26.tidaltamu.com";

const navLinkClass =
    "font-mont text-gray-700 transition-colors hover:text-[#336699] font-medium";

interface NavbarProps {
    dark?: boolean;
}

export default function Navbar({ dark = false }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.width = "100%";
        } else {
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
            className={`fixed top-0 w-full font-mont font-semibold transition-all duration-300 ${
                dark
                    ? "bg-spaceBlack border-b border-gray-800 text-white"
                    : "bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 text-black"
            }`}
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="container mx-auto flex items-center justify-between px-6 py-3 lg:px-12 z-50">
                <a href="/" className="flex shrink-0 cursor-pointer items-center">
                    <img
                        src={
                            dark
                                ? "./icons/logos/tidal-white-transparent.png"
                                : "./icons/logos/tidal-newblue.svg"
                        }
                        alt="TIDAL Logo"
                        className="h-6 w-auto cursor-pointer"
                    />
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    <a href="/#about-us" className={navLinkClass}>
                        About
                    </a>
                    <a
                        href={HACKATHON_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={navLinkClass}
                    >
                        Hackathon
                    </a>
                    <a
                        href={DISCORD_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={navLinkClass}
                    >
                        Join Us
                    </a>
                </div>

                <button
                    className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg
                            className="h-6 w-6"
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
                            className="h-6 w-6"
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

            <motion.div
                className={`fixed inset-0 top-0 left-0 z-40 h-screen w-full md:hidden ${
                    dark
                        ? "bg-spaceBlack text-white"
                        : "bg-gradient-to-br from-gray-50 to-white text-black"
                }`}
                initial={{ x: "100%", opacity: 0 }}
                animate={{
                    x: isOpen ? "0%" : "100%",
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                    display: isOpen ? "block" : "none",
                    pointerEvents: isOpen ? "auto" : "none",
                }}
            >
                <div className="flex h-full flex-col px-6 pt-24">
                    <div className="flex flex-1 flex-col items-center justify-center space-y-10">
                        <a
                            href="/#about-us"
                            className={`${navLinkClass} text-xl`}
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href={HACKATHON_URL}
                            target="_blank"
                            rel="noreferrer"
                            className={`${navLinkClass} text-xl`}
                            onClick={() => setIsOpen(false)}
                        >
                            Hackathon
                        </a>
                        <a
                            href={DISCORD_URL}
                            target="_blank"
                            rel="noreferrer"
                            className={`${navLinkClass} text-xl`}
                            onClick={() => setIsOpen(false)}
                        >
                            Join Us
                        </a>
                    </div>

                    <div className="flex flex-col items-center pb-16">
                        <div className="flex space-x-5">
                            <a
                                href="https://github.com/tidal-tamu/"
                                target="_blank"
                                rel="noreferrer"
                                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group ${
                                    dark
                                        ? "bg-gray-800 hover:bg-[#336699]"
                                        : "bg-gray-200 hover:bg-[#336699]"
                                }`}
                            >
                                <FaGithub
                                    className={`h-5 w-5 ${
                                        dark
                                            ? "text-gray-400 group-hover:text-white"
                                            : "text-gray-600 group-hover:text-white"
                                    }`}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/tidaltamu"
                                target="_blank"
                                rel="noreferrer"
                                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group ${
                                    dark
                                        ? "bg-gray-800 hover:bg-[#336699]"
                                        : "bg-gray-200 hover:bg-[#336699]"
                                }`}
                            >
                                <FaLinkedin
                                    className={`h-5 w-5 ${
                                        dark
                                            ? "text-gray-400 group-hover:text-white"
                                            : "text-gray-600 group-hover:text-white"
                                    }`}
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/tidaltamu/"
                                target="_blank"
                                rel="noreferrer"
                                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group ${
                                    dark
                                        ? "bg-gray-800 hover:bg-[#336699]"
                                        : "bg-gray-200 hover:bg-[#336699]"
                                }`}
                            >
                                <FaInstagram
                                    className={`h-5 w-5 ${
                                        dark
                                            ? "text-gray-400 group-hover:text-white"
                                            : "text-gray-600 group-hover:text-white"
                                    }`}
                                />
                            </a>
                            <a
                                href={DISCORD_URL}
                                target="_blank"
                                rel="noreferrer"
                                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group ${
                                    dark
                                        ? "bg-gray-800 hover:bg-[#336699]"
                                        : "bg-gray-200 hover:bg-[#336699]"
                                }`}
                            >
                                <FaExternalLinkAlt
                                    className={`h-5 w-5 ${
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
        </motion.nav>
    );
}
