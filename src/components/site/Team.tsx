import { departments, leadership, Person } from "../../data/tidal";
import SectionHead from "./SectionHead";

const initials = (name: string) =>
    name
        .split(/[\s-]+/)
        .filter(Boolean)
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

function Officer({ p, lead }: { p: Person; lead?: boolean }) {
    return (
        <li className={`officer${lead ? " is-lead" : ""}`}>
            {p.photo ? (
                <img className="avatar" src={p.photo} alt="" width={320} height={320} loading="lazy" decoding="async" />
            ) : (
                <span className="avatar avatar-initials" aria-hidden="true">
                    {initials(p.name)}
                </span>
            )}
            <span className="officer-text">
                <span className="officer-name">{p.name}</span>
                <span className="officer-role">{p.role}</span>
            </span>
        </li>
    );
}

export default function Team() {
    return (
        <section className="section team" id="team" aria-labelledby="team-title">
            <div className="wrap">
                <SectionHead title="Team" id="team-title" />

                <ul className="mast-exec rv">
                    {leadership.map((p) => (
                        <Officer p={p} key={p.name} lead />
                    ))}
                </ul>

                <div className="mast-depts">
                    {departments.map((d) => (
                        <div className="mast-row rv" key={d.name}>
                            <h3 className="mast-name">{d.name}</h3>
                            <ul className="mast-people">
                                {d.people.map((p) => (
                                    <Officer p={p} key={p.name} lead={p.role === "Lead"} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
