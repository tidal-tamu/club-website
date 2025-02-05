import { useEffect, useState } from "react";
import { Link } from 'react-scroll';


const navLinks = [
    { title: "About", path: "about" },
    { title: "Schedule", path: "schedule" },
    { title: "Prizes", path: "prizes" },
    { title: "FAQ", path: "faq" },
    { title: "Sponsors", path: "sponsors" },
];

interface NavbarProps {
    dark?: boolean;
}

export default function Navbar({dark = false}: NavbarProps) {
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

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    return (
        <nav className={`relative z-10 w-full font-mont font-semibold text-nowrap flex sm:flex-row flex-col lg:justify-between items-center p-6 pt-10 px-10 gap-6 xl:pl-32 sm:pr-44 lg:py-9 lg:gap-20 transition-[padding] ${
            hasScrolled || isOpen ? "border-b-2" : "bg-transparent sm:mt-12"
        } ${dark ? "bg-spaceBlack text-white border-gray-800" : "bg-white text-black"}`}
        >
            <div className="w-full flex flex-row justify-between">
                <a
                    className="mt-2 sm:mt-0 min-w-[169px] min-h-[26px] w-[169px] h-[26px] md:w-[175px] lg:w-[208px] lg:h-[32px]"
                    href="/home"
                >
                    <img src={dark ? "./icons/logos/tidal-white-transparent.png" : "./icons/logos/tidal-newblue.svg"} alt="Logo"/>
                </a>

                <button className={"translate-x-4 inline-flex items-center p-1.5 w-10 h-10 justify-center rounded-lg sm:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white-700 dark:focus:ring-gray-600"}
                onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    )}
                </button>
            </div>

            <div className={`sm:flex sm:visible sm:relative lg:w-auto sm:flex-row flex-col items-center gap-5 lg:text-[20px] text-nowrap lg:gap-12 ${
                isOpen ? "z-50 flex animate__animated animate__fadeIn h-screen sm:h-fit gap-[44px] text-2xl underline pt-20 max-h-screen transition-all duration-300 ease-in-out " : " invisible max-h-0 absolute"
            }`}
            style={{ maxHeight: isOpen ? '100vh' : '0' }}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.title}
                        to={link.path}
                        smooth={true}
                        duration={500}
                        onClick={() => setIsOpen(false)}
                        className={`relative cursor-pointer inline-block after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:ease-out after:duration-[250ms] hover:after:scale-x-100 hover:after:origin-bottom-left pb-[2px] ${
                            dark ? "after:bg-white" : "after:bg-black"
                        }`}
                    >
                        {link.title}
                    </Link>
                ))}

                <a
                    href="/register"
                    target="_blank"
                    className={`flex mt-10 justify-center items-center shrink-0 gap-3 font-bold text-white bg-hackRed px-3 py-2 md:px-6 md:py-2 md:text-xl rounded-lg border-[1px] border-[#ba5353] cursor-pointer hover:bg-[#9e3b3b] transition-all ${
                        isOpen ? "" : "hidden"
                    }`}
                >
                    Apply
                    <img
                            src="./icons/shapes/arrow.svg"
                            alt="->"
                            className="w-[24px] h-[20px] transition-all"
                        />
                </a>
            </div>
        </nav>
    );
}
