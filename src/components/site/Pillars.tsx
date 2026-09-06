import { pillars } from "../../data/tidal";

export default function Pillars() {
    return (
        <>
            <section className="wrap" style={{ paddingTop: 74 }}>
                <p className="deep-lede rv">
                    Empowering the next generation of AI/ML innovators through hands-on
                    experiences, collaborative projects, and cutting-edge education.
                </p>
                <div className="pillars">
                    {pillars.map((p) => (
                        <div className="pillar rv" key={p.index}>
                            <span className="i">{p.index}</span>
                            <h3>{p.title}</h3>
                            <p>{p.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="band-photo">
                <img src="/images/fall24workshop.jpg" alt="TIDAL workshop" />
            </div>
        </>
    );
}
