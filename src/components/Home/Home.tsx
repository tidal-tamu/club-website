import Hero from "./Hero/Hero";
import About from "./About";
import Officers from "./Officers/Officers";
import Sponsor from "./Sponsor";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Headroom from "react-headroom";
import WhatWeDo from "./WhatWeDo";

import "animate.css";

export default function Home() {
    return (
        <>
            <div className="flex flex-col min-h-[845px] h-full">
                <Headroom>
                    <Navbar />
                </Headroom>
                <Hero />
            </div>
            <About />
            <WhatWeDo />
            <Officers />
            <Sponsor />
            <Footer variant="home" />
        </>
    );
}
