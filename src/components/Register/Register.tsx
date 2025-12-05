import Navbar from '../HackathonS26/Navbar';
import { useEffect} from 'react';
import Form from './Form';

export default function Register() {

    useEffect(() => {
        document.body.style.backgroundColor = "#76A4C5";
    }, []);

    return (
        <div 
            className="min-h-screen hero-gradient relative overflow-hidden"
            style={{
                backgroundColor: '#76A4C5'
            }}
        >
            <div className="relative z-30">
                <Navbar dark />
            </div>

            <div className="relative z-20">
                <Form/>
            </div>
        </div>
    );
};