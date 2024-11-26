export interface OfficerItem {
    details: {
        name: string;
        major: string;
        desc: string;
        pfp: string;
        link: string;
    }
}

export default function OfficerList({details}: OfficerItem) {
    return (
        <div className="lg:flex lg:justify-center lg:w-4/5 gap-1 lg:gap-4">
            <img 
                src={details.pfp}
                className="w-[6rem] h-[6rem] md:w-[7rem] md:h-[7rem] lg:w-[9rem] lg:h-[9rem] rounded-full"
            />
            <div className="mb-5 mt-1">
                <div>
                    <h1
                        className="text-sm lg:text-xl font-bold text-nowrap"
                    >
                        {details.name}
                    </h1>
                    <p
                        className="text-sm lg:text-lg text-nowrap mb-2"
                    >
                        {details.major}
                    </p>
                    <p
                        className="text-xs lg:text-sm mb-2"
                    >
                        {details.desc}
                    </p>
                </div>
                <a href={details.link}>
                    <img src="/icons/logos/linkedin-logo.png" className="w-[28px]"/>
                </a>
                
            </div>
        </div>
    );
}
