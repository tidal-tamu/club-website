import Navbar from "../Navbar";
import Hero from "./Hero";
import Footer from "../Footer";
import PastSponsors from "./PastSponsors";

export default function Hackathon() {
    return (
        <>
            <div className="flex flex-col h-full">
                <Navbar />
                <Hero />
            </div>
            <PastSponsors />
            <div className="bg-lightBlue">
                <Footer />
            </div>
        </>
    );
}