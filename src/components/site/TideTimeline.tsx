import { DISCORD_URL, Hackathon, hackathons } from "../../data/tidal";
import { ArrowUpRight } from "./Icons";
import SectionHead from "./SectionHead";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Cover({ h }: { h: Hackathon }) {
    if (h.cover) {
        return (
            <div className="tl-cover">
                <img
                    src={h.cover}
                    alt={`TIDALHACK ${h.title} cover art`}
                    width={1200}
                    height={750}
                    loading="lazy"
                    decoding="async"
                />
            </div>
        );
    }
    // no art yet
    return (
        <div className="tl-cover tl-cover-next" aria-hidden="true">
            <span className="tl-next-q">???</span>
        </div>
    );
}

/** Every TIDALHACK edition, oldest to newest, as a plain row of cards. */
export default function TideTimeline() {
    return (
        <section className="tides" id="hackathons" aria-labelledby="hackathons-title">
            <div className="wrap">
                <SectionHead title="Hackathons" id="hackathons-title" />

                <ol className="tl-nodes">
                    {hackathons.map((h) => (
                        <li className={`tl-node rv${h.upcoming ? " is-next" : ""}`} key={h.id}>
                            <article className="tl-card" aria-labelledby={`tl-${h.id}`}>
                                <Cover h={h} />
                                <div className="tl-body">
                                    <h3 id={`tl-${h.id}`}>
                                        {h.title}
                                        {h.upcoming && <span className="tl-flag">Next</span>}
                                    </h3>
                                    {h.theme && <p className="tl-theme">{h.theme}</p>}
                                    <ul className="tl-meta">
                                        <li>{h.dates}</li>
                                        {h.venue && <li>{h.venue}</li>}
                                        {h.prizes && <li>{h.prizes} in prizes</li>}
                                    </ul>
                                    <p className="tl-links">
                                        {h.site && (
                                            <a href={h.site} {...ext}>
                                                Site <ArrowUpRight />
                                            </a>
                                        )}
                                        {h.devpost && (
                                            <a href={h.devpost} {...ext}>
                                                Devpost <ArrowUpRight />
                                            </a>
                                        )}
                                        {h.upcoming && (
                                            <a href={DISCORD_URL} {...ext}>
                                                Discord <ArrowUpRight />
                                            </a>
                                        )}
                                    </p>
                                </div>
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
