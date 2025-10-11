import Navbar from "../HackathonF25/Navbar";
import Hero from "../HackathonF25/Hero";
import LoadingScreen from "./LoadingScreen";
import tidalBackground from "/f25/tidal-background.png";
import tidalHeroText from "/f25/hero.png";
import lightImage from "/f25/Light.png";
import "./tidal-effects.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const HackathonF25 = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        document.body.style.backgroundColor = "#121111";
        
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        let browserLoaded = false;
        let imagesLoaded = false;
        let minimumTimeElapsed = false;
        const minimumLoadTime = 3000; // 3 seconds after browser finishes loading

        const checkCanFinish = () => {
            if (browserLoaded && imagesLoaded && minimumTimeElapsed) {
                setLoadingProgress(100);
                // Short delay to show 100% before hiding
                setTimeout(() => setIsLoading(false), 500);
            }
        };

        // Wait for browser to finish loading (Safari loading bar completion)
        const handleWindowLoad = () => {
            browserLoaded = true;
            setLoadingProgress(50); // Browser loaded, show 50% progress
            
            // Start minimum timer only after browser loads
            setTimeout(() => {
                minimumTimeElapsed = true;
                setLoadingProgress(prev => Math.max(prev, 90)); // Minimum time elapsed
                checkCanFinish();
            }, minimumLoadTime);
            
            checkCanFinish();
        };

        // Check if browser already loaded (in case this runs after load event)
        if (document.readyState === 'complete') {
            handleWindowLoad();
        } else {
            window.addEventListener('load', handleWindowLoad);
        }

        // Preload critical images
        const imagesToLoad = [tidalBackground, tidalHeroText, lightImage];
        let loadedCount = 0;

        const checkImageLoaded = () => {
            loadedCount++;
            const imageProgress = (loadedCount / imagesToLoad.length) * 40; // Images contribute up to 40% progress
            setLoadingProgress(prev => Math.max(prev, imageProgress));
            
            if (loadedCount === imagesToLoad.length) {
                imagesLoaded = true;
                setLoadingProgress(prev => Math.max(prev, 80)); // Images loaded
                checkCanFinish();
            }
        };

        imagesToLoad.forEach((src) => {
            const img = new Image();
            img.onload = checkImageLoaded;
            img.onerror = checkImageLoaded; // Still proceed even if image fails
            img.src = src;
        });

        // Safety timeout - force finish after 8 seconds total
        const safetyTimeout = setTimeout(() => {
            console.log('Safety timeout triggered - forcing load completion');
            browserLoaded = true;
            imagesLoaded = true;
            minimumTimeElapsed = true;
            setLoadingProgress(100);
            setTimeout(() => setIsLoading(false), 500);
        }, 8000);
        
        return () => {
            document.body.style.overflow = "unset";
            document.body.style.backgroundColor = "";
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('load', handleWindowLoad);
            clearTimeout(safetyTimeout);
        };
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen 
                        key="loading" 
                        progress={loadingProgress}
                    />
                )}
            </AnimatePresence>

            {!isLoading && (
                <div
                    className="hackathon-f25-container min-h-screen hero-gradient relative overflow-hidden"
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