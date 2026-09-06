/**
 * Shared wave geometry for the section dividers and the tide timeline.
 * All of these build paths in a 1200-wide viewBox.
 */
export const VW = 1200;

/** Three summed sines so the crest never repeats on an obvious beat. */
export function waveY(base: number, amp: number, phase: number, f: number): number {
    const i = f * 60;
    return (
        base +
        amp * Math.sin(phase + i * 0.17) +
        amp * 0.42 * Math.sin(phase * 1.33 + i * 0.36) +
        amp * 0.18 * Math.sin(phase * 2.11 + i * 0.71)
    );
}

function wavePts(base: number, amp: number, phase: number): string[] {
    const pts: string[] = [];
    for (let i = 0; i <= 72; i++) {
        pts.push(
            `${((VW * i) / 72).toFixed(1)},${waveY(base, amp, phase, i / 72).toFixed(2)}`
        );
    }
    return pts;
}

/** Open polyline along the crest. */
export function waveLine(base: number, amp: number, phase: number): string {
    return "M" + wavePts(base, amp, phase).join(" L");
}

/** Closed shape from the crest down to `height`. */
export function waveD(base: number, amp: number, phase: number, height: number): string {
    return `M0,${height} L${wavePts(base, amp, phase).join(" L")} L${VW},${height} Z`;
}

/**
 * Scroll velocity, smoothed to 0..1, shared between the motion hook (which
 * writes it) and the animated wave components (which read it every frame).
 * Kept outside React so scrolling never triggers a re-render.
 */
export const waveState = { chop: 0 };
