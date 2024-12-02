import Hero from "./Hero/Hero";
import About from "./About";
import WhatWeDo from "./WhatWeDo";
import Officers from "./Officers/Officers";
import Navbar from "../Navbar";
import PhotoGallery from "./PhotoGallery";
import Footer from "../Footer";
import Headroom from "react-headroom";

import "animate.css"

export default function Home() {
    return (
        <>
            <div className="sm:pt-12 flex flex-col min-h-[700px] lg:min-h-[845px] h-full">
                <Headroom>
                    <Navbar />
                </Headroom>
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
