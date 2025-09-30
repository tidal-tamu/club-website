import Navbar from '../HackathonF25/Navbar';
import { useEffect} from 'react';
import Form from './Form';
import tidalBackground from "/s25/tidal-background.png";
import "./tidal-effects.css";

export default function Register() {

    useEffect(() => {
        document.body.style.backgroundColor = "#121111";
    }, []);

    return (
        <div 
            className="min-h-screen hero-gradient relative overflow-hidden"
            style={{
                backgroundImage: `url(${tidalBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute inset-0 bg-tidal-deep/70 backdrop-blur-[1px]" />
            
            <div className="relative z-30">
                <Navbar dark />
            </div>

            <div className="relative z-20">
                <Form/>
            </div>
        </div>
    );
};