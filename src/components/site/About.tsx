import { award, DISCORD_MEMBERS, DISCORD_URL, meeting, statement } from "../../data/tidal";
import { SocialGlyph } from "./Icons";
import TidalMark from "./TidalMark";

/** Split up front so the motion hook can light the words one at a time on scroll. */
const WORDS = statement.split(/\s+/);

export default function About() {
    return (
        <section className="about" id="about" aria-label="About">
            <div className="wrap">
                <h2 className="statement">
                    {WORDS.map((w, i) => (
                        <span className="w" key={i}>
                            {w}
                            {i < WORDS.length - 1 ? " " : ""}
                        </span>
                    ))}
                </h2>

                <div className="about-row rv">
                    <a className="btn btn-ink" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                        <SocialGlyph icon="discord" className="btn-glyph" />
                        Join Discord
                        <span className="btn-count">{DISCORD_MEMBERS}</span>
                    </a>
                    <p className="meet">{meeting.join(" · ")}</p>
                    <p className="award">
                        <TidalMark waveOnly decorative />
                        {award}
                    </p>
                </div>
            </div>
        </section>
    );
}
