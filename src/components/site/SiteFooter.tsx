import { socials } from "../../data/tidal";
import { ArrowUp, SocialGlyph } from "./Icons";
import TidalMark from "./TidalMark";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="wrap">
                <div className="foot-main">
                    <TidalMark className="foot-mark" />
                    <ul className="foot-social">
                        {socials.map((s) => (
                            <li key={s.name}>
                                <a
                                    href={s.href}
                                    aria-label={s.name}
                                    title={s.name}
                                    {...(s.icon === "email" ? {} : ext)}
                                >
                                    <SocialGlyph icon={s.icon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="foot-bar">
                    <p>
                        © {new Date().getFullYear()} TIDAL. A registered student organization at
                        Texas A&amp;M University; views are our own.
                    </p>
                    <a href="#top" className="foot-up">
                        Back to top <ArrowUp />
                    </a>
                </div>
            </div>
        </footer>
    );
}
