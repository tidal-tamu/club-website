import Marquee from "react-fast-marquee";

interface Sponsor {
    href: string;
    imgSrc: string;
    alt: string;
    widthClasses: string;
}

const sponsors: Sponsor[] = [
    {
        href: "https://www.phillips66.com/",
        imgSrc: "./icons/logos/companies/phillips66-logo.png",
        alt: "Phillips 66 Logo",
        widthClasses: "w-[150px] lg:w-[220px]",
    },
    {
        href: "https://aws.amazon.com/",
        imgSrc: "./icons/logos/companies/aws-logo-black.png",
        alt: "AWS Logo",
        widthClasses: "w-[150px] lg:w-[250px]",
    },
    {
        href: "https://www.microsoft.com/",
        imgSrc: "./icons/logos/companies/microsoft-gray.png",
        alt: "Microsoft Logo",
        widthClasses: "w-[250px] lg:w-[400px]",
    },
    {
        href: "https://about.google/",
        imgSrc: "./icons/logos/companies/google-color.png",
        alt: "Google Logo",
        widthClasses: "w-[250px] lg:w-[400px]",
    },
    {
        href: "https://www.janestreet.com/",
        imgSrc: "./icons/logos/companies/jane-street.png",
        alt: "JaneStreet Logo",
        widthClasses: "w-[250px] lg:w-[400px]",
    },
    {
        href: "https://www.wolfram.com/",
        imgSrc: "./icons/logos/companies/wolfram-logo.png",
        alt: "Wolfram Logo",
        widthClasses: "w-[250px] lg:w-[400px]",
    },
    {
        href: "https://tamids.tamu.edu/",
        imgSrc: "./icons/logos/companies/tamids-logo-red.png",
        alt: "TAMIDS Logo",
        widthClasses: "w-[250px] lg:w-[400px]",
    },
    {
        href: "https://parivedasolutions.com/",
        imgSrc: "./icons/logos/companies/pariveda-logo.png",
        alt: "Pariveda Solutions Logo",
        widthClasses: "w-[250px] lg:w-[400px]",
    },
    {
        href: "https://www.conocophillips.com/",
        imgSrc: "./icons/logos/companies/conocophillips-logo.png",
        alt: "ConocoPhillips Logo",
        widthClasses: "w-[250px] lg:w-[400px]",
    },
    {
        href: "https://www.chevron.com/",
        imgSrc: "./icons/logos/companies/chevron-logo.png",
        alt: "Chevron Logo",
        widthClasses: "w-[250px] lg:w-[350px]",
    },
    {
        href: "https://www.janestreet.com/",
        imgSrc: "./icons/logos/companies/pnnl.png",
        alt: "PNNL Logo",
        widthClasses: "w-[250px] lg:w-[400px]",
    },
];

export default function PastSponsors() {
    return (
        <div className="pt-44 lg:pt-64 bg-[url('/waves/wave-1.svg')] bg-repeat-x bg-right-top transition-[padding]">
            <div className="bg-lightBlue pb-32">
                <h1
                    className="text-navy text-4xl lg:text-6xl font-bold text-center text-nowrap mb-10"
                    id="past-sponsors"
                >
                    PAST SPONSORS
                </h1>
                <div className="relative flex justify-center items-center rounded-3xl pt-14">

                    <Marquee className="">
                        {sponsors.map((sponsor, index) => (
                            <a
                                key={index}
                                href={sponsor.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0"
                            >
                                <img
                                    src={sponsor.imgSrc}
                                    alt={sponsor.alt}
                                    className={`${sponsor.widthClasses} transition-transform transform hover:scale-110 px-5 sm:px-10`}
                                />
                            </a>
                        ))}
                    </Marquee>

                </div>
            </div>
        </div>
    );
}