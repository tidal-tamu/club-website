import Navbar from '../Navbar';
import Headroom from 'react-headroom';
import { useEffect} from 'react';
import Form from './Form';

export default function Register() {

    useEffect(() => {
        document.body.style.backgroundColor = "#121111";
    }, []);

    return (
        <>
            <div className="relative z-50 flex flex-col">
                <Headroom>
                    <Navbar dark />
                </Headroom>
            </div>
            <Form/>
        </>
    );
};