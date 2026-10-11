import { DISCORD_URL, tagline } from "../../data/tidal";
import ShoreArt from "./ShoreArt";
import TidalMark from "./TidalMark";
import { SocialGlyph } from "./Icons";

export default function Hero() {
    return (
        <section className="stage" aria-labelledby="hero-title">
            <ShoreArt />
            <div className="hero">
                <h1 id="hero-title" className="hero-mark">
                    <TidalMark className="hero-logo" />
                </h1>
                <div className="hero-sub rv">
                    <p className="hero-tag">{tagline}</p>
                    <a
                        className="btn btn-ink hero-discord"
                        href={DISCORD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SocialGlyph icon="discord" className="btn-glyph" />
                        Join Discord
                    </a>
                </div>
            </div>
        </section>
    );
}
