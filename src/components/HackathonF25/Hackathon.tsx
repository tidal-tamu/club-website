import Navbar from "../HackathonF25/Navbar";
import Hero from "../HackathonF25/Hero";
import tidalBackground from "/f25/tidal-background.png";
import "./tidal-effects.css";
import { useEffect } from "react";

const HackathonF25 = () => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div
            className="min-h-screen hero-gradient relative overflow-hidden"
            style={{
                backgroundImage: `url(${tidalBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
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
    );
};

export default HackathonF25;