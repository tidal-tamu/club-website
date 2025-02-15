interface NavbarProps {
    dark?: boolean;
}

export default function Footer({ dark = false }: NavbarProps) {
    return (
        <footer className={`w-full text-nowrap relative pt-44 lg:pt-64 bg-repeat-x bg-right-top transition-[padding] ${dark ? "bg-[url('/waves/wave-footer-beige.svg')]" : "bg-[url('/waves/wave-footer.svg')]"
            }`}>
            <img
                src={dark ? "./images/lander.png" : "./icons/shapes/red-star.svg"}
                className={`absolute right-0 top-0 ${dark ? "-rotate-12 -translate-x-3/4 -translate-y-1/4 w-[120px] lg:w-[220px] " : " w-[150px] lg:w-[250px] -translate-x-0 -translate-y-1/4"
                    }`}
            />
            <div className={`flex flex-col justify-center items-center gap-8 lg:gap-12 px-20 pb-16 ${dark ? "bg-hackBeige" : "bg-navy"
                } ${dark ? "text-black" : "text-white"
                }`}>
                <span className="text-4xl font-semibold"> FOLLOW US! </span>
                <div className="flex justify-center items-center gap-3 lg:gap-6">
                    <a
                        href="https://www.instagram.com/tidaltamu/"
                        target="_blank"
                        className="shrink-0"
                    >
                        <img
                            className="w-12 transition-transform transform hover:scale-125"
                            src={dark ? "/icons/logos/instagram-logo-black.svg" : "/icons/logos/instagram-logo.svg"}
                            alt="Instagram"
                        />
                    </a>
                    <a
                        href="https://discord.gg/eQ8ScamG4H"
                        target="_blank"
                        className="shrink-0"
                    >
                        <img
                            src={dark ? "/icons/logos/discord-logo-black.svg" : "/icons/logos/discord-logo-white.svg"}
                            className="w-12 transition-transform transform hover:scale-125"
                            alt="Discord"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/tidaltamu"
                        target="_blank"
                        className="shrink-0"
                    >
                        <img
                            className="w-12 transition-transform transform hover:scale-125"
                            src={dark ? "/icons/logos/linkedin-logo-black.svg" : "/icons/logos/linkedin-logo.svg"}
                            alt="LinkedIn"
                        />
                    </a>
                    <a
                        href="https://github.com/tidal-tamu/"
                        target="_blank"
                        className="shrink-0"
                    >
                        <img
                            className="w-12 transition-transform transform hover:scale-125"
                            src={dark ? "/icons/logos/github-logo-black.svg" : "/icons/logos/github-logo.svg"}
                            alt="GitHub"
                        />
                    </a>
                    <a
                        href="mailto:tidaltamu@gmail.com"
                        target="_blank"
                        className="shrink-0"
                    >
                        <img
                            className="w-12 transition-transform transform hover:scale-125"
                            src={dark ? "/icons/logos/email-logo-black.svg" : "/icons/logos/email-logo.svg"}
                            alt="Email"
                        />
                    </a>
                </div>
                <div className="flex flex-col gap-4 justify-center place-content-center items-center">
                    
                    <a
                        href="/"
                        className="flex justify-center items-center font-semibold text-lg gap-1 select-none"
                    >
                        @ 2025 TIDALTAMU
                    </a>
                    <a href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" className="absolute bottom-4">
                        <p className="underline text-gray-70000 text-sm">MLH code of conduct</p>
                    </a>
                </div>

            </div>
        </footer>
    );
}
