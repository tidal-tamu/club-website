import { motion } from "framer-motion";
import Accordion from "./Accordion";

const discordLink = "https://tinyurl.com/tidaltamudiscord";

const faqDetails = [
    {
        id: "1",
        question: "What is TIDALhack?",
        answer: "TIDALHack is a student-led data science competition where students of all levels and majors develop a project to win big prizes. 😀",
        icon: "trophy" as const,
    },
    {
        id: "2",
        question: "Why do TIDALhack?",
        answer: "TIDALhack is an opportunity to challenge yourself, gain practical experience in data science, and solve real-world problems! It also looks good on your resume!! 😉",
        icon: "trophy" as const,
    },
    {
        id: "3",
        question: "What if I'm new to hackathons?",
        answer: "Don't worry! We will conduct introductory workshops and provide mentors for you. We foster a welcoming environment for beginners to ensure you have the best experience. 🤗",
        icon: "user" as const,
    },
    {
        id: "4",
        question: "What should I bring?",
        answer: "Please bring your laptop, charger, and anything that will help you hack. If you plan on staying overnight, make sure to prepare accordingly. A blanket and pillow may come in handy, but try to limit the size of the items you bring. Most importantly, don't forget your deodorant. 🫡",
        icon: "clipboard" as const,
    },
    {
        id: "5",
        question: "Do I have to be in person?",
        answer: "Yes, TIDALhack is an in-person event. Hackers must check in and be present throughout the hackathon to participate. 😺",
        icon: "user" as const,
    },
    {
        id: "6",
        question: "How do teams work?",
        answer: "Teams are limited to 4 hackers. Make sure to check on the registration form whether you have a team or are in need of one. During the opening ceremony we will have time for matchmaking, but we encourage you to find a team beforehand (preferably through our discord)! 😎",
        icon: "team" as const,
    },
    {
        id: "7",
        question: "What is the judging criteria?",
        answer: "The judging criteria will be released closer to the event. However, you can expect to be judged on creativity, technical difficulty, and presentation. Emphasis on CREATIVITY! 🧐",
        icon: "trophy" as const,
    },
    {
        id: "8",
        question: "How do I sign up?",
        answer: (
            <>
                Fill out our{" "}
                <a
                    href="/register"
                    className="text-[#0d5c63] hover:text-[#094248] underline transition-colors"
                >
                    registration form
                </a>{" "}
                above! 🤠
            </>
        ),
        icon: "clipboard" as const,
    },
    {
        id: "9",
        question: "Can I stay in MSC overnight?",
        answer: "Yes! TIDALhack is a full 24 hour event this year. Please keep in mind that the MSC closes at 11:00 PM on Saturday. This means you won't be able to re-enter until Sunday morning if you leave the building. 😴",
        icon: "car" as const,
    },
    {
        id: "10",
        question: "I have more questions!",
        answer: (
            <>
                For any other questions or concerns, please contact us at{" "}
                <a
                    href="mailto:tidaltamu@gmail.com"
                    className="text-[#0d5c63] hover:text-[#094248] underline transition-colors"
                >
                    tidaltamu@gmail.com
                </a>{" "}
                or ask an officer in the{" "}
                <a
                    href={discordLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0d5c63] hover:text-[#094248] underline transition-colors"
                >
                    Discord
                </a>
                !
            </>
        ),
        icon: "question" as const,
    },
];

export default function FAQs() {
    return (
        <section
            id="faq"
            className="relative w-full overflow-hidden"
            style={{
                backgroundColor: "#79b0cf",
                paddingTop: "clamp(40px, 5vw, 72px)",
                paddingBottom: "clamp(80px, 12vw, 160px)",
            }}
        >
            <h2
                className="s26-section-header font-bold text-center text-white uppercase tracking-widest mb-12 md:mb-16"
                style={{
                    fontSize: "clamp(32px, 5vw, 52px)",
                    textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
                }}
            >
                FAQ
            </h2>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 lg:gap-10 xl:gap-12 min-h-0">
                    <motion.div
                        className="w-full lg:max-w-[55%] xl:max-w-[50%] order-2 lg:order-1 flex-shrink-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 sm:p-5 lg:p-6 shadow-xl">
                            <Accordion details={faqDetails} />
                        </div>
                    </motion.div>

                    <motion.div
                        className="hidden lg:flex flex-shrink-0 items-center justify-center lg:justify-end order-1 lg:order-2 w-full lg:max-w-[45%] xl:max-w-[40%]"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/s26/faq_bunny.png"
                            alt=""
                            className="max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-lg animate-float-subtle"
                            loading="lazy"
                            decoding="async"
                            style={{
                                width: "clamp(280px, 38vw, 440px)",
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
