import { useEffect, useRef } from "react";
import gsap from "gsap";

const LOGO = "/icons/logos/tidal-blueblack.png";

type Props = {
    /** fired as the overlay starts dissolving, so the page behind can come alive */
    onReveal: () => void;
    /** fired once the overlay is fully gone and can be unmounted */
    onFinish: () => void;
};

/**
 * Current lines running through the body of the water. Each one is the same
 * wave function sampled at a fixed depth below the surface, with its own
 * amplitude, speed and broken dash pattern — so they read as sketched strata
 * rather than a stack of parallel copies.
 */
const STRATA = [
    { off: 5.5, amp: 1.8, sp: 1.0, op: 0.34, dash: "9 7" },
    { off: 10, amp: 1.5, sp: 0.86, op: 0.24, dash: "17 11" },
    { off: 16, amp: 1.25, sp: 1.16, op: 0.19, dash: "5 9" },
    { off: 23, amp: 1.05, sp: 0.72, op: 0.16, dash: "23 14" },
    { off: 32, amp: 0.95, sp: 1.05, op: 0.13, dash: "7 12" },
    { off: 43, amp: 0.85, sp: 0.62, op: 0.11, dash: "31 18" },
    { off: 56, amp: 0.75, sp: 0.94, op: 0.085, dash: "11 16" },
    { off: 71, amp: 0.65, sp: 0.8, op: 0.065, dash: "19 23" },
];

/** Bubbles rise on their own loop and wrap, so the column never empties. */
const BUBBLES = Array.from({ length: 18 }, (_, i) => ({
    x: (i * 37.4) % 100,
    depth: 6 + ((i * 13.7) % 66),
    r: 1.1 + ((i * 7) % 5) * 0.9,
    sp: 0.5 + (i % 5) * 0.18,
    drift: 0.4 + (i % 3) * 0.25,
}));

const BUBBLE_SPAN = 72;

/**
 * Opens fully submerged, then the tide goes out downward and the sand comes up.
 *
 * The waterline is a clip-path on a stationary element rather than a translated
 * layer with a counter-translated logo — that keeps the white logo pixel-locked
 * to the dark one underneath, with no compositing seam between them.
 *
 * The overlay itself is transparent; the page's own sand and shoreline drawing
 * show through, so nothing swaps out when it dissolves.
 */
export default function Intro({ onReveal, onFinish }: Props) {
    const rootRef = useRef<HTMLDivElement>(null);
    const waterRef = useRef<HTMLDivElement>(null);
    const backRef = useRef<SVGPathElement>(null);
    const foamRef = useRef<SVGPathElement>(null);
    const sprayRef = useRef<SVGPathElement>(null);
    const strataRef = useRef<(SVGPathElement | null)[]>([]);
    const bubbleRef = useRef<(SVGEllipseElement | null)[]>([]);

    // latest callbacks without re-running the timeline
    const revealRef = useRef(onReveal);
    const finishRef = useRef(onFinish);
    revealRef.current = onReveal;
    finishRef.current = onFinish;

    useEffect(() => {
        const water = waterRef.current;
        const back = backRef.current;
        const foam = foamRef.current;
        const spray = sprayRef.current;
        if (!water || !back || !foam || !spray) return;

        // p and amp are both percentages of viewport height
        const st = { p: 0, ph: 0 };

        const surface = (p: number, amp: number, phase: number): [number, number][] => {
            const pts: [number, number][] = [];
            for (let i = 0; i <= 48; i++) {
                const f = i / 48;
                pts.push([
                    f * 100,
                    p +
                        amp * Math.sin(phase + f * 10.2) +
                        amp * 0.42 * Math.sin(phase * 1.33 + f * 21.6) +
                        amp * 0.18 * Math.sin(phase * 2.11 + f * 42.6),
                ]);
            }
            return pts;
        };

        const toPath = (pts: [number, number][]) =>
            "M" + pts.map((q) => `${q[0].toFixed(2)},${q[1].toFixed(2)}`).join(" L");

        const draw = () => {
            // the swell breathes, so the crest never looks like a looping ribbon
            const amp = 4.2 + 1 * Math.sin(st.ph * 0.37);
            const pts = surface(st.p, amp, st.ph);

            water.style.clipPath =
                "polygon(" +
                pts.map((q) => `${q[0].toFixed(2)}% ${q[1].toFixed(2)}%`).join(",") +
                ",100% 100%,0% 100%)";

            foam.setAttribute("d", toPath(pts));
            spray.setAttribute("d", toPath(surface(st.p + 1.6, amp * 0.92, st.ph + 0.5)));
            back.setAttribute(
                "d",
                toPath(surface(st.p - 2.6, amp * 1.3, st.ph * 0.82 + 1.9)) +
                    " L100,100 L0,100 Z"
            );

            // current lines through the body of the water
            STRATA.forEach((s, i) => {
                const el = strataRef.current[i];
                if (!el) return;
                el.setAttribute(
                    "d",
                    toPath(surface(st.p + s.off, amp * s.amp * 0.34, st.ph * s.sp + i * 1.3))
                );
            });

            // true circles: the viewBox is stretched, so correct rx/ry per axis
            const rx = 100 / window.innerWidth;
            const ry = 100 / window.innerHeight;
            BUBBLES.forEach((b, i) => {
                const el = bubbleRef.current[i];
                if (!el) return;
                let d = (b.depth - st.ph * b.sp * 2.4) % BUBBLE_SPAN;
                if (d < 0) d += BUBBLE_SPAN;
                el.setAttribute("cx", (b.x + Math.sin(st.ph * 0.6 + i) * b.drift).toFixed(2));
                el.setAttribute("cy", (st.p + 5 + d).toFixed(2));
                el.setAttribute("rx", (b.r * rx).toFixed(3));
                el.setAttribute("ry", (b.r * ry).toFixed(3));
                // fade in from the deep, fade out as they reach the surface
                const near = Math.min(d / 10, 1);
                const far = Math.min((BUBBLE_SPAN - d) / 22, 1);
                el.setAttribute("opacity", (0.5 * near * far).toFixed(3));
            });
        };

        draw();

        const tick = () => {
            st.ph += 0.05;
            draw();
        };
        gsap.ticker.add(tick);

        const ctx = gsap.context(() => {
            gsap
                .timeline({ onComplete: () => finishRef.current() })
                // hold on the submerged logo, then let the tide go out
                .to(st, { p: 118, duration: 2.3, ease: "power2.inOut" }, 0.45)
                // the page underneath is already sand-coloured, so this reads as one
                // continuous motion rather than a cut
                .to(".intro-dry", { scale: 0.94, opacity: 0, duration: 0.85, ease: "power2.inOut" }, 1.5)
                // the root itself, not a selector: context selectors only match descendants
                .to(rootRef.current, { opacity: 0, duration: 0.75, ease: "power2.inOut" }, 1.75)
                .add(() => revealRef.current(), 1.85);
        }, rootRef);

        return () => {
            gsap.ticker.remove(tick);
            ctx.revert();
        };
    }, []);

    return (
        <div className="intro" ref={rootRef} aria-hidden="true">
            <img className="intro-logo intro-dry" src={LOGO} alt="" />

            <div className="intro-water" ref={waterRef}>
                <svg
                    className="intro-texture"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    {STRATA.map((s, i) => (
                        <path
                            key={i}
                            ref={(el) => {
                                strataRef.current[i] = el;
                            }}
                            fill="none"
                            stroke="#fff"
                            strokeOpacity={s.op}
                            strokeWidth={i < 3 ? 1.4 : 1}
                            strokeDasharray={s.dash}
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                            d=""
                        />
                    ))}
                    {BUBBLES.map((_, i) => (
                        <ellipse
                            key={i}
                            ref={(el) => {
                                bubbleRef.current[i] = el;
                            }}
                            fill="none"
                            stroke="#fff"
                            strokeOpacity={0.85}
                            strokeWidth={1}
                            vectorEffect="non-scaling-stroke"
                        />
                    ))}
                </svg>

                <img className="intro-logo" src={LOGO} alt="" />
            </div>

            <svg
                className="intro-crest"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="tidal-crest" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#00569E" />
                        <stop offset="0.52" stopColor="#336699" />
                        <stop offset="1" stopColor="#706993" />
                    </linearGradient>
                </defs>
                <path ref={backRef} fill="url(#tidal-crest)" opacity={0.4} d="" />
                <path
                    ref={sprayRef}
                    fill="none"
                    stroke="rgba(255,255,255,.35)"
                    strokeWidth={1}
                    strokeDasharray="4 10"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    d=""
                />
                <path
                    ref={foamRef}
                    fill="none"
                    stroke="rgba(255,255,255,.6)"
                    strokeWidth={2}
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    d=""
                />
            </svg>
        </div>
    );
}
