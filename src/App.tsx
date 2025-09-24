import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import Hackathon from "./components/HackathonS25/Hackathon";
import SponsorUs from "./components/Sponsor-Us/SponsorUs";
import CheckRegistration from "./components/Register/CheckRegistration";
import RegistrationClosed from "./components/Register/RegistrationClosed";

export default function App() {
    return (
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hackathon" element={<Hackathon />} />
                    <Route path="/sponsor-us" element={<SponsorUs />} />
                    <Route path="/register" element={<RegistrationClosed />} />
                    <Route path="/check-registration" element={<CheckRegistration />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
}
