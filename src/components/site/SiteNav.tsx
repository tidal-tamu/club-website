import { useEffect, useState } from "react";
import { DISCORD_URL, navLinks } from "../../data/tidal";
import { SocialGlyph } from "./Icons";
import TidalMark from "./TidalMark";

/**
 * Fixed header shared by both worlds. Its wordmark stays hidden while the hero
 * logo fills the screen. The motion hook toggles `is-solid` once the page has
 * scrolled, so theming is pure CSS and scrolling never re-renders this component.
 */
export default function SiteNav() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        const wide = window.matchMedia("(min-width: 960px)");
        const onWide = () => wide.matches && setOpen(false);
        window.addEventListener("keydown", onKey);
        wide.addEventListener("change", onWide);
        return () => {
            window.removeEventListener("keydown", onKey);
            wide.removeEventListener("change", onWide);
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header className={`nav${open ? " is-open" : ""}`}>
            <a href="#top" className="brand" onClick={close}>
                <TidalMark className="brand-mark" title="TIDAL home" />
            </a>

            <nav className="navlinks" aria-label="Primary">
                {navLinks.map((l) => (
                    <a href={`#${l.id}`} key={l.id} data-section={l.id}>
                        {l.label}
                    </a>
                ))}
            </nav>

            <div className="nav-actions">
                <a className="nav-cta" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                    <SocialGlyph icon="discord" />
                    Join Discord
                </a>
                <button
                    className="nav-toggle"
                    type="button"
                    aria-expanded={open}
                    aria-controls="nav-sheet"
                    onClick={() => setOpen((o) => !o)}
                >
                    <span className="nav-toggle-bars" aria-hidden="true" />
                    <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
                </button>
            </div>

            <nav id="nav-sheet" className="nav-sheet" aria-label="Menu" hidden={!open}>
                {navLinks.map((l) => (
                    <a href={`#${l.id}`} key={l.id} onClick={close}>
                        {l.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}
