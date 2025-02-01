import videobg from '/bg_footage_tidal.mp4';
import logo from '/icons/logos/tidal-blueblack.png';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Theme CSS
import 'primereact/resources/primereact.min.css'; // Core PrimeReact CSS
import 'primeicons/primeicons.css'; // Icons

export default function ComingSoon() {

    return (
        <div className="bg-black flex flex-col items-center justify-center">
            <video src={videobg} autoPlay loop muted className="fixed top-0 left-0 w-full h-full object-cover z-1"/>

            <div className="w-10/12 sm:w-[60vw] h-[70vh] px-5 py-16 my-20 bg-white rounded-lg z-10 relative"> 
                <img src={logo} className="w-64 mx-auto pt-10 pb-5" />
                
                <h1 className="text-3xl italic text-center mt-32"> Coming Soon! </h1>

            </div>
        </div>
    );
}
