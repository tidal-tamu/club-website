import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL, Sponsor, sponsors } from "../../data/tidal";

function Track({ list, className }: { list: Sponsor[]; className: string }) {
    // duplicated so the -50% loop is seamless
    const doubled = [...list, ...list];
    return (
        <div className="marquee">
            <div className={`track ${className}`}>
                {doubled.map((s, i) => (
                    <a
                        className="logo"
                        key={`${s.name}-${i}`}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className={s.keepWhite ? "keep-white" : undefined}
                            style={
                                s.scale
                                    ? ({ "--s": s.scale } as React.CSSProperties)
                                    : undefined
                            }
                            src={s.logo}
                            alt={s.name}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default function Sponsors() {
    const [copied, setCopied] = useState(false);
    const timer = useRef<number>();

    useEffect(() => () => window.clearTimeout(timer.current), []);

    const copy = () => {
        navigator.clipboard?.writeText(CONTACT_EMAIL).catch(() => {});
        setCopied(true);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), 1800);
    };

    return (
        <section className="sponsors" id="sponsors">
            <div className="wrap">
                <p className="spon-lede rv">
                    Thank you to our amazing partners who make our events and programs
                    possible.
                </p>
            </div>

            <Track list={sponsors.slice(0, 7)} className="marquee-a" />
            <div style={{ marginTop: 1 }}>
                <Track list={sponsors.slice(7)} className="marquee-b" />
            </div>

            <div className="wrap">
                <div className="ask">
                    <div className="rv">
                        <h3>Sponsor Us!</h3>
                        <p>
                            Interested in sponsoring? Click the button below to copy our
                            email!
                        </p>
                    </div>
                    <div className="rv">
                        <button
                            className={`copy${copied ? " done" : ""}`}
                            onClick={copy}
                            type="button"
                        >
                            {copied ? "Copied!" : CONTACT_EMAIL}
                        </button>
                        <p className="note">We would love to hear from you!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
