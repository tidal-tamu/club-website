import Hero from "./Hero/Hero";
import About from "./About";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Headroom from "react-headroom";

export default function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Headroom>
                    <Navbar />
                </Headroom>
                <Hero />
            </div>
            <About />
            <Footer />
        </>
    );
}
