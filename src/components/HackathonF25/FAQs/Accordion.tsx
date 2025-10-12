import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Importing the icons

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
          className="border border-gray-800 rounded-lg mb-4 last:mb-0"
        >
          <summary
            className="flex items-center cursor-pointer justify-between text-white p-4 duration-300 faq-gradient hover:bg-gray-800 hover:text-white transition-colors border-white border-2 rounded-lg"
            onClick={() => toggleOpen(index)}
          >
            <h5 className="font-semibold text-lg">{detail.question}</h5>
            <div className={`w-6 h-6 trasition-transform duration-300 transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
              {openIndex === index ? (
                <AiOutlineMinus className="w-6 h-6 transition-transform duration-350" />
              ) : (
                <AiOutlinePlus className="w-6 h-6 transition-transform duration-350" />
              )}
            </div>
          </summary>
          {openIndex === index && (
            <div className="p-6 border-white border-2 rounded-lg border-t-transparent">
              <p className="text-white text-lg font-normal leading-7 mb-0">
                {detail.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
