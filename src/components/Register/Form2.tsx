import React, { useState, useRef } from 'react';

interface Form2Props {
    setCheckingRegistration: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialFormData = {
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
    Submission_Time: '',
    Need_Team: '',
}

const schoolOptions = [
    "Texas A&M University",
    "The University of Texas at Dallas",
    "The University of Texas at Austin",
    "Baylor University",
    "Texas Tech University",
    "Other"
];

const majorOptions = [
    "Computer Science",
    "Computer Engineering",
    "Data Engineering / Data Science",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Other (Engineering)",
    "Other (Non-Engineering)"
];

export default function Form2({ setCheckingRegistration }: Form2Props) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState(initialFormData);
    //const [submittedData, setSubmittedData] = useState(initialFormData);

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
        const formattedTime = currentTime.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    
        setFormData({
            ...formData,
            Submission_Time: formattedTime
        });
        console.log('Form Data Submitted:', { ...formData, submissionTime: formattedTime });

        const toSend = new FormData(formRef.current!);
        toSend.append('Submission_Time', formattedTime);
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
                if (result.status === 'success') {
                    setSuccessMessage("Registration successful!");
                    setErrorMessage("");
                    console.log("Success:", result);
                    formRef.current?.reset();
                } else {
                    setErrorMessage(result.message);
                    setSuccessMessage("");
                    console.error("Failed to submit:", result.message);
                }
            } else {
                console.error("Failed to submit. Please try again.", response);
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("Submission failed. Please try again.");
            setSuccessMessage("");
        } finally {
            setIsSubmitting(false);
            setFormData({ ...initialFormData });
        }
    };

    return (
        <div className="bg-black flex flex-col items-center justify-center">
            <video src="/bg_footage_tidal.mp4" autoPlay loop muted className="fixed top-0 left-0 w-full h-full object-cover z-1 hidden sm:inline"/>

            <div className="w-11/12 sm:w-10/12 lg:w-[60vw] px-5 py-16 my-20 bg-white rounded-2xl z-10 relative"> 
                <img src="/icons/logos/tidal-newblue.svg" className="w-64 mx-auto pt-4 pb-5" />
                
                {/* Form Fields: */}
                { successMessage ? (
                    <div className="justify-center justify-self-center items-center text-center pb-4">
                        <h1 className="text-green-500 text-center text-3xl font-bold pt-4">{successMessage}</h1>
                        <div className="justify-self-center text-center px-[15%]">
                            <h1 className="sm:text-lg pt-8">
                                Thank you for registering for TIDALHACK! Your registration process is now complete. 
                                We will email you a confirmation of your registration before the event. If you have any 
                                questions or would like to edit your registration, please contact us 
                                at <a href="mailto:tidaltamu@gmail.com" className="underline">tidaltamu@gmail.com</a> or reach out to an officer in our discord.</h1>
                            {/* {<pre>{JSON.stringify(submittedData, null, 2)}</pre>} */}
                            <a href="/">
                                <button className="p-4 rounded-xl bg-spaceBlack text-white mt-10 hover:bg-[#292828]"> return to home</button>
                            </a>
                        </div>
                    </div>
                ) :  (
                    <form className="flex flex-col space-y-7 px-1 sm:px-[15%]" onSubmit={handleSubmit} ref={formRef}>
                        <h1 className="text-2xl sm:text-3xl font-semibold text-center pb-10 pt-2"> TIDALHACK 2025 Registration </h1>
                        <label className='flex flex-col gap-1'>
                            <p>First Name <span className="text-red-500">*</span></p>
                            <input type="text" name="First_Name" placeholder="First Name" className="p-3 border border-gray-300 rounded" value={formData.First_Name} onChange={handleChange} required />
                        </label>

                        <label className='flex flex-col gap-1'>
                            <p>Last Name <span className="text-red-500">*</span></p>
                            <input type="text" name="Last_Name" placeholder="Last Name" className="p-3 border border-gray-300 rounded" value={formData.Last_Name} onChange={handleChange} required />
                        </label>

                        <label className='flex flex-col gap-1'>
                            <p>Age <span className="text-gray-500 text-sm pl-1">( You Must be 18 or older )</span> <span className="text-red-500">*</span></p>
                            <input type="Age" name="Age" placeholder="Age" className="p-3 border border-gray-300 rounded" value={formData.Age} onChange={handleChange} required />
                        </label>

                        <label className='flex flex-col gap-1'>
                            <p>Email <span className="text-red-500">*</span></p>
                            <input name="Email" placeholder="Email" className="p-3 border border-gray-300 rounded" value={formData.Email} onChange={handleChange} required />
                        </label>

                        <label className='flex flex-col gap-1'>
                            <p>Phone Number <span className="text-red-500">*</span></p>
                            <input name="Phone_Number" placeholder="Phone Number" className="p-3 border border-gray-300 rounded" value={formData.Phone_Number} onChange={handleChange} required />
                        </label>

                        <label className='flex flex-col gap-1'>
                            <p>Emergency Contact Phone Number <span className="text-red-500">*</span></p>
                            <input name="Emergency_Phone_Number" placeholder="Phone Number" className="p-3 border border-gray-300 rounded" value={formData.Emergency_Phone_Number} onChange={handleChange} required />
                        </label>

                        <label className='flex flex-col gap-1'>
                            <p>School <span className="text-red-500">*</span></p>
                            <select name="School" className="p-3 border border-gray-300 rounded" value={formData.School} onChange={handleChange} required>
                                <option value="">Select School</option>
                                {schoolOptions.map((school, index) => (
                                    <option key={index} value={school}>{school}</option>
                                ))}
                            </select>
                        </label>

                        <label className='flex flex-col gap-1'>
                            <p>Major <span className="text-red-500">*</span></p>
                            <select name="Major" className="p-3 border border-gray-300 rounded" value={formData.Major} onChange={handleChange} required>
                                <option value="">Select Major</option>
                                {majorOptions.map((major, index) => (
                                    <option key={index} value={major}>{major}</option>
                                ))}
                            </select>
                        </label>

                        <label className='flex flex-col gap-1'>
                            <p>Graduation Year <span className="text-red-500">*</span></p>
                            <input type="text" name="Grad_Year" placeholder="Graduation Year" className="p-3 border border-gray-300 rounded" value={formData.Grad_Year} onChange={handleChange} required />
                        </label>

                        <label className='flex flex-col gap-1'>
                            <p>Do you already have a team? <span className="text-red-500">*</span></p>
                            <select name="Need_Team" className="p-3 border border-gray-300 rounded" value={formData.Need_Team} onChange={handleChange} required>
                                <option value="">Select option</option>
                                <option value="Has a Team">Yes - I already have a team</option>
                                <option value="Needs a Team">No - and I would like to be paired</option>
                                <option value="Working Alone">No - and I would like to work alone</option>
                            </select>
                        </label>
                        <div className="flex items-center">
                            <input type="checkbox" name="Accepted_COC" className="mr-3 size-4 sm:size-[13px]" checked={formData.Accepted_COC} onChange={handleChange} required />
                            <label htmlFor="Accepted_COC">I have read and agree to the <a href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md' className="underline text-blue-500">MLH Code of Conduct</a>. <span className="text-red-500">*</span></label>
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" name="Share_With_MLH" className="mr-3 size-4 sm:size-[13px]" checked={formData.Share_With_MLH} onChange={handleChange} required />
                            <label htmlFor="Share_With_MLH">I authorize you to share my application/registration information with Major League Hacking for event
                                    administration, ranking, and MLH administration in-line with the <a href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md' className="underline text-blue-500">MLH Privacy Policy </a>.
                                    I further agree to the terms of both the <a href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md' className="underline text-blue-500">MLH Contest Terms and Conditions </a>
                                    and the <a href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md' className="underline text-blue-500">MLH Privacy Policy </a>. <span className="text-red-500">*</span></label>
                        </div>
                        
                        <div className="flex items-center">
                            <input type="checkbox" name="Allow_Emails" className="mr-3 size-4 sm:size-[13px]" checked={formData.Allow_Emails} onChange={handleChange} />
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

                        <p>Already Registered? <a onClick={() => setCheckingRegistration(true)} className="underline cursor-pointer">Check your registration here</a>.</p>
                </form>
                )}
                
            </div>
        </div>
    );
}

