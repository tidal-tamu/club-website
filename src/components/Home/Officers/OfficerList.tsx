export interface OfficerItem {
    details: {
        name: string;
        position: string;
        major: string;
        desc: string;
        pfp: string;
        link: string;
        email: string;
    }
}

export default function OfficerList({ details }: OfficerItem) {
    return (
        <div id="officers" className="flex lg:justify-start lg:w-full gap-3 md:gap-4">
            <img
                src={details.pfp}
                className="w-[7rem] h-[7rem] md:w-[7rem] md:h-[7rem] lg:w-[9rem] lg:h-[9rem] rounded-full mt-6 sm:mt-2"
            />
            <div className="mb-5 mt-4 sm:mt-1 sm:ml-0">
                <div>
                    <h1 className="text-sm md:text-lg lg:text-xl font-bold text-wrap text-navy">
                        {details.name} <span className="font-semibold text-black">| {details.position}</span>
                    </h1>
                    <p className="text-sm md:text-lg lg:text-lg text-nowrap mb-2 italic">
                        {details.major}
                    </p>
                    <p className="text-xs md:text-sm lg:text-sm mb-2 sm:max-w-[90%]">
                        {details.desc}
                    </p>
                </div>
                <div className="flex gap-2">
                    <a href={details.link} target="none">
                        <img src="/icons/logos/linkedin-logo.png" className="w-[28px]" />
                    </a>
                    <a href={`mailto:${details.email}`} target="none">
                        <img src="/icons/logos/email-logo-navy.svg" alt="email" className="w-[30px]" />
                    </a>
                </div>


            </div>
        </div>
    );
}
