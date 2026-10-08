import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Intro from "../site/Intro";
import SiteNav from "../site/SiteNav";
import Hero from "../site/Hero";
import About from "../site/About";
import MetricsBar from "../site/MetricsBar";
import TideTimeline from "../site/TideTimeline";
import CommunityBoard from "../site/CommunityBoard";
import Team from "../site/Team";
import Sponsors from "../site/Sponsors";
import SiteFooter from "../site/SiteFooter";
import { useSiteMotion } from "../site/useSiteMotion";

const INTRO_KEY = "tidal:intro-seen";
const NOTICE_KEY = "tidal:tidalbyte-notice-dismissed";

/**
 * The tide wash plays once per browser session, and never under reduced
 * motion. Storage can throw in private modes, in which case it just plays.
 */
function shouldPlayIntro() {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    try {
        return sessionStorage.getItem(INTRO_KEY) !== "1";
    } catch {
        return true;
    }
}

export default function Home() {
    const rootRef = useRef<HTMLDivElement>(null);
    const [playIntro] = useState(shouldPlayIntro);
    const [revealed, setRevealed] = useState(!playIntro);
    const [introDone, setIntroDone] = useState(!playIntro);
    const [showNotice, setShowNotice] = useState(() => {
        try {
            return sessionStorage.getItem(NOTICE_KEY) !== "1";
        } catch {
            return true;
        }
    });

    const dismissNotice = () => {
        setShowNotice(false);
        try {
            sessionStorage.setItem(NOTICE_KEY, "1");
        } catch {
            /* storage unavailable: the notice stays dismissed until this page reloads */
        }
    };

    // page-level styling lives on <body> so the fixed grain can cover the
    // viewport; scoped to this route by a class rather than a global rule
    useEffect(() => {
        document.body.classList.add("tidal-page");
        return () => document.body.classList.remove("tidal-page");
    }, []);

    // the intro reveals the top of the beach, so start there and hold still
    // while the tide is going out
    useEffect(() => {
        if (introDone) return;
        const restore = history.scrollRestoration;
        history.scrollRestoration = "manual";
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
            history.scrollRestoration = restore;
        };
    }, [introDone]);

    // unlocking scroll settles the layout: re-measure every trigger, then honour
    // a #section link the visitor arrived with
    useEffect(() => {
        if (!introDone || !playIntro) return;
        try {
            sessionStorage.setItem(INTRO_KEY, "1");
        } catch {
            /* storage unavailable: the intro will simply play again next time */
        }
        ScrollTrigger.refresh();
        const id = decodeURIComponent(window.location.hash.slice(1));
        if (id) document.getElementById(id)?.scrollIntoView();
    }, [introDone, playIntro]);

    useSiteMotion(rootRef, revealed);

    return (
        <div className="tidal" id="top" ref={rootRef}>
            {!introDone && (
                <Intro onReveal={() => setRevealed(true)} onFinish={() => setIntroDone(true)} />
            )}

            <a className="skip" href="#main">
                Skip to content
            </a>
            {introDone && showNotice && (
                <aside className="tidalbyte-notice" aria-label="tidalBYTE registration announcement">
                    <a className="tidalbyte-notice__link" href="https://f26.tidaltamu.com">
                        <span className="tidalbyte-notice__eyebrow">tidalBYTE '26</span>
                        <strong>Registrations are now open for tidalBYTE 26!</strong>
                        <span className="tidalbyte-notice__action">Explore the event <span aria-hidden="true">↗</span></span>
                    </a>
                    <button className="tidalbyte-notice__close" type="button" aria-label="Dismiss tidalBYTE announcement" onClick={dismissNotice}>
                        <span aria-hidden="true">×</span>
                    </button>
                </aside>
            )}
            <SiteNav />

            <main id="main">
                {/* the sand runs the whole page: shoreline, about, hackathons, the board */}
                <div className="surface">
                    <Hero />
                    <About />
                    <MetricsBar />
                    <TideTimeline />
                    <CommunityBoard />
                    <Team />
                    <Sponsors />
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}
