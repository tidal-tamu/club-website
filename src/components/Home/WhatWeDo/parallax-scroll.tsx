"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../lib/utils";

const isImage = (url: string) => {
  return /\.(jpeg|jpg|gif|png|svg)$/.test(url);
};

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
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [250, -900]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [-50, 150]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [100, -900]);

  const third = Math.ceil(titles.length / 3);

  const firstPart = titles.slice(0, third);
  const secondPart = titles.slice(third, 2 * third);
  const thirdPart = titles.slice(2 * third);

  const bodyFirstPart = bodies.slice(0, third);
  const bodySecondPart = bodies.slice(third, 2 * third + 1);
  const bodyThirdPart = bodies.slice(2 * third);

  return (
    <div
      className={cn("scrollbar-hidden h-[80rem] items-start overflow-y-clip w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto py-40"
        ref={gridRef}
      >
        <div className="grid gap-y-80 gap-x-10">
          {firstPart.map((title, idx) => (
            <motion.div
              style={{ y: translateFirst }} 
              key={"grid-1" + idx}
              className="bg-blue-100 gap-y-25 m-3 p-10 h-96 w-25 rounded-full flex flex-col justify-center items-center"
            >
              <h2 className="text-lg font-bold text-center">{title}</h2>
              <p className="text-center">{bodyFirstPart[idx]}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-y-40 gap-x-10">
          {secondPart.map((title, idx) => (
            <motion.div
              style={{ y: translateSecond }} 
              key={"grid-2" + idx}
              className="bg-blue-100 gap-y-25 m-3 p-10 h-96 w-25 rounded-full flex flex-col justify-center items-center"
            >
              <h2 className="text-lg font-bold text-center">{title}</h2>
              <p className="text-center">{bodySecondPart[idx]}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-y-120 gap-x-10">
          {thirdPart.map((title, idx) => (
            <motion.div
              style={{ y: translateThird }} 
              key={"grid-3" + idx}
              className="bg-blue-100 gap-y-25 m-3 p-10 h-96 w-25 rounded-full flex flex-col justify-center items-center"
            >
              <h2 className="text-lg font-bold text-center">{title}</h2>
              
              {isImage(bodyThirdPart[idx]) ? (
                <div
                className="h-full w-full bg-cover bg-center rounded-full"
                style={{ 
                  backgroundImage: `url(${bodyThirdPart[idx]})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                />
              ) : (
                <p className="text-center">{bodyThirdPart[idx]}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
