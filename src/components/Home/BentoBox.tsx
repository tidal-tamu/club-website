export default function BentoBox() {
    return (
        <section
            className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
            aria-label="Highlights"
        >
            <div className="mx-auto w-full max-w-[min(92rem,calc(100%-1rem))]">
                <div className="grid min-h-[min(50vh,28rem)] grid-cols-3 grid-rows-2 gap-4 md:gap-5">
                    <div
                        className="col-start-1 row-span-2 row-start-1 rounded-2xl bg-[#ced9f0] transition-colors duration-300 ease-out hover:bg-black"
                        aria-hidden
                    />
                    <div
                        className="col-start-2 row-start-1 rounded-2xl bg-[#d0e6ff] transition-colors duration-300 ease-out hover:bg-black"
                        aria-hidden
                    />
                    <div
                        className="col-start-2 row-start-2 rounded-2xl bg-[#d6f2ff] transition-colors duration-300 ease-out hover:bg-black"
                        aria-hidden
                    />
                    <div
                        className="col-start-3 row-span-2 row-start-1 rounded-2xl bg-[#f1f1f1] transition-colors duration-300 ease-out hover:bg-black"
                        aria-hidden
                    />
                </div>
            </div>
        </section>
    );
}
