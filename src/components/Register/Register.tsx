import Navbar from '../Navbar';
import Headroom from 'react-headroom';
import Form from './Form';

export default function Register() {
    return (
        <>
            <div className="relative z-10 flex flex-col">
                <Headroom>
                    <Navbar/>
                </Headroom>
            </div>

            <Form/>
        </>
    );
};