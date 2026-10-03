import PenguinTracks from "./PenguinTracks";

/**
 * Line-art beach behind the hero, in a 1600x1000 viewBox anchored to the
 * bottom of the stage: horizon, a setting sun and a far island (placed in the
 * gap above the hero's two columns); tide contours
 * receding to the waterline; then the dry sand band with a bench, an umbrella
 * and Pebble's footprints leading up from the water.
 *
 * The dry band starts at y=750. The hero's bottom padding is sized to exactly
 * that band (see .hero in tidal.css), so nothing on the sand sits under text.
 *
 * Lines run from x=-400 to 2000 with overflow visible, so ultra-wide screens
 * see the tide continue past the drawing instead of stopping at its edge.
 * The three groups are separate so the motion hook can parallax them.
 */

const HORIZON = 200;
const WATERLINE = 722;
const CONTOURS = 20;

function wavyLine(y: number, amp: number, ph: number) {
    let d = `M-400,${y.toFixed(1)}`;
    for (let x = -360; x <= 2000; x += 40) {
        const yy = y + amp * Math.sin(ph + x / 300) + amp * 0.4 * Math.sin(ph * 1.7 + x / 118);
        d += ` L${x},${yy.toFixed(1)}`;
    }
    return d;
}

/** Near lines spread out and swell; far lines bunch toward the horizon and fade. */
const CONTOUR_LINES = Array.from({ length: CONTOURS }, (_, i) => {
    const t = i / (CONTOURS - 1);
    const y = HORIZON + 18 + Math.pow(t, 1.55) * (WATERLINE - HORIZON - 18);
    return { d: wavyLine(y, 3 + 16 * t, i * 0.72), op: (0.05 + 0.09 * t).toFixed(3) };
});
const WATER_EDGE = CONTOUR_LINES.pop()!;
const FOAM = wavyLine(WATERLINE + 11, 19, (CONTOURS - 1) * 0.72 + 0.3);

const GRAINS = Array.from({ length: 34 }, (_, g) => ({
    cx: Math.round((g * 211.7) % 1600),
    cy: Math.round(772 + ((g * 83) % 214)),
}));

function Island() {
    return (
        <g transform={`translate(740 ${HORIZON}) scale(0.8)`} className="island">
            <path d="M-124,0 C-98,-27 -53,-41 -14,-39 C23,-37 63,-22 98,0" />
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

/** Canopy panels as wedges between curved ribs, alternately shaded. */
const RIB_X = [-118, -79, -39, 0, 39, 79, 118];
const APEX = { x: 0, y: -36 };
const rib = (x: number) => ({ cx: x * 0.75, cy: -36 + 10 * (Math.abs(x) / 118) });
const PANELS = RIB_X.slice(0, -1).map((x0, k) => {
    const x1 = RIB_X[k + 1];
    const c0 = rib(x0);
    const c1 = rib(x1);
    return (
        `M${APEX.x},${APEX.y} Q${c0.cx},${c0.cy} ${x0},30 ` +
        `Q${(x0 + x1) / 2},40 ${x1},30 ` +
        `Q${c1.cx},${c1.cy} ${APEX.x},${APEX.y} Z`
    );
});

function Umbrella() {
    return (
        <g className="umbrella">
            <path d="M1293,698 L1330,962" />
            <path d="M1314,962 Q1330,954 1346,962" />
            <g transform="translate(1299.4 744.3) rotate(-8)">
                {PANELS.map((d, k) => (
                    <path key={k} d={d} className={k % 2 ? "solid" : "shade"} />
                ))}
            </g>
        </g>
    );
}

function Bench() {
    return (
        <g className="bench">
            {/* rear legs sit a touch higher: they're further away */}
            <path d="M1176,924 L1176,952 M1290,924 L1290,952" className="far" />
            <path d="M1164,924 L1164,960 M1278,924 L1278,960" />
            <path d="M1172,882 L1172,918 M1270,882 L1270,918" />
            <rect className="solid" x={1156} y={878} width={132} height={5} rx={1} />
            <rect className="solid" x={1156} y={892} width={132} height={5} rx={1} />
            <rect className="solid" x={1146} y={918} width={148} height={6} rx={1} />
        </g>
    );
}

function Shell({ x, y, r }: { x: number; y: number; r: number }) {
    return (
        <g transform={`translate(${x} ${y}) rotate(${r})`} className="shell">
            <path d="M0,0 L-9,-10 Q0,-17 9,-10 Z" />
            <path d="M0,0 L-4,-14 M0,0 L0,-15 M0,0 L4,-14" />
        </g>
    );
}

export default function ShoreArt() {
    return (
        <div className="shore" aria-hidden="true">
            <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMax meet">
                <g className="par-far">
                    <path d={`M-400,${HORIZON} L2000,${HORIZON}`} className="horizon" />
                    <path d={`M1116,${HORIZON} A64,64 0 0 1 1244,${HORIZON}`} className="sun" />
                    <path
                        d={`M1154,${HORIZON + 13} L1206,${HORIZON + 13} M1166,${HORIZON + 25} L1194,${HORIZON + 25} M1175,${HORIZON + 38} L1185,${HORIZON + 38}`}
                        className="glint"
                    />
                    <Island />
                </g>

                <g className="par-mid">
                    {CONTOUR_LINES.map((l, i) => (
                        <path key={i} d={l.d} strokeOpacity={l.op} />
                    ))}
                    <path d={WATER_EDGE.d} className="waterline" />
                    <path d={FOAM} className="foam" />
                </g>

                <g className="par-near">
                    {GRAINS.map((g, i) => (
                        <circle key={i} cx={g.cx} cy={g.cy} r={1.3} className="grain" />
                    ))}
                    <Shell x={782} y={902} r={-14} />
                    <Shell x={1012} y={826} r={22} />
                    <ellipse className="cast" cx={1262} cy={968} rx={166} ry={12} />
                    <PenguinTracks />
                    <Bench />
                    <Umbrella />
                </g>
            </svg>
        </div>
    );
}
