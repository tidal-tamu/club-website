import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaDiscord,
    FaEnvelope,
} from "react-icons/fa";

interface FooterProps {
    variant?: "home" | "hackathon-spring-25" | "hackathon-fall-25" | "hackathon-spring-26";
}

export default function Footer({ variant = "home" }: FooterProps) {
    const isHackathon = variant.includes("hackathon");
    const isSpring25 = variant === "hackathon-spring-25";
    const isFall25 = variant === 'hackathon-fall-25';
    const isSpring26 = variant === 'hackathon-spring-26';

    if (isFall25 || isSpring26) {
        return (
            <footer
                className={`text-white px-6 lg:px-12 py-16 relative z-10 ${
                    isSpring26 ? "bg-[#79b0cf]" : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <img
                                    src="./icons/logos/tidal-white-transparent.png"
                                    alt="TIDAL Logo"
                                    className="h-8 w-auto object-contain"
                                />
                            </div>
                            <div className="text-white text-sm md:text-base lg:text-lg font-bold mb-2">
                                TIDALTAMU
                            </div>
                            <p className="text-white-400 text-xs md:text-sm">
                                The AI Wave Starts Here
                            </p>
                        </div>

                        <div>
                            <h4 className="text-sm md:text-base lg:text-lg font-bold mb-6">Contact Us</h4>
                            <a
                                href="mailto:tidaltamu@gmail.com"
                                className="text-white-400 text-xs md:text-sm hover:text-white transition-colors"
                            >
                                tidaltamu@gmail.com
                            </a>
                        </div>

                        <div>
                            <h4 className="text-sm md:text-base lg:text-lg font-bold mb-6">Quick Links</h4>
                            <ul className="space-y-3 text-white-400 text-xs md:text-sm">
                                <li>
                                    <a
                                        href="/"
                                        className="hover:text-white transition-colors"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/hackathon"
                                        className="hover:text-white transition-colors"
                                    >
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="hover:text-white transition-colors"
                                    >
                                        Team
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex space-x-4 mb-6">
                                <a
                                    href="https://www.instagram.com/tidaltamu/"
                                    target="_blank"
                                    className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                                >
                                    <FaInstagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://discord.gg/eQ8ScamG4H"
                                    target="_blank"
                                    className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                                >
                                    <FaDiscord className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/tidaltamu"
                                    target="_blank"
                                    className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                                >
                                    <FaLinkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://github.com/tidal-tamu/"
                                    target="_blank"
                                    className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                                >
                                    <FaGithub className="w-5 h-5" />
                                </a>
                                <a
                                    href="mailto:tidaltamu@gmail.com"
                                    className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                                >
                                    <FaEnvelope className="w-5 h-5" />
                                </a>
                            </div>
                            <div className="text-white-400 text-xs md:text-sm">
                                <p className="mb-2">  © 2026 TIDALTAMU </p>
                                <a
                                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                                    target="_blank"
                                    className="hover:text-white transition-colors"
                                >
                                    MLH Code of Conduct
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer
            className={` text-white bg-[url('/waves/v2-base-wave-footer.svg')] bg-repeat-x bg-right-top pt-52`}
        >
            <div
                className={`${
                    isSpring25 ? "bg-gray" : "bg-gray-900"
                } px-6 lg:px-12 pb-12`}
            >
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <img
                                src={
                                    isSpring25
                                        ? "./icons/logos/tidal-white-transparent.png"
                                        : isHackathon
                                        ? "./icons/logos/tidal-transparent.png"
                                        : "./icons/logos/tidal-white-transparent.png"
                                }
                                alt="TIDAL Logo"
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-400 text-xs md:text-sm lg:text-base leading-relaxed">
                            Empowering Aggies with AI/ML skills through hands-on
                            learning and community engagement.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm md:text-base lg:text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400 text-xs md:text-sm lg:text-base">
                            <li>
                                <a
                                    href="#about-us"
                                    className="hover:text-white transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/hackathon"
                                    className="hover:text-white transition-colors"
                                >
                                    Events
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#officers"
                                    className="hover:text-white transition-colors"
                                >
                                    Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sponsors"
                                    className="hover:text-white transition-colors"
                                >
                                    Sponsors
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm md:text-base lg:text-lg font-bold mb-6">Events</h4>
                        <ul className="space-y-3 text-gray-400 text-xs md:text-sm lg:text-base">
                            <li>
                                <a
                                    href="/hackathon"
                                    className="hover:text-white transition-colors"
                                >
                                    TIDALHACK Fall 2025
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#about-us"
                                    className="hover:text-white transition-colors"
                                >
                                    AI Workshops
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#about-us"
                                    className="hover:text-white transition-colors"
                                >
                                    Industry Panels
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm md:text-base lg:text-lg font-bold mb-6">Connect</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/tidal-tamu/"
                                target="_blank"
                                className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-[#336699] hover:to-[#706993] rounded-xl flex items-center justify-center transition-all duration-300 group"
                            >
                                <FaGithub className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/tidaltamu"
                                target="_blank"
                                className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-[#336699] hover:to-[#706993] rounded-xl flex items-center justify-center transition-all duration-300 group"
                            >
                                <FaLinkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a
                                href="https://www.instagram.com/tidaltamu/"
                                target="_blank"
                                className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-[#336699] hover:to-[#706993] rounded-xl flex items-center justify-center transition-all duration-300 group"
                            >
                                <FaInstagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a
                                href="https://discord.gg/eQ8ScamG4H"
                                target="_blank"
                                className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-[#336699] hover:to-[#706993] rounded-xl flex items-center justify-center transition-all duration-300 group"
                            >
                                <FaDiscord className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-xs md:text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} TIDAL - Texas A&M
                        University. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
