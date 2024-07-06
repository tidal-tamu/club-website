import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import About from "./About";

export default function Hackathon() {
    return (
        <>
            <div className="flex flex-col h-full">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Footer />
        </>
    );
}
