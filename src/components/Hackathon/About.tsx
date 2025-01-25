import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function About() {
    const sidePathRef = useRef(null);
    const containerRef = useRef(null);
    useEffect(() => {
        if (sidePathRef && containerRef) {

        }
    }, []);
    
    return (
        <div ref={containerRef} className="pt-40 md:pt-50 lg:pt-64 bg-[url('/waves/wave-1-beige.svg')] bg-repeat-x bg-right-top transition-[padding] z-10 relative overflow-hidden">
                
            {/* <svg className="h-full w-full pointer-events-none">
                <path
                    ref={sidePathRef}
                    d="m -55.228812,207.65411 c 0,0 121.45198,200.39576 427.106122,210.51676 305.65415,10.121 392.69474,153.83917 392.69474,153.83917 v 0 c 0,0 38.45978,261.12176 331.96875,184.20217 293.5089,-76.91958 151.8149,-295.53315 151.8149,-295.53315 0,0 -121.4519,-238.85555 -295.53311,-22.26619 -174.08115,216.58937 119.42781,293.50895 119.42781,293.50895 0,0 76.9196,194.32315 475.6869,159.91176 398.7673,-34.41139 263.1459,-44.53239 491.8805,218.61352 228.7346,263.1459 414.9609,129.5488 414.9609,129.5488 l 182.178,-111.331"
                    fill="none"
                    style={{ fill: "#000000", fillOpacity: 0, stroke: "rgba(255, 0, 0, 0.8)", strokeWidth: 4 }}
                />
            </svg> */}

            <div className="w-full flex flex-col justify-center items-center gap-14 bg-hackBeige font-mont overflow-x-clip">
                <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-bold text-center plasma-bold">
                    ABOUT <span className="text-hackRed">TIDALHACK</span> 2025
                </h1>

                <div className="flex flex-col justify-center items-center gap-6">
                    <div className="text-center w-4/5 sm:w-3/5 space-y-4 pb-6">
                        <h1 className="text-lg md:text-xl lg:text-2xl">
                            TidalHack is a <span className="font-semibold">24 hour event</span> where data science 
                            and machine learning enthusiasts come together to build something amazing! Join us on  
                            <span className="font-semibold"> March 22 - 23</span> for a weekend of learning, collaboration, and fun!
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-2 lg:gap-12 lg:w-4/5">
                        <img src="/images/hackathon-sheep.png" alt="Sheep" className="size-1/3 md:size-1/5 lg:size-1/6 -translate-x-1 animate-sheep"/>
                        <div className="text-center w-4/5 md:w-1/3">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pb-3">
                                WHERE
                            </h1>
                            <p className="lg:text-lg">
                                @ MSC 2300
                                <br/>
                                Texas A&M University
                                <br />
                                March 22nd - 23rd, 2025
                            </p>
                        </div>
                        <div className="text-center w-4/5 md:w-1/3">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pb-3">
                                WHO
                            </h1>
                            <p className="lg:text-lg">
                                Anyone! Whether you are a seasoned coder or just starting out, TidalHack is the perfect place to learn and grow.
                            </p>
                        </div>
                        <div className="text-center w-4/5 md:w-1/3">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pb-3">
                                HOW
                            </h1>
                            <p className="lg:text-lg pb-2">
                                Simply fill out the application form and show up on the day of the event!
                            </p>
                            <a href="https://www.google.com/" target="_blank" className="underline"> Click Here! </a>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 w-9/12 lg:w-4/6 xl:w-1/2 pt-12 md:pt-2">
                        <h1 className="sm:text-lg lg:text-xl">
                            Parking will be available
                            in <a href="https://maps.app.goo.gl/hDTcND9qJaruVjKm9"  target="_blank" className="underline">Lot 100t</a> or <a 
                            href="https://maps.app.goo.gl/8jCHSJo7GvumZQ8C8" target="_blank" className="underline">Lot 74</a> for 
                            the duration of the event. Keep in mind that you cannot park in reserved, timed, business, or service vehicle spaces. We hope to see you there!
                        </h1>
                        <img src="/images/loc-placeholder.png" alt="Hackathon Map" className="w-4/5 md:w-1/2 lg:w-[45%]"/>
                    </div>
                </div>
            </div>
            <div className="w-full h-[260px] bg-[url('/waves/wave-1-180-beige.svg')] bg-repeat-x"></div>
        </div>
    );
}
