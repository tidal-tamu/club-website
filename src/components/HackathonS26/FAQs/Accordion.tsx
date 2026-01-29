import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import {
    AiOutlineUser,
    AiOutlineDollar,
    AiOutlineCar,
    AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { MdEmojiEvents } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

const iconMap: Record<string, React.ReactNode> = {
    user: <AiOutlineUser className="w-4 h-4 sm:w-5 sm:h-5" />,
    dollar: <AiOutlineDollar className="w-4 h-4 sm:w-5 sm:h-5" />,
    code: <FaCode className="w-4 h-4 sm:w-5 sm:h-5" />,
    team: <HiUserGroup className="w-4 h-4 sm:w-5 sm:h-5" />,
    trophy: <MdEmojiEvents className="w-4 h-4 sm:w-5 sm:h-5" />,
    car: <AiOutlineCar className="w-4 h-4 sm:w-5 sm:h-5" />,
    clipboard: <IoDocumentTextOutline className="w-4 h-4 sm:w-5 sm:h-5" />,
    question: <AiOutlineQuestionCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
};

export default function Accordion({
    details,
}: {
    details: {
        question: string;
        answer: string | React.ReactNode;
        id: string;
        icon?: keyof typeof iconMap;
    }[];
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="w-full isolate">
            {details.map((detail, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={detail.id}
                        className="border-b border-white/30 last:border-b-0"
                    >
                        <button
                            type="button"
                            className="flex items-center gap-3 w-full text-left py-2.5 sm:py-3 pr-2 hover:bg-white/5 transition-colors duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                            onClick={() => handleToggle(index)}
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${detail.id}`}
                            id={`faq-question-${detail.id}`}
                        >
                            <div
                                className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white"
                                aria-hidden
                            >
                                {iconMap[detail.icon ?? "question"] ?? iconMap.question}
                            </div>

                            <h5 className="flex-1 font-semibold text-white text-sm sm:text-base lg:text-lg pr-2">
                                {detail.question}
                            </h5>

                            <span
                                className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/25 border border-white/40 flex items-center justify-center text-white transition-transform duration-300 ease-out ${
                                    isOpen ? "rotate-180" : ""
                                }`}
                                aria-hidden
                            >
                                <HiChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                            </span>
                        </button>

                        <div
                            id={`faq-answer-${detail.id}`}
                            role="region"
                            aria-labelledby={`faq-question-${detail.id}`}
                            className="grid transition-[grid-template-rows] duration-300 ease-out"
                            style={{
                                gridTemplateRows: isOpen ? "1fr" : "0fr",
                            }}
                        >
                            <div className="min-h-0 overflow-hidden">
                                <div className="pl-11 sm:pl-12 pr-2 pb-2.5 sm:pb-3 pt-0">
                                    <div className="text-white/90 text-sm sm:text-base leading-relaxed">
                                        {detail.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
