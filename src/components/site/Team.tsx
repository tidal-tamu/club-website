import { departments, leadership } from "../../data/tidal";

export default function Team() {
    return (
        <section className="wrap team" id="team">
            <div className="chapter">
                <span className="chapter-word">THE TEAM</span>
                <span className="sub">Who runs TIDAL</span>
            </div>

            <div className="leads">
                {leadership.map((o) => (
                    <article className="lead rv" key={o.name}>
                        <div className="ph">
                            <img src={o.pfp} alt={o.name} />
                        </div>
                        <p className="role label">{o.role}</p>
                        <h3>{o.name}</h3>
                    </article>
                ))}
            </div>

            <div>
                {departments.map((d) => (
                    <div className="dept rv" key={d.name}>
                        <p className="dname label">{d.name}</p>
                        <div className="people">
                            {d.people.map((p) => (
                                <div
                                    className={`person${p.role === "Lead" ? " is-lead" : ""}`}
                                    key={p.name}
                                >
                                    <img src={p.pfp} alt={p.name} />
                                    <div>
                                        <div className="pn">{p.name}</div>
                                        <div className="pr">{p.role}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
