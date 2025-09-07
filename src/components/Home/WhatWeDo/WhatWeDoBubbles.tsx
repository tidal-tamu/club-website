import { useRef } from "react";
import { cn } from "../../../../lib/utils";
import myImage from "/icons/shapes/bubble.png";
import { motion } from "framer-motion";

const isImage = (url: string) => /\.(jpeg|jpg|gif|png|svg)$/.test(url);

interface BubbleProps {
  title: string;
  body: string;
  animationDelay: string;
}

const Bubble = ({ title, body, animationDelay }: BubbleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: parseFloat(animationDelay) }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="gap-y-25 m-3 p-10 h-80 w-80 md:h-[23rem] md:w-[23rem] lg:h-[25rem] lg:w-[25rem] rounded-full flex flex-col justify-center items-center animate-bubble relative shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{
        animationDelay,
        backgroundImage: `url(${myImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-navy text-xl font-bold text-center mb-1">{title}</h2>
      {isImage(body) ? (
        <div
          className="h-full w-full bg-cover bg-center rounded-full"
          style={{
            backgroundImage: `url(${body})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ) : (
        <p className="text-center text-sm md:text-base">{body}</p>
      )}
    </motion.div>
  );
};

export const Standard = ({
  titles,
  bodies,
  className,
}: {
  titles: string[];
  bodies: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);

  const third = Math.ceil(titles.length / 3);
  const firstPart = titles.slice(0, third);
  const secondPart = titles.slice(third, 2 * third);
  const thirdPart = titles.slice(2 * third);

  const bodyFirstPart = bodies.slice(0, third);
  const bodySecondPart = bodies.slice(third, 2 * third);
  const bodyThirdPart = bodies.slice(2 * third);

  const renderBubbles = (titles: string[], bodies: string[], delayMultiplier: number) =>
    titles.map((title, idx) => (
      <Bubble
        key={`${title}-${idx}`}
        title={title}
        body={bodies[idx]}
        animationDelay={`${idx * delayMultiplier}s`}
      />
    ));

  return (
    <div className={cn("items-start w-full", className)} ref={gridRef}>
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-navy font-bold text-5xl lg:text-6xl text-center pt-5"
      >
        WHAT WE DO
      </motion.h1>
      <div className="overflow-hidden grid grid-rows md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto py-30" ref={gridRef}>
        <div className="grid gap-y-5 md:gap-y-10 lg:gap-y-50 gap-x-10 justify-center">
          {renderBubbles(firstPart, bodyFirstPart, 0.5)}
        </div>
        <div className="grid pt-5 md:pt-10 lg:pt-70 gap-y-5 md:gap-y-10 lg:gap-y-50 gap-x-10 justify-center">
          {renderBubbles(secondPart, bodySecondPart, 0.75)}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-1 pt-5 lg:pt-20 gap-y-5 md:gap-y-10 lg:gap-y-50 gap-x-10 md:gap-x-100 lg:gap-x-10 justify-center">
          {renderBubbles(thirdPart, bodyThirdPart, 1.0)}
        </div>
      </div>
    </div>
  );
};