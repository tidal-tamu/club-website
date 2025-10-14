import { FaPlus } from "react-icons/fa";
import { useState } from "react";
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
    answer: "Please bring your laptop, charger, and anything that will help you hack. If you plan on staying overnight, make sure to prepare accordingly. A blanket and pillow may come in handy, but try to limit the size of the items you bring. Most importantly, don’t forget your deodorant. 🫡 ",
    id: "4",
  },
  {
    question: "Do I have to be in person?",
    answer: "Yes, TIDALhack is an in-person event. Hackers must check in and be present throughout the hackathon to participate. 😺",
    id: "5",
  },
];

const details2 = [
  {
    question: "How do teams work?",
    answer: "Teams are limited to 4 hackers. Make sure to check on the registration form whether you have a team or are in need of one. During the opening ceremony we will have time for matchmaking, but we encourage you to find a team beforehand (preferably through our discord)!😎",
    id: "6",
  },
  {
    question: "What is the judging criteria?",
    answer: "The judging criteria will be released closer to the event. However, you can expect to be judged on creativity, technical difficulty, and presentation. Emphasis on CREATIVITY! 🧐",
    id: "7",
  },
  {
    question: "How do I sign up?",
    answer: "Fill out our registration form above! 🤠",
    id: "8",
  },
  {
    question: "What's the deadline to register?",
    answer: "TODO TODO TODO TODO",
    id: "9",
  },
  {
    question: "I have more questions!",
    answer: "For any other questions or concerns, please contact us at tidaltamu@gmail.com or ask an officer in the Discord!",
    id: "10",
  },

];


export default function FAQs() {
  return (
    <div className="relative px-6 lg:px-12 xl:px-24 pt-20 flex flex-col justify-center items-center gap-6 max-w-7xl mx-auto">
      <span className="text-white font-bungee text-3xl md:text-5xl lg:text-6xl mb-8 text-center">
        FAQs
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 w-full">
        <Accordion details={details1} />
        <Accordion details={details2} />
      </div>
    </div>
  );
}
