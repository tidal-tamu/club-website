export default function About() {
    return (
        <div
            className="w-full flex flex-col justify-center items-center gap-16 bg-lightBlue font-mont overflow-x-clip"
            id="about-us"
        >
            <h1 className="text-navy text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center my-6 text-nowrap">
                ABOUT US
            </h1>
            <div className=" md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px] relative flex flex-col md:flex-row-reverse justify-center items-center gap-10 xl:gap-16 bg-white rounded-3xl mx-32 flex-0 px-8 py-10 md:px-12 md:py-20 lg:px-24 lg:py-36 transition-all  ">
                <img
                    src="./icons/yellow-star.svg"
                    className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[100px] lg:w-[200px]"
                />
                <img
                    src="./images/officers.jpg"
                    className="rounded-3xl w-[300px] lg:w-[400px] xl:w-[470px]"
                />
                <p className="flex justify-center items-center text-center font-medium px-3 md:text-sm lg:text-xl xl:text-2xl w-[275px] lg:w-[500px]">
                    The Tethered Informatics and Data Analytics Lab (TIDAL) is a
                    student-led organization at Texas A&M University dedicated
                    to providing college and high school students with essential
                    Data Science and Machine Learning knowledge. We also provide
                    a great opportunity to network with others interested in
                    Machine Learning!
                </p>
                <img
                    src="./icons/red-star.svg"
                    className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[125px] lg:w-[250px] z-10"
                />
            </div>
        </div>
    );
}
