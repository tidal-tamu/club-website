import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { lazy } from "react";
import Home from "./components/Home/Home";
import HackathonS25 from "./components/HackathonS25/Hackathon";
import HackathonF25 from "./components/HackathonF25/Hackathon";
import LiveSchedule from "./components/Schedule/LiveSchedule";
import SponsorUs from "./components/Sponsor-Us/SponsorUs";
import CheckRegistration from "./components/Register/CheckRegistration";
import Register from "./components/Register/Register";
import RedirectExternal from "./lib/RedirectExternal";

const HackathonS26 = lazy(() => import("./components/HackathonS26/Hackathon"));

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
          <Route path="/live-schedule" element={<LiveSchedule />} />

          <Route path="/register" element={<Register />} />
          <Route
            path="/check-registration"
            element={<CheckRegistration />}
          />
          <Route
            path="/discord"
            element={
              <RedirectExternal url="https://tx.ag/tidaldiscord" />
            }
          />
          <Route
            path="/hacker-guide"
            element={
              <RedirectExternal url="/hacker-guide.pdf" />
            }
          />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
