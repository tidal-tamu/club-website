import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";

export default function Hackathon() {
    return (
        <>
            <div className="flex flex-col h-full">
                <Navbar />
                <Hero />
            </div>
            <Footer />
        </>
    );
}
