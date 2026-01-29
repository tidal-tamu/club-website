import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Schedule from "./Schedule";
import Prizes from "./Prizes";
import Sponsors from "./Sponsors";
import FAQs from "./FAQs/FAQs";
import Footer from "../Footer";
import "./tidal-effects.css";
import { Link } from "react-router-dom";

const HackathonS26 = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldAnimate(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="hackathon-s26-container min-h-screen overflow-x-hidden w-full">
            <div
                className="hero-gradient relative overflow-x-clip overflow-y-hidden"
                style={{
                    backgroundColor: "#77A5C6",
                }}
            >
                <div className="relative z-30">
                    <Navbar dark onMenuToggle={setIsMobileMenuOpen} shouldAnimate={shouldAnimate} />
                </div>

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
                            width={176}
                            height={176}
                            decoding="async"
                        />
                    </div>
                </Link>

                <div className="relative z-0">
                    <Hero shouldAnimate={shouldAnimate} />
                </div>
            </div>

            <div className="relative w-full h-28 md:h-48 lg:h-64" aria-hidden="true">
                <div className="absolute inset-0 -z-10" style={{ backgroundColor: "#77A5C6" }} />
            </div>

            <About />

            <Schedule />

            <Prizes />

            <Sponsors />

            <FAQs />

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
