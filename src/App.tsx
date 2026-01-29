import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Home from "./components/Home/Home";
import HackathonS25 from "./components/HackathonS25/Hackathon";
import HackathonF25 from "./components/HackathonF25/Hackathon";
import SponsorUs from "./components/Sponsor-Us/SponsorUs";
import CheckRegistration from "./components/Register/CheckRegistration";
import Register from "./components/Register/Register";

const HackathonS26 = lazy(() => import("./components/HackathonS26/Hackathon"));

export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsor-us" element={<SponsorUs />} />

          <Route
            path="/hackathon"
            element={
              <Suspense fallback={<div className="min-h-screen bg-[#77A5C6]" />}>
                <HackathonS26 />
              </Suspense>
            }
          />
          <Route
            path="/HackathonS26"
            element={
              <Suspense fallback={<div className="min-h-screen bg-[#77A5C6]" />}>
                <HackathonS26 />
              </Suspense>
            }
          />
          <Route path="/HackathonS25" element={<HackathonS25 />} />
          <Route path="/HackathonF25" element={<HackathonF25 />} />

          <Route path="/register" element={<Register />} />
          <Route
            path="/check-registration"
            element={<CheckRegistration />}
          />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
