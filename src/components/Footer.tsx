interface NavbarProps {
    dark?: boolean;
}

export default function Footer({ dark = false }: NavbarProps) {
    return (
        <footer className={`w-full text-nowrap relative pt-44 lg:pt-64 bg-repeat-x bg-right-top transition-[padding] ${dark ? "bg-[url('/waves/wave-footer-beige.svg')]" : "bg-[url('/waves/wave-footer.svg')]"
            }`}> 
            <img
                src={dark ? "./images/lander.png" : "./icons/shapes/red-star.svg"}
                className={`absolute right-0 top-0 ${dark ? "-rotate-12 -translate-x-3/4 -translate-y-1/4 w-[120px] lg:w-[220px] " : " w-[150px] lg:w-[250px] -translate-x-0 -translate-y-1/4"}`}
            />
            <div className={`mx-auto px-[10vw] pb-28 lg:px-[16vw] grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 ${dark ? "bg-hackBeige" : "bg-navy"
                } ${dark ? "text-black" : "text-white"
                }`}>
                <div className="flex flex-col items-start">
                    <img src={dark ? "./icons/logos/tidal-transparent.png" : "./icons/logos/tidal-white-transparent.png"} alt="TIDAL TAMU Logo" className="w-36" />
                    <br />
                    <p className="mt-2 font-bold text-xl">TIDALTAMU</p>
                    <p className="text-xs lg:text-sm xl:text-base">The AI Wave Starts Here</p>
                </div>
                
                <div>
                <h3 className="font-semibold text-xl">Sponsor Us</h3>
                <br />
                <button
                    onClick={() => {
                        navigator.clipboard.writeText("tidaltamu@gmail.com");
                        alert("Email copied to clipboard!");
                    }}
                    className="text-sm lg:text-base hover:underline cursor-pointer"
                >
                tidaltamu@gmail.com
                </button>
                </div>
                
                <div>
                    <h3 className="font-semibold text-xl">Quick Links</h3>
                    <br />
                    <ul className="text-lg space-y-2">
                        <li><a href="/home/#about-us" className="hover:underline">About</a></li>
                        <li><a href="/home" className="hover:underline">Events</a></li>
                        <li><a href="/home/#officers" className="hover:underline">Team</a></li>
                    </ul>
                </div>
                
                <div className="flex flex-col items-start">
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/tidaltamu/" target="_blank">
                            <img 
                                className="w-8 hover:scale-110 transition-all" 
                                src={dark ? "/icons/logos/instagram-logo-black.svg" : "/icons/logos/instagram-logo.svg"} 
                                alt="Instagram" 
                            />
                        </a>
                        <a href="https://discord.gg/eQ8ScamG4H" target="_blank">
                            <img 
                                className="w-8 hover:scale-110 transition-all" 
                                src={dark ? "/icons/logos/discord-logo-black.svg" : "/icons/logos/discord-logo-white.svg"} 
                                alt="Discord" 
                            />
                        </a>
                        <a href="https://www.linkedin.com/company/tidaltamu" target="_blank">
                            <img 
                                className="w-8 hover:scale-110 transition-all" 
                                src={dark ? "/icons/logos/linkedin-logo-black.svg" : "/icons/logos/linkedin-logo.svg"} 
                                alt="LinkedIn" 
                            />
                        </a>
                        <a href="https://github.com/tidal-tamu/" target="_blank">
                            <img 
                                className="w-8 hover:scale-110 transition-all" 
                                src={dark ? "/icons/logos/github-logo-black.svg" : "/icons/logos/github-logo.svg"} 
                                alt="GitHub" 
                            />
                        </a>
                        <a href="mailto:tidaltamu@gmail.com" target="_blank">
                            <img 
                                className="w-8 hover:scale-110 transition-all" 
                                src={dark ? "/icons/logos/email-logo-black.svg" : "/icons/logos/email-logo.svg"} 
                                alt="Email" 
                            />
                        </a>
                    </div>
                    <p className="mt-4 text-sm">© 2025 TIDALTAMU</p>
                    <a href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" className="underline text-sm mt-1">MLH Code of Conduct</a>
                </div>
            </div>
        </footer>
    );
}
