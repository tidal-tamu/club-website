import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import About from "./About";
import Schedule from "./Schedule/Schedule";
import Prizes from "../Prizes/Prizes";
import FAQ from "./FAQ/FAQ";
import Sponsors from "./Sponsors";

export default function Hackathon() {
    return (
        <>
            <div className="flex flex-col h-full">
                <Navbar />
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
