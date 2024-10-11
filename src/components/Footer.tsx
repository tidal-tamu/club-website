export default function Footer() {
    return (
        <footer className="w-full text-white text-nowrap pt-44 lg:pt-64 bg-[url('/waves/wave-footer.svg')] bg-repeat-x bg-right-top transition-[padding]">
            <div className="bg-navy flex flex-col justify-center items-center gap-8 lg:gap-12 px-20 pb-16">
                <span className="text-4xl font-semibold"> FOLLOW US! </span>
                <div className="flex justify-center items-center gap-3 lg:gap-6">
                    <a
                        href="https://www.instagram.com/tidaltamu/"
                        target="_blank"
                        className="shrink-0"
                    >
                        <img
                            className="w-12 transition-transform transform hover:scale-125"
                            src="./icons/logos/instagram-logo.svg"
                            alt="Instagram"
                        />
                    </a>
                    <a
                        href="https://discord.gg/eQ8ScamG4H"
                        target="_blank"
                        className="shrink-0"
                    >
                        <img
                            src="./icons/logos/discord-logo-white.svg"
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
                            src="./icons/logos/linkedin-logo.svg"
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
                            src="./icons/logos/github-logo.svg"
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
                            src="./icons/logos/email-logo.svg"
                            alt="Email"
                        />
                    </a>
                </div>
                <a
                    href="/"
                    className="flex justify-center items-center font-semibold text-lg gap-1 select-none"
                >
                    <img src="./icons/logos/tidal-fin-logo-white.svg" />
                    @ 2024 TIDALTAMU
                </a>
            </div>
        </footer>
    );
}
