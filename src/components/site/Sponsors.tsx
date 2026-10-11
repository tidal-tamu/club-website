import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL, Sponsor, sponsors } from "../../data/tidal";
import SectionHead from "./SectionHead";

function Logo({ s, hidden }: { s: Sponsor; hidden?: boolean }) {
    return (
        <li
            className={`rail-item${s.colorLogo ? " has-color" : ""}`}
            aria-hidden={hidden || undefined}
            data-sponsor={s.name.toLowerCase().replace(/\s+/g, "-")}
        >
            <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={hidden ? -1 : undefined}
                title={s.name}
            >
                <img src={s.logo} alt={hidden ? "" : s.name} width={s.w} height={s.h} loading="lazy" decoding="async" className="logo-dark" />
                {s.colorLogo && (
                    <img src={s.colorLogo} alt="" aria-hidden="true" loading="lazy" decoding="async" className="logo-color" width={s.w} height={s.h} style={{ aspectRatio: `${s.w} / ${s.h}` }} />
                )}
            </a>
        </li>
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
        <section className="section sponsors" id="sponsors" aria-labelledby="sponsors-title">
            <div className="wrap">
                <SectionHead title="Sponsors" id="sponsors-title" />
            </div>

            {/* the list runs twice so the -50% loop is seamless; the copy is hidden from AT */}
            <div className="rail rv">
                <ul className="rail-track">
                    {sponsors.map((s) => (
                        <Logo s={s} key={s.name} />
                    ))}
                    {sponsors.map((s) => (
                        <Logo s={s} key={`${s.name}-copy`} hidden />
                    ))}
                </ul>
            </div>

            <div className="wrap">
                <div className="partner rv">
                    <h3>Partner with us</h3>
                    <div className="partner-actions">
                        <a className="btn btn-ink" href={`mailto:${CONTACT_EMAIL}?subject=Partnering%20with%20TIDAL`}>
                            {CONTACT_EMAIL}
                        </a>
                        <button className="btn btn-line" type="button" onClick={copy}>
                            <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
