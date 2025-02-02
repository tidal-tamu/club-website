import Navbar from "../Navbar";
import Hero from "./Hero";
import Footer from "../Footer";
import PastSponsors from "./PastSponsors";
import Headroom from "react-headroom";

export default function SponsorUs() {
    return (
        <>
            <div className="flex flex-col h-full min-h-[600px]">
                <Headroom>
                    <Navbar />
                </Headroom>
                <div className="mt-12">
                    <Hero />
                </div>
            </div>
            <PastSponsors />
            <div className="bg-lightBlue">
                <Footer />
            </div>
        </>
    );
}