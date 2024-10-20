import Hero from "./Hero/Hero";
import About from "./About";
import WhatWeDo from "./WhatWeDo";
import Officers from "./Officers";
import Navbar from "../Navbar";
import PhotoGallery from "./PhotoGallery";
import Footer from "../Footer";

import "animate.css"

export default function Home() {
    return (
        <>
            <div className="flex flex-col h-full">
                <Navbar />
                <Hero />
            </div>
            <About />
            <WhatWeDo />
            <Officers/>
            <PhotoGallery/>
            <Footer />
        </>
    );
}
