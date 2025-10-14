const sponsors = [
    {
        id: 1,
        name: "Google",
        logo: "/f25/sponsors/sponsor_google.png",
        size: "default",
    },
    {
        id: 2,
        name: "AWS",
        logo: "/f25/sponsors/sponsor_aws.png",
        size: "default",
    },
    {
        id: 3,
        name: "Wolfram",
        logo: "/f25/sponsors/sponsor_wolfram.png",
        size: "medium",
    },
    {
        id: 4,
        name: "Jane Street",
        logo: "/f25/sponsors/sponsor_jane_street.png",
        size: "medium",
    },
    {
        id: 5,
        name: "Figma",
        logo: "/f25/sponsors/sponsor_figma.png",
        size: "default",
    },
];

const Sponsors = () => {
    return (
        <section className="py-20 px-6 lg:px-12" id="sponsors">
            <div className="max-w-7xl mx-auto justify-center items-center">
                <div className="text-center mb-16">
                    <span className="text-white font-bungee text-3xl md:text-6xl">
                        Our Amazing Sponsors
                    </span>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-24 max-w-4xl mx-auto">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.id}
                            className={`flex items-center justify-center ${
                                sponsor.size === "default" ? "w-40" : "w-52"
                            }`}
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="max-w-full h-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
