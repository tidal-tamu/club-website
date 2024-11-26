import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import About from "./About";
import Schedule from "./Schedule/Schedule";
import Prizes from "./Prizes/Prizes";
import FAQ from "./FAQ/FAQ";
import Sponsors from "./Sponsors";
import Headroom from "react-headroom";

export default function Hackathon() {
    return (
        <>
            <div className="relative z-10 sm:pt-12 flex flex-col h-full">
                <Headroom>
                    <Navbar />
                </Headroom>
                <Hero />
            </div>
            <About />
            <Schedule />
            <Prizes />
            <FAQ />
            <Sponsors />
            <Footer />
        </>
    );
}
