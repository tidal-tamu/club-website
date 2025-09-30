import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

// TODO: Add links when sections are ready
const navLinks: { title: string; path: string }[] = [
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
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
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
                <a href="/" className="flex items-center">
                    <img
                        src={
                            dark
                                ? "./icons/logos/tidal-white-transparent.png"
                                : "./icons/logos/tidal-newblue.svg"
                        }
                        alt="TIDAL Logo"
                        className="h-6 w-auto"
                    />
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
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
                    <a
                        href="/register"
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                    >
                        Apply
                    </a>
                </div>

                <button
                    className={`md:hidden inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg focus:outline-none focus:ring-2 ${
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
            <div
                className={`md:hidden absolute top-full left-0 w-full backdrop-blur-xl border-b shadow-lg transition-all duration-300 ${
                    dark
                        ? "bg-black/30 border-gray-600"
                        : "bg-white/95 border-gray-100"
                } ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
                <div className="px-6 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            to={link.path}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className={`block transition-all duration-300 font-medium py-2 ${
                                dark
                                    ? "text-gray-300 hover:text-white"
                                    : "text-gray-600 hover:text-[#336699]"
                            }`}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <a
                        href="/register"
                        target="_blank"
                        className="block bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-center mt-4"
                    >
                        Apply
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
