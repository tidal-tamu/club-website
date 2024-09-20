"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../lib/utils";

export const ParallaxScroll = ({
  titles,
  bodies,
  className,
}: {
  titles: string[];
  bodies: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [150, -1000]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [50, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const third = Math.ceil(titles.length / 3);

  const firstPart = titles.slice(0, third);
  const secondPart = titles.slice(third, 2 * third);
  const thirdPart = titles.slice(2 * third);

  const bodyFirstPart = bodies.slice(0, third);
  const bodySecondPart = bodies.slice(third, 2 * third);
  const bodyThirdPart = bodies.slice(2 * third);

  return (
    <div
      className={cn("scrollbar-hidden h-[80rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-10 py-40"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((title, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
              className="bg-blue-100 m-3 p-10 h-96 w-25 rounded-full"
            >
              <h2 className="text-lg font-bold text-center">{title}</h2>
              <p className="text-center">{bodyFirstPart[idx]}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((title, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={"grid-2" + idx}
              className="bg-blue-100 m-3 p-10 h-96 w-25 rounded-full"
            >
              <h2 className="text-lg font-bold text-center">{title}</h2>
              <p className="text-center">{bodySecondPart[idx]}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((title, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3" + idx}
              className="bg-blue-100 m-3 p-10 h-96 w-25 rounded-full"
            >
              <h2 className="text-lg text-center font-bold">{title}</h2>
              <p className="text-center">{bodyThirdPart[idx]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
