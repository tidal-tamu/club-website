import Accordion from "./Accordion";

const details1 = [
    {
        question: "What is TIDALhack?",
        answer: "TIDALHack is a student-led data science competition where students of all levels and majors develop a project to win big prizes. 😀",
        id: "1",
    },
    {
        question: "Why do TIDALhack?",
        answer: "TIDALhack is an opportunity to challenge yourself, gain practical experience in data science, and solve real-world problems! It also looks good on your resume!! 😉",
        id: "2",
    },
    {
        question: "What if I’m new to hackathons?",
        answer: "Don’t worry! We will conduct introductory workshops and provide mentors for you. We foster a welcoming environment for beginners to ensure you have the best experience. 🤗",
        id: "3",
    },
    {
        question: "What should I bring?",
        answer: "Please bring your laptop, charger, and anything that will help you hack. Most importantly, don’t forget your deodorant. Remember that you will have to leave the REC after day 1, so refrain from bringing anything unecessary. 🫡 ",
        id: "4",
    },
];

const details2 = [
    {
        question: "How do teams work?",
        answer: "Teams are limited to 4 hackers. If you have a team in mind, mention them in your application. If you don’t, no worries! We can match you to a team or you can find a team during the dedicated time after the opening ceremony. 😎",
        id: "5",
    },
    {
        question: "What is the judging criteria?",
        answer: "The judging criteria will be released closer to the event. However, you can expect to be judged on creativity, technical difficulty, and presentation. 🧐",
        id: "6",
    },
    {
        question: "How do I sign up?",
        answer: "Fill out our google form: https://forms.gle/wRGt7kma1zCvdGB36 🤠",
        id: "7",
    },
    {
        question: "I have more questions!",
        answer: "For any other questions or concerns, please contact us at tidaltamu@gmail.com or ask an officer in the Discord!",
        id: "8",
    },
];

export default function FAQ() {
    return (
        <div className="w-full">
            <h1 className="text-navy text-5xl lg:text-6xl font-bold text-center text-nowrap mb-10">
                FAQ
            </h1>
            ;
            <div className="flex flex-col lg:flex-row">
                <Accordion details={details1} />
                <Accordion details={details2} />
            </div>
        </div>
    );
}
