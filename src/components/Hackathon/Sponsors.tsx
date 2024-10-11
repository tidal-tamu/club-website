export default function Sponsors() {
    return(
        <div className="w-full mb-20 mt-20" id="sponsor-us">
            <h1 className="text-navy text-5xl lg:text-6xl font-bold text-center text-nowrap mb-10 mt-40">
                PARTNERS
            </h1>
            <div className="relative flex justify-center items-center">
                <div className="w-4/6 relative flex flex-wrap justify-center items-center gap-16 p-10">
                    <a href="https://www.phillips66.com/"
                        target="_blank"
                        className="shrink-0">
                        <img
                            src="./icons/logos/phillips66-logo.png"
                            className="w-[100px] md:w-[100px] lg:w-[200px] transition-transform transform hover:scale-110"
                        />
                    </a>
                    <a href="https://www.nvidia.com/en-us/"
                        target="_blank"
                        className="shrink-0">
                    <img
                        src="./icons/logos/nvidia-logo.png"
                        className="w-[100px] md:w-[100px] lg:w-[200px] transition-transform transform hover:scale-110"
                    />
                    </a>
                    <a href="https://aws.amazon.com/"
                        target="_blank"
                        className="shrink-0">
                    <img
                        src="./icons/logos/aws-logo.png"
                        className="w-[100px] md:w-[100px] lg:w-[200px] transition-transform transform hover:scale-110"
                    />
                    </a>
                    <a href="https://www.wolfram.com/"
                        target="_blank"
                        className="shrink-0">
                    <img
                        src="./icons/logos/wolfram-logo.png"
                        className="w-[200px] md:w-[200px] lg:w-[400px] transition-transform transform hover:scale-110"
                    />
                    </a>
                    <a href="https://tamids.tamu.edu/"
                        target="_blank"
                        className="shrink-0">
                    <img
                        src="./icons/logos/tamids-logo.png"
                        className="w-[200px] md:w-[200px] lg:w-[400px] transition-transform transform hover:scale-110"
                    />
                    </a>
                    <a href="https://parivedasolutions.com/"
                        target="_blank"
                        className="shrink-0">
                    <img
                        src="./icons/logos/pariveda-logo.png"
                        className="w-[200px] md:w-[200px] lg:w-[400px] transition-transform transform hover:scale-110"
                    />
                    </a>
                </div>
            </div>
            

        </div>
    );
}