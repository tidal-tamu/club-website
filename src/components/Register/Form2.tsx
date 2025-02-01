import React, { useState, useRef } from 'react';

export default function Form2() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        phone: '',
        emergencyPhone: '',
        school: '',
        major: '',
        gradYear: '',
        acceptedCOC: false,
        shareWithMLH: false,
        allowEmails: false,
        submissionTime: null as Date | null,
    });
    const [error, setError] = useState('');

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

        setError('');
        const currentTime = new Date();
        setFormData({
            ...formData,
            submissionTime: currentTime
        });
        console.log('Form Data Submitted:', { ...formData, submissionTime: currentTime });
        
        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxLCAh7KTTwNEv1lrn8cXelI6YVLzogXESLMv4JeZd2LeLaWtcHLi5oVYbLp8nazmZkXA/exec",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                const result = await response.json();
                setSuccessMessage("Registration successful!");
                setErrorMessage("");
                console.log("Success:", result);
                formRef.current?.reset();
            } else {
                console.error("Failed to submit. Please try again.");
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
                
                <form className="flex flex-col space-y-7 px-[15%]" onSubmit={handleSubmit} ref={formRef}>
                    {error && <p className="text-red-500">{error}</p>}
                    <label className='flex flex-col gap-1'>
                        <p>First Name <span className="text-red-500">*</span></p>
                        <input type="text" name="firstName" placeholder="First Name" className="p-3 border border-gray-300 rounded" value={formData.firstName} onChange={handleChange} required />
                    </label>
                    <label className='flex flex-col gap-1'>
                        <p>Last Name <span className="text-red-500">*</span></p>
                        <input type="text" name="lastName" placeholder="Last Name" className="p-3 border border-gray-300 rounded" value={formData.lastName} onChange={handleChange} required />
                    </label>
                    <label className='flex flex-col gap-1'>
                        <p>Age <span className="text-red-500">*</span></p>
                        <select name="age" className="p-3 border border-gray-300 rounded" value={formData.age} onChange={handleChange} required>
                            <option value="">Select Age</option>
                            {[...Array(9)].map((_, i) => (
                                <option key={i} value={18 + i}>{18 + i}</option>
                            ))}
                        </select>
                    </label>
                    <label className='flex flex-col gap-1'>
                        <p>Email <span className="text-red-500">*</span></p>
                        <input type="email" name="email" placeholder="Email" className="p-3 border border-gray-300 rounded" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label className='flex flex-col gap-1'>
                        <p>Phone Number <span className="text-red-500">*</span></p>
                        <input type="tel" name="phone" placeholder="Phone Number" className="p-3 border border-gray-300 rounded" value={formData.phone} onChange={handleChange} required />
                    </label>
                    <label className='flex flex-col gap-1'>
                        <p>Emergency Contact Phone Number <span className="text-red-500">*</span></p>
                        <input type="tel" name="emergencyPhone" placeholder="Phone Number" className="p-3 border border-gray-300 rounded" value={formData.emergencyPhone} onChange={handleChange} required />
                    </label>
                    <label className='flex flex-col gap-1'>
                        <p>School <span className="text-red-500">*</span></p>
                        <select name="school" className="p-3 border border-gray-300 rounded" value={formData.school} onChange={handleChange} required>
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
                        <select name="major" className="p-3 border border-gray-300 rounded" value={formData.major} onChange={handleChange} required>
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
                        <input type="text" name="gradYear" placeholder="Graduation Year" className="p-3 border border-gray-300 rounded" value={formData.gradYear} onChange={handleChange} required />
                    </label>
                    <div className="flex items-center">
                        <input type="checkbox" name="acceptedCOC" className="mr-3" checked={formData.acceptedCOC} onChange={handleChange} required />
                        <label htmlFor="acceptedCOC">I have read and agree to the <a href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md' className="underline text-blue-500">MLH Code of Conduct</a>. <span className="text-red-500">*</span></label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" name="shareWithMLH" className="mr-3" checked={formData.shareWithMLH} onChange={handleChange} required />
                        <label htmlFor="shareWithMLH">I authorize you to share my application/registration information with Major League Hacking for event
                             administration, ranking, and MLH administration in-line with the <a href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md' className="underline text-blue-500">MLH Privacy Policy </a>.
                             I further agree to the terms of both the <a href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md' className="underline text-blue-500">MLH Contest Terms and Conditions </a>
                             and the <a href='https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md' className="underline text-blue-500">MLH Privacy Policy </a>. <span className="text-red-500">*</span></label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" name="allowEmails" className="mr-3" checked={formData.allowEmails} onChange={handleChange} />
                        <label htmlFor="allowEmails">I authorize MLH to send me occasional emails about relevant events, career opportunities, and community announcements.</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-8 py-3 bg-gray-950 text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Register"}
                        </button>
                </form>
            </div>
        </div>
    );
}