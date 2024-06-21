import Hero from "./Hero/Hero";
import About from "./About";
import WhatWeDo from "./WhatWeDo";
import Navbar from "../Navbar";

export default function Home() {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar />
                <Hero />
            </div>
            <About />
            <WhatWeDo />
        </>
    );
}
