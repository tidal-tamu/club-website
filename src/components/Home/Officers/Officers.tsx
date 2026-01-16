import { motion } from "framer-motion";

const Card = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <div className={`bg-white rounded-2xl shadow-lg border-0 ${className}`}>
        {children}
    </div>
);

const CardContent = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => <div className={`p-6 ${className}`}>{children}</div>;

const organizeOfficers = (officersList: any[]) => {
    const coPresidents = officersList.filter((o) =>
        o.position.includes("Co-President")
    );
    const vicePresidents = officersList.filter((o) =>
        o.position.includes("Vice President")
    );
    const regularOfficers = officersList.filter(
        (o) =>
            !o.position.includes("President") &&
            !o.position.includes("Vice President")
    );

    // sort officers alphabetically except for team leads
    const specialOfficers = ["Ahmed Idrees", "Matthew Shi", "Harshit Saini", "Harshitha Sudhakar"];
    const special = specialOfficers
        .map(name => regularOfficers.find(o => o.name === name))
        .filter(o => o !== undefined);
    const others = regularOfficers.filter((o) => !specialOfficers.includes(o.name));
    others.sort((a, b) => a.name.localeCompare(b.name));
    const sortedRegularOfficers = [...special, ...others];

    return { coPresidents, vicePresidents, officers: sortedRegularOfficers };
};

const officers = [
    {
        name: "Roman Parker",
        position: "Co-President",
        major: "Computer Science '26",
        desc: "Roman is a Co-President of TIDAL and joined in the spring of 2023. Roman is pursuing a Master's in Quantitative Finance and is an incoming intern at UTIMCO.",
        pfp: "/images/officer-pictures/Roman.jpeg",
    },
    {
        name: "Ketan Verma",
        position: "Co-President",
        major: "Computer Engineering '26",
        desc: "Ketan is a Co-President of TIDAL and joined in the spring of 2023. Ketan is an incoming SWE intern at Samsung Semiconductor.",
        pfp: "/images/officer-pictures/ketan.png",
    },
    {
        name: "Abhay Patil",
        position: "Co-President",
        major: "Electrical Engineering '26",
        desc: "Abhay is a Co-President of TIDAL and joined in the spring of 2023. Abhay is an incoming intern at Texas Instruments and a previous intern at Trane Technologies.",
        pfp: "/images/officer-pictures/abhay.jpg",
    },
    {
        name: "Sarvesh Karunakaran",
        position: "Vice President",
        major: "Computer Engineering '26",
        desc: "Sarvesh is the Internal Vice President of TIDAL and joined in the spring of 2024. Sarvesh is a previous SWE intern at Lockheed Martin.",
        pfp: "/images/officer-pictures/sarvesh.png",
    },
    {
        name: "Zavier Vega-Yu",
        position: "Vice President",
        major: "Computer Science '27",
        desc: "Zavier is the External Vice President of TIDAL and joined in the fall of 2023. Zavier is an incoming SWE intern at Hewlett Packard Enterprise.",
        pfp: "/images/officer-pictures/zavier.png",
        link: "https://www.linkedin.com/in/zvegayu/",
        instagram: "https://www.instagram.com/zavayu/",
    },
    {
        name: "Ahmed Idrees",
        position: "Operations",
        major: "Computer Science '26",
        desc: "Ahmed is an outreach officer and joined in the spring of 2024. Ahmed is an incoming SWE intern at Capital One and was previously at Lockheed Martin.",
        pfp: "/images/officer-pictures/ahmed.jpg",
    },
    {
        name: "Matthew Shi",
        position: "Activities",
        major: "Computer Engineering '28",
        desc: "Matthew is the activities team lead and joined in the fall of 2024.",
        pfp: "/images/officer-pictures/matthew.jpg",
    },
    {
        name: "Isaac Chacko",
        position: "Activities",
        major: "",
        desc: "",
        pfp: "/images/officer-pictures/isaac.jpg",
    },
    {
        name: "Bradley James",
        position: "Workshops",
        major: "Computer Science '26",
        desc: "Bradley is a workshops officer and joined in the spring of 2025.",
        pfp: "/images/officer-pictures/bradley.png",
    },
    {
        name: "Harshit Saini",
        position: "Marketing",
        major: "Computer Science '28",
        desc: "Harshit is a marketing officer and joined in the spring of 2025.",
        pfp: "/images/officer-pictures/harshit.jpg",
    },
    {
        name: "Harshitha Sudhakar",
        position: "Finance",
        major: "Computer Science '28",
        desc: "Harshitha is a finance officer and joined in the spring of 2025.",
        pfp: "/images/officer-pictures/harshitha.png",
    },
    {
        name: "Tiffany Yin",
        position: "Marketing",
        major: "Marketing '27",
        desc: "",
        pfp: "/images/officer-pictures/tiffany yin.png",
    },
    {
        name: "Sid Reddy",
        position: "Activities",
        major: "Computer Engineering '28",
        desc: "",
        pfp:"/images/officer-pictures/sid.png",
    },
    {
        name: "Shruthika",
        position:" Marketing",
        major: "Statistics '28",
        desc:"",
        pfp:"/images/officer-pictures/shruthika.png",
    },
    {
        name: "Nicholas Botello",
        position: "Workshops",
        major: "Computer Science '29",
        desc: "",
        pfp: "/images/officer-pictures/nico.jpg",
    },
    {
        name: "Vyom Dwivedi",
        position: "Workshops",
        major: "Statistics '29",
        desc: "",
        pfp: "/images/officer-pictures/vyom.jpeg",
    }
];

export default function Officers() {
    const {
        coPresidents,
        vicePresidents,
        officers: regularOfficers,
    } = organizeOfficers(officers);

    return (
        <div className="pt-20 lg:pt-32 bg-repeat-x bg-right-top transition-[padding]">
            <div className="w-full bg-lightBlue font-mont overflow-x-clip">
                <section
                    id="officers"
                    className="py-16 sm:py-20 lg:py-24 bg-white"
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12 sm:mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
                                Our Team
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Meet the dedicated leaders driving TIDAL's
                                mission forward.
                            </p>
                        </motion.div>

                        <div className="mb-16 sm:mb-20">
                            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
                                Co-Presidents
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                                {coPresidents.map((officer, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                                            <CardContent className="pt-8 pb-8">
                                                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-[#336699] to-[#706993] rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center p-1">
                                                    <img
                                                        src={officer.pfp}
                                                        alt={officer.name}
                                                        className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl object-cover"
                                                    />
                                                </div>
                                                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                                                    {officer.name}
                                                </h4>
                                                <p className="text-[#336699] font-semibold text-lg">
                                                    {officer.position}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-20">
                            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                                Vice Presidents
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {vicePresidents.map((officer, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                                            <CardContent className="pt-8 pb-8">
                                                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-[#336699] to-[#706993] rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center p-1">
                                                    <img
                                                        src={officer.pfp}
                                                        alt={officer.name}
                                                        className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl object-cover"
                                                    />
                                                </div>
                                                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                                                    {officer.name}
                                                </h4>
                                                <p className="text-[#336699] font-semibold text-lg">
                                                    {officer.position}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                                Officers
                            </h3>
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {regularOfficers.map((officer, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.05,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-sm group hover:-translate-y-1">
                                            <CardContent className="pt-4 pb-4">
                                                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-[#336699] to-[#706993] rounded-xl mx-auto mb-3 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center p-0.5">
                                                    <img
                                                        src={officer.pfp}
                                                        alt={officer.name}
                                                        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-lg object-cover"
                                                    />
                                                </div>
                                                <h4 className="text-sm font-bold text-gray-900 mb-1">
                                                    {officer.name}
                                                </h4>
                                                <p className="text-[#336699] text-xs font-medium">
                                                    {officer.position}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
