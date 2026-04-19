export default function Hero() {
    return (
        <section className="relative min-h-screen h-screen flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-gray-50 to-white">
            <div className="relative flex origin-center scale-[0.8] flex-col items-center justify-center px-4">
                <img
                    src="/hero-star.png"
                    alt=""
                    width={1817}
                    height={1283}
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[min(85vw,28rem)] sm:w-[min(75vw,36rem)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain select-none"
                    aria-hidden
                />
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="shrikhand-regular leading-none text-center text-[clamp(3rem,22vw,300px)] text-gray-900">
                        Tidal
                    </h1>
                </div>
            </div>
        </section>
    );
}
