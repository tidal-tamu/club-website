const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/#about-us" },
    { title: "Hackathon", path: "/hackathon" },
    { title: "Sponsor Us", path: "/sponsor-us" },
];

export default function Navbar() {
    return (
        <nav className="bg-transparent w-full font-mont font-semibold text-nowrap flex flex-col lg:flex-row lg:justify-between items-center p-6 gap-6 lg:px-32 lg:pt-24 lg:gap-20 transition-[padding] delay-1000">
            <a
                className="min-w-[208px] min-h-[32px] w-[208px] h-[32px]"
                href="/"
            >
                <img src="./icons/logos/tidal-transparent.png" alt="Logo" />
            </a>
            <div className="w-full lg:w-auto flex justify-between items-center gap-4 lg:gap-12 text-sm lg:text-[20px]">
                {navLinks.map((link) => (
                    <a
                        key={link.title}
                        href={link.path}
                        className="relative inline-block after:absolute after:w-full after:scale-x-0 after:bg-black after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:ease-out after:duration-[250ms] hover:after:scale-x-100 hover:after:origin-bottom-left pb-[2px]"
                    >
                        {link.title}
                    </a>
                ))}
            </div>
        </nav>
    );
}
