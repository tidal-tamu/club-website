import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function Prizes() {
    const rocketRef = useRef(null);
    const pathRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        if (pathRef.current && rocketRef.current) {
            gsap.to(rocketRef.current, {
                duration: 10,
                ease: "none",
                motionPath: {
                    path: pathRef.current,
                    align: pathRef.current,
                    autoRotate: true,
                    alignOrigin: [0.5, 0.5],
                    start: 0,
                    end: 1
                },
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'center bottom',
                    end: 'center top',
                    scrub: 0.5,
                    markers: false,
                }
            });
        }
    }, { scope: containerRef });

    return (
        <div className="pt-32 lg:pt-52 bg-[url('/waves/wave-1-beige.svg')] bg-repeat-x bg-right-top transition-[padding]">
            <div className="bg-hackBeige w-full flex flex-col items-center animation-container h-[100vh]relative overflow-hidden" ref={containerRef}>
                <svg className="w-full h-full pointer-events-none">
                    <path
                        ref={pathRef}
                        d="M0,0 C200,300 400,200 650,400 S850,600 1050,500 C1200,400 1300,500 1450,600 S1800,650 2200,800"
                        fill="none"
                        stroke="rgba(0, 0, 0, 0)"
                        strokeWidth="2"
                        className="z-30"
                    />
                </svg>
                <img className="rocket h-[75px] top-1/2 left-0" src="./images/rocket_trans.png" alt="rocket" ref={rocketRef}></img>
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

                <div className="hidden lg:block transform -translate-y-1/4 pointer-events-none w-[50vw] mb-3">
                    <img src="/images/prizes_bg.png" alt="Prizes Background" className="mx-auto opacity-90" />
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

                {/* <section className="bg-white animation-container h-[100vh] w-full relative flex items-center overflow-hidden" ref={containerRef}>
                    <svg className="w-full h-full pointer-events-none">
                        <path
                            ref={pathRef}
                            d="M0,100 C150,200 300,50 450,150 S600,250 750,100 C800,50 750,50 750,200 S650,400 550,250"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                        />
                    </svg>
                    <img className="rocket h-[50px] top-1/2 left-0" src="./images/rocket_trans.png" alt="rocket" ref={rocketRef}></img>
                </section> */}
            </div>
            <div className="w-full h-[260px] bg-[url('/waves/wave-1-180-beige.svg')] bg-repeat-x"></div>
        </div>
    );
}
