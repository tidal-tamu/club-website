import { useRef } from "react";
import FloatingParticles from "./ui/FloatingParticles";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
    shouldAnimate?: boolean;
}

const Hero = ({ shouldAnimate = false }: HeroProps) => {
    const heroRef = useRef<HTMLDivElement>(null);
    const pebbleRef = useRef<HTMLImageElement>(null);
    const rustleRef = useRef<HTMLSpanElement>(null);

    useGSAP(
        () => {
            if (!heroRef.current || !pebbleRef.current) {
                return;
            }

            const heroEl = heroRef.current;
            const pebbleEl = pebbleRef.current;
            const rustleEl = rustleRef.current;

            const createScrollTriggerTimeline = () => {
                const hideTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: heroEl,
                        start: "50% top",
                        end: "bottom top",
                        scrub: false,
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: true,
                    },
                });

                hideTimeline.to(pebbleEl, {
                    yPercent: 120,
                    duration: 1.2,
                    ease: "power2.inOut",
                });

                return hideTimeline;
            };

            let hideTimeline: gsap.core.Timeline | null = null;
            const startNow =
                pebbleEl.complete &&
                pebbleEl.naturalWidth > 0 &&
                pebbleEl.offsetHeight > 0;

            const startAfterRustle = () => {
                gsap.to(pebbleEl, {
                    yPercent: 0,
                    duration: 1.2,
                    ease: "power2.inOut",
                    onComplete: () => {
                        hideTimeline = createScrollTriggerTimeline();
                        ScrollTrigger.refresh();
                    },
                });
            };

            const waitForRustleEndThenStart = () => {
                gsap.set(pebbleEl, { yPercent: 120 });

                if (!rustleEl) {
                    startAfterRustle();
                    return () => {};
                }
                const onRustleEnd = (e: AnimationEvent) => {
                    if (e.animationName !== "rustle") return;
                    startAfterRustle();
                };
                rustleEl.addEventListener(
                    "animationend",
                    onRustleEnd as EventListener,
                );
                return () =>
                    rustleEl.removeEventListener(
                        "animationend",
                        onRustleEnd as EventListener,
                    );
            };

            if (startNow) {
                const cleanupRustle = waitForRustleEndThenStart();
                return () => {
                    cleanupRustle();
                    hideTimeline?.kill();
                };
            } else {
                const onLoad = () => {
                    waitForRustleEndThenStart();
                };
                pebbleEl.addEventListener("load", onLoad, { once: true });
                return () => {
                    pebbleEl.removeEventListener("load", onLoad);
                    hideTimeline?.kill();
                };
            }

            return () => {
                hideTimeline?.kill();
            };
        },
        { scope: heroRef },
    );

    return (
        <div
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center px-6 md:px-12 select-none"
        >
            <div
                className="h-[15rem] lg:h-[25rem] absolute bottom-0 left-0 right-0 w-full z-50"
                style={{
                    background: "linear-gradient(transparent 20%, #77a5c6 66%)",
                }}
            ></div>

            <div className="absolute inset-0">
                <img
                    src="/s26/Hero/BackBushes.png"
                    alt="Back Bushes"
                    className="absolute bottom-[30vh] left-0 right-0 w-full min-w-0 slide-up-0 -z-[1]"
                    decoding="async"
                />
                <img
                    src="/s26/Hero/TopHill.png"
                    alt="Top Hill"
                    className="absolute bottom-0 left-0 right-0 w-full min-w-0 h-[55%] slide-up-0-z-[1]"
                    decoding="async"
                    fetchPriority="high"
                />
                <img
                    src="/s26/Hero/LowHill.png"
                    alt="Low Hill"
                    className="absolute bottom-8 sm:left-0 right-0 w-full min-w-0 h-[33%] z-[2]"
                    decoding="async"
                />
            </div>

            <div className="absolute inset-0">
                <img
                    src="/s26/Hero/TreesPreShadowed.png"
                    alt="Trees Pre Shadowed"
                    className="absolute left-0 bottom-[46vh] sm:bottom-[45vh] md:bottom-[44vh] lg:bottom-[43vh] xl:bottom-[41vh] 2xl:bottom-[40vh] w-full sm:w-[80%] slide-up-2 z-[1]"
                    decoding="async"
                />
            </div>
            <div
                className="absolute inset-0 w-full min-w-0  overflow-hidden"
                style={{ left: 0, right: 0 }}
            >
                <img
                    src="/s26/Hero/HouseGlowing.png"
                    alt="House Glowing"
                    className="absolute bottom-[48vh] right-[-10vh] sm:right-[3vh] md:right-[6vh] lg:right-[10vh] xl:right-[14vh] 2xl:right-[18vh] w-[40vh] object-contain slide-up-2"
                    decoding="async"
                />
            </div>

            <div
                className="absolute inset-0 w-full min-w-0 z-[2]"
                style={{ left: 0, right: 0 }}
            >
                <img
                    src="/s26/Hero/LargeBrownTreeAlt.png"
                    alt="Large Brown Tree Alt"
                    className="absolute md:right-0 bottom-[18vh] -translate-x-32 md:translate-x-16 lg:translate-x-20 xl:translate-x-24 2xl:translate-x-28 h-full min-w-[700px]"
                    decoding="async"
                />
            </div>

            <a
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
                className="hidden lg:block max-w-[80px] min-w-[50px] absolute top-0 right-[20px] w-[8%] z-30 hover:scale-105 transition-transform duration-200"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
                    alt="Major League Hacking 2026 Hackathon Season"
                    decoding="async"
                />
            </a>

            <FloatingParticles count={64} />

            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden w-full z-20">
                    <img
                        src="/s26/Hero/LowSnowPreShadowed.png"
                        alt="Low Snow Pre Shadowed"
                        className="left-0 scale-[3] sm:scale-[2] lg:scale-[1] slide-up-2"
                        decoding="async"
                    />
                    <div
                        className="h-[8rem] z-20"
                        style={{
                            background:
                                "linear-gradient(transparent 20%, #76A4C5 66%)",
                        }}
                    />
                </div>
            </div>

            <div className="absolute left-0 bottom-[5rem] lg:bottom-[8rem] overflow-hidden z-30">
                <div className="overflow-hidden0">
                    <img
                        ref={pebbleRef}
                        src="/s26/pebble.gif"
                        alt="Penguin mascot"
                        className="w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] flex-shrink-0 bottom-0"
                        decoding="async"
                    />
                </div>
                <img
                    src="/s26/Hero/PenguinCover.png"
                    alt="Penguin Cover"
                    className="absolute bottom-0 scale-[1.1] w-[200px] md:w-[250px] lg:w-[325px] xl:w-[400px] flex-shrink-0 slide-up-2"
                    decoding="async"
                />
                <span
                    ref={rustleRef}
                    className="absolute bottom-[5rem] lg:bottom-[8rem] left-[100px] md:left-[125px] lg:left-[163px] xl:left-[200px] translate-y-full text-4xl text-white animate-rustle"
                >
                    *rustle*
                </span>
            </div>

            <div className="text-center z-20 max-w-4xl mx-auto -translate-y-[5vh] space-y-0 flex flex-col gap-5">
                <motion.div
                    className="flex flex-wrap md:flex-nowrap justify-center gap-2 sm:gap-3 z-20"
                    initial={{ y: 30, opacity: 0 }}
                    animate={
                        shouldAnimate
                            ? { y: 0, opacity: 1 }
                            : { y: 30, opacity: 0 }
                    }
                    transition={{
                        duration: 2.0,
                        ease: [0.34, 1.56, 0.64, 1],
                        delay: 0.1,
                    }}
                >
                    <div className="bg-[#9FC9E6] border-[2px] border-[#9FC9E6] px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-3xl whitespace-nowrap hover:bg-[#8AB8D5] hover:border-[#8AB8D5] hover:scale-105 transition-all duration-200">
                        <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                            MSC Bethancourt
                        </span>
                    </div>
                    <div className="bg-[#9FC9E6] border-[2px] border-[#9FC9E6] px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-3xl whitespace-nowrap hover:bg-[#8AB8D5] hover:border-[#8AB8D5] hover:scale-105 transition-all duration-200">
                        <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                            24 Hours
                        </span>
                    </div>
                    <div className="bg-[#9FC9E6] border-[2px] border-[#9FC9E6] px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-3xl whitespace-nowrap hover:bg-[#8AB8D5] hover:border-[#8AB8D5] hover:scale-105 transition-all duration-200 cursor-pointer">
                        <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                            Feb 7-8
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    className="relative flex items-center justify-center gap-6 md:gap-8 lg:gap-10 xl:gap-10"
                    style={{
                        transform: "translateX(clamp(-32px, -2.5vw, -12px))",
                    }}
                    initial={{ y: 40, opacity: 0 }}
                    animate={
                        shouldAnimate
                            ? { y: 0, opacity: 1 }
                            : { y: 40, opacity: 0 }
                    }
                    transition={{
                        duration: 2.2,
                        ease: [0.34, 1.56, 0.64, 1],
                        delay: 0.8,
                    }}
                >
                    <h1
                        className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dynapuff"
                        style={{
                            fontWeight: "bold",
                            filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 40px rgba(255, 200, 50, 0.08))",
                            lineHeight: "1.1",
                            textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        Tidal
                        <br />
                        Hack
                    </h1>
                    <span
                        className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dynapuff inline-flex items-center scale-[2] origin-center"
                        style={{
                            fontWeight: "bold",
                            filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 40px rgba(255, 200, 50, 0.08))",
                            textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                            height: "2.2em",
                            lineHeight: "1.1",
                            marginLeft: "0.5em",
                        }}
                    >
                        '26
                    </span>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4 md:mt-8 justify-center"
                    initial={{ y: 30, opacity: 0 }}
                    animate={
                        shouldAnimate
                            ? { y: 0, opacity: 1 }
                            : { y: 30, opacity: 0 }
                    }
                    transition={{
                        duration: 2.0,
                        ease: [0.34, 1.56, 0.64, 1],
                        delay: 0.6,
                    }}
                >
                    <Link
                        to="/register"
                        className="bg-[#AB3243] hover:bg-[#8F2838] text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 hover:scale-110 active:scale-95 hover:shadow-lg border-b-4 md:border-b-6 lg:border-b-8 border-b-[#6B1A26] min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]"
                        style={{
                            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))",
                        }}
                    >
                        APPLY NOW
                        <FaPlay className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-white" />
                    </Link>
                    <a
                        href="https://forms.gle/oBEQk9y9xadLhYnE9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#9FC9E6] hover:bg-[#8AB8D5] text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 hover:scale-110 active:scale-95 hover:shadow-lg border-b-4 md:border-b-6 lg:border-b-8 border-b-[#5A7FA0] min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]"
                        style={{
                            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4))",
                        }}
                    >
                        JUDGE / MENTOR
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
