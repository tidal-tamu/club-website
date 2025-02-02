import React, { useState } from 'react';
import videobg from '/bg_footage_tidal.mp4';
import logo from '/icons/logos/tidal-blueblack.png';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Theme CSS
import 'primereact/resources/primereact.min.css'; // Core PrimeReact CSS
import 'primeicons/primeicons.css'; // Icons

export default function CheckRegistration() {
    const [lookupEmail, setLookupEmail] = useState('');
    const [searching, setSearching] = useState(false);
    const [emailExists, setEmailExists] = useState<boolean | null>(null);

    const handleLookupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLookupEmail(e.target.value);
    };

    const handleEmailLookup = async () => {
        setSearching(true);
        try {
            const response = await fetch(`https://script.google.com/macros/s/AKfycbw9dRYgi6lfDCikYZyDA87DyP35tQ8TOnTRH3mGCTzeMJh2cJXob51rfQ_BYzx24qZXIA/exec?email=${lookupEmail}`);
            const result = await response.json();
            setEmailExists(result.exists);
        } catch (error) {
            alert('Error: ' + error);
        } finally {
            setSearching(false);
        }
    };

    return (
        <div className="bg-black flex flex-col items-center justify-center">
            <video src={videobg} autoPlay loop muted className="fixed top-0 left-0 w-full h-full object-cover z-1"/>

            <div className="w-10/12 sm:w-[60vw] h-[70vh] px-5 py-16 my-20 bg-white rounded-lg z-10 relative"> 
                <img src={logo} className="w-64 mx-auto pt-10 pb-5" />
                <h1 className="text-2xl sm:text-3xl font-semibold text-center pt-2"> TIDALHACK 2025 Registration </h1>
                <div className="justify-self-center">
                    <h1 className="text-xl mt-20"> Check Your Registration Status Here: </h1>
                    <div className="mt-5">
                        <input 
                            type="email" 
                            value={lookupEmail} 
                            onChange={handleLookupChange} 
                            placeholder="Enter your email" 
                            className="p-2 border rounded"
                        />
                        <button 
                            onClick={handleEmailLookup} 
                            className="ml-2 p-2 bg-[#507db8] hover:bg-[#3e608d] ring-1 ring-slate-300 text-white rounded"
                        >
                            {searching ? "Searching..." : "Check Email"}
                        </button>
                    </div>
                    {emailExists !== null && (
                        <p className="mt-5">
                            <p className={emailExists ? 'text-green-500' : 'text-red-500'}>
                                {emailExists ? 'Email is registered' : 'Email is not registered'}
                            </p>
                        </p>
                    )}
                </div>
                <div className="w-fit justify-self-center mt-20">
                    <span className="italic">Need to register?</span>
                    <a href="/register">
                        <button className="w-full py-3 bg-gray-950 text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300">Register Now</button>
                    </a>
                </div>
                
            </div>
        </div>
    );
}