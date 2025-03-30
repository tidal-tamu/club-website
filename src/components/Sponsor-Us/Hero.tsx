import { Link } from "react-scroll"

export default function Hero() {
    return (
        <div className="justify-center items-center">
            <h1 className="text-navy font-bold text-2xl lg:text-6xl text-center pt-10 md:pt-40">
                Thank you for your interest <br /> in sponsoring TIDAL
            </h1>
            <p className="text-navy text-md text-center lg:text-2xl 2xl:text-3xl mt-10">
                For our sponsorship package and full details,<br /> please email us at tidaltamu@gmail.com
            </p>
            <div className="flex justify-center items-center gap-5 mt-10">
                <a
                    href="mailto:tidaltamu@gmail.com"
                    target="_blank"
                    className="flex justify-center items-center shrink-0 gap-3 font-bold text-navy bg-[#EDEAE6] px-3 py-1 md:px-6 md:py-2 md:text-xl rounded-lg border-[1px] border-[#C9C9C9] cursor-pointer hover:bg-[#C9C9C9] transition-all"
                >
                    Email
                    <img
                        src="./icons/logos/email-n-logo.svg"
                        alt="Discord Logo"
                        className="w-[24px] h-[18px] md:w-[28px] md:h-[21px] transition-all"
                    />
                </a>
                <Link
                    to="past-sponsors"
                    smooth={true}
                    duration={500}
                    className="flex justify-center items-center shrink-0 gap-3 font-bold text-white bg-navy px-3 py-1 md:px-6 md:py-2 md:text-xl rounded-lg border-[1px] cursor-pointer border-[#0094D3] hover:bg-[#0094D3] transition-all"
                >
                    Past Sponsors
                    <img
                        src="./icons/shapes/arrow.svg"
                        alt="->"
                        className="w-[24px] h-[20px] transition-all"
                    />
                </Link>
            </div>

        </div>
    )
};