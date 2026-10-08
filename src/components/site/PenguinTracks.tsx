import { useEffect, useRef } from "react";
import gsap from "gsap";

/** A tapered toe, pointing up from the heel pad. */
const toe = (len: number) => `M-1.9,1 L-0.8,${-len + 2} Q0,${-len} 0.8,${-len + 2} L1.9,1 Z`;

/**
 * One webbed, three-toed print, toes pointing up (-y) with the heel at the
 * origin. The webbing between the toes is what makes it read as a penguin
 * rather than a bird (or an arrow). The inner toe is shorter than the outer
 * one, so a right foot is a mirrored left foot rather than a copy.
 */
function Print({ x, y, rot, s, left }: { x: number; y: number; rot: number; s: number; left: boolean }) {
    return (
        <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${left ? s : -s} ${s})`}>
            <g className="print">
                <path className="print-web" d="M0,4 L-12.2,-7.2 Q-5,-9 0,-17 Q5,-9 10.8,-6.8 Z" />
                <ellipse className="print-heel" cx={0} cy={3} rx={3.2} ry={2.8} />
                <path className="print-toe" d={toe(17)} />
                <path className="print-toe" d={toe(14.2)} transform="rotate(-59)" />
                <path className="print-toe" d={toe(12.8)} transform="rotate(57)" />
                <path className="print-claw" d="M0,-17.5 L0,-20.5 M-12.6,-7.6 L-15.2,-9.1 M11.2,-7.2 L13.6,-8.5" />
            </g>
        </g>
    );
}

type Step = { x: number; y: number; rot: number; s: number; left: boolean };

/**
 * Pebble's walk from the waterline up to the bench, in ShoreArt's 1600x1000
 * viewBox. Travel direction comes from the path's tangent; each foot sits to
 * its own side of the line and toes out, the way penguins waddle.
 */
const STEPS: Step[] = (() => {
    const N = 18;
    const at = (t: number) => ({
        x: 430 + 700 * t,
        y: 752 + 200 * (0.35 * t + 0.65 * t * t) + 14 * Math.sin(Math.PI * 1.8 * t),
    });
    const out: Step[] = [];
    for (let i = 0; i < N; i++) {
        const t = i / (N - 1);
        const p = at(t);
        const q = at(Math.min(1, t + 0.01));
        const r = at(Math.max(0, t - 0.01));
        const heading = Math.atan2(q.y - r.y, q.x - r.x);
        const left = i % 2 === 0;
        // left of travel is the heading turned -90deg (screen y points down)
        const side = heading + (left ? -Math.PI / 2 : Math.PI / 2);
        out.push({
            x: Math.round(p.x + Math.cos(side) * 9),
            y: Math.round(p.y + Math.sin(side) * 9),
            // local toes point along -y, so add 90deg; then toe out
            rot: Math.round((heading * 180) / Math.PI + 90 + (left ? -16 : 16)),
            // further up the beach is further away
            s: Number((0.95 + 0.3 * t).toFixed(2)),
            left,
        });
    }
    return out;
})();

export default function PenguinTracks() {
    const ref = useRef<SVGGElement>(null);

    useEffect(() => {
        const g = ref.current;
        if (!g) return;
        const prints = g.querySelectorAll<SVGGElement>(".print");

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            gsap.set(prints, { opacity: 1 });
            return;
        }

        gsap.set(prints, { opacity: 0, scale: 0.7, transformOrigin: "50% 80%" });

        // pressed in one at a time, then the tide washes the trail out from the water end
        const tl = gsap
            .timeline({ repeat: -1, repeatDelay: 1.4, delay: 0.6, paused: true })
            .to(prints, { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out", stagger: 0.26 })
            .to(prints, { opacity: 0, duration: 0.9, ease: "power1.inOut", stagger: 0.07 }, "+=3.2");

        // no point animating a trail nobody can see
        const io = new IntersectionObserver(([e]) => (e.isIntersecting ? tl.play() : tl.pause()));
        io.observe(g.ownerSVGElement ?? g);

        return () => {
            io.disconnect();
            tl.kill();
        };
    }, []);

    return (
        <g ref={ref} className="tracks">
            {STEPS.map((s, i) => (
                <Print key={i} {...s} />
            ))}
        </g>
    );
}
