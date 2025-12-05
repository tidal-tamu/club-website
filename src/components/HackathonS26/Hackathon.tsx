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

                {/* Penguin cover image - bottom left corner */}
                <img
                    src="/s26/PenguinCoverSidIsBadAtCoding.png"
                    alt="Penguin Cover"
                    className="absolute bottom-0 left-0 z-40 pointer-events-none"
                    style={{ width: '30.69vw', height: '23.07vh' }}
                />

                {/* Snowman button on the right side */}
                <Link
                    to="/register"
                    className="absolute bottom-36 right-44 z-30 cursor-pointer transition-all duration-200 hover:scale-105 group inline-block"
                >
                    <img
                        src="/s26/snowman.png"
                        alt="Snowman"
                        className="w-48 h-48 md:w-60 md:h-60 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 group-hover:animate-jiggle block"
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
