import Navbar from '../Navbar';
import Headroom from 'react-headroom';
import Form from './Form';

export default function Register() {
    return (
        <>
            <div className="relative z-50 flex flex-col">
                <Headroom>
                    <Navbar dark/>
                </Headroom>
            </div>

            <Form/>
        </>
    );
};