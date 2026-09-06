import { useMemo } from "react";

/**
 * Minimal ocean line-art backdrop: horizon, a small island, tide contours
 * receding up the sand, coral fronds and a few fish. Everything is a hairline
 * at 9-15% opacity, so it reads as texture until you look straight at it.
 *
 * The three groups are separate so the motion hook can parallax them at
 * different rates.
 */

const W = 1600;
const H = 900;
const TOP = 300;
const LINES = 22;

function Fish({
    x,
    y,
    s,
    flip,
    op,
}: {
    x: number;
    y: number;
    s: number;
    flip?: boolean;
    op: number;
}) {
    return (
        <g
            transform={`translate(${x},${y}) scale(${flip ? -s : s},${s})`}
            strokeOpacity={op}
            strokeWidth={1.1}
        >
            <path d="M0,0 C8,-9 24,-9 32,0 C24,9 8,9 0,0 Z" />
            <path d="M32,0 L43,-8 L43,8 Z" />
            <path d="M12,-6 C16,-2 16,2 12,6" />
            <circle cx={8} cy={-2} r={1.3} stroke="none" fillOpacity={op} />
        </g>
    );
}

function Coral({ x, y, s, op }: { x: number; y: number; s: number; op: number }) {
    return (
        <g
            transform={`translate(${x},${y}) scale(${s})`}
            strokeOpacity={op}
            strokeWidth={1.2}
        >
            <path d="M0,0 C3,-28 -6,-46 -2,-72" />
            <path d="M-1,-38 C-14,-47 -21,-62 -18,-79" />
            <path d="M-1,-51 C11,-58 17,-70 15,-87" />
            <path d="M-2,-62 C-9,-72 -9,-85 -4,-95" />
        </g>
    );
}

function Island({ x, y, s, op }: { x: number; y: number; s: number; op: number }) {
    return (
        <g
            transform={`translate(${x},${y}) scale(${s})`}
            strokeOpacity={op}
            strokeWidth={1.2}
        >
            <path d="M-124,0 C-98,-27 -53,-41 -14,-39 C23,-37 63,-22 98,0 Z" />
            <path d="M-30,-39 C-28,-59 -26,-71 -24,-81" />
            <path d="M-24,-81 C-38,-89 -51,-87 -59,-79" />
            <path d="M-24,-81 C-10,-91 5,-89 13,-79" />
            <path d="M-24,-81 C-31,-93 -22,-101 -12,-103" />
            <path d="M18,-31 C22,-47 24,-57 26,-65" />
            <path d="M26,-65 C16,-73 6,-72 0,-65" />
            <path d="M26,-65 C38,-73 49,-71 55,-63" />
        </g>
    );
}

export default function ShoreArt({ className = "" }: { className?: string }) {
    const tideLines = useMemo(() => {
        const out: { d: string; op: string; w: number }[] = [];
        for (let i = 0; i < LINES; i++) {
            const t = i / (LINES - 1);
            const y = TOP + 22 + Math.pow(t, 1.35) * (H - TOP - 40);
            const amp = 26 * (1 - t) + 5;
            const ph = i * 0.72;
            let d = `M0,${y.toFixed(1)}`;
            for (let x = 40; x <= W; x += 40) {
                const yy =
                    y +
                    amp * Math.sin(ph + x / 300) +
                    amp * 0.4 * Math.sin(ph * 1.7 + x / 118);
                d += ` L${x},${yy.toFixed(1)}`;
            }
            out.push({
                d,
                op: (0.05 + 0.12 * (1 - t)).toFixed(3),
                w: t > 0.7 ? 1.25 : 1,
            });
        }
        return out;
    }, []);

    const grains = useMemo(
        () =>
            Array.from({ length: 26 }, (_, g) => ({
                cx: Number(((g * 137.5) % W).toFixed(0)),
                cy: Number((TOP + ((g * 71) % (H - TOP))).toFixed(0)),
            })),
        []
    );

    return (
        <div className={`shore ${className}`} aria-hidden="true">
            <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice">
                <g className="par-far">
                    <circle className="sun" cx={1215} cy={196} r={88} />
                    <path d={`M0,${TOP} L${W},${TOP}`} strokeOpacity={0.1} />
                    <Island x={1258} y={TOP} s={1} op={0.15} />
                </g>

                <g className="par-mid">
                    {tideLines.map((l, i) => (
                        <path key={i} d={l.d} strokeOpacity={l.op} strokeWidth={l.w} />
                    ))}
                </g>

                <g className="par-near">
                    <Coral x={150} y={878} s={1.15} op={0.13} />
                    <Coral x={232} y={886} s={0.8} op={0.1} />
                    <Coral x={1420} y={872} s={1} op={0.12} />
                    <Fish x={300} y={470} s={1} op={0.13} />
                    <Fish x={1090} y={556} s={0.8} flip op={0.11} />
                    <Fish x={660} y={700} s={1.15} op={0.1} />
                    <Fish x={1310} y={690} s={0.7} flip op={0.12} />
                    {grains.map((g, i) => (
                        <circle key={i} cx={g.cx} cy={g.cy} r={1.4} fillOpacity={0.1} />
                    ))}
                </g>
            </svg>
        </div>
    );
}
