import { useState } from "react";
import Navbar from "../HackathonS26/Navbar";
import Hero from "../HackathonS26/Hero";
import Footer from "../Footer";
import heroBackground from "/s26/s26-hero.svg";
import "./tidal-effects.css";
import { Link } from "react-router-dom";

const HackathonS26 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <Navbar dark onMenuToggle={setIsMobileMenuOpen} />
        </div>

        {/* Penguin cover image - bottom left corner - responsive sizing */}
        <img
          src="/s26/PenguinCoverSidIsBadAtCoding.png"
          alt="Penguin Cover"
          className={`absolute bottom-0 left-0 z-40 pointer-events-none w-[200px] sm:w-[250px] md:w-[300px] lg:w-[380px] xl:w-[442px] h-auto transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0 md:opacity-100" : "opacity-100"
            }`}
        />

        {/* Snowman graphic - static on mobile, clickable on larger screens */}
        <Link
          to="/register"
          className={`flex absolute right-4 sm:right-8 z-30 cursor-pointer transition-all duration-200 group inline-block ${isMobileMenuOpen ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100"
            } pointer-events-none sm:pointer-events-auto`}
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
        style={{ backgroundColor: "#76A4C5" }}
      >
        <Footer variant="hackathon-spring-26" />
      </div>
    </div>
  );
};

export default HackathonS26;
