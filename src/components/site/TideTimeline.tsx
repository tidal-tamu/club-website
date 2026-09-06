import { useEffect, useRef } from "react";
import gsap from "gsap";
import { events, HackEvent } from "../../data/tidal";
import { waveD, waveLine, waveY } from "../../lib/wave";

/** The wave's mean line sits at y=40 in a 180-tall viewBox. */
const BASE = 40;
const AMP = 13;

function Thumb({ e }: { e: HackEvent }) {
    if (e.art === "s25") {
        return (
            <div className="thumb thumb-s25">
                <img className="bigstar" src="/icons/shapes/8star.png" alt="" />
                <span className="s25-title">
                    <em>TIDAL</em>
                    <em>HACK</em>
                    <b>2025</b>
                </span>
            </div>
        );
    }
    if (e.art === "f25") {
        return (
            <div className="thumb thumb-f25">
                <img className="jungle" src="/f25/tidal-background.png" alt="" />
                <img className="gem gem-a" src="/f25/static/blue_gem.png" alt="" />
                <img className="gem gem-b" src="/f25/static/green_gem.png" alt="" />
                <img className="wordmark" src="/f25/hero.png" alt={e.name} />
            </div>
        );
    }
    return (
        <div className="thumb">
            {e.img ? (
                <img className={e.fit ?? "cover"} src={e.img} alt={e.name} />
            ) : (
                <span className="pending">Artwork to come</span>
            )}
        </div>
    );
}

/**
 * Past hackathons as nodes on a live wave. Stems of differing length seat each
 * card at a different height, and every dot's vertical offset is sampled from
 * the same wave function at its own x — so they bob independently.
 */
export default function TideTimeline() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const fillRef = useRef<SVGPathElement>(null);
    const lineRef = useRef<SVGPathElement>(null);
    const backRef = useRef<SVGPathElement>(null);
    const dotsRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // where each dot sits across the viewport, so it can ride the full-bleed wave
        let fracs: number[] = [];
        const measure = () => {
            fracs = dotsRef.current.map((d) => {
                if (!d) return 0.5;
                const r = d.getBoundingClientRect();
                return (r.left + r.width / 2) / window.innerWidth;
            });
        };

        const paint = (t: number) => {
            const ph = t * 0.5;
            lineRef.current?.setAttribute("d", waveLine(BASE, AMP, ph));
            fillRef.current?.setAttribute("d", waveD(BASE, AMP, ph, 180));
            backRef.current?.setAttribute("d", waveLine(BASE + 10, AMP * 1.3, ph + 1.7));
            dotsRef.current.forEach((d, i) => {
                if (!d) return;
                const y = waveY(BASE, AMP, ph, fracs[i] ?? 0.5) - BASE;
                d.style.transform = `translateY(${y.toFixed(2)}px)`;
            });
        };

        measure();
        paint(0);

        // layout settles after the intro unlocks scrolling, so watch for changes
        const ro = new ResizeObserver(measure);
        if (wrapRef.current) ro.observe(wrapRef.current);
        window.addEventListener("resize", measure);

        let clock = 0;
        const tick = () => {
            clock += 0.016;
            paint(clock);
        };
        if (!reduce) gsap.ticker.add(tick);

        return () => {
            gsap.ticker.remove(tick);
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, []);

    return (
        <div className="wrap tideline" ref={wrapRef}>
            <div className="tl-nodes">
                {events.map((e, i) => (
                    <a
                        className="tl-node rv"
                        key={e.term}
                        href={e.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="tl-card">
                            <Thumb e={e} />
                            <div className="body">
                                <span className="term label">{e.term}</span>
                                <div className="name">{e.name}</div>
                                <span className="go">Visit site &#8599;</span>
                            </div>
                        </div>
                        <span className="tl-stem" style={{ height: e.lift }} />
                        <span
                            className="tl-dot"
                            ref={(el) => {
                                dotsRef.current[i] = el;
                            }}
                        />
                    </a>
                ))}
            </div>

            <svg
                className="tl-wave"
                viewBox="0 0 1200 180"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="tidal-tlfill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#00569E" stopOpacity={0.2} />
                        <stop offset="1" stopColor="#706993" stopOpacity={0.02} />
                    </linearGradient>
                </defs>
                <path ref={fillRef} fill="url(#tidal-tlfill)" />
                <path
                    ref={backRef}
                    fill="none"
                    stroke="#706993"
                    strokeOpacity={0.28}
                    strokeWidth={1.5}
                />
                <path
                    ref={lineRef}
                    fill="none"
                    stroke="#00569E"
                    strokeOpacity={0.6}
                    strokeWidth={2}
                />
            </svg>
        </div>
    );
}
