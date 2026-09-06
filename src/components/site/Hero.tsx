import { DISCORD_URL } from "../../data/tidal";

const ABOUT =
    "TIDAL is Texas A&M University's premier student organization dedicated to " +
    "advancing AI and machine learning education through hands-on experiences, " +
    "collaborative projects, and community engagement.";

/** Split into words up front so the motion hook can light them up on scroll. */
const ABOUT_WORDS = ABOUT.split(/\s+/);

function DiscordIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.3.5a15 15 0 0 1 4.3 2.2 17.6 17.6 0 0 0-15 0A15 15 0 0 1 8.9 3.5L8.6 3a19.8 19.8 0 0 0-4.9 1.4C.6 9 0 13.4.3 17.8a19.9 19.9 0 0 0 6 3l1.2-1.7a13 13 0 0 1-2-1l.5-.4a14.2 14.2 0 0 0 12 0l.5.4a13 13 0 0 1-2 1l1.2 1.7a19.9 19.9 0 0 0 6-3c.4-5.1-.6-9.5-3.4-13.4ZM8.1 15.3c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Zm7.8 0c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Z" />
        </svg>
    );
}

export default function Hero() {
    return (
        <div className="wrap hero" id="about">
            <div className="hero-grid">
                <div>
                    <h1 className="rv">
                        Empowering Aggies with AI/ML skills through hands-on learning and
                        community.
                    </h1>
                    <div className="cta-row rv">
                        <a
                            className="btn"
                            href={DISCORD_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <DiscordIcon />
                            Join Discord
                        </a>
                        <a
                            className="btn ghost"
                            href="https://s26.tidaltamu.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            See TIDALHACK Spring 2026
                        </a>
                    </div>
                </div>

                <div className="about-col">
                    <p className="rv abouttext">
                        {ABOUT_WORDS.map((w, i) => (
                            <span className="w" key={i}>
                                {w}
                                {i < ABOUT_WORDS.length - 1 ? " " : ""}
                            </span>
                        ))}
                    </p>
                    <div className="award rv">
                        <p className="k label">Award-Winning Organization</p>
                        <h3>Adair Student Organization of the Year 2025</h3>
                        <p>
                            Recognized for excellence in student leadership and community
                            impact
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
