import Navbar from '../Navbar';
import Headroom from 'react-headroom';
import { useEffect, useState } from 'react';
import Form2 from './Form2';
import CheckRegistration from './CheckRegistration';
//import ComingSoon from './ComingSoon';

export default function Register() {
    const [checkingRegistration, setCheckingRegistration] = useState(false); 

    useEffect(() => {
            document.body.style.backgroundColor = "#121111";
        }, []);

    return (
        <>
            <div className="relative z-50 flex flex-col">
                <Headroom>
                    <Navbar dark/>
                </Headroom>
            </div>
            {checkingRegistration ? <CheckRegistration/> : <Form2 setCheckingRegistration={setCheckingRegistration}/>}
        </>
    );
};