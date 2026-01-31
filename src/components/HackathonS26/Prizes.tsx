import { motion } from "framer-motion";

const Prizes = () => {
  return (
    <section
      id="prizes"
      className="prizes-section relative overflow-x-clip overflow-y-hidden"
      style={{
        backgroundColor: "#79b0cf",
        paddingTop: "clamp(80px, 10vw, 140px)",
        paddingBottom: "clamp(80px, 12vw, 140px)",
        width: "100vw",
        maxWidth: "100vw",
        marginLeft: "calc(-50vw + 50%)",
      }}
    >
      <div
        className="absolute right-0 top-[55%] pointer-events-none hidden sm:block"
        style={{
          transform: "translateY(-50%)",
          zIndex: 3,
        }}
      >
        <img
          src="/s26/sidesign.png"
          alt="More Tracks TBD"
          className="object-contain block"
          loading="lazy"
          decoding="async"
          style={{
            width: "clamp(160px, 24vw, 280px)",
            display: "block",
            transform: "translateX(28px)",
          }}
        />
      </div>

      <h2
        className="prizes-title font-caudex font-bold text-center text-white uppercase tracking-widest"
        style={{
          fontSize: "clamp(32px, 5vw, 52px)",
          marginBottom: "clamp(48px, 7vw, 96px)",
        }}
      >
        Prizes & Competition Tracks
      </h2>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div
          className="relative mx-auto flex flex-col items-center justify-end"
          style={{ width: "clamp(420px, 65vw, 720px)" }}
        >
          <span
            className="relative z-[6] font-caudex font-bold text-white text-center block"
            style={{
              fontSize: "clamp(24px, 3.5vw, 40px)",
              marginBottom: "clamp(2px, 0.25vw, 6px)",
            }}
          >
            1st Overall
          </span>
          <div className="relative w-full flex flex-col items-center">
            <img
              src="/s26/1st.png"
              alt=""
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
                  width: "clamp(180px, 30vw, 340px)",
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 mt-14 md:mt-20"
          style={{ gap: "clamp(32px, 5vw, 64px)" }}
        >
          <div className="relative flex flex-col items-center justify-end">
            <span
              className="relative z-[6] font-caudex font-bold text-white text-center block mb-3"
              style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}
            >
              2nd Overall
            </span>
            <div
              className="relative w-full flex flex-col items-center"
              style={{ width: "clamp(420px, 60vw, 700px)", margin: "0 auto" }}
            >
              <img
                src="/s26/2nd.png"
                alt=""
                className="relative z-[2] w-full object-contain object-bottom"
                loading="lazy"
                decoding="async"
                style={{ maxHeight: "clamp(380px, 51vw, 610px)" }}
              />
              <div
                className="absolute z-[4] flex flex-col items-center"
                style={{
                  bottom: "clamp(6%, 4vw, 12%)",
                  left: "50%",
                  transform: "translateX(-50%) rotate(-4deg)",
                }}
              >
                <img
                  src="/s26/airpods.png"
                  alt="AirPods"
                  className="object-contain drop-shadow-md"
                  loading="lazy"
                  decoding="async"
                  style={{ width: "clamp(130px, 20vw, 230px)" }}
                />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-end">
            <span
              className="relative z-[6] font-caudex font-bold text-white text-center block mb-3"
              style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}
            >
              3rd Overall
            </span>
            <div
              className="relative w-full flex flex-col items-center"
              style={{ width: "clamp(360px, 50vw, 600px)", margin: "0 auto" }}
            >
              <img
                src="/s26/3rd.png"
                alt=""
                className="relative z-[2] w-full object-contain object-bottom"
                loading="lazy"
                decoding="async"
                style={{ maxHeight: "clamp(320px, 44vw, 520px)" }}
              />
              <div
                className="absolute z-[4] flex flex-col items-center"
                style={{
                  bottom: "clamp(8%, 5vw, 14%)",
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
                  style={{ width: "clamp(120px, 19vw, 220px)" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16 md:mt-20">
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10"
            style={{ gap: "clamp(32px, 6vw, 64px)" }}
          >
            <motion.div
              className="relative flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span
                className="font-caudex font-bold text-white text-center block mb-3"
                style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}
              >
                Best Design
              </span>
              <div className="relative flex flex-col items-center min-h-[200px]">
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
                  className="font-caudex font-bold text-white text-center mt-3"
                  style={{ fontSize: "clamp(16px, 1.8vw, 22px)" }}
                >
                  Drawing Tablet
                </span>
              </div>
            </motion.div>

            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span
                className="font-caudex font-bold text-white text-center block mb-3"
                style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}
              >
                Best Beginner
              </span>
              <div className="relative flex flex-col items-center min-h-[200px]">
                <img
                  src="/s26/legoset.png"
                  alt="Lego Set"
                  className="object-contain z-[4]"
                  loading="lazy"
                  decoding="async"
                  style={{ width: "clamp(160px, 26vw, 300px)" }}
                />
                <span
                  className="font-caudex font-bold text-white text-center mt-3"
                  style={{ fontSize: "clamp(16px, 1.8vw, 22px)" }}
                >
                  Lego Set
                </span>
              </div>
            </motion.div>

            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <span
                className="font-caudex font-bold text-white text-center block mb-3"
                style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}
              >
                Best Winter
              </span>
              <div className="relative flex flex-col items-center min-h-[200px]">
                <img
                  src="/s26/plushie.png"
                  alt="Plushie"
                  className="object-contain z-[4] drop-shadow-md"
                  loading="lazy"
                  decoding="async"
                  style={{ width: "clamp(140px, 24vw, 280px)" }}
                />
                <span
                  className="font-caudex font-bold text-white text-center mt-3"
                  style={{ fontSize: "clamp(16px, 1.8vw, 22px)" }}
                >
                  Plushie
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="relative left-1/2 pointer-events-none mt-8 md:mt-12"
        style={{
          transform: "translateX(-50%)",
          zIndex: 5,
        }}
      >
        <img
          src="/s26/skatingpeng.png"
          alt=""
          className="object-contain block mx-auto"
          loading="lazy"
          decoding="async"
          style={{
            width: "clamp(680px, 88vw, 1200px)",
          }}
        />
      </div>
    </section>
  );
};

export default Prizes;
