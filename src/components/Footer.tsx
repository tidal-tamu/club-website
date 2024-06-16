export default function Footer() {
    return (
        <footer className="bg-navy flex flex-col justify-center items-center text-white font-mont">
            <p className="font-bold">FOLLOW US</p>
            <div className="flex">
                <img src="./icons/logos/instagram-logo.svg" alt="Instagram" />
                <img
                    src="./icons/logos/discord-logo-white.svg"
                    className=""
                    alt="Discord"
                />
                <img src="./icons/logos/linkedin-logo.svg" alt="LinkedIn" />
                <img src="./icons/logos/github-logo.svg" alt="GitHub" />
                <img src="./icons/logos/email-logo.svg" alt="Email" />
            </div>
            <p className="flex justify-center items-center font-semibold">
                <img src="./icons/logos/tidal-fin-logo.svg" alt="TIDAL" />
                tidalTAMU
            </p>
        </footer>
    );
}
