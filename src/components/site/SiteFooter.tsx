import { CONTACT_EMAIL, DISCORD_URL } from "../../data/tidal";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="wrap fgrid">
                <img
                    className="flogo"
                    src="/icons/logos/tidal-blueblack.png"
                    alt="TIDAL"
                />
                <div className="fcols">
                    <div className="fcol">
                        <p className="h label">Explore</p>
                        <a href="#about">About</a>
                        <a href="#team">Team</a>
                        <a href="#sponsors">Sponsors</a>
                    </div>
                    <div className="fcol">
                        <p className="h label">Past Events</p>
                        <a href="https://s26.tidaltamu.com" {...ext}>
                            TIDALHACK Spring 2026
                        </a>
                        <a href="https://f25.tidaltamu.com" {...ext}>
                            TIDALHACK Fall 2025
                        </a>
                        <a href="https://s25.tidaltamu.com" {...ext}>
                            TIDALHACK Spring 2025
                        </a>
                    </div>
                    <div className="fcol">
                        <p className="h label">Connect</p>
                        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                        <a href={DISCORD_URL} {...ext}>
                            Discord
                        </a>
                        <a href="https://github.com/tidal-tamu/" {...ext}>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/company/tidaltamu" {...ext}>
                            LinkedIn
                        </a>
                        <a href="https://www.instagram.com/tidaltamu/" {...ext}>
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div className="wrap fbot">
                <span>TIDAL &middot; Texas A&amp;M University</span>
                <span>College Station, TX</span>
            </div>
        </footer>
    );
}
