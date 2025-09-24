import { FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";

interface FooterProps {
    variant?: 'home' | 'hackathon-spring-25' | 'hackathon-fall-25';
}

export default function Footer({ variant = 'home' }: FooterProps) {
    const isHackathon = variant.includes('hackathon');
    const isSpring25 = variant === 'hackathon-spring-25';
    // const isFall25 = variant === 'hackathon-fall-25';

    return (
        <footer className={`${isSpring25 ? 'bg-gray' : 'bg-gray-900'} text-white py-16`}>
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <img 
                                src={isSpring25 ? "./icons/logos/tidal-white-transparent.png" : isHackathon ? "./icons/logos/tidal-transparent.png" : "./icons/logos/tidal-white-transparent.png"} 
                                alt="TIDAL Logo" 
                                className="h-8 w-auto"
                            />
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Empowering Aggies with AI/ML skills through hands-on learning and community engagement.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <a href="#about-us" className="hover:text-white transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/hackathon" className="hover:text-white transition-colors">
                                    Events
                                </a>
                            </li>
                            <li>
                                <a href="#officers" className="hover:text-white transition-colors">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="#sponsors" className="hover:text-white transition-colors">
                                    Sponsors
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Events</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <a href="/events/tidalhack-fall-2025" className="hover:text-white transition-colors">
                                    TIDALHACK Fall 2025
                                </a>
                            </li>
                            <li>
                                <a href="/events/ai-workshop-series" className="hover:text-white transition-colors">
                                    AI Workshops
                                </a>
                            </li>
                            <li>
                                <a href="/events/industry-panel" className="hover:text-white transition-colors">
                                    Industry Panels
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Connect</h4>
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
                                <FaExternalLinkAlt className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} TIDAL - Texas A&M University. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}