import { useEffect, useRef } from "react";
import gsap from "gsap";
import { waveD, waveState } from "../../lib/wave";

/**
 * The waterline between two sections. Amplitude swells with scroll velocity,
 * which the motion hook publishes on `waveState.chop`.
 */
export default function WaveDivider({
    base = 48,
    amp = 9,
    fill = "#0F3355",
}: {
    base?: number;
    amp?: number;
    fill?: string;
}) {
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const paint = (t: number) => {
            pathRef.current?.setAttribute(
                "d",
                waveD(base, amp * (1 + waveState.chop * 1.9), t * 0.32, 96)
            );
        };
        paint(0);

        let clock = 0;
        const tick = () => {
            clock += 0.016;
            paint(clock);
        };
        if (!reduce) gsap.ticker.add(tick);
        return () => gsap.ticker.remove(tick);
    }, [base, amp]);

    return (
        <svg
            className="divider"
            viewBox="0 0 1200 96"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            <path ref={pathRef} fill={fill} d="" />
        </svg>
    );
}
