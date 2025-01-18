import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import videobg from '../../../dist/assets/bg_footage_tidal.mp4';
import logo from '/icons/logos/tidal-blueblack.png';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Theme CSS
import 'primereact/resources/primereact.min.css'; // Core PrimeReact CSS
import 'primeicons/primeicons.css'; // Icons

export default function Form() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
        <div className="bg-black flex flex-col items-center justify-center">
            <video src={videobg} autoPlay loop muted className="fixed top-0 left-0 w-full h-full object-cover z-1"/>

            <div className="w-[60vw] py-16 my-20 bg-white rounded-lg z-10 relative"> 
                <img src={logo} className="w-[16vw] mx-auto pt-10 pb-5" />

                <h1 className="text-3xl font-semibold text-center pb-16"> TIDALHACK 2025 Registration </h1>

                <form>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-24">
                        {/* Left Column */}
                        <div className="flex flex-col gap-5">
                            {[
                                'First Name',
                                'Last Name',
                                'Email',
                                'Phone Number',
                                'School',
                                'Major',
                                'Year',
                            ].map((field) => (
                                <div key={field}>
                                    <label className="block text-base font-normal">
                                        {field}
                                    </label>
                                    <input
                                        type="text"
                                        id={field.toLowerCase().replace(/\s/g, '-')}
                                        name={field.toLowerCase().replace(/\s/g, '-')}
                                        className="w-[20vw] border border-gray-300 rounded-md p-2"
                                    />
                                </div>
                            ))}

                            <div>
                                <label className="block text-sm font-medium">
                                    Have you participated in TIDALHACK before? (Yes/No)
                                </label>
                                <select
                                    id="question"
                                    name="question"
                                    className="w-full border border-gray-300 rounded-md p-2"
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-5">
                            <div>
                                <label htmlFor="date" className="block text-base font-normal">
                                    Date of Registration
                                </label>
                                <Calendar
                                    id="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.value || null)}
                                    showIcon
                                    dateFormat="yy/mm/dd"
                                    className="w-full border border-gray-300 rounded-md p-2"
                                    placeholder="Select a date"
                                    inline
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10 px-24 py-5">
                        <div>
                            {['Team Member 1', 'Team Member 2', 'Team Member 3','Emergency Contact'].map((field, index) => (
                                <div key={field} className="mb-4">
                                    <label className="block text-base font-normal">
                                        {field} Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md p-2"
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            {['Team Member 1 Grade', 'Team Member 2 Grade', 'Team Member 3 Grade', 'Emergency Phone'].map((field, index) => (
                                <div key={field} className="mb-4">
                                    <label className="block text-base font-normal">
                                        {field} Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md p-2"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="px-24 py-5 space-y-8">
                        {['I Agree to the TIDALHACK Code of Conduct', 
                        'I will show up on March 8th and 9th', 
                        'Please confirm that you are 18 years of age'].map((field, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <input
                                    required
                                    type="checkbox"
                                    id={`checkbox-${index}`}
                                    className="border border-gray-300 rounded-md w-[20px] h-[20px]"
                                />
                                <label htmlFor={`checkbox-${index}`} className="text-base font-normal">
                                    {field}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-10 px-24">
                        <div></div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-gray-950 text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
