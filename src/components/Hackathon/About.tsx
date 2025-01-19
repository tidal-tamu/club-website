export default function About() {
    return (
        <div className="pt-40 md:pt-50 lg:pt-64 bg-[url('/waves/wave-1-beige.svg')] bg-repeat-x bg-right-top transition-[padding]">
            <div className="w-full flex flex-col justify-center items-center gap-14 bg-hackBeige font-mont overflow-x-clip">
                <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-bold text-center plasma-bold">
                    ABOUT <span className="text-hackRed">TIDALHACK</span> 2025
                </h1>
                <div className="flex flex-col justify-center items-center gap-6">
                    <div className="text-center w-4/5 sm:w-3/5 space-y-4 pb-6">
                        <h1 className="text-lg md:text-xl lg:text-2xl">
                            TidalHack is a <span className="font-semibold">24 hour event</span> where data science 
                            and machine learning enthusiasts come together to build something amazing! Join us on  
                            <span className="font-semibold"> March 8 - 9</span> for a weekend of learning, collaboration, and fun!
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-2 lg:gap-12 lg:w-4/5">
                        <img src="/images/hackathon-sheep.png" alt="Sheep" className="size-1/3 md:size-1/5 lg:size-1/6 -translate-x-1 animate-sheep"/>
                        <div className="text-center w-4/5 md:w-1/3">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pb-3">
                                WHERE
                            </h1>
                            <p className="lg:text-lg">
                                @ MSC 2300
                                <br/>
                                Texas A&M University
                                <br />
                                March 8 - 9, 2025
                            </p>
                        </div>
                        <div className="text-center w-4/5 md:w-1/3">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pb-3">
                                WHO
                            </h1>
                            <p className="lg:text-lg">
                                Anyone! Whether you are a seasoned coder or just starting out, TidalHack is the perfect place to learn and grow.
                            </p>
                        </div>
                        <div className="text-center w-4/5 md:w-1/3">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pb-3">
                                HOW
                            </h1>
                            <p className="lg:text-lg pb-2">
                                Simply fill out the application form and show up on the day of the event!
                            </p>
                            <a href="https://www.google.com/" target="_blank" className="underline"> Click Here! </a>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 w-9/12 lg:w-4/6 xl:w-1/2 pt-12 md:pt-2">
                        <h1 className="sm:text-lg lg:text-xl">
                            Parking will be available
                            in <a href="https://maps.app.goo.gl/hDTcND9qJaruVjKm9"  target="_blank" className="underline">Lot 100t</a> or <a 
                            href="https://maps.app.goo.gl/8jCHSJo7GvumZQ8C8" target="_blank" className="underline">Lot 74</a> for 
                            the duration of the event. Keep in mind that you cannot park in reserved, timed, business, or service vehicle spaces. We hope to see you there!
                        </h1>
                        <img src="/images/loc-placeholder.png" alt="Hackathon Map" className="w-4/5 md:w-1/2 lg:w-[45%]"/>
                    </div>
                </div>
            </div>
            <div className="w-full h-[260px] bg-[url('/waves/wave-1-180-beige.svg')] bg-repeat-x"></div>
        </div>
    );
}
