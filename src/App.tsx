import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <React.StrictMode>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
}
