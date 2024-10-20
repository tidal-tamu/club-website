import OfficerList from "./Officers/OfficerList";

const officer1 = {
    name: "Roman Parker | Co-President",
    major: "Computer Science '26",
    desc: "Roman is a Co-President of TIDAL and has been with the club since spring of 2023",
    pfp: "/images/officer-pictures/roman.jpg",
    link: "https://www.linkedin.com/in/roman-parker-76a474284/",
};

const officer2 = {
    name: "Ketan Verma | Co-President",
    major: "Computer Engineering '26",
    desc: "Ketan is a Co-President of TIDAL and has been with the club since spring of 2023",
    pfp: "/images/officer-pictures/ketan.jpg",
    link: "https://www.linkedin.com/in/ketan-verma12/",
};

const officer3 = {
    name: "Abhay Patil | Co-President",
    major: "Electrical Engineering '26",
    desc: "Abhay is a Co-President of TIDAL and has been with the club since spring of 2023",
    pfp: "/images/officer-pictures/abhay.jpg",
    link: "https://www.linkedin.com/in/abhaypatiltamu/",
};

const officer6 = {
    name: "Advaith Prabu | Activites",
    major: "Industrial Engineering '26",
    desc: "Advaith is an activities officer and has been involved with TIDAL since spring of 2024",
    pfp: "/images/officer-pictures/advaith.jpg",
    link: "https://www.linkedin.com/in/advaithprabu/",
};

const officer5 = {
    name: "Zavier Vega-Yu | Marketing",
    major: "Computer Science '27",
    desc: "Zavier is a marketing officer and has been involved with TIDAL since fall of 2023",
    pfp: "/images/officer-pictures/zavier.JPG",
    link: "https://www.linkedin.com/in/zvegayu/",
};

const officer4 = {
    name: "Sarvesh Karunakaran | Activites",
    major: "Computer Engineering '26",
    desc: "Sarvesh is an activities officer and has been involved with TIDAL since spring of 2024",
    pfp: "/images/officer-pictures/sarvesh.png",
    link: "https://www.linkedin.com/in/sarveshkk/",
};

const officer7 = {
    name: "Aryan Gandhi | Marketing",
    major: "Computer Science '27",
    desc: "Aryan is a marketing officer and has been involved with TIDAL since spring of 2024",
    pfp: "/images/officer-pictures/aryan.jpg",
    link: "https://www.linkedin.com/in/aryan-gandhi23/",
};

const officer8 = {
    name: "Lakshaya Vannala | Workshops",
    major: "Neuroscience '27",
    desc: "Lakshaya is the workshops team lead and has been involved with TIDAL since fall of 2023",
    pfp: "/images/officer-pictures/lakshya.jpg",
    link: "https://www.linkedin.com/in/lakshya-vannala-537378235/",
};

const officer9 = {
    name: "Aryan Bhakta | Finance",
    major: "MIS '26",
    desc: "Aryan is the head of finance and has been involved with TIDAL since fall of 2023",
    pfp: "/images/officer-pictures/aryanb.jpg",
    link: "https://www.linkedin.com/in/aryan-bhakta-bb8839276/",
};

const officer10 = {
    name: "Daniel Trinh | Workshops",
    major: "Computer Science '27",
    desc: "Daniel is a workshops officer and has been involved with TIDAL since spring of 2024",
    pfp: "/images/officer-pictures/daniel.jpg",
    link: "https://www.linkedin.com/in/danielbtrinh/",
};

const officer11 = {
    name: "Durga Yerukala | Finance",
    major: "Computer Science '27",
    desc: "Durga is a finance officer and has been involved with TIDAL since spring of 2024",
    pfp: "/images/officer-pictures/durga.png",
    link: "https://www.linkedin.com",
};

const officer12 = {
    name: "Renee Gunukula | Workshops",
    major: "Computer Science '27",
    desc: "Renee is a workshops officer and has been involved with TIDAL since fall of 2023",
    pfp: "/images/officer-pictures/renee.jpg",
    link: "https://www.linkedin.com/in/renee-gunukula-b334a8298/",
};

const officer13 = {
    name: "Matthew Shi | Activites",
    major: "General Engineering '28",
    desc: "Matthew is an activities officer and was recently onboarded in the fall of 2024",
    pfp: "/images/officer-pictures/matthew.jpg",
    link: "https://www.linkedin.com/in/matthew-shi-a2376b239/",
};

const officer14 = {
    name: "Kyle Moore | Workshops",
    major: "Computer Science '26",
    desc: "Kyle is a workshops officer and has been involved with tidal since spring of 2024",
    pfp: "/images/officer-pictures/kyle.jpg",
    link: "https://www.linkedin.com",
};

const officer15 = {
    name: "Aurora Jiang | Outreach",
    major: "Biomedical Engineering '26",
    desc: "Aurora is an outreach officer and was recently onboarded in the fall of 2024",
    pfp: "/images/officer-pictures/aurora.jpg",
    link: "https://www.linkedin.com/in/aurorajiang/",
};

const officer16 = {
    name: "Dylan Hoang | Outreach",
    major: "Computer Science '26",
    desc: "Dylan is an outreach officer and was recently onboarded in the fall of 2024",
    pfp: "/images/officer-pictures/dylan.jpg",
    link: "https://www.linkedin.com/in/dylan-hoang-4b5338212/",
};

export default function Officers() {
    return (
        <div className="pt-44 lg:pt-64 bg-[url('/waves/wave-1.svg')] bg-repeat-x bg-right-top transition-[padding]">
            <div className="w-full flex flex-col justify-center items-center gap-16 bg-lightBlue font-mont overflow-x-clip">
                <h1 className="text-navy text-5xl lg:text-6xl font-bold text-center text-nowrap mt-10">
                    OFFICER TEAM
                </h1>
                <div className="md:min-w-[768px] lg:min-w-[1024px] relative flex flex-col lg:place-items-center lg:grid lg:grid-cols-2 gap-10 bg-white rounded-3xl mx-32 lg:mx-36 px-8 py-10 md:px-12 md:py-20 lg:px-20 lg:py-30 transition-all">
                        <OfficerList details={officer1} />
                        <OfficerList details={officer2} />
                        <OfficerList details={officer3} />
                        <OfficerList details={officer4} />
                        <OfficerList details={officer5} />
                        <OfficerList details={officer6} />
                        <OfficerList details={officer7} />
                        <OfficerList details={officer8} />
                        <OfficerList details={officer9} />
                        <OfficerList details={officer10} />
                        <OfficerList details={officer11} />
                        <OfficerList details={officer12} />
                        <OfficerList details={officer13} />
                        <OfficerList details={officer14} />
                        <OfficerList details={officer15} />
                        <OfficerList details={officer16} />
                </div>
            </div>
            <div className="pt-64 bg-[url('/waves/wave-1-180.svg')] bg-repeat-x bg-right-top transition-[padding]"></div>
        </div>
    );
}