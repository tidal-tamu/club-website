import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const initialFormData = {
    First_Name: "",
    Last_Name: "",
    Age: "",
    Email: "",
    Phone_Number: "",
    Emergency_Phone_Number: "",
    School: "",
    Country: "",
    Major: "",
    Grad_Year: "",
    Accepted_COC: false,
    Share_With_MLH: false,
    Allow_Emails: false,
    Submission_Time: "",
    Need_Team: "",
};

const schoolOptions = [
    "Texas A&M University",
    "Blinn College",
    "The University of Texas at Dallas",
    "The University of Texas at Austin",
    "Baylor University",
    "Texas Tech University",
    "University of North Texas",
    "University of Houston",
    "Other",
];

const majorOptions = [
    "Computer Science",
    "Computer Engineering",
    "Data Engineering / Data Science",
    "Electrical Engineering",
    "Mechanical Engineering",
    "General Engineering",
    "Computing",
    "Statistics",
    "Other (Engineering)",
    "Other (Non-Engineering)",
];

const countryOptions = [
    "United States",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua & Deps",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Rep",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo {Democratic Rep}",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland {Republic}",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea North",
    "Korea South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar, {Burma}",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "St Kitts & Nevis",
    "St Lucia",
    "Saint Vincent & the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];

export default function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState(initialFormData);
    //const [submittedData, setSubmittedData] = useState(initialFormData);

    const handleChange = (e: React.ChangeEvent) => {
        const { name, value, type } = e.target as
            | HTMLInputElement
            | HTMLSelectElement;
        if (type === "checkbox") {
            const { checked } = e.target as HTMLInputElement;
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        });

        setFormData({
            ...formData,
            Submission_Time: formattedTime,
        });
        console.log("Form Data Submitted:", {
            ...formData,
            submissionTime: formattedTime,
        });

        const toSend = new FormData(formRef.current!);
        toSend.append("Submission_Time", formattedTime);
        toSend.append("Allow_Emails", formData.Allow_Emails.toString());

        try {
            if (formData.Age && parseInt(formData.Age) < 18) {
                setErrorMessage("You must be 18 or older to register.");
                setSuccessMessage("");
                setIsSubmitting(false);
                return;
            }

            if (!formData.Email.includes("@")) {
                setErrorMessage("Please enter a valid email address.");
                setSuccessMessage("");
                setIsSubmitting(false);
                return;
            }
            if (!/^\+?[0-9\s\-()]{7,}$/.test(formData.Phone_Number)) {
                setErrorMessage("Please enter a valid phone number.");
                setSuccessMessage("");
                setIsSubmitting(false);
                return;
            }
            if (!/^\+?[0-9\s\-()]{7,}$/.test(formData.Emergency_Phone_Number)) {
                setErrorMessage(
                    "Please enter a valid emergency contact phone number."
                );
                setSuccessMessage("");
                setIsSubmitting(false);
                return;
            }
            if (formData.Grad_Year && !/^\d{4}$/.test(formData.Grad_Year)) {
                setErrorMessage("Please enter a valid graduation year.");
                setSuccessMessage("");
                setIsSubmitting(false);
                return;
            }

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbzURLu3w8-Yh8a9tA_FG8fr84dawUTIpkA6kWdVWVxX6qibuc3tBItgyp2rffUI21WE/exec",
                {
                    method: "POST",
                    body: toSend,
                }
            );

            if (response.ok) {
                const result = await response.json();
                if (result.status === "success") {
                    setSuccessMessage("Registration successful!");
                    setErrorMessage("");
                    console.log("Success:", result);
                    formRef.current?.reset();
                    setFormData({ ...initialFormData });
                } else {
                    setErrorMessage(result.message);
                    setSuccessMessage("");
                    console.error("Failed to submit:", result.message);
                }
            } else {
                console.error("Failed to submit. Please try again.", response);
                setErrorMessage("Submission failed. Please try again.");
                setSuccessMessage("");
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
        <div className="flex flex-col items-center justify-center min-h-screen py-20">
            <div className="w-11/12 sm:w-10/12 lg:w-[60vw] px-5 py-16 bg-black/20 backdrop-blur-sm rounded-2xl z-10 relative border border-white/20">
                <img
                    src="/icons/logos/tidal-white-transparent.png"
                    className="w-64 mx-auto pt-4 pb-5"
                />

                {successMessage ? (
                    <div className="justify-center justify-self-center items-center text-center pb-4">
                        <h1 className="text-green-400 text-center text-3xl font-bold pt-4">
                            {successMessage}
                        </h1>
                        <div className="justify-self-center text-center px-[15%]">
                            <h1 className="sm:text-lg pt-8 text-white">
                                Thank you for registering for TIDALHACK! Your
                                registration process is now complete. A
                                confirmation email has been sent to your
                                registered email address with all the details.
                                If you have any questions or would like to edit
                                your registration, please contact us at{" "}
                                <a
                                    href="mailto:tidaltamu@gmail.com"
                                    className="underline"
                                >
                                    tidaltamu@gmail.com
                                </a>{" "}
                                or reach out to an officer in our discord.
                            </h1>
                            {/* {<pre>{JSON.stringify(submittedData, null, 2)}</pre>} */}
                            <Link to="/hackathon">
                                <button className="p-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold mt-10 transition-all duration-300">
                                    {" "}
                                    Return To Home
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <form
                        className="flex flex-col space-y-7 px-1 sm:px-[15%]"
                        onSubmit={handleSubmit}
                        ref={formRef}
                    >
                        <h1 className="text-2xl sm:text-3xl font-semibold text-center pb-10 pt-2 text-white">
                            {" "}
                            TIDALHACK 2025 Registration{" "}
                        </h1>
                        <label className="flex flex-col gap-1">
                            <p className="text-white">
                                First Name{" "}
                                <span className="text-red-500">*</span>
                            </p>
                            <input
                                type="text"
                                name="First_Name"
                                placeholder="First Name"
                                className="p-3 border border-gray-300 rounded"
                                value={formData.First_Name}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-1">
                            <p className="text-white">
                                Last Name{" "}
                                <span className="text-red-500">*</span>
                            </p>
                            <input
                                type="text"
                                name="Last_Name"
                                placeholder="Last Name"
                                className="p-3 border border-gray-300 rounded"
                                value={formData.Last_Name}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-1">
                            <p className="text-white">
                                Age{" "}
                                <span className="text-gray-400 text-sm pl-1">
                                    ( You Must be 18 or older )
                                </span>{" "}
                                <span className="text-red-500">*</span>
                            </p>
                            <input
                                type="Age"
                                name="Age"
                                placeholder="Age"
                                className="p-3 border border-gray-300 rounded"
                                value={formData.Age}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-1">
                            <p className="text-white">
                                Email <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="Email"
                                placeholder="Email"
                                className="p-3 border border-gray-300 rounded"
                                value={formData.Email}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-1">
                            <p className="text-white">
                                Phone Number{" "}
                                <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="Phone_Number"
                                placeholder="Phone Number"
                                className="p-3 border border-gray-300 rounded"
                                value={formData.Phone_Number}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-1">
                            <p className="text-white">
                                Emergency Contact Phone Number{" "}
                                <span className="text-red-500">*</span>
                            </p>
                            <input
                                name="Emergency_Phone_Number"
                                placeholder="Phone Number"
                                className="p-3 border border-gray-300 rounded"
                                value={formData.Emergency_Phone_Number}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-1">
                            <p className="text-white">
                                Country of Residence{" "}
                                <span className="text-red-500">*</span>
                            </p>
                            <select
                                name="Country"
                                className="p-3 border border-gray-300 rounded"
                                value={formData.Country}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Country</option>
                                {countryOptions.map((country, index) => (
                                    <option key={index} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="flex flex-col gap-1">
                            <p className="text-white">
                                School <span className="text-red-500">*</span>
                            </p>
                            <select
                                name="School"
                                className="p-3 border border-gray-300 rounded"
                                value={formData.School}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select School</option>
                                {schoolOptions.map((school, index) => (
                                    <option key={index} value={school}>
                                        {school}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="flex flex-col gap-1">
                            <p className="text-white">
                                Major <span className="text-red-500">*</span>
                            </p>
                            <select
                                name="Major"
                                className="p-3 border border-gray-300 rounded"
                                value={formData.Major}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Major</option>
                                {majorOptions.map((major, index) => (
                                    <option key={index} value={major}>
                                        {major}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="flex flex-col gap-1">
                            <p className="text-white">
                                Graduation Year{" "}
                                <span className="text-red-500">*</span>
                            </p>
                            <input
                                type="text"
                                name="Grad_Year"
                                placeholder="Graduation Year"
                                className="p-3 border border-gray-300 rounded"
                                value={formData.Grad_Year}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-1">
                            <p className="text-white">
                                Do you already have a team?{" "}
                                <span className="text-red-500">*</span>
                            </p>
                            <select
                                name="Need_Team"
                                className="p-3 border border-gray-300 rounded"
                                value={formData.Need_Team}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select option</option>
                                <option value="Has a Team">
                                    Yes - I already have a team
                                </option>
                                <option value="Needs more Members">
                                    Yes - but would like additional members
                                </option>
                                <option value="Needs a Team">
                                    No - and I would like to be paired
                                </option>
                                <option value="Working Alone">
                                    No - and I would like to work alone
                                </option>
                            </select>
                        </label>
                        <div className="flex items-center text-sm">
                            <input
                                type="checkbox"
                                id="Accepted_COC"
                                name="Accepted_COC"
                                className="mr-3 size-4 sm:size-[13px]"
                                checked={formData.Accepted_COC}
                                onChange={handleChange}
                                required
                            />
                            <label
                                htmlFor="Accepted_COC"
                                className="text-white"
                            >
                                I have read and agree to the{" "}
                                <a
                                    href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                                    className="underline text-blue-400"
                                >
                                    MLH Code of Conduct
                                </a>
                                . <span className="text-red-500">*</span>
                            </label>
                        </div>

                        <div className="flex items-center text-sm">
                            <input
                                type="checkbox"
                                id="Share_With_MLH"
                                name="Share_With_MLH"
                                className="mr-3 size-4 sm:size-[13px]"
                                checked={formData.Share_With_MLH}
                                onChange={handleChange}
                                required
                            />
                            <label
                                htmlFor="Share_With_MLH"
                                className="text-white"
                            >
                                I authorize you to share my
                                application/registration information with Major
                                League Hacking for event administration,
                                ranking, and MLH administration in-line with the{" "}
                                <a
                                    href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                                    className="underline text-blue-400"
                                >
                                    MLH Privacy Policy{" "}
                                </a>
                                . I further agree to the terms of both the{" "}
                                <a
                                    href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
                                    className="underline text-blue-400"
                                >
                                    MLH Contest Terms and Conditions{" "}
                                </a>
                                and the{" "}
                                <a
                                    href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                                    className="underline text-blue-400"
                                >
                                    MLH Privacy Policy{" "}
                                </a>
                                . <span className="text-red-500">*</span>
                            </label>
                        </div>

                        <div className="flex items-center text-sm">
                            <input
                                type="checkbox"
                                id="Allow_Emails"
                                name="Allow_Emails"
                                className="mr-3 size-4 sm:size-[13px]"
                                checked={formData.Allow_Emails}
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="Allow_Emails"
                                className="text-white"
                            >
                                I authorize MLH to send me occasional emails
                                about relevant events, career opportunities, and
                                community announcements.
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Register"}
                        </button>
                        {successMessage && (
                            <p className="text-green-500 text-center mt-4">
                                {successMessage}
                            </p>
                        )}
                        {errorMessage && (
                            <p className="text-red-500 text-center mt-4">
                                {errorMessage}
                            </p>
                        )}

                        <p className="text-sm sm:text-base text-white">
                            Already Registered?{" "}
                            <a
                                href="/check-registration"
                                className="underline cursor-pointer text-blue-400"
                            >
                                Check your registration here
                            </a>
                            .
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
