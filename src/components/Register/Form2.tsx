import React, { useState, useRef } from 'react';

export default function Form2() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [formData, setFormData] = useState({
        First_Name: '',
        Last_Name: '',
        Age: '',
        Email: '',
        Phone_Number: '',
        Emergency_Phone_Number: '',
        School: '',
        Major: '',
        Grad_Year: '',
        Accepted_COC: false,
        Share_With_MLH: false,
        Allow_Emails: false,
        Submission_Time: null as Date | null,
    });

    const handleChange = (e: React.ChangeEvent) => {
        const { name, value, type } = e.target as HTMLInputElement | HTMLSelectElement;
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setFormData({
                ...formData,
                [name]: checked
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const currentTime = new Date();
        setFormData({
            ...formData,
            Submission_Time: currentTime
        });
        console.log('Form Data Submitted:', { ...formData, submissionTime: currentTime });

        const toSend = new FormData(formRef.current!);
        toSend.append('Submission_Time', currentTime.toISOString());
        toSend.append('Allow_Emails', formData.Allow_Emails.toString());

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbw9dRYgi6lfDCikYZyDA87DyP35tQ8TOnTRH3mGCTzeMJh2cJXob51rfQ_BYzx24qZXIA/exec",
                {
                    method: "POST",
                    body: toSend,
                }
            );

            if (response.ok) {
                const result = await response.json();
                setSuccessMessage("Registration successful!");
                setErrorMessage("");
                console.log("Success:", result);
                formRef.current?.reset();
                //setFormData({ ...initialFormData, Allow_Emails: false }); // Reset form data state
            } else {
                console.error("Failed to submit. Please try again.", response);
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
            <video src="/bg_footage_tidal.mp4" autoPlay loop muted className="fixed top-0 left-0 w-full h-full object-cover z-1"/>

            <div className="w-10/12 lg:w-[60vw] px-5 py-16 my-20 bg-white rounded-2xl z-10 relative"> 
                <img src="/icons/logos/tidal-newblue.svg" className="w-64 mx-auto pt-4 pb-5" />
                <h1 className="text-3xl font-semibold text-center pb-16 pt-2"> TIDALHACK 2025 Registration </h1>
                
                {/* Form Fields: */}
                <form className="flex flex-col space-y-7 px-[15%]" onSubmit={handleSubmit} ref={formRef}>
                    
                    <label className='flex flex-col gap-1'>
                        <p>First Name <span className="text-red-500">*</span></p>
                        <input type="text" name="First_Name" placeholder="First Name" className="p-3 border border-gray-300 rounded" value={formData.First_Name} onChange={handleChange} required />
                    </label>

                    <label className='flex flex-col gap-1'>
                        <p>Last Name <span className="text-red-500">*</span></p>
                        <input type="text" name="Last_Name" placeholder="Last Name" className="p-3 border border-gray-300 rounded" value={formData.Last_Name} onChange={handleChange} required />
                    </label>

                    <label className='flex flex-col gap-1'>
                        <p>Age <span className="text-red-500">*</span></p>
                        <select name="Age" className="p-3 border border-gray-300 rounded" value={formData.Age} onChange={handleChange} required>
                            <option value="">Select Age</option>
                            {[...Array(9)].map((_, i) => (
                                <option key={i} value={18 + i}>{18 + i}</option>
                            ))}
                        </select>
                    </label>

                    <label className='flex flex-col gap-1'>
                        <p>Email <span className="text-red-500">*</span></p>
                        <input type="email" name="Email" placeholder="Email" className="p-3 border border-gray-300 rounded" value={formData.Email} onChange={handleChange} required />
                    </label>

                    <label className='flex flex-col gap-1'>
                        <p>Phone Number <span className="text-red-500">*</span></p>
                        <input type="tel" name="Phone_Number" placeholder="Phone Number" className="p-3 border border-gray-300 rounded" value={formData.Phone_Number} onChange={handleChange} required />
                    </label>

                    <label className='flex flex-col gap-1'>
                        <p>Emergency Contact Phone Number <span className="text-red-500">*</span></p>
                        <input type="tel" name="Emergency_Phone_Number" placeholder="Phone Number" className="p-3 border border-gray-300 rounded" value={formData.Emergency_Phone_Number} onChange={handleChange} required />
                    </label>

                    <label className='flex flex-col gap-1'>
                        <p>School <span className="text-red-500">*</span></p>
                        <select name="School" className="p-3 border border-gray-300 rounded" value={formData.School} onChange={handleChange} required>
                            <option value="">Select School</option>
                            <option value="Texas A&M University">Texas A&M University</option>
                            <option value="The University of Texas at Dallas">The University of Texas at Dallas</option>
                            <option value="The University of Texas at Austin">The University of Texas at Austin</option>
                            <option value="Baylor University">Baylor University</option>
                            <option value="Texas Tech University">Texas Tech University</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>

                    <label className='flex flex-col gap-1'>
                        <p>Major <span className="text-red-500">*</span></p>
                        <select name="Major" className="p-3 border border-gray-300 rounded" value={formData.Major} onChange={handleChange} required>
                            <option value="">Select Major</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Computer Engineering">Computer Engineering</option>
                            <option value="Data Engineering / Data Science">Data Engineering / Data Science</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                            <option value="Other (Engineering)">Other (Engineering)</option>
                            <option value="Other (Non-Engineering)">Other (Non-Engineering)</option>
                        </select>
                    </label>

                    <label className='flex flex-col gap-1'>
                        <p>Graduation Year <span className="text-red-500">*</span></p>
                        <input type="text" name="Grad_Year" placeholder="Graduation Year" className="p-3 border border-gray-300 rounded" value={formData.Grad_Year} onChange={handleChange} required />
                    </label>

                    <div className="flex items-center">
                        <input type="checkbox" name="Accepted_COC" className="mr-3" checked={formData.Accepted_COC} onChange={handleChange} required />
                        <label htmlFor="Accepted_COC">I have read and agree to the <a href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md' className="underline text-blue-500">MLH Code of Conduct</a>. <span className="text-red-500">*</span></label>
                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" name="Share_With_MLH" className="mr-3" checked={formData.Share_With_MLH} onChange={handleChange} required />
                        <label htmlFor="Share_With_MLH">I authorize you to share my application/registration information with Major League Hacking for event
                             administration, ranking, and MLH administration in-line with the <a href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md' className="underline text-blue-500">MLH Privacy Policy </a>.
                             I further agree to the terms of both the <a href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md' className="underline text-blue-500">MLH Contest Terms and Conditions </a>
                             and the <a href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md' className="underline text-blue-500">MLH Privacy Policy </a>. <span className="text-red-500">*</span></label>
                    </div>
                    
                    <div className="flex items-center">
                        <input type="checkbox" name="Allow_Emails" className="mr-3" checked={formData.Allow_Emails} onChange={handleChange} />
                        <label htmlFor="Allow_Emails">I authorize MLH to send me occasional emails about relevant events, career opportunities, and community announcements.</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-8 py-3 bg-gray-950 text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Register"}
                    </button>
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