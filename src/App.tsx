import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import HackathonS26 from "./components/HackathonS26/Hackathon";
import HackathonS25 from "./components/HackathonS25/Hackathon";
import HackathonF25 from "./components/HackathonF25/Hackathon";
import SponsorUs from "./components/Sponsor-Us/SponsorUs";
import CheckRegistration from "./components/Register/CheckRegistration";
import RegistrationClosed from "./components/Register/RegistrationClosed";
// import Register from "./components/Register/Register";
import LiveSchedule from "./components/Schedule/LiveSchedule";

export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsor-us" element={<SponsorUs />} />

          <Route path="/hackathon" element={<HackathonS26 />} />
          <Route path="/HackathonS26" element={<HackathonS26 />} />
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
