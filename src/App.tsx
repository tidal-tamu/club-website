import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import Hackathon from "./components/Hackathon/Hackathon";

export default function App() {
    return (
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hackathon" element={<Hackathon />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
}
