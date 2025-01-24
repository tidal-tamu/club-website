import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function Prizes() {
    const rocketRef = useRef(null);
    const pathRef = useRef(null);
    const containerRef = useRef(null);
    const lastScrollRef = useRef(0);
    let curr = 0;
    let prevCurr = 0;
    const [toggleRocket, setToggleRocket] = useState(false);

    useEffect(() => {
        if (pathRef.current && rocketRef.current) {
            // Animate the rocket along the motion path
            gsap.to(rocketRef.current, {
                duration: 10,
                ease: "none",
                motionPath: {
                    path: pathRef.current,
                    align: pathRef.current,
                    autoRotate: true,
                    alignOrigin: [0.5, 0.5],
                    start: 0,
                    end: 1,
                },
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "center bottom",
                    end: "center top",
                    scrub: 0.5,
                    markers: false,
                    onUpdate: (self) => {
                        const currentScrollY = self.scroll();

                        if (currentScrollY > lastScrollRef.current) {
                            curr = -1
                        } if (currentScrollY < lastScrollRef.current) {
                            curr = 1
                        } 

                        if (curr != prevCurr) {
                            console.log("toggle " + toggleRocket)
                            setToggleRocket(curr === 1)
                        }

                        prevCurr = curr
                        lastScrollRef.current = currentScrollY;

                    },
                },
            });
        }
    }, );

    return (
        <div className="pt-32 lg:pt-52 bg-[url('/waves/wave-1-beige.svg')] bg-repeat-x bg-right-top transition-[padding]">
            <div
                className="bg-hackBeige w-full flex flex-col items-center animation-container relative overflow-hidden"
                ref={containerRef}
            >
                <svg className="w-full h-full pointer-events-none">
                    <path
                        ref={pathRef}
                        d="M-100,300 C200,500 400,400 650,600 S850,800 1050,700 C1200,650 1300,700 1450,800 S1800,850 2200,1000"
                        fill="none"
                        stroke="rgba(0, 0, 0, 0)"
                        strokeWidth="2"
                        className="z-30"
                    />
                </svg>
                <img
                    className="relative rocket h-[75px] top-1/2 left-0"
                    src="./images/rocket_trans.png"
                    alt="rocket"
                    ref={rocketRef}
                    style={{ transform: 'rotate(180deg)' }}
                    // style={{
                    //     transform: `rotate(${toggleRocket ? 180 : 0}deg)`, // Rotate the rocket based on the toggle state
                    //     transformOrigin: "center",
                    //     transition: "transform 0.2s ease", // Smooth rotation transition
                    // }}
                ></img>
                <h1 className="text-black text-6xl lg:text-7xl font-bold text-center mb-16 plasma-bold">
                    OUR <span className="text-hackRed"> PRIZES </span>
                </h1>
                <div className="flex w-full lg:w-4/5 xl:w-3/5 py-16 px-4 lg:px-8 mb-16 gap-20 sm:gap-32 justify-center relative">
                    <div className="h-[20vh] flex items-center justify-center">
                        <div className="text-5xl lg:text-6xl font-bold text-center text-nowrap zing-base">
                            2nd <span className="hidden sm:inline">place</span>
                        </div>
                    </div>
                    <div className="h-[20vh] flex items-start justify-center">
                        <div className="text-5xl lg:text-6xl font-bold text-center text-nowrap zing-base">
                            1st <span className="hidden sm:inline">place</span>
                        </div>
                    </div>
                    <div className="h-[20vh] flex items-end justify-center">
                        <div className="text-5xl lg:text-6xl font-bold text-center text-nowrap zing-base">
                            3rd <span className="hidden sm:inline">place</span>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block transform -translate-y-1/4 pointer-events-none w-[60vw] mb-3">
                    <img
                        src="/images/prizes_bg.png"
                        alt="Prizes Background"
                        className="mx-auto opacity-90"
                    />
                </div>

                <div className="flex w-full lg:w-4/5 xl:w-3/5 pb-4 px-4 mt-[-10vh] lg:px-8 mb-16 gap-20 sm:gap-60 md:gap-72 justify-center">
                    <div className="flex items-center justify-center">
                        <div className="text-xl lg:text-2xl font-bold text-center text-nowrap">
                            TBD
                        </div>
                    </div>

                    <div className="flex items-start justify-center">
                        <div className="text-xl lg:text-2xl font-bold text-center text-nowrap">
                            TBD
                        </div>
                    </div>

                    <div className="flex items-end justify-center">
                        <div className="text-xl lg:text-2xl font-bold text-center text-nowrap">
                            TBD
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[260px] bg-[url('/waves/wave-1-180-beige.svg')] bg-repeat-x"></div>
        </div>
    );
}
