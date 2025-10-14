const About = () => {
    return (
        <div className="relative px-6 md:px-16 pt-20" id="about">
            <div className="flex flex-col md:flex-row justify-around">
                <div className="flex flex-col items-center md:w-1/3">
                    <span className="text-white font-bungee text-3xl md:text-6xl mb-4">
                        ABOUT TIDALHACK
                    </span>
                    <p className="text-white font-inter font-light text-base md:text-lg">
                        TidalHack Fall 2025 is a{" "}
                        <span className="font-bold">9 hour</span> event{" "}
                        <span className="font-bold">
                            where data science and machine learning
                        </span>{" "}
                        enthusiasts come together to build open ended ML
                        projects!
                        <br />
                        <br />
                        We will provide the resources, mentors, and freedom to
                        create a resume-worthy product, practice new skills or
                        just have fun hacking with friends. We'll also provide
                        free food and opportunities to network and learn with
                        our sponsors through events and mentorship. Join us on{" "}
                        <span className="font-bold">October 25th</span> for a
                        day of learning, collaboration, and fun!{" "}
                    </p>
                </div>
                <div className="flex flex-col items-start md:w-1/3">
                    <span className="text-white font-bungee text-3xl md:text-6xl mb-4 mt-6 md:mt-0">
                        EVENT INFORMATION
                    </span>
                    <span className="text-[#FFA722] font-bungee text-xl md:text-2xl">
                        LOCATION
                    </span>
                    <p className="text-white font-inter font-light text-base md:text-lg mb-3">
                        MSC Bethancourt Ballroom (MSC 2300)
                        <br />
                        275 Joe Routt Blvd, College Station, TX 77843
                    </p>
                    <span className="text-[#FFA722] font-bungee text-xl md:text-2xl">
                        PARKING
                    </span>
                    <p className="text-white font-inter font-light text-base md:text-lg mb-3">
                        Parking will be available in University Center Garage
                        (UCG) or Central Parking Garage (CPG) for the duration
                        of the event. Keep in mind that you cannot park in
                        reserved, timed, business, or service vehicle spaces. We
                        hope to see you there!
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center my-40 h-40">
                <img
                    src="/f25/image 31.png"
                    className="rounded-lg shadow-lg object-contain"
                    alt="Image 1"
                />
                <img
                    src="/f25/image 32.png"
                    className="rounded-lg shadow-lg object-contain"
                    alt="Image 2"
                />
                <img
                    src="/f25/IMG_7713 1.png"
                    className="rounded-lg shadow-lg object-contain"
                    alt="Image 3"
                />
            </div>
        </div>
    );
};

export default About;
