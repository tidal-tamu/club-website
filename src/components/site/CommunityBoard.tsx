import { CSSProperties } from "react";
import { board, Snapshot } from "../../data/tidal";
import SectionHead from "./SectionHead";

/*
 * Desktop layout, generated from the photo counts. Every number is a
 * percentage of the board's width (vertical ones too, via cqw), so the whole
 * board scales as one piece.
 *
 * The hackathon prints are strewn along an L: down the right-hand side, then
 * right to left along the bottom. Each one lands somewhere across the arm's
 * width, at its own size, crop, tilt and stacking order, so nothing lines up.
 * More photos make the right-hand arm longer. The workshop prints are strewn
 * through the L's inner corner the same way.
 */
/** room above the first prints for the pinned labels */
const TOP = 3.5;
/** typical print width */
const BASE = 24;
/** how wide each arm of the L is */
const ARM = 28;
/** along the L, prints this far apart overlap their neighbours */
const SPACING = BASE * 0.55;
const ASPECTS = [4 / 3, 3 / 2, 5 / 4, 1, 4 / 3, 3 / 2];
/** the photo plus its white border, roughly */
const printH = (w: number, ar: number) => w / ar + 1.2;

/** Deterministic 0..1 noise, so the mess is identical on every visit. */
const hash = (n: number) => {
    const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
    return x - Math.floor(x);
};
const jitter = (seed: number, amp: number) => (hash(seed) * 2 - 1) * amp;
/** a clear tilt either way, never almost-straight */
const tilt = (seed: number) => {
    const r = jitter(seed, 8);
    return Math.abs(r) < 2 ? Math.sign(r || 1) * (2 + Math.abs(r)) : r;
};
const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

type Placed = { x: number; y: number; w: number; ar: number; r: number; pin: number; z: number };

function layoutBoard(nWork: number, nHack: number) {
    // the L's spine: down the right-hand side, then right to left along the bottom
    const spineX = 100 - ARM / 2;
    const across = 100 - ARM;
    const down = Math.max(ARM * 1.4, nHack * SPACING - across);
    const top = TOP + ARM * 0.35;
    const cornerY = top + down;
    const total = down + across;

    const hack: Placed[] = Array.from({ length: nHack }, (_, i) => {
        const s = 100 + i * 11;
        const d = clamp(((i + 0.5) / nHack) * total + jitter(s, SPACING * 0.3), 0, total);
        const onDown = d < down;
        const cx = onDown ? spineX : spineX - (d - down);
        const cy = onDown ? top + d : cornerY;
        const ar = ASPECTS[Math.floor(hash(s + 6) * ASPECTS.length)];
        const w = BASE * (0.82 + hash(s + 5) * 0.42);
        const h = printH(w, ar);
        // strewn across the arm's width, a little along it
        const across_ = jitter(s + 1, ARM * 0.3);
        const along = jitter(s + 2, SPACING * 0.25);
        return {
            x: clamp(cx + (onDown ? across_ : along) - w / 2, -1, 101 - w),
            y: Math.max(TOP, cy + (onDown ? along : across_) - h / 2),
            w,
            ar,
            r: tilt(s + 3),
            pin: 30 + hash(s + 4) * 40,
            z: 1 + Math.floor(hash(s + 7) * 9),
        };
    });

    // the inner corner, with a gap to the arms so the two groups read apart
    const regionW = 100 - ARM - 13;
    const regionBottom = cornerY - ARM * 0.55;
    const mid = (TOP + regionBottom) / 2;
    const work: Placed[] = Array.from({ length: nWork }, (_, i) => {
        const s = 300 + i * 11;
        const ar = ASPECTS[Math.floor(hash(s + 6) * ASPECTS.length)];
        const w = BASE * 1.15 * (0.85 + hash(s + 5) * 0.35);
        const h = printH(w, ar);
        const cx = ((i + 0.5) / nWork) * regionW + jitter(s + 1, (regionW / nWork) * 0.22);
        const cy = mid + (i % 2 ? 1 : -1) * (regionBottom - TOP) * 0.16 + jitter(s + 2, 2.5);
        return {
            x: clamp(cx - w / 2, 0, regionW + 3 - w),
            y: clamp(cy - h / 2, TOP, regionBottom + 4 - h),
            w,
            ar,
            r: tilt(s + 3),
            pin: 30 + hash(s + 4) * 40,
            z: 1 + Math.floor(hash(s + 7) * 9),
        };
    });

    const height = Math.max(...[...hack, ...work].map((p) => p.y + printH(p.w, p.ar))) + 3;
    return { hack, work, height, tagX: spineX - 9 };
}

const PINS = ["#00569e", "#0b0e13", "#4da3e8"];

function Print({ p, at, i }: { p: Snapshot; at: Placed; i: number }) {
    const style = {
        "--x": at.x,
        "--y": at.y,
        "--w": at.w,
        "--ar": at.ar,
        "--z": at.z,
        "--r": `${at.r}deg`,
        "--pin-x": `${at.pin}%`,
        "--pin": PINS[i % PINS.length],
    } as CSSProperties;
    return (
        <div className="snap" style={style}>
            <img src={p.src} alt={p.alt} width={1000} height={750} loading="lazy" decoding="async" />
        </div>
    );
}

/** Community: one full-width mood board. Workshops nest inside the hackathon L. */
export default function CommunityBoard() {
    const { hack, work, height, tagX } = layoutBoard(board.workshops.length, board.hackathons.length);

    return (
        <section className="section community" id="community" aria-labelledby="community-title">
            <div className="wrap">
                <SectionHead title="Community" id="community-title" />
            </div>

            <div className="board-wrap">
                <div className="board rv" style={{ "--h": height } as CSSProperties}>
                    <figure className="cluster">
                        <figcaption className="cluster-tag" style={{ "--x": 2, "--y": 0 } as CSSProperties}>
                            Workshops
                        </figcaption>
                        {board.workshops.map((p, i) => (
                            <Print p={p} at={work[i]} i={i} key={p.src} />
                        ))}
                    </figure>
                    <figure className="cluster">
                        <figcaption className="cluster-tag" style={{ "--x": tagX, "--y": 0 } as CSSProperties}>
                            Hackathons
                        </figcaption>
                        {board.hackathons.map((p, i) => (
                            <Print p={p} at={hack[i]} i={i + 1} key={p.src} />
                        ))}
                    </figure>
                </div>
            </div>
        </section>
    );
}
