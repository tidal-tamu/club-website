import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import Hackathon from "./components/Hackathon/Hackathon";

export default function App() {
    return (
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/club-website/" element={<Home />} />
                    <Route path="/club-website/hackathon" element={<Hackathon />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
}
