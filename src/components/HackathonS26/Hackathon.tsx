import Navbar from "../HackathonS26/Navbar";
import Hero from "../HackathonS26/Hero";
import Footer from "../Footer";
import heroBackground from "/s26/s26-hero.svg";
import "./tidal-effects.css";
import { Link } from "react-router-dom";

const HackathonS26 = () => {

    return (
        <div className="hackathon-s26-container min-h-screen">
            <div
                className="hero-gradient relative overflow-hidden"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="relative z-30">
                    <Navbar dark />
                </div>

                {/* Penguin cover image - bottom left corner - responsive sizing */}
                <img
                    src="/s26/PenguinCoverSidIsBadAtCoding.png"
                    alt="Penguin Cover"
                    className="absolute bottom-0 left-0 z-40 pointer-events-none w-[200px] sm:w-[250px] md:w-[300px] lg:w-[380px] xl:w-[442px] h-auto"
                />

                {/* Snowman button on the right side - responsive positioning */}
                <Link
                    to="/register"
                    className="absolute bottom-20 right-20 sm:bottom-24 sm:right-28 md:bottom-28 md:right-36 lg:bottom-36 lg:right-44 xl:bottom-36 xl:right-44 z-30 cursor-pointer transition-all duration-200 hover:scale-105 group inline-block"
                >
                    <img
                        src="/s26/snowman.png"
                        alt="Snowman"
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-60 xl:h-60 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 group-hover:animate-jiggle block"
                    />
                </Link>

                <div className="relative z-20">
                    <Hero />
                </div>
            </div>

            <div 
                className="relative z-20"
                style={{ backgroundColor: "#76A4C5" }}
            >
                <Footer variant="hackathon-spring-26" />
            </div>
        </div>
    );
};

export default HackathonS26;
