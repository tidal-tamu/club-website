import { useEffect, useState } from "react";

const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/#about-us" },
    { title: "Hackathon", path: "/hackathon" },
    { title: "Sponsor Us", path: "/sponsor-us" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setHasScrolled(window.scrollY > 140); // Draw a border on navbar if the user has scrolled
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <nav className={`relative z-10 bg-white w-full font-mont font-semibold text-nowrap flex sm:flex-row flex-col lg:justify-between items-center p-6 pt-10 px-10 gap-6 lg:px-32 lg:py-9 lg:gap-20 transition-[padding]} ${
            hasScrolled || isOpen ? "border-b-2" : ""
        }`}
        >
            <div className="w-full flex flex-row justify-between gap-6 ">
                <a
                    className="mt-2 sm:mt-0 min-w-[169px] min-h-[26px] w-[169px] h-[26px] lg:w-[208px] lg:h-[32px]"
                    href="/"
                >
                    <img src="./icons/logos/tidal-blueblack.png" alt="Logo" />
                </a>

                <button className={"inline-flex items-center p-1.5 w-10 h-10 justify-center rounded-lg sm:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white-700 dark:focus:ring-gray-600"}
                onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                    
                </button>
            </div>

            <div className={`sm:flex lg:w-auto sm:flex-row flex-col items-center gap-5 lg:gap-12 text-md lg:text-[20px] ${
                isOpen ? "bg-white z-50 flex" : "hidden"
            }`}
            >
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
