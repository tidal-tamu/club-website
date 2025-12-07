import { useState, useEffect } from "react";
import Navbar from "../HackathonS26/Navbar";
import Hero from "../HackathonS26/Hero";
import Footer from "../Footer";
import LoadingScreen from "./LoadingScreen";
import "./tidal-effects.css";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const HackathonS26 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(() => {
    // Check if page has already loaded in this session
    return sessionStorage.getItem('s26-page-loaded') !== 'true';
  });
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Store original values
    const originalOverflow = document.body.style.overflow;
    const originalBackgroundColor = document.body.style.backgroundColor;

    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "#6fa7cf";
    document.body.style.cursor = "default";
    // Override cursor for all elements on this page
    const style = document.createElement('style');
    style.setAttribute('data-cursor-override', 'true');
    style.textContent = `
      * {
        cursor: default !important;
      }
      button, a, input, select, label {
        cursor: pointer !important;
      }
    `;
    document.head.appendChild(style);

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
        setTimeout(() => {
          sessionStorage.setItem('s26-page-loaded', 'true');
          setIsLoading(false);
        }, 500);
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

    // Key images to preload for S26
    const imagesToLoad = [
      "/s26/Hero/BackBushes.png",
      "/s26/Hero/TopHill.png",
      "/s26/Hero/LowHill.png",
      "/s26/Hero/LowSnowPreShadowed.png",
      "/s26/Hero/TreesPreShadowed.png",
      "/s26/pebble.gif",
      "/s26/PenguinCover.png",
      "/s26/snowman.png",
    ];
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
      setTimeout(() => {
        sessionStorage.setItem('s26-page-loaded', 'true');
        setIsLoading(false);
      }, 500);
    }, 8000);

    return () => {
      // Restore original values
      document.body.style.overflow = originalOverflow;
      document.body.style.backgroundColor = originalBackgroundColor;
      document.body.style.cursor = "";
      // Remove cursor override style
      const styleElement = document.head.querySelector('style[data-cursor-override]');
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
      window.removeEventListener("load", handleWindowLoad);
      clearInterval(progressInterval);
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" progress={loadingProgress} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="hackathon-s26-container min-h-screen">
          <div
            className="hero-gradient relative overflow-hidden"
            style={{
              backgroundColor: "#6fa7cf",
            }}
          >
            <div className="relative z-30">
              <Navbar dark onMenuToggle={setIsMobileMenuOpen} />
            </div>

            {/* Snowman graphic - static on mobile, clickable on larger screens */}
            <Link
              to="/register"
              className={`hidden sm:flex absolute right-4 sm:right-8 z-30 cursor-pointer transition-all duration-200 group inline-block ${isMobileMenuOpen ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100"
                } cursor-pointer`}
              style={{ bottom: '6vh' }}
            >
              <img
                src="/s26/snowman.png"
                alt="Snowman"
                className="w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 object-contain opacity-90 hover:opacity-100 transition-opacity duration-200 group-hover:animate-jiggle block"
              />
            </Link>

            <div className="relative z-20">
              <Hero />
            </div>
          </div>

          <div
            className="relative z-20"
            style={{ backgroundColor: "#6fa7cf" }}
          >
            <Footer variant="hackathon-spring-26" />
          </div>
        </div>
      )}
    </>
  );
};

export default HackathonS26;
