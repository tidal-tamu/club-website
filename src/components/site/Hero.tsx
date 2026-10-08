import { tagline } from "../../data/tidal";
import ShoreArt from "./ShoreArt";
import TidalMark from "./TidalMark";

/**
 * The hero is the logo, pressed into the sand. It is sized and centred exactly
 * like the white logo inside the intro's water (both use --logo-w in a
 * viewport-tall box), so as the tide goes out it uncovers this one: there is
 * no hand-off, the wet logo simply dries.
 */
export default function Hero() {
    return (
        <section className="stage" aria-labelledby="hero-title">
            <ShoreArt />
            <div className="hero">
                <h1 id="hero-title" className="hero-mark">
                    <TidalMark className="hero-logo" />
                </h1>
                <p className="hero-tag rv">{tagline}</p>
            </div>
        </section>
    );
}
