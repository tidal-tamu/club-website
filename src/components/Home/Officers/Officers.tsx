import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-white rounded-2xl shadow-lg border-0 ${className}`}>
        {children}
    </div>
);

const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`p-6 ${className}`}>
        {children}
    </div>
);

const organizeOfficers = (officersList: any[]) => {
    const coPresidents = officersList.filter(o => o.position.includes("Co-President"));
    const vicePresidents = officersList.filter(o => o.position.includes("Vice President"));
    const regularOfficers = officersList.filter(o => 
        !o.position.includes("President") && 
        !o.position.includes("Vice President")
    );
    
    return { coPresidents, vicePresidents, officers: regularOfficers };
};

const officers = [
    {
        name: "Roman Parker",
        position: "Co-President",
        major: "Computer Science '26",
        desc: "Roman is a Co-President of TIDAL and joined in the spring of 2023. Roman is pursuing a Master's in Quantitative Finance and is an incoming intern at UTIMCO.",
        pfp: "/images/officer-pictures/Roman.jpeg",
        link: "https://www.linkedin.com/in/roman-parker-76a474284/",
        instagram: "https://www.instagram.com/astroroman1/",
        email: "romanp@tamu.edu",
    },
    {
        name: "Ketan Verma",
        position: "Co-President",
        major: "Computer Engineering '26",
        desc: "Ketan is a Co-President of TIDAL and joined in the spring of 2023. Ketan is an incoming SWE intern at Samsung Semiconductor.",
        pfp: "/images/officer-pictures/ketan.png",
        link: "https://www.linkedin.com/in/ketan-verma12/",
        instagram: "https://www.instagram.com/kxtxan/",
        email: "ketanverma123@tamu.edu",
    },
    {
        name: "Abhay Patil",
        position: "Co-President",
        major: "Electrical Engineering '26",
        desc: "Abhay is a Co-President of TIDAL and joined in the spring of 2023. Abhay is an incoming intern at Texas Instruments and a previous intern at Trane Technologies.",
        pfp: "/images/officer-pictures/abhay.jpg",
        link: "https://www.linkedin.com/in/abhaypatiltamu/",
        instagram: "https://www.instagram.com/notabhaypatil/",
        email: "abhay.patil@tamu.edu",
    },
    {
        name: "Sarvesh Karunakaran",
        position: "Vice President",
        major: "Computer Engineering '26",
        desc: "Sarvesh is the Internal Vice President of TIDAL and joined in the spring of 2024. Sarvesh is a previous SWE intern at Lockheed Martin.",
        pfp: "/images/officer-pictures/sarvesh.png",
        link: "https://www.linkedin.com/in/sarveshkk/",
        instagram: "https://www.instagram.com/sarvesh.karan1/",
        email: "sarvesh.karunakaran@tamu.edu",
    },
    {
        name: "Zavier Vega-Yu",
        position: "Vice President",
        major: "Computer Science '27",
        desc: "Zavier is the External Vice President of TIDAL and joined in the fall of 2023. Zavier is an incoming SWE intern at Hewlett Packard Enterprise.",
        pfp: "/images/officer-pictures/zavier.png",
        link: "https://www.linkedin.com/in/zvegayu/",
        instagram: "https://www.instagram.com/zavayu/",
        email: "zavayu@tamu.edu",
    },
    {
        name: "Ahmed Idrees",
        position: "Outreach",
        major: "Computer Science '26",
        desc: "Ahmed is an outreach officer and joined in the spring of 2024. Ahmed is an incoming SWE intern at Capital One and was previously at Lockheed Martin.",
        pfp: "/images/officer-pictures/ahmed.jpg",
        link: "https://www.linkedin.com/in/ahmed-idrees",
        instagram: "https://www.instagram.com/ahahahahahahahmed/",
        email: "ahmedlol445@tamu.edu",
    },
    {
        name: "Matthew Shi",
        position: "Activities",
        major: "Computer Engineering '28",
        desc: "Matthew is the activities team lead and joined in the fall of 2024.",
        pfp: "/images/officer-pictures/matthew.jpg",
        link: "https://www.linkedin.com/in/matthew-shi-a2376b239/",
        instagram: "https://www.instagram.com/matthew.sih8/",
        email: "matthewtershi@tamu.edu",
    },
    {
        name: "Kyle Moore",
        position: "Workshops",
        major: "Computer Science '26",
        desc: "Kyle is the workshops team lead and joined in the spring of 2024.",
        pfp: "/images/officer-pictures/kyle.jpg",
        link: "https://www.linkedin.com",
        email: "kyle.moore@tamu.edu",
    },
    {
        name: "Aurora Jiang",
        position: "Marketing",
        major: "Biomedical Engineering '26",
        desc: "Aurora is the marketing team lead and joined in the fall of 2024.",
        pfp: "/images/officer-pictures/aurora.jpg",
        link: "https://www.linkedin.com/in/aurorajiang/",
        instagram: "",
        email: "yingtongjiang@tamu.edu",
    },
    {
        name: "Renee Gunukula",
        position: "Workshops",
        major: "Computer Science '27",
        desc: "Renee is a workshops officer and joined in the fall of 2023.",
        pfp: "/images/officer-pictures/renee.jpg",
        link: "https://www.linkedin.com/in/renee-gunukula-b334a8298/",
        instagram: "https://www.instagram.com/renee0678/",
        email: "rengun@tamu.edu",
    },
    {
        name: "Dylan Hoang",
        position: "Outreach",
        major: "Computer Science '26",
        desc: "Dylan is an outreach officer and joined in the fall of 2024.",
        pfp: "/images/officer-pictures/dylan.jpg",
        link: "https://www.linkedin.com/in/dylan-hoang-4b5338212/",
        instagram: "https://www.instagram.com/dhoang_03/",
        email: "dylan_hoang@tamu.edu",
    },
    {
        name: "Bradley James",
        position: "Workshops",
        major: "Computer Science '26",
        desc: "Bradley is a workshops officer and joined in the spring of 2025.",
        pfp: "/images/officer-pictures/bradley.png",
        link: "https://www.linkedin.com/in/",
        instagram: "https://www.instagram.com/bradley_dadley27/",
        email: "bj2772798@tamu.edu",
    },
    {
        name: "David Zhang",
        position: "Outreach",
        major: "Computer Science '27",
        desc: "David is an outreach officer and joined in the spring of 2025.",
        pfp: "/images/officer-pictures/david2.png",
        link: "https://www.linkedin.com/in/",
        instagram: "https://www.instagram.com/highonjuice_/",
        email: "zhangdavid275@tamu.edu",
    },
    {
        name: "Pratha Gupta",
        position: "Marketing",
        major: "Computer Science '27",
        desc: "Pratha is a marketing officer and joined in the spring of 2025.",
        pfp: "/images/officer-pictures/pratha.png",
        link: "https://www.linkedin.com/in/",
        instagram: "https://www.instagram.com/pratz_89/",
        email: "pratha05@tamu.edu",
    },
    {
        name: "Harshit Saini",
        position: "Marketing",
        major: "Computer Science '28",
        desc: "Harshit is a marketing officer and joined in the spring of 2025.",
        pfp: "/images/officer-pictures/harshit.jpg",
        link: "https://www.linkedin.com/in/",
        instagram: "https://www.instagram.com/harsh_sheet/",
        email: "harshitsaini@tamu.edu",
    },
    {
        name: "Harshitha Sudhakar",
        position: "Finance",
        major: "Computer Science '28",
        desc: "Harshitha is a finance officer and joined in the spring of 2025.",
        pfp: "/images/officer-pictures/harshitha.png",
        link: "https://www.linkedin.com/in/",
        instagram: "",
        email: "harshithasudhakar@tamu.edu",
    },
];

export default function Officers() {
    const { coPresidents, vicePresidents, officers: regularOfficers } = organizeOfficers(officers);

    return (
        <div className="pt-20 lg:pt-32 bg-repeat-x bg-right-top transition-[padding]">
            <div className="w-full bg-lightBlue font-mont overflow-x-clip">
                <section id="officers" className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12 sm:mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6">Our Team</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                                Meet the dedicated leaders driving TIDAL's mission forward.
                            </p>
                        </motion.div>

                        <div className="mb-16 sm:mb-20">
                            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Co-Presidents</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                                {coPresidents.map((officer, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
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
                                                <h4 className="text-2xl font-bold text-gray-900 mb-2">{officer.name}</h4>
                                                <p className="text-[#336699] font-semibold text-lg mb-6">{officer.position}</p>
                                                <div className="flex justify-center space-x-3">
                                                    <a
                                                        href={officer.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-12 h-12 bg-[#336699]/10 hover:bg-[#336699] text-[#336699] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group"
                                                    >
                                                        <FaLinkedin className="w-5 h-5" />
                                                    </a>
                                                    {officer.instagram && (
                                                        <a
                                                            href={officer.instagram}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-12 h-12 bg-[#706993]/10 hover:bg-[#706993] text-[#706993] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group"
                                                        >
                                                            <FaInstagram className="w-5 h-5" />
                                                        </a>
                                                    )}
                                                    <a
                                                        href={`mailto:${officer.email}`}
                                                        className="w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 group"
                                                    >
                                                        <FaEnvelope className="w-5 h-5" />
                                                    </a>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-20">
                            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Vice Presidents</h3>
                            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {vicePresidents.map((officer, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
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
                                                <h4 className="text-2xl font-bold text-gray-900 mb-2">{officer.name}</h4>
                                                <p className="text-[#336699] font-semibold text-lg mb-6">{officer.position}</p>
                                                <div className="flex justify-center space-x-3">
                                                    <a
                                                        href={officer.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-12 h-12 bg-[#336699]/10 hover:bg-[#336699] text-[#336699] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group"
                                                    >
                                                        <FaLinkedin className="w-5 h-5" />
                                                    </a>
                                                    {officer.instagram && (
                                                        <a
                                                            href={officer.instagram}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-12 h-12 bg-[#706993]/10 hover:bg-[#706993] text-[#706993] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group"
                                                        >
                                                            <FaInstagram className="w-5 h-5" />
                                                        </a>
                                                    )}
                                                    <a
                                                        href={`mailto:${officer.email}`}
                                                        className="w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 group"
                                                    >
                                                        <FaEnvelope className="w-5 h-5" />
                                                    </a>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Officers</h3>
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {regularOfficers.map((officer, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
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
                                                <h4 className="text-sm font-bold text-gray-900 mb-1">{officer.name}</h4>
                                                <p className="text-[#336699] text-xs font-medium mb-3">{officer.position}</p>
                                                <div className="flex justify-center space-x-1">
                                                    <a
                                                        href={officer.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-6 h-6 bg-[#336699]/10 hover:bg-[#336699] text-[#336699] hover:text-white rounded flex items-center justify-center transition-all duration-300"
                                                    >
                                                        <FaLinkedin className="w-3 h-3" />
                                                    </a>
                                                    {officer.instagram && (
                                                        <a
                                                            href={officer.instagram}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-6 h-6 bg-[#706993]/10 hover:bg-[#706993] text-[#706993] hover:text-white rounded flex items-center justify-center transition-all duration-300"
                                                        >
                                                            <FaInstagram className="w-3 h-3" />
                                                        </a>
                                                    )}
                                                    <a
                                                        href={`mailto:${officer.email}`}
                                                        className="w-6 h-6 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded flex items-center justify-center transition-all duration-300"
                                                    >
                                                        <FaEnvelope className="w-3 h-3" />
                                                    </a>
                                                </div>
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