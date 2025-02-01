import { Meteors } from "./Meteors";

export default function Sponsors() {
    return(
        <div className="w-full mb-20 mt-20" id="sponsors">
            <h1 className="text-hackRed text-[8dvw] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-nowrap mb-10 mt-40 plasma-bold">
                THANK YOU TO OUR <br/> <span className="text-hackBeige text-[8dvw] sm:text-5xl md:text-6xl lg:text-7xl"> AMAZING PARTNERS </span>
            </h1>
            <div className="relative flex justify-center items-center">
                <Meteors number={3}/>
                <div className="w-4/6 relative flex flex-wrap justify-center items-center gap-16 p-10">
                    <a href="https://www.blueorigin.com/"
                        target="_blank"
                        className="shrink-0">
                        <img
                            src="./icons/logos/bo-logo.png"
                            className="w-[100px] md:w-[100px] lg:w-[200px] transition-transform transform hover:scale-110"
                            alt="Blue Origin"
                        />
                    </a>
                    <a href="https://www.nvidia.com/en-us/"
                        target="_blank"
                        className="shrink-0">
                    <img
                        src="./icons/logos/nvidia.png"
                        className="w-[100px] md:w-[100px] lg:w-[200px] transition-transform transform hover:scale-110"
                        alt="Nvidia"
                    />
                    </a>
                    <a href="https://aws.amazon.com/"
                        target="_blank"
                        className="shrink-0">
                    <img
                        src="./icons/logos/aws-logo.png"
                        className="w-[100px] md:w-[100px] lg:w-[200px] transition-transform transform hover:scale-110"
                        alt="Amazon Web Services"
                    />
                    </a>
                    <a href="https://about.google/"
                        target="_blank"
                        className="shrink-0">
                    <img
                        src="./icons/logos/google-color.png"
                        className="w-[200px] md:w-[200px] lg:w-[400px] transition-transform transform hover:scale-110"
                        alt="Google"
                    />
                    </a>
                    <a href="https://tamids.tamu.edu/"
                        target="_blank"
                        className="shrink-0">
                    <img
                        src="./icons/logos/tamids-logo.png"
                        className="w-[200px] md:w-[200px] lg:w-[400px] transition-transform transform hover:scale-110"
                        alt="TAMIDS"
                    />
                    </a>
                    <a href="https://www.microsoft.com/en-us/"
                        target="_blank"
                        className="shrink-0">
                    <img
                        src="./icons/logos/microsoft.png"
                        className="w-[200px] md:w-[200px] lg:w-[400px] transition-transform transform hover:scale-110"
                        alt="Microsoft"
                    />
                    </a>
                    <a href="https://www.pnnl.gov/"
                        target="_blank"
                        className="shrink-0">
                    <img
                        src="./icons/logos/pnnl.png"
                        className="w-[200px] md:w-[200px] lg:w-[400px] transition-transform transform hover:scale-110"
                        alt="Pacific Northwest National Laboratory"
                    />
                    </a>
                    <a href="https://www.janestreet.com/"
                        target="_blank"
                        className="shrink-0">
                    <img
                        src="./icons/logos/jane-street-blue.png"
                        className="w-[200px] md:w-[200px] lg:w-[400px] transition-transform transform hover:scale-110"
                        alt="Jane Street"
                    />
                    </a>
                </div>
            </div>
            

        </div>
    );
}