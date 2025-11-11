import Navbar from "./Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import About from "./About";
import Schedule from "../Schedule/Schedule";
import Prizes from "./Prizes/Prizes";
import FAQ from "./FAQ/FAQ";
import Sponsors from "./Sponsors";
import Headroom from "react-headroom";
import { useEffect } from "react";

export default function Hackathon() {
    useEffect(() => {
        document.body.style.backgroundColor = "#121111";
    }, []);

    return (
        <>
            <div className="bg-spaceBlack bg-[url('/stars.svg')] relative z-10 flex flex-col h-full min-h-[600px] overflow-hidden">
                <Headroom>
                    <Navbar dark />
                </Headroom>
                <Hero />
            </div>
            <div className="bg-spaceBlack bg-[url('/stars.svg')] overflow-hidden">
                <About />
                <Schedule />
                <Prizes />
                <FAQ />
                <Sponsors />
                <Footer variant="hackathon-spring-25" />
            </div>
        </>
    );
}
