import React, { useEffect, useState } from 'react';
import Navbar from '../HackathonF25/Navbar';
import tidalBackground from "/s25/tidal-background.png";
import "./tidal-effects.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Theme CSS
import 'primereact/resources/primereact.min.css'; // Core PrimeReact CSS
import 'primeicons/primeicons.css'; // Icons

export default function CheckRegistration() {
    const [lookupEmail, setLookupEmail] = useState('');
    const [searching, setSearching] = useState(false);
    const [emailExists, setEmailExists] = useState<boolean | null>(null);

    useEffect(() => {
        document.body.style.backgroundColor = "#121111";
    }, []);

    const handleLookupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLookupEmail(e.target.value);
    };

    const handleEmailLookup = async () => {
        setSearching(true);
        try {
            const response = await fetch(`https://script.google.com/macros/s/AKfycbzNhPbPmwliyMO59syxbdMglV2cH7lOgpld9MVvvu86PYbmYvo492l9JHo6UxfLvSAkgQ/exec?email=${lookupEmail}`);
            const result = await response.json();
            setEmailExists(result.exists);
        } catch (error) {
            alert('Error: ' + error);
        } finally {
            setSearching(false);
        }
    };

    return (
        <div 
            className="min-h-screen hero-gradient relative overflow-hidden"
            style={{
                backgroundImage: `url(${tidalBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Background overlay for better text contrast */}
            <div className="absolute inset-0 bg-tidal-deep/70 backdrop-blur-[1px]" />
            
            {/* Navigation */}
            <div className="relative z-30">
                <Navbar dark />
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen py-20">
                <div className="w-11/12 sm:w-10/12 lg:w-[60vw] px-5 py-16 bg-black/20 backdrop-blur-sm rounded-2xl z-10 relative border border-white/20">
                    <img src="/icons/logos/tidal-white-transparent.png" className="w-64 mx-auto pt-4 pb-5" />
                    <h1 className="text-2xl sm:text-3xl font-semibold text-center pb-10 pt-2 text-white"> TIDALHACK 2025 Registration Check </h1>
                    <div className="justify-self-center px-1 sm:px-[15%]">
                    <h2 className="text-xl mt-8 mb-6 text-white"> Check Your Registration Status Here: </h2>
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <input
                            type="email"
                            value={lookupEmail}
                            onChange={handleLookupChange}
                            placeholder="Enter your email"
                            className="flex-1 p-3 border border-gray-300 rounded bg-white/90 text-black placeholder-gray-600"
                        />
                        <button
                            onClick={handleEmailLookup}
                            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            {searching ? "Searching..." : "Check Email"}
                        </button>
                    </div>
                    {emailExists !== null && (
                        <div className="mt-6 p-4 rounded-xl bg-black/30 border border-white/20">
                            <p className={emailExists ? 'text-green-400 text-center text-lg font-semibold' : 'text-red-400 text-center text-lg font-semibold'}>
                                {emailExists ? '✅ Email is registered!' : '❌ Email is not registered'}
                            </p>
                        </div>
                    )}
                </div>
                <div className="w-full px-1 sm:px-[15%] mt-12">
                    <div className="text-center">
                        <p className="text-white mb-4 italic">Need to register?</p>
                        <a href="/register">
                            <button className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">Register Now</button>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}