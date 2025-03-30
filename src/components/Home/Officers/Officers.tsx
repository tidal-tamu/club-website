import OfficerList from "./OfficerList";

const officers = [
    {
        name: "Roman Parker",
        position: "Co-President",
        major: "Computer Science '26",
        desc: "Roman is a Co-President of TIDAL and joined in the spring of 2023. Roman is pursuing a Master's in Quantitative Finance and is an incoming intern at UTIMCO.",
        pfp: "/images/officer-pictures/roman.jpg",
        link: "https://www.linkedin.com/in/roman-parker-76a474284/",
        email: "romanp@tamu.edu",
    },
    {
        name: "Ketan Verma",
        position: "Co-President",
        major: "Computer Engineering '26",
        desc: "Ketan is a Co-President of TIDAL and joined in the spring of 2023. Ketan is an incoming SWE intern at Samsung Semiconductor.",
        pfp: "/images/officer-pictures/ketan.jpg",
        link: "https://www.linkedin.com/in/ketan-verma12/",
        email: "ketanverma123@tamu.edu",
    },
    {
        name: "Abhay Patil",
        position: "Co-President",
        major: "Electrical Engineering '26",
        desc: "Abhay is a Co-President of TIDAL and joined in the spring of 2023. Abhay is an incoming intern at Texas Instruments and a previous intern at Trane Technologies.",
        pfp: "/images/officer-pictures/abhay.jpg",
        link: "https://www.linkedin.com/in/abhaypatiltamu/",
        email: "abhay.patil@tamu.edu",
    },
    {
        name: "Sarvesh Karunakaran",
        position: "Vice President",
        major: "Computer Engineering '26",
        desc: "Sarvesh is the Internal Vice President of TIDAL and joined in the spring of 2024. Sarvesh is a previous SWE intern at Lockheed Martin.",
        pfp: "/images/officer-pictures/sarvesh.png",
        link: "https://www.linkedin.com/in/sarveshkk/",
        email: "sarvesh.karunakaran@tamu.edu",
    },
    {
        name: "Zavier Vega-Yu",
        position: "Vice President",
        major: "Computer Science '27",
        desc: "Zavier is the External Vice President of TIDAL and joined in the fall of 2023. Zavier is an incoming SWE intern at Hewlett Packard Enterprise.",
        pfp: "/images/officer-pictures/zavier.JPG",
        link: "https://www.linkedin.com/in/zvegayu/",
        email: "zavayu@tamu.edu",
    },
    {
        name: "Ahmed Idrees",
        position: "Outreach",
        major: "Computer Science '26",
        desc: "Ahmed is an outreach officer and joined in the spring of 2024. Ahmed is an incoming SWE intern at Capital One and was previously at Lockheed Martin.",
        pfp: "/images/officer-pictures/ahmed.jpg",
        link: "https://www.linkedin.com/in/ahmed-idrees",
        email: "ahmedlol445@tamu.edu",
    },
    {
        name: "Aryan Bhakta",
        position: "Finance",
        major: "MIS '26",
        desc: "Aryan is the head of finance and joined in the fall of 2023.",
        pfp: "/images/officer-pictures/aryanb.jpg",
        link: "https://www.linkedin.com/in/aryan-bhakta-bb8839276/",
        email: "great04@tamu.edu",
    },
    {
        name: "Matthew Shi",
        position: "Activities",
        major: "General Engineering '28",
        desc: "Matthew is the activities team lead and joined in the fall of 2024.",
        pfp: "/images/officer-pictures/matthew.jpg",
        link: "https://www.linkedin.com/in/matthew-shi-a2376b239/",
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
        email: "yingtongjiang@tamu.edu",
    },
    {
        name: "Advaith Prabu",
        position: "Activities",
        major: "Industrial Engineering '26",
        desc: "Advaith is an activities officer and joined in the spring of 2024.",
        pfp: "/images/officer-pictures/advaith.jpg",
        link: "https://www.linkedin.com/in/advaithprabu/",
        email: "advite@tamu.edu",
    },
    {
        name: "Lakshya Vannala",
        position: "Workshops",
        major: "Neuroscience '27",
        desc: "Lakshya is a workshops officer and joined in the fall of 2023.",
        pfp: "/images/officer-pictures/lakshya.jpg",
        link: "https://www.linkedin.com/in/lakshya-vannala-537378235/",
        email: "lvannala@tamu.edu",
    },
    {
        name: "Renee Gunukula",
        position: "Workshops",
        major: "Computer Science '27",
        desc: "Renee is a workshops officer and joined in the fall of 2023.",
        pfp: "/images/officer-pictures/renee.jpg",
        link: "https://www.linkedin.com/in/renee-gunukula-b334a8298/",
        email: "rengun@tamu.edu",
    },
    {
        name: "Dylan Hoang",
        position: "Outreach",
        major: "Computer Science '26",
        desc: "Dylan is an outreach officer and joined in the fall of 2024.",
        pfp: "/images/officer-pictures/dylan.jpg",
        link: "https://www.linkedin.com/in/dylan-hoang-4b5338212/",
        email: "dylan_hoang@tamu.edu",
    },
    {
        name: "Aryan Gandhi",
        position: "Marketing",
        major: "Computer Science '27",
        desc: "Aryan is a marketing officer and joined in the spring of 2024.",
        pfp: "/images/officer-pictures/aryan.jpg",
        link: "https://www.linkedin.com/in/aryan-gandhi23/",
        email: "arygandhi11@tamu.edu",
    },
    {
        name: "Bradley James",
        position: "Workshops",
        major: "Computer Science '26",
        desc: "Bradley is a workshops officer and joined in the spring of 2025.",
        pfp: "/images/officer-pictures/default-pfp.png",
        link: "https://www.linkedin.com/in/",
        email: "bj2772798@tamu.edu",
    },
    {
        name: "David Zhang",
        position: "Outreach",
        major: "Computer Science '27",
        desc: "David is an outreach officer and joined in the spring of 2025.",
        pfp: "/images/officer-pictures/default-pfp.png",
        link: "https://www.linkedin.com/in/",
        email: "zhangdavid275@tamu.edu",
    },
    {
        name: "Pratha Gupta",
        position: "Marketing",
        major: "Computer Science '27",
        desc: "Pratha is a marketing officer and joined in the spring of 2025.",
        pfp: "/images/officer-pictures/default-pfp.png",
        link: "https://www.linkedin.com/in/",
        email: "pratha05@tamu.edu",
    },
    {
        name: "Harshit Saini",
        position: "Marketing",
        major: "General Engineering '28",
        desc: "Harshit is a marketing officer and joined in the spring of 2025.",
        pfp: "/images/officer-pictures/default-pfp.png",
        link: "https://www.linkedin.com/in/",
        email: "harshitsaini@tamu.edu",
    },
    {
        name: "Harshitha Sudhakar",
        position: "Finance",
        major: "General Engineering '28",
        desc: "Harshitha is a finance officer and joined in the spring of 2025.",
        pfp: "/images/officer-pictures/default-pfp.png",
        link: "https://www.linkedin.com/in/",
        email: "harshithasudhakar@tamu.edu",
    },
];

export default function Officers() {
    return (
        <div className="pt-44 lg:pt-64 bg-[url('/waves/wave-1.svg')] bg-repeat-x bg-right-top transition-[padding]">
            <div className="w-full flex flex-col justify-center items-center gap-16 bg-lightBlue font-mont overflow-x-clip">
                <h1 className="text-navy text-[47px] sm:text-5xl lg:text-6xl font-bold text-center mt-10">
                    OFFICER TEAM
                </h1>
                <div className="min-w-[320px] md:min-w-[708px] lg:min-w-[964px] relative flex flex-col lg:grid xl:grid-cols-2 gap-10 bg-white rounded-3xl mx-3 lg:mx-36 px-4 py-10 md:px-12 md:py-20 lg:px-20 lg:py-30">
                    {officers.map((officer, index) => (
                        <OfficerList key={index} details={officer} />
                    ))}
                </div>
            </div>
            <div className="pt-64 bg-[url('/waves/wave-1-180.svg')] bg-repeat-x bg-right-top transition-[padding]"></div>
        </div>
    );
}