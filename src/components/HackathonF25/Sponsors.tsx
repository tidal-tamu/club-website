const Sponsors = () => {
    return (
        <section className="py-20 px-6 lg:px-12" id="sponsors">
            <div className="max-w-7xl mx-auto justify-center items-center">
                <div className="text-center mb-16">
                    <span className="text-white font-bungee text-3xl md:text-6xl">
                        Our Amazing Sponsors
                    </span>
                </div>

                <div className="flex flex-wrap gap-12 lg:gap-16 items-center justify-items-center mx-50">
                    <img
                        src="/icons/logos/companies/google-color.png"
                        alt="Google"
                        className="h-20 lg:h-24 w-auto object-contain"
                    />

                    <img
                        src="/icons/logos/companies/aws-logo.png"
                        alt="AWS"
                        className="h-24 lg:h-32 w-auto object-contain"
                    />

                    <img
                        src="/icons/logos/companies/wolfram-logo-white.png"
                        alt="Wolfram"
                        className="h-24 lg:h-32 w-auto object-contain"
                    />

                    <img
                        src="/icons/logos/companies/jane-street-blue.png"
                        alt="Jane Street"
                        className="h-24 lg:h-32 w-auto object-contain"
                    />

                    <img
                        src="/icons/logos/companies/figma.png"
                        alt="Figma"
                        className="h-24 lg:h-32 object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
