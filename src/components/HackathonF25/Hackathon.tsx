import Navbar from "../HackathonF25/Navbar";
import Hero from "../HackathonF25/Hero";
import LoadingScreen from "./LoadingScreen";
import tidalBackground from "/f25/tidal-background.png";
import tidalHeroText from "/f25/hero.png";
import "./tidal-effects.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const HackathonF25 = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Track both image loading and minimum time
        const startTime = Date.now();
        const minimumLoadTime = 3000; // 3 seconds
        
        // Preload images
        const imagesToLoad = [tidalBackground, tidalHeroText];
        let loadedCount = 0;
        let imagesLoaded = false;

        const checkAllLoaded = () => {
            loadedCount++;
            if (loadedCount === imagesToLoad.length) {
                imagesLoaded = true;
                checkCanFinish();
            }
        };

        const checkCanFinish = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = minimumLoadTime - elapsedTime;

            if (imagesLoaded) {
                if (remainingTime > 0) {
                    // Wait for remaining time
                    setTimeout(() => setIsLoading(false), remainingTime);
                } else {
                    // Minimum time already passed
                    setIsLoading(false);
                }
            }
        };

        imagesToLoad.forEach((src) => {
            const img = new Image();
            img.onload = checkAllLoaded;
            img.onerror = checkAllLoaded; // Still proceed even if image fails
            img.src = src;
        });

        // Also set a maximum timeout in case images never load
        setTimeout(() => {
            if (!imagesLoaded) {
                setIsLoading(false);
            }
        }, minimumLoadTime + 2000);
        
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen key="loading" onLoadComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            {!isLoading && (
                <div
                    className="min-h-screen hero-gradient relative overflow-hidden"
                    style={{
                        backgroundImage: `url(${tidalBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    {/* Custom Firefly Cursor */}
                    <div 
                        className="firefly-cursor"
                        style={{
                            left: `${cursorPosition.x}px`,
                            top: `${cursorPosition.y}px`
                        }}
                    />

                    <div className="absolute inset-0 bg-tidal-deep/70 backdrop-blur-[1px]" />

                    {/* Navigation */}
                    <div className="relative z-30">
                        <Navbar dark />
                    </div>

                    {/* Hero Section */}
                    <div className="relative z-20">
                        <Hero />
                    </div>
                </div>
            )}
        </>
    );
};

export default HackathonF25;