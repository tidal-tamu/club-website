const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/#about-us" },
    { title: "Hackathon", path: "/hackathon" },
    { title: "Sponsor Us", path: "/sponsor-us" },
];

export default function Navbar() {
    return (
        <nav className="min-w-[320px] absolute top-0 left-0 w-full font-mont font-semibold text-nowrap flex flex-col md:flex-row md:justify-between items-center p-6 gap-6 md:px-32 md:py-28 md:gap-20">
            <a
                className="min-w-[208px] min-h-[32px] w-[208px] h-[32px]"
                href="/"
            >
                <img src="tidal-transparent.png" alt="Logo" />
            </a>
            <div className="w-full md:w-auto flex justify-between items-center gap-4 md:gap-12 text-sm md:text-[20px]">
                {navLinks.map((link) => (
                    <a
                        key={link.title}
                        href={link.path}
                        className="relative inline-block after:absolute after:w-full after:scale-x-0 after:bg-black after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:ease-out after:duration-[250ms] hover:after:scale-x-100 hover:after:origin-bottom-left"
                    >
                        {link.title}
                    </a>
                ))}
            </div>
        </nav>
    );
}
