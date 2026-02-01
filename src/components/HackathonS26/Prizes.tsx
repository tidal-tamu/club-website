import { motion } from "framer-motion";

const Prizes = () => {
    return (
        <section
            id="prizes"
            className="prizes-section s26-dynapuff-text relative overflow-x-clip overflow-y-hidden"
            style={{
                backgroundColor: "#79b0cf",
                paddingTop: "clamp(80px, 10vw, 140px)",
                paddingBottom: "clamp(80px, 12vw, 140px)",
                width: "100vw",
                maxWidth: "100vw",
                marginLeft: "calc(-50vw + 50%)",
            }}
        >
            <h2
                className="prizes-title s26-section-header font-bold text-center text-white uppercase tracking-widest"
                style={{
                    fontSize: "clamp(32px, 5vw, 52px)",
                    marginBottom: "clamp(48px, 7vw, 96px)",
                }}
            >
                Prizes & Competition Tracks
            </h2>

            <div className="relative w-full max-w-7xl mx-auto sm:px-6 md:px-8">
                <div
                    className="relative mx-auto flex flex-col items-center justify-end"
                    style={{
                        width: "min(100%, clamp(420px, 65vw, 720px))",
                    }}
                >
                    <span
                        className="relative z-[6] font-caudex font-bold text-white text-center block"
                        style={{
                            fontSize: "clamp(24px, 3.5vw, 40px)",
                            marginBottom: "clamp(2px, 0.25vw, 6px)",
                            transform: "translate(5px, 20px)",
                        }}
                    >
                        1st Overall
                    </span>
                    <div className="relative w-full flex flex-col items-center">
                        <img
                            src="/s26/FIRSTPLACEIGLOO.svg"
                            alt="First place igloo"
                            className="relative z-[2] w-full object-contain object-bottom"
                            loading="lazy"
                            decoding="async"
                            style={{ maxHeight: "clamp(380px, 52vw, 620px)" }}
                        />
                        <div
                            className="absolute z-[4] flex flex-col items-center"
                            style={{
                                bottom: "clamp(-8%, -4vw, -2%)",
                                left: "50%",
                                transform: "translateX(-50%) rotate(-2deg)",
                            }}
                        >
                            <img
                                src="/s26/tv.png"
                                alt="TCL TV"
                                className="object-contain drop-shadow-md"
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: "clamp(146px, 24.3vw, 276px)",
                                    transform: "translateY(-13px)",
                                }}
                            />
                        </div>
                        <span
                            className="relative z-[6] font-caudex font-bold text-white text-center block"
                            style={{
                                fontSize: "clamp(18px, 2.4vw, 28px)",
                                marginTop: "clamp(4px, 0.8vw, 12px)",
                                transform: "translateY(-6px)",
                            }}
                        >
                            4K TV
                        </span>
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 mt-14 md:mt-20"
                    style={{ gap: "clamp(32px, 5vw, 64px)" }}
                >
                    <div className="relative flex flex-col items-center justify-end">
                        <span
                            className="relative z-[6] font-caudex font-bold text-white text-center block mb-3 translate-y-[60px]"
                            style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}
                        >
                            2nd Overall
                        </span>
                        <div
                            className="relative w-full flex flex-col items-center"
                            style={{
                                width: "clamp(360px, 50vw, 600px)",
                                margin: "0 auto",
                            }}
                        >
                            <div
                                className="relative z-[2] w-full"
                                style={{ height: "clamp(320px, 44vw, 520px)" }}
                            >
                                <img
                                    src="/s26/2nd.png"
                                    alt=""
                                    className="w-full h-full object-contain object-bottom scale-[1.115] origin-bottom"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div
                                className="absolute z-[4] flex flex-col items-center"
                                style={{
                                    bottom: "clamp(6%, 4vw, 12%)",
                                    left: "50%",
                                    transform:
                                        "translateX(calc(-50% - 7px)) translateY(-15px) rotate(-4deg)",
                                }}
                            >
                                <img
                                    src="/s26/airpods.png"
                                    alt="AirPods"
                                    className="object-contain drop-shadow-md"
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: "clamp(130px, 20vw, 230px)",
                                    }}
                                />
                            </div>
                        </div>
                        <span
                            className="relative z-[6] font-caudex font-bold text-white text-center block"
                            style={{
                                fontSize: "clamp(18px, 2.2vw, 26px)",
                                marginTop: "clamp(6px, 1vw, 14px)",
                            }}
                        >
                            Airpods
                        </span>
                    </div>

                    <div className="relative flex flex-col items-center justify-end">
                        <span
                            className="relative z-[6] font-caudex font-bold text-white text-center block mb-3 translate-y-[60px]"
                            style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}
                        >
                            3rd Overall
                        </span>
                        <div
                            className="relative w-full flex flex-col items-center"
                            style={{
                                width: "clamp(360px, 50vw, 600px)",
                                margin: "0 auto",
                            }}
                        >
                            <div
                                className="relative z-[2] w-full -translate-y-[20px]"
                                style={{ height: "clamp(320px, 44vw, 520px)" }}
                            >
                                <img
                                    src="/s26/3rd.png"
                                    alt=""
                                    className="w-full h-full object-contain object-bottom"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div
                                className="absolute z-[4] flex flex-col items-center"
                                style={{
                                    bottom: "clamp(6%, 4vw, 12%)",
                                    left: "50%",
                                    transform: "translateX(-50%) rotate(-3deg)",
                                }}
                            >
                                <img
                                    src="/s26/airfryer.png"
                                    alt="Air Fryer"
                                    className="object-contain drop-shadow-md"
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: "clamp(120px, 19vw, 220px)",
                                    }}
                                />
                            </div>
                        </div>
                        <span
                            className="relative z-[6] font-caudex font-bold text-white text-center block"
                            style={{
                                fontSize: "clamp(18px, 2.2vw, 26px)",
                                marginTop: "clamp(6px, 1vw, 14px)",
                            }}
                        >
                            Airfryer
                        </span>
                    </div>
                </div>

                <div className="relative mt-16 md:mt-20">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10"
                        style={{ gap: "clamp(32px, 6vw, 64px)" }}
                    >
                        <motion.div
                            className="relative flex flex-col items-center justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="mb-3 flex items-center justify-center min-h-[2.6em]"
                                style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}
                            >
                                <span className="font-caudex font-bold text-white text-center">
                                    Best Design
                                </span>
                            </div>
                            <div
                                className="relative flex flex-col items-center"
                                style={{ height: "clamp(220px, 30vw, 320px)" }}
                            >
                                <img
                                    src="/s26/drawing tablet.png"
                                    alt="Drawing Tablet"
                                    className="object-contain z-[4] drop-shadow-md"
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: "clamp(160px, 26vw, 300px)",
                                        transform: "rotate(-6deg)",
                                    }}
                                />
                                <span
                                    className="font-caudex font-bold text-white text-center mt-auto block"
                                    style={{
                                        fontSize: "clamp(16px, 1.8vw, 22px)",
                                    }}
                                >
                                    Drawing Tablet
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative flex flex-col items-center justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="mb-3 flex items-center justify-center min-h-[2.6em]"
                                style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}
                            >
                                <span className="font-caudex font-bold text-white text-center">
                                    Best Beginner
                                </span>
                            </div>
                            <div
                                className="relative flex flex-col items-center"
                                style={{ height: "clamp(220px, 30vw, 320px)" }}
                            >
                                <img
                                    src="/s26/legoset.png"
                                    alt="Lego Set"
                                    className="object-contain z-[4]"
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: "clamp(160px, 26vw, 300px)",
                                    }}
                                />
                                <span
                                    className="font-caudex font-bold text-white text-center mt-auto block"
                                    style={{
                                        fontSize: "clamp(16px, 1.8vw, 22px)",
                                    }}
                                >
                                    Lego Set
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative flex flex-col items-center justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="mb-3 flex items-center justify-center min-h-[2.6em]"
                                style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}
                            >
                                <span className="font-caudex font-bold text-white text-center">
                                    Best Winter Theme
                                </span>
                            </div>
                            <div
                                className="relative flex flex-col items-center"
                                style={{ height: "clamp(220px, 30vw, 320px)" }}
                            >
                                <img
                                    src="/s26/plushie.png"
                                    alt="Plushie"
                                    className="object-contain z-[4] drop-shadow-md"
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        width: "clamp(140px, 24vw, 280px)",
                                    }}
                                />
                                <span
                                    className="font-caudex font-bold text-white text-center mt-auto block"
                                    style={{
                                        fontSize: "clamp(16px, 1.8vw, 22px)",
                                    }}
                                >
                                    Plushie
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="relative w-full mt-10 md:mt-12 pointer-events-none flex justify-center translate-y-[100px]">
                <img
                    src="/s26/TRACKSTBD.png"
                    alt="More Tracks TBD"
                    className="object-contain block"
                    loading="lazy"
                    decoding="async"
                    style={{
                        width: "clamp(420px, 70vw, 980px)",
                    }}
                />
            </div>
        </section>
    );
};

export default Prizes;
