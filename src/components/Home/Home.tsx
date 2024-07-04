import Hero from "./Hero/Hero";
import About from "./About";
import WhatWeDo from "./WhatWeDo";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Home() {
    return (
        <>
            <div className="flex flex-col h-full">
                <Navbar />
                <Hero />
            </div>
            <About />
            <WhatWeDo />
            <Footer />
        </>
    );
}
