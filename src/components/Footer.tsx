export default function Footer() {
    return (
        <footer className="text-white text-nowrap pt-64 bg-[url('./waves/wave-footer.svg')] bg-repeat-x bg-right-top">
            <div className="bg-navy flex flex-col justify-center items-center gap-12 px-20 pb-16">
                <div className="flex justify-center items-center gap-6">
                    <a
                        href="https://www.instagram.com/tidaltamu/"
                        target="_blank"
                        className="shrink-0"
                    >
                        <img
                            className="w-16"
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
                            className="w-16"
                            alt="Discord"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/tidaltamu"
                        target="_blank"
                        className="shrink-0"
                    >
                        <img
                            className="w-16"
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
                            className="w-16"
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
                            className="w-16"
                            src="./icons/logos/email-logo.svg"
                            alt="Email"
                        />
                    </a>
                </div>
                <p className="flex justify-center items-center font-semibold text-lg">
                    <img src="./icons/logos/tidal-fin-logo.svg" alt="TIDAL" />
                    tidalTAMU
                </p>
            </div>
        </footer>
    );
}
