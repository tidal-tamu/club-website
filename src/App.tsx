import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import Hackathon from "./components/Hackathon/Hackathon";
import SponsorUs from "./components/Sponsor-Us/SponsorUs";
import Register from "./components/Register/Register";
import CheckRegistration from "./components/Register/CheckRegistration";

export default function App() {
    return (
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Hackathon />} />
                    <Route path="/sponsor-us" element={<SponsorUs />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/check-registration" element={<CheckRegistration />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
}
