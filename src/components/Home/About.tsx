export default function About() {
    return (
        <section
            id="about-us"
            className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            aria-labelledby="about-heading"
        >
            <div className="mx-auto w-full max-w-[min(92rem,calc(100%-1rem))] rounded-3xl bg-[#e6f5ff] px-8 py-14 sm:px-12 sm:py-16 md:px-16 md:py-20">
                <h2
                    id="about-heading"
                    className="font-inter text-center text-sm font-medium uppercase tracking-[0.35em] text-[#a4a4a4] sm:text-base"
                >
                    About us
                </h2>
                <p className="font-inter mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-[#000000] sm:text-lg">
                    Tidal is Texas A&M&apos;s premier AI/ML student org, advancing
                    learning through hackathons, workshops, and community!
                </p>
            </div>
        </section>
    );
}
