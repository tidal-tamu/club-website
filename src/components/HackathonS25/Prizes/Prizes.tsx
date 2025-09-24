import { useRef, useEffect } from "react";
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
    //const [toggleRocket, setToggleRocket] = useState(false);

    useEffect(() => {
        if (pathRef.current && rocketRef.current) {
            // Animate the rocket along the motion path
            gsap.to(rocketRef.current, {
                duration: 1,
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
                            //console.log("toggle " + toggleRocket)
                            //setToggleRocket(curr === 1)
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
                <svg className="w-full h-full pointer-events-none hidden md:flex">
                    <path
                        ref={pathRef}
                        // d="M-100,300 C200,500 400,400 650,600 S850,800 1050,700 C1200,650 1300,700 1450,800 S1800,850 2200,1000"
                        d="m -55.228812,207.65411 c 0,0 121.45198,200.39576 427.106122,210.51676 305.65415,10.121 392.69474,153.83917 392.69474,153.83917 v 0 c 0,0 38.45978,261.12176 331.96875,184.20217 293.5089,-76.91958 151.8149,-295.53315 151.8149,-295.53315 0,0 -121.4519,-238.85555 -295.53311,-22.26619 -174.08115,216.58937 119.42781,293.50895 119.42781,293.50895 0,0 76.9196,194.32315 475.6869,159.91176 398.7673,-34.41139 263.1459,-44.53239 491.8805,218.61352 228.7346,263.1459 414.9609,129.5488 414.9609,129.5488 l 182.178,-111.331" fill="none"
                        stroke="rgba(0, 0, 0, 0)"
                        strokeWidth="2"
                        className="w-full z-30"
                    />
                </svg>
                <img
                    className="relative rocket h-[90px] top-1/2 left-0"
                    src="./images/rocket_trans.png"
                    alt="rocket"
                    ref={rocketRef}
                ></img>
                <h1 className="text-black text-6xl lg:text-7xl font-bold text-center mb-48 plasma-bold" id="prizes">
                    EVENT <span className="text-hackRed"> PRIZES</span>
                </h1>

                <div className="flex w-full lg:w-4/5 xl:w-3/5 py-16 px-4 lg:px-8 mb-8 gap-12 sm:gap-16 md:gap-24 justify-center relative zing-base">
                    {/* 2nd Place */}
                    <div className="flex flex-col items-center text-center relative bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20">
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-boldz">2nd <span className="hidden sm:inline">place</span></div>
                        <div className="text-3xl sm:text-4xl lg:text-5xl mt-2">$500 <span className="hidden sm:inline">in prizes!</span></div>
                    </div>

                    {/* 1st Place - Tallest */}
                    <div className="flex flex-col items-center text-center relative bottom-12 sm:bottom-16 md:bottom-24 lg:bottom-32">
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold zing-base">1st <span className="hidden sm:inline">place</span></div>
                        <div className="text-3xl sm:text-4xl lg:text-5xl mt-2">$750 <span className="hidden sm:inline">in prizes!</span></div>
                    </div>

                    {/* 3rd Place */}
                    <div className="flex flex-col items-center text-center relative bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10">
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold zing-base">3rd <span className="hidden sm:inline">place</span></div>
                        <div className="text-3xl sm:text-4xl lg:text-5xl mt-2">$250 <span className="hidden sm:inline">in prizes!</span></div>
                    </div>
                </div>

                <div className="hiddenlg:block transform -translate-y-1/4 pointer-events-none w-[60vw]">
                    <img
                        src="/images/prizes_bg.png"
                        alt="Prizes Background"
                        className="mx-auto opacity-90"
                    />
                </div>
            </div>
            <div className="w-full h-[260px] bg-[url('/waves/wave-1-180-beige.svg')] bg-repeat-x"></div>
        </div>
    );
}
