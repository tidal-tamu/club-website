import Navbar from "../HackathonF25/Navbar";
import { useEffect } from "react";
import tidalBackground from "/f25/tidal-background.png";

export default function RegistrationClosed() {
    useEffect(() => {
        document.body.style.backgroundColor = "#121111";
    }, []);

    return (
        <div
            className="min-h-screen hero-gradient relative overflow-hidden"
            style={{
                backgroundImage: `url(${tidalBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-tidal-deep/70 backdrop-blur-[1px]" />

            <div className="relative z-30">
                <Navbar dark />
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen py-20">
                <div className="w-11/12 sm:w-10/12 lg:w-[60vw] px-6 sm:px-24 pt-12 pb-24 bg-black/20 backdrop-blur-sm rounded-2xl z-10 relative min-h-[60dvh] border border-white/20">
                    <img
                        src="/icons/logos/tidal-white-transparent.png"
                        className="w-64 mx-auto pb-5"
                    />

                    <h1 className="text-2xl sm:text-3xl font-semibold text-center pt-2 text-white">
                        {" "}
                        Registrations are now{" "}
                        <span className="text-red-400">closed!</span>{" "}
                    </h1>

                    <p className="pt-16 pb-10 text-lg text-white">
                        We are no longer accepting registrations for TIDALHack
                        25. If you already registered and would like to check
                        your registration,{" "}
                        <a
                            className="underline text-yellow-400 hover:text-yellow-300"
                            href="/check-registration"
                        >
                            click here!
                        </a>
                    </p>

                    <p className="text-lg text-white">
                        For further questions, please contact us at
                        tidaltamu@gmail.com
                    </p>

                    <p className="absolute m-auto bottom-4 left-0 right-0 text-center text-white/70">
                        © 2025 TIDALTAMU
                    </p>
                </div>
            </div>
        </div>
    );
}
