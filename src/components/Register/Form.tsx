import DatePicker from 'react-datepicker';
import videobg from '../../../dist/assets/bg_footage_tidal.mp4';
import logo from '/icons/logos/tidal-blueblack.png';
import { useState } from 'react';

export default function Form() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
        <div className="bg-black flex flex-col h-full items-center justify-center">
            {/* <video src={videobg} autoPlay loop muted className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"/> */}

            <div className="w-[50vw] py-10 my-20 bg-white rounded-lg"> 
                <img src={logo} className="w-[16vw] mx-auto pt-10 pb-5" />

                <h1 className="text-3xl font-semibold text-center pb-10"> TIDALHACK 2025 Registration </h1>

                <form className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-24">
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
                                <label htmlFor={field.toLowerCase().replace(/\s/g, '-')} className="block text-sm font-medium">
                                    {field}
                                </label>
                                <input
                                    type="text"
                                    id={field.toLowerCase().replace(/\s/g, '-')}
                                    name={field.toLowerCase().replace(/\s/g, '-')}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                        ))}

                        <div>
                            <label htmlFor="question" className="block text-sm font-medium">
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
                        {/* Date Field */}
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium">
                                Date
                            </label>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                className="w-full border border-gray-300 rounded-md p-2"
                                dateFormat="yyyy/MM/dd"
                                placeholderText="Select a date"
                            />
                        </div>
                    </div>
                </form>

            </div>

        </div>
    );
}