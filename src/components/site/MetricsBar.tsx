import { useEffect, useRef, useState } from "react";
import { metrics } from "../../data/tidal";

function parseValue(raw: string) {
    const prefix = raw.startsWith("$") ? "$" : "";
    const suffix = raw.endsWith("+") ? "+" : "";
    const num = parseInt(raw.replace(/[$,+]/g, ""), 10);
    const hasComma = raw.includes(",");
    return { prefix, suffix, num, hasComma };
}

function CountUp({ value }: { value: string }) {
    const { prefix, suffix, num, hasComma } = parseValue(value);
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
            setCount(num);
            return;
        }
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 1400;
                    const startTime = performance.now();
                    const tick = (now: number) => {
                        const t = Math.min((now - startTime) / duration, 1);
                        const eased = 1 - Math.pow(1 - t, 3);
                        setCount(Math.round(eased * num));
                        if (t < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [num]);

    const display = hasComma ? count.toLocaleString() : String(count);

    return (
        <dd className="metric-value" ref={ref}>
            {prefix}
            {display}
            {suffix}
        </dd>
    );
}

export default function MetricsBar() {
    return (
        <section className="metrics" aria-label="TIDAL by the numbers">
            <div className="wrap">
                <dl className="metrics-grid rv">
                    {metrics.map((m) => (
                        <div className="metric" key={m.label}>
                            <dt className="metric-label">{m.label}</dt>
                            <CountUp value={m.value} />
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
