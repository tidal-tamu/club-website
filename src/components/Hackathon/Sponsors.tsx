export default function Sponsors() {
    return(
        <div className="w-full mb-20 mt-20" id="sponsor-us">
            <h1 className="text-navy text-5xl lg:text-6xl font-bold text-center text-nowrap mb-10 mt-40">
                PARTNERS
            </h1>
            <div className="relative flex justify-center items-center">
                <div className="w-4/6 relative flex flex-wrap justify-center items-center gap-16 p-10">
                    <a href="https://www.phillips66.com/">
                        <img
                            src="./icons/logos/phillips66-logo.png"
                            className="w-[100px] md:w-[100px] lg:w-[200px]"
                        />
                    </a>
                    <a href="https://www.nvidia.com/en-us/">
                    <img
                        src="./icons/logos/nvidia-logo.png"
                        className="w-[100px] md:w-[100px] lg:w-[200px]"
                    />
                    </a>
                    <a href="https://aws.amazon.com/">
                    <img
                        src="./icons/logos/aws-logo.png"
                        className="w-[100px] md:w-[100px] lg:w-[200px]"
                    />
                    </a>
                    <a href="https://www.wolfram.com/">
                    <img
                        src="./icons/logos/wolfram-logo.png"
                        className="lg:w-[400px]"
                    />
                    </a>
                    <a href="https://tamids.tamu.edu/">
                    <img
                        src="./icons/logos/tamids-logo.png"
                        className="lg:w-[400px]"
                    />
                    </a>
                    <a href="https://parivedasolutions.com/">
                    <img
                        src="./icons/logos/pariveda-logo.png"
                        className="lg:w-[400px]"
                    />
                    </a>
                    <a href="https://www.slalom.com/us/en">
                    <img
                        src="./icons/logos/slalom-logo.png"
                        className="lg:w-[300px]"
                    />
                    </a>
                </div>
            </div>
            

        </div>
    );
}