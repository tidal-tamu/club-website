import Navbar from "../HackathonF25/Navbar";
import Hero from "../HackathonF25/Hero";
import LoadingScreen from "./LoadingScreen";
import About from "../HackathonF25/About";
import Schedule from "../HackathonF25/Schedule";
import Prizes from "../HackathonF25/Prizes";
import Sponsors from "../HackathonF25/Sponsors";
import FAQs from "./FAQs/FAQs";
import Footer from "../Footer";
import tidalBackground from "/f25/tidal-background.png";
import tidalHeroText from "/f25/hero.png";
import "./tidal-effects.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const HackathonF25 = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        // Store original values
        const originalOverflow = document.body.style.overflow;
        const originalBackgroundColor = document.body.style.backgroundColor;

        // Only hide overflow and set styles when loading
        if (isLoading) {
            document.body.style.overflow = "hidden";
            document.body.style.backgroundColor = "#121111";
        } else {
            // Restore overflow when loading is done
            document.body.style.overflow = originalOverflow || "";
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        let browserLoaded = false;
        let imagesLoaded = false;
        let minimumTimeElapsed = false;
        let progressInterval: NodeJS.Timeout;
        let currentProgress = 0;
        const minimumLoadTime = 3000;

        const smoothProgressUpdate = () => {
            if (currentProgress < 100) {
                const increment = Math.random() * 3 + 1;
                currentProgress = Math.min(currentProgress + increment, 100);
                setLoadingProgress(Math.floor(currentProgress));
            }
        };

        const checkCanFinish = () => {
            if (
                browserLoaded &&
                imagesLoaded &&
                minimumTimeElapsed &&
                currentProgress >= 100
            ) {
                clearInterval(progressInterval);
                setTimeout(() => setIsLoading(false), 500);
            }
        };

        const handleWindowLoad = () => {
            browserLoaded = true;
            setTimeout(() => {
                minimumTimeElapsed = true;
                checkCanFinish();
            }, minimumLoadTime);
        };

        if (document.readyState === "complete") {
            handleWindowLoad();
        } else {
            window.addEventListener("load", handleWindowLoad);
        }

        const imagesToLoad = [tidalBackground, tidalHeroText];
        let loadedCount = 0;

        const checkImageLoaded = () => {
            loadedCount++;
            if (loadedCount === imagesToLoad.length) {
                imagesLoaded = true;
                checkCanFinish();
            }
        };

        imagesToLoad.forEach((src) => {
            const img = new Image();
            img.onload = checkImageLoaded;
            img.onerror = checkImageLoaded;
            img.src = src;
        });

        progressInterval = setInterval(smoothProgressUpdate, 50);

        const safetyTimeout = setTimeout(() => {
            browserLoaded = true;
            imagesLoaded = true;
            minimumTimeElapsed = true;
            clearInterval(progressInterval);
            setLoadingProgress(100);
            setTimeout(() => setIsLoading(false), 500);
        }, 8000);

        return () => {
            // Restore original values
            document.body.style.overflow = originalOverflow || "";
            document.body.style.backgroundColor = originalBackgroundColor || "";
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("load", handleWindowLoad);
            clearInterval(progressInterval);
            clearTimeout(safetyTimeout);
        };
    }, [isLoading]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen key="loading" progress={loadingProgress} />
                )}
            </AnimatePresence>

            {/* Always render the content, but hide it visually during loading */}
            <div
                className={`hackathon-f25-container min-h-screen hero-gradient relative overflow-hidden transition-opacity duration-500 ${
                    isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                style={{
                    backgroundImage: `url(${tidalBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div
                    className="firefly-cursor"
                    style={{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                    }}
                />

                <div className="absolute inset-0 bg-tidal-deep/70 backdrop-blur-[1px]" />

                <div className="relative z-30">
                    <Navbar dark />
                </div>

                <div className="relative z-20">
                    <Hero />
                    <About />
                    <Schedule />
                    <Prizes />
                    <FAQs />
                    <Sponsors />
                </div>

                <div className="relative z-20">
                    <Footer variant="hackathon-fall-25" />
                </div>
            </div>
        </>
    );
};

export default HackathonF25;
