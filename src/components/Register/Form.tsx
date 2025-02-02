import React, { useRef, useState } from 'react';
import { Calendar } from 'primereact/calendar';
import videobg from '/bg_footage_tidal.mp4';
import logo from '/icons/logos/tidal-blueblack.png';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Theme CSS
import 'primereact/resources/primereact.min.css'; // Core PrimeReact CSS
import 'primeicons/primeicons.css'; // Icons

export default function Form() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(formRef.current!);

        if (selectedDate) {
            formData.append("Date", selectedDate.toISOString().split('T')[0]);
        }

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbzZssx30TWuJBvIBc17OjlkdXzHF_m_2iFIYXdMj4P0mIhPCbrk6jKat_8Me4a7lsytCA/exec",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (response.ok) {
                const result = await response.json();
                setSuccessMessage("Registration successful!");
                setErrorMessage("");
                console.log("Success:", result);
                formRef.current?.reset();
                setSelectedDate(null);
            } else {
                throw new Error("Failed to submit. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("Submission failed. Please try again.");
            setSuccessMessage("");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-black flex flex-col items-center justify-center">
            <video src={videobg} autoPlay loop muted className="fixed top-0 left-0 w-full h-full object-cover z-1"/>

            <div className="w-[60vw] py-16 my-20 bg-white rounded-lg z-10 relative"> 
                <img src={logo} className="w-[16vw] mx-auto pt-10 pb-5" />

                <h1 className="text-3xl font-semibold text-center pb-16"> TIDALHACK 2025 Registration </h1>

                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-24">
                        {/* Left Column */}
                        <div className="flex flex-col gap-5"> 
                            {[
                                ['First Name', 'First_Name'],
                                ['Last Name', 'Last_Name'],
                                ['Email', 'Email'],
                                ['Phone Number', 'Phone_Number'],
                                ['School', 'School'],
                                ['Major', 'Major'],
                                ['Year', 'Year'],
                            ].map((field) => (
                                <div key={field[0]}>
                                    <label className="block text-base font-normal">
                                        {field[0]}
                                    </label>
                                    <input
                                        type="text"
                                        id={field[0].toLowerCase().replace(/\s/g, '-')}
                                        name={field[1]}
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
                                    name="Participated"
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
                                    name='Date'
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
                            {[['Team Member 1', 'TM1_Name'], 
                                ['Team Member 2', 'TM2_Name'] ,
                                ['Team Member 3', 'TM3_Name'],
                                ['Emergency Contact', 'EC_Name']
                            ].map((field) => (
                                <div key={field[0]} className="mb-4">
                                    <label className="block text-base font-normal">
                                        {field[0]} Name
                                    </label>
                                    <input
                                        name={field[1]}
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md p-2"
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            {[['Team Member 1', 'TM1_Grade'], 
                                ['Team Member 2', 'TM1_Grade'], 
                                ['Team Member 3', 'TM1_Grade'],
                                ['Emergency Contact', 'EC_Number'],
                            ].map((field) => (
                                <div key={field[0]} className="mb-4">
                                    <label className="block text-base font-normal">
                                        {field[0]} Phone Number
                                    </label>
                                    <input
                                        name={field[1]}
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
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Register"}
                            </button>
                        </div>
                    </div>
                    {successMessage && (
                        <p className="text-green-500 text-center mt-4">{successMessage}</p>
                    )}
                    {errorMessage && (
                        <p className="text-red-500 text-center mt-4">{errorMessage}</p>
                    )}
                </form>
            </div>
        </div>
    );
}
