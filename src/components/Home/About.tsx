export default function About() {
    return (
        <div
            className="w-full flex flex-col justify-center items-center gap-16 bg-lightBlue font-mont overflow-x-clip"
            id="about-us"
        >
            <h1 className="text-navy text-5xl lg:text-6xl font-bold text-center text-nowrap">
                ABOUT US
            </h1>
            
            <div className="md:min-w-[728px] lg:min-w-[984px] relative flex flex-col md:flex-row-reverse justify-center items-center gap-10  bg-white rounded-3xl mx-32 px-8 py-10 md:px-12 md:py-20 lg:px-24 lg:py-32 transition-all">
                <img
                    src="/icons/shapes/yellow-star.svg"
                    className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[100px] lg:w-[200px]"
                />
                <img
                    src="/images/officers.jpg"
                    className="rounded-3xl w-[19rem] lg:w-[26rem]"
                />
                <p className="flex justify-center items-center text-center font-medium px-3 md:text-sm lg:text-xl xl:text-2xl w-[275px] lg:w-[500px]">
                    The Tethered Informatics and Data Analytics Lab (TIDAL) is a student-led 
                    organization at Texas A&M University dedicated to providing Aggies with 
                    essential Data Science and Machine Learning knowledge.
                </p>
                <img
                    src="/icons/shapes/red-star.svg"
                    className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[125px] lg:w-[250px]"
                />
            </div>
        </div>
    );
}
