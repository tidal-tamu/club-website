export default function About() {
    return (
        <div className="pt-44 lg:pt-64 bg-[url('/waves/wave-1.svg')] bg-repeat-x bg-right-top transition-[padding]">
            <div className="w-full flex flex-col justify-center items-center gap-16 bg-lightBlue font-mont overflow-x-clip">
                <h1 className="text-navy text-5xl lg:text-6xl font-bold text-center text-nowrap">
                    ABOUT
                </h1>
                <div className=" lg:min-w-[1024px] relative flex flex-col lg:flex-row-reverse justify-center items-center gap-10  bg-white rounded-3xl mx-32 px-8 py-10 md:px-12 md:py-20 lg:px-24 lg:py-32 transition-all  ">
                    <img
                        src="./icons/shapes/yellow-star.svg"
                        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[100px] lg:w-[200px]"
                    />
                    <img
                        src="./images/rec-map.png"
                        className="rounded-3xl w-[19rem] lg:w-[26rem]"
                    />
                    <p className="flex justify-center items-center text-center font-medium px-3 md:text-sm lg:text-xl xl:text-2xl w-[275px] lg:w-[500px]">
                    Tidal's Fall 2024 Hackathon will be located in REC 243 on October 19-20 from 9AM-5PM on both days. Join us to develop team
                    projects, solve real world problems using Data Science and Machine Learning, and win prizes up to $1500 in cash & product
                    prizes from our sponsors! All experience levels and majors are encourage to join! Happy Hacking!
                    </p>
                    <img
                        src="./icons/shapes/red-star.svg"
                        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[125px] lg:w-[250px] z-10"
                    />
                </div>
            </div>
            <div className="w-full h-[260px] bg-[url('/waves/wave-1-180.svg')] bg-repeat-x"></div>
        </div>
    );
}
