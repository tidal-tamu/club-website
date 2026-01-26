import { useState, useEffect } from "react";
import Navbar from "../HackathonS26/Navbar";
import Hero from "../HackathonS26/Hero";
import About from "../HackathonS26/About";
import Footer from "../Footer";
import "./tidal-effects.css";
import { Link } from "react-router-dom";

const HackathonS26 = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        // Snow animation starts immediately when component mounts
        // Text animations start after a short delay
        const timer = setTimeout(() => {
            setShouldAnimate(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="hackathon-s26-container min-h-screen">
            {/* Background stays visible - no animation */}
            <div
                className="hero-gradient relative overflow-x-clip overflow-y-visible"
                style={{
                    backgroundColor: "#6fa7cf",
                }}
            >
                {/* Navbar - visible immediately, only text animates */}
                <div className="relative z-30">
                    <Navbar dark onMenuToggle={setIsMobileMenuOpen} shouldAnimate={shouldAnimate} />
                </div>

                {/* Snowman graphic - visible immediately */}
                <Link
                    to="/register"
                    className={`hidden sm:flex absolute right-4 sm:right-8 z-30 !cursor-pointer transition-all duration-200 ${
                        isMobileMenuOpen
                            ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
                            : "opacity-100"
                    }`}
                    style={{ bottom: "6vh" }}
                >
                    <div className="snowman-container">
                        <img
                            src="/s26/snowman.png"
                            alt="Snowman"
                            className="w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 object-contain opacity-90 hover:opacity-100 transition-opacity duration-200 block cursor-pointer"
                        />
                    </div>
                </Link>

                {/* Hero - background visible, only text animates */}
                <div className="relative z-20">
                    <Hero shouldAnimate={shouldAnimate} />
                </div>
            </div>

            {/* About Section - Snowy path with animated skier */}
            <About />

            {/* Footer - visible immediately, only text animates on scroll */}
            <div
                className="relative z-20"
                style={{ backgroundColor: "#6fa7cf" }}
            >
                <Footer variant="hackathon-spring-26" />
            </div>
        </div>
    );
};

export default HackathonS26;
