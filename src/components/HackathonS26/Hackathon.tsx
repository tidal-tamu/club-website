import Navbar from "../HackathonS26/Navbar";
import Hero from "../HackathonS26/Hero";
import Footer from "../Footer";
import heroBackground from "/s26/s26-hero.svg";
import "./tidal-effects.css";

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
