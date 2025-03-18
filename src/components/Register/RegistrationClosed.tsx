import Headroom from "react-headroom";
import Navbar from "../Navbar";
import { useEffect } from "react";

export default function RegistrationClosed() {
    useEffect(() => {
        document.body.style.backgroundColor = "#121111";
    }, []);

    return (
        <>
            <div className="relative z-50 flex flex-col">
                <Headroom>
                    <Navbar dark />
                </Headroom>
            </div>
            <div className="bg-spaceBlack flex flex-col items-center justify-center">

                <div className="w-11/12 sm:w-10/12 lg:w-[60vw] px-6 sm:px-24 pt-12 pb-24 mt-20 bg-white rounded-2xl z-10 relative min-h-[60dvh]">
                    <img src="/icons/logos/tidal-newblue.svg" className="w-64 mx-auto pb-5" />

                    <h1 className="text-2xl sm:text-3xl font-medium text-center pt-2 h-full"> Registrations are now <span className="text-red-600">closed!</span> </h1>

                    <p className="pt-16 pb-10  text-lg">We are no longer accepting registrations for tidalhack 25.
                        If you already registered and would like to check your registration, <a className="underline" href="/check-registration">click here!</a>
                    </p>

                    <p className="text-lg">For further questions, please contact us at tidaltamu@gmail.com</p>

                    <p className="absolute m-auto bottom-4 left-0 right-0 text-center">© 2025 TIDALTAMU</p>                    
                </div>
            </div>
        </>
    );
}