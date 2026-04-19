type PolaroidProps = {
    src: string;
    left: string;
    rotateDeg: number;
    /** Tailwind width classes for the frame (e.g. `w-56 sm:w-64 …`) */
    frameWidthClassName: string;
};

function Polaroid({ src, left, rotateDeg, frameWidthClassName }: PolaroidProps) {
    return (
        <div
            className="pointer-events-auto absolute bottom-0 z-[20] hover:z-[60]"
            style={{
                left,
                transform: `translate(-50%, 50%) rotate(${rotateDeg}deg)`,
            }}
        >
            <div
                className={`h-fit w-fit origin-center rounded-xl border-[12px] border-white shadow-[0_12px_40px_-8px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out will-change-transform hover:scale-110 ${frameWidthClassName}`}
            >
                <img
                    src={src}
                    alt=""
                    className="block h-auto w-full rounded-md object-contain"
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </div>
    );
}

export default function About() {
    return (
        <section
            id="about-us"
            className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            aria-labelledby="about-heading"
        >
            <div className="relative mx-auto mb-36 w-full max-w-[min(92rem,calc(100%-1rem))]">
                <div className="relative overflow-visible rounded-3xl bg-[#e6f5ff] px-8 pb-52 pt-8 sm:px-12 sm:pb-56 sm:pt-10 md:px-16 md:pb-60 md:pt-8">
                    <h2
                        id="about-heading"
                        className="relative z-10 font-inter text-center text-2xl font-semibold uppercase text-[#a4a4a4]"
                    >
                        About us
                    </h2>
                    <p className="relative z-10 mx-auto mt-8 max-w-[50vw] text-center font-inter text-4xl font-semibold leading-relaxed text-[#000000]">
                        TIDAL is Texas A&M&apos;s premier AI/ML student org, advancing
                        learning through hackathons, workshops, and community!
                    </p>

                    <Polaroid
                        src="/polaroid_0.png"
                        left="16%"
                        rotateDeg={-8}
                        frameWidthClassName="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96"
                    />
                    <Polaroid
                        src="/polaroid_1.png"
                        left="38%"
                        rotateDeg={6}
                        frameWidthClassName="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80"
                    />
                    <Polaroid
                        src="/polaroid_2.png"
                        left="62%"
                        rotateDeg={-5}
                        frameWidthClassName="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96"
                    />
                    <Polaroid
                        src="/polaroid_3.png"
                        left="84%"
                        rotateDeg={9}
                        frameWidthClassName="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80"
                    />
                </div>
            </div>
        </section>
    );
}
