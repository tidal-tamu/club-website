import { useState } from "react";

export default function Accordion({
    details,
}: {
    details: { question: string; answer: string; id: string }[];
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full px-16 my-2">
            {details.map((detail, index) => (
                <div
                    key={detail.id}
                    className="border border-navy rounded-lg mb-4 last:mb-0 overflow-hidden"
                >
                    <summary
                        className="flex items-center cursor-pointer justify-between bg-[#E2F6FF] text-black p-4 duration-300 hover:bg-navy hover:text-white transition-colors"
                        onClick={() => toggleOpen(index)}
                    >
                        <h5 className="font-semibold text-lg">
                            {detail.question}
                        </h5>
                        <svg
                            className={`w-6 h-6 transition-transform duration-350 ${
                                openIndex === index ? "rotate-180" : "rotate-0"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>
                    {openIndex === index && (
                        <div className="p-6">
                            <p className="text-gray-600 text-lg font-normal leading-7 mb-0">
                                {detail.answer}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
