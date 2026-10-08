import { metrics } from "../../data/tidal";

/** A ruled strip on the sand: no card, just hairlines between the numbers. */
export default function MetricsBar() {
    return (
        <section className="metrics" aria-label="TIDAL by the numbers">
            <div className="wrap">
                <dl className="metrics-grid rv">
                    {metrics.map((m) => (
                        <div className="metric" key={m.label}>
                            <dt className="metric-label">{m.label}</dt>
                            <dd className="metric-value">{m.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
