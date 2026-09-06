import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Intro from "../site/Intro";
import SiteNav from "../site/SiteNav";
import ShoreArt from "../site/ShoreArt";
import Hero from "../site/Hero";
import TideTimeline from "../site/TideTimeline";
import WaveDivider from "../site/WaveDivider";
import Pillars from "../site/Pillars";
import Team from "../site/Team";
import Sponsors from "../site/Sponsors";
import SiteFooter from "../site/SiteFooter";
import { useSiteMotion } from "../site/useSiteMotion";

const prefersReduced = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Home() {
    const rootRef = useRef<HTMLDivElement>(null);
    // reduced motion skips the intro entirely and shows the page immediately
    const [reduce] = useState(prefersReduced);
    const [revealed, setRevealed] = useState(reduce);
    const [introDone, setIntroDone] = useState(reduce);

    // page-level styling lives on <body> so the fixed overlay and grain can cover
    // the viewport; scoped to this route by a class rather than a global rule
    useEffect(() => {
        document.body.classList.add("tidal-page");
        return () => document.body.classList.remove("tidal-page");
    }, []);

    // hold the scroll position while the tide is still going out
    useEffect(() => {
        document.body.style.overflow = introDone ? "" : "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [introDone]);

    // unlocking scroll changes the document height, so re-measure the triggers
    useEffect(() => {
        if (introDone) ScrollTrigger.refresh();
    }, [introDone]);

    useSiteMotion(rootRef, revealed);

    return (
        <div className="tidal" ref={rootRef}>
            {!introDone && (
                <Intro
                    onReveal={() => setRevealed(true)}
                    onFinish={() => setIntroDone(true)}
                />
            )}

            <SiteNav />

            <main>
                <section className="surface">
                    <ShoreArt className="shore-hero" />
                    <Hero />
                    <TideTimeline />
                </section>

                <WaveDivider base={48} amp={9} fill="#0F3355" />

                <div className="descent">
                    <Pillars />
                    <Team />
                    <Sponsors />
                    <SiteFooter />
                </div>
            </main>
        </div>
    );
}
