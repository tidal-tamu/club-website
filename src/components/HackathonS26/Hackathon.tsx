import { useState } from "react";
import Navbar from "../HackathonS26/Navbar";
import Hero from "../HackathonS26/Hero";
import Footer from "../Footer";
import "./tidal-effects.css";
import { Link } from "react-router-dom";

const HackathonS26 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
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
        style={{ backgroundColor: "#6fa7cf" }}
      >
        <Footer variant="hackathon-spring-26" />
      </div>
    </div>
  );
};

export default HackathonS26;
