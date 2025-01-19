export default function Prizes() {
    return (
        <div className="pt-44 lg:pt-64 bg-[url('/waves/wave-1-beige.svg')] bg-repeat-x bg-right-top transition-[padding]">
            <div className="bg-hackBeige w-full flex flex-col items-center">
                <h1 className="text-black text-6xl lg:text-7xl font-bold text-center mb-16 plasma-bold">
                    OUR <span className="text-hackRed"> PRIZES </span>
                </h1>
                <div className="flex w-full lg:w-4/5 xl:w-3/5 py-16 px-4 lg:px-8 mb-16 gap-32 justify-center">
                    <div className="h-[20vh] flex items-center justify-center">
                        <div className="text-4xl lg:text-5xl font-bold text-center text-nowrap">
                            2nd Place
                        </div>
                    </div>

                    <div className="h-[20vh] flex items-start justify-center">
                        <div className="text-4xl lg:text-5xl font-bold text-center text-nowrap">
                            1st Place
                        </div>
                    </div>

                    <div className="h-[20vh] flex items-end justify-center">
                        <div className="text-4xl lg:text-5xl font-bold text-center text-nowrap">
                            3rd Place
                        </div>
                    </div>
                </div>

                <div className="flex w-full lg:w-4/5 xl:w-3/5 py-16 px-4 lg:px-8 mb-16 gap-72 justify-center">
                    <div className="flex items-center justify-center">
                        <div className="text-xl lg:text-2xl font-bold text-center text-nowrap">
                            TBD
                        </div>
                    </div>

                    <div className="flex items-start justify-center">
                        <div className="text-xl lg:text-2xl font-bold text-center text-nowrap">
                            TBD
                        </div>
                    </div>

                    <div className="flex items-end justify-center">
                        <div className="text-xl lg:text-2xl font-bold text-center text-nowrap">
                            TBD
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[260px] bg-[url('/waves/wave-1-180-beige.svg')] bg-repeat-x"></div>
        </div>
    );
}
