import { DISCORD_URL } from "../../data/tidal";

export default function SiteNav() {
    return (
        <header className="nav">
            <a href="#" className="brand">
                <img src="/icons/logos/tidal-blueblack.png" alt="TIDAL" />
            </a>
            <nav className="navlinks">
                <a href="#about">About</a>
                <a href="#team">Team</a>
                <a href="#sponsors">Sponsors</a>
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                    Discord
                </a>
                <a
                    className="evt"
                    href="https://s26.tidaltamu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    TIDALHACK Spring 2026
                </a>
            </nav>
        </header>
    );
}
